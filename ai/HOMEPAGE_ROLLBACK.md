# Homepage Rollback

Last verified: 2026-11-04

## Protected baseline

- Original production commit: `169f1abf111174a9f9386cca9633fcdeb66f2e17`
- Annotated rollback tag: `homepage-pre-shopping-redesign-2026-11-04`
- Shopping-first implementation commit: `9c37a1640aeeb7f0f61051e81b1a5b0809caba99`
- Archived preview: `https://filter-wizard.com/legacy-homepage/`

The archived preview is the original `index.html` plus only a `noindex, follow` directive and a visible archive banner. It keeps the original self-canonical homepage URL, is excluded from `sitemap.xml`, and uses the same root-relative assets and Filter Finder implementation. The annotated tag remains the authoritative complete baseline.

## Preferred complete rollback

Create a normal revert commit so later history remains intact. Do not reset or force-push `main`.

```powershell
git fetch origin --tags
git switch main
git pull --ff-only origin main
git switch -c rollback/homepage-shopping-redesign
git revert 9c37a1640aeeb7f0f61051e81b1a5b0809caba99
```

Review the revert, run the validation steps below, then merge or fast-forward the focused rollback branch and push normally. If later work has changed the same shared CSS or JavaScript, resolve the conflict by preserving that later work while removing only the shopping-homepage additions.

## Restore only the original homepage

If the goal is to restore the original homepage without removing unrelated later work, restore `index.html` from the protected tag on a focused branch:

```powershell
git fetch origin --tags
git switch main
git pull --ff-only origin main
git switch -c rollback/original-homepage
git restore --source=homepage-pre-shopping-redesign-2026-11-04 -- index.html
git diff --check
git diff -- index.html
git add -- index.html
git commit -m "Restore pre-shopping homepage"
```

The original page continues to work with the additive shared CSS and guarded JavaScript currently deployed. Restore `assets/css/style.css` or `assets/js/script.js` from the tag only after proving no later page depends on changes made after the baseline. Removing `/legacy-homepage/` is optional when only the canonical homepage is restored; it remains non-indexable either way.

## Validation after a rollback

1. Serve the repository over local HTTP; do not validate with `file://`.
2. Check the homepage at 320, 375, 390, 430, 768, 1024, and 1440 pixels.
3. Verify mobile navigation, keyboard controls, `aria-expanded`, Finder focus trapping and Escape close behavior.
4. Complete both known-size and unknown-size Finder paths. Unknown-size results must show no retailer links.
5. Confirm Amazon URLs contain `tag=filterwizard-20`, sponsored link attributes remain present, and GA4/Clarity each initialize once.
6. Run `node --check assets/js/script.js`, `node tools/filter-size-pages.mjs validate`, `node tools/internal-link-audit.mjs --output internal-link-report.json`, and `git diff --check`.
7. Verify the homepage canonical, `robots.txt`, `sitemap.xml`, legal links, Formspree action, consent controls, and `/.well-known/security.txt`.
8. Deploy through `main`, wait for propagation, then verify the live homepage, Finder, assets, analytics initialization, affiliate tag, and clean local/origin synchronization.

## Rehearsal record

Before deployment on 2026-11-04, the original and redesigned commits were compared and the complete production patch passed `git apply --check -R`. The archived preview also matched the tagged original line-for-line after removing only its noindex line and archive banner. This validates that the implementation commit can be cleanly reversed at the tested repository state; it does not replace a fresh conflict review after future changes.

Update this file when: the protected tag, homepage implementation commit, preview route, shared dependencies, deployment method, or rollback result changes.
