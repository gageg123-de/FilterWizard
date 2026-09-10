# Internal Linking and Topical Architecture

Last verified: 2026-09-09

This file owns Filter Wizard's internal-linking methodology. Its purpose is to help a homeowner move from an immediate question to the next useful answer, size or fit verification, and the Filter Finder when purchase intent develops. Link counts are diagnostic signals, not targets.

## Core rule

Add a contextual link only when a homeowner reading that sentence would reasonably benefit from opening the destination at that moment. Every substantive page has one primary intent owner. Links should clarify that ownership and the relationships among pages; they must not manufacture reciprocity, blur intents, or exist only to manipulate authority.

## Link classes

- **Global navigation:** repeated header links. These establish site access but do not substitute for editorial discovery.
- **Breadcrumb:** hierarchy and return path.
- **Contextual body link:** a destination offered at the point where it answers the reader's next question. This is the strongest evidence of a semantic relationship.
- **Related Articles:** a curated next-step set near the end of a page. It is useful discovery, but not equivalent to an in-context explanation.
- **CTA / Filter Finder:** a conversion or tool path. Preserve its tracking attributes and do not use it as a generic authority link.
- **Size-neighbor:** a link between dimensions a homeowner could plausibly confuse. Size pages must not form a complete graph.
- **Index listing:** blog-index discovery.
- **Footer / utility:** repeated site and legal access.

The audit tool treats contextual body and size-neighbor links as contextual. Self-referential table-of-contents fragments are excluded from inter-page graph metrics.

## Inventory and intent ownership

The sitemap contains 48 indexable URLs: the homepage, blog index, 33 blog articles, nine size guides, and four legal pages. The 44 non-legal content pages are the graph-analysis set. The homepage owns the Filter Finder and product-entry intent; the blog index owns guide discovery rather than a substantive filter question.

| Cluster | Primary intent owner | Specialized members |
|---|---|---|
| Filter condition and appearance | `/blog/signs-hvac-filter-is-clogged.html` owns whether loading is actually clogging the filter | dirty-fast, black, brown, wet, dirty-on-one-side, new-filter smell, dust-around-vents |
| Physical filter behavior | Each symptom page owns its observed behavior | bending/bowing, movement, whistling |
| HVAC symptom / filter causation | Each symptom page owns whether the filter can contribute to that outcome | AC freeze, AC not cooling, energy bill, furnace short cycling; restrictive-filter guide owns compatibility/restriction rather than a single symptom |
| Sizing and fit | `/blog/how-to-find-your-air-filter-size.html` is the sizing hub | fit, slightly-different-size, thickness comparison, all nine size guides |
| Placement and configuration | No forced hub; each configuration question is distinct | every-return filters, return-and-furnace filters, airflow-arrow direction |
| MERV and filtration level | `/blog/merv-8-vs-merv-11-vs-merv-13.html` owns general MERV selection | MERV 11 vs 13 for allergies; restrictive-filter guide provides the compatibility boundary |
| Filter type | No single hub | fiberglass vs pleated, washable vs disposable, vacuum/reuse |
| Household contaminant selection | The individual selection page owns its contaminant | pets, dust, allergies, smoke |
| Maintenance | `/blog/how-often-change-air-filter.html` owns replacement timing | vacuum/reuse owns clean-versus-replace; clogged guide owns condition-based replacement signals |
| Filter-size guides | `/blog/how-to-find-your-air-filter-size.html` is the discovery and verification hub | 20x25x1, 16x25x1, 20x20x1, 16x20x1, 14x20x1, 14x25x1, 16x24x1, 18x20x1, 24x24x1 |

### Specialized ownership boundaries

- Dirty-fast owns recurring rapid loading from multiple causes; clogged owns evidence of restriction.
- Black and brown own color interpretation; wet owns moisture; dirty-on-one-side owns asymmetric loading.
- Bending, movement, and whistling own their respective physical symptoms. Fit and restriction are supporting diagnoses, not alternate owners.
- AC freeze, AC not cooling, energy cost, and furnace short cycling each own one downstream symptom. None should become another general clogged-filter page.
- Find-size owns the discovery process; fit owns seating and clearance; slightly-different-size owns substitution risk; thickness comparison owns one-, two-, and four-inch construction tradeoffs.
- General MERV comparison owns rating choice. Allergy, dust, smoke, and pets pages own household-specific selection.

## Hub-and-spoke relationships

Use hubs only where a broad page genuinely helps interpret narrower pages:

- `how-to-find-your-air-filter-size` → nine verified size guides, with each size guide returning to the sizing hub.
- `merv-8-vs-merv-11-vs-merv-13` → household-specific selection and MERV 11-versus-13 guidance.
- `signs-hvac-filter-is-clogged` → symptom pages when the specific symptom is discussed, without implying every symptom proves clogging.
- `how-often-change-air-filter` → condition and maintenance pages where age versus actual loading matters.

Do not force a single appearance or HVAC-symptom hub. Those pages have closely related but separate diagnostic intents and should cross-link only at useful decision points.

## High-value user journeys

- Bending → fit and restriction checks → size verification → Filter Finder when replacement is justified.
- AC freeze or AC not cooling → check actual filter loading → clogged/restriction context → replacement timing or size → Filter Finder.
- Furnace short cycling → safe accessible filter check → restriction/fit context → professional service when replacement does not resolve the symptom.
- Known nominal dimension → exact size guide → fit verification and neighboring-size warning → MERV guidance → Filter Finder and retailer path.
- Filter appearance → interpret the specific pattern → decide whether replacement is justified → size confirmation → Filter Finder.

The Filter Finder is a conversion destination, not a content hub. Evaluate it on pages where the reader can reasonably progress to replacement or selection. Preserve `data-article-filter-finder-cta`, article slug, delegated analytics, unknown-size safety behavior, and retailer eligibility rules. Multiple template/navigation links can exist, but do not add extra major CTAs merely to increase link counts.

## Size-guide rules

- The general sizing guide should provide direct discovery for every published size guide.
- Every size guide should link back to the general sizing guide and to fit/MERV guidance when context warrants.
- Link only plausible neighbors: for example 16x24x1 ↔ 16x25x1, or 18x20x1 ↔ 16x20x1 and 20x20x1.
- Do not link every size to every other size. Do not present an unverified dimension as a substitute.
- Keep retailer and Filter Finder paths gated by confirmed three-dimensional size.

## Anchor text and density

Use concise, descriptive natural language that accurately predicts the destination. Avoid “click here,” forced exact-match phrases, overlong anchors, incorrect dimensions, and multiple links to the same destination in close proximity. Natural repeated wording is acceptable; mechanical synonym rotation is not a goal.

Flag paragraphs with competing links, repeated destinations that add no new value, and oversized link blocks. Related Articles may repeat a body destination when it remains a strong next step, but repetition alone is not a reason to add or remove a card.

## Orphans, weak support, and click depth

- A substantive indexable page must not depend only on the sitemap.
- Zero contextual incoming links require manual review and usually correction.
- One contextual incoming link is a review signal, not an automatic defect; a narrow page may be intentionally supported by one precise source.
- Aim to keep substantive content within three inter-page steps of the homepage where a natural route exists. Investigate depth 4+, but do not dump link directories onto the homepage.
- Global navigation, blog-index, Related Articles, and contextual links must be reported separately.

## Related Articles

Choose a small set that answers likely next questions. Verify destination intent, current URL, and visible label. Do not use the component as a holding area for pages that need authority, and do not require reciprocal cards. Preserve the current component and card-count convention on any page being edited.

## GSC-aware prioritization

Internal links should support coherent user journeys first. Documented GSC data may break ties among equally useful opportunities, but it does not justify irrelevant links. The owner-provided 2026-08-24 through 2026-08-30 export showed directional strength for troubleshooting (125 listed-page impressions; impression-weighted position 8.38), return/configuration (133; 8.63), sizing (31; 8.81), fit (4; 9.75), and HVAC symptom/filter causation (56; 10.05). Comparison and commercial groups ranked much deeper in that limited export. These periods and samples are not a controlled experiment and do not prove that internal-link changes improve rankings.

## 2026-09-09 audit baseline and decisions

The dependency-free local crawl used sitemap URLs as the indexable set and inspected all production anchors. Before production edits it found:

| Metric | Before |
|---|---:|
| Indexable URLs | 48 |
| Non-legal content pages | 44 |
| Internal inter-page links | 1,519 |
| Unique internal edges | 823 |
| Average outgoing links per content page | 33.43 |
| Average incoming links per content page | 30.25 |
| Contextual links | 458 |
| Unique contextual edges | 445 |
| Average contextual incoming links | 10.41 |
| Median contextual incoming links | 7 |
| Substantive pages with zero contextual incoming links | 0 |
| Pages with one contextual incoming link | 4 |
| Maximum homepage depth | 4 |
| Pages at depth 4+ | 3 |
| Broken internal links | 2 |
| Broken fragments | 0 |

The homepage itself has zero contextual incoming links by definition and is not a content orphan. The one-link pages were the new-filter smell guide and the 16x24x1, 18x20x1, and 24x24x1 size guides. The smell page already had a precise contextual incoming link from the wet-filter guide, so no extra link was manufactured. The three size pages lacked direct discovery from the sizing hub and sat at depth 4; adding them to the existing common-sizes list was high confidence. Two stale `*-air-filter.html` size links in the vacuum/reuse guide were objectively broken and were corrected. No other production edits met the implementation threshold.

After those changes, the crawl reported 1,524 internal inter-page links, 828 unique edges, 33.55 average outgoing and 30.36 average incoming links per content page, 463 contextual links, 450 unique contextual edges, 10.52 average and 7 median contextual incoming links, maximum depth 3, no pages at depth 4+, no broken local links, and no broken fragments. Only the intentionally narrow new-filter smell guide remained at one contextual incoming source. The sitemap inventory and page count did not change.

The large duplicate-destination diagnostic count is dominated by intentional template navigation, CTAs, and repeated table-of-contents/Related pathways. It is not a sitewide defect count. Review duplicates in context rather than mechanically removing them.

## Reusable audit tool

Run from the repository root:

```powershell
node tools/internal-link-audit.mjs --output internal-link-report.json
```

The tool has no third-party dependencies. It reads `sitemap.xml`, resolves local production HTML, classifies links, calculates incoming/outgoing counts and homepage depth, identifies weak contextual discovery, reports duplicate destinations for review, and validates local files and fragments. Generated reports are working artifacts and should not be committed by default.

## Future publication workflow

1. Identify the primary search/user intent.
2. Assign the topical cluster.
3. Identify the primary intent owner and duplication boundary.
4. Select only useful outgoing contextual links.
5. Identify at least one appropriate existing incoming-link source when justified.
6. Evaluate a real hub relationship; do not invent one.
7. Evaluate the Filter Finder path and preserve tracking/safety behavior.
8. Choose Related Articles intentionally.
9. Validate anchor wording, destinations, fragments, and dimensions.
10. Run the internal-link audit and manually inspect the changed journeys before publication.

Apply this workflow to articles, size pages, and future content hubs. Record exceptions where a deliberately narrow page does not warrant a reciprocal or Finder link.

## Audit methodology and interpretation

The graph is directed: source page → destination page. Sitemap membership defines the indexable inventory; local file existence validates href targets. Homepage depth uses all crawlable links to indexable content, while contextual metrics exclude global navigation, breadcrumbs, footer/legal, blog-index listings, Related Articles, CTAs, and Filter Finder links. Automated classes are heuristics and require manual review of important pages.

Do not claim SEO gains from a larger edge count. A successful audit produces correct destinations, understandable ownership, useful journeys, and restrained linking—even when many pages remain unchanged.
