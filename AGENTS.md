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
- Canonical START baseline: `439efff0f14315310b9149cde0283633696a0eb0`
- START tag: explicitly waived by the user; the full START SHA is authoritative
- BUSINESS PLUS: not authorized

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
baseline. Its planned public routes are:

```text
/
/trattamenti
/trattamenti/:slug
/studio
/team
/galleria
/prenota
/faq
/contatti
/privacy
/cookie
/*
```

BUSINESS may use centralized typed treatment, team, gallery, FAQ, contact, booking and
route-metadata data. Supported booking adapters are `external`, `whatsapp`, `request`
and `demo`; the portfolio default is `demo` unless an approved implementation task
selects another mode.

## Current authorized implementation pass

The user replaced the earlier Lovable-specific activation gate for this implementation
pass with the following approved decision:

```text
implementation writer: Cursor + Codex
writer mode: one local writer on the canonical BUSINESS working tree
implementation branch: feat/rito-business-multipage
branch base: 9b7ff807f945f679216671577963fd713badb507
Lovable role: passive repository synchronization / optional preview only
Lovable Project Knowledge: not required and not updated for this pass
Lovable Agent and prompt: not authorized
Lovable credits: not authorized
concurrent writers: forbidden
```

Local source and documentation changes are authorized only on the dedicated branch.
Stage, commit, push, pull request, merge, publication, deployment, domains and
infrastructure remain separate explicit gates. The versioned Lovable Project Knowledge
and prompt remain optional future artifacts; their presence does not authorize execution.

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
- Below-the-fold reveals begin when content enters the viewport.
- Respect `prefers-reduced-motion`; content must remain visible without motion.
- Preserve visible focus, semantic landmarks, correct heading order and adequate
  touch targets.
- Mobile drawers and lightboxes must support Escape, focus containment/return and
  body-scroll restoration.
- Do not add dependencies without a concrete documented need.
- Do not change unrelated copy, styling or functionality.
- Do not copy Hospitality visual identity.

## Demo integrity

- Use fictional data only.
- Do not invent reviews, ratings, awards, credentials, guarantees, metrics or
  medical claims.
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
