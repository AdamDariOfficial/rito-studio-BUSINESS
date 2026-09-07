# RITO Studio BUSINESS

RITO Studio BUSINESS is the multipage evolution of the approved Tretnix Beauty &
Wellness START concept.

## Canonical derivation

```text
source repository: AdamDariOfficial/rito-studio-START
source tag: family-start-v1.0
source commit: 74ee03c4d39a974872f94f53d14ec2873815ccf7
source status: approved and formally frozen
BUSINESS repository: AdamDariOfficial/rito-studio-BUSINESS
BUSINESS current main before reconciliation: b6a82f918370f730681e9e0c0572a7a653d2dfeb
Lovable remix baseline: 222c331db44b1775aa2f877634f3a0f3dfdfbe69
```

The remote annotated `family-start-v1.0` tag and its dereferenced full START commit are the
authoritative family baseline for new parity work. Historical derivation commits remain part of
the repository lineage. The Lovable remix preserves that history and adds two tool-managed commits
whose net delta is limited to `package.json` and `bun.lock`, updating the Lovable TanStack
configuration to `2.8.5`.

## Product role

BUSINESS adds a coherent multipage treatment-discovery journey with external booking and contact
channels while preserving START's identity, responsive behavior, accessibility, motion and demo
integrity.

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

Team and a dedicated booking route are not part of the base BUSINESS product. Booking actions use
the centralized `WhatsApp + phone` adapter; general contact actions use `email + phone`. No native
booking form or persistence is introduced.

Treatment details open as an accessible route-aware dialog or mobile sheet inside the
catalogue. Category and detail state use query parameters, for example:

```text
/trattamenti?categoria=hair&trattamento=taglio-essenziale
```

The former `/trattamenti/:slug` route is not active in base BUSINESS.

The dialog preserves the catalogue scroll position and supports bounded previous/next,
keyboard and swipe navigation without adding a history entry for every treatment. Mobile
category filters remain a single native horizontal row. The home gallery rail follows the
frozen START composition and native-scroll presentation; BUSINESS preserves the deliberate
end-of-rail drag as an additive shortcut to `/galleria`, which remains the full gallery surface.

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

The versioned Lovable Project Knowledge and prompt files under `compiled/` and `prompts/` are
historical adapters. They are not current execution instructions and must be regenerated from the
then-current canonical documentation before any separately authorized future Lovable pass.

## Current reconciliation decision

The 6 September 2026 pass reconciles the existing BUSINESS repository
`main@b6a82f918370f730681e9e0c0572a7a653d2dfeb` against the frozen START source `family-start-v1.0 -> 74ee03c4d39a974872f94f53d14ec2873815ccf7`.

The pass is intentionally targeted: autonomous opacity-only divider reveals, the non-separable
Privacy/Cookie legal pair, final shared link affordance, premium white booking action and independent
booking/contact CTA reveals. Browser-QA corrections restore exact category-grid geometry, embed the
three method steps in `RitualFeature`, make the practical-info location actionable and compact
non-informative vertical spacing across BUSINESS routes. Navigation keeps the terse text-only `Prenota`
action and the footer booking link remains icon-free. The current `/studio` candidate deliberately
removes duplicated method explanation: one environment image introduces the route, `Dentro RITO`
contains only three Studio-specific concepts (`Ambiente`, `Materiali`, `Cura`), and the former
`Prima della visita` section is reduced to a compact location/accessibility/conversion strip. The
final browser-QA correction ports the frozen START home-gallery rail, including its image order,
spacing, native mobile scroll, fade and arrow hint, while keeping the BUSINESS `/galleria` route and
lightbox unchanged. The final follow-up preserves one BUSINESS-only additive interaction: after the
true mobile rail end, a deliberate extra drag reveals progress and opens `/galleria` only on armed
release. BUSINESS PLUS remains excluded until the BUSINESS freeze is verified.

The end-of-rail BUSINESS shortcut uses the BW-DEC-057 cancellation clamp: after the deliberate
forward extra-drag engages, reverse movement during that same press may retract progress back to the
exact gesture origin and may disarm navigation, but it cannot scroll the underlying rail farther
backward until release/cancel. A new independent gesture restores normal native scrolling.

See `BW-DEC-049` through `BW-DEC-059` and `docs/START_BUSINESS_CONTRACT.md` for the exact gate and exclusions.

The final v1.3.5 candidate completed automated validation and project-owner browser QA on 7 September
2026. The exact cumulative reconciliation scope is 39 paths. Full diff review passed before staging.
The approved freeze identifier is the annotated tag `family-business-v1.0`, to be created only after
the single reconciliation PR is merged and the resulting `main` commit is verified. The tag metadata
then becomes the authoritative BUSINESS freeze record; no follow-up commit is required solely to
repeat the merge SHA.

## SEO and measurement boundary

BUSINESS includes a centralized route SEO inventory, social-image configuration,
appropriate structured-data capability and consent-aware tracking configuration. The
portfolio demo remains `noindex, follow`, keeps sitemap generation and analytics
disabled by default and performs no tracking request or cookie write before consent.

## Public authorship

The public-facing product is designed and developed by Tretnix. Internal production
tools are not presented as authors.
