# RITO Studio BUSINESS — Status

## Current final-freeze reconciliation — 6 September 2026

```text
TRETNIX_KNOWLEDGE_BASELINE=1cf7033b1634ea06d605ed853932c7c25b695d15
FINAL_START_TAG=family-start-v1.0
FINAL_START_FREEZE_SHA=74ee03c4d39a974872f94f53d14ec2873815ccf7
BUSINESS_MAIN_BASELINE=b6a82f918370f730681e9e0c0572a7a653d2dfeb
TARGET_BRANCH=feat/rito-business-final-freeze-reconciliation
BUSINESS_SPECIFIC_DECISIONS_PRESERVED
BOOKING_CHANNELS=WHATSAPP+PHONE
CONTACT_CHANNELS=EMAIL+PHONE
DIVIDER_REVEAL_CONTRACT=TRX-DEC-038
LEGAL_PAIR_CONTRACT=TRX-DEC-039
BUSINESS_PLUS_NOT_IN_SCOPE
```

This reconciliation uses the formally frozen START tag for new parity work while preserving the
existing BUSINESS product and its historical derivation. The application delta is limited to
shared interaction/parity surfaces; no route, dependency, backend, database, auth or BUSINESS PLUS
capability is added. Automated validation and browser QA are evidence gates and must be reported
only after they are actually executed.

**Updated:** 6 September 2026
**Project:** RITO Studio BUSINESS
**Family:** Tretnix Beauty & Wellness `v1.1`
**Repository:** `AdamDariOfficial/rito-studio-BUSINESS`
**Default branch:** `main`
**Historical multipage implementation base:** `9b7ff807f945f679216671577963fd713badb507`
**Canonical START baseline:** `family-start-v1.0` → `74ee03c4d39a974872f94f53d14ec2873815ccf7`
**Current BUSINESS source baseline:** `b6a82f918370f730681e9e0c0572a7a653d2dfeb`

## Current authoritative sources

- Tretnix Knowledge `main@1cf7033b1634ea06d605ed853932c7c25b695d15`;
- Tretnix Development Standards `v1.11`;
- Controlled Change Package `v1.1`;
- Beauty & Wellness family `v1.1`;
- frozen START `family-start-v1.0` → `74ee03c4d39a974872f94f53d14ec2873815ccf7`;
- BUSINESS `main@b6a82f918370f730681e9e0c0572a7a653d2dfeb`;
- project decisions through `BW-DEC-049`.

The sections below preserve historical bootstrap, implementation and prior parity evidence. Older
START SHAs, waived-tag records and feature-branch names inside those sections are not current parity
sources.

## Historical approved baseline state

```text
START_APPROVED
START_FREEZE_CONFIRMED_BY_USER
START_TAG_WAIVED_BY_USER
BUSINESS_AUTHORIZED
LOVABLE_REMIX_CREATED
GITHUB_REPOSITORY_CONNECTED
LOCAL_BUSINESS_CLONE_VERIFIED
REMIX_DIFF_VERIFIED_TWO_PATHS_ONLY
IDENTITY_DOCS_CONTENT_REVIEW_PASSED
IDENTITY_DOCS_EXACT_11_PATH_SCOPE_APPROVED
IDENTITY_DOCS_EXACT_STAGING_VERIFIED
IDENTITY_DOCS_APPLICATION_SCOPE_UNCHANGED
MULTIPAGE_IMPLEMENTATION_AUTHORIZED_LOCAL
IMPLEMENTATION_WRITER_CURSOR_CODEX
IMPLEMENTATION_BRANCH_FEAT_RITO_BUSINESS_MULTIPAGE
LOVABLE_PASSIVE_ONLY
LOVABLE_AGENT_PROMPT_CREDITS_NOT_AUTHORIZED
BUSINESS_PLUS_NOT_AUTHORIZED
```

## Historical verified remix state

```text
BUSINESS base HEAD: 222c331db44b1775aa2f877634f3a0f3dfdfbe69
origin/main:        222c331db44b1775aa2f877634f3a0f3dfdfbe69
working branch:     docs/rito-business-identity-bootstrap
canonical START:    f05d8683548623f55ca9d5cf0f051690b039dd27
remix ahead/behind: 2 / 0
```

The net remix difference from START is limited to:

```text
M bun.lock
M package.json
```

Lovable pinned `@lovable.dev/vite-tanstack-config` to `2.8.5` and updated the
corresponding lockfile entries. The identity/documentation work preserves that
remix-managed technical state.

## Historical sources used for the bootstrap

- Tretnix Repository Index `v1.6`;
- Tretnix Master Context `v1.5`;
- Tretnix Development Standards `v1.7`;
- Controlled Change Package `v1.1`;
- Beauty & Wellness family `v1.1`;
- canonical START at `f05d8683548623f55ca9d5cf0f051690b039dd27`;
- verified BUSINESS remix at `222c331db44b1775aa2f877634f3a0f3dfdfbe69`;
- user approvals and process exception recorded on 3 August 2026;
- `v1.1.2` apply/validation output and the first manual diff-review evidence;
- `v1.2.1` automated validation and UTF-8 second-review artifact;
- `v1.2.3` status-closure Apply/Validate output;
- exact staged-set verification report supplied on 4 August 2026;
- official Lovable GitHub integration and best-practices documentation retrieved on
  4 August 2026.

## Completed bootstrap evidence

The user executed `RITO_STUDIO_BUSINESS_IDENTITY_DOCS_BOOTSTRAP_CCP v1.1.2`.

```text
Apply: success
Validate: success
START source unchanged: yes
exact changed paths: 11
staged paths: 0
frozen install: passed
lint: passed
build: passed
git diff --check: passed
```

Browser QA was not run because the package changed documentation only. The build is a
regression check and does not prove browser behavior.

## First manual review findings

The first review confirmed the expected branch, base HEAD, zero staged paths and the
11-path status scope. It required correction before staging because:

- `git diff` did not include the two untracked BUSINESS files;
- root documentation contained task-transient status;
- the Lovable prompt lacked merge and synchronization preconditions;
- the external report was not a clean UTF-8 evidence artifact.

No implementation or dependency change was introduced by the bootstrap package.

## Second manual review findings

The UTF-8 `v1.2.1` report confirmed:

- exact BUSINESS branch and base HEAD;
- exact 11-path working-tree scope;
- zero staged paths;
- complete tracked patch and both complete untracked BUSINESS files;
- frozen install, lint, build and `git diff --check` exit `0`;
- canonical START unchanged.

Staging remained blocked because:

- the prompt simultaneously relied on Lovable as writer and prohibited commit/push
  semantics even though Lovable creates commits and synchronizes them to GitHub;
- approved BUSINESS requirements for social images, structured data, sitemap or route
  indexability inventory and consent-aware tracking were incomplete;
- Project Knowledge omitted `/journal/:slug` from the explicit route exclusions.

No application source, dependency or runtime-config change was introduced.

## Final v1.2.2 validation and review

The user applied and validated `v1.2.2` on 4 August 2026. Direct evidence records:

```text
START source unchanged: yes
BUSINESS base HEAD: 222c331db44b1775aa2f877634f3a0f3dfdfbe69
BUSINESS branch: docs/rito-business-identity-bootstrap
exact working paths: 11
corrected payload paths: 8
staged paths: 0
frozen install: passed
lint: passed
build: passed
git diff --check: passed
```

The final content review passed for product scope, Lovable branch/commit semantics,
route exclusions, SEO/social metadata, structured-data safeguards and consent-aware
tracking defaults. It confirmed no application source, dependency, lockfile or runtime
configuration change.

The remaining finding was that the status documents still described Apply, Validate
and review as pending. The user applied and validated `v1.2.3` as a four-path status
closure. It changed no product requirement, Project Knowledge, Lovable prompt or
application file.

## Exact staging verification

The user explicitly authorized the exact 11-path stage on 4 August 2026. A subsequent
read-only verification confirmed:

```text
branch: docs/rito-business-identity-bootstrap
HEAD: 222c331db44b1775aa2f877634f3a0f3dfdfbe69
origin/main: 222c331db44b1775aa2f877634f3a0f3dfdfbe69
exact staged paths and statuses: 11
unstaged paths: 0
untracked paths: 0
repository checksum manifest: passed
git diff --cached --check: passed
```

No commit, push, pull request, merge, Lovable execution, publication or deployment was
performed. A three-path status-only correction and controlled index reset were then
separately authorized so the repository does not encode transient index state. That
correction does not reopen the product or content review; it requires a fresh final
staged verification before commit because `CHECKSUMS.sha256`, `docs/APPROVAL.md` and
`docs/STATUS.md` change.

## Approved identity/documentation change set

Approved composition:

```text
M  AGENTS.md
M  CHECKSUMS.sha256
M  README.md
A  compiled/LOVABLE_BUSINESS_PROJECT_KNOWLEDGE.md
D  compiled/LOVABLE_START_PROJECT_KNOWLEDGE.md
M  docs/APPROVAL.md
M  docs/DECISIONS.md
M  docs/START_BUSINESS_CONTRACT.md
M  docs/STATUS.md
A  prompts/LOVABLE_BUSINESS_PROMPT.md
D  prompts/LOVABLE_START_PROMPT.md
```

Invariants:

- exactly seven modified documentation files, two BUSINESS additions and two START-only
  deletions;
- no source, route, component, style, asset, dependency, lockfile or runtime-config
  changes;
- parent HEAD remains `222c331db44b1775aa2f877634f3a0f3dfdfbe69` before the local
  documentation commit;
- the final staged set must match the composition above after any approved status-only
  correction;
- repository checksums and `git diff --cached --check` must pass before commit.

## Closure evidence

The identity/documentation content review and exact staged-scope review are complete.
Transient index state is deliberately kept out of the durable repository status. The
remaining operations are external Git release gates and do not change the approved
BUSINESS product scope.

## Current implementation authorization

The user authorized Cursor + Codex as the sole local writer for the complete BUSINESS
multipage pass on `feat/rito-business-multipage`, based on
`9b7ff807f945f679216671577963fd713badb507`.

Lovable remains passive for repository synchronization or optional preview only.
Project Knowledge is not required or updated, the Lovable Agent and prompt are not
authorized, and intentional Lovable credit use is prohibited. Concurrent writers are
forbidden.

The pass includes local documentation/source changes, validation, remediation and final
reporting. Stage, commit, push, pull request, merge, publication, deployment, domains and
infrastructure remain separate explicit gates.

## Targeted remediation after browser review

On 4 August 2026 the user authorized and Codex completed the local implementation of
`BW-DEC-044` from this exact preflight state:

```text
repository: AdamDariOfficial/rito-studio-BUSINESS
origin: https://github.com/AdamDariOfficial/rito-studio-BUSINESS.git
branch: feat/rito-business-multipage
HEAD: 49c7ced6118ecd8e719754f1f0ff5b3738031d47
origin/main: 9b7ff807f945f679216671577963fd713badb507
working tree and index: clean
remote feature branch: absent (live read-only verification)
concurrent writer evidence: none; no index lock or Git process
```

Implemented locally:

- compact four-category home treatment teaser;
- balanced lower spacing in the home Studio section;
- Team module and `/team` removed;
- booking form, booking adapter state and `/prenota` removed;
- all booking actions use the centralized telephone link;
- treatment records require only five base fields and support optional enrichment;
- treatment details use only meaningful optional editorial fields; catalogue metadata remains
  route-level;
- `/studio` philosophy/method content replaced by the high-contrast `Il modo RITO`
  editorial manifesto;
- public-facing internal language removed outside legal placeholders;
- route tree regenerated without Team or booking routes.

Validation evidence:

```text
bun install --frozen-lockfile: exit 0, no changes
bun run lint: exit 0, 0 errors, 6 existing Fast Refresh warnings
bun run build: exit 0
routeTree.gen.ts SHA-256 before/after final build: identical
Impeccable detector: 0 findings
browser QA: 390 px, 768 px and 1440 px completed
browser console errors: 0
horizontal overflow at tested widths: none
/team and /prenota: shared 404 confirmed
```

Browser evidence also confirmed the centralized `tel:+390490000000` target, mobile
drawer focus containment/return and scroll restoration, visible keyboard focus,
catalogue filtering, minimal and enriched detail records, direct URL, refresh,
Back/Forward and loaded reduced-motion safeguards.

No stage, commit, amend, push, pull request, merge, Lovable execution, publication or
deployment occurred. The local candidate status is
`TARGETED_REMEDIATION_READY_FOR_MANUAL_REVIEW`.

## Final UX, rhythm and interaction refinement

On 5 August 2026 the user authorized `BW-DEC-045` from this verified preflight:

```text
repository: AdamDariOfficial/rito-studio-BUSINESS
branch: feat/rito-business-multipage
HEAD: 49c7ced6118ecd8e719754f1f0ff5b3738031d47
origin/main: 9b7ff807f945f679216671577963fd713badb507
staged paths: 0
remote feature branch: absent
package.json and bun.lock drift: none
Git lock: none
```

The pass refines the existing local remediation without resetting or discarding it. It
adds the deliberate home spacing/color cadence, shared editorial arrow, query-driven
treatment dialog/sheet, compact rows, dynamic reveal observation, concise headings,
interaction feedback and step-based gallery gestures. `/trattamenti/:slug` is removed
from the active route inventory; `/team` and `/prenota` remain shared 404 routes.

Stage, amend, commit, push, pull request, merge, Lovable, publication and deployment
remain unauthorized.

Final implementation evidence:

```text
home rhythm: canvas hero → warm compact treatment teaser → canvas editorial → warm
Studio teaser → canvas gallery → warm FAQ → ink booking anchor → canvas practical info
treatment filters: 20 consecutive changes, 0 hidden rows at every step
query detail: valid direct URL, refresh, Back, Forward, Escape and exact focus return passed
invalid treatment query: inline recovery with usable filtered catalogue
gallery: ArrowRight, buttons, drag threshold, one-step swipe, vertical-drag tolerance,
Escape and exact focus return passed
responsive matrix: 390 px, 768 px and 1440 px; 0 overflow, 0 broken images,
one h1 per principal route, 0 enabled controls with incorrect pointer cursor
browser console warnings/errors: 0
visual evidence: retained outside the repository in the final UX review bundle
```

Automated final validation is recorded in the final pass report. No dependency or
lockfile change was introduced, the active route tree contains no treatment slug route,
and the local candidate status is `FINAL_UX_REFINEMENT_READY_FOR_MANUAL_REVIEW`.

## Navigation, sliders and treatment interaction technical pass

On 6 August 2026 the user authorized and Codex implemented `BW-DEC-046` on the
preserved local remediation at committed HEAD
`49c7ced6118ecd8e719754f1f0ff5b3738031d47`.

Implemented locally:

- Home is first in the centralized navigation with exact `/` active matching;
- treatment filters use one native horizontal row, real edge-state fades and local
  active-item visibility without vertical page scrolling;
- treatment rows retain transparent backgrounds and arrow-led feedback;
- treatment dialog query changes use `resetScroll: false`, one initial history entry,
  internal replace navigation, bounded controls, keyboard, swipe and derived recommendations;
- gallery and FAQ items reveal individually with capped stagger and filtered gallery
  refresh through the centralized reveal controller;
- gallery lightbox and home rail share a 44 × 44 px progress indicator with armed state;
- home rail hides vertical overflow and opens `/galleria` only after a deliberate
  additional end-of-rail gesture.

Direct DOM/runtime evidence without screenshots confirmed:

```text
navigation: Home first; exact active state; no collision at 1024, 1280 or 1440 px
mobile home: 360, 390 and 430 px; overflow-x auto, overflow-y hidden, page overflow 0
rail hint: 44 × 44 px, circular
filters: one row at 360, 390 and 430 px; real start/end state; 20 changes stable
dialog scroll delta: 0 px on open, Back and Forward
dialog history: two internal steps replaced; one Back closed the dialog
dialog input: compact buttons, ArrowLeft and swipe moved one treatment
recommendations: same-category derived list, current excluded, count 3
gallery drag: below threshold unchanged; vertical unchanged; armed release moved one step
home rail: ordinary end scroll and below-threshold drag stayed on `/`; armed drag opened `/galleria`
FAQ: individual reveal, capped 240 ms stagger, accordion animation preserved
console warnings/errors: 0
broken images: 0
horizontal page overflow: 0 at tested widths
```

Repository-defined automated validation passed after the source changes:

```text
bun install --frozen-lockfile: exit 0, no changes
bun run lint: exit 0, 0 errors, 6 pre-existing Fast Refresh warnings
bun run build: exit 0
```

No screenshot, binary or browser-QA artifact was created. No stage, commit, amend, push,
pull request, merge, Lovable execution, publication or deployment occurred. Final manifest,
diff and Git-state evidence is recorded by the final technical report for this pass.

## Aggiornamento premium actions + logo navigation — 8 agosto 2026

> Questa sezione è il riferimento corrente per questo pass e integra le sezioni
> storiche precedenti.

```text
SSR_RUNTIME_REMEDIATION_WORKING_CONFIRMED_BY_USER_BEFORE_THIS_PASS
PREMIUM_DARK_ACTIONS_IMPLEMENTED
LOGO_TOP_NAVIGATION_IMPLEMENTED
AUTOMATED_VALIDATION_PASSED
MANUAL_BUSINESS_REVIEW_APPROVED
FEATURE_COMMIT_5E0BA1A
PR_5_MERGED
CURRENT_MAIN_276FD8E
POST_MERGE_DEPLOY_NOT_REVERIFIED
```

Baseline e merge:

```text
pre-pass main:
f89198b0783a07e89c392862f9b560fb86db98bb

feature branch:
feat/rito-business-premium-actions-logo-nav

candidate:
5e0ba1acd51dfca0274768ed155224820e81b9d9

pull request:
#5 — feat(rito-business): refine actions and brand navigation

current main:
276fd8e2d985bc7ea37442546800d14236009705
```

La PR #5 è stata unita l'8 agosto 2026 alle `13:00:36Z`. Il diff è limitato a
`src/components/Footer.tsx`, `src/components/StickyHeader.tsx` e `src/styles.css`.

Evidenza automatica sul candidate:

```text
bun install --frozen-lockfile -> exit 0, no changes
bun run lint                 -> exit 0, 0 errors, 6 inherited Fast Refresh warnings
bun run build                -> exit 0, client + SSR + Nitro cloudflare-module
git diff --check             -> exit 0
changed paths                -> 3 exact
dependency drift             -> none
```

Prima della pubblicazione l'utente ha approvato manualmente la resa BUSINESS delle due
modifiche. Il sito BUSINESS era tornato funzionante dopo la remediation SSR precedente,
ma non è registrata una nuova verifica di produzione successiva al merge `276fd8e...`.
Non va quindi dichiarato che questo specifico merge sia già distribuito o verificato in
produzione.
## Browser QA corrective candidate — 6 settembre 2026

Il primo browser QA del candidate BW-DEC-049 ha rilevato quattro finding visuali/funzionali e una
richiesta di densità pagina: parità `odd/even` alterata nella griglia categorie, step metodo mancanti,
location non cliccabile e copy/icona CTA non uniformi. BW-DEC-050 autorizza la correzione e una
compattazione mirata del ritmo delle route.

Il candidate aggiornato deve essere rivalidato integralmente; i risultati del precedente
`VALIDATE PASSED` non certificano le nuove modifiche. Browser QA, staging, commit, push, PR, merge e
deploy restano da rieseguire/chiudere sul nuovo candidate.

## Browser QA follow-up — CTA navigation + Studio redesign — 6 settembre 2026

Il browser QA successivo al candidate BW-DEC-050 ha respinto due aspetti prima dello staging:

- iconografia/copy booking applicati in modo troppo uniforme a navbar e footer;
- `/studio` ancora troppo lunga rispetto alla quantità di informazione mostrata.

BW-DEC-051 definisce il nuovo candidate: navbar `Prenota` senza icona, footer booking senza icona e
redesign completo della route Studio in tre blocchi compatti. Il precedente `VALIDATE PASSED` resta
evidenza del candidate precedente ma non certifica queste nuove modifiche.

Staging, commit, push, PR, merge, deploy, migrazioni e Lovable restano non eseguiti finché il nuovo
candidate non supera validazione e browser QA.

## Browser QA follow-up — gerarchia `Il modo RITO` — 7 settembre 2026

Il candidate BW-DEC-051 ha superato Apply e Validate automatici tramite CCP v1.2.0, ma il browser QA
ha rilevato un ulteriore finding visuale prima dello staging:

- la descrizione della sezione `Il modo RITO` deve seguire il titolo invece di occupare una colonna
  laterale;
- la griglia 2 × 2 mobile dei quattro principi viene sostituita dal pattern step verticale già
  approvato nella home.

BW-DEC-052 definisce il candidate successivo. Il precedente `VALIDATE PASSED` certifica v1.2.0 ma
non certifica questa revisione. Il nuovo candidate deve ripetere lint/build/checksum/scope/whitespace
e browser QA prima dello staging. Nessun stage, commit, push, PR, merge, deploy, migrazione o
esecuzione Lovable è stato eseguito da questo follow-up.


## Browser QA follow-up — `/studio` density reduction — 7 settembre 2026

CCP v1.2.1 ha superato Apply e la validazione automatica sul branch corrente (frozen install, lint,
build, checksum, exact 38-path scope e whitespace), ma il browser QA ha respinto la densità visiva
della route `/studio` prima dello staging.

Finding confermato:

- la pagina è più corta ma comunica troppi concetti ravvicinati, soprattutto nel blocco dark;
- ripetere `Filosofia` e `Metodo` dopo il metodo home aumenta la densità senza aggiungere valore;
- la chiusura `Prima della visita` occupa una sezione autonoma per informazioni che possono vivere in
  una fascia utility più breve.

BW-DEC-053 definisce il candidate v1.3.0: tre concetti Studio-specifici (`Ambiente`, `Materiali`,
`Cura`) e utility strip finale. Il `VALIDATE PASSED` di v1.2.1 resta evidenza del candidate precedente
ma non certifica v1.3.0. Browser QA, staging, commit, push, PR, merge e deploy restano da chiudere sul
nuovo candidate.

## Final home-gallery parity candidate — 7 settembre 2026

Il candidate v1.3.0 ha superato Apply e Validate automatici (frozen install, lint, build, checksum,
exact 38-path scope e whitespace). Nel browser QA il project owner ha approvato la direzione finale
complessiva ma ha rilevato un ultimo finding sulla home: `GalleryRail` deve essere uguale al rail
frozen START invece di usare heading/link/extra-gesture BUSINESS.

BW-DEC-054 definisce il candidate successivo. Il nuovo candidate porta esclusivamente il rail home
alla struttura START, preservando `/galleria` e la lightbox BUSINESS.

```text
BUSINESS_SOURCE_MAIN=b6a82f918370f730681e9e0c0572a7a653d2dfeb
TARGET_BRANCH=feat/rito-business-final-freeze-reconciliation
START_PARITY_SOURCE=family-start-v1.0@74ee03c4d39a974872f94f53d14ec2873815ccf7
HOME_GALLERY_PARITY=START_REQUIRED
BUSINESS_FREEZE=AUTHORIZED_AFTER_FINAL_GATES
BUSINESS_PLUS=AUTHORIZED_AFTER_VERIFIED_BUSINESS_FREEZE
DEPLOY=NOT_AUTHORIZED_BY_THIS_PASS
```

Il freeze BUSINESS resta **non dichiarato** fino a merge e identificazione/verifica del target
frozen. Nessun risultato automatico precedente certifica il nuovo fix gallery: Apply, Validate e
browser QA vanno ripetuti.

## Final home-gallery gesture follow-up — 7 settembre 2026

CCP v1.3.1 ha superato Apply e Validate automatici sul branch corrente: frozen install, lint, build,
repository checksums, exact 38-path scope, payload/protected hashes e whitespace sono risultati PASS,
con zero staged path.

Nel browser review successivo il project owner ha confermato la direzione della gallery home ma ha
rilevato un solo comportamento rimosso rispetto al BUSINESS approvato: il drag deliberato oltre il
vero bordo finale non apre più `/galleria`.

BW-DEC-055 definisce il candidate finale successivo: preservare integralmente la resa START del rail
a riposo e reintrodurre esclusivamente il gesto finale thresholded come shortcut BUSINESS. Il
`VALIDATE PASSED` di v1.3.1 resta evidenza del candidate precedente e non certifica questa modifica.

```text
BUSINESS_SOURCE_MAIN=b6a82f918370f730681e9e0c0572a7a653d2dfeb
TARGET_BRANCH=feat/rito-business-final-freeze-reconciliation
START_VISUAL_PARITY=REQUIRED
BUSINESS_END_DRAG_TO_GALLERY=REQUIRED
BUSINESS_FREEZE=AUTHORIZED_AFTER_FINAL_GATES
BUSINESS_PLUS=AUTHORIZED_AFTER_VERIFIED_BUSINESS_FREEZE
DEPLOY=NOT_AUTHORIZED_BY_THIS_PASS
```

Apply/Validate e browser QA devono essere ripetuti prima di full diff review e staging. BUSINESS non
è ancora dichiarato frozen.


## Browser QA follow-up — end-drag reverse lock — 7 settembre 2026

CCP v1.3.2 ha superato Apply e Validate automatici sul branch
`feat/rito-business-final-freeze-reconciliation`: frozen install, lint, production build,
repository checksums, exact 38-path scope, payload/protected hashes e whitespace sono risultati PASS
con zero staged path.

Nel browser QA successivo il project owner ha verificato il ritorno del drag finale verso
`/galleria` e ha segnalato un solo bug: mantenendo la stessa pressione dopo aver iniziato il gesto
extra era possibile invertire direzione e far tornare indietro rail/progresso.

BW-DEC-056 definisce il candidate v1.3.3: lock monotono del gesto già impegnato fino a release/cancel,
senza modificare la composizione visuale START-equivalent né la route `/galleria`.

```text
BUSINESS_SOURCE_MAIN=b6a82f918370f730681e9e0c0572a7a653d2dfeb
TARGET_BRANCH=feat/rito-business-final-freeze-reconciliation
V1_3_2_APPLY_VALIDATE=PASSED
V1_3_2_BROWSER_QA=FOLLOW_UP_REQUIRED
V1_3_3_END_GESTURE_MONOTONIC_LOCK=REQUIRED
STAGED_PATHS=0
BUSINESS_FREEZE=NOT_YET_DECLARED
BUSINESS_PLUS=AFTER_VERIFIED_BUSINESS_FREEZE
DEPLOY=NOT_AUTHORIZED
```

Il `VALIDATE PASSED` v1.3.2 non certifica il nuovo fix. v1.3.3 deve ripetere Apply/Validate e browser
QA prima di full diff review e staging.


## Browser QA follow-up — cancellazione fino all'origine — 7 settembre 2026

CCP v1.3.3 ha superato Apply e Validate automatici sul branch
`feat/rito-business-final-freeze-reconciliation`: frozen install, lint, production build, repository
checksums, exact 38-path scope, payload/protected hashes e whitespace sono risultati PASS con zero
staged path.

Nel browser QA successivo il project owner ha confermato che il rail non torna più indietro durante la
stessa pressione, ma ha richiesto una semantica di annullamento più naturale: il reverse deve poter
retrarre il gesto sintetico fino al punto di partenza, senza mai oltrepassarlo e senza muovere il rail
reale all'indietro. Tornare sotto soglia deve disarmare la navigazione.

BW-DEC-057 definisce il candidate successivo e sostituisce il lock monotono di BW-DEC-056 con un clamp
reversibile all'origine. Il log browser ha inoltre mostrato spam `touchmove cancelable=false`; il fix
deve evitare `preventDefault()` sui move non cancellabili e acquisire prima l'intento outward.

```text
BUSINESS_SOURCE_MAIN=b6a82f918370f730681e9e0c0572a7a653d2dfeb
TARGET_BRANCH=feat/rito-business-final-freeze-reconciliation
V1_3_3_APPLY_VALIDATE=PASSED
V1_3_3_BROWSER_QA=FOLLOW_UP_REQUIRED
V1_3_4_END_GESTURE_CANCEL_CLAMP=REQUIRED
STAGED_PATHS=0
BUSINESS_FREEZE=NOT_YET_DECLARED
BUSINESS_PLUS=AFTER_VERIFIED_BUSINESS_FREEZE
DEPLOY=NOT_AUTHORIZED
```

Il nuovo candidate deve ripetere Apply/Validate e browser QA prima di full diff review e staging.

## Browser QA follow-up — rail categorie mobile ai bordi — 7 settembre 2026

CCP v1.3.4 ha superato Apply e Validate automatici sul branch
`feat/rito-business-final-freeze-reconciliation`: frozen install, lint, production build, repository
checksums, exact 38-path scope, payload/protected hashes e whitespace sono risultati PASS con zero
staged path.

Nel browser QA successivo il project owner ha rilevato un ultimo finding visuale sui filtri
orizzontali: il rail categorie mostra un gutter esterno ai bordi viewport. L'audit del codice ha
confermato il root cause nel compenso `-mx-1` / `px-1` applicato dentro `container-editorial` da 20 px
e ha rilevato lo stesso pattern sia in `/galleria` sia in `/trattamenti`.

BW-DEC-058 definisce il candidate successivo: rendere full-bleed la superficie mobile dei due rail,
mantenendo i controlli allineati all'inset editoriale e preservando ogni comportamento di filtro,
query/history e lightbox. `src/components/GalleryExplorer.tsx` entra quindi nell'allowlist cumulativa
solo per questa correzione; lo scope finale passa da 38 a 39 path.

```text
BUSINESS_SOURCE_MAIN=b6a82f918370f730681e9e0c0572a7a653d2dfeb
TARGET_BRANCH=feat/rito-business-final-freeze-reconciliation
V1_3_4_APPLY_VALIDATE=PASSED
V1_3_4_BROWSER_QA=FOLLOW_UP_REQUIRED
V1_3_5_CATEGORY_RAIL_EDGE_FIX=REQUIRED
CUMULATIVE_SCOPE=39_PATHS
STAGED_PATHS=0
BUSINESS_FREEZE=NOT_YET_DECLARED
BUSINESS_PLUS=AFTER_VERIFIED_BUSINESS_FREEZE
DEPLOY=NOT_AUTHORIZED
```

Il nuovo candidate deve ripetere Apply/Validate e browser QA sui due rail prima di full diff review,
staging e freeze.

## Final freeze candidate accepted — 7 settembre 2026

Il candidate cumulativo v1.3.5 ha completato i gate pre-stage richiesti.

```text
BUSINESS_SOURCE_MAIN=b6a82f918370f730681e9e0c0572a7a653d2dfeb
TARGET_BRANCH=feat/rito-business-final-freeze-reconciliation
START_PARITY_SOURCE=family-start-v1.0@74ee03c4d39a974872f94f53d14ec2873815ccf7
CCP=Tretnix-RITO-BUSINESS-Final-Freeze-Reconciliation-CCP-v1.3.5
CUMULATIVE_SCOPE=39_PATHS
AUTOMATED_VALIDATE=PASSED
BROWSER_QA_V1_3_5=PASSED_BY_PROJECT_OWNER
FULL_DIFF_REVIEW=PASSED
STAGED_PATHS=0_AT_PRE_STAGE_GATE
BUSINESS_FREEZE=AUTHORIZED_PENDING_GIT_CLOSURE
PLANNED_FREEZE_TAG=family-business-v1.0
BUSINESS_PLUS=AFTER_VERIFIED_FREEZE_TAG
DEPLOY=NOT_PERFORMED
```

Automated evidence reported by the canonical Windows run:

```text
bun install --frozen-lockfile -> PASSED
typecheck                    -> NOT AVAILABLE
bun run lint                 -> PASSED
tests                        -> NOT AVAILABLE
bun run build                -> PASSED
repository checksums         -> PASSED
exact 39-path scope          -> PASSED
payload/protected hashes     -> PASSED
whitespace                   -> PASSED
staged paths                 -> 0
```

The project owner then confirmed the final browser gate as PASS after the BW-DEC-058 category-rail
fix, including the requested mobile edge behavior and the retained end-of-home-gallery gesture. No
new browser finding remains open in the accepted candidate.

The full diff review found no blocking scope, architecture, dependency, route, conversion, motion or
documentation regression. The reconciliation is therefore ready for one exact stage + staged
validation + commit/push/PR/merge sequence under BW-DEC-059.

BUSINESS is **not yet declared frozen in this file** because the authoritative target SHA does not
exist until the PR is merged. After merge, local/remote `main` must be verified and the annotated tag
`family-business-v1.0` must point exactly to that SHA. Successful tag verification completes the
freeze without requiring a post-freeze documentation commit.
