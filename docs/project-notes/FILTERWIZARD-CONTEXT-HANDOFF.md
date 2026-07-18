# Filter Wizard Development Context Handoff

## 1. Executive Summary

Filter Wizard is a static GitHub Pages website for homeowners who need help finding, remembering, and buying the correct HVAC air filter.

The product originally started as a fake-door subscription landing page for scheduled air-filter delivery. Over the project, the strategy shifted away from selling subscriptions immediately and toward a lower-friction validation model:

- Free Filter Finder tool
- Helpful homeowner guidance
- Amazon affiliate recommendations
- SEO-driven blog content
- Pinterest and social traffic generation
- Optional email capture for reminders and launch updates

The intended user is a homeowner, generally mobile-first, often older, who may not know their filter size, may forget replacement dates, and wants a simple answer without HVAC jargon.

The current value proposition is:

> Filter Wizard helps homeowners identify their filter size guidance, recommended MERV rating, replacement timing, and current buying options.

The current monetization model is Amazon affiliate revenue from filter search links. The site should not imply Filter Wizard is currently selling filters directly or operating a real subscription checkout. It should feel useful and trustworthy before it asks for email or sends users to retailers.

The current traffic strategy is:

- SEO blog articles targeting practical air-filter questions
- Pinterest graphics and bulk-upload packages
- Facebook/social content repurposed from articles
- Filter Finder as the core conversion bridge
- Amazon affiliate clicks as the near-term revenue signal

The project is in a launch/early-growth stage. The priority is accurate guidance, stable tracking, clean GitHub Pages deployment, and repeatable article production.

## 2. Active Workspace And Source Of Truth

The only active repository going forward is:

`B:\Codex\FilterWizard\FilterWizard`

That repository is the single source of truth.

Do not use or modify previous project folders, including:

- `C:\Users\13182\Documents\Codex\`
- `build-a-professional-launch-ready-landing`
- downloaded ZIP folders
- backup copies
- SSD copies
- `changed-files-*` output folders

The old workspace inspected for this handoff was:

`C:\Users\13182\Documents\Codex\2026-06-20\build-a-professional-launch-ready-landing`

It is retired and must not be treated as active.

The next Codex task should immediately verify in the HDD repository:

- Current Git branch
- Git remote
- GitHub Pages source branch/folder
- Working tree status
- Presence of `.git`, `index.html`, `assets/`, `blog/`, `sitemap.xml`, `.nojekyll`, and `CNAME`

Do not commit or push unless the user explicitly asks.

GitHub Pages details from the old workspace:

- Custom domain: `filter-wizard.com`
- `CNAME` contains `filter-wizard.com`
- `.nojekyll` exists and should remain at root
- `robots.txt` points to `https://filter-wizard.com/sitemap.xml`
- `/.well-known/security.txt` exists

Use root-relative paths for live site references whenever possible:

- `/assets/css/style.css`
- `/assets/js/script.js`
- `/assets/images/...`
- `/blog/...`
- `/legal/...`

A specific past issue: using root-relative `/assets/...` is correct for the custom domain, but may fail in GitHub project-page previews if the site is tested under a subpath. For local previews, use a local server instead of opening nested HTML files through `file://`.

## 3. Business And Product Strategy

Current funnel:

```text
SEO article / Pinterest / social post
→ Filter Finder
→ size guidance + MERV recommendation + replacement schedule
→ Amazon buying options
→ affiliate click tracking
```

Subscriptions were deprioritized because they introduced too much friction before users understood the product. Earlier versions focused on founding-member pricing, countdown timers, plan cards, and a reservation modal. That was useful for purchase-intent validation but became too heavy for cold mobile traffic.

The current approach is more capital-efficient:

- Attract homeowners through useful content
- Let users solve a real problem with the Filter Finder
- Send confirmed-size users to Amazon search results
- Collect optional emails only after value is delivered
- Build topical authority before scaling ad spend

Amazon is currently the preferred retailer path because:

- Users already trust it
- Search links support many filter sizes and MERV combinations
- It avoids inventory, fulfillment, and support complexity
- It provides an early revenue signal without building checkout

Important trust boundaries:

- Do not claim HVAC compatibility certainty.
- Do not imply a physical size was discovered when the user did not enter one.
- Do not send unknown-size users directly to broad retailer searches.
- Do not imply Filter Wizard sells or ships filters today unless the site actually does.
- Do not overuse urgency, fake countdowns, fake testimonials, or invented user counts.

## 4. Current Site Architecture

Expected active structure, based on the reorganized old workspace:

```text
/
├── index.html
├── CNAME
├── .nojekyll
├── robots.txt
├── sitemap.xml
├── README.md
├── .well-known/
│   └── security.txt
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   ├── icons/
│   └── images/
│       ├── blog/
│       ├── brand/
│       ├── homepage/
│       ├── products/
│       └── social/
├── blog/
│   ├── index.html
│   ├── how-often-change-air-filter.html
│   ├── signs-hvac-filter-is-clogged.html
│   ├── dirty-air-filter-energy-bill.html
│   └── dirty-air-filter-cause-ac-freeze.html
├── legal/
│   ├── privacy-policy.html
│   ├── cookie-policy.html
│   ├── affiliate-disclosure.html
│   └── terms-of-use.html
├── archive/
│   ├── change-sets/
│   └── unclassified/
└── docs/
    └── project-notes/
```

Shared global files:

- `/assets/css/style.css`
- `/assets/js/script.js`
- `/assets/images/brand/filter-wizard-logo-new.webp`
- `/assets/icons/*`
- `/sitemap.xml`
- `/robots.txt`
- `/legal/*`

Page-specific files:

- `/index.html`: homepage, Filter Finder modal, early access form
- `/blog/index.html`: blog listing
- `/blog/*.html`: individual articles
- `/assets/images/blog/*`: article images
- `/assets/images/products/*`: Filter Finder product mockups

Archival folders:

- `/archive/change-sets/`
- `/archive/unclassified/`

These should not be linked in navigation, sitemap, or production metadata. Do not recreate `changed-files-*` folders.

## 5. Filter Finder Behavior

The Filter Finder is the core product experience.

Current flow:

1. Step 1: User chooses whether they know their filter size.
2. Step 2: User selects filter location.
3. Step 3: User selects home conditions.
4. Step 4: User reviews and generates a recommendation.
5. Result appears before email capture.
6. Email is optional.
7. Retailer links appear only when size is confirmed.

Known-size path:

- Options should be only:
  - `Yes, I know it`
  - `Not sure`
- If user selects `Yes, I know it`, show size input.
- User must enter a valid size before continuing.
- User can change back to `Not sure`.
- Changing away from `Yes, I know it` clears the size input and size state.

Unknown-size path:

- Do not claim “We found your filter size.”
- Show `Check before ordering`.
- Show location-specific size guidance.
- Product CTA becomes `Help Me Confirm My Size`.
- Retailer block remains hidden until a valid size is entered after the result.
- Unknown-size users can update the result by entering a confirmed size after the report.

Size validation:

Accepted examples:

- `20x25x1`
- `20 X 25 X 1`
- `20 25 1`
- `16x20x4`
- `19.5x24.5x1`

Rejected examples:

- `73737`
- `banana`
- `20x25`
- `20x25x`
- `1x1x1`
- impossible large values like `100x100x20`

Validation is intentionally practical, not limited to the autocomplete list.

Autocomplete:

- Uses common static sizes.
- Suggestion click sets `sizeSelectedFromSuggestion = true`.
- Manual input after suggestion resets that state.
- Autocomplete-selected valid sizes can show high confidence.
- Manually typed valid sizes show format confidence, not high confidence.

Confidence labels:

- Autocomplete-selected valid size: `✓ High confidence`
- Manually typed valid size: `✓ Size format confirmed`
- Unknown or invalid size: `Confirm size before ordering`

MERV logic:

- Allergies selected: actual rating `MERV 13`, visible display label `Consider MERV 13`
- Pets or heavy dust selected: `MERV 11`
- Otherwise: `MERV 8`

MERV 13 language must stay careful:

- Say “worth considering”
- Mention manufacturer maximum MERV guidance
- Do not say the system supports MERV 13
- Do not call it “safe” for every HVAC system

Replacement timing uses one centralized plan:

- Multiple demanding conditions: about every 45 days
- Pets, allergies, or heavy dust: about every 60 days
- Kids at home: about every 75 days
- None of these: about every 90 days
- No condition fallback: about every 90 days, though Step 3 should require a selection

The same interval must drive:

- Visible schedule
- Next suggested change
- Reminder months
- Replacements per year
- Estimated yearly cost
- Analytics
- Copy text
- Formspree payload

Annual cost logic uses price ranges:

- MERV 8: `$8-$14 each`
- MERV 11: `$12-$18 each`
- MERV 13: `$16-$25 each`

Yearly cost = price range × `Math.ceil(365 / intervalDays)`.

Result order currently intended:

1. Recommendation banner
2. Product card
3. Retailer options, only for confirmed size
4. Email save section
5. Personalized insight
6. Why MERV disclosure
7. Fiberglass comparison disclosure
8. Copy recommendation

Important bugs already addressed:

- Mobile modal failing to close reliably
- Safari click issues
- Modal jumping when Step 1 input appeared
- Duplicate checkmark encoding bug (`âœ“`)
- Product image placeholder staying visible
- Long/tall result layout on iPhone
- Competing CTAs in the result
- Arbitrary size text being accepted
- Unknown-size users getting Amazon links too early
- Inconsistent schedule and annual cost math

Future work should not alter Filter Finder logic unless explicitly requested.

## 6. Affiliate Implementation

Amazon is the main monetization path.

Known affiliate tag:

`filterwizard-20`

Preserve it exactly wherever currently configured.

Affiliate behavior:

- Filter Finder generates Amazon search URLs, not hardcoded product URLs.
- Amazon links should include `tag=filterwizard-20`.
- Amazon links should open in a new tab.
- Amazon links should use:
  `rel="nofollow sponsored noopener"`
- Amazon links should include:
  - `data-filter-size` when known
  - `data-link-location`, such as `filter-finder-results`, `blog-content`, `recommended-products`

There are also retailer options for:

- Amazon
- Home Depot
- Lowe’s
- Filterbuy

The Amazon link is the primary affiliate path. Other retailer links are comparison options and should not invent affiliate tags.

Known limitation:

- Amazon search-result links can include the affiliate tag, but whether the tag persists after a user clicks from Amazon search results to a product page depends on Amazon’s behavior. This must be tested with real affiliate reporting and GA4 events.

Important implementation areas:

- `/assets/js/script.js`
- Product recommendation mapping
- Retailer link generation
- Amazon click delegated listener
- `amazonAffiliateTag`
- `trackAmazonClick`
- `filter_finder_retailer_clicked`

Regression-test after affiliate changes:

- Amazon generated URL contains `tag=filterwizard-20`
- No literal placeholder like `YOUR-AFFILIATE-TAG`
- `amazon_click` fires once per click
- Generic outbound tracking still works
- Retailer cards do not appear for unknown-size users
- No raw email or private data is sent to analytics

## 7. Analytics And Tracking

Tracking systems:

- Google Analytics 4
- Microsoft Clarity
- Consent mode
- Cookie consent banner
- Formspree submission tracking
- Amazon affiliate click tracking
- Article events
- Filter Finder events

GA4 measurement ID found in old workspace:

`G-64VWBW3NHS`

Microsoft Clarity ID found in old workspace:

`xbqsjc3yut`

Do not duplicate GA4 or Clarity initialization.

Known event groups:

Filter Finder:

- `filter_finder_modal_opened`
- `filter_finder_modal_closed`
- `filter_finder_started`
- `filter_finder_step_completed`
- `filter_finder_completed`
- `filter_finder_result_viewed`
- `filter_finder_result_summary_viewed`
- `filter_finder_product_recommendation_viewed`
- `filter_finder_email_prompt_viewed`
- `filter_finder_email_entered`
- `filter_finder_email_submitted`
- `filter_finder_invalid_size_entered`
- `filter_finder_conditions_required`
- `filter_finder_analysis_started`
- `filter_finder_analysis_completed`
- `filter_finder_view_buying_options_clicked`
- `filter_finder_save_result_link_clicked`
- `filter_finder_continue_to_retailers_clicked`
- `filter_finder_buying_options_viewed`
- `filter_finder_retailer_clicked`
- `filter_finder_confirm_size_help_clicked`
- `filter_finder_size_confirmed_after_result`
- `copy_recommendation_clicked`

Amazon:

- `amazon_click`

Article:

- `article_page_view`
- `article_scroll_depth`
- `article_share_clicked`
- `article_filter_finder_click`

Homepage / forms:

- `hero_filter_finder_clicked`
- `early_access_submitted`
- `generate_lead`, where still used
- Other older subscription-intent events may exist in archives but should not be revived unless the subscription funnel returns

Important analytics parameters:

- `filter_size`
- `normalized_filter_size`
- `recommended_filter_type`
- `recommended_filter_display_label`
- `recommended_schedule`
- `replacement_interval_days`
- `replacements_per_year`
- `size_confidence_level`
- `size_selected_from_suggestion`
- `has_confirmed_size`
- `product_size`
- `product_merv`
- `product_price`
- `page_path`
- `link_url`
- `link_text`
- `affiliate_tag`
- `link_location`
- `article_slug`
- `scroll_depth`

Never send:

- Raw invalid filter-size input
- Raw email addresses
- Phone numbers
- Payment data
- Private tokens or credentials

Known gaps / verify later:

- GA4 Realtime should be used to confirm `amazon_click`.
- Consent mode should be tested after cookie accept/reject.
- Article scroll-depth events should be verified on live pages.
- Confirm Amazon click listener is registered once only.

## 8. Privacy, Consent, Security, And Legal

The site includes:

- Cookie consent banner
- Consent mode before GA configuration
- Privacy policy
- Cookie policy
- Terms of use
- Affiliate disclosure
- Security file

Security file:

`/.well-known/security.txt`

Contents in old workspace:

```text
Contact: mailto:infofilterwizard@gmail.com
Expires: 2027-07-10T00:00:00Z
Preferred-Languages: en
Canonical: https://filter-wizard.com/.well-known/security.txt
```

Legal pages in old workspace exist both at root and under `/legal/`:

Root-level:

- `/privacy-policy.html`
- `/cookie-policy.html`
- `/terms-of-use.html`
- `/affiliate-disclosure.html`

Canonical/live legal folder:

- `/legal/privacy-policy.html`
- `/legal/cookie-policy.html`
- `/legal/terms-of-use.html`
- `/legal/affiliate-disclosure.html`

The sitemap points to `/legal/...`.

Future work should preserve root legal pages only if they serve as redirects or backward-compatible public URLs. Do not delete without checking references and live indexing.

`.nojekyll` matters because GitHub Pages otherwise may ignore folders or files beginning with dots or underscores. It helps ensure `/.well-known/security.txt` and static assets remain accessible.

Cloudflare/custom domain constraints:

- Preserve HTTPS.
- Preserve `CNAME`.
- Do not change DNS settings from Codex unless explicitly instructed.
- Do not remove verification files.

## 9. Article Pipeline

Future article requests may use this shorthand:

`Filter Wizard article pipeline: [TOPIC]`

Standard workflow:

1. Optimize title and slug.
2. Define search intent and keywords.
3. Produce complete article draft.
4. Embed article copy into the implementation prompt.
5. Reuse the existing article template.
6. Use or reserve exactly three article images unless directed otherwise.
7. Add top and bottom share controls.
8. Add reading progress.
9. Add table of contents.
10. Add email capture / Filter Finder CTA.
11. Add Article JSON-LD.
12. Add FAQ JSON-LD when visible FAQ exists.
13. Add Open Graph metadata.
14. Add Twitter metadata.
15. Update `/blog/index.html`.
16. Update homepage Latest Guides.
17. Update `sitemap.xml`.
18. Add reciprocal internal links.
19. Preserve analytics.
20. Validate accessibility, responsiveness, performance, paths, and schema.
21. Produce an implementation report.

Expected article components:

- Header/nav matching main site
- Blog article hero
- H1 only once
- Hero image or placeholder
- Reading metadata
- Share controls
- Table of contents
- Article sections
- Responsive tables
- MERV comparison cards where relevant
- Filter Finder CTA
- FAQ accordion
- Related articles
- Footer
- Back-to-top button
- Article JSON-LD
- FAQPage JSON-LD when applicable
- Breadcrumb schema where used

Image placeholder rules:

- Do not deploy broken `<img>` paths.
- If image is missing, use a styled placeholder.
- Preserve 3:2 space.
- Use `role="img"`.
- Use `aria-label`.
- Use `data-future-image`.
- Do not include missing image URLs in schema or social metadata.
- Replace placeholders only after real assets exist.

## 10. Article Image Standards

Article image convention:

- Three images per article unless the user says otherwise.
- Image 1: hero editorial photo.
- Image 2: educational process diagram.
- Image 3: supporting comparison/context graphic.

Format:

- WebP
- Prefer landscape 3:2 for article visuals
- Use explicit `width` and `height`
- Hero image:
  - `loading="eager"`
  - `fetchpriority="high"`
  - `decoding="async"`
- Below-the-fold images:
  - `loading="lazy"`
  - `decoding="async"`
- Keep file sizes roughly under 200 KB where reasonable.
- Use descriptive filenames.
- Use useful alt text.
- Captions should clarify, not repeat the image.

Avoid:

- Too much text inside graphics
- Repetitive infographic styles in a single article
- Social-poster graphics that look cramped inside articles
- Missing referenced images
- Irrelevant homepage images as substitutes
- Broken schema image URLs

Known blog images in old workspace:

- `assets/images/blog/ac-freeze-airflow-diagram.webp`
- `assets/images/blog/air-filter-maintenance-tips.webp`
- `assets/images/blog/causes-of-frozen-ac.webp`
- `assets/images/blog/change-air-filter-installation.webp`
- `assets/images/blog/clean-vs-clogged-filter.webp`
- `assets/images/blog/clogged-filter-warning-signs.webp`
- `assets/images/blog/dirty-filter-airflow-energy-diagram.webp`
- `assets/images/blog/dirty-filter-energy-bill-hero.webp`
- `assets/images/blog/dirty-vs-clean-air-filter.webp`
- `assets/images/blog/frozen-ac-coil-hero.webp`
- `assets/images/blog/hvac-energy-bill-factors.webp`
- `assets/images/blog/signs-hvac-filter-clogged-hero.webp`

Frozen AC article expected images:

- `assets/images/blog/frozen-ac-coil-hero.webp`
- `assets/images/blog/ac-freeze-airflow-diagram.webp`
- `assets/images/blog/causes-of-frozen-ac.webp`

Dirty energy bill article expected images:

- `assets/images/blog/dirty-filter-energy-bill-hero.webp`
- `assets/images/blog/dirty-filter-airflow-energy-diagram.webp`
- `assets/images/blog/hvac-energy-bill-factors.webp`

Clogged filter signs article expected images:

- `assets/images/blog/signs-hvac-filter-clogged-hero.webp`
- `assets/images/blog/clean-vs-clogged-filter.webp`
- `assets/images/blog/clogged-filter-warning-signs.webp`

## 11. Existing Articles

Live articles found in the old workspace:

### How Often Should You Change Your Air Filter?

- File: `/blog/how-often-change-air-filter.html`
- Public URL: `https://filter-wizard.com/blog/how-often-change-air-filter.html`
- Topic: replacement frequency by household situation
- Date: originally requested around July 2026; exact visible date should be verified in the HDD repo
- Internal links:
  - Filter Finder
  - Signs HVAC filter is clogged
  - Dirty air filter energy bill
  - Dirty air filter AC freeze
- Image status:
  - Uses article images in `/assets/images/blog/`
  - Verify exact image paths in active repo
- Blog index: listed
- Homepage Latest Guides: should be listed
- Sitemap: listed

### 7 Signs Your HVAC Filter Is Clogged

- File: `/blog/signs-hvac-filter-is-clogged.html`
- Public URL: `https://filter-wizard.com/blog/signs-hvac-filter-is-clogged.html`
- Topic: warning signs of clogged HVAC filters
- Published/modified: `2026-07-12T00:00:00Z`
- Main images:
  - `signs-hvac-filter-clogged-hero.webp`
  - `clean-vs-clogged-filter.webp`
  - `clogged-filter-warning-signs.webp`
- Internal links:
  - How often to change filter
  - Dirty energy bill
  - AC freeze
  - Filter Finder
- Blog index: listed
- Homepage Latest Guides: should be listed
- Sitemap: listed

### Can a Dirty Air Filter Raise Your Energy Bill?

- File: `/blog/dirty-air-filter-energy-bill.html`
- Public URL: `https://filter-wizard.com/blog/dirty-air-filter-energy-bill.html`
- Topic: energy usage, airflow restriction, utility bills
- Published/modified: `2026-07-13T00:00:00Z`
- Main images:
  - `dirty-filter-energy-bill-hero.webp`
  - `dirty-filter-airflow-energy-diagram.webp`
  - `hvac-energy-bill-factors.webp`
- Internal links:
  - Signs clogged filter
  - How often to change filter
  - AC freeze
  - Filter Finder
- Blog index: listed
- Homepage Latest Guides: should be listed
- Sitemap: listed

### Can a Dirty Air Filter Cause Your AC to Freeze?

- File: `/blog/dirty-air-filter-cause-ac-freeze.html`
- Public URL: `https://filter-wizard.com/blog/dirty-air-filter-cause-ac-freeze.html`
- Topic: frozen AC coils, airflow restriction, when to call HVAC pro
- Published/modified: `2026-07-14T00:00:00Z`
- Main images:
  - `frozen-ac-coil-hero.webp`
  - `ac-freeze-airflow-diagram.webp`
  - `causes-of-frozen-ac.webp`
- Internal links:
  - Dirty energy bill
  - Signs clogged filter
  - How often to change filter
  - Filter Finder
- Blog index: listed
- Homepage Latest Guides: should be listed
- Sitemap: listed

## 12. Design And UX Conventions

Brand feel:

- Modern SaaS/homeowner utility
- Clean, mobile-first, trustworthy
- Premium but not flashy
- Helpful tool first, affiliate second

Visual conventions:

- Navy primary text and brand grounding
- Bright blue for CTAs and functional accents
- Green for positive trust/recommendation states
- Orange/amber for caution or confirmation-needed states
- White cards with soft shadows
- Rounded cards and buttons
- Clean spacing
- Large mobile tap targets
- No cluttered hero sections
- No aggressive urgency unless real
- No fake reviews or invented usage numbers

Header:

- Logo on left
- Simple nav
- Blog link
- Filter Finder CTA
- Mobile nav should stay clean and not duplicate trust rows

Footer:

- Logo
- concise one-sentence description
- Filter Finder / How It Works / Blog / Email Me My Result
- Legal links
- Cookie Settings
- Amazon Associate disclosure

Article UX:

- Reading progress bar
- Table of contents
- Share controls
- Responsive tables
- FAQ accordions
- Related article cards
- Filter Finder CTA
- Back-to-top button

Recurring design issues to avoid:

- Overly busy mobile hero
- Duplicate checkmark pills
- Broken encoded symbols like `âœ“`
- Competing CTAs
- Tall stacked cards in modal results
- Product image overflow
- Horizontal overflow on iPhone
- Too much text in article graphics
- New visual systems for each article

## 13. Accessibility Requirements

Established requirements:

- One H1 per page
- Logical H2/H3 hierarchy
- Semantic HTML
- Keyboard-accessible buttons and links
- Do not use clickable divs
- Visible focus states
- FAQ accordions must be keyboard accessible
- `aria-expanded` should update where JS accordions are used
- Native `<details>` disclosures are acceptable
- Copy/share confirmations should use `aria-live`
- Alt text for meaningful images
- Empty alt only for decorative images
- Figure captions where they improve comprehension
- No icon-only meaning
- No color-only meaning
- No duplicate IDs
- Touch targets around 44px minimum where practical
- No horizontal overflow at 320px
- Modal focus trap and focus return
- ESC and overlay modal closing
- Body scroll restoration after modal close

## 14. Performance Requirements

The site must remain static and lightweight.

Requirements:

- GitHub Pages compatible
- No backend
- No payment processing
- No account system
- No external libraries unless explicitly requested
- No jQuery
- No framework
- No package manager or build system required
- WebP images
- Lazy-load below-the-fold images
- Eager-load critical hero images
- Use width/height or aspect ratio to prevent CLS
- Avoid duplicate analytics scripts
- Avoid render-blocking additions
- Avoid giant inline scripts
- Keep mobile Lighthouse performance high
- Compress generated images before production use
- Preserve root files needed by GitHub Pages

## 15. Social And Content Strategy

Current social strategy centers on turning blog topics into visual and short-form content.

Pinterest:

- Existing Pinterest graphics and a bulk-upload CSV package were created earlier.
- Pinterest should drive long-tail homeowner traffic to articles and Filter Finder.
- Use article title, practical description, destination URL, and existing graphics.
- Do not generate new Pinterest graphics unless requested.

Facebook:

- Cold homeowner traffic is important.
- Messaging should be simple: “find your filter,” “signs your filter is clogged,” “how often to replace.”
- Avoid subscription-first language.

TikTok / YouTube Shorts / Instagram Reels:

- Repurpose articles into short educational clips:
  - warning signs
  - dirty vs clean filter
  - 30/60/90 replacement guidance
  - MERV 8 vs 11 vs 13
  - filter size location tips

Facebook groups:

- Use helpful, non-spammy advice.
- Link only when contextually useful.
- Do not sound like an affiliate site.

90-day direction inferred from project strategy:

- Publish practical SEO articles consistently.
- Repurpose each article into multiple social assets.
- Validate affiliate clicks before scaling paid ads.
- Keep improving Filter Finder accuracy and conversion.
- Build topical authority around air filters, HVAC airflow, MERV, filter sizing, and energy costs.

## 16. Git And Deployment Workflow

Current intended workflow:

```text
Codex edits active HDD repository
→ user reviews in VS Code
→ test locally
→ stage files
→ commit
→ push / Sync Changes
→ GitHub Pages deploys from main
→ verify live URLs
```

Before any future code work:

1. Confirm the folder is exactly `B:\Codex\FilterWizard\FilterWizard`.
2. Confirm `.git` exists.
3. Confirm `index.html`, `assets/`, `blog/`, `sitemap.xml`, `.nojekyll`, and `CNAME` exist.
4. Run `git status`.
5. Confirm branch.
6. Confirm remote.
7. Do not commit or push unless asked.

Main is likely live. Review before pushing.

Retired workflows:

- Browser-uploading changed file folders
- Creating ZIP replacements
- Creating `changed-files-*` folders
- Editing old SSD workspaces
- Copying between duplicate project folders

## 17. Completed Work

Completed or substantially completed based on conversation and old workspace inspection:

- Static GitHub Pages site launched
- Custom domain configured through `CNAME`
- `.nojekyll` added
- `robots.txt` and `sitemap.xml` added
- `.well-known/security.txt` added
- Homepage simplified around Filter Finder
- Subscription/founding-member funnel removed or deprecated from active concept
- Filter Finder converted into modal wizard
- Filter Finder mobile UX improved
- Strict filter-size validation added
- Size autocomplete added
- Unknown-size flow made safer
- MERV recommendation logic added
- Replacement timing centralized
- Estimated yearly cost logic added
- Product recommendation cards added
- Product WebP mockups added:
  - `filter-product-merv-8.webp`
  - `filter-product-merv-11.webp`
  - `filter-product-merv-13.webp`
  - `filter-product-confirm-size.webp`
  - `filter-product-generic.webp`
- Retailer comparison added
- Amazon affiliate tag integrated
- Amazon click GA4 event added
- Consent mode and cookie banner added
- Legal pages added
- Blog system added
- Article template created
- Four articles created
- Share controls added
- Article scroll tracking added
- Homepage Latest Guides added
- Blog index added
- Internal links added between articles
- Project reorganization performed in the old workspace
- README and file-structure documentation created in old workspace
- HDD workspace migration became the new operating requirement

Cloudflare setup was discussed/partially represented by verification files, but DNS/live Cloudflare state must be verified outside Codex.

## 18. Open Issues And Next Priorities

### Urgent

1. Verify active HDD repo state at `B:\Codex\FilterWizard\FilterWizard`.
2. Confirm all latest changes from the old workspace were actually transferred to the HDD repo.
3. Verify `git status`, branch, and remote in the HDD repo.
4. Test live site after any push.
5. Confirm article images exist and load in the active repo.
6. Confirm Amazon links include `tag=filterwizard-20`.
7. Confirm `amazon_click` fires in GA4 Realtime.
8. Confirm Filter Finder works on mobile Safari and Chrome.
9. Confirm no paths still point to old locations or local files.

### High Leverage

1. Continue article production using the standardized pipeline.
2. Build filter-size landing pages, if desired.
3. Improve internal linking between articles and Filter Finder.
4. Validate Search Console indexing.
5. Track affiliate CTR from articles versus homepage.
6. Expand Pinterest posting.
7. Add more homeowner-intent articles:
   - MERV 8 vs MERV 11
   - How to find filter size
   - Best filters for pets
   - Air filter arrow direction
   - Why is my house dusty?

### Later

1. Revisit subscription concept after traffic and affiliate data exist.
2. Consider email reminder product if enough users submit email.
3. Consider direct product pages only after validating search-demand.
4. Add structured filter-size pages at scale.
5. Improve analytics dashboarding.

Uncertain items:

- Current branch and remote were not verified here because the user explicitly requested no Git commands.
- Exact HDD repo state was not inspected.
- Cloudflare live DNS state was not verified.
- GA4 live events were not verified in Realtime.
- Whether every latest image/article from the old workspace exists in the HDD repo must be checked.

## 19. Failed Approaches And Lessons

Do not repeat these:

- Editing the old SSD workspace after migration to HDD.
- Treating a downloaded ZIP as the source of truth.
- Creating `changed-files-*` folders for manual mobile upload.
- Browser-uploading scattered files instead of using Git.
- Previewing nested HTML pages with `file://` and assuming all root-relative paths are broken.
- Restructuring paths without validating every HTML/CSS/JS reference.
- Removing `.nojekyll`.
- Removing or changing `CNAME`.
- Creating JavaScript-only redirects for public SEO URLs.
- Adding fake urgency, fake countdowns, fake testimonials, or fake user counts.
- Letting unknown-size users shop broad Amazon searches.
- Calling MERV 13 “safe” or “best” without manufacturer compatibility.
- Accepting arbitrary filter-size text.
- Using product images from retailers.
- Adding missing image references before assets exist.
- Using too many article infographics with text-heavy layouts.
- Creating a separate design system for every article.
- Changing unrelated site logic during small polish tasks.
- Assuming GitHub Pages is deploying from a branch without checking.

## 20. Non-Negotiable Rules For Future Codex Work

1. Work only in `B:\Codex\FilterWizard\FilterWizard`.
2. Treat that repository as the single source of truth.
3. Never edit an old SSD or backup workspace.
4. Never create a ZIP replacement.
5. Never create `changed-files-*` folders.
6. Modify files in place.
7. Do not commit or push without explicit permission.
8. Preserve `CNAME` and `.nojekyll`.
9. Preserve Filter Finder, affiliate links, analytics, consent, forms, and navigation unless specifically asked to change them.
10. Reuse existing components and design patterns.
11. Use root-relative paths for production site links unless a specific GitHub test-preview issue requires otherwise.
12. Validate mobile layout at 320px.
13. Report every created, modified, and deleted file.
14. State uncertainties rather than inventing behavior.
15. Inspect the current repository before making assumptions.
16. Do not expose credentials, tokens, or private data.
17. Do not send raw email or raw invalid-size input to analytics.
18. Do not remove archive/history files unless explicitly requested and verified safe.
19. Do not use external libraries without explicit approval.
20. Keep the site static and GitHub Pages compatible.

## 21. New Task Bootstrap Prompt

## Paste This Into the New Filter Wizard Codex Task

You are working on the Filter Wizard website.

Use only this repository as the active workspace:

`B:\Codex\FilterWizard\FilterWizard`

Treat this folder as the single source of truth.

Before doing any implementation work:

1. Confirm the current workspace root is exactly `B:\Codex\FilterWizard\FilterWizard`.
2. Confirm the folder contains:
   - `.git`
   - `index.html`
   - `assets/`
   - `blog/`
   - `sitemap.xml`
   - `.nojekyll`
   - `CNAME`
3. Run `git status`.
4. Confirm the current Git branch.
5. Confirm the Git remote.
6. Do not modify files during onboarding.
7. Report any contradiction between the repository and this handoff.

Do not read, edit, reference, copy from, preview, or write to older Filter Wizard folders, including:

- `C:\Users\13182\Documents\Codex\`
- `build-a-professional-launch-ready-landing`
- any SSD copy
- any backup copy
- any downloaded ZIP folder
- any `changed-files-*` folder

Do not create duplicate project folders.
Do not create ZIP outputs.
Do not create `changed-files-*` folders.
Do not commit or push unless explicitly instructed.

Preserve these systems unless a future request explicitly changes them:

- Filter Finder modal wizard
- Strict filter-size validation
- Size autocomplete
- MERV recommendation logic
- Unknown-size safety flow
- Product image logic
- Retailer comparison
- Amazon affiliate tag `filterwizard-20`
- Amazon click tracking
- Google Analytics
- Microsoft Clarity
- Cookie consent
- Formspree forms
- Blog article template
- Article share controls
- Sitemap
- Legal pages
- `CNAME`
- `.nojekyll`
- `/.well-known/security.txt`

Current strategic direction:

Filter Wizard is no longer primarily a subscription fake-door page. It is a free homeowner Filter Finder plus SEO content and Amazon affiliate recommendations. Keep the tone helpful, accurate, and low-pressure.

Article pipeline rule:

For new articles, reuse the existing blog template, create or reserve three optimized WebP article images, add Article schema, FAQ schema when applicable, Open Graph/Twitter metadata, internal links, blog index updates, homepage Latest Guides updates, sitemap updates, share controls, reading progress, Filter Finder CTA, and validation.

Repository state is more authoritative than old conversation memory. If the handoff says one thing and the current repo says another, inspect carefully and report the discrepancy before changing anything.

## Final Response Notes

- Markdown file created: No.
- Exact file path: Not applicable. This handoff was created directly in the chat response as requested.
- Sections included: Executive Summary, Active Workspace, Business Strategy, Architecture, Filter Finder, Affiliate, Analytics, Privacy/Legal, Article Pipeline, Image Standards, Existing Articles, Design/UX, Accessibility, Performance, Social Strategy, Git Workflow, Completed Work, Open Issues, Lessons, Non-Negotiable Rules, and Bootstrap Prompt.
- Information not confidently reconstructed: Current HDD branch, Git remote, current HDD repo file state, Cloudflare live DNS state, live GA4 event behavior.
- Contradictions found: The currently accessible old workspace is not the required future source of truth. It contains useful context but must be retired.
- Files modified: None.