# Decision Framework

Last verified: 2026-07-19

Use this file when a request is ambiguous, documentation conflicts with code, a proposal expands scope, or an AI must choose between plausible implementations.

## Evidence labels

- **Verified in repository:** directly supported by current production files.
- **Verified externally:** confirmed in a named dashboard, live response, policy, or owner statement; record the source and date without copying secrets.
- **Inferred:** likely from evidence but not proven; state the inference and its consequence.
- **Proposed:** a future convention or feature, not current behavior.
- **Unknown:** cannot be resolved safely from available evidence.

Never upgrade inferred, proposed, or unknown information into a product claim. Current code is the source of truth for implementation; legal policies govern published legal statements; external dashboards are required for deployment settings, live analytics receipt, affiliate attribution, indexation, and DNS/cache state.

## Decision sequence

1. Define the requested user outcome and files/systems in scope.
2. Inspect Git status and preserve existing work.
3. Read the owning documents using the map in [`../AGENTS.md`](../AGENTS.md).
4. Trace the current code/content path before selecting a solution.
5. Classify consequential facts with the evidence labels above.
6. Identify invariants: public URLs, size confirmation, compatibility cautions, consent/privacy, disclosure, accessibility, and static-hosting constraints.
7. Prefer the smallest reversible change that achieves the outcome and reuses established patterns.
8. Escalate only when a missing choice materially changes product behavior, legal/privacy exposure, external state, data collection, or architecture.
9. Validate according to [`TESTING.md`](TESTING.md), then update the documents that own changed facts.

## Trade-off order

When goals conflict, prioritize: user safety and truthful uncertainty; privacy/security/accessibility; correctness and public URL stability; user usefulness; maintainability; performance; measurable business value; implementation convenience. Affiliate revenue never overrides fit confirmation or honest guidance.

## Record a consequential decision

For a durable architectural, product, SEO, analytics, privacy, or monetization choice, add a concise decision note to the owning document or future changelog:

- Decision and date
- Status: proposed, accepted, superseded, or rejected
- Evidence and assumptions
- Alternatives considered
- User/business consequences
- Validation and rollback trigger
- Documents/files affected

Do not create ceremony for routine copy or styling edits. Do not infer approval to add services, dependencies, tracking, data collection, or public pages.

Update this file when: evidence standards, authority boundaries, trade-off order, escalation rules, or decision-recording practice changes.
