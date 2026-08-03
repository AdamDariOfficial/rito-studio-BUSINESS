# Lovable Prompt — RITO Studio BUSINESS

> **HARD PRECONDITION — DO NOT RUN EARLY**
>
> Run this prompt only after direct verification that:
>
> 1. the BUSINESS identity/documentation change is reviewed and merged into `main`;
> 2. local `main` equals `origin/main` and the working tree is clean;
> 3. the connected Lovable project has synchronized the merged documentation;
> 4. Lovable Project Knowledge has been updated from the merged
>    `compiled/LOVABLE_BUSINESS_PROJECT_KNOWLEDGE.md`;
> 5. the correct Lovable workspace/project is identified;
> 6. inside Lovable, switch from synchronized `main` to
>    `feat/rito-business-multipage`, creating it from that exact merged baseline;
> 7. record the implementation branch base commit and confirm that no other writer is
>    editing overlapping files;
> 8. the user explicitly authorizes this multipage implementation pass and intentional
>    credit use.
>
> The authorized pass includes Lovable's automatic commits and GitHub synchronization
> only on `feat/rito-business-multipage`. Do not implement directly on `main`. Stop and
> report any missing gate or unexpected branch state. This prompt does not authorize a
> pull request, merge, publication, deployment, domains or infrastructure changes.

## Context

RITO Studio BUSINESS is the multipage evolution of the approved and frozen
RITO Studio START project.

Canonical START source:

```text
repository: AdamDariOfficial/rito-studio-START
commit SHA: 439efff0f14315310b9149cde0283633696a0eb0
tag: waived by explicit user decision
production reference: https://rito-studio.tretnix.com/
```

Read `AGENTS.md` and every relevant document in `docs/` before modifying files.
The canonical START implementation is the visual and behavioral source of truth.
The original Lovable remix baseline is
`222c331db44b1775aa2f877634f3a0f3dfdfbe69`. The implementation branch must descend
from the later merged identity/documentation commit on `main`; verify and report that
commit SHA before editing application source.

## Objective

Expand the canonical START implementation into a coherent multipage Beauty &
Wellness BUSINESS website with treatment discovery, treatment details, studio,
team, gallery, FAQ, contact and configurable booking.

Do not redesign the family. Add depth, routes and content while preserving the
approved START language.

## Preserve exactly unless a documented technical correction is required

- palette and accent `#6A3F4B`;
- Newsreader and Manrope;
- type scale;
- spacing rhythm;
- image treatment;
- button shapes and states;
- navbar and mobile drawer personality;
- footer;
- hero personality;
- motion tokens;
- reveal and hover behavior;
- reduced motion;
- tone;
- mobile editorial order;
- Tretnix attribution.

Do not add glassmorphism, gradient text, generic pills, SaaS card grids, custom
cursor, heavy parallax or a new visual theme.

## Required routes

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

Do not add:

```text
/journal
/journal/:slug
/gift-card
/account
/admin
```

## Route responsibilities

### `/`

Keep the approved START identity and evolve the home into a BUSINESS overview with:

- positioning;
- key treatment categories;
- method;
- team teaser;
- gallery teaser;
- booking CTA;
- practical information.

Avoid duplicating every full detail page on the home.

### `/trattamenti`

Provide the complete treatment catalog with:

- category grouping or filtering;
- duration;
- price label;
- short description;
- links to detail routes;
- optional search only when justified by catalog size.

Do not turn the catalog into a repetitive generic SaaS card grid.

### `/trattamenti/:slug`

Include:

- treatment name and category;
- full description;
- duration and price label;
- ideal-for guidance;
- what is included;
- preparation;
- aftercare;
- a carefully qualified contraindications note when approved;
- booking CTA;
- related services;
- route metadata.

Unknown slugs must produce the intended 404 behavior.

### `/studio`

Include philosophy, environment, method, products, hygiene, accessibility and an
editorial gallery.

### `/team`

Include fictional demo profiles without invented professional credentials,
certifications or claims. Connect team members only to relevant services.

### `/galleria`

Create a complete categorized gallery and accessible lightbox:

- keyboard controls;
- Escape;
- focus containment and return;
- stable image dimensions;
- mobile `100dvh`;
- no autoplay.

### `/prenota`

Implement one configured booking adapter:

```text
external
whatsapp
request
demo
```

For this portfolio pass, default to `demo` unless the current approved task explicitly
selects another mode.

Demo mode must not transmit or persist data. `request` is a request to be confirmed,
not live availability.

### `/faq`

Use an accessible accordion with documented open-panel behavior and no invasive
auto-scroll.

### `/contatti`

Include practical information, hours, channels, general location, accessibility,
appointment policy and booking CTA. Preserve the on-demand map privacy pattern when
used.

### Legal routes and 404

Preserve real `/privacy`, `/cookie` and 404 routes. Legal copy remains demonstrative
and requires client-specific review before any real launch.

## Content and data architecture

Use centralized typed data for:

- site identity;
- navigation;
- treatment categories;
- treatments;
- team;
- gallery;
- FAQ;
- contact and hours;
- booking adapter;
- route metadata.

Treatment records should support:

```text
name
slug
category
shortDescription
fullDescription
duration
priceLabel
idealFor
includes
beforeAppointment
afterAppointment
contraindicationsNote
bookingMode
relatedServices
seoTitle
seoDescription
```

Reuse approved START fixtures only where they remain intentional. Do not invent
reviews, ratings, awards, credentials, medical claims or unapproved commercial facts.

## Navigation and history

- New routes open at the top immediately.
- Never use smooth scroll for route reset.
- Preserve direct URL and refresh.
- Preserve Back and Forward.
- Same-page anchors may use controlled scrolling.
- Mobile route selection closes the drawer and restores normal body scrolling.
- Do not force route resets that destroy expected history restoration.

## Motion

Use the approved tokens and perceived behavior from START and `docs/ANIMATIONS.md`.

- Hero motion remains calm.
- Below-the-fold reveals begin on viewport entry.
- Content may never remain hidden.
- Use opacity and transform.
- Respect `prefers-reduced-motion`.
- FAQ, lightbox and route transitions remain functional without animation.
- No autoplay, marquee, counter or decorative infinite motion.

## Responsive

Mobile-first. Verify the design at:

```text
360px
390px
430px
768px
1024px
1440px
```

Requirements:

- no unintended horizontal overflow;
- no clipped content;
- adequate touch targets;
- text precedes images in editorial mobile sections;
- no duplicated markup solely for responsive order;
- images preserve declared ratios;
- sticky/fixed UI never covers content;
- safe Italian text wrapping.

## Accessibility

Target practical WCAG 2.2 AA for relevant flows.

Required:

- one main `h1` per page;
- correct heading hierarchy;
- semantic landmarks;
- visible focus;
- logical focus order;
- keyboard access to all controls;
- labelled inputs and controls;
- adequate contrast;
- meaningful alt text or empty alt for decorative images;
- usable 200% reflow;
- accessible drawer, accordion, gallery/lightbox and booking states;
- content visible under reduced motion.

## SEO, structured data, social previews and consent-aware tracking

Every public route must use:

```text
noindex, follow
```

Create a centralized typed route SEO inventory with:

- title;
- description;
- canonical;
- Open Graph metadata;
- social image and declared dimensions;
- indexability;
- structured-data mode.

Use a local default social image and allow explicit per-route overrides. Preserve a
complete route/indexability inventory. Keep sitemap generation disabled for the
portfolio demo; it may be enabled only by a later approved real-client launch task.

Provide configurable structured-data support, disabled by default in demo mode. After
explicit review, only accurate non-commercial schemas such as `WebSite`, `WebPage` or
`BreadcrumbList` may be enabled. Never emit fictional commercial data including
`LocalBusiness`, `Service`, `Offer`, real address or geo, commercial opening-hours,
person credentials, reviews, ratings, reservations or aggregate ratings.

Create centralized tracking configuration with the portfolio defaults:

```text
enabled: false
consentRequired: true
provider: none
```

Do not load an analytics script, make a tracking request, set an analytics cookie or
create a tracking identifier before valid consent. When no provider is approved,
tracking must remain completely disabled. Do not add a consent platform dependency
unless an approved requirement makes it necessary.

Do not mention Lovable, ChatGPT, Codex, Impeccable or other internal tools in public
UI or metadata.

## Explicit exclusions

Do not:

- begin RITO Studio BUSINESS PLUS;
- implement `/journal`, `/journal/:slug`, gift cards, account or admin routes;
- add live availability or bidirectional calendar sync;
- add payments or deposits;
- add client accounts or appointment history;
- add packages, fidelity, CRM or management features;
- add Supabase, database, migrations, authentication or server functions;
- transmit or persist personal data in demo mode;
- use real business or customer data;
- update dependencies without a concrete requirement;
- publish or deploy;
- connect a domain;
- modify production infrastructure;
- perform unrelated cleanup or global formatting.

## Acceptance criteria

1. With logo and name hidden, BUSINESS clearly belongs to the approved START family.
2. BUSINESS adds information architecture, not decorative noise.
3. The approved visual identity and perceived motion are preserved.
4. Every treatment is discoverable and has a valid detail route.
5. Unknown treatment slugs and unknown paths produce the intended 404.
6. The configured booking adapter behaves honestly.
7. Demo mode transmits and persists no data.
8. All direct URLs, refresh, Back and Forward behavior work.
9. Route changes start at the top without smooth scrolling.
10. Mobile 360, 390 and 430 px have no overflow, overlap or clipped content.
11. Tablet and desktop layouts preserve editorial rhythm.
12. Drawer, FAQ, lightbox and booking interactions work by keyboard.
13. Reduced motion leaves every route fully usable.
14. No fake proof, medical claims or real-business implication is introduced.
15. No BUSINESS PLUS scope is present.
16. The production build passes using existing repository scripts.
17. Every route has complete SEO, social-image and indexability configuration.
18. No fictional commercial structured data is emitted.
19. Sitemap and analytics remain disabled by default in the portfolio demo.
20. No tracking request, cookie or identifier exists before valid consent.
21. The final report lists changed files, commands, exit codes, browser checks and
    missing evidence.

## Required output

Return:

1. verified implementation branch and base commit;
2. concise implementation summary;
3. exact changed files;
4. decisions or assumptions made;
5. automatic Lovable commits created on the approved branch;
6. commands executed with exit codes;
7. browser checks actually performed;
8. SEO, structured-data, sitemap and tracking defaults implemented;
9. remaining risks and missing evidence;
10. confirmation that no direct `main` work, PR, merge, publish, deploy, migration or
    unrelated change occurred.
