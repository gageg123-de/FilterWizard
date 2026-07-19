# Design System

Last verified: 2026-07-19

The project has a shared stylesheet and recognizable patterns, but not a fully formal component library.

## Formal tokens

Defined in [`../assets/css/style.css`](../assets/css/style.css): white `#fff`, surface `#f5f9fc`, surface-blue `#edf6fc`, text `#102033`, muted `#647381`, line `#d9e7ee`, blue `#2477d4`, blue-dark `#175fae`, blue-soft `#dcefff`, green `#2fb36d`, green-dark `#198454`, orange `#f28b2e`, two shadow tokens, and 68px header height.

Typography uses system UI/Inter fallbacks, responsive `clamp()` sizes, strong navy headings, and muted body/metadata. Repeated but informal values include 14–24px padding, 10–22px gaps, 14–24px radii, and several contextual shadows.

## Components

- `.btn`, `.btn-primary`, `.btn-secondary`: 54px minimum height, rounded, focus-visible outline. Article preview CTAs use the primary class full-width.
- `.blog-card-grid`, `.blog-card`, `.blog-card-body`, `.blog-card-category`: text-only article previews; no images or reserved media wrappers.
- Header/nav, footer, content cards, quick-answer/CTA cards, article figures, forms, cookie banner/settings dialog, Finder modal/options/results, retailer cards, and native `details` disclosures share the same palette and radii.
- Article figures use 3:2 images, `width:100%`, `height:auto`, rounded corners, and captions.
- `.page-breadcrumb` provides the reusable visible breadcrumb treatment; the 20x25x1 pilot also reuses article, table, MERV, FAQ, related-link and retailer-card components.

Breakpoints: 980px, 820px, and 640px; reduced motion is handled with `prefers-reduced-motion: reduce`. Mobile patterns collapse grids, simplify padding, keep touch controls large, and constrain modal height/scrolling.

Rules: reuse tokens/classes; do not introduce a per-article visual language; test 320px and long text; maintain blue functional CTAs, green positive states, and amber caution states; preserve visible focus; cache-bust CSS query strings on affected pages after production CSS changes.

## Decision rules

- Reuse an existing semantic component when structure and behavior match; do not reuse a class only because its current appearance is convenient.
- Prefer shared fixes when the defect affects the component contract; prefer local markup correction when one instance violates that contract.
- New tokens require repeated use or a clear semantic role. Avoid one-off colors, spacing scales, shadows, and breakpoints.
- Color names describe appearance; accessible labels/copy must carry meaning independently.
- Accessibility requirements are authoritative in [`ACCESSIBILITY.md`](ACCESSIBILITY.md); performance/loading requirements are authoritative in [`PERFORMANCE.md`](PERFORMANCE.md).

Update this file when: tokens, breakpoints, shared components, article previews, modal layouts, focus, or motion rules change.
