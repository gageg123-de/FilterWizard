# Security

Last verified: 2026-07-19

The site is public client code. It contains no repository-managed secret store or environment variables. GA, Clarity, Formspree form ID, and Amazon Store ID are public identifiers, not private credentials. Never add private keys, API secrets, passwords, personal exports, or affiliate account credentials.

Use [`PRIVACY_AND_CONSENT.md`](PRIVACY_AND_CONSENT.md) for data purpose/retention and [`DEPLOYMENT.md`](DEPLOYMENT.md) for hosting limitations. Security review is required when either changes.

Third parties: Google Analytics loader, Microsoft Clarity, Formspree, retailer destinations, and social-share destinations. External retailer links are created with `noopener`; sponsored retailer links also use `nofollow sponsored`. Facebook share links use `noopener noreferrer`. Verify new-tab links cannot access `window.opener`.

Finder input is validated and inserted with `textContent`; retailer URLs use `encodeURIComponent`. Continue avoiding `innerHTML` for user-controlled values. Email uses native validity and Formspree POST. Size autocomplete and local storage are untrusted client inputs: parse before use and never execute stored content.

No Content Security Policy or security headers configuration exists in the repository. GitHub Pages header control is limited; a future CSP/headers change depends on actual hosting and must be tested against GA, Clarity, Formspree, images, and inline scripts. No runtime dependencies reduces supply-chain exposure, but third-party script compromise remains a risk.

[`../.well-known/security.txt`](../.well-known/security.txt) publishes `infofilterwizard@gmail.com` and expires 2027-07-10. Review before expiry. Public-repository reviews should scan diffs and history for secrets and personal data without copying sensitive findings into documentation.

## Change and incident rules

- New third-party scripts, forms, redirects, uploads, storage, or dynamic HTML require threat/data-flow review and least-data defaults.
- Validate URL schemes and destinations; keep user-controlled content out of HTML/script execution contexts.
- If a secret or personal dataset is discovered, do not echo it into logs or docs. Stop exposure, notify the owner through an approved private channel, rotate/revoke externally, and assess history cleanup deliberately.
- If the security contact or site is unavailable, capture time, affected URL, observable behavior, and safe reproduction steps; do not test destructively against production.

No formal threat model, dependency scanner, CSP report channel, vulnerability-response SLA, or private incident roster exists in the repository.

Update this file when: third parties, forms, headers/CSP, input handling, dependencies, hosting, security contact, or data flows change.
