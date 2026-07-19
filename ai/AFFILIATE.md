# Affiliate Integration

Last verified: 2026-07-19

Amazon Associates Store ID `filterwizard-20` is defined as `amazonAffiliateTag` in [`../assets/js/script.js`](../assets/js/script.js). Do not change or remove it without owner authorization.

This file owns commercial link eligibility, disclosure, and attribution safeguards. Recommendation eligibility remains governed by [`FILTER_LOGIC.md`](FILTER_LOGIC.md); event names/parameters belong to [`ANALYTICS.md`](ANALYTICS.md); business trade-offs belong to [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md).

`buildRetailerSearchQuery` combines confirmed size, MERV, and `air filter`. `getRetailerLinks` builds `https://www.amazon.com/s?k=...&tag=filterwizard-20` dynamically and checks the tag. Missing tags emit `filter_wizard_amazon_tag_missing`. Home Depot, Lowe's, and Filterbuy links are dynamic comparison searches with TODOs for possible future deep/affiliate links; do not represent them as active affiliate programs.

Retailer cards appear only for confirmed sizes. Links open a new tab and use `rel="nofollow sponsored noopener"`, `data-link-location="filter-finder-results"`, retailer data attributes, and filter size for Amazon. A delegated document click listener emits `amazon_click`; card listeners emit `filter_finder_retailer_clicked`. Page/footer and result disclosures state the Amazon relationship.

The static 20x25x1 pilot is a separate, explicit size-intent context. It shows a prominent fit warning before four retailer searches, uses `20x25x1 air filter` queries, carries `filterwizard-20` on Amazon, uses the established sponsored/new-tab attributes, and identifies only Amazon as the active affiliate. `filter_size_page_retailer_click` records the comparison action; the delegated `amazon_click` also records Amazon attribution metadata.

## Rules and testing

- Confirm unknown-size users see no retailer cards.
- Inspect generated Amazon URL for the exact tag and encoded size/MERV query.
- Confirm `amazon_click` and retailer click fire once, and generic outbound behavior is not duplicated.
- Preserve disclosures and new-tab isolation. `noreferrer` is not currently used; do not claim it is.
- Test common, decimal, and manually confirmed sizes; check retailer URLs for encoding and 404s.
- Do not recommend a product or multipack because commission is higher. Encourage one-filter fit confirmation when size is uncertain.
- Amazon may attribute an initial tagged search click, but repository code cannot prove how tracking persists after navigation. Verify with Associates reporting rather than making promises.
- On a size landing page, a nominal page label is not proof of the visitor’s physical fit. Retailer visibility is permitted only alongside the page’s explicit confirmation warning; do not describe it as a personalized recommendation.

## Commercial decision gates

Adding a retailer or affiliate program requires owner authorization, verified program terms, disclosure placement, destination/query QA, privacy/security review, analytics semantics, and an exit plan. Never label comparison retailers as affiliates without evidence. Never hard-code a specific product recommendation unless fit assumptions, freshness, availability behavior, and maintenance ownership are defined.

Commercial health should eventually be evaluated from qualified, size-confirmed journeys through attributed outcomes. Raw click growth is not sufficient evidence if wrong-size risk, abandonment, or user trust worsens.

Update this file when: Store ID, retailers, URL generation, disclosures, link attributes, product rules, or tracking changes.
