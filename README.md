# RITO Studio BUSINESS

RITO Studio BUSINESS is the multipage evolution of the approved Tretnix Beauty &
Wellness START concept.

## Canonical derivation

```text
source repository: AdamDariOfficial/rito-studio-START
source commit: 439efff0f14315310b9149cde0283633696a0eb0
source status: approved and frozen by explicit user authorization
annotated tag: deliberately waived by the user
BUSINESS repository: AdamDariOfficial/rito-studio-BUSINESS
Lovable remix baseline: 222c331db44b1775aa2f877634f3a0f3dfdfbe69
```

The full START commit SHA is the authoritative family baseline. The Lovable remix
preserves that history and adds two tool-managed commits whose net delta is limited to
`package.json` and `bun.lock`, updating the Lovable TanStack configuration to `2.8.5`.

## Product role

BUSINESS adds a coherent multipage treatment-discovery journey with direct telephone
booking while preserving START's identity, responsive behavior, accessibility, motion
and demo integrity.

Planned public routes:

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

BUSINESS v1 excludes `/journal`, `/journal/:slug`, `/gift-card`, `/account`, `/admin`,
live availability, payments, client accounts, CRM, fidelity, database,
authentication and BUSINESS PLUS.

Team and a dedicated booking route are not part of the base BUSINESS product. Every
booking CTA opens the centralized telephone number with a `tel:` link.

Treatment details open as an accessible route-aware dialog or mobile sheet inside the
catalogue. Category and detail state use query parameters, for example:

```text
/trattamenti?categoria=hair&trattamento=taglio-essenziale
```

The former `/trattamenti/:slug` route is not active in base BUSINESS.

The dialog preserves the catalogue scroll position and supports bounded previous/next,
keyboard and swipe navigation without adding a history entry for every treatment. Mobile
category filters remain a single native horizontal row, while the home gallery rail keeps
native scrolling and offers a deliberate final gesture toward the full gallery.

## Client adaptation

Base adaptation:

```text
edit site config + treatment catalogue
```

Only `name`, `slug`, `category`, `priceLabel` and `shortDescription` are required for a
treatment. The centralized model drives catalogue rows, query-driven details and
catalogue metadata without requiring a separate page for each treatment.

Optional enrichment:

```text
add detailed content only for selected treatments
```

Duration, extended description, suitability, included steps, appointment guidance and
notes remain optional. Catalogue metadata stays route-level rather than adding unused
per-treatment SEO or relationship fields.

## Canonical documentation

Read `AGENTS.md` first, then:

- `docs/PRODUCT.md`
- `docs/DESIGN.md`
- `docs/CONTENT.md`
- `docs/ROUTES.md`
- `docs/ANIMATIONS.md`
- `docs/TESTING.md`
- `docs/DECISIONS.md`
- `docs/ASSET_PLAN.md`
- `docs/STATUS.md`
- `docs/APPROVAL.md`
- `docs/START_BUSINESS_CONTRACT.md`

The optional versioned BUSINESS Project Knowledge source for a future Lovable pass is:

```text
compiled/LOVABLE_BUSINESS_PROJECT_KNOWLEDGE.md
```

The optional versioned BUSINESS implementation prompt for a future Lovable pass is:

```text
prompts/LOVABLE_BUSINESS_PROMPT.md
```

## Current implementation decision

The user authorized Cursor + Codex as the sole local writer for the complete BUSINESS
multipage pass on `feat/rito-business-multipage`, based on
`9b7ff807f945f679216671577963fd713badb507`.

Lovable remains passive for repository synchronization or optional preview only.
Project Knowledge is not required or updated, the Lovable Agent and prompt are not
authorized, and intentional Lovable credit use is prohibited for this pass. Concurrent
writers are forbidden. Stage, commit, push, pull request, merge, publication, deployment,
domains and infrastructure remain separate explicit gates.

## SEO and measurement boundary

BUSINESS includes a centralized route SEO inventory, social-image configuration,
appropriate structured-data capability and consent-aware tracking configuration. The
portfolio demo remains `noindex, follow`, keeps sitemap generation and analytics
disabled by default and performs no tracking request or cookie write before consent.

## Public authorship

The public-facing product is designed and developed by Tretnix. Internal production
tools are not presented as authors.
