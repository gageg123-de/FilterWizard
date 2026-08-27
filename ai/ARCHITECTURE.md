# Architecture

Last verified: 2026-08-10

## Actual stack

Framework-free static HTML, CSS, and browser JavaScript. There is no package manifest, build command, server code, database, test runner, or dependency installation step.

Architecture constraints are current facts, not permanent preferences. Adding a build step, service, dependency, or data store is an architectural decision requiring explicit scope, migration/rollback planning, security/privacy review, and updates to [`DEPLOYMENT.md`](DEPLOYMENT.md), [`SECURITY.md`](SECURITY.md), and [`TESTING.md`](TESTING.md).

## Directory map

- [`../index.html`](../index.html): homepage, Finder markup, modal, result UI, and general email form.
- [`../assets/css/style.css`](../assets/css/style.css): all shared styles and responsive rules.
- [`../assets/js/script.js`](../assets/js/script.js): navigation, reveal effects, consent, Finder, forms, shares, article tracking, retailer links.
- [`../blog/`](../blog/): index plus twenty-seven hand-authored articles.
- [`../filter-sizes/`](../filter-sizes/): hand-authored 20x25x1, 16x25x1, and 20x20x1 pilot pages; no index, generator or bulk system.
- [`../legal/`](../legal/): canonical privacy, cookie, terms, and affiliate pages.
- Root legal HTML files: `noindex, follow` meta-refresh compatibility URLs pointing to `/legal/`.
- [`../assets/images/`](../assets/images/): `blog`, `brand`, `homepage`, `products`, and `social` assets.
- [`../sitemap.xml`](../sitemap.xml), [`../robots.txt`](../robots.txt), [`../CNAME`](../CNAME), [`../.nojekyll`](../.nojekyll): discovery and GitHub Pages/static-hosting files.
- [`../.well-known/security.txt`](../.well-known/security.txt): security contact.
- [`../archive/`](../archive/), [`../docs/`](../docs/): history/reference, not production navigation sources.

Routing is file-based. Root-relative links target the custom-domain root. Content is duplicated across HTML pages for headers, metadata, analytics bootstrapping, footers, and article components; there is no templating layer.

## External integrations and standards

Runtime integrations are GA4, Microsoft Clarity, Formspree, Amazon, Home Depot, Lowe's, Filterbuy, Facebook sharing, and Pinterest sharing. Schema.org is a structured-data vocabulary, not a runtime service. Configuration IDs are embedded in HTML/JS because the site is public client code. Data and consent boundaries are owned by [`PRIVACY_AND_CONSENT.md`](PRIVACY_AND_CONSENT.md); commercial link behavior is owned by [`AFFILIATE.md`](AFFILIATE.md).

## Where to make common changes

| Change | Primary locations |
|---|---|
| Navigation/footer | Every production HTML page; verify duplication |
| Add article | New `blog/*.html`, `blog/index.html`, homepage previews, `sitemap.xml`, reciprocal links |
| Add filter-size page | Pilot patterns in `filter-sizes/20x25x1.html` and `filter-sizes/16x25x1.html`; follow `FILTER_SIZE_PAGES.md` and require explicit authorization before another |
| Finder questions/UI | `index.html`, `style.css`, `script.js` |
| Size/MERV/schedule/cost logic | `script.js` functions documented in `FILTER_LOGIC.md` |
| Amazon behavior | `amazonAffiliateTag`, `buildRetailerSearchQuery`, `getRetailerLinks`, click tracking in `script.js` |
| Analytics | per-page initialization plus `trackEvent` calls in `script.js` |
| Consent | per-page default consent bootstrap and `consentManager` in `script.js` |
| Global styles | `style.css`; reuse tokens and shared classes |
| Metadata/schema | `<head>` of the affected page and `sitemap.xml` when appropriate |

Technical debt: duplicated HTML and analytics bootstrap, inconsistent schema coverage between older articles, static content-card duplication, and no automated regression suite.

The size-page pilots reuse the article shell, quick-answer card, responsive table, MERV cards, FAQ details, related grid, retailer cards, header/footer and consent bootstrap. Page-specific content, WebPage/FAQ/Breadcrumb schema, retailer URLs and `data-filter-size-*` attributes remain in each HTML file. Shared JS reads the static `data-filter-size` value for scoped events; there is no templating layer.

## Architectural invariants and risks

- Production must work as plain static files over HTTP with root-relative URLs.
- Shared behavior belongs in `script.js` and shared presentation in `style.css`; page-specific code needs a clear reason.
- Repeated HTML is intentionally hand-maintained today. A partial templating abstraction that requires a build but leaves pages inconsistent is worse than focused duplication.
- Inline analytics/consent bootstraps create cross-page drift risk; any edit requires a page inventory and representative comparison.
- Browser support is progressive enhancement on current evergreen desktop/mobile browsers; no formal legacy-browser matrix is verified.

Update this file when: files move, page types or services change, a build/template layer is introduced, or configuration locations change.
