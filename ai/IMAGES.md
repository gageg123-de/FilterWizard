# Images

Last verified: 2026-07-19

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

Update this file when: directories, formats, dimensions, responsive conventions, preview behavior, or production assets change.
