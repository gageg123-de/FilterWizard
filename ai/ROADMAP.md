# Roadmap

Last verified: 2026-09-01

Scores: user value (U), monetization (M), SEO (S), complexity (C), risk (R), each 1 low–5 high. Scores are directional judgments, not a mathematical priority formula or delivery commitment. Apply the evidence and investment gates in [`BUSINESS_STRATEGY.md`](BUSINESS_STRATEGY.md); weak evidence or missing maintenance ownership can override a high score.

## Implemented

Static custom-domain site; four-step Finder; known/unknown size safety; validation/autocomplete; MERV/schedule/cost logic; product illustrations; retailer comparisons; Amazon Store ID and click tracking; optional email capture; consent; GA4/Clarity; thirty-three articles; six hand-authored size pages; text-only previews; legal/sitemap/robots/security files.

## Near-term candidates

| Candidate | U | M | S | C | R | Evidence/dependency gate |
|---|---:|---:|---:|---:|---:|---|
| Validate live analytics/affiliate funnel | 5 | 5 | 2 | 2 | 2 | Dashboard access and event QA |
| Publish additional intent-led articles | 4 | 3 | 5 | 2 | 2 | Search intent, editorial/image QA, maintenance owner |
| Evaluate the six-page size set before another batch | 4 | 4 | 5 | 2 | 3 | Indexation, differentiation, engagement, safety and maintenance evidence |
| Improve internal linking/content audits | 3 | 3 | 4 | 2 | 2 | Search/index data and content inventory |
| Email replacement reminders | 5 | 4 | 1 | 4 | 4 | Demand evidence, provider, consent/legal, operations |

Recommended sequence: establish trustworthy funnel baselines first; continue differentiated content and internal linking; validate one useful size page before any scaled architecture; consider reminders only after opt-in demand and operating requirements are known.

## Evidence-gated content backlog — 2026-09-01

Every future article must pass Topic Reality, demand/intent validation, and duplicate review in that order. The supporting evidence and full candidate pool are recorded in [`CONTENT_OPPORTUNITY_AUDIT.md`](CONTENT_OPPORTUNITY_AUDIT.md). These labels are research status, not publication authority.

### Validated

| Candidate | Status | Preliminary boundary |
|---|---|---|
| MERV vs. MPR vs. FPR: How Air Filter Ratings Compare | Best next candidate | Rating-system translation; distinct from choosing among MERV 8/11/13 |
| Are Furnace Filters and AC Filters the Same? | Second candidate | Homeowner terminology and shared forced-air filtration location |
| Can You Put a HEPA Filter in a Furnace? | Validated candidate | True-HEPA compatibility rather than general higher-MERV choice |
| Can You Run an HVAC System Without an Air Filter? | Validated candidate | Missing-filter operation and safe next action |
| Should You Run the HVAC Fan Continuously for Filtration? | Validated candidate | Runtime/filtration tradeoff rather than filter selection |
| HVAC Filter vs. Portable Air Purifier | Validated candidate | Central versus room-device decision |

### Research Needed

| Candidate | Why not ready | Revisit trigger |
|---|---|---|
| Can a Dirty Filter Cause Weak Airflow From Vents? | Real mechanism and adjacent first-party signal, but high overlap with clogged, cooling, restriction, whistling, and bending pages | A distinct query cluster or proof the current pages fail the whole-house weak-airflow intent |
| Why Does My Air Filter Stay Clean? | Repeated anecdotes but limited authoritative/search evidence and several possible system causes | Independent search evidence plus authoritative diagnostic support |
| How Many Air Filters Does My House Have? | Real configuration question but strong overlap with both return-filter articles and sizing guidance | A distinct query cluster not satisfied by existing return/filter-location coverage |
| Electrostatic vs. Pleated Air Filters | Real product distinction but overlaps washable/disposable and fiberglass/pleated guides | Verified comparison demand and a non-duplicative product boundary |
| Why Is My Air Filter Torn or Ripped? | Plausible symptom with sparse demand evidence | Repeated independent reports and credible technical documentation |
| Why Is My Air Filter Sticky or Greasy? | Plausible cooking/smoke/spray mechanisms, sparse context-specific reports, no verified volume, and high overlap | Multiple independent demand signals demonstrating distinct intent |

### Rejected / Do Not Create

| Candidate family | Reason | Reconsider only if |
|---|---|---|
| New filter already dusty; dirty after 1/3/5/7 days or one week | Duplicate/contrived timeframe variants of rapid loading | Materially distinct intent is independently demonstrated |
| Filter covered in pet/dog/cat hair | Pet pillar already owns visible hair, dander distinction, loading, fit, maintenance, and MERV | New evidence establishes a separate unresolved decision |
| Why Does My Air Filter Look Gray? | Color adjective overlaps brown, black, clogged, and rapid-loading guidance | A distinct real-world problem beyond appearance is shown |
| Filters get dirty faster in summer/winter | Seasonal adjective variants of rapid loading | A season-specific mechanism and distinct user action justify a page |
| MERV 8 vs. MERV 11 for dust or pets | Existing dust/pet pillars and MERV hub already compare these choices | Current pages cannot satisfy a demonstrated direct-comparison cluster |
| Leaky filter slot lets dust bypass | Existing fit, dust-around-vents, and uneven-loading pages own the useful intent | A separate configuration problem is demonstrated |
| Dirty filter causes a water leak | Freeze and wet-filter pages already own the causal chain | A distinct query requires materially different guidance |
| What order do filter dimensions go in? | Existing sizing and missing-label guides own three-dimension identification | Evidence shows a separate decision not solved by those guides |
| Best filter for older HVAC systems | Age alone is not a compatibility rule; existing MERV/restriction content corrects it | Demand supports a carefully reformulated compatibility question |
| Why MERV 13 always damages HVAC systems | False universal premise already corrected by restriction/MERV pages | Never as stated; only a distinct misconception-debunking need could qualify |

## Experimental ideas

| Candidate | U | M | S | C | R | Evidence/dependency gate |
|---|---:|---:|---:|---:|---:|---|
| Saved filter profiles/history | 5 | 3 | 1 | 4 | 4 | Accounts, storage, privacy, support |
| Multi-filter households | 5 | 3 | 2 | 4 | 3 | Profile model and demand evidence |
| Local air-quality adjustments | 3 | 2 | 3 | 4 | 4 | Reliable API and location consent |
| Photo-assisted identification | 5 | 4 | 3 | 5 | 5 | Vision reliability, uploads, uncertainty UX |
| HVAC-model lookup | 4 | 4 | 5 | 5 | 5 | Licensed, complete, verified data |
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
- Published 2026-08-31: Why Is My Air Filter Turning Brown, a narrow visual-troubleshooting guide using timing, pattern, dryness, texture, and environmental context to separate plausible ordinary loading from conditions worth investigating without identifying contaminants by color.
- Published 2026-09-01: Can a Dirty Air Filter Cause a Furnace to Short Cycle, selected through the GSC-weighted decision layer because specific troubleshooting and filter-causation patterns materially outperformed broad comparison categories in the owner-provided seven-day export. The guide keeps dirty-filter causation conditional, limits homeowners to accessible filter/register checks, prohibits safety-control manipulation, and escalates persistent cycling.

Update this file when: a candidate is implemented, rejected, or materially reframed; priorities/dependencies change; or evidence changes the scores or sequence.
