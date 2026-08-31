# Roadmap

Last verified: 2026-08-31

Scores: user value (U), monetization (M), SEO (S), complexity (C), risk (R), each 1 low–5 high. Scores are directional judgments, not a mathematical priority formula or delivery commitment. Apply the evidence and investment gates in [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md); weak evidence or missing maintenance ownership can override a high score.

## Implemented

Static custom-domain site; four-step Finder; known/unknown size safety; validation/autocomplete; MERV/schedule/cost logic; product illustrations; retailer comparisons; Amazon Store ID and click tracking; optional email capture; consent; GA4/Clarity; thirty-one articles, including the distinct dust-around-supply-vents troubleshooting guide published 2026-08-31; three hand-authored size-page pilots; text-only previews; legal/sitemap/robots/security files.

## Near-term candidates

| Candidate | U | M | S | C | R | Evidence/dependency gate |
|---|---:|---:|---:|---:|---:|---|
| Validate live analytics/affiliate funnel | 5 | 5 | 2 | 2 | 2 | Dashboard access and event QA |
| Publish additional intent-led articles | 4 | 3 | 5 | 2 | 2 | Search intent, editorial/image QA, maintenance owner |
| Evaluate all three size-page pilots before a small batch | 4 | 4 | 5 | 2 | 3 | Indexation, differentiation, engagement, safety and maintenance evidence |
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
| Best Air Filter for Allergies | 4 | 4 | 4 | 2 | 4 | Avoid medical promises; balance particle goals, MERV support, fit, source control, and replacement timing |
| MERV 8 vs MERV 11 for Dust | 4 | 4 | 4 | 2 | 3 | Narrow comparison supporting the dust pillar without repeating its media, source, and depth coverage |
| Best Air Filter for Older HVAC Systems | 4 | 4 | 4 | 3 | 4 | Avoid age-based assumptions; require equipment guidance, fit, airflow, and compatibility boundaries |
| MERV 8 vs MERV 11 for Pets | 4 | 4 | 4 | 2 | 3 | Compare pet-household loading and particle goals without medical or universal compatibility claims |
| Best Air Filter for Bedrooms | 3 | 3 | 3 | 2 | 2 | Address room use, noise, central-system limits, and supported filtration without implying room-level HVAC control |
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

- Published 2026-08-21: Best Air Filter for Allergies, covering allergy-focused MERV 11/13 selection, pollen and pet-particle context, fit/bypass, runtime, maintenance, and an explicit non-medical boundary.
- Published 2026-08-23: Best Air Filter for Smoke, separating particles from gases and odors across wildfire, tobacco, wood, fireplace, and cooking sources, with activated-carbon, MERV, loading, fit, and compatibility guidance.
- Published 2026-08-24: MERV 11 vs MERV 13 for Allergies, a narrow comparison covering tested particle ranges, pollen and pet-related material, product resistance, filter depth, fit/bypass, loading, and compatibility without medical claims.
- Published 2026-08-26: How Tight Should an Air Filter Fit, a fit-diagnosis guide covering correct seating, loose and tight symptoms, nominal-versus-actual dimensions, brand variation, bypass, physical binding, and measurement when the existing filter is wrong or missing.
- Published 2026-08-27: Can I Use a Slightly Different Size Air Filter, a narrow substitution guide covering same-nominal brand variation, different-nominal smaller and larger replacements, temporary and unavailable-size decisions, documented alternatives, and prohibited improvised workarounds.
- Published 2026-08-28: Can a Dirty Air Filter Cause Your AC Not to Cool, a narrow troubleshooting guide connecting severe filter loading to reduced airflow and poor cooling while keeping icing, restriction, clogged-filter symptoms, energy use, and non-filter failures distinct.
- Published 2026-08-31: Why Is There Dust Around My Air Vents, a narrow supply-register troubleshooting guide distinguishing room-air deposition from missing/damaged filters, fit, bypass, and conditions warranting further HVAC evaluation without treating surface dust as proof of duct contamination.

Update this file when: a candidate is implemented, rejected, or materially reframed; priorities/dependencies change; or evidence changes the scores or sequence.
