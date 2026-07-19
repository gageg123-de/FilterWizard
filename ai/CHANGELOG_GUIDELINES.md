# Changelog Guidelines

Last verified: 2026-07-19

Record material user-facing, architectural, SEO, analytics, consent, affiliate, deployment, security, or recommendation-logic changes. Trivial formatting does not need an entry unless it changes accessibility, layout behavior, metadata, or production output.

The changelog is an audit aid, not a substitute for Git history, domain documentation, deployment records, or a private incident system. Use the evidence labels in [`DECISION_FRAMEWORK.md`](DECISION_FRAMEWORK.md) and link the owning `/ai` document when a durable rule changes.

Recommended entry:

```markdown
## YYYY-MM-DD — Short change title
- Summary:
- Files affected:
- User-facing impact:
- Analytics impact:
- SEO impact:
- Deployment/cache notes:
- Validation performed:
- Rollback: revert commit `<hash>` or restore named files from `<known-good>`
- Known limitations:
```

Facts must be auditable. Do not claim deployment, analytics receipt, indexation, accessibility compliance, or affiliate attribution unless verified. Link repository-relative documentation when rules changed. Never include emails, tokens, account screenshots, private dashboard data, or secrets.

For superseded decisions, preserve the old entry and add a new one that names what changed and why. Corrections should be explicit rather than silently rewriting historical claims. Security entries disclose impact and remediation without publishing exploit detail or sensitive evidence.

No active changelog file exists today. If one is introduced, use root `CHANGELOG.md`, add newest material entry first, and keep implementation detail proportional to rollback and audit needs.

Update this file when: changelog location, required fields, release process, or audit requirements change.
