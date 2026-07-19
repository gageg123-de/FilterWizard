# Roadmap

Last verified: 2026-07-19

Scores: user value (U), monetization (M), SEO (S), complexity (C), risk (R), each 1 low–5 high. Scores are directional judgments, not a mathematical priority formula or delivery commitment. Apply the evidence and investment gates in [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md); weak evidence or missing maintenance ownership can override a high score.

## Implemented

Static custom-domain site; four-step Finder; known/unknown size safety; validation/autocomplete; MERV/schedule/cost logic; product illustrations; retailer comparisons; Amazon Store ID and click tracking; optional email capture; consent; GA4/Clarity; five articles; one 20x25x1 size-page pilot; text-only previews; legal/sitemap/robots/security files.

## Near-term candidates

| Candidate | U | M | S | C | R | Evidence/dependency gate |
|---|---:|---:|---:|---:|---:|---|
| Validate live analytics/affiliate funnel | 5 | 5 | 2 | 2 | 2 | Dashboard access and event QA |
| Publish additional intent-led articles | 4 | 3 | 5 | 2 | 2 | Search intent, editorial/image QA, maintenance owner |
| Evaluate 20x25x1 pilot before another size page | 4 | 4 | 5 | 2 | 3 | Indexation, engagement, safety and maintenance evidence |
| Improve internal linking/content audits | 3 | 3 | 4 | 2 | 2 | Search/index data and content inventory |
| Email replacement reminders | 5 | 4 | 1 | 4 | 4 | Demand evidence, provider, consent/legal, operations |

Recommended sequence: establish trustworthy funnel baselines first; continue differentiated content and internal linking; validate one useful size page before any scaled architecture; consider reminders only after opt-in demand and operating requirements are known.

## Experimental ideas

| Candidate | U | M | S | C | R | Evidence/dependency gate |
|---|---:|---:|---:|---:|---:|---|
| Saved filter profiles/history | 5 | 3 | 1 | 4 | 4 | Accounts, storage, privacy, support |
| Multi-filter households | 5 | 3 | 2 | 4 | 3 | Profile model and demand evidence |
| Local air-quality adjustments | 3 | 2 | 3 | 4 | 4 | Reliable API and location consent |
| Photo-assisted identification | 5 | 4 | 3 | 5 | 5 | Vision reliability, uploads, uncertainty UX |
| HVAC-model lookup | 4 | 4 | 5 | 5 | 5 | Licensed, complete, verified data |
| Landlord/property-manager tools | 4 | 4 | 3 | 5 | 4 | Multi-property accounts and validation |
| Contractor leads | 3 | 5 | 3 | 4 | 4 | Partner quality, disclosures, legal flows |
| White-label tools | 3 | 5 | 1 | 5 | 5 | Multitenancy, branding, support ownership |

Annual cost estimates are already implemented; future work would improve price data/history, not introduce the concept. Avoid subscriptions until traffic, affiliate clicks, and reminder demand justify complexity.

## Status and exit rules

- Move a candidate to implemented only after production behavior and validation exist.
- Mark deferred/rejected work with evidence, reason, and a specific revisit trigger.
- Record external evidence with source and date but no secrets or private exports.
- Re-score when evidence, business model, dependencies, operating capacity, or risk changes.
- A roadmap item does not authorize implementation; current user/owner scope still controls changes.

Update this file when: a candidate is implemented, rejected, or materially reframed; priorities/dependencies change; or evidence changes the scores or sequence.
