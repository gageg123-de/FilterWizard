# Images

Last verified: 2026-07-30

## Directories and usage

- [`../assets/images/brand/`](../assets/images/brand/): PNG logo.
- [`../assets/images/homepage/`](../assets/images/homepage/): responsive homepage PNG/WebP families.
- [`../assets/images/blog/`](../assets/images/blog/): article hero/supporting WebPs.
- [`../assets/images/products/`](../assets/images/products/): representative Finder product illustrations.
- [`../assets/images/social/pinterest/`](../assets/images/social/pinterest/): vertical campaign assets.

Use lowercase descriptive hyphenated names. WebP is the production default for photos/graphics; icons use ICO/SVG/PNG. Article images are normally 1200×800 (3:2), roughly under 200KB when quality permits. Preserve source files outside production paths when supplied; do not upscale low-resolution assets.

Hero images: explicit dimensions, `loading="eager"`, `fetchpriority="high"`, async decoding. Supporting/card-independent images: lazy and async. CSS must preserve aspect ratio and avoid stretching; use `object-fit:cover` only where a deliberately cropped fixed container exists. Article preview cards currently contain no images.

Meaningful images need concise useful alt text and often a caption. Decorative assets use empty alt or appropriate `aria-hidden`; do not repeat adjacent text mechanically. Generated text, numbers, arrows, equipment details, and measurement markings require visual inspection before publishing.

## Source and approval record

For each new production image, retain the accessible original outside the optimized destination when supplied and report: source path, production path, transformations, dimensions, byte size, alt text, caption, loading behavior, and visual QA outcome. Do not document local source paths in production HTML. Stop when embedded text, measurements, labels, safety cues, or equipment details are malformed or misleading.

Verify 320px crops, source/destination capitalization, HTTP 200, schema/social existence, dimensions, file size, no overflow, and CLS protection. Do not delete hero assets merely because previews are text-only: article pages and social/schema metadata still use them.

Largest current files are unused-or-source-scale homepage PNGs above 2MB; production responsive WebPs are much smaller. Confirm actual references before deleting or optimizing.

Image removal is a dependency decision: search HTML, CSS, JS, metadata, schema, manifests, and social assets first. An image absent from visible cards may still be required for an article hero or social preview.

The existing 1200×800, 53,626-byte `how-to-find-air-filter-size-hero.webp` is intentionally reused by the 20x25x1 pilot as an instructional figure and social/WebPage image. It visibly shows the printed nominal size and requires no duplicate derivative. Its reuse means the asset now has both blog and filter-size-page dependencies.

The 16x25x1 page reuses the approved generic `how-to-measure-air-filter.webp` for its figure and social/WebPage image because it teaches length, width and thickness without asserting a universal actual dimension. A supplied 16x25x1 graphic was not published because its embedded savings, equipment-protection and cleaner-air claims were not qualified by repository evidence.

The 20x20x1 page also reuses `how-to-measure-air-filter.webp` for its visible figure and social/WebPage image. No derivative is needed because the graphic is size-neutral and the page copy carries the square-size-specific guidance.

The airflow-direction article uses two 1200×800 WebPs. `air-filter-arrow-hero.webp` is an optimized crop of the supplied homeowner-installation photograph (83,222 bytes). `airflow-direction-diagram.webp` is an optimized correction of the supplied diagram (42,918 bytes): the source had a printed edge arrow that conflicted with its left-to-right airflow arrows, so the production graphic was regenerated from that reference with all arrows pointing consistently from the return-air side toward the furnace/blower. Both final assets were visually checked for readable, non-conflicting labels.

The MERV comparison article uses three corrected 1200×800 WebPs: `merv-8-vs-11-vs-13-hero.webp` (48,632 bytes), `merv-particle-comparison.webp` (66,702 bytes), and `merv-filter-choice-guide.webp` (57,642 bytes). The supplied hero’s malformed labels were replaced with exact MERV 8, MERV 11, and MERV 13 labels. The supplied comparison graphic’s duplicated panel and overstated capture claims were replaced with a single relative-particle explanation. The supplied decision graphic’s virus, gas, medical, and universal-performance claims were replaced with conditional household guidance and an explicit equipment-compatibility check.

The vacuum-and-reuse article uses three corrected 1200×800 WebPs: `can-you-vacuum-air-filter-hero.webp` (71,652 bytes), `disposable-vs-washable-filter-guide.webp` (78,206 bytes), and `clean-or-replace-air-filter.webp` (60,994 bytes). Brand-like marks were removed from the supplied hero and the vacuum is shown idle. The supporting graphics replace duplicated wording, “100% dry,” universal material assumptions, and lengthy small print with readable conditional guidance: replace disposable filters, clean only verified washable filters as directed, and reinstall only when completely dry.

The rapid-loading troubleshooting article uses three visually verified 1200×800 WebPs: `why-air-filter-gets-dirty-fast-hero.webp` (53,824 bytes), `air-filter-dirty-fast-causes.webp` (67,238 bytes), and `normal-vs-abnormal-filter-loading.webp` (56,272 bytes). The hero shows moderate gray loading and a readable installation date without brands or hazardous behavior. Both infographics use exact reviewed labels and avoid mold diagnoses, equipment-failure claims, alarmist warnings, and duct-cleaning claims.

The black-filter troubleshooting article uses three generated and visually verified 1200×800 WebPs: `why-air-filter-black-hero.webp` (87,670 bytes), `black-air-filter-causes.webp` (67,064 bytes), and `black-filter-normal-vs-investigate.webp` (55,122 bytes). The hero shows realistic even dark-gray loading without brands, mold, smoke clouds, or dramatic contamination. The cause graphic contains the six reviewed particle-source labels, and the decision graphic contains the exact five-item “Often Normal” and “Investigate Further” lists without alarmist symbols or diagnostic claims.

The wet-filter troubleshooting article uses three generated and visually verified 1200×800 WebPs: `why-air-filter-wet-hero.webp` (72,864 bytes), `wet-air-filter-causes.webp` (69,330 bytes), and `wet-filter-replace-or-call.webp` (83,762 bytes). The hero shows one subtly damp filter without dripping water, flooding, brands, or hazardous access. The cause graphic contains six correctly spelled drainage, icing, condensation, and nearby-leak labels. The decision graphic reproduces the reviewed “Replace and Monitor” and “Call for HVAC Service” conditions without diagnostic or emergency claims. All three sources remain in the generated-image workspace; production derivatives were resized with a high-quality 3:2 crop-free conversion and visually rechecked.

Update this file when: directories, formats, dimensions, responsive conventions, preview behavior, or production assets change.
