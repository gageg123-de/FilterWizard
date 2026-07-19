# Business Strategy

Last verified: 2026-07-19

## Strategic thesis

Filter Wizard earns trust by helping a homeowner move from uncertainty to a physically confirmed filter size, a cautious filtration recommendation, a practical replacement interval, and an informed retailer search. The free utility and useful content are the acquisition and trust products; near-term revenue is Amazon Associates commission after the user has enough information to shop safely.

The defensible advantage is not a proprietary catalog today. It is a low-friction decision flow, clear uncertainty boundaries, useful homeowner education, and consistent measurement of where users need help. Do not trade those advantages for higher click volume through premature or overconfident recommendations.

## Primary audience and jobs

- Primary: US homeowners or household decision-makers replacing a central HVAC filter, often on mobile and with limited HVAC vocabulary.
- Core job: “Help me identify what I can safely confirm, understand what filtration level may fit my needs, and find a replacement without wasting money.”
- High-intent moments: standing near the HVAC system, holding an old filter, shopping online/in-store, seeing dust or airflow symptoms, or realizing a change is overdue.
- Out of scope today: equipment diagnosis, compatibility guarantees, contractor dispatch, inventory, fulfillment, accounts, and medical advice.

## Funnel and success measures

| Stage | User outcome | Repository signal | Decision use |
|---|---|---|---|
| Acquire | Arrives on a relevant page | page/article view; external search data is dashboard-only | Prioritize useful intents and landing pages |
| Engage | Opens or starts the Finder | Finder open/start events | Judge CTA and content-to-tool fit |
| Resolve | Completes a result with honest confidence | completion/result events and confidence | Improve questions and error recovery |
| Shop | Confirms size and opens retailer options | buying-options and retailer-click events | Measure commercial usefulness, not just clicks |
| Retain | Voluntarily submits email or returns | lead event; return behavior requires external reporting | Validate reminder demand before building a backend |

No numeric baseline or target is verified in the repository. Do not invent conversion rates, traffic, revenue, or targets. Establish baselines in GA4, Clarity, Amazon Associates, Formspree, and search dashboards before setting goals. Treat affiliate revenue per qualified Finder completion—not raw outbound clicks—as the healthier eventual commercial metric.

The visible forms use reminder-oriented language, but repository code only proves Formspree submission and client-side success UI. Whether a human or external system sends reminders is unknown. Do not describe a working reminder product until delivery, unsubscribe handling, retention, and operating ownership are externally verified.

## Prioritization gates

Invest when a proposal improves a core user job, has an observable outcome, preserves size/compatibility uncertainty, and can be maintained with current capacity. Require stronger evidence as operational complexity, privacy exposure, or irreversible SEO footprint rises.

- Content: require distinct search intent, homeowner value, internal-link role, and an update owner.
- Filter-size pages: the 20x25x1 pilot establishes a production pattern, but validate its indexation, engagement, fit-safety behavior and maintenance burden before any templated expansion; follow [`FILTER_SIZE_PAGES.md`](FILTER_SIZE_PAGES.md).
- Reminders/accounts: require demonstrated opt-in demand, provider/retention decisions, legal review, and operating ownership.
- Photo/model identification: require reliable data, explicit confidence/failure UX, privacy design, and no compatibility guarantee.
- Monetization: prefer relevant retailer choice and disclosure; never optimize commission at the expense of fit or trust.

## Decision cadence and evidence

Use [`ANALYTICS.md`](ANALYTICS.md) for observable events and [`DECISION_FRAMEWORK.md`](DECISION_FRAMEWORK.md) for evidence labels. Review roadmap candidates against user value, expected business value, evidence strength, complexity, risk, and maintenance burden. A dashboard result can inform a decision but does not silently become repository truth; record material decisions and assumptions in the relevant documentation or changelog.

Pilot decision, 2026-07-19: one size-specific page is accepted as an acquisition-to-Finder-to-retailer experiment. Success is not established by publication. Before a second page, review search/index evidence, size-page CTA and retailer events, user usefulness, wrong-size risk, and whether the hand-authored pattern can be maintained without thin duplication.

Update this file when: audience, value proposition, monetization, funnel stages, success measures, prioritization gates, or strategic boundaries change.
