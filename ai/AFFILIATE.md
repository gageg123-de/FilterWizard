# Affiliate Integration

Last verified: 2026-08-06

Amazon Associates Store ID `filterwizard-20` is defined as `amazonAffiliateTag` in [`../assets/js/script.js`](../assets/js/script.js). Do not change or remove it without owner authorization.

This file owns commercial link eligibility, disclosure, and attribution safeguards. Recommendation eligibility remains governed by [`FILTER_LOGIC.md`](FILTER_LOGIC.md); event names/parameters belong to [`ANALYTICS.md`](ANALYTICS.md); business trade-offs belong to [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md).

`buildRetailerSearchQuery` combines confirmed size, MERV, and `air filter`. `getRetailerLinks` builds `https://www.amazon.com/s?k=...&tag=filterwizard-20` dynamically and checks the tag. Missing tags emit `filter_wizard_amazon_tag_missing`. Home Depot and Lowe's use dynamic comparison searches. Filterbuy uses its nominal-size category convention, `https://filterbuy.com/air-filters/{normalized-size}/`, rather than a search phrase in the path. These comparison retailers must not be represented as active affiliate programs.

Retailer cards appear only for confirmed sizes. Links open a new tab and use `rel="nofollow sponsored noopener"`, `data-link-location="filter-finder-results"`, retailer data attributes, and filter size for Amazon. A delegated document click listener emits `amazon_click`; card listeners emit `filter_finder_retailer_clicked`. Page/footer and result disclosures state the Amazon relationship.

The static 20x25x1, 16x25x1, and 20x20x1 pilots are explicit size-intent contexts. Each shows a prominent fit warning before four retailer searches, uses its nominal-size `air filter` query, carries `filterwizard-20` on Amazon, uses the established sponsored/new-tab attributes, and identifies only Amazon as the active affiliate. `filter_size_page_retailer_click` records the comparison action; the delegated `amazon_click` also records Amazon attribution metadata.

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

The black-filter troubleshooting article has moderate commercial intent but does not hard-code retailer destinations. Its replacement and conclusion CTAs lead to the existing Filter Finder, where retailer choices remain gated behind a valid confirmed three-dimensional size. The shared footer disclosure, Store ID, link attributes, and delegated click tracking remain unchanged.

The bent-filter troubleshooting article has moderate commercial intent but contains no direct retailer destinations. Its two CTAs lead to the existing Filter Finder, where retailer choices and Amazon attribution remain gated behind a valid confirmed three-dimensional size. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

The one-sided-loading troubleshooting article has moderate commercial intent and no direct retailer destinations. Its two CTAs lead to the existing Filter Finder after size and fit guidance; retailer choices remain gated behind a valid confirmed three-dimensional size. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

The filter-whistling troubleshooting article has moderate commercial intent and no direct retailer destinations. Its two CTAs follow size, fit, loading, and MERV guidance and lead to the existing Filter Finder, where retailer choices remain gated behind a valid confirmed three-dimensional size. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

The return-filter-configuration article has moderate commercial intent and no direct retailer destinations. Its two CTAs appear only after readers identify the intended filter locations and confirm physical size; retailer choices remain gated behind a valid three-dimensional size in the existing Filter Finder. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

The return-plus-furnace-filter article has moderate commercial intent and no direct retailer destinations. Its two CTAs follow configuration identification and safe inspection guidance; retailer choices remain gated behind a valid confirmed three-dimensional size in the existing Filter Finder. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

Update this file when: Store ID, retailers, URL generation, disclosures, link attributes, product rules, or tracking changes.
