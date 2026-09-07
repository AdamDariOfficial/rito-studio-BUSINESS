# RITO Studio BUSINESS — Authorization and Baseline Record

**Updated:** 6 September 2026
**Status:** `BUSINESS_FINAL_FREEZE_RECONCILIATION_AUTHORIZED`
**Repository:** `AdamDariOfficial/rito-studio-BUSINESS`
**Default branch:** `main`
**Remix baseline:** `222c331db44b1775aa2f877634f3a0f3dfdfbe69`

## Purpose

This document records the historical derivation evidence, the current frozen START source and the
approved reconciliation boundary for RITO Studio BUSINESS. It does not authorize stage, commit,
push, pull request, merge, publication or deployment unless a later gate explicitly does so.

## Historical START derivation baseline

```text
repository: AdamDariOfficial/rito-studio-START
merge commit: 439efff0f14315310b9149cde0283633696a0eb0
implementation merge parent: fb0aee1773c6331d1c4dc8e4b702fabf7196a1d2
documentation candidate parent: db861c0755af84de5b73573613226623c3c8a8ca
production origin: https://rito-studio.tretnix.com/
```

Confirmed evidence:

- PR #5 implementation merge completed;
- deployment confirmed by the user;
- automated production-origin QA v1.0.3 passed;
- production browser checklist confirmed by the user;
- PR #6 documentation merge completed;
- local `main` and `origin/main` synchronized to the canonical merge commit;
- exact six-path documentation merge verified;
- working tree clean at the final START synchronization checkpoint.

Evidence limits remain:

- no hosting-provider cryptographic attestation of the deployed Git SHA;
- browser, operating system and exact timestamp of the production checklist were not
  recorded;
- six inherited Fast Refresh warnings remain with zero ESLint errors;
- no separate screen-reader speech-output recording exists.

## Approval and freeze decision

The user explicitly approved RITO Studio START and authorized its freeze on
`439efff0f14315310b9149cde0283633696a0eb0`.

The user then explicitly waived the annotated-tag step. The exact 40-character SHA is
the authoritative START identifier for BUSINESS derivation.

```text
START approval: CONFIRMED
START freeze: CONFIRMED_BY_EXPLICIT_USER_DECISION
START tag: WAIVED_BY_USER
canonical START identifier: 439efff0f14315310b9149cde0283633696a0eb0
```

## Lovable remix and GitHub evidence

```text
BUSINESS repository: AdamDariOfficial/rito-studio-BUSINESS
BUSINESS main/origin-main: 222c331db44b1775aa2f877634f3a0f3dfdfbe69
local clone: verified clean on main
commit distance from START: 2 commits ahead, 0 behind
net changed paths from START: bun.lock, package.json
```

The two Lovable-managed commits are:

```text
8c36b991d7ade3d8647d8a3232a9c40143f827c0  Work in progress
222c331db44b1775aa2f877634f3a0f3dfdfbe69  Opened preview to guide next
```

Their net content change updates `@lovable.dev/vite-tanstack-config` from `^2.7.7`
to pinned `2.8.5` and the corresponding lockfile entries. No application route,
component, style, asset or content file differs from the approved START source.

## BUSINESS authorization

The user explicitly authorized RITO Studio BUSINESS and then authorized the identity
and documentation bootstrap before multipage implementation.

Authorized product direction:

- use the Lovable-remixed BUSINESS project and connected GitHub repository;
- preserve the canonical START identity and technical behavior;
- prepare the approved multipage route and content architecture;
- keep BUSINESS PLUS, backend, database, authentication and production changes out of
  scope unless separately authorized.

## Identity/documentation bootstrap evidence

Controlled package `v1.1.2` was applied and validated on
`docs/rito-business-identity-bootstrap` from the exact remix baseline.

Confirmed automated evidence reported by the user:

```text
exact working-tree paths: 11
staged paths: 0
bun install --frozen-lockfile: passed
bun run lint: passed
bun run build: passed
git diff --check: passed
canonical START unchanged: yes
```

The first manual diff review was completed and did not authorize staging. It found:

1. the generated report omitted the full content of the two untracked BUSINESS files;
2. several root documents used task-transient state that would become stale after the
   next gate;
3. the implementation prompt did not require the documentation merge, local/remote
   synchronization and Lovable synchronization before execution;
4. the external review report used mixed console encoding and was unsuitable as final
   evidence.

No application source, route, component, style, asset, dependency or runtime
configuration change was found in the bootstrap scope.

## Second manual-review outcome

Correction payload `v1.2.0` was applied, and the PowerShell-compatible validator
`v1.2.1` completed successfully. The UTF-8 report confirmed the exact 11-path scope,
zero staged paths, complete untracked BUSINESS files, unchanged START and successful
frozen install, lint, build and `git diff --check`.

The second manual review still withheld staging because:

1. the Lovable prompt prohibited commit/push semantics while Lovable necessarily
   creates commits and synchronizes changes to GitHub;
2. the approved BUSINESS scope for advanced SEO, social-image configuration,
   appropriate structured data and consent-aware tracking was incomplete;
3. the Project Knowledge omitted the explicit `/journal/:slug` exclusion.

## Final identity/documentation review outcome

The user applied and validated
`RITO_STUDIO_BUSINESS_IDENTITY_DOCS_BOOTSTRAP_CCP v1.2.2` on 4 August 2026.
The generated UTF-8 report confirmed:

```text
canonical START unchanged: yes
BUSINESS base HEAD: 222c331db44b1775aa2f877634f3a0f3dfdfbe69
working branch: docs/rito-business-identity-bootstrap
exact working-tree paths: 11
staged paths: 0
bun install --frozen-lockfile: passed
bun run lint: passed
bun run build: passed
git diff --check: passed
```

The final content review confirmed that `v1.2.2` resolved the remaining product and
workflow findings:

- the future Lovable implementation uses `feat/rito-business-multipage` created from
  the merged documentation baseline;
- Lovable automatic commits are limited to that branch and a separately authorized
  implementation pass;
- direct implementation on `main`, PR, merge, publication and deploy remain blocked;
- route SEO, social-image, indexability, safe structured-data and consent-aware
  tracking requirements are complete for BUSINESS;
- `/journal/:slug` is explicitly excluded with the other future routes;
- no application source, component, style, asset, dependency, lockfile or runtime
  configuration was changed.

The user then applied and validated the four-path `v1.2.3` status closure. Direct
evidence confirmed the same BUSINESS and START baselines, the exact 11-path scope,
zero staged paths, successful frozen install, lint, build and `git diff --check`, and no
application or dependency change.

## Exact staging evidence

On 4 August 2026 the user explicitly authorized staging of the exact 11-path
identity/documentation candidate. The staging operation was followed by an independent
read-only verification after the first inline helper failed to load because of a
PowerShell parser error.

The successful verification confirmed:

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

Verified staged composition:

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

This evidence authorizes no commit by itself. The user separately authorized a
three-path durable status correction and controlled reset of only this exact index so
that the repository record does not encode transient staged/unstaged state. That
correction may change only `CHECKSUMS.sha256`, `docs/APPROVAL.md` and `docs/STATUS.md`;
the exact final staged set must therefore be verified again before any local commit.

## Identity/documentation baseline approval

The product scope, Project Knowledge, Lovable workflow, SEO/tracking boundaries,
11-path content scope and staged composition have passed review. The candidate is
approved for a local documentation commit only after:

- any later status-only correction is validated;
- the same exact 11-path staged set is verified again;
- zero unstaged and untracked paths are confirmed;
- repository checksums and `git diff --cached --check` pass;
- the commit message and local commit are explicitly authorized.

This record does not authorize push, pull request, merge, Lovable implementation,
publication, deployment, domains or infrastructure changes.

## Controlled release requirements

1. verify the exact final 11-path staged set after the last approved content change;
2. obtain explicit approval for the commit message and local commit;
3. obtain separate authorization for branch push and pull request;
4. review and merge the documentation PR through separate gates;
5. synchronize local `main` with `origin/main` and confirm Lovable sees the merge;
6. update Lovable Project Knowledge from the merged versioned source;
7. create or switch Lovable to `feat/rito-business-multipage` from merged `main`;
8. explicitly authorize the multipage implementation pass, automatic Lovable commits
   on that branch and intentional credit use;
9. run implementation, QA and release gates separately.

## Cursor + Codex implementation authorization

On 4 August 2026 the user replaced the Lovable-specific implementation gate for the
current pass with this approved local-writer decision:

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

The authorization covers local documentation and source implementation, validation,
remediation and final reporting in one pass. It does not authorize stage, commit, push,
pull request, merge, publication, deployment, domains or infrastructure changes.

## Targeted BUSINESS simplification authorization

On 4 August 2026 the user approved `BW-DEC-044` as a focused remediation of the local
implementation candidate at:

```text
branch: feat/rito-business-multipage
HEAD before remediation: 49c7ced6118ecd8e719754f1f0ff5b3738031d47
parent/main baseline: 9b7ff807f945f679216671577963fd713badb507
```

The authorization covers removal of Team and `/prenota`, direct telephone booking,
compact home treatment discovery, a minimal/optional treatment model, the Studio
manifesto redesign, copy hygiene, documentation alignment, checksum refresh, automated
validation and browser QA. It does not authorize stage, commit, amend, push, pull
request, merge, Lovable execution, publication or deployment.

## Final UX refinement authorization

On 5 August 2026 the user approved `BW-DEC-045` as one complete local refinement pass
on the existing unstaged remediation at committed HEAD
`49c7ced6118ecd8e719754f1f0ff5b3738031d47`.

The authorized scope covers home spacing/color rhythm, treatment CTA placement, shared
editorial arrows, a query-driven accessible treatment dialog/sheet, compact mobile
rows, the reveal-controller root-cause fix, concise headings, coherent interaction
feedback, step-based gallery swipe/drag polish, documentation, checksum refresh,
automated validation and browser evidence at 390, 768 and 1440 px.

The authorization does not permit stage, amend, commit, push, pull request, merge,
Lovable execution, publication or deployment.

## Navigation, sliders and treatment interaction authorization

On 6 August 2026 the user authorized `BW-DEC-046` as one complete local technical pass
on the preserved 46-path remediation at committed HEAD
`49c7ced6118ecd8e719754f1f0ff5b3738031d47`.

The scope covers Home navigation, horizontal rail/filter affordances, quiet treatment-row
feedback, scroll-preserving query dialog step navigation, derived recommendations,
individual gallery/FAQ reveal, drag progress indicators and the deliberate end-of-rail
route gesture. It also covers source remediation, documentation, checksum refresh,
repository-defined validation and DOM/runtime assertions without screenshots.

Stage, commit, amend, push, pull request, merge, Lovable execution or credits,
publication and deployment remain unauthorized.

## Baseline applicativa corrente dopo PR #5 — 8 agosto 2026

Il refinement approvato di premium dark actions e brand navigation è stato pubblicato
come candidate:

```text
5e0ba1acd51dfca0274768ed155224820e81b9d9
```

e unito in `main` tramite PR #5:

```text
276fd8e2d985bc7ea37442546800d14236009705
```

L'utente aveva già approvato manualmente la resa BUSINESS prima del publish. I gate
automatici hanno superato frozen install, lint con zero errori e sei warning ereditati,
build client/SSR/Nitro e `git diff --check`, con tre soli path applicativi.

Questo record qualifica `276fd8e...` come current merged application baseline del
repository. Non costituisce evidenza che il provider abbia già distribuito questo SHA:
la verifica di produzione post-merge resta non registrata.

```text
current merged application baseline: 276fd8e2d985bc7ea37442546800d14236009705
manual UX approval for this pass: CONFIRMED
post-merge production verification: NOT RECORDED
BUSINESS freeze: NOT DECLARED BY THIS PASS
```


## Final START freeze reconciliation authorization — 6 September 2026

The current canonical family source for new BUSINESS parity work is:

```text
Tretnix Knowledge: AdamDariOfficial/Tretnix-knowledge@1cf7033b1634ea06d605ed853932c7c25b695d15
START repository: AdamDariOfficial/rito-studio-START
START tag: family-start-v1.0
START frozen commit: 74ee03c4d39a974872f94f53d14ec2873815ccf7
BUSINESS repository: AdamDariOfficial/rito-studio-BUSINESS
BUSINESS source main: b6a82f918370f730681e9e0c0572a7a653d2dfeb
```

The annotated START tag is remotely published and dereferences exactly to the frozen commit. This
new canonical source does not erase the earlier SHA-only freeze or remix lineage recorded above;
those sections remain historical evidence.

The user authorized one controlled reconciliation pass that may:

- update current BUSINESS documentation to the final START tag/commit and current BUSINESS main;
- preserve historical lineage instead of rewriting it;
- apply `TRX-DEC-038` autonomous opacity-only divider reveals where a divider currently moves with
  revealed content, keeping box geometry invariant;
- apply `TRX-DEC-039` so Privacy and Cookie remain a non-separable visual pair;
- carry the compatible final START white primary-action motion and independent booking/contact CTA
  reveals into the shared BUSINESS booking section;
- preserve the final shared persistent-link affordance on footer/practical-info shared surfaces.

The reconciliation MUST preserve:

```text
multipage BUSINESS architecture
/trattamenti query-driven treatment detail
no /team route
no /prenota route
booking = WhatsApp + phone
contact = email + phone
gallery/lightbox BUSINESS behavior
@lovable.dev/vite-tanstack-config 2.8.5
no backend/database/auth/native booking
BUSINESS PLUS out of scope
```

Application and documentation changes are prepared through a Controlled Change Package on
`feat/rito-business-final-freeze-reconciliation`. Frozen install, lint and build are required automated gates. Browser QA remains a
separate required gate before staging. Stage, commit, push, PR, merge, deployment, migrations and
repository visibility changes remain separately authorized actions.

No production-origin verification after the final START interaction polish is inferred by this
record. The BUSINESS source commit `b6a82f918370f730681e9e0c0572a7a653d2dfeb` is a repository baseline, not proof of a current
production deployment.
## Browser QA corrective authorization — 6 September 2026

The user explicitly approved correcting the browser-QA findings from the final START freeze
reconciliation candidate and authorized a compact page-rhythm pass under BW-DEC-050. The pass may
change only presentation, spacing, CTA consistency and the embedded method-step presentation; it
must preserve BUSINESS routes, query-driven treatment detail, conversion channels, gallery/lightbox,
backend exclusions and BUSINESS PLUS boundaries.

The previous automated validation does not carry forward to the corrected candidate. Frozen install,
lint, build, exact scope, checksums, whitespace and browser QA must be rerun before staging.

## Studio principle-layout follow-up authorization — 7 September 2026

After reviewing the v1.2.0 Studio redesign in the browser, the user explicitly authorized a targeted
follow-up under BW-DEC-052. The authorized correction is limited to the `Il modo RITO` hierarchy and
responsive principle presentation:

- move the explanatory sentence below the section title;
- replace the mobile/tablet 2 × 2 principle grid with the home-style vertical step pattern;
- preserve the compact four-column presentation on wide desktop;
- preserve all other v1.2.0 behavior and the existing 38-path cumulative reconciliation scope.

This authorization covers controlled local application, validation, remediation and browser QA. It
does not itself constitute evidence that the new candidate passed those gates and does not bypass the
required manual review before staging.


## Studio density-reduction follow-up authorization — 7 September 2026

After reviewing the validated v1.2.1 candidate in the browser, the user judged `/studio` too dense
and explicitly authorized proceeding with the simplified direction recorded in BW-DEC-053, while
keeping v1.2.1 available as a controlled rollback reference if needed.

The authorized correction may:

- remove duplicated `Filosofia` / `Metodo` explanation from `/studio`;
- reduce the Studio-specific principle set to `Ambiente`, `Materiali`, `Cura` with shorter copy;
- replace the titled `Prima della visita` block with a compact utility/conversion strip;
- preserve the one-image intro, text-first mobile order and all existing BUSINESS route/conversion
  contracts;
- fix the Controlled Change Package validator so repository commands run inside the resolved
  `RepositoryRoot` even when the script is invoked externally.

This authorization covers controlled local application, validation, remediation and browser QA. It
does not itself prove the candidate passed those gates and does not bypass manual diff review before
staging.

## Final home-gallery parity and BUSINESS freeze authorization — 7 September 2026

After reviewing the validated v1.3.0 candidate, the project owner explicitly required the BUSINESS
home gallery to match the frozen START home gallery and authorized proceeding with that final
correction under BW-DEC-054.

The authorization includes:

- replacing only the home `GalleryRail` presentation/interaction with the frozen START pattern;
- retaining the BUSINESS `/galleria` route, gallery explorer and lightbox;
- rerunning automated validation and browser QA;
- if all final gates pass, completing the controlled Git closure and freezing RITO Studio BUSINESS;
- progressing to RITO Studio BUSINESS PLUS only after the BUSINESS freeze target is verified.

The statement above is authorization to perform the controlled sequence, not evidence that any
remaining gate has already passed. BUSINESS is not yet frozen in this document. Deployment,
migrations, backend changes and PLUS implementation are not performed by this correction.

## Final home-gallery gesture restoration authorization — 7 September 2026

After v1.3.1 Apply + automated Validate passed, the project owner reviewed the restored START-style
home gallery and identified one remaining regression: the BUSINESS deliberate end-of-rail drag no
longer opened `/galleria`.

The owner explicitly authorized restoring that interaction while preserving the v1.3.1 visual state:

- no gallery heading/title inside the home rail;
- no explicit `Apri la galleria` link inside the rail;
- frozen START image order, dimensions, spacing, fade and arrow hint remain unchanged;
- normal scrolling to the end must not navigate;
- only a deliberate additional horizontal drag from the true end may arm and open `/galleria` on
  thresholded release;
- the dedicated `/galleria` route and lightbox remain unchanged.

This follow-up is recorded as BW-DEC-055. It authorizes controlled local application, validation and
browser QA, but does not itself prove those gates passed and does not bypass full diff review or the
controlled freeze sequence.


## Browser finding approval — BW-DEC-056 — 7 settembre 2026

Il project owner ha approvato la correzione del bug osservato sul candidate v1.3.2: una volta
impegnato il drag finale verso `/galleria`, la stessa pressione non deve poter riportare indietro il
rail o il progress indicator prima del release/cancel.

L'autorizzazione riguarda esclusivamente il fix locale controllato, la sua validazione automatica e
il browser QA conseguente. Freeze BUSINESS resta subordinato ai gate finali già definiti; deploy,
migrazioni e BUSINESS PLUS non vengono eseguiti da questo package.


## End-of-rail cancellation-clamp authorization — 7 September 2026

After CCP v1.3.3 Apply + automated Validate passed, the project owner confirmed that the monotonic
same-press lock prevented the rail regression but made the deliberate gallery gesture impossible to
cancel naturally once engaged. The owner clarified the intended interaction:

- reverse movement during the same press may return the synthetic extra-drag to the exact origin;
- it must never move the underlying image rail farther backward than that origin;
- returning below the arm threshold must disarm navigation so release stays on the home page;
- once the synthetic offset reaches zero, further reverse movement remains clamped until release;
- a new gesture after release/cancel may scroll the rail backward normally.

This targeted correction is authorized under BW-DEC-057. It must also remove gallery-gesture-generated
`touchmove` Intervention spam by avoiding `preventDefault()` on non-cancelable events and by acquiring
the outward end gesture before native horizontal scrolling takes control. Automated validation and
browser QA must be rerun; BUSINESS remains unfrozen until all remaining gates pass.

## Final candidate acceptance and non-fragmented Git closure authorization — 7 September 2026

After CCP v1.3.5 returned `APPLY PASSED` and `VALIDATE PASSED`, the project owner confirmed that the
final browser checks passed and explicitly requested formal project closure without fragmented work.

This records authorization for the single controlled Git sequence defined by BW-DEC-059:

- exact 39-path staging;
- CCP staged validation;
- one local reconciliation commit;
- branch push;
- one pull request;
- remote diff verification and merge;
- synchronization/verification of `main`;
- annotated tag `family-business-v1.0`;
- tag push and remote dereference verification.

The approved tag message is:

```text
RITO Studio BUSINESS final frozen baseline — approved 2026-09-07
```

This authorization does not authorize deployment, migrations, backend/database/auth changes,
infrastructure changes or any BUSINESS PLUS implementation before the BUSINESS tag is verified.
After `family-business-v1.0` is verified against the merged `main` SHA, the BUSINESS freeze is
complete and BUSINESS PLUS becomes the next authorized product phase.
