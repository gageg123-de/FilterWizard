# SEO

Last verified: 2026-08-20

The production dust pillar `/blog/best-air-filter-for-dust.html` targets “best air filter for dust” and the related HVAC/furnace-filter, dusty-house, MERV 8/11/13, media-type, depth, airflow, and replacement cluster. It links to the pets pillar and technical hubs; future dust comparisons should serve narrower intent instead of repeating its broad buying guide.

Pet-home cluster: `/blog/best-air-filter-for-pets.html` is the broad pillar. Future guides for dust, allergies, smoke, bedrooms, and MERV 8 versus MERV 11 for pets must serve narrower intent and link back without duplicating the pillar.

## Current architecture

- Custom-domain URLs use `https://filter-wizard.com/` and root-relative internal links.
- [`../sitemap.xml`](../sitemap.xml) lists the homepage, blog index, twenty-three articles, the 20x25x1, 16x25x1, and 20x20x1 filter-size pilots, and canonical legal pages.
- [`../robots.txt`](../robots.txt) allows crawling and declares the sitemap.
- Production pages use titles, descriptions, canonicals, Open Graph, and Twitter metadata. Articles use Article JSON-LD; visible FAQ sections generally have FAQPage schema; breadcrumb schema coverage varies.
- Root legal compatibility pages canonicalize to `/legal/*`, use immediate meta refresh, and are `noindex, follow`.
- Blog pages link to the Finder and related articles; homepage and blog index use text-only previews.
- All three size-page pilots use self-canonical WebPage, matching FAQPage and two-level BreadcrumbList schema. No `/filter-sizes/` index URL exists.

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

The 2026-08-12 buyer guide at `/blog/washable-vs-disposable-air-filters.html` targets the commercial-investigation intent around washable versus disposable HVAC filters. Its unique information gain is the separation of reuse from MERV, resistance, media construction, maintenance, service life, cost, and environmental tradeoffs. It links into the reuse, media, MERV, restriction, thickness, sizing, and loading clusters and uses the existing Finder conversion path after comparison content.

The 2026-08-14 troubleshooting guide at `/blog/why-does-my-air-filter-move.html` targets filter movement at blower startup, shutdown, and steady operation. Its unique information gain is separating slight motion from repeated displacement and distinguishing size, fit, support, loading, restriction, bowing, vibration, and bypass before the content roadmap shifts toward commercial-intent household-use guides.

The 2026-08-21 guide at `/blog/best-air-filter-for-allergies.html` targets allergy-focused particle-filtration buying intent. Its distinct information gain is pollen and airborne duration, MERV 11 vs. 13, bypass, HVAC runtime, seasonal loading, and the filtration-versus-health-outcome boundary; it should not duplicate the general MERV, dust, or pets pages.

Update this file when: URLs, metadata patterns, schema, sitemap/robots behavior, redirects, internal linking, or page types change.
