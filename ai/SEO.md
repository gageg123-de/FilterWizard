# SEO

Last verified: 2026-07-19

## Current architecture

- Custom-domain URLs use `https://filter-wizard.com/` and root-relative internal links.
- [`../sitemap.xml`](../sitemap.xml) lists the homepage, blog index, five articles, the 20x25x1 and 16x25x1 filter-size pilots, and canonical legal pages.
- [`../robots.txt`](../robots.txt) allows crawling and declares the sitemap.
- Production pages use titles, descriptions, canonicals, Open Graph, and Twitter metadata. Articles use Article JSON-LD; visible FAQ sections generally have FAQPage schema; breadcrumb schema coverage varies.
- Root legal compatibility pages canonicalize to `/legal/*`, use immediate meta refresh, and are `noindex, follow`.
- Blog pages link to the Finder and related articles; homepage and blog index use text-only previews.
- Both size-page pilots use self-canonical WebPage, matching FAQPage and two-level BreadcrumbList schema. No `/filter-sizes/` index URL exists.

## Rules

- Do not change an indexed URL casually. If unavoidable, plan a server-level redirect; JavaScript redirects are insufficient. This repository currently has no redirect configuration beyond root legal meta refresh files.
- Do not remove canonical tags without understanding their purpose or create duplicate titles/canonicals.
- Schema must match visible content. Never fabricate ratings, reviews, authorship, dates, credentials, product claims, or organization facts.
- Update sitemap `lastmod` only for meaningful page changes, not routine deploy dates.
- Use one H1 and logical headings. Keep descriptive anchors and reciprocal links natural.
- Social image URLs must exist publicly; article images need useful alt text, dimensions, and captions.
- Do not publish thin filter-size pages merely to inflate page count. Each must solve size-specific questions with unique value.
- Preserve page speed: compressed images, no broken preload/social paths, no unnecessary scripts.

## Search decision process

Before adding or materially retargeting a page, define the user problem, primary intent, existing page overlap, unique information gain, internal-link role, and conversion path. Search volume, rankings, and indexation require externally verified data; never infer them from repository presence. Prefer improving an existing page when a new URL would split the same intent.

After a meaningful SEO change, validate local metadata/schema/links, update sitemap only when warranted, then record the live URL and date for later Search Console/index review. Do not claim success until external evidence exists. Content workflow is in [`CONTENT.md`](CONTENT.md); scaled-page gates are in [`FILTER_SIZE_PAGES.md`](FILTER_SIZE_PAGES.md).

Risks: hand-authored metadata can drift; schema combinations differ across older articles; root compatibility redirects are not HTTP redirects; Search Console/indexation status cannot be verified locally.

Update this file when: URLs, metadata patterns, schema, sitemap/robots behavior, redirects, internal linking, or page types change.
