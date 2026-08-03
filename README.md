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

BUSINESS adds a coherent multipage treatment-discovery and booking journey while
preserving START's identity, responsive behavior, accessibility, motion and demo
integrity.

Planned public routes:

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

BUSINESS v1 excludes `/journal`, `/journal/:slug`, `/gift-card`, `/account`, `/admin`,
live availability, payments, client accounts, CRM, fidelity, database,
authentication and BUSINESS PLUS.

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

The versioned BUSINESS Project Knowledge source is:

```text
compiled/LOVABLE_BUSINESS_PROJECT_KNOWLEDGE.md
```

The versioned BUSINESS implementation prompt is:

```text
prompts/LOVABLE_BUSINESS_PROMPT.md
```

## Implementation gate

The multipage implementation may begin only after the identity/documentation change is
reviewed and merged into `main`, local and remote `main` are synchronized, the connected
Lovable project reflects the merge and Project Knowledge is updated from the versioned
source.

Before implementation, Lovable must switch to the dedicated branch
`feat/rito-business-multipage`, created from the merged documentation baseline. The
user must explicitly authorize the implementation pass and intentional credit use.
That pass includes Lovable's automatic commits and synchronization only on the approved
branch; it does not authorize direct work on `main`, PR, merge, publication or deploy.

The presence of Project Knowledge or a prompt does not authorize execution.

## SEO and measurement boundary

BUSINESS includes a centralized route SEO inventory, social-image configuration,
appropriate structured-data capability and consent-aware tracking configuration. The
portfolio demo remains `noindex, follow`, keeps sitemap generation and analytics
disabled by default and performs no tracking request or cookie write before consent.

## Public authorship

The public-facing product is designed and developed by Tretnix. Internal production
tools are not presented as authors.
