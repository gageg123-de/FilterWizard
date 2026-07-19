# Deployment

Last verified: 2026-07-19

## Repository evidence

The repository is static and `main` tracks `origin/main` at `https://github.com/gageg123-de/FilterWizard.git`. Root [`../CNAME`](../CNAME) contains `filter-wizard.com`; [`../.nojekyll`](../.nojekyll) and the absence of build configuration strongly indicate GitHub Pages from repository-root files. No `.github/workflows`, package manifest, output directory, build command, Wrangler config, Workers, Pages Functions, KV, D1, or R2 code exists.

A Cloudflare verification file is present and the historical context says DNS may use Cloudflare. This does not prove Cloudflare Pages deployment. Cloudflare agent tooling guidance was reviewed on 2026-07-19 but is not applicable to this static repository unless the owner intentionally adds a Cloudflare product.

Evidence labels and inference rules are defined in [`DECISION_FRAMEWORK.md`](DECISION_FRAMEWORK.md). Treat the hosting conclusions below as inferred until externally verified.

## Known and owner-verification fields

- Likely production/source branch: `main`; verify in GitHub Pages settings.
- Likely source folder: repository root; verify externally.
- Build command: none.
- Output directory: repository root.
- Environment variables: none in repository.
- Custom domain: `filter-wizard.com`.
- Cloudflare DNS/cache/SSL mode: owner must verify in dashboard.
- Preview deployments: no repository-defined process; local HTTP is the verified preview method.

## Release and rollback

Review/test a focused branch, merge or push only with approval, observe GitHub Pages deployment, then check homepage, blog, Finder, assets, legal/security URLs, sitemap, consent, analytics, and Amazon tag on production. Account for CDN/browser cache and asset query versions.

Rollback by identifying the last known-good commit, creating a focused revert commit, reviewing/testing it, and deploying normally. Do not delete/reclone the repository or use destructive reset as the default.

Known failure risks: wrong workspace, stale cached CSS/JS, missing root files, broken root-relative paths, unverified Pages source, and DNS/cache differences.

## External runbook gaps

Repository access does not establish who owns GitHub, domain registration, Cloudflare, analytics, Formspree, or Amazon accounts; deployment notifications; expected propagation time; cache-purge authority; production monitoring; or incident contacts. These must be recorded in an approved private operational system, not guessed or embedded with credentials in this public repository.

Update this file when: hosting settings are externally verified, branch/source changes, workflows/builds/previews are added, or DNS/cache architecture changes.
