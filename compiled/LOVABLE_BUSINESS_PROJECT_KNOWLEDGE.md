# RITO Studio BUSINESS — Lovable Project Knowledge

## Project identity

Project: `RITO Studio BUSINESS`
Family: Tretnix Beauty & Wellness v1.1
Plan: BUSINESS only
Concept status: fictional portfolio demo, not a real business

Canonical START source:

```text
repository: AdamDariOfficial/rito-studio-START
commit: 439efff0f14315310b9149cde0283633696a0eb0
tag: waived by explicit user decision
```

RITO Studio is a demonstrative Beauty & Care Atelier in Padova with the tagline:

> La bellezza, nel suo ritmo.

The website must feel airy, tactile, elegant, contemporary, intimate and precise.
It must not look like a SaaS site, generic AI template, stereotypically pink beauty
template, medical clinic or Hospitality reskin.

Public-facing work is designed and developed by Tretnix. Never mention internal tools
as authors.

## Execution gate

This file is the versioned source for Lovable Project Knowledge. Its presence does not
authorize execution.

Do not modify application source or intentionally consume implementation credits until
all of the following are directly verified:

1. the identity/documentation change is reviewed and merged into BUSINESS `main`;
2. local `main` equals `origin/main` and the working tree is clean;
3. the merged documentation is visible in the connected Lovable project;
4. this Project Knowledge has been updated from the merged versioned file;
5. Lovable is switched to `feat/rito-business-multipage`, created from the merged
   documentation baseline rather than from an earlier remix commit;
6. the implementation branch base commit is recorded and no other writer is editing
   overlapping files;
7. the user explicitly authorizes the BUSINESS implementation pass and credit use.

The authorized pass includes Lovable's automatic commits and GitHub synchronization
only on the approved implementation branch. Do not work directly on `main`. Pull
request, merge, publication, deployment, domains and infrastructure require separate
authorization.

## Canonical references

Read and follow:

```text
AGENTS.md
docs/PRODUCT.md
docs/DESIGN.md
docs/CONTENT.md
docs/ROUTES.md
docs/ANIMATIONS.md
docs/TESTING.md
docs/DECISIONS.md
docs/ASSET_PLAN.md
docs/STATUS.md
docs/APPROVAL.md
docs/START_BUSINESS_CONTRACT.md
```

The approved START implementation is the visual and behavioral source of truth. The
verified BUSINESS remix baseline is `222c331db44b1775aa2f877634f3a0f3dfdfbe69`;
its only pre-documentation delta is the Lovable-managed `package.json`/`bun.lock`
update. Implementation work must descend from the later merged documentation baseline,
not directly from the remix commit.

## BUSINESS objective

Expand START into a coherent multipage Beauty & Wellness website with:

- treatment discovery;
- treatment detail pages;
- studio;
- team;
- gallery;
- FAQ;
- contact;
- configurable booking;
- route-specific metadata;
- comparative START ↔ BUSINESS QA.

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

Do not add `/journal`, `/journal/:slug`, `/gift-card`, `/account` or `/admin` in BUSINESS v1.

## Preserve from START

Preserve unless an approved technical correction requires a minimal change:

- palette and accent `#6A3F4B`;
- Newsreader and Manrope;
- type scale and spacing rhythm;
- image treatment;
- button shapes and states;
- navbar and mobile drawer language;
- footer and Tretnix attribution;
- hero personality;
- motion tokens, reveals and hover behavior;
- reduced motion;
- tone and Italian copy style;
- mobile editorial order;
- demo integrity.

BUSINESS adds depth and route architecture. It is not a visual redesign.

## Structured data model

Centralize and type:

- treatment categories;
- treatments;
- team members;
- gallery items and categories;
- FAQs;
- contact and hours;
- booking mode;
- route metadata.

Treatment detail records should support:

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

Do not invent medical claims, certifications, reviews or unapproved prices.

## Booking adapter

Supported modes:

```text
external
whatsapp
request
demo
```

For the portfolio implementation, use `demo` unless the approved implementation task
explicitly selects another mode.

`request` means a request to be confirmed, not live availability. No form may transmit
or persist personal data in demo mode.

## Required route behavior

- New routes start at the top immediately.
- Do not use smooth route reset.
- Direct URL and refresh work.
- Back and Forward work.
- Unknown treatment slugs produce an appropriate 404.
- Focus behavior remains accessible.
- Below-the-fold reveals begin in the viewport.
- Reduced motion leaves all content visible and usable.

## Gallery and lightbox

- categories may include Studio, Hair, Skin, Hands and Rituals;
- keyboard navigation;
- Escape close;
- focus containment and return;
- mobile `100dvh`;
- declared stable image dimensions;
- no autoplay;
- no content-obscuring persistent controls.

## Responsive and accessibility

Verify at least:

```text
360px
390px
430px
768px
desktop
```

Requirements:

- no unintended horizontal overflow;
- no clipped text or images;
- adequate touch targets;
- text before images in editorial mobile sections;
- no sticky UI covering content;
- one main `h1` per page;
- correct heading hierarchy;
- semantic landmarks;
- visible `focus-visible`;
- keyboard access to every interaction;
- meaningful alt text or empty alt for decorative images;
- usable 200% reflow;
- accessible drawer, accordion, booking states and lightbox;
- content visible under reduced motion.

## SEO, structured data and consent-aware measurement

Every public portfolio route remains:

```text
noindex, follow
```

Centralize a typed route SEO inventory containing:

```text
title
description
canonical
openGraph
socialImage
indexability
structuredDataMode
```

Requirements:

- use a local default social image with declared dimensions and allow route overrides;
- keep sitemap generation disabled in the portfolio demo, while preserving a complete
  route/indexability inventory that can generate a sitemap only after an approved
  real-client launch enables indexing;
- provide configurable structured-data support, disabled by default in the demo;
- allow only accurate reviewed non-commercial schemas such as `WebSite`, `WebPage` or
  `BreadcrumbList` when appropriate;
- never emit fictional `LocalBusiness`, `Service`, `Offer`, address, geo,
  opening-hours, person credentials, review, rating, reservation or aggregate-rating
  data;
- centralize tracking configuration with `enabled: false` and
  `consentRequired: true` by default;
- make no analytics request, set no analytics cookie and create no tracking identifier
  before valid consent;
- keep tracking disabled entirely when no approved provider/configuration exists.

## Explicit exclusions

Do not:

- begin BUSINESS PLUS;
- add live slots or calendar synchronization;
- add payments, deposits, client accounts or appointment history;
- add packages, gift cards or fidelity;
- add CRM, admin, inventory, staff management or accounting;
- add Supabase, database, migrations, authentication or server functions;
- transmit or persist personal data in the portfolio demo;
- use real client or customer data;
- add dependencies without a concrete documented need;
- alter the approved visual family;
- copy Hospitality identity;
- publish, deploy or connect a domain without explicit authorization.

## Acceptance criteria

1. BUSINESS is recognizable as the same family as START with logo and name hidden.
2. BUSINESS adds information architecture rather than decorative noise.
3. Every treatment is discoverable and has a valid detail route.
4. Booking behavior is honest and matches the configured adapter.
5. Demo mode adds no backend and transmits no data.
6. All public routes, refresh, direct URLs, Back and Forward work.
7. Unknown paths and treatment slugs produce correct 404 behavior.
8. Mobile 360 px has no overflow or clipped content.
9. Keyboard and focus behavior work across drawer, FAQ, gallery and booking.
10. Reduced motion leaves the entire site usable.
11. No fake proof, medical claims or real-business implication is introduced.
12. BUSINESS PLUS remains absent.
13. Every route has complete SEO/social-image metadata and explicit indexability.
14. The demo emits no fictional commercial schema and no tracking occurs before consent.
15. Sitemap and analytics remain disabled by default in the portfolio demo.
