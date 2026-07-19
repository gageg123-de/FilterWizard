# Performance

Last verified: 2026-07-19

The site is static with one shared CSS file (~85KB) and one shared JS file (~89KB uncompressed locally as of 2026-07-19). There is no framework/runtime bundle. GA4 and Clarity are the main third-party execution costs; Formspree is used only on submit.

File sizes are point-in-time repository observations, not budgets. Re-measure after material changes. User-facing performance decisions follow the business and accessibility priorities in [`DECISION_FRAMEWORK.md`](DECISION_FRAMEWORK.md); do not remove required disclosure, labels, or error handling to improve a synthetic score.

Responsive homepage WebPs and article WebPs are generally optimized. Two large source PNGs in `assets/images/homepage` exceed 2MB; verify references before removal. Product images load when results render. Hero/article images should carry dimensions and intentional eager/lazy priority. Missing dimensions and fixed containers around intrinsic images are CLS risks.

## Budgets and goals

- Real-user 75th percentile goals: LCP ≤2.5s, CLS ≤0.1, INP ≤200ms.
- Keep critical hero assets intentionally optimized; article WebPs roughly ≤200KB when quality permits.
- Avoid unnecessary JS growth, duplicate analytics, new blocking fonts/libraries, and giant inline scripts.
- Preserve static hosting and cache-friendly root-relative assets. Cache-bust shared CSS/JS query strings on affected pages when deployments may retain stale assets.

Measure with Lighthouse as a laboratory signal and field Core Web Vitals separately; neither guarantees the other. Test slow mobile, image failures, modal interaction, and consent/third-party impact. Cloudflare caching rules are not stored locally and must be verified externally.

For a material regression, identify the changed resource and user journey, compare like-for-like runs, and choose the smallest reversible fix. Do not claim field improvement without field data or cache behavior without external verification.

The 20x25x1 pilot adds no new asset or library. It reuses one 53KB article WebP and existing UI components; its only shared-code additions are scoped breadcrumb/retailer-link styling and delegated size-page analytics.

Update this file when: asset sizes, third parties, loading strategy, caching, JS/CSS architecture, or budgets change.
