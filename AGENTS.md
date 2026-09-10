<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits pushed to the connected branch sync back to Lovable and appear in the
> editor, so keep every pushed branch in a working state. Do not publish or
> deploy without explicit authorization.
<!-- LOVABLE:END -->

# AGENTS.md — RITO Studio BUSINESS

## Project identity

- Project: `RITO Studio BUSINESS`
- Family: Tretnix Beauty & Wellness `v1.1`
- Authorized plan: BUSINESS only
- Concept status: fictional portfolio demo, not a real business
- Repository: `AdamDariOfficial/rito-studio-BUSINESS`
- Remix baseline commit: `222c331db44b1775aa2f877634f3a0f3dfdfbe69`
- Canonical START repository: `AdamDariOfficial/rito-studio-START`
- Canonical START baseline: `74ee03c4d39a974872f94f53d14ec2873815ccf7`
- START tag: remote annotated `family-start-v1.0` dereferences exactly to the canonical START baseline
- Current BUSINESS main baseline before the final-freeze reconciliation: `b6a82f918370f730681e9e0c0572a7a653d2dfeb`
- BUSINESS PLUS: separate product/repository; not in scope for BUSINESS implementation work

## Source hierarchy

Use this precedence when instructions conflict:

1. approved decisions;
2. shared Tretnix development standards;
3. project documentation in `docs/`;
4. the current approved task specification;
5. behavior directly verified in code and deployment;
6. earlier conversations still requiring formalization.

Read this file first. Before non-trivial work, inspect all relevant current files and
state the exact sources and versions used. Separate confirmed facts, assumptions,
hypotheses and missing evidence.

## BUSINESS product scope

RITO Studio BUSINESS is the approved multipage evolution of the canonical START
baseline. Its active public routes are:

```text
/
/trattamenti
/studio
/galleria
/faq
/contatti
/privacy
/cookie
/*
```

BUSINESS uses centralized typed treatment, gallery, FAQ, contact and route-metadata
data. In the base product booking uses the centralized conversion adapter with WhatsApp +
phone, while general contact uses email + phone. Team and form-based booking are optional future
modules and are not active routes.

Treatment detail is an accessible query-driven dialog/sheet inside `/trattamenti`, for
example `/trattamenti?categoria=hair&trattamento=taglio-essenziale`. The former
`/trattamenti/:slug` route is not part of the active base BUSINESS inventory.

The approved base adaptation model is:

```text
base adaptation: edit site config + treatment catalogue
optional enrichment: add detailed content only for selected treatments
```

## Current final-freeze reconciliation

The current controlled pass reconciles the existing BUSINESS repository against the final frozen
START baseline without recreating the product or flattening BUSINESS-specific behavior.

```text
Tretnix Knowledge: main@1cf7033b1634ea06d605ed853932c7c25b695d15
canonical START: family-start-v1.0 -> 74ee03c4d39a974872f94f53d14ec2873815ccf7
BUSINESS source: main@b6a82f918370f730681e9e0c0572a7a653d2dfeb
target branch: feat/rito-business-final-freeze-reconciliation
change method: Controlled Change Package
Lovable: passive only
BUSINESS PLUS: not in scope
```

The pass may update only the approved documentation, parity and compact-rhythm surfaces recorded in
`BW-DEC-049` through `BW-DEC-059`. It preserves the multipage route architecture, query-driven
treatment detail, booking = WhatsApp + phone, contact = email + phone, the full `/galleria` route and
catalogue behavior. The current Studio follow-up removes duplicated method explanation and reduces the
route to one visual intro, three Studio-specific concepts and a compact utility/conversion strip. The
home `GalleryRail` must match the frozen START visual composition and native rail behavior at rest,
while BUSINESS intentionally preserves one additive interaction: a deliberate extra drag begun at the
true rail end can open `/galleria` only after threshold and release. The application/browser candidate has completed its pre-stage gates. The project owner has authorized
the final controlled Git closure under BW-DEC-059. Stage, commit, push, pull request, merge and the
annotated freeze tag remain evidence-producing gates; deployment remains separate and is not implied.

The versioned files in `compiled/` and `prompts/` are historical Lovable adapters and MUST NOT be
executed as current instructions. Any future Lovable pass must regenerate them from the then-current
canonical repository documentation under a separately approved gate.

## Explicit exclusions

Do not create or develop without a new approved decision:

- RITO Studio BUSINESS PLUS;
- `/journal`, `/journal/:slug`, `/gift-card`, `/account` or `/admin`;
- live availability or bidirectional calendar synchronization;
- payments, deposits, client accounts, appointment history, packages or fidelity;
- CRM, admin, management, inventory, accounting or staff scheduling;
- Supabase, databases, migrations, authentication or server functions;
- forms that transmit or persist personal data in the portfolio demo;
- production infrastructure, domains or deploys;
- real client, salon or customer data.

Do not weaken authentication, authorization or RLS in any later authorized backend
scope to hide frontend errors.

## START inheritance contract

BUSINESS must preserve the approved START identity unless a later approved decision
explicitly changes it:

- RITO Studio concept and Beauty & Care Atelier positioning;
- tagline `La bellezza, nel suo ritmo.`;
- porcelain, ink and burgundy palette;
- canonical accent `#6A3F4B`;
- Newsreader and Manrope typography;
- editorial, tactile and restrained visual language;
- navbar, drawer, CTA and footer personality;
- motion tokens and perceived behavior;
- mobile-first behavior and editorial text-first ordering;
- Tretnix attribution.

BUSINESS adds information architecture and depth. It is not an independent redesign.

## Development constraints

- Mobile-first.
- No unintended horizontal overflow.
- Editorial mobile sections show text before the image; documented visual-first
  components may be exceptions.
- Do not duplicate markup solely to change responsive order.
- New routes open at the top immediately, never with smooth route reset.
- Same-page anchors may use controlled scrolling when documented.
- Preserve direct URL, refresh, browser Back and Forward behavior.
- Catalogue category and treatment-detail state must remain encoded in the route query.
- Below-the-fold reveals begin when content enters the viewport.
- Respect `prefers-reduced-motion`; content must remain visible without motion.
- Preserve visible focus, semantic landmarks, correct heading order and adequate
  touch targets.
- Mobile drawers and lightboxes must support Escape, focus containment/return and
  body-scroll restoration.
- Do not add dependencies without a concrete documented need.
- Do not change unrelated copy, styling or functionality.
- Do not copy Hospitality visual identity.
- On the BUSINESS home gallery, once the deliberate end-of-rail gesture toward `/galleria` has
  engaged, reverse movement during that same press may retract only the synthetic extra-drag back to
  its zero/origin. It must never scroll the underlying rail farther backward until release/cancel.
  Crossing back below the arm threshold disarms the route change; a new independent gesture restores
  normal native rail scrolling.

## Demo integrity

- Use fictional data only.
- Synthetic reviews are allowed only as explicitly typed demo fixtures under `TRX-DEC-040`, with
  neutral wording, no real-person or platform attribution, no fake URLs and no commercial review
  structured data. Do not invent awards, credentials, guarantees, metrics or medical claims.
- Do not pretend that a demo request or reservation was completed.
- Keep every public route `noindex, follow` until an explicitly approved real-client
  launch.
- Do not publish fictional commercial structured data.
- Do not mention Lovable, ChatGPT, Codex, Impeccable or other internal tools in the
  public UI or metadata.

## SEO, structured data and measurement

BUSINESS must provide a centralized route SEO inventory covering title, description,
canonical URL, Open Graph data, social image and indexability. In the portfolio demo:

- every public route remains `noindex, follow`;
- sitemap generation is disabled, or generated only after an approved real-client
  launch task enables indexability;
- structured-data support remains configurable and must not emit fictional
  `LocalBusiness`, `Service`, `Offer`, person credentials, opening-hours, review,
  rating, reservation or aggregate-rating claims;
- only accurate non-commercial route schemas such as `WebSite`, `WebPage` or
  `BreadcrumbList` may be enabled after explicit review;
- analytics and tracking are configurable but disabled by default;
- no analytics request, cookie or identifier may be created before valid consent.

## Tretnix attribution

Include discreetly:

> Progettato e sviluppato da Tretnix

Link only `Tretnix` to `https://tretnix.com`. Preserve visible keyboard focus and
use `target="_blank"` with `rel="noopener noreferrer"` when opening a new tab.

## Writer coordination

- One writer at a time.
- Cursor + Codex are the sole local implementation writer for the current pass.
- Lovable remains passive and must not modify files, run its Agent or consume credits.
- No other editor may modify overlapping files concurrently.
- Reviewers begin read-only.
- Do not rewrite commits already synchronized with Lovable.

## Validation and reporting

Use only scripts present in `package.json`. When available, run frozen install, lint,
tests and build.

Never claim that a check, browser QA, deployment, migration or security review passed
without direct evidence. Report:

- sources and versions used;
- files changed;
- commands and exit codes;
- browser checks actually performed;
- remaining risks and missing evidence.

The current local implementation authorization does not permit stage, commit, push,
pull request, merge, publication, deployment, database enablement or infrastructure
changes. Those actions remain separate explicit gates.
