# Affiliate Integration

Last verified: 2026-09-01

The 16x20x1, 14x20x1 and 14x25x1 pages extend the existing explicit size-intent retailer pattern without changing affiliate architecture. Each warns readers to confirm fit, provides Amazon/Home Depot/Lowe's searches plus a Filterbuy nominal-size path, preserves `filterwizard-20`, sponsored/new-tab attributes, disclosure and delegated click tracking, and contains no price or personalized compatibility claim.

The brown-filter guide has troubleshooting intent and no direct retailer block. Its two delayed Finder CTAs appear only after condition, moisture, loading, fit, and replacement guidance; it does not imply that buying a filter identifies or corrects an unknown contaminant source. Existing size gating, disclosure, sponsored attributes, delegated click tracking, and `filterwizard-20` remain unchanged.

The dust-around-vents guide has troubleshooting intent and no direct retailer block. Its two delayed Finder CTAs follow filter-condition, fit, bypass, and duct-cleaning boundaries; it does not imply that buying a filter resolves an unidentified register or duct condition. Existing size gating, disclosure, sponsored attributes, delegated click tracking, and `filterwizard-20` remain unchanged.

The new-filter odor guide has troubleshooting intent and no direct retailer block. Its two delayed Filter Finder CTAs appear only after the reader establishes that replacement may be warranted and confirms size; it does not imply that buying a filter resolves an unidentified HVAC odor. Existing size gating, sponsored attributes, delegated click tracking, disclosure, and `filterwizard-20` remain unchanged.

The dirty-filter cooling guide has troubleshooting intent and no direct retailer block. Its two delayed Filter Finder CTAs follow safe filter diagnosis and size confirmation; retailer choices remain gated behind a valid three-dimensional size. It does not claim that buying a filter will solve an undiagnosed cooling failure, and the `filterwizard-20` path is unchanged.

The dust pillar has high commercial-investigation intent but no direct retailer block. Its two delayed Filter Finder CTAs appear after MERV, media, depth, source, and compatibility guidance; retailer choices remain gated behind a valid confirmed three-dimensional size. The existing `filterwizard-20` tag, disclosures, sponsored attributes, and delegated click tracking are unchanged.

The smoke buyer guide has high commercial-investigation intent but no direct retailer block. Its two delayed Filter Finder CTAs follow particle-versus-gas/odor, MERV, size, fit, loading, and compatibility guidance; correctly sized retailer choices remain gated in the existing Finder. It makes no product-ranking, odor-elimination, or exposure-safety claim.

The MERV 11-versus-13 allergy comparison has high purchase-decision intent but no direct retailer block. Its two delayed Filter Finder CTAs follow particle thresholds, product resistance, depth, fit, loading, and compatibility guidance; retailer options remain gated behind a confirmed three-dimensional size. It makes no medical, universal-MERV-13, or product-ranking claim.

The air-filter-fit guide has strong sizing-to-purchase intent but no direct retailer block. Its two delayed Filter Finder CTAs follow nominal-versus-actual sizing, loose/tight diagnosis, measurement, and fit confirmation; retailer options remain gated behind a valid confirmed three-dimensional size. It preserves the `filterwizard-20` path and makes no mismatched-size recommendation.

The pets pillar is a high-commercial-intent guide but uses no direct retailer block. Two delayed Filter Finder CTAs preserve existing eligibility, sponsored attributes, `filterwizard-20`, and delegated click tracking.

Amazon Associates Store ID `filterwizard-20` is defined as `amazonAffiliateTag` in [`../assets/js/script.js`](../assets/js/script.js). Do not change or remove it without owner authorization.

This file owns commercial link eligibility, disclosure, and attribution safeguards. Recommendation eligibility remains governed by [`FILTER_LOGIC.md`](FILTER_LOGIC.md); event names/parameters belong to [`ANALYTICS.md`](ANALYTICS.md); business trade-offs belong to [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md).

`buildRetailerSearchQuery` combines confirmed size, MERV, and `air filter`. `getRetailerLinks` builds `https://www.amazon.com/s?k=...&tag=filterwizard-20` dynamically and checks the tag. Missing tags emit `filter_wizard_amazon_tag_missing`. Home Depot and Lowe's use dynamic comparison searches. Filterbuy uses its nominal-size category convention, `https://filterbuy.com/air-filters/{normalized-size}/`, rather than a search phrase in the path. These comparison retailers must not be represented as active affiliate programs.

Retailer cards appear only for confirmed sizes. Links open a new tab and use `rel="nofollow sponsored noopener"`, `data-link-location="filter-finder-results"`, retailer data attributes, and filter size for Amazon. A delegated document click listener emits `amazon_click`; card listeners emit `filter_finder_retailer_clicked`. Page/footer and result disclosures state the Amazon relationship.

The six static size pages are explicit size-intent contexts. Each shows a prominent fit warning before four retailer searches, uses its nominal-size `air filter` query, carries `filterwizard-20` on Amazon, uses the established sponsored/new-tab attributes, and identifies only Amazon as the active affiliate. `filter_size_page_retailer_click` records the comparison action; the delegated `amazon_click` also records Amazon attribution metadata.

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

The filter-restriction pillar has moderately high commercial intent and no direct retailer destinations. Its two CTAs follow restriction education and safe inspection guidance; retailer choices remain gated behind a valid confirmed three-dimensional size in the existing Filter Finder. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

The filter-thickness buyer guide has high commercial-investigation intent but no direct retailer destinations. Its two CTAs appear only after depth, fit, MERV, and cabinet-compatibility guidance; retailer choices remain gated behind a valid confirmed three-dimensional size in the existing Filter Finder. It does not imply that purchasing a deeper filter upgrades a system. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

The fiberglass-versus-pleated guide has high commercial-investigation intent but no direct retailer destinations. Its two CTAs follow construction, filtration, airflow, MERV, thickness, and compatibility guidance; retailer choices remain gated behind a valid confirmed three-dimensional size in the existing Filter Finder. It does not frame pleated media as an automatic upgrade. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

The size-substitution guide has high sizing-to-purchase intent but no direct retailer destinations. Its two CTAs follow confirmation of the intended nominal length, width, and thickness; retailer choices remain gated behind a valid confirmed three-dimensional size in the existing Filter Finder. It does not recommend a nearby nominal size to create a retailer click. The Store ID `filterwizard-20`, disclosures, sponsored attributes, and delegated click tracking are unchanged.

Update this file when: Store ID, retailers, URL generation, disclosures, link attributes, product rules, or tracking changes.
