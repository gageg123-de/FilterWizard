# Analytics

Last verified: 2026-08-31

The dust-around-vents guide reuses shared article page-view, scroll-depth, share, two Filter Finder CTA, Formspree interaction, and delegated downstream retailer-click behavior. Its article slug and email source are `dust-around-air-vents-filter-problem` and `blog-dust-around-air-vents-filter-problem`; no analytics script or listener was added.

The new-filter odor guide reuses shared article page-view, scroll-depth, share, two Filter Finder CTA, Formspree interaction, and delegated downstream retailer-click behavior. Its article slug and email source are `why-does-my-new-air-filter-smell` and `blog-why-does-my-new-air-filter-smell`; no analytics script or listener was added.

The dirty-filter cooling guide reuses shared article page-view, scroll-depth, share, Filter Finder CTA, Formspree interaction, and delegated retailer-click behavior. Its article slug and email source are `can-dirty-air-filter-cause-ac-not-to-cool` and `blog-can-dirty-air-filter-cause-ac-not-to-cool`; no listener or analytics script was added.

The dust buying pillar reuses the shared article event path for page view, scroll depth, share clicks, two Filter Finder CTA clicks, Formspree interaction, and downstream size-gated retailer clicks. It adds no analytics scripts or listeners and sends no new parameters.

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

Size-page events use only the static page size (`20x25x1`, `16x25x1`, or `20x20x1`), CTA location, retailer name/link location, related article slug and page path. They do not capture user-entered measurements. Amazon clicks also pass through the existing delegated `amazon_click` handler; this is a distinct attribution event, not a second `filter_size_page_retailer_click`.

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

The MERV comparison article uses the shared article attributes and global listeners for page view, scroll depth, top/bottom sharing, Filter Finder CTA clicks, and Formspree lead handling. It adds no page-specific listeners or retailer links, so it does not create duplicate article events or a new affiliate-click path.

The rapid-loading troubleshooting article uses the same shared attributes and listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling. It adds no page-specific listener or retailer link.

The black-filter troubleshooting article uses the shared article attributes and listeners for page view, scroll depth, top/bottom sharing, Filter Finder CTA clicks, and Formspree lead handling with source `blog-why-is-my-air-filter-black`. It adds no page-specific listeners.

The wet-filter troubleshooting article uses the shared article attributes and listeners for page view, scroll depth, top/bottom sharing, three Filter Finder CTA clicks, and Formspree lead handling with source `blog-why-is-my-air-filter-wet`. It adds no page-specific listeners or direct retailer links, so the existing confirmed-size retailer gate remains the only shopping path.

The bent-filter troubleshooting article uses shared article attributes and listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-why-is-my-air-filter-bending`. It adds no page-specific listeners or direct retailer links.

The one-sided-loading troubleshooting article uses shared article attributes and listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-why-is-my-air-filter-dirty-on-one-side`. It adds no page-specific listeners or direct retailer links.

The filter-whistling troubleshooting article uses shared article attributes and listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-why-does-my-air-filter-whistle`. It adds no page-specific listeners or direct retailer links.

The return-filter-configuration article uses shared article attributes and listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-filters-in-every-return-vent`. It adds no page-specific listeners or direct retailer links.

The return-plus-furnace-filter article uses those same delegated listeners for article page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-filter-at-return-and-furnace`. It adds no page-specific listener, raw personal data, direct retailer link, or duplicate analytics script.

The filter-restriction pillar uses the shared delegated article listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-can-air-filter-be-too-restrictive`. It adds no page-specific listener, raw personal data, direct retailer link, or duplicate analytics script.

The filter-thickness buyer guide uses the same shared article listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-1-inch-vs-2-inch-vs-4-inch-air-filters`. It adds no page-specific listener, raw personal data, direct retailer link, or duplicate analytics script.

The fiberglass-versus-pleated guide uses the same shared article listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-fiberglass-vs-pleated-air-filters`. It adds no page-specific listener, raw personal data, direct retailer link, or duplicate analytics script.

The air-filter-fit guide uses the shared article listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-how-tight-should-an-air-filter-fit`. It adds no page-specific listener, raw personal data, direct retailer link, or duplicate analytics script.

The air-filter-size substitution guide uses the shared article listeners for page view, scroll depth, top/bottom sharing, two Filter Finder CTA clicks, and Formspree lead handling with source `blog-can-i-use-a-slightly-different-size-air-filter`. It adds no page-specific listener, raw personal data, direct retailer link, or duplicate analytics script.

Update this file when: IDs, initialization, consent gating, event names/parameters, or external verification changes.
