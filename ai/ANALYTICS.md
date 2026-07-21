# Analytics

Last verified: 2026-07-19

## Active integrations

- GA4 measurement ID `G-64VWBW3NHS` is initialized in production HTML. There is no Google Tag Manager container; `googletagmanager.com/gtag/js` is the GA4 loader.
- Microsoft Clarity project `xbqsjc3yut` is initialized in production HTML.
- No Search Console verification meta tag was found. A root Cloudflare verification file exists, which is not evidence of Search Console setup.

Pages set Google consent defaults to denied before `gtag('config')`, then load GA/Clarity scripts. [`../assets/js/script.js`](../assets/js/script.js) updates Google consent and calls Clarity `consentv2` based on stored/user choice. Network scripts therefore load before opt-in even though analytics storage defaults denied; this distinction must be reflected in privacy review.

This file documents instrumentation, not legal compliance or confirmed dashboard receipt. Consent behavior is authoritative in [`PRIVACY_AND_CONSENT.md`](PRIVACY_AND_CONSENT.md); funnel interpretation belongs to [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md).

## Event families

- Finder lifecycle: modal opened/closed, started, step completed, abandoned, restarted, analysis started/completed, completed, result/summary/product/email prompt viewed.
- Inputs/errors: `filter_size_path_selected`, `filter_size_entered`, `filter_conditions_selected`, invalid size, conditions required, post-result size confirmation.
- Actions: buying options, save/continue links, retailer click/view, confirm-size help, copy.
- Affiliate: `amazon_click`, missing-tag diagnostic.
- Articles: `article_page_view`, `article_scroll_depth`, `article_share_click`, `article_filter_finder_click`.
- Filter-size pilot: `filter_size_page_view`, `filter_size_page_filter_finder_click`, `filter_size_page_retailer_click`, `filter_size_page_related_article_click`.
- Leads: configured form-specific event plus `generate_lead`; hero Finder click is also tracked.

Parameters include normalized size, MERV, interval, replacements/year, confidence, conditions, location, source, link URL/location, and article slug. Invalid inputs send length, not raw text. Email events send `has_email`, not the address.

Size-page events use only the static page size (`20x25x1` or `16x25x1`), CTA location, retailer name/link location, related article slug and page path. They do not capture user-entered measurements. Amazon clicks also pass through the existing delegated `amazon_click` handler; this is a distinct attribution event, not a second `filter_size_page_retailer_click`.

## Testing and risks

Use GA4 DebugView/Realtime and Clarity dashboard after explicit consent; verify decline, accept, saved choice, settings changes, 183-day expiry, single listeners, and no raw private values. Ad storage always remains denied. Live behavior and reporting access cannot be verified from this repository.

Recommended future taxonomy: keep `object_action_state` names, one documented parameter dictionary, explicit consent test cases, and versioned dashboards; proposal only.

## Event governance

- Define the user question an event answers before adding it; prefer an existing event with a stable parameter when semantics truly match.
- Event names and parameter meanings are contracts. Renaming or repurposing creates a reporting break and requires a migration note.
- Never send email, free-form invalid input, full form payloads, local-storage objects, or values that can unexpectedly contain personal information.
- Distinguish emitted in code, observed in browser, received in GA4/Clarity, and used in a dashboard. Each is a separate evidence level.
- Avoid double counting from direct listeners plus delegated/global outbound listeners; test one physical action at a time.

Missing operational documentation: no repository-owned event dictionary with exact parameter types, dashboard definitions, baseline window, owner, or alert thresholds exists. Until externally verified, report these as unknown rather than inventing KPI targets.

Update this file when: IDs, initialization, consent gating, event names/parameters, or external verification changes.
