# Privacy and Consent

Last verified: 2026-07-19

This is implementation documentation, not legal advice or a compliance guarantee. Policies require professional review when services or practices change.

This file owns the technical data-flow and consent contract. Security controls belong to [`SECURITY.md`](SECURITY.md), event minimization to [`ANALYTICS.md`](ANALYTICS.md), and published representations to the canonical legal pages linked below. A policy statement does not prove implementation, and implementation does not prove legal sufficiency.

`consentManager` in [`../assets/js/script.js`](../assets/js/script.js) creates the cookie banner and settings dialog. One optional category exists: analytics, granted or denied. Advertising storage, ad user data, and ad personalization stay denied. Preference storage is treated as essential.

The choice is stored in local storage as `filterWizardConsent` with version 1, timestamp, analytics value, and 183-day maximum age. Users can reopen settings through footer `data-cookie-settings` buttons. Google Consent Mode is defaulted before GA configuration. Clarity receives `consentv2`; it retries briefly until Clarity is available.

GA and Clarity script resources are loaded on production pages regardless of choice, while storage consent defaults denied. Do not describe this as “analytics scripts load only after acceptance.” If a jurisdiction or policy requires no pre-consent network load, the architecture must change and be legally reviewed.

Formspree receives email, source, timestamp, and Finder result fields when users submit. Local storage also retains the latest signup object and Finder report. Inputs containing email/size are marked `data-clarity-mask`. Analytics must never receive raw email, phone, payment information, or raw invalid size.

## Data inventory and change gate

| Data | Location/recipient | Purpose | Current retention evidence |
|---|---|---|---|
| Consent choice | Browser local storage | Remember analytics preference | 183-day client expiry |
| Latest Finder report | Browser local storage | Restore/use latest result | No explicit client expiry documented |
| Latest signup object | Browser local storage | Client-side signup state | No explicit client expiry documented |
| Email and submitted fields | Formspree | Lead/reminder interest | Provider/account retention unknown locally |
| Analytics interaction data | GA4/Clarity | Product/content measurement | Dashboard retention unknown locally |

Any new field, storage, third party, upload, location signal, account, or reminder backend requires purpose, minimization, recipient, retention/deletion, consent basis, masking, policy, security, and user-control review before implementation. Do not infer that “optional” removes this requirement.

The repository does not prove reminder delivery, unsubscribe processing, Formspree account retention, or downstream contact-list handling. These are operational/legal unknowns that must be verified outside the public repository before stronger service claims or automation.

Canonical policies: [`../legal/privacy-policy.html`](../legal/privacy-policy.html), [`../legal/cookie-policy.html`](../legal/cookie-policy.html), [`../legal/terms-of-use.html`](../legal/terms-of-use.html), and [`../legal/affiliate-disclosure.html`](../legal/affiliate-disclosure.html). Root variants are compatibility redirects.

Update this file when: services, storage keys/retention, form payloads, consent categories, loading order, or policies change.
