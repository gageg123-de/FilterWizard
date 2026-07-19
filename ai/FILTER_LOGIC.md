# Filter Recommendation Logic

Last verified: 2026-07-19

All active rules are in [`../assets/js/script.js`](../assets/js/script.js). Do not duplicate them in HTML.

This document is an explanatory mirror, not an independent rules engine. If it differs from executable code, classify the conflict under [`DECISION_FRAMEWORK.md`](DECISION_FRAMEWORK.md), verify tests manually, and update the document; do not edit product behavior solely to preserve this prose.

## Size parsing

`normalizeFilterSize` accepts `x`/`X`, optional spaces, or three space-separated decimals. `parseFilterSize` requires exactly three values and these practical bounds: width 6–40 inches, height 6–40, depth 0.5–12. It normalizes to `widthxheightxdepth`; it does not map actual dimensions to nominal sizes or verify equipment compatibility.

Autocomplete contains 22 common one-inch sizes from `10x20x1` through `25x25x1`. A suggestion yields high confidence; valid manual input yields only format-confirmed confidence. Unknown/invalid remains `Check before ordering`.

## MERV rules

| Input | Internal type | Visible label |
|---|---|---|
| Allergies | MERV 13 | Consider MERV 13 |
| Otherwise pets or heavy dust | MERV 11 | MERV 11 |
| Otherwise | MERV 8 | MERV 8 |

Allergy takes precedence. Kids alone does not raise MERV. MERV 13 copy requires manufacturer maximum-MERV confirmation.

## Replacement rules

| Conditions | Days | Replacements/year |
|---|---:|---:|
| At least two of pets, allergies, heavy dust | 45 | `ceil(365/45)` = 9 |
| Any one of those | 60 | 7 |
| Kids only/with no demanding condition | 75 | 5 |
| None or fallback | 90 | 5 |

`getNextSuggestedChange` adds days to today. `getReminderMonths` adds repeated day intervals and suppresses adjacent duplicate month labels, capped at eight displayed reminders.

## Cost rules

Per-filter ranges: MERV 8 `$8–$14`, MERV 11 `$12–$18`, MERV 13 `$16–$25`. `getEstimatedYearlyCost` multiplies each bound by replacements/year and rounds. It excludes tax, shipping, brand, thickness, multipack discounts, and price changes.

## Retailer and fallback behavior

Retailer query is `[confirmed size] [MERV] air filter`. Retailers are hidden without a parseable size. Product image selection uses MERV-specific WebPs, a confirm-size image for unknown sizes, and a generic fallback after load errors.

## Limitations and risks

- Dimension order is accepted syntactically; the code cannot know whether a manufacturer labels length/width differently.
- Decimal measurements are not converted to nominal shopping sizes.
- A listed autocomplete size is not proof of equipment fit.
- `None of these` is mutually exclusive in UI, but functions still have defensive fallback behavior.
- Cost and schedule rules are product assumptions, not manufacturer maintenance instructions.
- No unreachable branch was proven during this review; older comments/TODOs about retailer deep links remain and should not be mistaken for active affiliate relationships.

## Logic-change protocol

For any bounds, MERV, interval, price, confidence, or retailer-gating change: state the evidence and affected audience; enumerate old/new examples and boundary cases; verify known and unknown journeys; confirm visible copy/schema/legal claims remain aligned; review analytics parameter meaning; and document rollback. Manufacturer guidance or a popular size does not by itself justify a universal rule.

Update this file when: inputs, bounds, common sizes, recommendations, intervals, costs, confidence, or retailer gating changes.
