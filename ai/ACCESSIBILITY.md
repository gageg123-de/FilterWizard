# Accessibility

Last verified: 2026-07-19

Target practical WCAG 2.2 AA acceptance; the repository has not been formally certified.

This file owns accessibility acceptance criteria; [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md) owns visual conventions and [`TESTING.md`](TESTING.md) owns the execution checklist. “Implemented” below means patterns were observed, not that every instance or assistive-technology combination has passed an audit.

## Current approach

Semantic headings, links, buttons, labels, fieldsets in cookie settings, native `details`, image alt text, figure captions, focus-visible outlines, reduced-motion CSS, `aria-live` statuses, `aria-pressed` Finder options, modal dialog semantics, Escape/overlay close, focus trapping and focus return are implemented. Inputs are masked from Clarity. Article progress is decorative; share/copy feedback is announced.

## Acceptance criteria

- One H1; no skipped hierarchy without an intentional section heading.
- Every input has a visible or screen-reader label; grouped choices have an accessible group name.
- Use buttons for actions and links for navigation; no clickable generic divs.
- Keyboard users can open, complete, back through, and close the Finder and consent dialogs without losing focus.
- Errors are specific, adjacent, and announced where needed; invalid fields receive focus.
- Visible focus at all times; text/controls meet AA contrast; do not encode meaning by color alone.
- Touch targets approximately 44px minimum; no horizontal overflow at 320px or 200% zoom.
- Informative images have useful alt; decorative images have empty alt; generated graphics are inspected.
- Reduced motion avoids meaningful information being available only through animation.

Test Finder known/unknown branches, autocomplete arrow/Escape behavior, result disclosures, copy status, share controls, cookie settings radio group, mobile nav, and email errors with keyboard and basic screen-reader navigation.

Known risk: extensive hand-authored pages can drift; automated checks cannot prove modal announcements, reading order, or comprehension.

For a new or changed interaction, document name/role/value, keyboard sequence, focus entry/exit, announcement behavior, error recovery, pointer/touch behavior, motion behavior, and 200%/320px reflow. Do not use ARIA to compensate for incorrect native elements. If full assistive-technology testing is unavailable, state exactly what was and was not tested.

Update this file when: components, focus behavior, errors, semantics, colors, images, motion, or acceptance criteria change.
