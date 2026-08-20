# Filter Wizard AI Operating Guide

Last verified: 2026-07-19

Filter Wizard is a static homeowner utility that helps people confirm HVAC filter information, choose a cautious MERV recommendation, estimate replacement timing, and reach retailer search options. Near-term revenue is Amazon Associates commission; useful content and the free Filter Finder come before monetization.

## Start every task here

1. Confirm the workspace is `B:\Codex\FilterWizard\FilterWizard` and inspect `git status`, branch, and remote.
2. Read [`PROJECT.md`](ai/PROJECT.md), [`DECISION_FRAMEWORK.md`](ai/DECISION_FRAMEWORK.md), and the domain documents relevant to the change.
3. Inspect the current implementation. Repository code overrides old handoffs or assumptions.
4. State contradictions or consequential uncertainty before editing.
5. Make focused in-place changes. Do not commit or push unless explicitly asked.

## Non-negotiable rules

- Preserve public URLs, `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, canonicals, valid schema, analytics, consent, legal links, Formspree forms, and `/.well-known/security.txt`.
- Preserve Filter Finder known-size and unknown-size safety behavior. Unknown-size users must not receive retailer links until they enter a valid three-dimensional size.
- Preserve Amazon Store ID `filterwizard-20`, sponsored link attributes, and delegated click tracking.
- Never send raw email addresses or raw invalid-size text to analytics.
- Do not claim Filter Wizard physically identified a size, guarantees compatibility, sells or ships filters, or knows a system supports MERV 13.
- Do not add frameworks, dependencies, backends, Cloudflare products, build systems, fake reviews, fabricated dates, ratings, urgency, statistics, or product claims without explicit authority.
- Do not create ZIP replacements, `changed-files-*` folders, or duplicate project copies. Do not edit archives as production code.
- Avoid unrelated cleanup. Preserve user changes in a dirty worktree.
- Treat the production header as a shared DOM contract. For every new or modified blog article, reuse the exact header markup from a currently verified known-good production article; do not reconstruct, simplify, rename, approximate, or replace its navigation wrappers. Preserve `.nav`, `.nav-links`, `data-header`, `data-nav-toggle`, and `data-nav-menu`. Before completion, compare the header DOM and navigation links with the selected reference, verify desktop and mobile navigation, and confirm the mobile toggle updates `aria-expanded`.

When documentation and implementation disagree, stop treating the document as authority: verify the code path, report the contradiction, correct the documentation in the same change when authorized, and avoid changing behavior merely to make an old document true.

## Documentation map

- Product, strategy, and status: [`PROJECT.md`](ai/PROJECT.md), [`BUSINESS_STRATEGY.md`](ai/BUSINESS_STRATEGY.md), [`ROADMAP.md`](ai/ROADMAP.md)
- Decisions and uncertainty: [`DECISION_FRAMEWORK.md`](ai/DECISION_FRAMEWORK.md)
- Code and UI: [`ARCHITECTURE.md`](ai/ARCHITECTURE.md), [`DESIGN_SYSTEM.md`](ai/DESIGN_SYSTEM.md)
- Finder: [`FILTER_FINDER.md`](ai/FILTER_FINDER.md), [`FILTER_LOGIC.md`](ai/FILTER_LOGIC.md)
- Growth: [`SEO.md`](ai/SEO.md), [`CONTENT.md`](ai/CONTENT.md), [`FILTER_SIZE_PAGES.md`](ai/FILTER_SIZE_PAGES.md), [`IMAGES.md`](ai/IMAGES.md)
- Revenue and measurement: [`AFFILIATE.md`](ai/AFFILIATE.md), [`ANALYTICS.md`](ai/ANALYTICS.md)
- Quality and safety: [`PRIVACY_AND_CONSENT.md`](ai/PRIVACY_AND_CONSENT.md), [`ACCESSIBILITY.md`](ai/ACCESSIBILITY.md), [`PERFORMANCE.md`](ai/PERFORMANCE.md), [`TESTING.md`](ai/TESTING.md), [`SECURITY.md`](ai/SECURITY.md)
- Operations: [`DEPLOYMENT.md`](ai/DEPLOYMENT.md), [`GIT_WORKFLOW.md`](ai/GIT_WORKFLOW.md), [`CHANGELOG_GUIDELINES.md`](ai/CHANGELOG_GUIDELINES.md)

## Definition of done

- Requested behavior works through a local HTTP server, not `file://`.
- Relevant mobile, keyboard, link, image, console, metadata, schema, analytics, consent, affiliate, and Finder paths are checked per [`TESTING.md`](ai/TESTING.md).
- `git diff --check`, `git status`, and the complete diff are reviewed.
- Created, modified, and deleted files, assumptions, uncertainties, tests, and commit/push status are reported.
- Relevant `/ai` documentation is updated when architecture, rules, URLs, integrations, or behavior change.

## Change impact routing

| If a change affects | Read and update as applicable |
|---|---|
| Product promise, audience, funnel, monetization | `PROJECT.md`, `BUSINESS_STRATEGY.md`, `ROADMAP.md` |
| Finder UI, recommendation, retailer eligibility | `FILTER_FINDER.md`, `FILTER_LOGIC.md`, `AFFILIATE.md`, `ANALYTICS.md` |
| Page structure, content, metadata, images | `ARCHITECTURE.md`, `CONTENT.md`, `SEO.md`, `IMAGES.md`, `ACCESSIBILITY.md` |
| Data, consent, third parties, forms | `PRIVACY_AND_CONSENT.md`, `SECURITY.md`, `ANALYTICS.md` |
| Release, hosting, rollback | `TESTING.md`, `DEPLOYMENT.md`, `GIT_WORKFLOW.md`, `CHANGELOG_GUIDELINES.md` |

Instruction precedence: system/developer instructions, the current user request, this file, detailed `/ai` guidance, then historical notes. Never let documentation override current code facts.

Documentation governance: “Last verified” means checked against repository evidence on that date unless the text explicitly names external verification. Re-verify time-sensitive counts, identifiers, policies, prices, integrations, hosting assumptions, and third-party behavior before relying on them. Each detailed file owns its named domain; cross-references should summarize, not redefine, another file’s rule.

Update this file when: entry procedures, non-negotiable safeguards, documentation paths, or the definition of done changes.
