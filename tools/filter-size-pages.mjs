#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = path.join(root, "data", "filter-sizes.json");
const sizeDirectory = path.join(root, "filter-sizes");
const sitemapPath = path.join(root, "sitemap.xml");
const runtimePath = path.join(root, "assets", "js", "script.js");
const manifest = JSON.parse(fs.readFileSync(dataPath, "utf8"));
const errors = [];
const warnings = [];

function fail(message) { errors.push(message); }
function warn(message) { warnings.push(message); }
function decodeHtml(value) {
  return value.replaceAll("&amp;", "&").replaceAll("&quot;", "\"").replaceAll("&#39;", "'");
}
function firstMatch(html, expression, label, filename) {
  const match = html.match(expression);
  if (!match) {
    fail(`${filename}: missing ${label}`);
    return "";
  }
  return decodeHtml(match[1].trim());
}
function countMatches(value, expression) { return [...value.matchAll(expression)].length; }
function productionPath(record) { return path.join(sizeDirectory, `${record.slug}.html`); }
function expectedCanonical(record) { return `${manifest.siteBaseUrl}/filter-sizes/${record.slug}.html`; }
function readAffiliateTag() {
  const source = fs.readFileSync(runtimePath, "utf8");
  const match = source.match(/const\s+amazonAffiliateTag\s*=\s*["']([^"']+)["']/);
  if (!match) throw new Error("Unable to discover amazonAffiliateTag from assets/js/script.js");
  return match[1];
}
function amazonUrl(query, tag) {
  return `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${encodeURIComponent(tag)}`;
}
function stripHtml(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ")
    .toLowerCase().replace(/\b\d{1,2}x\d{1,2}x\d\b/g, "SIZE")
    .replace(/[^a-z]+/g, " ").replace(/\s+/g, " ").trim();
}
function visibleText(fragment) {
  return decodeHtml(fragment.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}
function resolveLocalHref(href, sourceFile) {
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  if (/^(https?:|mailto:|tel:|javascript:)/i.test(clean)) return null;
  if (clean.startsWith("/")) {
    const relative = clean.slice(1);
    return path.join(root, relative.endsWith("/") ? relative + "index.html" : relative);
  }
  return path.resolve(path.dirname(sourceFile), clean.endsWith("/") ? clean + "index.html" : clean);
}
function validateHtmlContracts(html, file, filename) {
  const ids = [...html.matchAll(/\sid="([^"]+)"/gi)].map((match) => match[1]);
  for (const id of new Set(ids)) if (ids.filter((value) => value === id).length > 1) fail(`${filename}: duplicate id ${id}`);
  const jsonLd = [...html.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((match) => {
    try { return JSON.parse(match[1]); } catch (error) { fail(`${filename}: invalid JSON-LD (${error.message})`); return null; }
  }).filter(Boolean);
  const faq = jsonLd.find((item) => item["@type"] === "FAQPage");
  if (faq) {
    const visible = [...html.matchAll(/<details><summary>([\s\S]*?)<\/summary>\s*<p>([\s\S]*?)<\/p><\/details>/gi)].map((match) => ({ question: visibleText(match[1]), answer: visibleText(match[2]) }));
    const schema = faq.mainEntity.map((item) => ({ question: item.name, answer: item.acceptedAnswer.text }));
    if (JSON.stringify(visible) !== JSON.stringify(schema)) fail(`${filename}: visible FAQ and FAQPage schema differ`);
  }
  for (const href of [...html.matchAll(/href="([^"]+)"/gi)].map((match) => decodeHtml(match[1]))) {
    const destination = resolveLocalHref(href, file);
    if (destination && !fs.existsSync(destination)) fail(`${filename}: broken local href ${href}`);
  }
  for (const src of [...html.matchAll(/(?:src|href)="([^"]+)"/gi)].map((match) => decodeHtml(match[1]))) {
    if (/^(file:\/\/|[a-z]:\\)/i.test(src)) fail(`${filename}: local filesystem reference ${src}`);
  }
}
function shingles(text, width = 5) {
  const words = text.split(" ");
  return new Set(words.slice(0, Math.max(0, words.length - width + 1)).map((_, i) => words.slice(i, i + width).join(" ")));
}
function jaccard(a, b) {
  let intersection = 0;
  for (const item of a) if (b.has(item)) intersection += 1;
  return intersection / (a.size + b.size - intersection || 1);
}
function escapeHtml(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}
function renderPage(record, tag) {
  const g = record.generation;
  const canonical = expectedCanonical(record);
  const nearbyRows = g.nearbySizes.map((item) => `<tr><th scope="row">${escapeHtml(item.label)}</th><td>${escapeHtml(item.difference)}</td><td>${escapeHtml(item.check)}</td></tr>`).join("");
  const faqSchema = g.faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }));
  const faqHtml = g.faqs.map((item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join("\n");
  const relatedHtml = g.relatedPages.map((item) => `<a href="${escapeHtml(item.href)}" data-filter-size-related-link>${escapeHtml(item.label)}</a>`).join("");
  const amazon = amazonUrl(record.amazonSearchQuery, tag).replaceAll("&", "&amp;");
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${escapeHtml(record.description)}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website"><meta property="og:title" content="${escapeHtml(record.title.replace(/ \| Filter Wizard$/, ""))}"><meta property="og:description" content="${escapeHtml(record.description)}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="Filter Wizard"><meta property="og:image" content="https://filter-wizard.com/assets/images/blog/how-to-measure-air-filter.webp">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escapeHtml(record.title.replace(/ \| Filter Wizard$/, ""))}"><meta name="twitter:description" content="${escapeHtml(record.description)}"><meta name="twitter:image" content="https://filter-wizard.com/assets/images/blog/how-to-measure-air-filter.webp">
  <link rel="icon" href="/assets/icons/favicon.ico" sizes="any"><link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg"><link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png">
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: record.title.replace(/ \| Filter Wizard$/, ""), description: record.description, url: canonical, datePublished: g.publicationDate, dateModified: g.publicationDate, isPartOf: { "@type": "WebSite", name: "Filter Wizard", url: "https://filter-wizard.com/" }, publisher: { "@type": "Organization", name: "Filter Wizard" } })}</script>
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqSchema })}</script>
  <script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://filter-wizard.com/" }, { "@type": "ListItem", position: 2, name: `${record.nominalSize} Air Filter Guide`, item: canonical }] })}</script>
  <title>${escapeHtml(record.title)}</title>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('consent','default',{ad_storage:'denied',analytics_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});try{const storedConsent=JSON.parse(localStorage.getItem('filterWizardConsent')||'null');const sixMonths=1000*60*60*24*183;if(storedConsent&&storedConsent.version===1&&Date.now()-storedConsent.timestamp<sixMonths){gtag('consent','update',{analytics_storage:storedConsent.analytics==='granted'?'granted':'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});}}catch(error){gtag('consent','update',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});}gtag('js',new Date());gtag('config','G-64VWBW3NHS');</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-64VWBW3NHS"></script>
  <script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","xbqsjc3yut");</script>
  <link rel="stylesheet" href="/assets/css/style.css?v=reorg-5">
</head>
<body>
  <header class="site-header" data-header><nav class="nav container" aria-label="Primary navigation"><a class="brand" href="/" aria-label="Filter Wizard home"><img class="site-logo" src="/assets/images/brand/filter-wizard-logo.png" alt="Filter Wizard" width="270" height="96"></a><button class="nav-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" data-nav-toggle><span></span><span></span><span></span></button><div class="nav-links" data-nav-menu><a href="/#filter-finder">Filter Finder</a><a href="/#how-it-works">How It Works</a><a href="/blog/">Blog</a><a class="nav-cta" href="/#filter-finder">Find My Filter</a></div></nav></header>
  <main id="top"><article class="blog-article" data-filter-size-page data-filter-size="${record.nominalSize}">
    <header class="blog-article-hero section"><div class="container blog-article-header reveal"><nav class="page-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span aria-current="page">${record.nominalSize} Air Filter Guide</span></nav><p class="eyebrow">Filter Size Guide</p><h1>${escapeHtml(record.h1)}</h1><p class="article-intro">${escapeHtml(g.intro)}</p><div class="article-meta"><span>Specific size: ${record.nominalSize}</span><span>Reviewed: ${escapeHtml(g.publicationLabel)}</span></div><a class="btn btn-primary" href="/#filter-finder" data-filter-size-finder-cta data-filter-size="${record.nominalSize}" data-cta-location="hero">Find My Recommended Filter</a></div></header>
    <div class="container article-shell"><aside class="table-of-contents" aria-label="Table of contents"><strong>On this page</strong><a href="#quick-answer">Quick answer</a><a href="#size-specific">Size-specific check</a><a href="#nearby-sizes">Nearby sizes</a><a href="#confirm-size">Confirm fit</a><a href="#merv">MERV guidance</a><a href="#retailers">Retailer searches</a><a href="#faq">FAQ</a></aside><div class="article-content">
      <section id="quick-answer" class="article-section"><div class="quick-answer-card"><h2>Quick Answer</h2><p>${escapeHtml(g.quickAnswer)}</p></div></section>
      <figure class="article-figure"><img src="/assets/images/blog/how-to-measure-air-filter.webp" alt="Diagram showing length, width and thickness measurements for a ${record.nominalSize} filter without assigning a universal actual size." width="1200" height="800" loading="eager" fetchpriority="high" decoding="async"><figcaption>Use the nominal label for shopping, then compare exact product dimensions when fit is uncertain or brands change.</figcaption></figure>
      <section id="size-specific" class="article-section"><h2>${escapeHtml(g.sizeSpecificHeading)}</h2>${g.sizeSpecificParagraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("")}</section>
      <section id="nearby-sizes" class="article-section"><h2>Do Not Confuse ${record.nominalSize} With Nearby Sizes</h2><div class="responsive-table"><table><thead><tr><th scope="col">Label</th><th scope="col">Difference</th><th scope="col">Practical check</th></tr></thead><tbody>${nearbyRows}</tbody></table></div></section>
      <section id="confirm-size" class="article-section"><h2>How to Confirm ${record.nominalSize} Safely</h2><p>Read all three numbers on a correctly fitting old filter. If the label is missing, measure the rigid frame and compare those unrounded measurements with equipment guidance and the exact product listing. Never trim, fold, crush, stack, tape, or pad a wrong-size filter.</p><p>Use the <a href="/blog/how-to-find-your-air-filter-size.html">complete filter-size guide</a> when the old installation is not a trustworthy reference.</p></section>
      <section id="merv" class="article-section"><h2>Choose MERV After You Confirm Size</h2><p>The nominal size does not prove which MERV level the system supports. Follow equipment guidance and compare product-level resistance information where available.</p><p>Review the <a href="/blog/merv-8-vs-merv-11-vs-merv-13.html">MERV 8, 11 and 13 comparison</a>, then use the Filter Finder for cautious household guidance.</p><a class="btn btn-primary" href="/#filter-finder" data-filter-size-finder-cta data-filter-size="${record.nominalSize}" data-cta-location="merv_section">Get My MERV Guidance</a></section>
      <section id="retailers" class="article-section"><h2>Compare ${record.nominalSize} Retailer Searches</h2><div class="quick-answer-card"><p><strong>Confirm fit before shopping.</strong> A nominal-size result is not proof of compatibility.</p><div class="finder-retailer-grid"><a class="finder-retailer-card" href="${amazon}" target="_blank" rel="nofollow sponsored noopener" data-filter-size-retailer-link data-retailer="Amazon" data-filter-size="${record.nominalSize}" data-link-location="filter-size-page"><strong>Amazon</strong><p>Search the confirmed nominal size.</p><span class="btn btn-secondary">Search Amazon</span></a></div><p class="finder-affiliate-disclosure">As an Amazon Associate, Filter Wizard earns from qualifying purchases.</p></div></section>
      <section id="faq" class="article-section"><h2>Frequently Asked Questions</h2><div class="article-faq">${faqHtml}</div></section>
      <section class="article-section"><h2>Related Filter Guidance</h2><div class="related-grid">${relatedHtml}</div></section>
    </div></div>
  </article></main>
  <footer class="site-footer"><div class="container footer-grid"><div><a class="brand footer-brand" href="/"><span class="footer-logo-wrap"><img class="site-logo footer-logo" src="/assets/images/brand/filter-wizard-logo.png" alt="Filter Wizard" width="270" height="96" loading="lazy"></span></a><p>Helpful air filter sizing, replacement reminders, and buying guidance for homeowners.</p></div><div class="footer-links" aria-label="Footer navigation"><a href="/#filter-finder">Filter Finder</a><a href="/#how-it-works">How It Works</a><a href="/blog/">Blog</a><a href="/legal/privacy-policy.html">Privacy Policy</a><a href="/legal/affiliate-disclosure.html">Affiliate Disclosure</a><button class="footer-cookie-settings" type="button" data-cookie-settings>Cookie Settings</button></div></div><div class="container disclaimer"><p>As an Amazon Associate I earn from qualifying purchases.</p>Always confirm your exact filter size before ordering.</div></footer>
  <button class="back-to-top" type="button" aria-label="Back to top" data-back-to-top>↑</button><script src="/assets/js/script.js?v=reorg-2"></script>
</body>
</html>\n`;
}

function validateManifest() {
  if (manifest.schemaVersion !== 1) fail("Unsupported data/filter-sizes.json schemaVersion");
  if (!Array.isArray(manifest.sizes) || manifest.sizes.length === 0) fail("Manifest must contain size records");
  const seen = new Set();
  for (const record of manifest.sizes) {
    for (const field of ["nominalSize", "dimensions", "slug", "status", "indexEligible", "evidence"]) {
      if (record[field] === undefined) fail(`${record.slug || "unknown record"}: missing ${field}`);
    }
    if (!/^(\d{1,2})x(\d{1,2})x(\d)$/.test(record.nominalSize || "")) fail(`${record.slug}: invalid nominalSize`);
    if (record.slug !== record.nominalSize) fail(`${record.slug}: slug must equal normalized nominal size`);
    if (seen.has(record.slug)) fail(`${record.slug}: duplicate manifest slug`);
    seen.add(record.slug);
    if (!["indexed", "approved", "research", "rejected"].includes(record.status)) fail(`${record.slug}: invalid status`);
    if (record.indexEligible !== (record.status === "indexed" || record.status === "approved")) fail(`${record.slug}: indexEligible conflicts with status`);
    if (!Array.isArray(record.evidence) || record.evidence.length === 0) fail(`${record.slug}: evidence is required`);
    if (record.status === "research" || record.status === "rejected") {
      if (!record.blocker) fail(`${record.slug}: non-deployable records require a blocker`);
      if (fs.existsSync(productionPath(record))) fail(`${record.slug}: non-deployable record has a production page`);
    }
    if (record.status === "approved" && !record.generation) fail(`${record.slug}: approved record requires unique generation content`);
  }
}

function validateProduction() {
  const tag = readAffiliateTag();
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const indexed = manifest.sizes.filter((record) => record.status === "indexed");
  const deployable = manifest.sizes.filter((record) => record.status === "indexed" || record.status === "approved");
  const registered = new Set(deployable.map((record) => `${record.slug}.html`));
  const actualFiles = fs.readdirSync(sizeDirectory).filter((name) => name.endsWith(".html")).sort();
  for (const filename of actualFiles) if (!registered.has(filename)) fail(`${filename}: production size page is missing from manifest`);
  for (const record of deployable) {
    const filename = `${record.slug}.html`;
    const file = productionPath(record);
    if (!fs.existsSync(file)) { fail(`${filename}: indexed manifest record has no production page`); continue; }
    const html = fs.readFileSync(file, "utf8");
    validateHtmlContracts(html, file, filename);
    const title = firstMatch(html, /<title>([\s\S]*?)<\/title>/i, "title", filename);
    const description = firstMatch(html, /<meta\s+name="description"\s+content="([^"]+)"/i, "meta description", filename);
    const canonical = firstMatch(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i, "canonical", filename);
    const h1 = firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i, "H1", filename).replace(/<[^>]+>/g, "");
    if (title !== record.title) fail(`${filename}: title differs from manifest`);
    if (description !== record.description) fail(`${filename}: description differs from manifest`);
    if (canonical !== record.canonicalUrl || canonical !== expectedCanonical(record)) fail(`${filename}: canonical differs from manifest/path`);
    if (h1 !== record.h1) fail(`${filename}: H1 differs from manifest`);
    if (countMatches(html, /<h1\b/gi) !== 1) fail(`${filename}: must contain exactly one H1`);
    if (!html.includes(`data-filter-size="${record.nominalSize}"`)) fail(`${filename}: missing matching data-filter-size`);
    if (/name=["']robots["'][^>]*noindex/i.test(html)) fail(`${filename}: indexed page contains noindex`);
    for (const schemaType of manifest.pageDefaults.requiredSchemas) {
      if (!html.includes(`"@type":"${schemaType}"`)) fail(`${filename}: missing ${schemaType} schema`);
    }
    const sitemapCount = countMatches(sitemap, new RegExp(expectedCanonical(record).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"));
    if (record.status === "indexed" && sitemapCount !== 1) fail(`${filename}: canonical must appear exactly once in sitemap (found ${sitemapCount})`);
    if (record.status === "approved" && sitemapCount !== 0) fail(`${filename}: approved draft must not enter sitemap before final indexing review`);
    const amazonHrefs = [...html.matchAll(/href="(https:\/\/www\.amazon\.com\/[^"]+)"/gi)].map((match) => decodeHtml(match[1]));
    if (amazonHrefs.length !== 1) fail(`${filename}: expected one Amazon link, found ${amazonHrefs.length}`);
    for (const href of amazonHrefs) {
      const parsed = new URL(href);
      if (parsed.searchParams.get("tag") !== tag) fail(`${filename}: Amazon tag does not match runtime configuration`);
      if (parsed.searchParams.get("k") !== record.amazonSearchQuery) fail(`${filename}: Amazon query differs from manifest`);
      if (href !== amazonUrl(record.amazonSearchQuery, tag)) fail(`${filename}: Amazon URL is not canonical generator output`);
    }
    if (!html.includes("data-filter-size-retailer-link")) fail(`${filename}: retailer tracking hook missing`);
    if (!html.includes("data-filter-size-finder-cta")) fail(`${filename}: Finder CTA tracking hook missing`);
  }
  const titleGroups = Map.groupBy(indexed, (record) => record.title);
  const descriptionGroups = Map.groupBy(indexed, (record) => record.description);
  for (const [title, records] of titleGroups) if (records.length > 1) fail(`Duplicate title: ${title}`);
  for (const [description, records] of descriptionGroups) if (records.length > 1) fail(`Duplicate meta description: ${description}`);
  const texts = indexed.map((record) => ({ slug: record.slug, set: shingles(stripHtml(fs.readFileSync(productionPath(record), "utf8"))) }));
  let closest = { score: 0, pair: "" };
  for (let i = 0; i < texts.length; i += 1) for (let j = i + 1; j < texts.length; j += 1) {
    const score = jaccard(texts[i].set, texts[j].set);
    if (score > closest.score) closest = { score, pair: `${texts[i].slug}/${texts[j].slug}` };
    if (score >= 0.9) fail(`${texts[i].slug}/${texts[j].slug}: near-duplicate body score ${score.toFixed(3)}`);
  }
  return { tag, indexedCount: indexed.length, actualCount: actualFiles.length, closest };
}

function generate(slug) {
  const record = manifest.sizes.find((item) => item.slug === slug);
  if (!record) throw new Error(`Unknown size record: ${slug}`);
  if (record.status !== "approved" || !record.indexEligible) throw new Error(`${slug} is not approved for generation`);
  if (!record.generation) throw new Error(`${slug} has no unique generation content`);
  const required = ["intro", "sizeSpecificHeading", "sizeSpecificParagraphs", "nearbySizes", "faqs", "relatedPages", "publicationDate"];
  for (const field of required) if (!record.generation[field] || record.generation[field].length === 0) throw new Error(`${slug}: generation.${field} is required`);
  if (record.generation.sizeSpecificParagraphs.join(" ").length < 500) throw new Error(`${slug}: unique size-specific content is too thin`);
  if (record.generation.faqs.length < 6) throw new Error(`${slug}: at least six researched FAQs are required`);
  const output = productionPath(record);
  if (fs.existsSync(output) && !process.argv.includes("--force")) throw new Error(`${slug}: output exists; use --force only after reviewing the diff`);
  const html = renderPage(record, readAffiliateTag());
  fs.writeFileSync(output, html, "utf8");
  console.log(`Generated ${path.relative(root, output)} from structured data.`);
}

const command = process.argv[2] || "validate";
try {
  validateManifest();
  if (command === "generate") generate(process.argv[3]);
  if (command !== "validate" && command !== "generate") throw new Error("Usage: node tools/filter-size-pages.mjs [validate | generate <slug>]");
  const result = validateProduction();
  for (const message of warnings) console.warn(`WARN: ${message}`);
  if (errors.length) {
    for (const message of errors) console.error(`ERROR: ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`Filter-size validation passed: ${result.indexedCount} indexed records, ${result.actualCount} production pages.`);
    console.log(`Amazon tag discovered from runtime configuration: ${result.tag}`);
    console.log(`Closest normalized content pair: ${result.closest.pair} (${result.closest.score.toFixed(3)}).`);
    console.log(`${manifest.sizes.filter((record) => record.status === "research").length} research records and ${manifest.sizes.filter((record) => record.status === "rejected").length} rejected records remain non-deployable.`);
  }
} catch (error) {
  console.error(`ERROR: ${error.message}`);
  process.exitCode = 1;
}
