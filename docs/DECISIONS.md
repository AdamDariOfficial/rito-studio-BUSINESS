# RITO Studio — Decision Log

**Famiglia:** Beauty & Wellness
**Versione:** 1.6
**Stato:** decisioni approvate e aggiornate al 4 agosto 2026

## BW-DEC-001 — Concept portfolio

**Decisione:** usare `RITO Studio` come concept dimostrativo Beauty & Wellness.

**Motivo:** il concetto di rituale funziona per hair, barber, beauty, nails e wellness senza dipendere da un'estetica rosa o medicale.

**Limite:** naming e dominio non verificati.

## BW-DEC-002 — Famiglia modulare

**Decisione:** condividere architettura, qualità tecnica e logica di conversione, non un'estetica identica per ogni cliente.

## BW-DEC-003 — START one-page

**Decisione:** START è un sito one-page con privacy, cookie e 404. Porta verso telefono, WhatsApp o provider esterno. Non include backend o booking nativo.

## BW-DEC-004 — BUSINESS multipagina

**Decisione:** BUSINESS deriva dallo START canonico e aggiunge catalogo, dettagli trattamento, studio, team, gallery, FAQ, contatti e prenotazione configurabile.

## BW-DEC-005 — Booking adapter

**Decisione:** supportare `external`, `whatsapp`, `request` e `demo`, senza accoppiare il prodotto a un solo provider.

## BW-DEC-006 — Nessun gestionale nella prima settimana

**Decisione:** clienti, agenda live, pagamenti, fidelity e admin restano fuori da START e BUSINESS v1.

**Motivo:** mantenere il deliverable realistico, verificabile e commercialmente chiaro.

## BW-DEC-007 — Identità RITO

**Decisione:** palette porcellana/inchiostro/borgogna, Newsreader + Manrope, composizione asimmetrica, fotografia tattile, card ridotte al minimo.

## BW-DEC-008 — Nessun cursore custom

**Decisione:** non introdurre cursori personalizzati nella baseline.

**Motivo:** evitare gimmick, regressioni e problemi di accessibilità.

## BW-DEC-009 — Nessun contenuto inventato

**Decisione:** vietare recensioni, metriche, certificazioni, risultati e attività reali inventate.

## BW-DEC-010 — Demo senza invio dati

**Decisione:** la demo portfolio non trasmette dati personali e dichiara chiaramente il proprio stato dimostrativo.

## BW-DEC-011 — Informazioni pratiche statiche

**Decisione:** orari, indirizzo e contatti non ricevono effetti hover decorativi. Restano semplici, leggibili e accessibili.

## BW-DEC-012 — START prima di BUSINESS

**Decisione:** BUSINESS può iniziare soltanto dopo detector, critique, QA e freeze dello START.

## BW-DEC-013 — Fonte canonica per pattern

**Decisione:** il commit START congelato diventa fonte visuale del concept; i pattern tecnici possono essere corretti prima dell'estrazione e registrati singolarmente.

## BW-DEC-014 — Attribuzione Tretnix

**Decisione:** ogni versione include nel footer:

> Progettato e sviluppato da Tretnix

collegato a `https://tretnix.com`.

## BW-DEC-015 — Gate pre-abbonamenti

**Decisione:** fino all'attivazione manuale degli abbonamenti e a un nuovo comando esplicito, la famiglia resta in preparazione offline. Non creare progetti Lovable, non consumare crediti e non modificare repository remoti.

## BW-DEC-016 — Modularità dei sottosettori verticali

**Decisione:** RITO Studio è un concept portfolio multi-service. Ogni cliente reale riceve soltanto categorie e moduli pertinenti. La famiglia tecnica non obbliga a offrire Hair, Skin, Nails e Wellness insieme.

## BW-DEC-017 — Asset prima del polish

**Decisione:** definire shot list, ratio, diritti e qualità degli asset prima di spendere iterazioni Lovable sul polish fotografico.

## BW-DEC-018 — Prezzo separato dalla specifica prodotto

**Decisione:** la famiglia definisce scope, deliverable, esclusioni e add-on, ma il prezzo viene stabilito dalla politica commerciale Tretnix e dal progetto reale.

## BW-DEC-019 — V1 conservata ma rifiutata visivamente

**Decisione:** conservare la prima implementazione Lovable al commit `47658ae52f0e7585dc887226e90014038e9c63ae` come prototipo tecnico recuperabile, ma non usarla come baseline visuale approvata.

**Motivo:** la direzione fotografica, la hero e il ritmo editoriale non raggiungevano il livello richiesto per RITO Studio START.

## BW-DEC-020 — Una sola generazione V2 indipendente

**Decisione:** autorizzare una seconda e ultima generazione Lovable dalla baseline pre-visuale ripristinata, senza riutilizzare la V1 come riferimento.

**Evidenza:** la V2 candidata è registrata al commit `32fa4d534582be6c08c1303c879d17b7f763a4fd`.

**Limite:** nessuna terza generazione Lovable è autorizzata senza una nuova decisione esplicita.

## BW-DEC-021 — V2 candidata, non baseline congelata

**Decisione:** trattare la V2 come candidata tecnica e di art direction, non come START approvato o congelato.

**Motivo:** la struttura è più coerente della V1, ma fotografia definitiva, copy reconciliation, Impeccable, QA browser e audit restano pendenti.

## BW-DEC-022 — Baseline tecnica prima di Impeccable

**Decisione:** prima dell'audit Impeccable stabilizzare line ending, lint, focus return, focusabilità del drawer chiuso e route tree generata tramite una modifica controllata separata.

**Limite:** questo intervento non autorizza redesign, sostituzione degli asset, deploy o modifiche BUSINESS.

## BW-DEC-023 — Redesign Impeccable consentito entro lo scope START

**Decisione:** dopo la stabilizzazione tecnica, Impeccable può proporre e applicare un redesign sostanziale della UI quando supportato da finding approvati.

**Vincoli da preservare:** scope START, route, copy canonico, palette porcellana/inchiostro/borgogna, accent `#6A3F4B`, Newsreader + Manrope, accessibilità, mobile-first, demo integrity, assenza di backend e attribuzione Tretnix.

**Metodo:** detector e critique iniziano in sola lettura; nessun finding viene applicato automaticamente.

## BW-DEC-024 — Candidato START pre-freeze approvato per la chiusura controllata

**Decisione:** il candidato presente su `fix/rito-start-pre-freeze-polish`, derivato da
`main@cfc3edd965b5fa3d59fe64a0c04259d75c5c4cb1`, è la baseline funzionale e visuale
approvata per il gate di staging dopo la riconciliazione documentale.

**Evidenza:** applicazione e validazione automatica `RitoStartPreFreezePolish v1.9.0`,
revisione completa del diff e browser QA finale confermato il 3 agosto 2026.

**Limite:** questa decisione non equivale a commit, merge, deploy, approvazione definitiva
o freeze. Tali gate restano separati.

## BW-DEC-025 — Prenotazione START tramite contatto telefonico diretto

**Decisione:** RITO Studio START usa CTA `tel:` dirette. Il precedente dialog dimostrativo
e la proprietà `site.booking.demoFeedback` sono rimossi.

**Limite:** è una configurazione del concept START e non riduce le modalità supportate
dalla famiglia per progetti successivi.

## BW-DEC-026 — Integrità demo con presentazione pubblica client-like

**Decisione:** la home può presentarsi come un sito commerciale curato e non deve mostrare
un avviso demo prominente nel footer, purché restino contemporaneamente:

- email `.example` e numero telefonico non operativo;
- `noindex, follow`;
- nessun backend, form, account, pagamento o invio dati;
- nessun dato strutturato `LocalBusiness` o altra rappresentazione commerciale pubblica;
- disclosure esplicita nelle route Privacy e Cookie;
- obbligo di sostituzione e revisione prima dell'uso per un cliente reale.

**Chiarimento:** BW-DEC-010 resta valido per l'assenza di invio dati; cambia soltanto il
posizionamento della disclosure.

## BW-DEC-027 — Listino premium specifico del concept START

**Decisione:** RITO Studio START mostra un listino dimostrativo configurato con prezzi fissi
e prezzi “da”, inclusa una nota che richiede di concordare eventuali variazioni durante la
consulenza.

**Limite:** questi importi sono fixture editoriali del solo concept RITO Studio START. Non
sono prezzi di mercato verificati, non sono default della famiglia Beauty & Wellness e non
autorizzano listini inventati nei progetti cliente.

**Precedenza:** questa eccezione sostituisce, per il solo candidato START, il divieto di
mostrare prezzi fissi del template espresso in BW-DEC-018 e nella definizione prodotto.

## BW-DEC-028 — Mappa di area attivabile su scelta esplicita

**Decisione:** la sezione contatti può offrire una mappa Google della sola area generale
“Prato della Valle, Padova”, caricata esclusivamente dopo azione esplicita dell'utente, con
link esterno disponibile anche senza JavaScript.

**Vincoli:** nessun indirizzo commerciale esatto, nessun marker attribuito a RITO Studio,
nessuna richiesta Google prima dell'attivazione e nessuna affermazione che il concept sia
un'attività reale.

## BW-DEC-029 — Architettura one-page semplificata

**Decisione:** rimuovere `IntroStatement` e `MethodStrip`; integrare l'anchor `#metodo` e il
messaggio metodologico in `RitualFeature`.

**Ordine finale:** `StickyHeader`, `Hero`, `EditorialServiceList`, `RitualFeature`,
`StudioEditorial`, `GalleryRail`, `BookingCTA`, `PracticalInfo`, `Footer`.

**Motivo:** ridurre ridondanza e migliorare ritmo, densità e continuità editoriale senza
ridurre le informazioni essenziali.

## BW-DEC-030 — Indicatore animato della gallery mobile

**Decisione:** usare una sola pill con freccia animata al centro-destra della gallery mobile
come affordance di scroll orizzontale. La pill scompare a fine rail e ricompare tornando
indietro.

**Vincoli:** nessun autoplay, nessun controllo carousel, nessuna intercettazione degli input,
animazione disabilitata con `prefers-reduced-motion` e fallback comprensibile senza
JavaScript.

**Precedenza:** è un'eccezione stretta al divieto generale di loop decorativi; l'animazione
ha una funzione di orientamento e resta visibile soltanto mentre esiste contenuto ulteriore.

## BW-DEC-031 — Navigazione delle policy e skip link

**Decisione:** Privacy e Cookie riutilizzano la navbar START ma non mostrano skip link. La
home conserva invece lo skip link “Vai ai trattamenti” verso `#trattamenti`.

**Vincoli:** route dirette, refresh, Back/Forward, apertura in alto e focus visibile restano
obbligatori.

## BW-DEC-032 — Merge e QA di produzione qualificano il candidato finale START

**Decisione:** il merge commit
`fb0aee1773c6331d1c4dc8e4b702fabf7196a1d2`, creato dalla PR #5 a partire dal
candidato `003fa9ea9322e82cb2d79f78baf5bb29a798e6ae`, è la baseline applicativa
corrente da portare al gate finale di approvazione e freeze.

**Evidenza:** `main` e `origin/main` sono stati sincronizzati sul merge commit; il
production-origin QA automatico `RITO_START_PRODUCTION_ORIGIN_QA v1.0.3` ha
superato installazione frozen, lint, build client/SSR/Nitro, route, metadata,
robots, 404, favicon e disponibilità degli asset; l'utente ha inoltre confermato
la checklist browser sul dominio pubblico senza blocker o major.

**Limite:** il provider non espone in questa evidenza un'attestazione
crittografica dello SHA distribuito. L'allineamento è supportato da contenuti,
metadata, favicon, topologia dei chunk e comportamento pubblico. Questa
decisione non equivale ancora ad approvazione, freeze o tag.

## BW-DEC-033 — Identificazione non auto-referenziale del freeze finale

**Decisione:** il target definitivo del freeze sarà il merge commit della PR di
chiusura documentale, purché discenda da
`fb0aee1773c6331d1c4dc8e4b702fabf7196a1d2` e il diff resti limitato ai file
documentali approvati.

Un file versionato non può contenere lo SHA del commit che contiene quel
medesimo file. Lo SHA finale non deve quindi essere incorporato tramite un
ulteriore commit che sposterebbe `main` oltre il target scelto.

**Fonte autorevole:** dopo il merge, un tag annotato approvato deve puntare al
merge commit verificato. Il messaggio del tag e i metadata GitHub registrano
SHA, approvazione e freeze.

**Gate:** sincronizzare `main`, verificare lo SHA risultante, ottenere
approvazione e autorizzazione al freeze, scegliere il nome del tag, creare e
verificare il tag, quindi autorizzarne separatamente il push.

## BW-DEC-034 — Contratto START → BUSINESS preparato ma inattivo

**Decisione:** introdurre `docs/START_BUSINESS_CONTRACT.md` come contratto di
eredità preparatorio. Il documento diventa operativo soltanto dopo il merge
della chiusura documentale, l'approvazione e il freeze dello START, la creazione
e verifica del tag annotato e una nuova autorizzazione esplicita per BUSINESS.

**Limite:** la presenza del contratto non autorizza la creazione della
repository BUSINESS, l'implementazione multipagina, backend, database,
autenticazione, booking nativo, deploy o consumo di crediti.

## BW-DEC-035 — START approvato e congelato tramite SHA completo

**Data:** 3 agosto 2026

**Decisione:** RITO Studio START è approvato e congelato sulla baseline:

```text
439efff0f14315310b9149cde0283633696a0eb0
```

L'utente ha esplicitamente rinunciato al tag annotato per ridurre il lavoro operativo.
Lo SHA Git completo resta l'identificatore immutabile e autorevole.

**Conseguenza:** per RITO Studio questa decisione sostituisce il requisito del tag in
BW-DEC-033 e nella versione preparatoria del contratto START → BUSINESS.

## BW-DEC-036 — Avvio di RITO Studio BUSINESS autorizzato

**Data:** 3 agosto 2026

**Decisione:** autorizzare RITO Studio BUSINESS come evoluzione multipagina della
baseline START `439efff0f14315310b9149cde0283633696a0eb0`.

**Vincoli:** BUSINESS preserva identità, componenti, responsive, accessibilità, motion,
demo integrity e attribuzione Tretnix. BUSINESS PLUS resta escluso.

**Limite:** l'autorizzazione del prodotto non autorizza automaticamente prompt Lovable,
crediti, stage, commit, push, deploy, backend o infrastruttura.

## BW-DEC-037 — Derivazione BUSINESS tramite remix Lovable

**Data:** 3 agosto 2026

**Decisione:** creare BUSINESS mediante remix del progetto Lovable START, collegare la
copia a una nuova repository GitHub e clonare quella repository in locale prima di
applicare modifiche controllate.

**Motivo:** il remix preserva il legame operativo Lovable e la cronologia START senza
creare manualmente una repository locale o remota scollegata dal progetto effettivo.

**Repository:** `AdamDariOfficial/rito-studio-BUSINESS`.

## BW-DEC-038 — Baseline remix verificata

**Data:** 3 agosto 2026

**Decisione:** usare come baseline operativa BUSINESS il commit:

```text
222c331db44b1775aa2f877634f3a0f3dfdfbe69
```

Il commit è due revisioni avanti rispetto allo START canonico e zero indietro. Il delta
complessivo è limitato a `package.json` e `bun.lock`, dove Lovable aggiorna e fissa
`@lovable.dev/vite-tanstack-config` a `2.8.5` con le corrispondenti dipendenze lockfile.

**Conseguenza:** questa variazione tecnica viene preservata. Non costituisce
implementazione multipagina né autorizza ulteriori dependency update.

## BW-DEC-039 — Bootstrap identità e documentazione prima dell'implementazione

**Data:** 3 agosto 2026

**Decisione:** prima di modificare l'applicazione, aggiornare esclusivamente:

- identità repository;
- stato e record di autorizzazione;
- contratto START → BUSINESS;
- decision log;
- Project Knowledge BUSINESS;
- prompt BUSINESS;
- manifest checksum.

Rimuovere i file Project Knowledge e prompt specifici di START dopo aver creato le
corrispondenti versioni BUSINESS.

**Esclusione:** nessuna route, componente, stile, asset, dipendenza, lockfile o file di
configurazione applicativa viene modificato in questa fase.

**Gate successivi:** validazione e review, staging, commit, push/PR e implementazione
multipagina restano autorizzazioni separate.

## BW-DEC-040 — Correzione post-review del bootstrap BUSINESS

**Data:** 3 agosto 2026

**Decisione:** registrare come completati Apply e Validate del package
`RITO_STUDIO_BUSINESS_IDENTITY_DOCS_BOOTSTRAP_CCP v1.1.2`, senza autorizzare lo
staging, e applicare una correzione documentale controllata prima del gate successivo.

La prima review manuale ha confermato baseline, branch, zero staged path e perimetro
generale, ma ha rilevato quattro problemi di evidenza e durabilità:

1. il report basato su `git diff` non includeva il contenuto dei due file BUSINESS
   untracked;
2. `AGENTS.md` e `README.md` contenevano stato transitorio della singola modifica;
3. il prompt Lovable non richiedeva merge documentale, sincronizzazione locale/remota e
   sincronizzazione Lovable prima dell'esecuzione;
4. il report esterno aveva encoding misto e non era adatto come evidenza finale.

**Correzione approvata:** usare il package `v1.2.0` su otto path documentali, mantenendo
l'intero working-tree limitato agli undici path già autorizzati. Il validator deve
produrre un report UTF-8 con patch tracked completa e contenuto integrale dei due file
untracked.

**Gate durevole per l'implementazione:** il prompt BUSINESS può essere eseguito soltanto
dopo merge della documentazione in `main`, sincronizzazione di `main` locale/remoto,
conferma della sincronizzazione Lovable, aggiornamento del Project Knowledge e nuova
autorizzazione esplicita per implementazione e crediti.

**Identità package:** `package.json.name` resta intenzionalmente
`tanstack_start_ts` in questa fase. `package.json` e `bun.lock` sono parte dello stato
tecnico gestito dal remix e una loro modifica richiede un task separato con motivazione
concreta.

**Esclusione:** la correzione non modifica codice applicativo, route, componenti, stili,
asset, dipendenze, lockfile o configurazione runtime e non autorizza staging, commit,
push, PR, merge, implementazione, pubblicazione o deploy.

## BW-DEC-041 — Workflow Lovable su branch e completamento SEO/tracking

**Data:** 4 agosto 2026

**Decisione:** la seconda review manuale del bootstrap BUSINESS non autorizza lo
staging e richiede il package correttivo `v1.2.2` sugli stessi otto path documentali.

**Workflow Lovable approvato:** dopo il merge della documentazione in `main`, la
sincronizzazione locale/remota e l'aggiornamento del Project Knowledge, Lovable deve
creare o selezionare `feat/rito-business-multipage` a partire dall'esatto `main`
unito. Una futura autorizzazione esplicita al pass di implementazione comprende i
commit automatici e la sincronizzazione GitHub prodotti da Lovable esclusivamente su
quel branch. Non comprende lavoro diretto su `main`, PR, merge, pubblicazione o deploy.

**SEO e misurazione BUSINESS:** la versione BUSINESS deve preparare:

- inventario SEO tipizzato per route;
- title, description, canonical, Open Graph e social image;
- indexability esplicita;
- capacità di sitemap attivabile soltanto per un lancio reale approvato;
- structured data appropriati e revisionati;
- tracking configurabile e subordinato al consenso.

Per il concept portfolio restano i default `noindex, follow`, sitemap disabilitata,
structured data commerciali disabilitati, tracking `enabled: false`, nessun provider e
nessuna richiesta, cookie o identificatore prima del consenso.

**Structured data consentiti:** soltanto dati accurati e non commerciali come
`WebSite`, `WebPage` o `BreadcrumbList` dopo review esplicita. Restano vietati dati
fittizi `LocalBusiness`, `Service`, `Offer`, indirizzi, orari commerciali, credenziali,
recensioni, rating e prenotazioni.

**Uniformità route escluse:** `/journal/:slug` è esclusa esplicitamente insieme a
`/journal`, `/gift-card`, `/account` e `/admin` dalla prima versione BUSINESS.

**Esclusione:** `v1.2.2` non modifica codice applicativo, route, componenti, stili,
asset, dipendenze, lockfile o configurazione runtime e non autorizza staging, commit
manuali, push manuale, PR, merge, implementazione, pubblicazione o deploy.

## BW-DEC-042 — Chiusura del bootstrap documentale BUSINESS

**Data:** 4 agosto 2026

**Decisione:** registrare come completati Apply e Validate del package `v1.2.2` e
considerare superata la review finale del contenuto identità/documentazione.

La review ha confermato:

- baseline START e BUSINESS corrette;
- esatto perimetro di undici path e zero staged path;
- frozen install, lint, build e `git diff --check` superati;
- workflow Lovable su branch dedicato coerente con i gate approvati;
- scope BUSINESS SEO, social image, structured data e tracking completo e sicuro per la
  demo;
- esclusioni route complete, incluso `/journal/:slug`;
- nessuna modifica applicativa, dipendenza o configurazione runtime.

**Chiusura autorizzata:** applicare `v1.2.3` esclusivamente a `CHECKSUMS.sha256`,
`docs/APPROVAL.md`, `docs/DECISIONS.md` e `docs/STATUS.md` per eliminare metadata
transitori e rendere il record durevole.

**Conseguenza:** dopo la validazione automatica di `v1.2.3`, il candidato completo di
undici path può entrare nel gate di staging, che richiede comunque una nuova
autorizzazione esplicita.

**Esclusione:** questa decisione non autorizza stage, commit, push, PR, merge, prompt
Lovable, consumo crediti, implementazione, pubblicazione o deploy.

## BW-DEC-043 — Implementazione BUSINESS locale con Cursor + Codex

**Data:** 4 agosto 2026

**Decisione:** sostituire, per il pass corrente, il gate di implementazione specifico
per Lovable con un unico pass locale completo eseguito da Cursor + Codex come solo
writer sul working tree BUSINESS canonico.

```text
branch: feat/rito-business-multipage
base: 9b7ff807f945f679216671577963fd713badb507
Lovable: sincronizzazione passiva del repository / preview opzionale
Project Knowledge Lovable: non richiesto e non aggiornato
Lovable Agent e prompt: non autorizzati
crediti Lovable intenzionali: non autorizzati
writer concorrenti: vietati
```

**Perimetro autorizzato:** modifiche locali a documentazione e sorgenti, implementazione
multipagina BUSINESS, validazione, remediation e report finale sul branch dedicato.

**Gate separati:** staging, commit, push, pull request, merge, pubblicazione, deploy,
domini e infrastruttura non sono autorizzati da questa decisione.
