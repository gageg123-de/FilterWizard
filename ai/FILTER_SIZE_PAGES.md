# Filter-Size Pages

Last verified: 2026-09-01

Six hand-authored production pages exist: [`../filter-sizes/20x25x1.html`](../filter-sizes/20x25x1.html), [`../filter-sizes/16x25x1.html`](../filter-sizes/16x25x1.html), [`../filter-sizes/20x20x1.html`](../filter-sizes/20x20x1.html), [`../filter-sizes/16x20x1.html`](../filter-sizes/16x20x1.html), [`../filter-sizes/14x20x1.html`](../filter-sizes/14x20x1.html), and [`../filter-sizes/14x25x1.html`](../filter-sizes/14x25x1.html). The directory remains file-routed with no index page, generator, data source or bulk system. The implemented set is not authorization for mass generation.

The 2026-09-01 preflight found exactly the original three pages, all canonical and in the sitemap, with no alternate filenames, redirects, orphan size pages or hidden Finder-linked pages. A controlled three-page batch then selected 16x20x1, 14x20x1 and 14x25x1. The ranking was 16x20x1, 14x20x1, 14x25x1, 16x24x1, 18x20x1, 18x24x1, 20x24x1 and 24x24x1, based on Finder support, current site-link opportunities, externally observed retailer/category availability, common-size evidence and duplication risk. The next candidates remain proposals and require a fresh evidence check.

Roadmap presence does not authorize creation. A first page requires explicit product scope and must pass the business gates in [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md), the search process in [`SEO.md`](SEO.md), and the uncertainty rules in [`DECISION_FRAMEWORK.md`](DECISION_FRAMEWORK.md).

## Established pilot conventions

- URL: `/filter-sizes/{normalized-size}.html`; only the six pages listed above are implemented.
- Reuse the production header/footer, article shell, quick answer, responsive tables, MERV cards, retailer cards, FAQ details and related-link grid.
- Use a visible Home/current-page breadcrumb when no parent index exists; do not link a nonexistent `/filter-sizes/` page.
- Use WebPage rather than Product schema because Filter Wizard does not sell the filter. Visible FAQ and breadcrumb must match their schemas.
- Provide unique size-specific value: nominal/actual caveats, thickness distinction, fit-confirmation steps, cautious MERV/timing guidance, buying checklist, retailer warning and relevant internal links. Do not claim swapped dimensions are universally equivalent.
- Static retailer queries must mirror the safe size/query/tag/link conventions in [`AFFILIATE.md`](AFFILIATE.md). The page’s size is a page fact, not user-entered validation or equipment compatibility.
- Canonical must self-reference the intended public URL. Title, description, H1, Article/WebPage schema, FAQ schema, and visible copy must agree.

Page-specific elements: H1/metadata, dimensional explanations, FAQ answers, related links, search query, warnings and page-level structured data. Reusable elements: layout classes, header/footer, consent, CTA attributes, retailer-card structure and scoped analytics handler.

The 16x25x1 page establishes that meaningful variation must follow the size’s real confusion set: it adds explicit comparisons with 16x20x1, 16x24x1, 15x25x1, 20x25x1, 16x25x2 and 16x25x4 plus dedicated airflow-arrow guidance. Future pages need their own defensible information gain rather than copying this table.

The 20x20x1 page adds a square-size confusion set and explains that rotating equal nominal face dimensions does not correct actual-dimension, thickness, or airflow-direction errors. This is another example of page-specific information gain, not a universal section to duplicate.

The 16x20x1 page centers on a compact rectangle and matching both dimensions rather than confusing it with 16x25x1 or 20x20x1. The 14x20x1 page centers on narrow-face fit, movement and the risk of matching only the 20-inch side. The 14x25x1 page centers on same-length confusion with 16x25x1, same-width confusion with 14x20x1, and the difference between a visible return-grille face and its internal filter track. All three use ten matched FAQs, three tracked Finder CTAs, four retailer searches, WebPage/FAQ/Breadcrumb schema and the existing measurement image without creating duplicate image assets.

## Next-page checklist

Research intent and uniqueness; review evidence from all three pilot pages; obtain explicit authorization; confirm naming/URL; create useful non-tokenized copy; add verified metadata/schema; link Finder and relevant articles; add cautious search options; update sitemap/internal links; test affiliate tag, canonical, schema, 320px layout, broken links and duplicate text against all existing pages.

## Bulk checklist

Define an approved data source and template; audit every size; require unique sections rather than token substitution; sample first/middle/last and edge sizes; run duplicate-content and link checks; cap rollout; monitor indexation and engagement; stop if pages are thin or cannibalize one another. Never generate hundreds of near-identical pages just to increase page count.

Minimum launch gate for further scaling: evaluate the six-page set for indexation, usefulness, cannibalization and wrong-size behavior; preserve retailer warnings/disclosure; maintain a rollback/removal plan; and keep human ownership of data quality. No threshold values are currently approved; do not invent them. Code-emitted events do not prove these gates; external dashboard evidence is still required.

Update this file when: pilot behavior, URL/schema conventions, reusable elements, evaluation evidence, data source, generator status, or another production size page changes.
