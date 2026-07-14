# Filter Wizard File Structure

This document defines the current project organization and the rules for keeping the static site maintainable.

## Final Directory Tree

```text
/
├── index.html
├── CNAME
├── .nojekyll
├── robots.txt
├── sitemap.xml
├── .well-known/
│   └── security.txt
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── icons/
│   └── images/
│       ├── brand/
│       ├── homepage/
│       ├── blog/
│       ├── products/
│       └── social/
├── blog/
├── legal/
├── archive/
│   ├── change-sets/
│   ├── legacy/
│   └── unclassified/
└── docs/
    └── project-notes/
```

## Naming Conventions

- Use lowercase filenames.
- Use hyphens between words.
- Prefer descriptive names over dates or generated names.
- Keep public URLs stable once indexed.
- Use `.webp` for optimized website images where possible.

## Image Rules

- Brand images go in `assets/images/brand/`.
- Homepage images go in `assets/images/homepage/`.
- Blog article images go in `assets/images/blog/`.
- Filter Finder product images go in `assets/images/products/`.
- Social media exports go in `assets/images/social/`.
- Favicons and app icons go in `assets/icons/`.
- Use root-relative paths in live HTML, CSS, and JavaScript.

Example:

```html
<img src="/assets/images/blog/example.webp" alt="Descriptive text">
```

## Blog Post Rules

- Keep blog pages in `blog/`.
- Preserve existing `.html` article URLs unless there is a strong SEO reason to migrate.
- Add every new public article to `blog/index.html` and `sitemap.xml`.
- Use canonical URLs matching the public production URL.
- Include Article JSON-LD for long-form articles.
- Keep FAQ JSON-LD exactly aligned with visible FAQ content.

## Scripts And Styles

- The primary stylesheet is `/assets/css/style.css`.
- The primary script is `/assets/js/script.js`.
- Do not add another global stylesheet or script unless there is a clear maintenance reason.
- Keep analytics, Amazon click tracking, cookie consent, and Filter Finder logic in the existing script unless future scope requires a split.

## Root Files

These should remain at the repository root:

- `index.html`
- `CNAME`
- `.nojekyll`
- `robots.txt`
- `sitemap.xml`
- `.well-known/`
- required verification files
- old public URL redirect files

## Preserving Old URLs

If a public page moves, preserve the old URL with a lightweight HTML redirect page:

- include a canonical link to the new URL
- include a meta refresh
- include a visible fallback link
- do not use JavaScript-only redirects

## Avoiding Duplicate Assets

Before adding an image or downloaded file:

1. Search for the filename.
2. Search for visually similar assets in the relevant folder.
3. If replacing an asset, update references rather than keeping multiple versions in live folders.
4. Put uncertain or historical material into `archive/`, not the root.

Exact duplicates should only be deleted after comparing file hashes and confirming that no live file references the duplicate path.

## Archive Usage

Use:

- `archive/change-sets/` for historical Codex file bundles.
- `archive/legacy/` for old assets or source material that may be useful later.
- `archive/unclassified/` for temporary output or files that need human review.

Archive files are preserved for context. They should not be included in live navigation, structured data, or `sitemap.xml`.
