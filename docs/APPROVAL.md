# RITO Studio BUSINESS — Authorization and Baseline Record

**Updated:** 6 August 2026
**Status:** `BUSINESS_LOCAL_IMPLEMENTATION_AUTHORIZED`
**Repository:** `AdamDariOfficial/rito-studio-BUSINESS`
**Default branch:** `main`
**Remix baseline:** `222c331db44b1775aa2f877634f3a0f3dfdfbe69`

## Purpose

This document records the approved START source, the verified Lovable remix baseline
and the approved identity/documentation baseline for RITO Studio BUSINESS. This
record does not itself authorize multipage implementation, commit, push, pull
request, merge, publication or deployment.

## Canonical START baseline

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
