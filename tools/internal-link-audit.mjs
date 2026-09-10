#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(process.cwd());
const siteOrigin = "https://filter-wizard.com";

function stripTags(value = "") {
  return value
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"));
  return match ? match[1] ?? match[2] : "";
}

function canonicalPath(href, sourcePathname) {
  if (!href || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return null;
  let url;
  try {
    url = href.startsWith("http") ? new URL(href) : new URL(href, `${siteOrigin}${sourcePathname}`);
  } catch {
    return null;
  }
  if (url.origin !== siteOrigin) return null;
  let pathname = url.pathname.replace(/\/+/g, "/");
  if (pathname.endsWith("/index.html")) pathname = pathname.slice(0, -10) || "/";
  return `${pathname}${url.hash}`;
}

function ranges(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => [match.index, match.index + match[0].length]);
}

function inside(index, candidates) {
  return candidates.some(([start, end]) => index >= start && index < end);
}

function classifyLink(index, tag, href, pageType, zones) {
  const classes = attribute(tag, "class");
  if (inside(index, zones.header)) return "global-navigation";
  if (inside(index, zones.breadcrumb)) return "breadcrumb";
  if (inside(index, zones.footer)) return href.includes("/legal/") ? "utility-legal" : "footer";
  if (inside(index, zones.related)) return pageType === "size-guide" && href.includes("/filter-sizes/") ? "size-neighbor" : "related-articles";
  if (href.includes("#filter-finder") || /finder|cta|button|btn/i.test(`${classes} ${tag}`)) return href.includes("#filter-finder") ? "filter-finder" : "cta";
  if (pageType === "blog-index") return "index-listing";
  return "contextual";
}

function sourceForUrl(pathname) {
  if (pathname === "/") return "index.html";
  if (pathname.endsWith("/")) return `${pathname.slice(1)}index.html`;
  return pathname.slice(1);
}

function localTarget(pathname) {
  const relative = sourceForUrl(pathname);
  const absolute = path.resolve(root, relative);
  if (!absolute.startsWith(`${root}${path.sep}`) && absolute !== root) return null;
  return fs.existsSync(absolute) ? absolute : null;
}

function pageType(pathname) {
  if (pathname === "/") return "homepage";
  if (pathname === "/blog/") return "blog-index";
  if (pathname.startsWith("/blog/")) return "blog-article";
  if (pathname.startsWith("/filter-sizes/")) return "size-guide";
  if (pathname.startsWith("/legal/") || pathname.startsWith("/.well-known/")) return "utility-legal";
  return "informational";
}

const sitemapPath = path.join(root, "sitemap.xml");
const sitemap = fs.readFileSync(sitemapPath, "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]));
const indexable = new Map(sitemapUrls.map((url) => [url.pathname, { url: url.href, file: sourceForUrl(url.pathname), type: pageType(url.pathname) }]));

const pages = [];
const edges = [];
for (const [pathname, record] of indexable) {
  const absolute = path.join(root, record.file);
  if (!fs.existsSync(absolute)) {
    pages.push({ ...record, pathname, missingFile: true, links: [] });
    continue;
  }
  const html = fs.readFileSync(absolute, "utf8");
  const zones = {
    header: ranges(html, /<header\b[^>]*class="[^"]*site-header[^"]*"[\s\S]*?<\/header>/gi),
    breadcrumb: ranges(html, /<(?:nav|div)\b[^>]*class="[^"]*(?:breadcrumb|page-breadcrumb)[^"]*"[\s\S]*?<\/(?:nav|div)>/gi),
    related: ranges(html, /<div\b[^>]*class="[^"]*related-grid[^"]*"[\s\S]*?<\/div>/gi),
    footer: ranges(html, /<footer\b[\s\S]*?<\/footer>/gi),
  };
  const links = [];
  for (const match of html.matchAll(/<a\b[^>]*href=(?:"[^"]*"|'[^']*')[^>]*>[\s\S]*?<\/a>/gi)) {
    const tag = match[0].slice(0, match[0].indexOf(">") + 1);
    const rawHref = attribute(tag, "href");
    const target = canonicalPath(rawHref, pathname);
    if (!target) continue;
    const targetPath = target.split("#")[0] || "/";
    const kind = classifyLink(match.index, tag, rawHref, record.type, zones);
    const edge = { source: pathname, target: targetPath, fragment: target.includes("#") ? target.split("#")[1] : "", kind, anchor: stripTags(match[0]), href: rawHref };
    links.push(edge);
    edges.push(edge);
  }
  const title = stripTags(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]);
  const h1 = stripTags(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1]);
  pages.push({ ...record, pathname, title, h1, missingFile: false, links });
}

const contentPages = pages.filter((page) => !["utility-legal"].includes(page.type));
const contentPaths = new Set(contentPages.map((page) => page.pathname));
const crawlableEdges = edges.filter((edge) => indexable.has(edge.target) && edge.source !== edge.target);
const contextualKinds = new Set(["contextual", "size-neighbor"]);
const contextualEdges = crawlableEdges.filter((edge) => contextualKinds.has(edge.kind));

function countsByTarget(edgeSet) {
  const counts = new Map([...contentPaths].map((item) => [item, 0]));
  for (const edge of edgeSet) if (counts.has(edge.target)) counts.set(edge.target, counts.get(edge.target) + 1);
  return counts;
}

const incoming = countsByTarget(crawlableEdges);
const contextualIncoming = countsByTarget(contextualEdges);
const outgoing = new Map(contentPages.map((page) => [page.pathname, page.links.filter((link) => indexable.has(link.target) && link.target !== page.pathname).length]));
const adjacency = new Map([...contentPaths].map((item) => [item, new Set()]));
for (const edge of crawlableEdges) if (adjacency.has(edge.source) && contentPaths.has(edge.target)) adjacency.get(edge.source).add(edge.target);
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const current = queue.shift();
  for (const next of adjacency.get(current) ?? []) {
    if (!depth.has(next)) {
      depth.set(next, depth.get(current) + 1);
      queue.push(next);
    }
  }
}

const values = [...contextualIncoming.values()].sort((a, b) => a - b);
const median = values.length ? (values[Math.floor((values.length - 1) / 2)] + values[Math.ceil((values.length - 1) / 2)]) / 2 : 0;
const duplicateDestinations = [];
for (const page of contentPages) {
  const counts = new Map();
  for (const link of page.links.filter((link) => !["global-navigation", "footer", "utility-legal"].includes(link.kind))) {
    const key = `${link.target}#${link.fragment}`;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  for (const [target, count] of counts) if (count > 1) duplicateDestinations.push({ source: page.pathname, target, count });
}

const broken = edges.filter((edge) => edge.source !== edge.target && !localTarget(edge.target));
const targetHtml = new Map();
const brokenFragments = [];
for (const edge of edges.filter((item) => item.fragment)) {
  const absolute = localTarget(edge.target);
  if (!absolute) continue;
  if (!targetHtml.has(absolute)) targetHtml.set(absolute, fs.readFileSync(absolute, "utf8"));
  let fragment = edge.fragment;
  try {
    fragment = decodeURIComponent(fragment);
  } catch {
    // Keep the original fragment so malformed encoding is reported as unresolved.
  }
  const escaped = fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (!new RegExp(`\\bid\\s*=\\s*(?:"${escaped}"|'${escaped}')`, "i").test(targetHtml.get(absolute))) {
    brokenFragments.push(edge);
  }
}
const report = {
  generatedAt: new Date().toISOString(),
  summary: {
    indexableUrls: pages.length,
    contentPages: contentPages.length,
    internalLinks: crawlableEdges.length,
    uniqueEdges: new Set(crawlableEdges.map((edge) => `${edge.source}->${edge.target}`)).size,
    contextualLinks: contextualEdges.length,
    uniqueContextualEdges: new Set(contextualEdges.map((edge) => `${edge.source}->${edge.target}`)).size,
    averageOutgoing: Number((contentPages.reduce((sum, page) => sum + outgoing.get(page.pathname), 0) / contentPages.length).toFixed(2)),
    averageIncoming: Number((contentPages.reduce((sum, page) => sum + incoming.get(page.pathname), 0) / contentPages.length).toFixed(2)),
    averageContextualIncoming: Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(2)),
    medianContextualIncoming: median,
    zeroContextualIncoming: [...contextualIncoming].filter(([, count]) => count === 0).map(([page]) => page),
    oneContextualIncoming: [...contextualIncoming].filter(([, count]) => count === 1).map(([page]) => page),
    maxDepth: Math.max(...depth.values()),
    pagesDepth4Plus: contentPages.filter((page) => (depth.get(page.pathname) ?? Infinity) >= 4).map((page) => ({ page: page.pathname, depth: depth.get(page.pathname) ?? null })),
    unreachableFromHomepage: contentPages.filter((page) => !depth.has(page.pathname)).map((page) => page.pathname),
    brokenInternalLinks: broken,
    brokenFragments,
    duplicateDestinations,
  },
  pages: contentPages.map((page) => ({
    pathname: page.pathname,
    file: page.file,
    type: page.type,
    title: page.title,
    h1: page.h1,
    incoming: incoming.get(page.pathname),
    contextualIncoming: contextualIncoming.get(page.pathname),
    outgoing: outgoing.get(page.pathname),
    finderLinks: page.links.filter((link) => link.kind === "filter-finder").length,
    depth: depth.get(page.pathname) ?? null,
    links: page.links,
  })),
};

const outputIndex = process.argv.indexOf("--output");
if (outputIndex !== -1 && process.argv[outputIndex + 1]) {
  fs.writeFileSync(path.resolve(process.argv[outputIndex + 1]), `${JSON.stringify(report, null, 2)}\n`);
}
console.log(JSON.stringify(report, null, 2));
