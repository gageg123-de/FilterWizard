# Project

Last verified: 2026-09-02

## Mission and audience

Filter Wizard helps homeowners—especially mobile users who may not know HVAC terminology—avoid buying the wrong air filter and remember practical replacement timing. The value proposition is free size guidance, cautious MERV guidance, replacement scheduling, estimated annual filter cost, and retailer comparison.

## Implemented now

For the strategic thesis, audience jobs, funnel, success measures, and investment gates, see [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md). This file owns the concise product definition and implementation-status boundary.

- Static custom-domain website at `filter-wizard.com`.
- Four-step Filter Finder in [`../index.html`](../index.html), powered by [`../assets/js/script.js`](../assets/js/script.js).
- Known-size validation and autocomplete; unknown-size measurement/location guidance.
- MERV 8/11/13 recommendations with compatibility cautions.
- 45/60/75/90-day schedules, reminder months, and price-range-based annual estimates.
- Amazon, Home Depot, Lowe's, and Filterbuy search options after size confirmation.
- Amazon Associates Store ID `filterwizard-20`.
- Thirty-three blog articles, a blog index, homepage guide previews, legal pages, email-interest capture, GA4, Clarity, and consent controls.
- Nine production filter-size guides: 20x25x1, 16x25x1, 20x20x1, 16x20x1, 14x20x1, 14x25x1, 16x24x1, 18x20x1 and 24x24x1 under [`../filter-sizes/`](../filter-sizes/).

## Business and acquisition

- Current monetization: Amazon affiliate clicks. Other retailer links are comparisons, not verified affiliate relationships.
- Acquisition: organic search, practical blog content, Pinterest assets already stored under [`../assets/images/social/pinterest/`](../assets/images/social/pinterest/), and social sharing.
- Conversions: complete the Finder, click a retailer, submit an optional email, or continue reading.

## Status boundaries

- Implemented: features listed above.
- Implemented controlled nine-page set: the six-page baseline plus differentiated 16x24x1, 18x20x1 and 24x24x1 landing pages. Additional pages remain proposed and require explicit scope, real-world size evidence, and information gain beyond dimension substitution.
- Experimental: reminders, saved/multi-filter profiles, history, photo assistance, model lookup, property-manager tools.
- Deprecated: subscription/founding-member fake-door positioning and direct checkout. Do not revive without a product decision.
- Not implemented: accounts, payments, inventory, fulfillment, backend, database, formal analytics dashboard, Cloudflare Workers/Pages code.

Near-term direction: validate content traffic, Finder completion, affiliate clicks, email demand, and accurate guidance before adding operational complexity.

## Product invariants

- Physical size is user-confirmed; the Finder does not discover or guarantee dimensions.
- MERV output is household guidance, not equipment compatibility approval or medical advice.
- Retailer options require a parseable confirmed size and remain choices, not endorsements.
- Email is optional. The repository submits reminder interest to Formspree, but contains no automated scheduler or delivery system and cannot prove that reminder emails are sent.
- Public claims must be supported by repository content or clearly named external evidence.

Update this file when: the business model, implemented product set, audience, acquisition strategy, or status of planned features changes.
