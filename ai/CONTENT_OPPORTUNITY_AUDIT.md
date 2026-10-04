# Content Opportunity Audit

Last verified: 2026-10-04

## Article #43 opportunity discovery audit — 2026-10-04

**Decision: discovery complete; exactly one concept survives for a future publication-gate review. Article #43 remains unapproved and unimplemented.** The current 42-article library, nine filter-size guides, October 4 owner-provided Search Console export, prior audits and rejection records, current manufacturer documentation, and recurring homeowner wording were reviewed. No production HTML, homepage content, blog-index card, sitemap entry, image, stylesheet, script, Filter Finder behavior, internal production link, or size page was changed.

The **RECOMMENDED ARTICLE #43 CANDIDATE** is **What Does “Change Filter” Mean on a Thermostat?** This is a recommendation for a separate full publication-gate review, not authority to draft or publish. Existing-page improvements supported by first-party data currently outrank immediate publication, especially the generic MERV 11-versus-13 and furnace-versus-AC terminology owners.

### Repository, inventory, and semantic-review basis

- Verified production state: 42 published blog articles, nine filter-size guides, 57 sitemap/indexable URLs, and 53 non-legal content pages. The sitemap contains the homepage, blog index, 42 articles, nine size guides, and four legal pages.
- All 42 article files were parsed through their full `<article>` bodies, including visible FAQ content. The corpus contains approximately 112,390 extracted article words. Titles, H1s, section headings, substantive body copy, FAQs, intent-routing links, and Finder boundaries were compared; the review was not title- or filename-only.
- The newest page remains `/blog/furnace-air-filter-vs-humidifier-filter.html`. No article #43 exists under another production URL.
- The torn/ripped-filter, household-filter-count, thicker-filter, filter-change-shutdown, and same-brand replacement rejections remain in force. New wording in the October workbook does not reverse them.

### October 4 Search Console evidence

The supplied `filter-wizard.com-Performance-on-Search-2026-10-04.xlsx` export is filtered to **Web / Last 7 days** and its daily rows cover **September 23–29, 2026**. The daily sheet reports **5 clicks, 1,064 impressions, 0.47% CTR, and an impression-weighted average position of approximately 8.98**. United States rows account for 5 clicks and 867 impressions at approximately position 9.51. Mobile accounts for 764 impressions at approximately position 7.74; desktop accounts for 293 impressions at approximately position 12.22; tablet accounts for seven impressions.

The workbook exposes 39 query rows totaling only 83 impressions and zero clicks, far below the sitewide total. Query reporting is therefore partial/privacy-limited. Its query and page sheets are separate aggregates and do not establish query-to-page pairs. Page-row impressions total 1,067, three more than the daily total; that small dimensional discrepancy is preserved rather than silently normalized.

The previous documented export covered September 22–28. Because six of seven days overlap, the change from 9 clicks / 1,093 impressions / approximately 8.76 position to 5 clicks / 1,064 impressions / approximately 8.98 position is **not** a valid independent week-over-week trend. The defensible conclusion is that overall impression scale and the narrow troubleshooting/configuration pattern remained broadly similar.

#### Required special-query reviews

| Review | Current evidence | Decision |
|---|---|---|
| Restrictive filter / furnace damage | `can a filter that's too restrictive damage my furnace` has 4 impressions at position 7.25; the restriction page has 25 impressions at position 6.8 | **B — Existing-page improvement/monitoring.** The current owner is correctly matched and already answers the exact question; no new URL |
| Fiberglass filters | Four disclosed variants total 10 impressions; the fiberglass-versus-pleated page has 17 impressions at position 11.47 | **B — Existing-page improvement.** Strengthen the current owner and snippet; do not create a second fiberglass page |
| Furnace versus AC terminology | Eight disclosed variants total 10 impressions; the current page has 28 impressions at position 21.64 | **B — Existing-page improvement.** Exact intent belongs to the current terminology owner; allow for the page's recent publication age when interpreting rank |
| MERV 11 versus 13 | Eight disclosed variants total 27 impressions, generally at positions 34–45; the allergy-specific MERV page has 29 impressions at position 38.38 | **B — Highest-priority existing-page review.** Clarify the generic owner, internal routing, and search-intent separation rather than publish another comparison |
| Dirty fast / still clean | `my filter turns gray in two weeks, is that normal` and `still white` have one impression each; the dirty-fast page has 3 impressions and the clean-filter page has 11 impressions at position 5.09 | **B — Monitor and refine existing owners only.** Exact observations are already answered |
| Four-inch media-cabinet retrofit | `upgrade my filter rack to a four inch media cabinet, worth it` has 1 impression at position 5; the thickness page has 29 impressions at position 9.52. Two 1-inch substitution variants add one impression each at deeper positions | **C — Reject new URL.** The thickness and size-substitution owners already contain the cabinet, depth, stacking, and no-improvisation decisions; prior rejection stands |

No disclosed query establishes demand for the thermostat-reminder survivor. **Exact-query Filter Wizard GSC evidence: none. No verified numeric search-volume data was available.**

### Current performance pattern

The strongest page rows continue to favor narrow, visually concrete or configuration-specific questions: bending (193 impressions, one click, position 6.34), brown filters (166 impressions, three clicks, position 4.66), filtered returns (127 impressions, position 8.06), new-filter odor (111 impressions, position 8.25), return-plus-furnace configuration (8 impressions, one click, position 6.5), movement (28 impressions, position 7.86), wet filters (27 impressions, position 7.96), uneven loading (25 impressions, position 4.84), and restriction (25 impressions, position 6.8). Broad commercial/comparison content remains less consistent: the allergy MERV comparison sits around position 38.38 and the smoke guide around 33.25.

This supports two planning conclusions, not a traffic forecast: protect the site's narrow homeowner-question focus, and improve existing exact-intent owners before adding adjacent comparison pages. The thermostat-reminder concept survives because it is a narrow, observable maintenance message with a different decision path—not because the site needs another URL.

### Fresh external evidence

- [Google Nest filter reminders](https://support.google.com/googlehome/answer/9240203) documents a filter reminder based on system runtime, a last-changed value, advanced configuration, and a reset after service. It also notes that other thermostats may use set calendar intervals.
- [Honeywell Home FocusPRO N100 reminder documentation](https://docs.honeywellhome.com/focuspro-n100-im/en-us/Content/Installation-Manual/Reminders.htm) identifies a Replace Filter message and a model-specific reset action.
- [Honeywell Home T6 Pro II alerts](https://docs.honeywellhome.com/t6-pro-ii/en-us/Content/Installation-Instructions/7.%20Alerts%20and%20Reminders.htm) documents filter reminders configured by fan runtime or calendar days, including separate Filter 1 and Filter 2 reminders.
- [Honeywell Home X8 alerts and reminders](https://docs.honeywellhome.com/x8s-iug/Alerts%20and%20Reminders.htm) distinguishes air-filter reminders from humidifier-pad, humidifier-tank/water-filter, dehumidifier-filter, and ventilator reminders. This supports a necessary model/configuration boundary.
- [Carrier's filter-location FAQ](https://www.carrier.com/us/en/residential/homeowner-resources/faqs/) and [Trane's filter-location guidance](https://www.trane.com/residential/en/resources/blog/air-filter-hvac-system/) confirm that filter location varies among return grilles, equipment-side slots, and duct/filter cabinets. They validate the location question but also reinforce the material already owned by Filter Wizard's sizing and configuration pages.
- Repeated independent homeowner discussions ask why a thermostat still says Change Filter after replacement, what part the message refers to, whether the thermostat senses filter condition, and where the filter is located. These discussions establish recurrence and wording only; manufacturer documentation controls the technical explanation and reset instructions.

### Candidate funnel

Classification key: **A — New article candidate**, **B — Existing-page improvement**, **C — Reject / no action as a separate URL**.

| # | Concept investigated | Class | Owner or decision |
|---:|---|:---:|---|
| 1 | What does “Change Filter” or “Replace Filter” mean on a thermostat? | **A** | Survivor; owns reminder meaning, timer/runtime basis, action sequence, and model-specific reset boundary |
| 2 | Does a thermostat know that the HVAC filter is dirty? | **A (merged)** | Same intent owner as #1; not a second candidate |
| 3 | Why does the filter reminder remain after the filter was changed? | **A (merged)** | Same intent owner as #1; reset behavior is model-specific |
| 4 | Where is my HVAC/furnace/AC air filter? | **C** | Sizing, every-return, return-plus-furnace, furnace-versus-AC, missing-filter, and clean-filter pages already contain the full useful location workflow |
| 5 | Where is the air filter in an apartment or condo? | **C** | Installation-type variant of the same owned location intent; no separate decision |
| 6 | Is the filter at the air handler or behind a return grille? | **C** | Existing configuration owners explain both arrangements and warn against adding filters blindly |
| 7 | Can a restrictive filter damage a furnace? | **B** | Exact question already owned by the restriction guide; first-party page-one evidence supports refinement, not another URL |
| 8 | Are fiberglass furnace filters good? | **B** | Fiberglass-versus-pleated owner; improve exact wording and snippet |
| 9 | MERV 11 versus MERV 13 | **B** | Existing generic and allergy-specific MERV owners; resolve routing/intent before any new content |
| 10 | Furnace filter versus AC filter | **B** | Existing terminology owner; monitor maturation and improve only with a focused hypothesis |
| 11 | Filter turns gray/dirty within two weeks | **B** | Dirty-fast owner; timeframe variants remain non-distinct |
| 12 | Air filter is still white/clean | **B** | Clean-filter owner; current page already ranks for the observed wording |
| 13 | Is a four-inch media-cabinet upgrade worth it? | **C** | Thickness owner and prior thicker-filter rejection already cover the decision |
| 14 | Can I use a 1-inch filter instead of a 2-inch or 4-inch filter? | **C** | Thickness and slightly-different-size owners; no reversal of rejection |
| 15 | MERV 12 versus MERV 11 or 13 | **C** | Existing MERV framework can absorb the rating; a one-number permutation has no distinct action |
| 16 | Furnace filter versus air filter | **C** | Existing furnace-versus-AC terminology page already explains the common central-HVAC labels |
| 17 | Furnace filter for smoke | **B** | Smoke owner already handles particles, gases, odor, fit, runtime, and loading |
| 18 | Filter door will not close / filter is stuck | **C** | Fit, size-substitution, thickness, and no-force safeguards own the useful action |
| 19 | Supply vent versus return vent: where does the filter go? | **C** | Arrow-direction and return-configuration owners explain the return path and location |
| 20 | Do unused HVAC filters expire? | **C** | Historical research-needed item; current storage/shelf-life evidence remains product-specific and intent remains weak |
| 21 | Can HVAC filters be recycled? | **C** | Material and local-program variability still leave no substantial universal Filter Wizard decision |
| 22 | Should I change the filter during remodeling or construction? | **C** | Dirty-fast and replacement-timing owners already cover unusual particle loading and inspection cadence |
| 23 | Media cabinet versus standard filter rack | **C** | Thickness guide owns deep-media cabinet purpose, compatibility, and no-improvisation boundary |
| 24 | Is a thermostat's humidifier-pad reminder the same as its air-filter reminder? | **C** | Article #42 owns the component distinction; candidate #1 may briefly route model-specific reminder labels without recreating it |

**Funnel counts:** 24 concepts investigated; three closely related thermostat-message phrasings consolidated into one **A** candidate; seven **B** existing-page improvement opportunities; 14 **C** reject/no-action decisions; one surviving article concept.

### Special review: “Where is my HVAC air filter?”

**Topic reality: passed. New-article duplication and information-gain gates: failed.** Carrier, Trane, Lennox, and repeated homeowner discussions confirm the question is real. A new URL is nevertheless unwarranted because the current library already supplies the complete answer across closely related owners:

- `/blog/how-to-find-your-air-filter-size.html` has dedicated methods for return grilles, furnace/air-handler slots, media cabinets, accessible-search limits, multiple systems, manuals, cabinet labels, and escalation.
- `/blog/filters-in-every-return-vent.html` owns central versus filtered-return layouts and an accessible location-identification workflow.
- `/blog/filter-at-return-and-furnace.html` owns separate return paths versus filters installed in series, empty-slot ambiguity, and add/remove safeguards.
- `/blog/are-furnace-and-ac-filters-the-same.html` owns common return-path terminology and a dedicated “Where Should You Look?” section plus FAQ.
- `/blog/can-you-run-hvac-without-air-filter.html` owns the urgent missing-filter path and a dedicated “What If I Can't Find Where the Filter Goes?” section plus FAQ.
- `/blog/why-is-my-air-filter-still-clean.html` owns checking whether the homeowner is looking at the right filter or system.

A standalone location article would consolidate these workflows and blur the established configuration owners. The appropriate action is to improve internal routing or wording if first-party location queries emerge—not create a new page now.

### RECOMMENDED ARTICLE #43 CANDIDATE

#### What Does “Change Filter” Mean on a Thermostat?

- **Suggested durable URL:** `/blog/thermostat-change-filter-message.html`
- **Primary homeowner question:** Does the thermostat's Change/Replace Filter message mean it detected a dirty filter, and what should the homeowner do after seeing it?
- **Validated primary intent:** Interpret an HVAC-filter maintenance reminder, distinguish calendar/runtime logic from direct filter-condition proof, identify the relevant system filter, follow the actual filter inspection/replacement decision, and use the thermostat model's instructions to reset or dismiss the reminder.
- **Why it is real:** Google Nest and Honeywell Home maintain dedicated reminder documentation; multiple thermostat families expose reminder settings; independent homeowners repeatedly ask what the message means, where the filter is, and why the notice remains after replacement.
- **Exact-query GSC evidence:** None in the disclosed October workbook.
- **Verified numeric search volume:** Unavailable.
- **Nearest existing owners:** `/blog/how-often-change-air-filter.html`, `/blog/how-to-find-your-air-filter-size.html`, `/blog/can-you-run-hvac-without-air-filter.html`, `/blog/furnace-air-filter-vs-humidifier-filter.html`, and `/blog/should-hvac-fan-run-continuously.html`.
- **Ownership boundary:** Existing pages own actual replacement timing, filter location/size, missing-filter operation, humidifier-component terminology, and fan-mode tradeoffs. This candidate would own what the thermostat reminder represents and does not represent, what to verify, and why reset instructions cannot be universalized.
- **Distinct information gain:** Calendar versus fan-runtime reminders; reminder versus direct dirty-filter diagnosis; Filter 1/Filter 2 and accessory-label ambiguity; persistent reminder after physical replacement; model-specific reset/dismissal; the difference between acknowledging a reminder and proving a filter is serviceable; routing to the correct existing owner.
- **Technical boundaries:** Do not claim every reminder is a simple timer, every thermostat senses dirt, every reminder means immediate replacement, or one button sequence works across brands. Do not provide thermostat wiring, installer-menu, factory-reset, or equipment-opening instructions. Use model documentation.
- **Filter Wizard relevance:** High. The observable message sends a homeowner directly into the filter-location, inspection, replacement, and selection journey. Filter Finder becomes relevant only after the supported physical size is independently known.
- **Commercial independence:** High; the article needs no retailer block, thermostat recommendation, or product comparison.
- **Cannibalization risk:** Moderate. Location and timing must be concise routes, not rewritten sections.
- **Directional score:** 34/45 raw; -2 cannibalization penalty; **32/45 adjusted**. This is an editorial prioritization aid, not a traffic forecast.
- **Publication status:** Discovery survivor only. A future article must independently pass topic-reality, exact-intent, duplicate, timing, location, thermostat-technology, reminder-logic, model-specific reset, accessory-reminder, safety, Finder, commercial-independence, information-gain, and post-draft gates.

### Existing-page improvement queue

Existing-page work should precede publication while the October evidence is still this small and overlapping.

1. **MERV 11 versus 13 ownership and intent routing.** The disclosed generic cluster has 27 impressions at deep positions, while the page row surfaced is allergy-specific. Audit titles, introductions, internal anchors, and the generic-versus-allergy boundary before changing copy.
2. **Furnace-versus-AC terminology.** Ten disclosed exact/close impressions confirm the owner, but the page sits around position 21.64. Because it was published only on September 16, first inspect query/page alignment and allow maturation; avoid a premature rewrite.
3. **Fiberglass-versus-pleated snippet and exact wording.** Ten disclosed query impressions and position around 11.47 support focused title/description/introduction review rather than another article.
4. **Restrictive-filter furnace-damage answer.** Four exact-query impressions at position 7.25 and page position 6.8 show correct ownership. Review snippet clarity and CTR only; do not broaden into fear-based damage claims.
5. **Smoke guide intent alignment.** Three disclosed furnace-filter-for-smoke impressions and page position around 33.25 indicate an existing-owner optimization opportunity, not a new smoke page.
6. **Dirty-fast and still-clean wording.** Preserve their distinct owners; the clean-filter page already appears around position 5.09. Any change should be a measured query-language refinement, not timeframe variants.
7. **Thickness and substitution routing.** The four-inch cabinet query already ranks around position 5, while substitution variants rank deeper. Improve pathways between the two owners only if a complete query/page review shows confusion; do not reopen the rejected thicker-filter URL.

### Historical rejection status

All documented rejections remain active. In particular, a filter-location article does not revive the rejected household-filter-count page; the four-inch query does not revive the thicker-filter candidate; and thermostat-reminder research does not revive the rejected filter-change-shutdown article. Torn/ripped, same-brand replacement, sticky/greasy, unused-filter shelf life, and other recorded candidates retain their existing reconsideration thresholds.

### Audit conclusion

The 2026-10-04 discovery audit found one distinct future publication-gate candidate: **What Does “Change Filter” Mean on a Thermostat?** It deserves review because it owns reminder interpretation rather than replacement timing or location. It is not approved for publication. The stronger immediate evidence supports improving existing MERV, furnace-versus-AC, fiberglass, restriction, smoke, and timing owners. Article #43 remains unimplemented, and article #44 is not authorized by this discovery record.

## Article #42 opportunity discovery audit — 2026-09-30

**Decision: discovery complete; article #42 remains unapproved and unimplemented.** The current 41-article library, nine size guides, newest owner-provided Search Console export, earlier exports, historical rejections, external homeowner intent, and authoritative technical sources were reviewed. Thirty-five plausible concepts entered the broad pool. Nine failed the reality/relevance filter, 20 failed duplicate/cannibalization review, four belong to existing-page improvement, none qualified as a new size-page opportunity, and two survived as genuinely distinct new-article candidates. No production page, index card, homepage card, sitemap entry, image, or internal link was created.

The recommended candidate for a future evidence-gated article #42 review is **Do You Have to Use the Same Brand of HVAC Air Filter?** It is a recommendation for the next full publication-gate review, not publication authority. The second survivor is **Furnace Air Filter vs. Humidifier Filter: What's the Difference?** Article #43 remains unauthorized.

### Repository and inventory basis

- Production inventory at audit time: 41 published blog articles, nine filter-size guides, 56 sitemap/indexable URLs, and 52 non-legal content pages.
- All 41 article titles, H1s, section headings, FAQs, intros, substantive copy, and internal-link roles were inspected. The inventory was not inferred from filenames or roadmap counts alone.
- Primary and secondary intent ownership was compared against `blog/index.html`, `sitemap.xml`, the Filter Finder, and the current internal-linking map.
- The prior torn/ripped-filter, household-filter-count, thicker-filter, and filter-change-shutdown rejections remain in force. Rejected candidates did not consume article #42.

### Methodology

1. Verified repository state and production inventory.
2. Mapped each current article's primary decision and meaningful secondary coverage.
3. Parsed the attached `filter-wizard.com-Performance-on-Search-2026-09-30.xlsx` workbook and compared the preceding short-period and 28-day exports where useful.
4. Built a broad pool from first-party queries, current content boundaries, prior audits, authoritative-source gaps, and recurring homeowner wording.
5. Applied topic reality and Filter Wizard relevance before duplicate review.
6. Applied semantic duplication, cannibalization, existing-page-improvement, and information-gain tests.
7. Researched authoritative support and independent homeowner recurrence for the survivors.
8. Scored only the two survivors. Scores are editorial prioritization aids, not traffic forecasts.

### Current content ownership and saturation

| Cluster | Current primary owners | Secondary coverage relevant to discovery | Audit conclusion |
|---|---|---|---|
| Filter appearance and condition | clogged-signs hub; dirty-fast, black, brown, wet, one-side, unexpectedly clean, new-smell, and dust-around-vents guides | Replacement timing, fit, airflow symptoms, moisture escalation | Saturated; color, loading-speed, odor, and surface-condition variants need materially new evidence and action |
| Physical behavior | bending/bowing, movement, whistling | Fit, restriction, airflow direction, wet media | Saturated for ordinary movement/deformation symptoms |
| HVAC effects | freeze, not-cooling, energy-use, short-cycling, and restriction guides | Clogged signs and fan-runtime relationships | Strong first-party pattern, but most obvious causation queries already have direct owners |
| Size, fit, and depth | find-size, tight-fit, slightly-different-size, 1/2/4-inch comparison, and nine size guides | Nominal versus actual dimensions, cabinet/rack compatibility, brand variation | Highly saturated; brand substitution is the remaining distinct purchase decision, not another dimension page |
| Placement and configuration | every-return, return-plus-furnace, arrow-direction, and furnace-versus-AC guides | Filter location, multiple systems, heat pumps, air handlers, media cabinets | Saturated; household-count and installation-summary concepts remain rejected |
| Ratings and technology | MERV 8/11/13, MERV 11/13 for allergies, MERV/MPR/FPR, HEPA compatibility, HVAC-versus-portable cleaner, fiberglass/pleated, washable/disposable, electrostatic/pleated | Pressure drop, powered versus passive technology, MERV compatibility | Saturated; new rating or technology URLs need a genuinely different homeowner decision |
| Contaminant selection | pets, dust, allergies, smoke | Carbon/odor limits and portable-room-cleaner distinction | Saturated; contaminant adjectives and carbon-only variations belong to existing owners |
| Maintenance and operation | change frequency, vacuum/reuse, run-without-filter, continuous-fan | Safe replacement workflow in arrow-direction guide | Saturated for general schedules and routine replacement mechanics |
| Adjacent replacement components | No primary article | Furnace-versus-AC explains HVAC filter terminology, but no page distinguishes an HVAC air filter from a whole-house humidifier water panel/pad | Verified narrow gap; eligible only as a terminology/identification article |

### First-party GSC analysis

The newest workbook covers **September 22–28, 2026** and is filtered to Web / Last 7 days. It reports 9 clicks, 1,093 impressions, 0.82% CTR, and an impression-weighted average position of approximately 8.76. United States traffic accounts for 9 clicks and 894 impressions at approximately position 9.22. Mobile accounts for 796 impressions at approximately position 7.40; desktop accounts for 288 impressions at approximately position 12.59.

Compared with the preceding non-overlapping September 12–18 export, impressions increased from 811 to 1,093 and clicks increased from 5 to 9, while the weighted average position improved from approximately 10.26 to 8.76. This is directional evidence only: the samples are short, the indexed library changed, and disclosed query rows are incomplete.

The workbook discloses 35 query rows, whose impressions sum to far less than the sitewide 1,093. Query reporting is therefore partial/privacy-limited. The separate query and page sheets do not establish query-to-landing-page pairs.

Notable disclosed query evidence belongs to current owners:

- `can a filter that's too restrictive damage my furnace` — 6 impressions, average position 8.17; owned by `/blog/can-air-filter-be-too-restrictive.html`.
- `brown air filter` — 4 impressions, average position 7.50; owned by `/blog/why-is-my-air-filter-brown.html`.
- `fiberglass vs pleated air filter` and close fiberglass wording — recurring disclosed impressions; owned by `/blog/fiberglass-vs-pleated-air-filters.html`.
- `merv 13 vs merv 11`, `merv 11 vs 13`, and related MERV wording — recurring but substantially deeper positions; owned by the two current MERV comparison pages.
- `do i need filters in return grilles and unit both` — 3 impressions, average position 8.00; owned by `/blog/filter-at-return-and-furnace.html` and supported by `/blog/filters-in-every-return-vent.html`.
- `are ac and furnace filters same` — 2 impressions, average position 9.00; owned by `/blog/are-furnace-and-ac-filters-the-same.html`.
- `upgrade my filter rack to a four inch media cabinet, worth it` — 1 impression, average position 5.00; already answered by the thickness guide and does not reverse the thicker-filter rejection.
- `still white` — 1 impression, average position 3.00; consistent with the clean-filter article.

Page evidence continues to favor narrow physical/configuration topics: brown filter (169 impressions, three clicks, position 4.46), bending (202 impressions, one click, position 6.29), movement (34 impressions, one click, position 8.03), return plus furnace (11 impressions, one click, position 7.18), every return (123 impressions, position 7.84), new-filter smell (118 impressions, position 8.14), vacuum/reuse (33 impressions, position 6.39), dirty on one side (25 impressions, position 5.16), restriction (25 impressions, position 7.00), and thickness (24 impressions, position 9.71). This supports a directional content pattern, not exact demand for either survivor.

**Exact-query evidence:** no disclosed Filter Wizard query established demand for either shortlisted topic. **No verified numeric search-volume data was available.**

### Authoritative and external evidence reviewed

- **Trane homeowner filter guidance:** correct three-dimensional size and type matter; the existing filter/frame and equipment information are starting points. Supports the replacement-compatibility side of the brand question, not a universal same-brand rule.
- **Carrier homeowner replacement guidance:** replacement filters are available through multiple channels once the correct filter size is established. Supports the fact that equipment brand alone does not define a single retail source; it does not establish that every same-size product fits.
- **Filtrete FAQ and refillable-filter documentation:** nominal names can differ by brand or system; users must check actual frame dimensions; refillable/deep products list cabinet-specific fit. Supports both ordinary cross-brand possibility and proprietary/cabinet exceptions.
- **AprilAire replacement-media documentation:** air-cleaner media and humidifier water panels are tied to specific installed models. Supports model-specific exceptions and the distinction between HVAC filter media and a humidifier evaporative component.
- **ASHRAE Handbook furnace guidance:** a forced-air furnace filter is in the circulating airstream ahead of the blower/heat exchanger and removes dust from that air. Supports the HVAC air filter's distinct function.
- **AprilAire water-panel documentation:** a water panel is the replaceable evaporative element in a whole-house humidifier and helps convert water to vapor. Supports the humidifier-component side of the comparison.
- **Resideo humidifier homeowner manual:** identifies a model-specific humidifier pad and replacement process. Confirms that “humidifier filter” can mean a separate pad associated with the humidifier, not the central HVAC particle filter.
- **Independent homeowner discussions:** repeatedly ask whether a replacement must be the same brand and separately refer to furnace filters and humidifier filters/pads. These establish wording and recurrence only; they were not used for fit, performance, or maintenance truth.

### Broad candidate pool and disposition

| # | Concept researched | Disposition | Primary reason/current owner |
|---:|---|---|---|
| 1 | Must a replacement HVAC filter be the same brand? | **Shortlist** | Distinct brand-substitution decision with standard-size and proprietary-media exceptions |
| 2 | Furnace air filter vs. humidifier filter/water panel | **Shortlist** | Distinct component-identification gap; authoritative manufacturer terminology exists |
| 3 | Do unused HVAC filters expire? | Reality/source failure; defer | Recurring evidence was thin and available shelf-life claims were product/storage specific |
| 4 | Are expensive HVAC filters worth it? | Existing-page improvement | Fiberglass/pleated, MERV, thickness, and restriction pages already own the useful decisions |
| 5 | Activated-carbon HVAC filters for odors | Duplicate | Smoke guide and HVAC-versus-portable-cleaner guide own particles versus gases/odors |
| 6 | Heat-pump filter vs. furnace filter | Duplicate | Furnace-versus-AC guide already owns shared forced-air terminology and heat-pump exception |
| 7 | Mini-split filters | Relevance failure | Different equipment/maintenance category; already handled as an exception |
| 8 | Do boilers have air filters? | Relevance/information-gain failure | Non-forced-air exception already covered; too thin for a Filter Wizard article |
| 9 | Air-handler filter vs. furnace filter | Duplicate | Furnace-versus-AC guide owns the terminology/system relationship |
| 10 | Dirty filter causing weak airflow | Duplicate | Clogged-signs, not-cooling, restriction, whistling, and bending pages own the mechanism and actions |
| 11 | Dirty filter causing overheating | Duplicate | Short-cycling and restriction owners cover supported furnace effects and escalation |
| 12 | Burning smell after filter change | Reality/safety failure | Generic HVAC safety symptom with no defensible filter-specific standalone boundary |
| 13 | Filter changes during remodeling | Existing-page improvement | Dirty-fast and replacement-timing pages own unusually high loading and inspection cadence |
| 14 | Filter changes during wildfire smoke | Existing-page improvement | Smoke and replacement-timing pages own particle goal and loading-based replacement |
| 15 | Cut-to-fit HVAC filters | Duplicate | Slightly-different-size and fit pages own physical compatibility/no-trim safeguards |
| 16 | Scented filters or adding essential oil | Duplicate | New-filter-smell article already warns against spraying or adding fragrances/oils |
| 17 | Can HVAC filters be recycled? | Reality/information-gain failure | Material and local-program variability left no substantial, authoritative universal answer |
| 18 | HVAC filters for mold | Duplicate/scope risk | Allergy, wet-filter, and IAQ boundaries already own particle filtration versus moisture remediation |
| 19 | Antimicrobial HVAC filters | Evidence/health-claim failure | Product-specific claims and medical/antimicrobial implications lack a safe category-level answer |
| 20 | Sticky or greasy air filter | Historical deferment | Sparse specific evidence and high overlap with dirty-fast, smoke, and new-smell owners |
| 21 | MERV-A vs. MERV | Duplicate/technical niche | Electrostatic/pleated and MERV owners already cover charge, test labels, and selection limits |
| 22 | Media cabinet vs. standard filter rack | Duplicate | Thickness guide owns rack/cabinet compatibility and deeper-media tradeoffs |
| 23 | Filter stuck or filter door will not close | Duplicate | Fit, sizing, thickness, and wrong-size safeguards own the useful action |
| 24 | What if an air filter has no arrow? | Duplicate | Arrow-direction article owns airflow identification and safe installation |
| 25 | What if a filter has no printed size? | Duplicate | Find-size article owns measuring and nominal/actual dimensions |
| 26 | New-homeowner HVAC filter checklist | Cannibalizing summary | Would consolidate location, count, size, arrow, and timing owners without a new decision |
| 27 | ERV/HRV filters | Relevance failure | Separate ventilation-equipment maintenance category outside the site's current core |
| 28 | UV air cleaner vs. HVAC filter | Relevance/evidence failure | Powered IAQ equipment comparison would drift beyond filter selection and repeat article #40 boundaries |
| 29 | Construction-dust filter choice | Duplicate | Dust, dirty-fast, MERV, and timing pages already supply the defensible guidance |
| 30 | Should HVAC be off during a filter change? | Historical rejection | Arrow-direction article already owns the complete replacement procedure and exact FAQ |
| 31 | How many HVAC filters does a house have? | Historical rejection | Every-return and return-plus-furnace pages own configuration and location discovery |
| 32 | Can a homeowner upgrade to a thicker filter? | Historical rejection | Thickness and slightly-different-size pages own cabinet compatibility and no-improvisation rules |
| 33 | Why is a filter torn or ripped? | Historical rejection | Fit, bending, wet, restriction, sizing, and reuse pages own the defensible causes/actions |
| 34 | Can an HVAC filter prevent carbon monoxide? | False-premise/high-stakes failure | A particle filter is not a carbon-monoxide control or detector |
| 35 | Can high MERV damage a furnace? | Existing-page improvement | The restriction guide already owns this exact compatibility question |

### Funnel counts

- Concepts researched: **35**
- Failed topic reality or Filter Wizard relevance: **9**
- Failed duplication/cannibalization: **20**
- Classified as existing-page improvements: **4**
- Classified as filter-size-page opportunities: **0**
- Survived as new-article candidates: **2**

The shortlist is below the requested target range because a third candidate did not clear every gate. The audit does not pad the roadmap with a weak URL.

### Validated article #42 shortlist

#### 1. Do You Have to Use the Same Brand of HVAC Air Filter?

- **Suggested URL:** `/blog/do-you-have-to-use-same-brand-air-filter.html`
- **Primary homeowner question:** Must the replacement filter match the furnace/air-handler or old-filter brand, or can a different brand be used safely?
- **Primary intent:** Brand substitution while preserving actual size, depth/cabinet fit, tested efficiency, and system compatibility.
- **Why it is real:** Manufacturers sell both ordinary retail filters and cabinet-specific/proprietary media, nominal labels vary, and independent homeowners repeatedly ask whether “same brand” is required.
- **First-party GSC evidence:** None for the exact intent in the disclosed query rows. Current size/fit/configuration performance is directional cluster evidence only.
- **External intent evidence:** Repeated homeowner questions about OEM versus generic filters, especially after moving or encountering deep-media cabinets. Search results also recur around compatible replacement brands.
- **Authoritative source availability:** Trane and Carrier establish correct size/type and replacement channels; Filtrete documents brand-dependent nominal labels and cabinet-specific fit; AprilAire documents model-specific media. No source supports “brand never matters” as a universal rule.
- **Nearest existing pages:** `/blog/how-to-find-air-filter-size.html`, `/blog/can-i-use-a-slightly-different-size-air-filter.html`, and `/blog/how-tight-should-air-filter-fit.html`.
- **Ownership boundary:** Existing pages own dimensions, physical substitution, and seating. This candidate would own whether the brand name itself is a compatibility requirement, including the difference between ordinary standard-size replacements and model/cabinet-specific media.
- **Information gain:** Explains when brand is incidental, when actual dimensions differ despite the same nominal label, when a cabinet or refillable frame requires a listed compatible media, and which product facts to compare without asserting universal interchangeability.
- **Cannibalization risk:** **MODERATE (-3).** Size/fit material must remain concise and linked rather than recreated.
- **Filter Finder relevance:** High after the user confirms the supported physical size; the Finder cannot validate proprietary cabinet/media compatibility.
- **Likely internal-link cluster:** Size, fit, slightly-different-size, thickness, MERV, Filter Finder.
- **Major factual/safety risks:** Saying all same-size filters are interchangeable; ignoring actual dimensions or cabinet-specific media; treating matching brand as proof of HVAC compatibility; implying Filter Finder validates proprietary replacements.
- **Score breakdown:** Real-world evidence 5/5; GSC 0/5; external intent 4/5; distinct intent 4/5; information gain 4/5; source depth 4/5; Filter Wizard relevance 5/5; internal linking 5/5; commercial/Finder relevance 5/5. **Raw total: 36/45. Cannibalization penalty: -3. Adjusted total: 33.**

#### 2. Furnace Air Filter vs. Humidifier Filter: What's the Difference?

- **Suggested URL:** `/blog/furnace-air-filter-vs-humidifier-filter.html`
- **Primary homeowner question:** Is the “humidifier filter” or water panel near the furnace the same component as the HVAC air filter?
- **Primary intent:** Identify two separate service components, their different functions, and why their replacement specifications and maintenance instructions are not interchangeable.
- **Why it is real:** AprilAire itself uses “humidifier filter” alongside “water panel,” Resideo calls the component a humidifier pad, and homeowners refer separately to furnace filters and humidifier filters/pads.
- **First-party GSC evidence:** None for the exact intent in the disclosed query rows.
- **External intent evidence:** Exact comparison pages and independent homeowner discussions recur, especially among new homeowners identifying equipment-room replacement parts. Community material supports wording only.
- **Authoritative source availability:** ASHRAE establishes the forced-air filter's circulating-air function; AprilAire and Resideo establish model-specific evaporative water panels/pads and their distinct humidifier role.
- **Nearest existing pages:** `/blog/are-furnace-and-ac-filters-the-same.html`, `/blog/how-to-find-air-filter-size.html`, and `/blog/how-often-change-air-filter.html`.
- **Ownership boundary:** Furnace-versus-AC owns two seasonal names for the same central forced-air filtration relationship. This candidate would own a genuinely different component: HVAC particle filter versus whole-house humidifier evaporative pad/water panel. It would not become a humidifier maintenance tutorial.
- **Information gain:** Prevents buying or servicing the wrong component; distinguishes air-path particle capture from a water-fed evaporative element; explains model-specific identification and separate instructions without universal replacement schedules.
- **Cannibalization risk:** **LOW (0).** No current page substantively covers water panels or humidifier pads.
- **Filter Finder relevance:** Limited but legitimate for the HVAC-filter side only; the Finder does not identify humidifier pads or water panels.
- **Likely internal-link cluster:** Furnace-versus-AC terminology, find-size, replacement timing, Filter Finder boundary.
- **Major factual/safety risks:** Calling every humidifier component a filter; implying all humidifiers use a pad; inventing universal change intervals; providing invasive water/electrical service steps; allowing the article to drift into whole-house humidifier buying or repair.
- **Score breakdown:** Real-world evidence 4/5; GSC 0/5; external intent 3/5; distinct intent 5/5; information gain 4/5; source depth 5/5; Filter Wizard relevance 4/5; internal linking 4/5; commercial/Finder relevance 2/5. **Raw total: 31/45. Cannibalization penalty: 0. Adjusted total: 31.**

### Recommended article #42 candidate

**Recommend: Do You Have to Use the Same Brand of HVAC Air Filter?**

The qualitative decision narrowly favors this candidate because it stays at the center of Filter Wizard's replacement-selection mission, answers a recurring purchase/compatibility decision, and naturally connects the size, fit, thickness, ratings, and Finder journeys. Its moderate overlap is controllable only if a future publication review holds the boundary to **brand substitution**, keeps dimension and MERV explanations brief, and treats proprietary media as a documented exception rather than a reason to recommend OEM products universally.

The humidifier-filter comparison has cleaner ownership and stronger source separation, but it is more peripheral to the product funnel and has weaker demonstrated external intent. It remains a valid runner-up, not a fallback authorized for publication.

This recommendation does not approve drafting or publication. A future task must rerun topic reality, current GSC, duplicate/cannibalization, product-documentation, technical, safety, commercial-independence, and post-draft gates before article #42 can exist.

### Existing-page improvement opportunities

These are not article #42 candidates and were not implemented:

1. **Restrictive-filter guide:** the exact damage-to-furnace wording now has first-party impressions near page one. Reassess the concise answer/FAQ and snippet alignment without creating a new URL or making a universal damage claim.
2. **MERV 11 versus MERV 13 guide:** the disclosed MERV comparison cluster is recurring but ranks substantially deeper. Review intent alignment, differentiation from the MERV hub, and internal links before considering any new MERV page.
3. **Fiberglass versus pleated guide:** exact and “are fiberglass furnace filters good” wording recurs. Confirm the existing Quick Answer/FAQ directly resolves the value question; improve the owner rather than publish “are expensive filters worth it.”
4. **Furnace-versus-AC guide:** exact terminology appears while the page-level position remains deeper than the strongest troubleshooting pages. Monitor and later review title/snippet/internal-link alignment; do not split heat-pump or air-handler variants.
5. **Return-configuration pair:** the exact return-grille-plus-unit query continues to validate the current owner. Preserve the every-return and return-plus-furnace boundary and improve their connection only if later page/query evidence shows ambiguity.

### Filter-size opportunities

**None.** The workbook discloses one 20x20x1 query impression, which is insufficient to justify a new size page and supplies no distinct homeowner utility. The nine-page size set remains unchanged and must be evaluated under the size-page guardrail before any expansion.

### Rejected/deferred ledger and reconsideration thresholds

| Candidate/family | Current state | Why it is not a new URL | Reconsider only if |
|---|---|---|---|
| Torn/ripped HVAC filter | Rejected/deferred | Sparse recurrence; defensible causes/actions already distributed across fit, bending, wet, restriction, sizing, and reuse owners | Repeated independent query evidence plus authoritative residential-HVAC causation that creates a distinct safe diagnostic path |
| Household HVAC filter count | Rejected/deferred | Every-return and return-plus-furnace pages own count/configuration discovery | New first-party demand and a decision not substantially answered by those configuration owners |
| Thicker-filter upgrade | Rejected/deferred | Thickness and slightly-different-size pages own rack/cabinet depth and substitution safety | Evidence of a distinct homeowner action those pages cannot absorb without losing their current intent |
| Turn HVAC off before changing filter | Rejected/deferred | Arrow-direction page already owns the complete procedure and exact FAQ | A materially different equipment-access decision with enough authoritative, safe information gain for a standalone article |
| Same-brand replacement compatibility | Rejected/deferred | The slightly-different-size and fit guides already own same-nominal/different-brand variation, actual-dimension checking, cabinet documentation, seating, and the no-improvisation workflow | New first-party demand and a distinct manufacturer/cabinet decision that cannot be handled as a concise extension of the current substitution owner |
| Sticky/greasy filter | Research needed/deferred | Weak context-specific evidence and high overlap with dirty-fast, smoke, and new-smell pages | Multiple independent demand signals plus authoritative cause/action evidence |
| Unused-filter shelf life | Research needed/deferred | Current evidence is product- and storage-condition-specific; residential intent is weak | Multiple residential manufacturers publish compatible storage/shelf-life guidance and independent homeowner demand recurs |
| Carbon/odor filter | Merge only | Smoke and HVAC-versus-portable-cleaner pages already separate particle and gas/odor filtration | A distinct first-party query cluster reveals an unmet HVAC-filter decision rather than a contaminant variation |
| Weak airflow / overheating / high-MERV damage | Existing-owner improvement | Clogged, cooling, short-cycling, and restriction pages own these mechanisms | Current owners demonstrably fail a distinct query intent that cannot be corrected in place |
| Heat-pump, air-handler, mini-split, or boiler naming variants | Merge/reject | Furnace-versus-AC owns central forced-air terminology and exceptions; non-central equipment drifts from scope | Strong demand and a new filter-specific decision beyond nomenclature |
| Construction, wildfire, pets, gray/color, seasonal, or timeframe variants | Merge/reject | Dirty-fast, timing, dust, smoke, pet, and appearance owners already cover the actionable guidance | New evidence establishes a different cause, safe action, and intent owner rather than an adjective or context variant |

### Audit conclusion

At discovery time, the next defensible full publication review was a tightly bounded **same-brand replacement compatibility** article, with the **humidifier water-panel distinction** as a lower-priority runner-up. Neither was approved for production by the discovery audit. The subsequent same-brand publication review recorded immediately below rejected the recommended candidate after deeper comparison with the current size-substitution and fit owners; the runner-up was not substituted.

## Same-brand HVAC filter publication review — 2026-09-30

**Decision: rejected as a separate article #42; do not create `/blog/do-you-have-to-use-same-brand-air-filter.html` without materially new information gain.** The homeowner question is real and the discovery audit correctly identified a nuanced compatibility issue, but the proposal failed the duplicate, size-substitution cannibalization, fit-guide cannibalization, and information-gain/thin-content gates. The audit recommendation did not constitute publication authority. No exact-query Filter Wizard GSC evidence existed, and no verified numeric search-volume data was available.

- **Topic reality, user intent, current-audit consistency, and Filter Wizard relevance — PASSED.** Current independent homeowner discussions repeatedly ask whether a furnace or HVAC filter must match the installed or equipment brand, including cases where equally labeled deep-media products fit differently. Search results also recur around same-brand, different-brand, OEM, and generic replacement wording. These sources establish the question and wording only. The current discovery audit still named this candidate first, no newer production URL owns a newly introduced intent, and the production inventory remains unchanged.
- **Brand/compatibility, nominal/actual-dimension, standard-slot/media-cabinet, OEM/aftermarket, cabinet-media, MERV/performance, airflow, warranty, safety, Finder, and commercial-independence reviews — PASSED with strict qualifications.** Carrier permits replacement purchases through its dealers, its own store, local retailers, and online retailers after size is established; that supports multiple purchase channels, not universal interchangeability. Filtrete states that nominal size can be labeled differently by brand or system and tells users to check actual frame dimensions; its deep refillable products list cabinet-specific fit. AprilAire and Resideo documentation maps installed air-cleaner models to particular replacement-media models or part families. These sources support a qualified answer: brand alone is neither a universal requirement nor a compatibility certificate. Actual dimensions, supported depth, holder or cabinet model, documented media family, product performance, and proper seating still matter.
- **Size-Guide Cannibalization Test — PASSED.** `/blog/how-to-find-air-filter-size.html` owns how to identify and measure the required size. It supplies adjacent evidence about nominal versus actual dimensions and cabinet labels, but its primary task is size discovery rather than brand substitution.
- **Thickness-Guide and MERV-Guide Cannibalization Tests — PASSED.** `/blog/1-inch-vs-2-inch-vs-4-inch-air-filters.html` retains depth and cabinet-upgrade decisions. The MERV guides retain rating selection and label comparison. A brand change does not authorize a depth change, and MERV alone does not establish interchangeability.
- **Duplicate-Topic Preflight and Size-Substitution Cannibalization Test — FAILED.** `/blog/can-i-use-a-slightly-different-size-air-filter.html` already distinguishes a same-nominal-size brand change from a different-size substitution; explains that two brands carrying the same nominal label can differ in actual length, width, corner shape, or thickness; advises comparing product-specific actual dimensions; tells readers to test one filter before buying a multipack; and gives a decision grid that classifies “same nominal size, different brand” as a compatibility check. It also directs cabinet users to model/product identifiers and approved replacement documentation and rejects trimming, crushing, stacking, taping, spacers, and other improvised fit methods.
- **Fit-Guide Cannibalization Test — FAILED.** `/blog/how-tight-should-air-filter-fit.html` already has a dedicated “Why Does a New Filter Brand Fit Differently?” section and the matching FAQ. It explains cross-brand differences in actual dimensions, frame stiffness, corners, adhesives, support grids, and tolerances, then sends the reader to cabinet documentation or product-specific actual dimensions when fit is uncertain.
- **Information-Gain / Thin-Content Test — FAILED.** After removing the existing owners' cross-brand size, actual-dimension, cabinet, fit, MERV, pressure-drop, and no-improvisation material, the remaining standalone contribution is a short distinction between the HVAC equipment logo, an ordinary retail filter brand, and a model-specific media-cabinet replacement family. That distinction is useful, but it can be expressed as a concise clarification within the current substitution owner. Expanding it to article length would repeat the two existing guides or drift into unsupported OEM quality rankings and speculative warranty advice.
- **Warranty Claim Audit — PASSED by exclusion.** No reviewed source supports either “another brand automatically voids the HVAC warranty” or “another brand can never affect warranty coverage” as a universal statement. Any future treatment must stay narrow: follow the installed equipment or accessory documentation and obtain product-specific warranty guidance when it matters. Filter Wizard should not provide a general legal conclusion.
- **Filter Finder Relevance Test — PASSED with a boundary.** After the supported physical size is independently known, the Finder can assist with ordinary HVAC-filter selection. It cannot validate cabinet-specific OEM or aftermarket media, every manufacturer's actual dimensions, warranty compliance, depth changes, or product-specific pressure drop.
- **Post-Draft Intent Audit — NOT RUN.** Drafting stopped at the mandatory ownership and information-gain gates. No article, image, blog-index card, homepage card, sitemap entry, incoming production link, Finder CTA, retailer block, or other production change was created. The humidifier-filter runner-up was not substituted. Article #42 remains unused, and article #43 remains unauthorized.

### Same-brand compatibility claim ledger

| Claim | Decision | Reason |
|---|---|---|
| The replacement must use the brand already installed | Reject | The installed brand is a clue, not a universal compatibility rule |
| The furnace, air-handler, or AC brand determines the required filter brand | Reject | The installed holder or accessory can be separate from the equipment brand; its documentation controls |
| Any brand works when the nominal size matches | Reject | Actual dimensions, depth, cabinet geometry, construction, and documented media compatibility can differ |
| The same nominal label guarantees identical actual dimensions | Reject | Filtrete explicitly warns that nominal labeling can differ by brand or system and directs users to actual frame dimensions |
| Different brands can have different actual dimensions under one nominal label | Keep | Supported by Filtrete and already explained by the size and fit owners |
| An ordinary rack or return grille may accept compatible filters from multiple brands | Keep, qualified | Carrier documents multiple purchase channels after correct size is established; the actual holder and product dimensions still control |
| A dedicated media cabinet can use model-specific replacement dimensions or media families | Keep | AprilAire and Resideo publish cabinet-to-media model and part mappings |
| OEM media is always required | Reject | Product-specific documentation, not an industry-wide rule, establishes a requirement |
| Aftermarket media is always interchangeable with OEM media | Reject | A generic compatibility claim does not establish actual fit, construction, performance, or approval |
| Aftermarket filters are always lower quality | Reject | No defensible category-wide evidence supports that ranking |
| Another filter brand automatically voids the HVAC warranty | Reject | No universal manufacturer or legal basis was established |
| Brand never matters | Reject | Cabinet-specific media and product-specific dimensions can make the selected product family material |
| MERV alone establishes compatibility | Reject | MERV addresses particle-removal performance, not dimensions, cabinet fit, or system approval |
| The same MERV guarantees the same pressure drop or performance | Reject | Product construction and test data vary; rating equality is not product identity |
| Changing brands permits changing filter depth | Reject | The holder or cabinet must support the depth independently of brand |
| Trimming, compressing, forcing, stacking, or adapting another brand makes it compatible | Reject | Those are improvised fit methods, not evidence of compatibility |
| The currently installed filter proves the required brand | Reject, qualified | It is useful evidence of prior use but does not prove that its brand, size, or performance is required or correct |
| The filter cabinet or accessory model may matter more than the furnace or outdoor-unit logo | Keep, qualified | AprilAire, Resideo, and Filtrete document replacement fit by cabinet/media family |
| Cabinet-specific manufacturer documentation should take priority | Keep | It is the most direct source for supported replacement media and part families |
| Filter Finder can identify every cross-brand replacement | Reject | The Finder does not validate proprietary cabinets, actual dimensions for every product, warranties, or pressure drop |
| Filter Finder can help after supported physical size is known | Keep, qualified | Its current role is ordinary HVAC-filter selection after independent size confirmation |
| A replacement should seat without forcing or major bypass gaps | Keep | Existing fit and substitution owners already establish this physical-fit boundary |
| Product-specific actual dimensions should be checked when fit is uncertain | Keep | Supported by Filtrete and current production guidance |
| Brand switching is primarily a compatibility question, not a loyalty question | Keep, qualified | Useful framing, but compatibility includes more than the nominal label or brand name |

## Furnace-filter-versus-humidifier-media publication review — 2026-09-30

**Decision: published as article #42 at `/blog/furnace-air-filter-vs-humidifier-filter.html`.** The remaining discovery-audit survivor was independently revalidated rather than promoted automatically. Topic reality, search intent, current-audit consistency, duplicate/cannibalization, terminology, component-function, maintenance, configuration, humidifier-type, health, water/mineral, Finder, commercial-independence, information-gain, and post-draft intent gates passed. No exact-query Filter Wizard GSC evidence existed, and no verified numeric search-volume data was available. Article #43 remains unapproved.

- **Reality, intent, and terminology — PASSED.** AprilAire uses “Water Panel” and also acknowledges “humidifier filter”; Resideo/Honeywell Home uses “humidifier pad”; GeneralAire uses “Vapor Pad” and lists water panel, evaporator sleeve, water filter, and humidifier filter as alternate market terms. Recurring homeowner discussions separately ask about furnace filters and humidifier filters or pads. Community sources establish wording and recurrence only.
- **Technical and humidifier-type review — PASSED.** Trane documents the HVAC filter's return-air particle-capture role. AprilAire, Resideo, Honeywell Home, GeneralAire, and Lennox document evaporative media that receives water so moving air can pick up moisture. AprilAire and Resideo steam documentation establishes that steam equipment can instead use model-specific canisters, electrodes, inlet-water filters, or other service parts. The article therefore does not claim every whole-house humidifier has a filter or pad.
- **Duplicate and cannibalization reviews — PASSED.** Furnace-versus-AC retains whether seasonal names describe the shared forced-air filter; replacement timing retains HVAC-filter inspection and interval guidance; find-size retains HVAC-filter dimensions; HVAC-versus-portable-cleaner retains central versus room particle cleaning. None owns humidifier media identification, terminology, model-based selection, or its non-interchangeability with the HVAC filter.
- **Maintenance, mineral, health, and safety reviews — PASSED with qualifications.** Manufacturer schedules vary by model and conditions, so no universal interval is published. Mineral deposits are described only as a possible effect of water chemistry and use, not a diagnosis. No mold, disease, allergy, asthma, or medical outcome is claimed. The page gives no internal service, water-line, electrical, or steam-canister procedure.
- **Information gain and post-draft intent — PASSED.** After adjacent HVAC-filter timing, sizing, MERV, and air-cleaner material is routed to existing owners, the article retains distinct value: separate functions and locations; manufacturer-specific water-panel, pad, vapor-pad, and canister terminology; evaporative-versus-steam boundaries; model-specific replacement logic; separate maintenance bases; and the Finder boundary.
- **Commercial independence and Finder relevance — PASSED.** The article contains zero retailer blocks and no humidifier affiliate path. Filter Finder is offered once for the HVAC-filter side after supported size is known and is explicitly unable to identify humidifier pads, panels, canisters, or model-specific parts.

### Furnace-filter-versus-humidifier-media claim ledger

| Claim | Decision | Evidence boundary |
|---|---|---|
| A furnace/HVAC filter and humidifier media are the same component | Reject | Manufacturer documentation assigns them different locations, functions, and replacement identifiers |
| Every whole-house humidifier has a filter or pad | Reject | Steam and other designs use different service components |
| “Humidifier filter” is the universal technical term | Reject | Manufacturers use water panel, humidifier pad, vapor pad, canister, and other model-specific terms |
| Many evaporative whole-house humidifiers use a water panel or pad | Keep, qualified | Supported by AprilAire, Resideo/Honeywell Home, GeneralAire, and Lennox for their evaporative products |
| HVAC air filters capture particles from circulating return air | Keep | Supported by Trane; exact efficiency still depends on the filter and system |
| Evaporative humidifier media supports water evaporation into moving air | Keep | Supported by current manufacturer explanations and manuals |
| Humidifier pads meaningfully replace HVAC particle filtration | Reject | No reviewed evidence supports interchangeability or an HVAC-filter role |
| HVAC filters add humidity | Reject | That is not the particle filter's function |
| Replacing one component services the other | Reject | They have separate holders, identifiers, and maintenance instructions |
| Both components follow one universal schedule | Reject | Manufacturer and model instructions vary |
| Humidifier-media timing is model/manufacturer specific | Keep | Supported by model-specific manuals, indicators, and product guidance |
| Mineral deposits can affect evaporative media | Keep, qualified | AprilAire and Resideo describe deposit/loading effects; no universal water-quality diagnosis is made |
| Every dirty pad causes mold or illness | Reject | Unsupported health and biological generalization |
| Steam humidifiers use the same pad as bypass units | Reject | AprilAire and Resideo document steam canisters and other steam-specific parts |
| HVAC filters may use MERV ratings | Keep | MERV applies to particle-filter performance, not generic humidifier media |
| Humidifier water panels should be selected by MERV | Reject | Replacement is identified from humidifier model/product documentation |
| Filter Finder identifies humidifier replacement media | Reject | Current Finder covers HVAC air filters only |
| Filter Finder can help with the HVAC-filter side | Keep, qualified | Supported after the system's filter size is independently known |
| HVAC-filter size determines humidifier-media size | Reject | Humidifier model and manufacturer documentation control the humidifier part |
| Model-specific humidifier documentation should control service and replacement | Keep | It is the direct source for the installed product's terminology, part, and procedure |

## Filter-change shutdown publication review — 2026-09-30

**Decision: rejected as a separate article #42; do not create `/blog/turn-off-hvac-before-changing-air-filter.html` without materially new information gain.** The homeowner question is verified, but the proposal failed the duplicate, airflow-direction cannibalization, and thin-content/information-gain gates. No exact-query Filter Wizard GSC evidence existed, and no verified numeric search-volume data was available.

- **Topic reality, user intent, manufacturer source review, and Filter Wizard relevance — PASSED.** Trane's homeowner procedure starts by turning off the HVAC system and ends by closing the filter cover and turning the system back on. AprilAire Model 2410 instructions specify thermostat mode OFF and fan AUTO before removing the air-cleaner door. Carrier's current homeowner procedures describe either thermostat shutdown or an equipment power cutoff, while applicable furnace manuals require electrical isolation when service involves a blower access door. Independent homeowner discussions confirm recurring uncertainty about changing a filter while the blower runs. Community reports establish wording and recurrence only.
- **Thermostat/electrical-disconnect, blower-removal, access-type, electrical-safety, reinstall/direction, and commercial-independence reviews — PASSED with strict qualifications.** Thermostat OFF is not electrical isolation; a separate fan ON or circulation setting can continue commanding the blower; and power-isolation requirements depend on the actual equipment and access method. A normal accessible return grille or dedicated filter holder is not equivalent to opening a blower or electrical service compartment. Manufacturer instructions control. No universal breaker rule, electrical-service procedure, or claim of immediate damage from a momentary filter-removal interval is supportable.
- **Change-Frequency Cannibalization Test — PASSED.** `/blog/how-often-change-air-filter.html` owns inspection and replacement timing rather than shutdown level. It contains only brief installation reminders and does not independently answer the thermostat-versus-disconnect question.
- **Run-Without-Filter Cannibalization Test — PASSED.** `/blog/can-you-run-hvac-without-air-filter.html` owns deliberate or continued operation with a missing required filter, not the control-setting procedure for routine replacement. That boundary is defensible, although the no-filter page already supplies the adjacent reason not to resume operation before reinstalling the filter.
- **Duplicate-Topic Preflight and Airflow-Direction Cannibalization Test — FAILED.** `/blog/air-filter-arrow-direction.html` already includes the exact FAQ “Should I turn off the HVAC system before changing the filter?” and a complete ten-step installation procedure: thermostat off, wait for blower stop, photograph and remove the old filter, identify airflow, install without force, close the cover or grille, restore operation, observe normal behavior, and record the date. It also covers return grilles, furnace slots, air-handler racks, sealed-panel limits, sizing, fit, and escalation.
- **Thin-Content / Information-Gain Test — FAILED.** Once the current airflow-direction procedure and adjacent sizing, fit, timing, and no-filter material are excluded, the unique content is a short equipment-specific distinction: ordinary accessible filter changes require the blower to be stopped, whereas access involving a blower/service compartment may require electrical isolation under the applicable manual. Expanding that distinction to article length would require duplicating the existing installation guide or adding generic electrical-safety filler.
- **Post-Draft Intent Audit — NOT RUN.** Drafting stopped at the mandatory gates. No article, image, index card, homepage card, sitemap entry, internal-link edit, or other production change was created. Article #42 remains unused, and no substitute article was authorized.

### Filter-change shutdown claim ledger

| Claim | Decision | Reason |
|---|---|---|
| The blower should be stopped before ordinary filter removal | Keep | Trane, Carrier, and AprilAire replacement procedures begin with shutdown |
| Thermostat OFF is sufficient electrical isolation | Reject | Control shutdown does not establish de-energization |
| Thermostat OFF is commonly used for accessible routine replacement | Keep, qualified | Supported by manufacturer homeowner procedures; actual equipment instructions control |
| Fan AUTO guarantees an immediate stop in every system | Reject | Controls, delays, schedules, and equipment behavior vary; confirm the blower has stopped |
| Fan ON can continue blower operation without a heating or cooling call | Keep, qualified | AprilAire thermostat documentation defines ON as continuous fan operation |
| Every filter change requires the circuit breaker or disconnect | Reject | Manufacturer procedures vary with access type and equipment |
| A breaker or service disconnect is never required | Reject | Some equipment manuals require power isolation for blower-door filter service |
| A return-grille filter change and blower-compartment access have identical precautions | Reject | Access hazards and manufacturer requirements differ |
| Removing a filter briefly while the blower runs causes immediate equipment damage | Reject | No authoritative source supports that universal catastrophic claim |
| Stopping airflow helps prevent loose debris from being drawn into the system | Keep, qualified | Trane expressly gives this reason; it is not a damage threshold |
| The normal filter cover or grille should be closed before restart | Keep | Manufacturer replacement sequences restore covers before operation |
| The replacement's size, seating, and airflow direction should be confirmed | Keep | Established manufacturer procedure and existing intent owners support these checks |
| Homeowners should open electrical/control panels to ensure shutdown | Reject | Outside routine filter replacement and Filter Wizard's safety scope |

## Thicker-filter compatibility publication review — 2026-09-30

**Decision: rejected as a separate article #42; do not create `/blog/can-you-use-thicker-air-filter.html` without materially new information gain.** The underlying homeowner question is verified and recurring, but the proposal failed the duplicate, thickness-article cannibalization, and size-substitution cannibalization gates. No exact-query Filter Wizard GSC evidence existed, and no verified numeric search-volume data was available.

- **Topic reality, user intent, technical evidence, and Filter Wizard relevance — PASSED.** Exact-question search recurrence confirms homeowner confusion. Resideo's F100/F200 installation literature documents a purpose-built media cabinet, model-specific cartridge sizes, required access clearance, and retrofit installations that can require return-duct transitions and sheet-metal work. AprilAire documentation likewise ties replacement media to the installed cabinet model. These sources support the cabinet-compatibility decision but not a new URL.
- **Filter-rack/cabinet, face-size/depth, retrofit, airflow, MERV, safety, and commercial-independence reviews — PASSED with qualifications.** Matching nominal width and height does not establish depth compatibility; cabinet or rack documentation controls. Deeper pleated designs can provide more media area, but depth alone does not establish MERV, pressure drop, service life, or superiority. No forced fit, trimming, crushing, stacking, spacer, homemade-adapter, or DIY sheet-metal instructions are appropriate.
- **Duplicate-Topic Preflight — FAILED.** `/blog/1-inch-vs-2-inch-vs-4-inch-air-filters.html` already answers whether a 1-inch filter can be replaced with a 4-inch filter, defines depth as the third dimension, explains purpose-built deep media cabinets, separates depth from MERV and pressure drop, rejects stacking and forcing, and gives a checklist for deciding whether to keep the current depth or seek cabinet evaluation.
- **Thickness-Article Cannibalization Test — FAILED.** The thickness guide is the direct primary owner. Its introduction, Quick Answer, compatibility section, stacking section, decision framework, recommendation, and FAQs collectively satisfy the proposed query. A new article would reproduce its central answer and most of its supporting sections.
- **Size-Substitution Cannibalization Test — FAILED.** `/blog/can-i-use-a-slightly-different-size-air-filter.html` explicitly says a 2-inch or 4-inch filter is not a drop-in substitute for a 1-inch slot, explains cabinet-supported alternatives and approved conversions, distinguishes nominal from actual dimensions, and prohibits trimming, folding, crushing, taping, spacers, and other improvised fit methods.
- **Post-Draft Intent Audit — NOT RUN.** Drafting stopped at the mandatory ownership gates. No article, image, index card, homepage card, sitemap entry, internal-link edit, or other production change was created. Article #42 remains unused, and no substitute article was authorized.

### Thicker-filter claim ledger

| Claim | Decision | Reason |
|---|---|---|
| Matching face dimensions make 1-inch and 4-inch filters interchangeable | Reject | Depth and the installed holder remain independent compatibility constraints |
| A 1-inch rack generally accepts a 4-inch filter | Reject | The actual rack or cabinet must be designed for the selected depth |
| Deeper media may require a dedicated cabinet or system modification | Keep, qualified | Resideo documents cabinet installation, clearance, transitions, and return-duct integration; the actual installation controls |
| Some documented arrangements may support more than one filter option | Keep, qualified | Only applicable manufacturer or cabinet documentation can establish an approved alternative |
| Homeowners can stack, compress, trim, tape, or adapt filters to change depth | Reject | These are improvised substitutions, not documented compatibility |
| A deeper filter always has higher MERV, lower pressure drop, better filtration, or longer service life | Reject | Depth is not an efficiency, resistance, or service-life rating |
| Deeper pleated media can provide more media area | Keep, qualified | It is a design possibility, not a universal product-performance guarantee |
| Nominal dimensions establish one universal actual size | Reject | Actual dimensions vary by product and proprietary cabinet family |
| Cabinet/rack depth and manufacturer-approved dimensions control fit | Keep | Supported by current manufacturer cabinet and replacement-media documentation |
| A generic article should teach cabinet or duct modification | Reject | Retrofit work is equipment-specific and outside the safe homeowner scope |

## Household HVAC filter-count publication review — 2026-09-27

**Decision: rejected as a separate article #40; do not create `/blog/how-many-air-filters-does-a-house-have.html` without materially new information gain.** The underlying question is verified and recurring, but the proposal failed the duplicate, cannibalization, and post-research distinctness gates. No exact-query Filter Wizard GSC evidence existed, and no verified numeric search-volume data was available. The documented return/configuration GSC strength is directional cluster evidence only.

- **Topic reality, user intent, and Filter Wizard relevance — PASSED.** Trane states that filter location varies and that a home with multiple HVAC systems will likely have at least one filter for each unit; Carrier distinguishes central filtered returns from unfiltered room returns and documents equipment-side cabinets; Lennox equipment guidance documents one return-air filter location or filters at multiple return openings. Filtrete publishes the exact homeowner question, and repeated independent homeowner discussions ask how many filters to find after moving or discovering several locations. Community evidence establishes recurrence, not configuration rules.
- **Technical, configuration-source, and filter-count claim review — PASSED with strict qualifications.** Supported configurations include one designed central return-side filter, one or more designated filtered return grilles, separate filtration arrangements for multiple systems, and purpose-built media cabinets. Lennox and Resideo documentation supports rejecting automatic double filtration and warns that another filtration device can create excessive resistance. No universal household count, per-floor, per-return, per-thermostat, or per-outdoor-unit formula is defensible.
- **Duplicate-Topic Preflight — FAILED.** `/blog/filters-in-every-return-vent.html` already explains one central filter versus multiple return filters, warns that an empty grille is not necessarily missing a filter, and provides a safe checklist covering every accessible return and equipment-side location. `/blog/filter-at-return-and-furnace.html` already compares one central rack, filtered returns, return-plus-equipment filtration, purpose-built stages, empty central tracks, and unclear inherited configurations; it also records each accessible filter's location and size. The proposed article's essential sections and actions already exist there.
- **Cannibalization Test — FAILED.** The every-return page is the closest primary competitor, with the return-plus-furnace page a second near-equal owner. A count page would need to restate both pages' configuration tables and inspection workflow, blurring which URL owns filter-location diagnosis. Adding multiple-system wording does not create enough distinct utility for a standalone page.
- **Post-Draft Intent Audit — NOT RUN.** Drafting stopped at the mandatory gates. No article, image, index card, homepage card, sitemap entry, incoming link, or other production change was created.

### Configuration ledger

| Configuration | Source and support | Limitation | Decision |
|---|---|---|---|
| One central filter near furnace/air handler | Trane and Carrier document a filter beside the furnace/air handler or in a return-side cabinet | Does not establish one filter for every house | Keep, conditional |
| One filtered central return grille | Carrier documents a large central return that may include a filter; Trane documents return-grille locations | A large return is not automatically filtered | Keep, conditional |
| Multiple filtered return grilles | Lennox air-handler instructions allow a filter at each return opening when the system uses multiple filter grilles | Equipment-specific documentation; not permission to filter every return | Keep, qualified |
| Multiple independent HVAC systems | Trane says multiple-system homes will likely have at least one filter for each unit; Filtrete describes multiple central units requiring multiple filters | “Likely” is not a universal count formula; thermostat, floor, and condenser counts are not proof | Keep, qualified |
| Return filter plus equipment filter | Existing Lennox/Resideo instructions warn against double filtration in applicable systems; specialized staged arrangements can exist | Cannot infer intent from two visible locations or an empty track | Keep only as a warning; configuration-specific |
| Media cabinet/specialty filtration | Resideo documents return-duct media cabinets and purpose-built air cleaners | Installation and redesign are professional/equipment-specific matters | Keep only as an exception |
| Ductless mini-split screens | Different equipment category from Filter Wizard's central disposable-filter focus | Adds little to the count decision and risks scope drift | Reject from standalone article scope |

### Filter-count claim ledger

| Claim | Decision | Reason |
|---|---|---|
| Every house has at least one HVAC filter | Reject | Boiler-only and other non-forced-air configurations make the universal premise unsafe |
| Every central forced-air system has exactly one filter | Reject | Multiple designated filtered returns and specialized arrangements exist |
| Every return grille should contain a filter | Reject | Carrier distinguishes central filtered returns from ordinary room returns; existing pages already warn against this |
| A home can use one central filter | Keep, qualified | Supported by Trane, Carrier, and Lennox documentation |
| A system can use multiple filtered returns | Keep, qualified | Supported by Lennox equipment instructions, not a universal design rule |
| Multiple HVAC systems can mean multiple filtration arrangements | Keep, qualified | Supported directionally by Trane and Filtrete; actual equipment documentation controls |
| Each thermostat, floor, or outdoor condenser corresponds to one filter | Reject | None is a universal identification rule |
| A filter can be at a return grille, near a furnace/air handler, or in a media cabinet | Keep, qualified | Supported across Trane, Carrier, Lennox, and Resideo sources |
| Return plus equipment filtration is always better | Reject | Applicable manufacturer instructions warn against unintended double filtration and excess resistance |
| An empty filter slot proves a filter is missing | Reject | Existing designed configurations and equipment changes can leave an unused location |
| Adding a second filter improves indoor air quality | Reject | No universal benefit; may increase resistance or violate the designed arrangement |
| Multiple filters necessarily create excessive restriction | Reject | Parallel filtered returns differ from filters in series; purpose-built arrangements exist |
| Ductless mini-splits use the same disposable filters as central HVAC | Reject | Different filtration equipment and maintenance model |
| Homeowners can inspect ordinary accessible filter locations without invasive equipment access | Keep, qualified | Manufacturer homeowner guidance supports accessible return/cabinet checks; sealed or tool-required compartments remain out of scope |

This documentation-only audit applies the Topic-Reality, demand/intent, and preliminary duplicate gates to possible Filter Wizard articles. It does not authorize publication. No production page, image, stylesheet, script, analytics integration, sitemap entry, or affiliate link changed during this audit.

## Torn-filter publication review — 2026-09-25

**Decision: rejected; do not create `/blog/why-is-my-air-filter-torn.html` without materially new evidence.** Physical tears and ripped media are real conditions, but the proposed standalone article failed the fresh user-intent, distinctness, cause-by-cause evidence, and Filter Wizard relevance gates. No exact-query Search Console evidence or verified search-volume data was available. Search-result research found only sparse independent homeowner reports, while the September GSC evidence supports the broader physical-filter troubleshooting pattern rather than this exact question.

The technically supportable guidance is already owned by current pages. The bending guide covers loading, restriction, wrong size, weak support, moisture, damaged frames, collapse, and replacement of torn disposable filters. The fit and sizing guides cover undersized gaps and forced oversized filters. The wet-filter guide owns moisture damage, and the vacuum/reuse guide owns handling or cleaning damage and replacement of torn media. A new page would therefore rely heavily on material that could move unchanged into existing intent owners.

Cause review retained only narrow, qualified findings: visible media damage can create bypass and warrants replacement; careful installation matters; correct fit and a rack without visible bypass matter; heavy loading can contribute to deformation or collapse; and moisture or unapproved cleaning can weaken some disposable media. Proposed standalone causes such as pets, rodents, insects, a manufacturing defect, backward installation, a blower fault, or a duct fault lacked adequate residential-HVAC evidence for this topic and were rejected. One recurring report involving direct UV exposure was not broad enough to justify a general article or a new cause section. Reconsider only if new exact-intent demand evidence and multiple credible residential sources establish distinct causes and actions beyond the bending, fit, wet, and reuse guides.

## Baseline and evidence limits

- Repository: `B:\Codex\FilterWizard\FilterWizard`, `main`, synchronized with `origin/main` at `08863c432326fe86fbe9cb0f800da4ae5772dce4` when research began.
- Inventory: 32 published blog articles and six filter-size pages.
- Repository-documented first-party evidence: an owner-provided seven-day Search Console export showed 127 impressions for the every-return guide, 75 for bending, 31 for AC freeze, 17 for finding size, and 11 for the 20x25x1 page. A separate owner-provided three-month snapshot recorded about 2,212 sitewide impressions and 17 clicks, including small early AC-not-cooling query variants. These are directional observations, not volume claims.
- No verified monthly search volume, keyword difficulty, CPC, trend, autocomplete, related-search, or People Also Ask dataset was available. None is inferred.
- External search-result recurrence is qualitative discovery evidence. Technical explanations rely on government, manufacturer, or other appropriate primary sources; community posts establish wording and recurrence only.

## Content intent map and saturation

| Cluster | Current ownership | Saturation finding |
|---|---|---|
| Appearance and loading | Black, brown, wet, dirty-fast, dirty-one-side, clogged | Saturated/near-saturated; new colors, textures, and short timeframes usually overlap |
| Airflow and equipment symptoms | Restriction, whistling, bending, movement, freezing, poor cooling, energy | Strong but not closed; heating-specific symptoms can remain distinct |
| Sizing and fit | General sizing, missing label, fit, substitution, depth, arrow, nine size pages | General explanatory layer is near-saturated; new work needs a distinct decision or validated size demand |
| Filter selection | MERV 8/11/13, allergies, dust, pets, smoke, media, washable/disposable | Household-use and MERV-choice variants are near-saturated; rating-system translation remains open |
| Return placement | Every return; return plus furnace | Near-saturated; additional location wording risks duplication |
| Maintenance and reuse | Change timing; vacuum/reuse; washable/disposable | Established; only clearly distinct operating questions should advance |

The failed “new filter already dusty” and “filter covered in pet hair” proposals confirm that appearance/loading and pet-selection coverage should not be mined through narrower wording alone.

## Method

Candidate ratings use the evidence definitions in [`CONTENT.md`](CONTENT.md). `Strong`, `Moderate`, `Weak`, and `None` describe available evidence, not estimated traffic. The editorial ranking uses the requested weights: 30% real-world/user-intent evidence, 25% search opportunity, 20% distinctness, 10% topical fit, 10% internal-link value, and 5% commercial potential. Scores are directional editorial judgments, not keyword metrics or mathematical certainty.

## Candidate pool and reality filter

| # | Candidate | Real-world evidence | Intent evidence | Technical basis | Overlap | Relevance | Commercial | Internal links | Action |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | MERV vs. MPR vs. FPR ratings | Strong | Strong | Strong | Low | High | High | High | Publish candidate |
| 2 | Are furnace and AC filters the same? | Strong | Strong | Strong | Low–moderate | High | High | High | Publish candidate |
| 3 | Dirty filter and furnace short cycling | Strong | Strong | Strong | Moderate | High | Moderate | High | Publish candidate |
| 4 | HEPA filter in a furnace | Strong | Moderate | Strong | Moderate | High | High | High | Publish candidate |
| 5 | Run HVAC without a filter | Strong | Moderate | Strong | Moderate | High | Moderate | High | Publish candidate |
| 6 | Run HVAC fan continuously for filtration | Strong | Moderate | Strong | Low | Moderate–high | Low | High | Publish candidate |
| 7 | HVAC filter vs. portable air purifier | Strong | Moderate | Strong | Low | Moderate–high | Moderate | High | Publish candidate |
| 8 | Dirty filter and weak vent airflow | Strong | Moderate | Strong | High | High | Moderate | High | Research further |
| 9 | Filter stays clean after months | Moderate | Moderate | Moderate | Moderate | High | Low | High | Research further |
| 10 | How many filters does a house have? | Strong | Moderate | Strong | High | High | Moderate | High | Research further |
| 11 | Electrostatic vs. pleated filters | Strong | Moderate | Strong | High | High | High | High | Research further |
| 12 | Torn or ripped filter | Weak | Weak | Moderate | Moderate | High | Low | Moderate | Research further |
| 13 | Sticky or greasy filter | Weak | Weak | Moderate | High | High | Low | High | Research further; do not publish |
| 14 | Heat-pump filter vs. furnace filter | Strong | Moderate | Strong | High | High | Moderate | High | Merge into candidate 2 |
| 15 | Furnace blowing cold air from dirty filter | Strong | Moderate | Strong | High | High | Low | High | Merge into candidate 3/existing clogged content |
| 16 | HVAC filter during remodeling | Strong | Moderate | Strong | High | High | Moderate | High | Merge into dirty-fast/dust pages |
| 17 | Dirty after one/three/five/seven days | Moderate | Weak | Strong | High | High | Low | High | Reject: contrived duplicate |
| 18 | New filter already dusty | Strong | Moderate | Strong | High | High | Low | High | Reject: duplicate |
| 19 | Filter covered in pet hair | Strong | Moderate | Strong | High | High | High | High | Reject: duplicate |
| 20 | Filter looks gray | Moderate | Weak | Moderate | High | High | Low | High | Reject: adjective variant |
| 21 | Filter dirtier in summer | Moderate | Weak | Moderate | High | Moderate | Low | Moderate | Reject: seasonal duplicate |
| 22 | Filter dirtier in winter | Moderate | Weak | Moderate | High | Moderate | Low | Moderate | Reject: seasonal duplicate |
| 23 | MERV 8 vs. 11 for dust | Strong | Moderate | Strong | High | High | High | High | Merge into dust/MERV pages |
| 24 | MERV 8 vs. 11 for pets | Strong | Moderate | Strong | High | High | High | High | Merge into pet/MERV pages |
| 25 | Leaky filter slot/bypass dust | Strong | Moderate | Strong | High | High | Moderate | High | Merge into fit/vent-dust pages |
| 26 | Dirty filter causes water leak | Strong | Moderate | Strong | High | High | Low | High | Merge into freeze/wet pages |
| 27 | Filter dimension order | Strong | Moderate | Strong | High | High | High | High | Merge into sizing pages |
| 28 | Best filter for older HVAC | Moderate | Weak | Moderate | High | High | High | High | Reject/reformulate premise |
| 29 | Carbon filter for odors | Strong | Moderate | Strong | High | High | High | High | Merge into smoke guide |
| 30 | Furnace filter vs. return filter | Strong | Moderate | Strong | High | High | Moderate | High | Merge into return-placement pages |
| 31 | MERV 13 always damages HVAC | None | Moderate misconception | Contradicted as universal | High | High | Low | High | Reject false premise |
| 32 | Dirty filter makes thermostat blank | Weak | Weak | Moderate | Moderate | Low–moderate | Low | Moderate | Reject: indirect/generic HVAC |

## Sticky/greasy filter verdict

**Classification: Plausible but weakly supported. Decision: do not publish; retain under Research Needed.**

Cooking aerosols, smoke residue, sprays, and moisture mixed with debris offer plausible mechanisms, and isolated homeowner/service discussions describe oily or grease-loaded filters. However, research found sparse, context-specific reports rather than a repeated, clearly named residential problem. No verified search-volume or first-party Search Console evidence was available. The useful guidance—check moisture, smoke/cooking context, texture, odor, loading rate, and do not diagnose by appearance—is already absorbed by the brown, black, wet, smoke, and dirty-fast pages. One anecdote or a theoretical mechanism does not justify a URL. Revisit only if multiple independent demand signals show that homeowners consistently seek a distinct sticky/greasy-filter diagnosis.

## Validated shortlist

### 1. MERV vs. MPR vs. FPR: How Air Filter Ratings Compare

- **Suggested URL:** `/blog/merv-vs-mpr-vs-fpr-air-filter-ratings.html`
- **Core question:** How do the three rating labels relate, and can a homeowner compare products without assuming exact equivalence?
- **Evidence:** EPA technical material recognizes MERV, MPR, and FPR; major retailers use FPR while identifying MERV as the industry standard; independent homeowner discussions repeatedly ask how the scales compare.
- **Intent evidence:** Exact comparison language recurs across search results and communities. No verified numeric volume is available.
- **Closest pages:** MERV 8 vs. 11 vs. 13; MERV 11 vs. 13 for allergies; restrictive-filter guide.
- **This page would own:** translation and limitations across rating systems, not selection among MERV levels.
- **Why separate:** existing pages assume MERV and do not explain proprietary retail/manufacturer scales.
- **Cannibalization:** Low. **Relevance:** High. **Internal links:** all MERV, restriction, dust, pets, smoke, and Finder pages. **Commercial path:** decode label → choose supported MERV goal → Finder/retailer. **Confidence:** High. **Directional score:** 91/100.

### 2. Are Furnace Filters and AC Filters the Same?

- **Suggested URL:** `/blog/are-furnace-and-ac-filters-the-same.html`
- **Core question:** Are different seasonal names describing the same forced-air system filter, and where is it located?
- **Evidence:** Trane explicitly states that furnace, AC, and heat-pump filters are the same type in a forced-air system; repeated manufacturer and search-result language reflects the confusion.
- **Intent evidence:** Exact terminology recurs independently. No verified numeric volume is available.
- **Closest pages:** every-return filters; return plus furnace filter; find filter size.
- **This page would own:** terminology and the shared central forced-air filtration path, while acknowledging system configurations vary.
- **Why separate:** current placement pages answer how many/where, not whether seasonal equipment names imply different filters.
- **Cannibalization:** Low–moderate. **Relevance:** High. **Internal links:** placement, sizing, arrow, replacement, Finder. **Commercial path:** identify the actual filter → confirm size → Finder. **Confidence:** High. **Directional score:** 87/100.

### 3. Can a Dirty Air Filter Cause a Furnace to Short Cycle?

- **Suggested URL:** `/blog/can-dirty-air-filter-cause-furnace-short-cycling.html`
- **Core question:** Can severe filter restriction contribute to repeated short heating cycles, and when is the filter not the explanation?
- **Evidence:** Trane, Carrier, and Lennox troubleshooting materials independently identify restricted airflow/dirty filters as a possible or common short-cycling cause.
- **Intent evidence:** Carrier addresses the exact homeowner question; manufacturer recurrence is strong. No verified numeric volume is available.
- **Closest pages:** clogged filter, restriction, energy bill, AC not cooling.
- **This page would own:** a heating-cycle symptom and filter-first safe check, without diagnosing limit controls or other furnace faults.
- **Why separate:** no existing page centers on repeated furnace starts/stops.
- **Cannibalization:** Moderate. **Relevance:** High. **Internal links:** clogged, restriction, replacement timing, Finder. **Commercial path:** replace only if genuinely loaded and correctly sized. **Confidence:** High. **Directional score:** 84/100.

### 4. Can You Put a HEPA Filter in a Furnace?

- **Suggested URL:** `/blog/can-you-put-hepa-filter-in-furnace.html`
- **Core question:** Can a standard residential forced-air system accept true HEPA media without a designed cabinet or modification?
- **Evidence:** EPA and Lawrence Berkeley guidance caution that true HEPA/high-efficiency media require system compatibility and may require a system designed for the resistance and dimensions.
- **Intent evidence:** The compatibility question recurs in search results; no verified numeric volume is available.
- **Closest pages:** MERV comparison, restriction, filter depth.
- **This page would own:** true-HEPA compatibility versus ordinary high-MERV replacement filters.
- **Why separate:** existing MERV pages do not fully resolve the HEPA-versus-MERV misconception.
- **Cannibalization:** Moderate. **Relevance:** High. **Internal links:** MERV, restriction, depth, allergies, smoke. **Commercial path:** compatibility check before Finder; no HEPA promise. **Confidence:** High. **Directional score:** 80/100.

### 5. Can You Run an HVAC System Without an Air Filter?

- **Suggested URL:** `/blog/can-you-run-hvac-without-air-filter.html`
- **Core question:** What should a homeowner do when the required filter is missing or unavailable?
- **Evidence:** Trane instructions explicitly warn not to operate a furnace without its filter; repeated homeowner discussions show the scenario and wording.
- **Intent evidence:** Multiple independent community threads ask the question; anecdotes support wording, not technical conclusions. No verified numeric volume is available.
- **Closest pages:** change frequency, clogged filter, find filter size, reuse.
- **This page would own:** missing-filter operation, immediate safe action, and correct replacement recovery.
- **Why separate:** existing pages mention not running without a filter but do not center the urgent decision.
- **Cannibalization:** Moderate. **Relevance:** High. **Internal links:** sizing, missing label, return placement, change timing, Finder. **Commercial path:** confirm required size → Finder. **Confidence:** Medium–high. **Directional score:** 78/100.

### 6. Should You Run the HVAC Fan Continuously for Air Filtration?

- **Suggested URL:** `/blog/should-hvac-fan-run-continuously-for-filtration.html`
- **Core question:** Does longer fan runtime improve filtration, and what energy, humidity, loading, and system-control tradeoffs matter?
- **Evidence:** EPA guidance states central filters work while the system operates and discusses longer fan operation alongside electricity and humidity-control tradeoffs.
- **Intent evidence:** A recognizable homeowner operating decision appears across search results; no verified numeric volume is available.
- **Closest pages:** replacement timing, energy bill, dust, smoke.
- **This page would own:** fan-runtime strategy for filtration rather than filter type.
- **Why separate:** no existing page owns continuous-fan operation.
- **Cannibalization:** Low. **Relevance:** Moderate–high. **Internal links:** dust, smoke, loading, energy, Finder. **Commercial path:** weak; educational/internal authority first. **Confidence:** Medium–high. **Directional score:** 75/100.

### 7. HVAC Filter vs. Portable Air Purifier: What Is the Difference?

- **Suggested URL:** `/blog/hvac-filter-vs-portable-air-purifier.html`
- **Core question:** When does central filtration address system-wide recirculated air, and when does a room air cleaner serve a different purpose?
- **Evidence:** EPA guidance separately defines portable room air cleaners and central HVAC filters and explains CADR for portable units.
- **Intent evidence:** The comparison recurs in search results as a real buying/usage decision; no verified numeric volume is available.
- **Closest pages:** dust, smoke, allergies, pets, MERV.
- **This page would own:** central-versus-room-device scope, not a product ranking.
- **Why separate:** existing pages discuss HVAC filters only and do not compare the two device categories.
- **Cannibalization:** Low. **Relevance:** Moderate–high. **Internal links:** dust, smoke, allergies, pets, MERV. **Commercial path:** limited; route HVAC-filter needs to Finder without forcing purifier sales. **Confidence:** Medium. **Directional score:** 73/100.

## Rejected-topic record

Rejected ideas remain rejected unless new evidence changes the underlying intent, not merely the wording. The main reasons are duplicate intent (new-filter dust, pet hair, timeframe variants, MERV-for-dust/pets, bypass, water leak, dimensions, carbon odor, return location), artificial adjective/season expansion (gray, summer, winter), a misleading premise (older equipment alone determines filter choice), a false universal premise (MERV 13 always causes damage), or an indirect generic-HVAC question with weak evidence (blank thermostat). Production should strengthen the owning page instead.

## Historical recommendation before GSC reranking

**Best next article:** *MERV vs. MPR vs. FPR: How Air Filter Ratings Compare*. It has the strongest combination of authoritative support, repeatedly visible comparison intent, distinctness, site fit, internal-link value, and a natural non-coercive conversion path. It passes preliminary duplicate review because the current MERV hub compares efficiency levels within MERV but does not translate proprietary rating systems.

**Second choice:** *Are Furnace Filters and AC Filters the Same?* It resolves a documented terminology problem that naturally leads to placement and size confirmation without duplicating the return-configuration guides.

**Third choice:** *Can a Dirty Air Filter Cause a Furnace to Short Cycle?* It extends the successful symptom format into heating with strong manufacturer support, but its moderate overlap with clogged/restriction content requires the strictest final duplicate preflight.

## GSC-driven decision layer — 2026-09-01

The preceding ranking remains the historical broad-evidence audit. A subsequent decision used the owner-provided `filter-wizard.com-Performance-on-Search-2026-09-01.xlsx` seven-day export as the highest-weight strategic signal. The export covers 2026-08-24 through 2026-08-30 and records 6 clicks, 538 impressions, 1.12% CTR, and average position 23.5 overall. Category summaries below use only listed page rows, exclude the homepage, blog index, and legal pages, and weight position by impressions. Small samples and different page ages prevent causal conclusions.

| Content pattern | Listed pages | Impressions | Clicks | CTR | Impression-weighted position | Strongest listed page | Weakest listed page |
|---|---:|---:|---:|---:|---:|---|---|
| Filter troubleshooting | 6 | 125 | 3 | 2.40% | 8.38 | Bending, 75 impressions/2 clicks at position 8.44 | Black filter, 4 impressions at position 9 |
| Return/filter configuration | 2 | 133 | 1 | 0.75% | 8.63 | Every-return, 127 impressions/1 click at position 8.67 | Return-and-furnace, 6 impressions at position 7.83 |
| Sizing | 3 | 31 | 0 | 0% | 8.81 | 20x25x1, 11 impressions at position 8 | General sizing, 17 impressions at position 9.47 |
| Fit | 1 | 4 | 0 | 0% | 9.75 | Fit guide, position 9.75 | Same page |
| HVAC symptom / filter causation | 2 | 56 | 1 | 1.79% | 10.05 | AC-freeze guide, position 9.45 | Restriction guide, position 10.8 |
| Maintenance/replacement | 3 | 40 | 0 | 0% | 13.67 | Vacuum/reuse, 36 impressions at position 12.11 | Arrow guide, 3 impressions at position 33.67 |
| MERV comparison | 1 | 2 | 0 | 0% | 52.50 | MERV 11 vs 13 for allergies, position 52.5 | Same page |
| Product/filter-type comparison | 3 | 92 | 0 | 0% | 62.02 | Depth comparison, position 45.8 | Washable vs disposable, position 72.35 |
| Best-filter commercial | 4 | 46 | 0 | 0% | 62.20 | Pets, position 60.09 | Allergies, position 70.8 |

The pattern supports the working hypothesis: Google was giving page-one-ish visibility to narrow troubleshooting, configuration, sizing, fit, and filter-causation pages, while broad comparisons and best-filter pages ranked much deeper in this export. This is directional, not proof that format alone caused ranking. The query sheet strengthens the weak-comparison observation: its non-brand rows are dominated by comparison/pet queries at roughly positions 47–85. It does **not** contain the previously summarized AC-not-cooling, airflow, bending, sizing, or furnace query families, so their exact query metrics were not re-created. The repository's earlier owner-provided three-month summary remains the only documented basis for small AC-not-cooling query impressions.

### GSC-weighted candidate scorecard

The decision model is 40% Filter Wizard GSC pattern alignment, 20% real-world/user-intent evidence, 15% distinctness, 10% technical confidence, 10% internal-link value, and 5% commercial value. Scores are directional editorial judgments, not traffic predictions.

| Rank | Candidate | Content pattern and GSC resemblance | Reality evidence | Duplicate risk | Technical confidence | Internal links | Commercial | Score | Confidence |
|---:|---|---|---|---|---|---|---|---:|---|
| 1 | Dirty filter and furnace short cycling | Very high: specific HVAC symptom/filter-causation resembles AC freeze and restriction | Strong; Trane, Carrier, and Lennox | Moderate, passed strict review | High | High | Moderate | 91 | High |
| 2 | Are furnace and AC filters the same? | High: terminology/location resembles return configuration and sizing | Strong | Low–moderate | High | High | High | 85 | High |
| 3 | Run HVAC without a filter | High: specific urgent homeowner question resembles troubleshooting | Strong | Moderate | High | High | Moderate | 82 | Medium–high |
| 4 | Run HVAC fan continuously for filtration | Moderate: specific operating question, but farther from filter-first scope | Strong | Low | High | High | Low | 74 | Medium |
| 5 | Put a HEPA filter in a furnace | Moderate-low: compatibility overlaps weak MERV/comparison patterns | Strong | Moderate | High | High | High | 70 | Medium–high |
| 6 | MERV vs MPR vs FPR | Low: broad rating comparison resembles the weakest current category | Strong | Low | High | High | High | 65 | Medium |
| 7 | HVAC filter vs portable air purifier | Low: broad device comparison resembles weak comparison pages and widens scope | Strong | Low | High | High | Moderate | 59 | Medium |

### Winning candidate and gates

**Winner: Can a Dirty Air Filter Cause a Furnace to Short Cycle?** It best matches the demonstrated site-specific pattern without inventing a symptom. Manufacturer troubleshooting documentation independently confirms that dirty-filter airflow restriction can contribute to short cycling.

- **Topic-Reality Preflight: passed.** The question and mechanism recur across three independent furnace manufacturers; the premise is framed conditionally.
- **Duplicate-Topic Preflight: passed across 32 existing articles.** The clogged-filter page owns broad clog symptoms and longer cycles; restriction owns product/system resistance; AC freeze owns coil icing; AC-not-cooling owns cooling performance; energy-bill owns runtime/cost. None owns repeated short furnace heating cycles, protective interruption, a filter-first check, and escalation when replacement does not help.
- **Post-draft intent audit: passed.** The finished guide remains centered on short furnace heating cycles, explicitly contrasts them with longer clogged-filter runtime, and keeps alternative furnace causes high-level rather than becoming a generic furnace repair page.
- **Deferred:** the other six validated candidates remain valid research opportunities. GSC changed priority, not their reality classifications.

## External evidence register

- U.S. EPA, *Residential Air Cleaners: A Technical Summary* — MERV/MPR/FPR recognition and high-efficiency compatibility: <https://www.epa.gov/sites/default/files/2018-07/documents/residential_air_cleaners_-_a_technical_summary_3rd_edition.pdf>
- U.S. EPA, *Guide to Air Cleaners in the Home* — portable versus central filtration and fan-runtime tradeoffs: <https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home>
- U.S. EPA, *Indoor Air Filtration* — filtration during smoke events and fan operation: <https://www.epa.gov/wildfires/indoor-air-filtration>
- Lawrence Berkeley National Laboratory, *Air Quality Tips* — system compatibility warning for HEPA/MERV 16: <https://indoor.lbl.gov/air-quality-tips>
- Trane, *HVAC Air Filter Maintenance Guide* — furnace/AC/heat-pump terminology: <https://www.trane.com/residential/en/resources/blog/hvac-air-filter-maintenance-guide/>
- Trane, *Filters* — forced-air filter terminology: <https://www.trane.com/residential/en/products/indoor-air-quality/filters/>
- Trane, *Furnace Short Cycling* — filter restriction and heating cycles: <https://www.trane.com/residential/en/resources/troubleshooting/gas-furnaces/furnace-short-cycling/>
- Carrier, *Furnace Short Cycling* — exact dirty-filter/short-cycle question: <https://www.carrier.com/us/en/residential/hvac-resources/furnaces/furnace-short-cycling/>
- Lennox, *Furnace Short Cycling* — independent manufacturer corroboration: <https://www.lennox.com/residential/lennox-life/consumer/furnace-short-cycling>
- Trane, *Gas Furnace Troubleshooting* — instruction not to operate without a filter: <https://www.trane.com/residential/en/resources/troubleshooting/gas-furnaces/>
- Home Depot, *Air Filter Buying Guide* — retailer use of FPR and MERV: <https://www.homedepot.com/c/ab/air-filter-buying-guide/9ba683603be9fa5395fab90e10394fb>
- Homeowner discussions used only to confirm wording/recurrence, not technical truth: MERV/MPR/FPR <https://www.reddit.com/r/homeowners/comments/unma8x>, missing filter <https://www.reddit.com/r/homeowners/comments/1i2iues/>, clean filter <https://www.reddit.com/r/homeowners/comments/1us3kum/>, oily-filter anecdote <https://www.reddit.com/r/hvacadvice/comments/yuiexw>.

Update this file when new first-party data, independent demand evidence, a new article, or a changed existing intent materially changes a classification or ranking.

## Fresh 28-day GSC decision — 2026-09-16

This layer preserves the earlier audit and reranks opportunities using the owner-provided `filter-wizard.com-Performance-on-Search-2026-09-16.xlsx` export. The workbook is a Web Search, last-28-days export covering 2026-08-18 through 2026-09-14. It reports 25 clicks, 2,657 impressions, 0.94% CTR, and average position 16.8 overall. The United States accounts for 21 clicks and 2,253 impressions at position 14.14; mobile accounts for 18 clicks and 1,844 impressions at position 9.04. Metrics are observations for this export, not forecasts or search-volume estimates.

The clearest first-party pattern is still narrow diagnosis and configuration. Brown-filter (278 impressions, 7 clicks, position 5.69), bending (322/5/7.91), movement (113/3/7.88), every-return configuration (507/2/8.92), new-filter smell (110/2/8.88), AC freeze (186/1/8.92), restriction (111/1/9.86), wet-filter (88/1/7.73), and dirty-one-side (59/1/6.17) pages all earned page-one-ish average positions. General sizing (64 impressions, position 8.28) and listed size pages also remain competitive. Broad comparisons and commercial selection remain much deeper: washable/disposable (100 impressions, position 68.02), fiberglass/pleated (92, 62.66), pets (83, 54.95), smoke (32, 54.94), allergies (15, 60.87), and MERV 11/13 (28, 47.54). Different page ages and query mixes prevent causal claims.

### Candidate pool and gates

| Candidate | GSC pattern | Reality | Duplicate result | Decision |
|---|---|---|---|---|
| Are furnace filters and AC filters the same? | Strong: configuration, location, and sizing | Strong manufacturer evidence | Pass: placement pages do not own terminology | Selected |
| Can you run HVAC without an air filter? | Strong troubleshooting pattern | Strong | Moderate overlap with maintenance/sizing | Shortlist |
| Why does an air filter stay clean? | Strong symptom pattern | Moderate | Moderate overlap with dirty-fast/clogged | Research further |
| Can you put a HEPA filter in a furnace? | Moderate compatibility pattern | Strong | Moderate MERV/restriction overlap | Shortlist |
| Should the HVAC fan run continuously for filtration? | Moderate operating-question pattern | Strong | Low overlap; broader HVAC scope | Shortlist |
| MERV vs. MPR vs. FPR | Weak first-party comparison pattern | Strong | Low overlap | Defer |
| HVAC filter vs. portable air purifier | Weak first-party comparison pattern | Strong | Low overlap; broader scope | Defer |
| What is a pleated air filter? | Direct query evidence, but weak position and existing media guide | Strong | High overlap | Merge into fiberglass/pleated |
| Are pleated filters better? | Direct query evidence | Strong | High overlap | Merge into fiberglass/pleated |
| Dirty filter and weak vent airflow | Strong symptom pattern | Strong | High overlap with clogged/restriction | Reject duplicate |
| Furnace blowing cold air from a dirty filter | Strong symptom pattern | Strong | High overlap/generic furnace scope | Reject/merge |
| Air filter not getting dirty | Strong symptom pattern | Moderate | Moderate overlap; no GSC query evidence | Research further |
| Torn or ripped air filter | Strong symptom pattern | Weak–moderate | Moderate overlap with fit/bending | Research further |
| Filter during remodeling | Strong loading pattern | Strong | High overlap with dirty-fast/dust | Merge |
| Filter dimension order | Strong sizing pattern | Strong | High overlap with sizing hub | Merge |
| How many filters does a house have? | Strong configuration pattern | Strong | High overlap with return guides | Merge |
| Heat-pump filter vs. furnace filter | Strong terminology pattern | Strong | Same core intent as selected candidate | Merge into selected page |
| Electrostatic vs. pleated filters | Weak comparison pattern | Strong | High overlap with washable/media guides | Defer/merge |
| Sticky or greasy filter | Symptom pattern only; no first-party demand | Weak | High appearance-cluster overlap | Reject pending new evidence |
| Newly changed filter already dusty | Symptom pattern only | Real but duplicate | Fails dirty-fast/clogged boundary | Reject duplicate |
| Filter covered in pet hair | Symptom pattern only | Real but duplicate | Fails pet/dirty-fast boundary | Reject duplicate |

### Shortlist scorecard

The directional score uses 25% GSC alignment, 20% reality/intent, 20% distinctness, 15% topical fit, 10% technical confidence, 5% internal-link value, and 5% conversion usefulness. Cannibalization remains a gate rather than a scoring offset.

| Rank | Candidate | GSC | Reality | Distinctness | Fit | Technical | Links | Conversion | Score |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | Are furnace filters and AC filters the same? | 24 | 19 | 18 | 15 | 10 | 5 | 5 | 96 |
| 2 | Can you run HVAC without an air filter? | 23 | 19 | 15 | 15 | 10 | 5 | 4 | 91 |
| 3 | Can you put a HEPA filter in a furnace? | 16 | 19 | 15 | 15 | 10 | 5 | 5 | 85 |
| 4 | MERV vs. MPR vs. FPR | 8 | 20 | 20 | 15 | 10 | 5 | 5 | 83 |
| 5 | Should the HVAC fan run continuously for filtration? | 17 | 18 | 19 | 11 | 9 | 5 | 2 | 81 |
| 6 | Air filter stays clean after months | 22 | 13 | 14 | 15 | 7 | 5 | 2 | 78 |

The comparison candidate retains strong editorial merit, but the first-party pattern intentionally reduces its publication priority. Scores guide the decision; they do not predict traffic.

### Selected opportunity and pre-draft gate record

**Selected:** *Are Furnace Filters and AC Filters the Same?* (`/blog/are-furnace-and-ac-filters-the-same.html`).

- **Topic-Reality Preflight — PASSED.** Trane directly states that furnace, AC, and heat-pump filter terms refer to the same type of filter in a forced-air system; Carrier explains that central cooling commonly uses the return-side filter at the indoor furnace or air handler. The confusion is real and technically answerable.
- **GSC/User-Intent Validation — PASSED.** The exact proposed query is not exposed in the workbook and no volume is claimed. The page pattern closely matches Filter Wizard's strongest first-party return/configuration and sizing pages, while manufacturer terminology confirms meaningful homeowner intent.
- **Duplicate-Topic Preflight — PASSED across 33 published articles.** `filters-in-every-return-vent` owns which returns require filters; `filter-at-return-and-furnace` owns filters in series versus separate return paths; the sizing hub owns dimension discovery. None directly owns whether “furnace filter” and “AC filter” are usually seasonal names for the shared forced-air filter, when they are not interchangeable, or how to confirm the actual installed arrangement.
- **Technical-Evidence Gate — PASSED.** Trane, Carrier, Lennox, and DOE Building Science guidance support the shared return-air role, variable locations, and configuration caveats. The article must distinguish central forced-air systems from ductless, window, portable, and purpose-built media arrangements.
- **Strategic Scoring — PASSED.** It ranks first under the fresh model because it combines the proven configuration/sizing pattern with low cannibalization and a natural size-confirmation/Finder path.

**Post-Draft Intent Audit — PASSED.** The finished article remains centered on terminology and system-type exceptions. Its placement material routes readers to the established every-return and return-plus-furnace owners instead of reproducing their configuration diagnoses; its size material routes to the sizing hub rather than teaching the full measurement workflow. Substantive sections cannot be moved unchanged into those pages without changing their primary intent.

**Post-publication inventory:** 34 published blog articles, nine filter-size guides, 49 sitemap URLs, and 45 non-legal content pages. Article #35 is not authorized by this audit or the runner-up list.

Runner-up status is not authorization for article 35. Reassess with later GSC data and repeat all gates.

## Article #35 publication decision — 2026-09-17

The historically second-ranked candidate, *Can You Run an HVAC System Without an Air Filter?*, was not published from score alone. It independently passed fresh production gates against the 34-article library before `/blog/can-you-run-hvac-without-air-filter.html` was created.

- **Topic-Reality Preflight — PASSED.** Current Trane equipment instructions explicitly warn against operating applicable heating or cooling equipment with filters removed; DOE Building Science guidance supports the return-side filter's equipment-protection role; and recurring independent homeowner discussions confirm the missing-filter situation and wording. Community reports establish occurrence, not technical truth.
- **Search-demand/User-Intent Validation — PASSED.** The urgent decision recurs across manufacturer, contractor, and homeowner language and matches Filter Wizard's strong troubleshooting/configuration content pattern. The supplied GSC data does not expose meaningful exact-query demand, and no numeric search volume is claimed.
- **Duplicate-Topic Preflight — PASSED across 34 existing articles.** Replacement timing owns intervals; clogged owns installed-filter loading; find-size owns dimension discovery; fit and slightly-different-size own seating/substitution; return pages own filter count/location; article #34 owns furnace-versus-AC terminology. None owns whether a required filter may be absent during operation and the immediate safe recovery path.
- **Cannibalization Test — PASSED.** The closest likely competitor is `/blog/can-you-vacuum-and-reuse-an-air-filter.html`, whose no-replacement section discourages filterless operation but centers clean-versus-replace. Article #35 owns missing required filter → operating decision → locate/size/install/escalate and links outward rather than reproducing those guides.
- **Technical-Evidence Review — PASSED.** Trane, DOE Building Science Education, Carrier replacement guidance, and Trane filter guidance support the filter requirement, equipment-protection role, safe replacement workflow, location variability, and system-type qualification. The article does not invent an allowable filterless runtime or claim instant damage.
- **Post-Draft Intent Audit — PASSED.** The finished guide remains centered on the missing-filter decision. Sizing, fit, clogging, restriction, configuration, terminology, moisture, and bending receive concise routing only; their detailed diagnosis remains with existing intent owners.

**Post-publication inventory:** 35 published blog articles, nine filter-size guides, 50 sitemap URLs, and 46 non-legal content pages. Article #36 was not authorized by the remaining shortlist at that time.

## Article #36 publication decision — 2026-09-22

The historically third-ranked candidate, *Can You Put a HEPA Filter in a Furnace?*, was not published from its 85-point score alone. It independently passed fresh production gates against the 35-article library before `/blog/can-you-put-hepa-filter-in-furnace.html` was created.

- **Topic-Reality Preflight — PASSED.** Current EPA guidance defines HEPA separately from MERV; EPA and DOE/PNNL materials require compatibility and pressure-drop evaluation for high-efficiency/HEPA filtration; and Resideo documentation confirms that purpose-built residential HEPA cabinets and bypass or independently ducted arrangements exist.
- **Search-demand/User-Intent Validation — PASSED.** Exact compatibility wording recurs in authoritative guidance, search results, and independent homeowner discussions. Community material establishes occurrence and wording, not technical truth. The documented GSC data does not expose meaningful exact-query demand, and no verified numeric search volume is claimed.
- **Duplicate-Topic Preflight — PASSED across 35 existing articles.** The MERV guide owns ordinary MERV selection; restriction owns general airflow resistance; thickness owns one-, two-, and four-inch depth; allergy, smoke, and dust own contaminant-specific selection. None owns true HEPA definition plus standard central-HVAC compatibility and purpose-built HEPA arrangements.
- **Cannibalization Test — PASSED.** The closest likely competitor is `/blog/can-air-filter-be-too-restrictive.html`. That page owns general installed-filter resistance, while article #36 owns whether true HEPA can be integrated into the furnace/central-HVAC filtration path and routes broader resistance detail outward.
- **Technical-Evidence Review — PASSED.** EPA supports the HEPA definition, HEPA/MERV distinction, compatibility requirement, and particle-versus-gas boundary; DOE/PNNL supports system-specific pressure-drop checks; Resideo supplies a documented example of purpose-built residential HEPA equipment. The article makes no HEPA-to-MERV conversion and no universal compatibility or restriction claim.
- **Post-Draft Intent Audit — PASSED.** The finished guide stays centered on true-HEPA compatibility, cabinet/sealing/system design, and dedicated configurations. Its MERV, restriction, depth, allergy, smoke, and sizing material is concise routing rather than replacement coverage.

**Post-publication inventory:** 36 published blog articles, nine filter-size guides, 51 sitemap URLs, and 47 non-legal content pages. Article #37 remains unapproved and requires a new evidence-based decision.

## September 23, 2026: article #37 fresh decision

The previously research-only candidate *Why Is My Air Filter Still Clean After Months?* was not published from its 78-point historical score or from neighboring-page GSC performance. It independently passed a new gate review against the 36-article library.

- **Topic-Reality and user-intent — PASSED.** Multiple independent homeowner discussions use substantially the same observation, including an established exact-wording question. No verified search-volume data or exact-query GSC demand is claimed.
- **Duplicate and cannibalization — PASSED.** The replacement guide is the closest competitor because it briefly answers what to do when a filter still looks clean. Article #37 owns interpretation and safe verification of unexpectedly low visible loading; replacement timing, dirty-fast, uneven loading, fit, and configuration pages retain their existing intents.
- **Technical and cause-by-cause evidence — PASSED with exclusions.** Carrier supports variation by system usage, filter type, and household conditions; Trane supports varied locations and multiple systems/filters; DOE/PNNL supports correct sizing and sealed filter-rack installation. Low-airflow diagnosis, backward-filter causation, memory error, duct faults, and equipment faults were rejected as causes because appearance does not establish them.
- **Post-draft audit — PASSED.** The final article keeps the supported cause groups narrow and routes detailed replacement, configuration, fit, sizing, and dirty-pattern questions to existing owners.

**Post-publication inventory:** 37 published blog articles, nine filter-size guides, 52 sitemap URLs, and 48 non-legal content pages. Article #38 remains unapproved.

## September 24, 2026: article #38 fresh decision

The historical continuous-fan candidate was independently revalidated rather than published from its earlier shortlist score. The newer GSC evidence supports the site's broader narrow-question and filter-behavior pattern, but does not establish exact-query demand for continuous HVAC fan operation.

- **Topic-Reality and user-intent — PASSED.** EPA guidance directly discusses longer HVAC fan runtime for filtration; thermostat and HVAC manufacturers document AUTO, ON, scheduled, and CIRCULATE behavior; and recurring independent homeowner discussions use the same filtration decision. No exact-query GSC demand or verified numeric search volume is claimed.
- **Duplicate and cannibalization — PASSED.** `/blog/how-often-change-air-filter.html` is the nearest competitor because runtime affects loading and replacement, but it owns replacement timing. Article #38 owns whether added fan runtime is worthwhile specifically for filtration, including mode selection and qualified loading, energy, and humidity tradeoffs. The MERV and restriction guides retain filter-selection and pressure-drop ownership.
- **Technical and claim-by-claim evidence — PASSED with exclusions.** EPA and ASHRAE support longer runtime as additional central-filtration opportunity; DOE supports a high-level PSC/ECM efficiency distinction; Google Nest supports energy, mixing, and possible earlier replacement implications; Resideo supports interval-based CIRCULATE; DOE/PNNL and Lennox support a conditional cooling-season humidity caveat. Universal IAQ improvement, allergy benefit, MERV safety, replacement multipliers, and both extend-life and shorten-life blower claims were rejected.
- **Filter-Wizard relevance and post-draft intent — PASSED.** The finished guide remains centered on air passing through the installed filter, filter loading, compatibility, and replacement implications. Energy, humidity, room mixing, and controls are concise decision caveats rather than generic HVAC-operation coverage.

**Post-publication inventory:** 38 published blog articles, nine filter-size guides, 53 sitemap URLs, and 49 non-legal content pages. Article #39 remains unapproved.

## September 25, 2026: article #39 fresh decision

The historically validated *MERV vs. MPR vs. FPR* candidate was independently revalidated rather than published from its earlier score. The documented GSC evidence still shows broad comparison pages ranking materially deeper than narrow troubleshooting pages and does not establish exact-query demand for this topic. Publication therefore rests on demonstrated recurring label confusion, authoritative definitions, low duplication, and direct relevance to Filter Wizard's MERV-based product guidance—not on a traffic forecast.

- **Topic reality and user intent — PASSED.** EPA explicitly distinguishes consensus-standard MERV from proprietary MPR and FPR, while current 3M Filtrete and Home Depot materials actively use their respective labels. Search-result recurrence and independent homeowner discussions establish recurring comparison confusion. No verified search-volume data or exact-query GSC demand is claimed.
- **Duplicate and cannibalization — PASSED.** `/blog/merv-8-vs-merv-11-vs-merv-13.html` is the nearest competitor, but it owns selection among ordinary MERV levels. Article #39 owns which organization defines each rating, what each label communicates, and how to compare actual products without inventing a conversion formula. The restriction and HEPA guides retain pressure-drop and true-HEPA compatibility ownership.
- **Technical and source-of-truth review — PASSED.** ASHRAE and EPA support the MERV test framework; 3M supports MPR's scope and current product-specific MPR/MERV pairings; Home Depot supports FPR's current weighted 1–12 system. Current product listings show that one FPR tier can carry different MERV labels, so a universal exact conversion was rejected.
- **Conversion-claim and commercial-independence review — PASSED.** The article publishes no universal three-way chart, treats current paired product labels as product-specific evidence, contains zero retailer blocks, and places one neutral Filter Finder CTA only after the comparison guidance.
- **Post-draft intent audit — PASSED.** The finished page remains a rating-language guide rather than another MERV-selection, restriction, HEPA, allergy, dust, or smoke article. A major section cannot move unchanged into those pages without changing their primary intent.

**Post-publication inventory:** 39 published blog articles, nine filter-size guides, 54 sitemap URLs, and 50 non-legal content pages. Article #40 remains unapproved and requires a new evidence-based decision.

## September 27, 2026: article #40 fresh decision

The historically deferred *HVAC Air Filter vs. Portable Air Purifier* candidate was independently revalidated rather than published from its earlier opportunity status. Filter Wizard's first-party history still favors narrow troubleshooting over broad comparisons and does not establish exact-query demand, so publication rests on a verified homeowner decision, authoritative technical separation, low semantic duplication, and a clear Filter Wizard boundary—not a traffic forecast.

- **Topic reality and user intent — PASSED.** EPA directly compares portable room air cleaners with furnace/HVAC filters and describes them as complementary approaches; current search-result recurrence and independent homeowner discussions repeat the “do I need both?” decision. No verified numeric search-volume data or exact-query GSC evidence is claimed.
- **Duplicate and cannibalization — PASSED.** `/blog/can-you-put-hepa-filter-in-furnace.html` is the nearest competitor, but it owns true-HEPA compatibility in the central HVAC path. Article #40 owns central filtration versus portable room air cleaning, including where each operates, when it filters, and why neither automatically replaces the other. MERV, restriction, contaminant, and continuous-fan pages retain their owners.
- **Technical and source-of-truth review — PASSED.** EPA supports the central-versus-room distinction, HVAC-runtime dependency, complementary use, particle/gas boundary, source-control/ventilation context, and ozone caution. ENERGY STAR defines CADR for complete room-air-cleaner clean-air delivery and room/area selection. ASHRAE Standard 52.2 defines the particle-removal test framework underlying MERV. No MERV-to-CADR conversion or unsupported coverage number is published.
- **Health, relevance, and commercial-independence review — PASSED.** The article makes no medical promise, product ranking, purifier recommendation, or purifier affiliate offer. Its center of gravity remains the HVAC-filter decision, with one Finder CTA explicitly limited to ordinary compatible HVAC filters after physical size confirmation.
- **Post-draft intent audit — PASSED.** The finished page retains substantive unique value after adjacent MERV, HEPA, smoke, allergy, restriction, and fan-runtime material is routed to existing owners. It does not become a purifier shopping guide or a rewritten MERV article.

**Post-publication inventory:** 40 published blog articles, nine filter-size guides, 55 sitemap URLs, and 51 non-legal content pages. Article #41 remains unapproved.

## September 29, 2026: article #41 fresh decision

The previously deferred *Electrostatic vs. Pleated Air Filters* candidate was independently revalidated rather than promoted from the historical list. The earlier defer/merge decision correctly identified overlap risk, but current authoritative evidence establishes a distinct terminology problem: pleated describes media geometry, while electrostatic charge can be an overlapping capture attribute, and the market also uses “electrostatic” for washable passive products and powered electronic equipment.

- **Topic reality and user intent — PASSED.** Current product listings and recurring homeowner questions use “electrostatic pleated,” “washable electrostatic,” and electrostatic-versus-pleated wording. No exact-query Filter Wizard GSC evidence or verified numeric search-volume data is claimed.
- **Terminology and category-overlap review — PASSED.** ASHRAE distinguishes passive charged-fiber media from powered electrostatic precipitators. Current 3M documentation confirms disposable pleated charged media; AMFCO documentation confirms washable passive products, including a pleated washable design. The page therefore rejects electrostatic-versus-pleated as mutually exclusive categories.
- **Duplicate and cannibalization review — PASSED.** Fiberglass-versus-pleated retains basic media/construction comparison; washable-versus-disposable retains lifecycle and cleaning; MERV retains efficiency selection; restriction retains pressure-drop compatibility; vacuum/reuse retains disposable-cleaning risk. Article #41 owns the terminology and overlap decision those pages do not resolve.
- **Performance, safety, relevance, and commercial-independence review — PASSED.** The article makes no category-wide efficiency, airflow, pressure-drop, lifespan, health, or cost ranking; separates passive media from powered equipment; confines ozone caution to applicable powered technologies; contains zero retailer blocks; and limits one Finder CTA to ordinary compatible disposable HVAC filters.
- **Post-draft intent audit — PASSED.** After adjacent lifecycle, construction, rating, restriction, and contaminant detail is routed to existing owners, the page retains substantial unique value explaining what “electrostatic” means and why it may coexist with pleated construction.

**Post-publication inventory:** 41 published blog articles, nine filter-size guides, 56 sitemap URLs, and 52 non-legal content pages. Article #42 remains unapproved.

## Controlled filter-size expansion — 2026-09-02

The next production action exploited the second strong first-party lane rather than publishing article #34. In the owner-provided 2026-08-24 through 2026-08-30 export, `/filter-sizes/20x25x1.html` had 11 impressions at position 8, `/filter-sizes/16x25x1.html` had 3 impressions at position 8, and the general size guide had 17 impressions at position 9.47. The query table did not expose exact missing-size queries, so the batch does not claim search volume for 16x24x1, 18x20x1, or 24x24x1.

Those three passed marketed-size and distinct-utility review: 16x24x1 addresses the close 16x25x1 substitution problem, 18x20x1 separates a middle rectangular width from existing 16x20x1 and 20x20x1 guides, and 24x24x1 adds a large-square orientation/nearby-square case. Twenty-two candidates and rejection/defer reasons are recorded in [`FILTER_SIZE_PAGES.md`](FILTER_SIZE_PAGES.md). The furnace-short-cycling article was not changed; evaluate it only after a reasonable observation period or enough impressions accumulate. Re-rank the informational backlog with fresher GSC evidence after the size expansion rather than pre-authorizing the next article.
