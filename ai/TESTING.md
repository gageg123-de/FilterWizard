# Testing

Last verified: 2026-07-19

There is no package/test runner. Do not invent `npm test`. Use a local HTTP server (for example `python -m http.server` if Python is available), browser testing, targeted searches, parsers, and Git checks.

This is the authoritative validation checklist. Domain documents define expected behavior and should link here rather than duplicate complete regression lists. Test depth is proportional to risk and changed surface, but static-site compatibility, affected user paths, and Git scope are never skipped.

## Every change

- Confirm workspace/branch/status; serve over HTTP; inspect console.
- Test 320, 375, 768, 1024, and desktop; no overflow or broken layout.
- Keyboard/focus smoke test affected UI; check visible text and link semantics.
- Verify affected links/images return successfully and production has no `file://` or local-drive paths.
- Parse changed JSON-LD and XML; check one H1, duplicate IDs, canonicals as relevant.
- Run `git diff --check`, review full diff/status, and confirm intended scope.

## Relevant-change checks

| Area | Required checks |
|---|---|
| Homepage | hero, nav, Finder entry, Latest Guides, forms, footer |
| Blog index/article | identical text-only cards, article components, TOC/progress/share/FAQ/related links |
| Finder | known and unknown workflows, back, validation, autocomplete, results, mobile modal, focus/ESC |
| Logic | MERV 8/11/13, 45/60/75/90 days, cost math, confidence, decimal/invalid sizes |
| Affiliate | unknown-size guard, tag `filterwizard-20`, query encoding, rel/target, one event |
| Forms | validity, success/failure, Formspree payload, no email in analytics |
| Consent/analytics | default denied, accept/decline/settings/persistence, DebugView/Realtime, Clarity consent |
| SEO | title/canonical/schema/social/sitemap/internal links, visible FAQ match |
| Filter-size pages | direct static route, uniqueness, nominal/actual and thickness caveats, CTA/events, retailer warning/tag/query/rel, WebPage/FAQ/Breadcrumb schema, sitemap/internal links, no nonexistent index |

For another size page, compare metadata, headings, paragraphs, FAQs and confusion guidance against both existing pilots. Shared structure and required disclosures may repeat; substantive exact-copy overlap should be limited and explained.
| Accessibility | keyboard, focus trap/return, names, errors/live regions, contrast, reduced motion |

## Full pre-deployment regression

All pages and footer/legal links; missing assets; console errors; all Finder branches and restart; cookie states; email flows; retailer URLs; article sharing/scroll; sitemap/robots/canonicals; schema validation; 404 behavior; production smoke test after deploy. Basic screen-reader traversal is required for major interaction changes.

## Evidence and reporting

Record the served URL/port, browsers or browser engine used, viewport widths, workflows exercised, parsers/checks run, failures and disposition, and anything not testable locally. “Looks good” is not a result. Local event emission does not prove dashboard receipt; a successful request does not prove email delivery or affiliate attribution.

No browser support matrix, automated link checker, HTML validator configuration, visual-regression baseline, or CI gate is committed. Adding any of these is a tooling/architecture decision, not a prerequisite agents should silently install.

Update this file when: tooling, pages, flows, integrations, breakpoints, or release requirements change.
