# RITO Studio — Decision Log

**Famiglia:** Beauty & Wellness
**Versione:** 2.0
**Stato:** decisioni approvate e aggiornate al 6 settembre 2026

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

## BW-DEC-044 — Semplificazione base BUSINESS dopo browser review

**Data:** 4 agosto 2026

**Decisione:** semplificare il prodotto BUSINESS base sulla base della review browser
approvata dall’utente:

- rimuovere Team dalla home e dall’intero prodotto attivo;
- rimuovere `/team` dall’inventario route;
- rimuovere `/prenota`, il form e l’architettura booking adapter;
- collegare ogni CTA di prenotazione al numero telefonico centralizzato tramite `tel:`;
- preservare il catalogo e la route dettaglio trattamento riusabile;
- limitare i campi trattamento obbligatori a nome, slug, categoria, prezzo e descrizione
  breve, rendendo opzionale l’arricchimento;
- sostituire il catalogo completo in home con un teaser compatto delle quattro categorie;
- trasformare il blocco filosofia/metodo di `/studio` in un manifesto editoriale ad alta
  rilevanza visiva.

**Conseguenza:** `/team` e `/prenota` usano la 404 condivisa; Team resta soltanto un
possibile modulo futuro opzionale. L’adattamento base richiede principalmente la modifica
della configurazione sito e del catalogo trattamenti.

**Gate:** sono autorizzate esclusivamente modifiche locali, validazione e report finale
nel pass corrente. Stage, commit, amend, push, pull request, merge, uso di Lovable,
pubblicazione e deploy non sono autorizzati.

## BW-DEC-045 — Refinement finale UX, ritmo colore e interazioni trattamento

**Data:** 5 agosto 2026

**Decisione:** completare un unico pass locale di refinement sul candidato successivo a
`BW-DEC-044`, preservando identità START, palette, tipografia, dati centralizzati e
prenotazione telefonica.

Il pass stabilisce che:

- la CTA `Scopri tutti i trattamenti` chiude la griglia categorie ed è centrata nella
  relativa colonna;
- il ritmo home usa una scala `compact` / `standard` / `featured` e una sequenza
  intenzionale canvas, surface caldo e ancora ink, senza nuovi colori o gradienti;
- hero, categorie e link editoriali condividono la stessa freccia lineare, allineamento
  e movimento hover/focus;
- il dettaglio trattamento usa la query di `/trattamenti` e un dialog/sheet Radix
  accessibile; `/trattamenti/:slug` esce dall’inventario route attivo;
- le righe trattamento mobile restano editoriali ma compatte, con nome, durata quando
  disponibile, prezzo e freccia;
- la sparizione dopo cambi filtro era causata dal controller reveal, che osservava solo
  il mount iniziale e un frame successivo; un `MutationObserver` collega i nodi dinamici
  allo stesso `IntersectionObserver`, mentre le righe del catalogo dinamico non
  riavviano un reveal d’ingresso a ogni filtro;
- i titoli di sezione privilegiano 2–6 parole e spostano la nuance nel testo di supporto,
  salvo hero, legali e nomi trattamento;
- link, pulsanti, filtri, righe e controlli custom condividono pointer feedback, focus
  visibile e micro-interazioni basate sui token motion esistenti;
- la lightbox gallery resta step-based, senza autoplay o scroll libero, e aggiunge
  frecce tastiera, pulsanti, contatore, soglia drag e swipe di un solo step;
- `prefers-reduced-motion` rimuove trasformazioni e transizioni non essenziali senza
  nascondere contenuti.

**Gate:** il pass autorizza soltanto modifiche locali, validazione, browser QA e bundle
di evidenze. Non autorizza stage, amend, commit, push, pull request, merge, Lovable,
pubblicazione o deploy.

## BW-DEC-046 — Navigation, horizontal affordances and slider interaction refinement

**Data:** 6 agosto 2026

**Decisione:** completare un pass tecnico locale che preserva l’identità START e rifinisce
navigazione, overflow orizzontali, dialog trattamento e gesture gallery:

- `Home` è la prima destinazione della navigazione centralizzata e risulta attiva soltanto
  su `/`;
- il rail gallery home mantiene lo scroll orizzontale nativo, nasconde l’overflow verticale
  e usa un hint circolare da almeno 44 × 44 px;
- i filtri trattamento restano su una sola riga scrollabile e mostrano fade laterali derivati
  da `scrollLeft`, `scrollWidth` e `clientWidth` tramite `ResizeObserver`;
- le righe trattamento mantengono fondo trasparente e affidano il feedback alla freccia
  editoriale, al titolo e al focus visibile;
- il dialog query-driven conserva la posizione pagina, mantiene un solo ingresso history e
  consente step, tastiera, swipe e raccomandazioni derivate dalla categoria, con navigazioni
  interne `replace`;
- gallery e FAQ applicano reveal individuali con stagger massimo di 240 ms e aggiornamento
  sicuro dei contenuti filtrati;
- la lightbox espone una progressione drag con stato armato prima del singolo step;
- un gesto orizzontale aggiuntivo, iniziato al vero bordo finale del rail home, apre
  `/galleria` soltanto al rilascio oltre soglia; il link esplicito resta disponibile.

**Vincoli:** nessuna dipendenza, route slug trattamento, autoplay, scroll gallery libero,
campo manuale `relatedServices`, screenshot o artefatto QA viene introdotto. Il pass non
autorizza stage, commit, amend, push, pull request, merge, Lovable, pubblicazione o deploy.

## Decisione condivisa — Premium dark actions e navigazione del logo — 8 agosto 2026

**Decisione:** RITO Studio START e BUSINESS condividono due contratti UX.

1. Le azioni rettangolari con fondo inchiostro mantengono il fondo nero e usano un unico
   feedback premium: sweep luminoso molto discreto, lift massimo di 1 px, ombra contenuta
   e micro-compressione in active. L'hover è riservato ai dispositivi `pointer: fine`;
   `prefers-reduced-motion` elimina movimento e sweep.
2. Il logo in navbar e footer, quando l'utente è già sulla home, porta alla cima usando
   l'helper di scroll esistente; da una route diversa naviga a `/` con reset in cima.
   Lo stato history esistente viene preservato e Back/Forward non vengono bypassati.

**Esclusioni:** controlli circolari, azioni bianche/outlined, route, copy, dipendenze,
gallery, catalogo trattamenti e architettura one-page START non vengono modificati.

**Evidenza START:** candidate
`3cfb186c77c21218308cc3cd54e75248fafcd93a`, PR #8, merge
`125b20f2cd758e0e43e4408e4ea96b04c9eb7874`.

**Evidenza BUSINESS:** candidate
`5e0ba1acd51dfca0274768ed155224820e81b9d9`, PR #5, merge
`276fd8e2d985bc7ea37442546800d14236009705`.

**Limite:** questa decisione non prova un nuovo deploy di produzione e non sposta
automaticamente alcun freeze precedentemente dichiarato.

## BW-DEC-047 — Consolidamento BUSINESS sul freeze finale START

**Data:** 31 agosto 2026

**Decisione:** riconciliare il repository BUSINESS esistente con il freeze finale START
`f05d8683548623f55ca9d5cf0f051690b039dd27`, senza ricostruire il prodotto e senza annullare le differenze BUSINESS
approvate.

Il pass sincronizza soltanto pattern condivisi che non confliggono con BW-DEC-044/045/046:

- footer legale compatto con Privacy e Cookie nella fascia utility;
- location del footer cliccabile verso Google Maps senza underline persistente;
- PracticalInfo con location nella colonna informativa, icone MapPin/Phone/Mail e barra mappa
  con `Disattiva mappa` a sinistra quando attiva e link Google Maps a destra;
- preservazione di palette, tipografia, motion, route multipagina e accessibilita BUSINESS.

Restano intenzionali e invariati:

- prenotazione BUSINESS tramite `tel:` centralizzato;
- assenza delle route `/team` e `/prenota`;
- dettaglio trattamento query-driven dentro `/trattamenti`;
- nessun backend, database, auth o BUSINESS PLUS.

**Baseline BUSINESS verificata:** `main@b95a63c6127d2bc1dd396d74b2dd25f87b952226`.
**Target branch locale:** `feat/rito-business-final-start-sync`.
**Gate:** Apply/Validate locali; stage, commit, push, PR, merge e deploy restano separati.

## BW-DEC-048 — Canali conversione BUSINESS e parità UX pubblica con BUSINESS PLUS

**Data:** 2 settembre 2026

**Decisione:** il BUSINESS usa due intenti di conversione centralizzati e distinti:

- `booking`: WhatsApp + telefono;
- `contact`: email + telefono.

La decisione sostituisce, per il comportamento corrente, le parti di BW-DEC-044/045/047 che
imponevano la prenotazione esclusivamente telefonica. Restano invariati l'assenza di `/prenota`,
l'assenza di form/backend di prenotazione e il dettaglio trattamento query-driven dentro
`/trattamenti`.

Le superfici pubbliche `/trattamenti` e `/galleria` riusano i refinement UX già verificati
nel BUSINESS PLUS `main@cb8ef71d48177413adfeb5fb4eccc71cb23f2e0f` quando non dipendono da capacità PLUS-specific:

- filtri sticky e rail orizzontali con affordance laterali;
- mantenimento visibile del filtro attivo;
- ritorno controllato ai risultati dopo cambio filtro con rispetto di `prefers-reduced-motion`;
- lightbox gallery con immagine protagonista, close flottante e caption sotto immagine;
- dettaglio trattamento con navigazione desktop nell'header e navigazione mobile persistente in basso;
- prezzo indicativo vicino al titolo e transizione leggera del catalogo filtrato.

**Esclusioni:** non vengono importati `/consulenza`, workflow consultation, admin, auth, backend,
database, realtime, campi prezzo usati per calcoli PLUS o altri moduli BUSINESS PLUS.

**Gate:** applicazione e validazione locali tramite Controlled Change Package; browser QA resta
obbligatorio prima dello staging manuale. Stage, commit, push, PR, merge e deploy restano gate separati.


## BW-DEC-049 — Riconciliazione finale BUSINESS sullo START frozen

**Data:** 6 settembre 2026

**Decisione:** riconciliare il repository BUSINESS esistente `main@b6a82f918370f730681e9e0c0572a7a653d2dfeb` contro la baseline START
finale e formalmente congelata:

```text
repository: AdamDariOfficial/rito-studio-START
tag: family-start-v1.0
commit: 74ee03c4d39a974872f94f53d14ec2873815ccf7
```

Il repository BUSINESS non viene ricreato e il lineage storico non viene riscritto. Per i nuovi
confronti di parità, la fonte START è il tag frozen sopra indicato.

Il pass importa soltanto pattern condivisi compatibili con il contratto BUSINESS corrente:

- divider editoriali con reveal autonomo opacity-only e geometria invariata secondo `TRX-DEC-038`;
- coppia legale `Privacy` + `Cookie` non separabile secondo `TRX-DEC-039`;
- affordance persistente dei link nelle superfici condivise footer e informazioni pratiche;
- azione primaria bianca nel blocco booking che resta bianca e usa il corrispondente sweep/lift
  premium con reduced-motion;
- reveal indipendente delle CTA booking e contact nel blocco booking.

Restano intenzionali e invariati:

- architettura multipagina BUSINESS;
- dettaglio trattamento query-driven dentro `/trattamenti`;
- assenza di `/team` e `/prenota`;
- `booking = WhatsApp + telefono`;
- `contact = email + telefono`;
- refinement gallery/catalogo definiti da BW-DEC-045/046/048;
- nessun backend, database, auth, pagamento o booking nativo;
- nessun cambiamento a RITO Studio BUSINESS PLUS.

I vecchi riferimenti a freeze SHA-only, tag waived, baseline `f05d868...` o prenotazione solo
telefonica restano storia quando descrivono pass precedenti, ma non possono essere usati come stato
corrente dopo questa decisione.

**Gate:** applicazione e validazione locali tramite Controlled Change Package sul branch
`feat/rito-business-final-freeze-reconciliation` da `b6a82f918370f730681e9e0c0572a7a653d2dfeb`. Browser QA comparativa START ↔ BUSINESS è obbligatoria prima dello staging
manuale. Stage, commit, push, PR, merge, deploy, migrazioni e modifiche di visibilità restano gate
separati.

## BW-DEC-050 — Correzione browser QA e ritmo BUSINESS compatto

**Data:** 6 settembre 2026

**Decisione:** correggere i finding emersi nel browser QA del candidate di riconciliazione finale
e ridurre lo scroll non necessario nelle route BUSINESS senza cambiare architettura, contenuti
essenziali o identità RITO.

Correzioni obbligatorie:

- la griglia categorie della home deve mantenere esattamente la geometria pre-reconciliation; i
  divider autonomi non possono alterare la parità `odd/even`, padding, border placement o box model;
- `RitualFeature` incorpora i tre step `Ascolto`, `Precisione`, `Continuità` nello stesso blocco
  metodo, senza reintrodurre una `MethodStrip` separata;
- la location `Padova centro · zona Prato della Valle` in `PracticalInfo` è un link persistente a
  Google Maps, coerente con START;
- le CTA di conversione usano etichette e icone coerenti: booking = `Prenota un appuntamento` +
  icona messaggio, contact = `Contattaci` + icona email;
- il ritmo delle route BUSINESS viene compattato riducendo padding e spaziatura ridondanti,
  mantenendo touch target, leggibilità, gerarchia e accessibilità;
- `/studio` evita la seconda immagine verticale su mobile, già ridondante con il contenuto
  editoriale e con la stessa fotografia usata nel metodo;
- `/contatti` dispone le informazioni pre-visita in una griglia più compatta su desktop;
- `/trattamenti` riduce la densità verticale delle righe senza rimuovere descrizioni, prezzo,
  durata o navigazione query-driven.

**Vincoli:** nessuna route viene aggiunta o rimossa; nessuna dipendenza, backend, auth, database,
pagamento, booking nativo o capacità BUSINESS PLUS viene introdotta. Hero, gallery/lightbox e
route/history contract restano invariati salvo la sola riduzione di spacing delle superfici
contenitore.

**Gate:** il candidate aggiornato deve superare frozen install, lint, build, checksum, exact scope,
whitespace e un nuovo browser QA completo prima dello staging.

## BW-DEC-051 — CTA di navigazione sobrie e redesign completo `/studio`

**Data:** 6 settembre 2026

**Decisione:** recepire il browser feedback successivo a BW-DEC-050 senza procedere allo staging del
candidate precedente. Le CTA estese con icona restano appropriate nelle superfici di conversione
principali, ma non devono essere applicate meccanicamente a navbar e footer.

Contratto corrente:

- navbar desktop e drawer mobile: booking testuale `Prenota`, senza icona, come nel baseline BUSINESS
  precedente al pass BW-DEC-050;
- footer: booking testuale senza icona;
- CTA booking/contact nel contenuto possono mantenere label estesa e icona quando la maggiore
  enfasi è intenzionale.

La route `/studio` viene ridisegnata integralmente con obiettivo primario di diminuire lo scroll e
aumentare la quantità di informazione utile per viewport. La nuova pagina contiene soltanto:

1. intro editoriale e un'unica immagine ambiente nello stesso blocco;
2. quattro principi essenziali (`Filosofia`, `Metodo`, `Prodotti e materiali`, `Igiene e cura`) in
   griglia compatta;
3. fascia `Prima della visita` con accessibilità, location Google Maps, booking e collegamento a
   `/contatti`.

Il vecchio blocco manifesto dark con colonna sticky, la seconda immagine verticale e la sezione
accessibilità separata vengono rimossi. Su mobile il testo resta prima dell'immagine. Palette,
Newsreader + Manrope, conversion adapter, routing multipagina, history, gallery, catalogo trattamenti,
footer attribution e `prefers-reduced-motion` restano invariati.

**Vincoli:** nessuna nuova route, dipendenza, backend, database, auth, pagamento, booking nativo o
capacità BUSINESS PLUS. Il nuovo candidate deve ripetere frozen install, lint, build, exact-scope,
checksum, whitespace e browser QA prima dello staging.

## BW-DEC-052 — `Il modo RITO`: descrizione sotto il titolo e step verticali mobile

**Data:** 7 settembre 2026

**Decisione:** recepire il browser feedback sul redesign `/studio` di BW-DEC-051 prima dello
staging. La sezione `Il modo RITO` mantiene i quattro principi e la superficie dark, ma cambia
gerarchia e responsive presentation:

- il testo `Quattro principi semplici tengono insieme ambiente, metodo e qualità del servizio.`
  compare sotto `Cura, senza superfluo.` e non in una colonna laterale;
- su mobile e tablet i quattro principi usano lo stesso linguaggio di step verticali del
  `RitualFeature` in home: numero, titolo, descrizione e divider autonomo per riga;
- da desktop largo (`lg`) i medesimi elementi passano a quattro colonne compatte;
- non viene duplicato il markup per ottenere il cambio responsive;
- i divider mobile restano opacity-only e fuori dal layout flow, in coerenza con TRX-DEC-038;
- copy, ordine dei quattro principi, conversione, route, immagine Studio e fascia `Prima della
  visita` restano invariati.

**Motivo:** la variante 2 × 2 mobile risultava visivamente troppo raggruppata e meno coerente con
il pattern già approvato nella home. La descrizione laterale desktop spezzava inoltre la lettura
della gerarchia editoriale.

**Gate:** il candidate deve ripetere Apply/Validate e browser QA mirato a 360/390/430/768/1024/1440
prima dello staging. Stage, commit, push, PR, merge, deploy, migrazioni e Lovable restano fuori dal
gate automatico.

## BW-DEC-053 — `/studio`: ridurre densità informativa, non solo spacing

**Data:** 7 settembre 2026

**Decisione:** il browser QA del candidate BW-DEC-052 conferma che la route `/studio`, pur più corta,
risulta ancora troppo densa e visivamente affollata. Prima dello staging viene quindi autorizzato un
ulteriore redesign mirato che riduce il contenuto duplicato invece di comprimere ulteriormente lo
spacing.

Contratto corrente della route:

1. apertura `Lo studio` + `Uno spazio per te.` con copy breve e una sola immagine ambiente;
2. superficie `Dentro RITO` con tre soli concetti specifici dello Studio: `Ambiente`, `Materiali`,
   `Cura`; `Filosofia` e `Metodo` non vengono ripetuti perché già spiegati nella home;
3. chiusura utility senza heading `Prima della visita`, con location Google Maps, nota essenziale di
   accessibilità, booking e link a `/contatti`.

Su mobile i tre concetti restano verticali con divider autonomi; su desktop diventano tre colonne
arieggiate. Il copy viene accorciato e non viene aggiunta una nuova sezione per compensare la
riduzione. Navbar/footer, booking = WhatsApp + telefono, contact = email + telefono, routing,
gallery/catalogo, `prefers-reduced-motion`, palette, tipografia e attribuzione Tretnix restano
invariati.

**Rollback:** il candidate v1.2.1 resta un riferimento recuperabile; un eventuale ritorno deve essere
preparato come nuovo Controlled Change Package a partire dagli hash esatti del candidate corrente,
non tramite restore manuale o cleanup distruttivo.

**Gate:** CCP v1.3.0 deve ripetere Apply, frozen install, lint, build, exact scope, checksum,
whitespace e browser QA prima dello staging. Il validator del package deve inoltre eseguire i comandi
repository-defined nel `RepositoryRoot` risolto anche quando lo script viene lanciato da una cartella
esterna. Stage, commit, push, PR, merge, deploy, migrazioni e Lovable restano separati.

## BW-DEC-054 — Home gallery in parità START e gate finale di freeze BUSINESS

**Data:** 7 settembre 2026

**Decisione:** il browser QA del candidate v1.3.0 ha confermato che la home BUSINESS mostrava ancora
una gallery più complessa dello START, con heading `Galleria`, titolo `Gesti e materia`, link
`Apri la galleria` e gesto deliberato di fine rail. Il project owner richiede che la gallery della
home BUSINESS sia uguale alla gallery home dello START frozen.

La baseline visuale e comportamentale autorevole è:

```text
RITO Studio START
family-start-v1.0
74ee03c4d39a974872f94f53d14ec2873815ccf7
src/components/sections/GalleryRail.tsx
```

Il port BUSINESS deve quindi:

- usare la stessa struttura del rail START, senza heading o CTA interna;
- usare lo stesso ordine visuale dei quattro slot: Hair, Skin, Studio detail, Hair professional;
- mantenere `w-[72%]`, snap nativo, griglia 2-col tablet / 12-col desktop, offset e spacing START;
- mantenere fade laterale e arrow hint mobile che scompaiono al termine dello scroll;
- rimuovere dal rail home il gesto extra di fine corsa verso `/galleria`;
- preservare la route `/galleria`, i suoi filtri/lightbox e tutto il comportamento BUSINESS fuori
  dalla home.

Questa decisione sostituisce BW-DEC-046 soltanto per il comportamento del rail gallery della home.
Non annulla le decisioni relative alla route `/galleria` o alla lightbox.

**Freeze:** il project owner ha inoltre autorizzato la chiusura e il freeze di RITO Studio BUSINESS
una volta superati sul candidate aggiornato Apply/Validate, browser QA completo, full diff review,
staging esatto, staged validation, commit/push/PR/merge e verifica del target frozen. Il freeze non
può essere dichiarato prima di tali evidenze.

**Progressione:** RITO Studio BUSINESS PLUS è autorizzato come fase successiva soltanto dopo il
freeze BUSINESS verificato. Non viene sviluppato o modificato da questo pass.

**Esclusioni:** nessun deploy, backend, database, auth, migration, native booking o capacità PLUS è
introdotto dal fix gallery.

## BW-DEC-055 — Parità visuale START con gesto finale BUSINESS preservato

**Data:** 7 settembre 2026

**Decisione:** il candidate v1.3.1 ha ripristinato la composizione visuale della gallery home dello
START frozen e ha superato Apply + Validate automatici. Nel browser review il project owner ha
rilevato un solo comportamento mancante: il gesto deliberato di fine rail che, nel BUSINESS,
permetteva di proseguire verso `/galleria`.

BW-DEC-055 corregge BW-DEC-054 soltanto su questo punto. Il rail home deve continuare a essere
visivamente equivalente allo START a riposo:

- nessun heading `Galleria` o titolo `Gesti e materia`;
- nessuna CTA testuale `Apri la galleria` dentro il rail;
- ordine Hair → Skin → Studio detail → Hair professional;
- stessa larghezza mobile `w-[72%]`, snap, gap, padding, fade, arrow hint, griglia e offset START.

BUSINESS preserva però come differenza funzionale intenzionale il gesto già approvato in BW-DEC-046:

- il gesto può iniziare soltanto quando il rail è realmente al bordo finale;
- lo scroll normale fino al bordo non naviga;
- un drag orizzontale aggiuntivo rivela un indicatore di progresso;
- la route `/galleria` si apre soltanto al rilascio dopo il superamento della soglia;
- drag verticale, inverso, cancellato o sotto soglia non cambiano route;
- `prefers-reduced-motion` elimina motion non essenziale senza rimuovere l'azione diretta dell'utente.

**Conseguenza:** la parità richiesta con START è visuale/compositiva e di scroll base, non la
rimozione di ogni capability BUSINESS. `/galleria`, filtri, lightbox, history e accessibilità restano
invariati.

**Gate finale:** il candidate aggiornato deve ripetere Apply/Validate e browser QA. Solo dopo browser
PASS, full diff review, staging esatto, staged validation, commit/push/PR/merge e verifica del target
si può dichiarare il freeze BUSINESS. BUSINESS PLUS resta la fase successiva autorizzata soltanto
dopo freeze verificato. Deploy e migrazioni restano fuori scope.


## BW-DEC-056 — Lock monotono del drag finale durante la stessa pressione

**Data:** 7 settembre 2026

**Decisione:** il browser QA del candidate v1.3.2 ha confermato che il gesto BUSINESS di fine rail
verso `/galleria` è stato ripristinato, ma ha rilevato un bug nello stato della gesture: dopo aver
iniziato il drag extra verso sinistra dal vero bordo finale, mantenendo il touch/pointer premuto era
possibile invertire la direzione e far rientrare il rail/progresso verso le immagini precedenti.

Il comportamento approvato viene quindi precisato:

- il gesto finale può impegnarsi soltanto con un movimento orizzontale iniziale verso `/galleria`
  iniziato dal vero bordo finale;
- una volta impegnato, il gesto resta **monotono** per tutta la stessa sequenza di touch/pointer:
  il massimo extra-drag raggiunto non può diminuire;
- durante tale sequenza il reverse move viene intercettato: non deve riattivare lo scroll nativo
  all'indietro né far rientrare il progress indicator;
- se il rilascio avviene sotto soglia, il rail torna alla posizione normale senza navigazione;
- se la soglia è stata raggiunta, il rilascio apre `/galleria` una sola volta anche se il dito/pointer
  è stato mosso indietro prima del rilascio;
- `touchcancel` / pointer cancel ripristinano il rail senza navigazione;
- un nuovo gesto iniziato dopo release/cancel torna a usare il normale scroll nativo, incluso lo
  swipe all'indietro verso le immagini precedenti;
- un gesto iniziale verticale o inverso non viene acquisito come gesture di apertura galleria.

**Motivo:** evitare il piccolo salto/ritorno visuale osservato nel browser quando l'utente cambia
direzione senza sollevare il dito, preservando nello stesso tempo la reversibilità del rail tra
gesture indipendenti.

**Vincoli:** nessun cambiamento alla composizione START-equivalent del rail, all'ordine immagini,
alla route `/galleria`, alla lightbox, ai filtri, alle dipendenze o alle altre route BUSINESS.

**Gate:** v1.3.3 deve ripetere Apply, frozen install, lint, build, checksum, exact scope, whitespace e
browser QA mirato alla sequenza forward → reverse senza release. Solo dopo browser PASS si procede a
full diff review, staging esatto e staged validation.


## BW-DEC-057 — Clamp reversibile del drag finale fino all'origine

**Data:** 7 settembre 2026
**Stato:** approvata per implementazione e verifica; sostituisce il solo comportamento monotono di
BW-DEC-056.

### Evidenza

CCP v1.3.3 ha superato Apply e Validate automatici. Nel browser il project owner ha confermato che il
lock impedisce correttamente al rail di tornare indietro, ma ha chiarito che lo stesso gesto deve
restare annullabile: invertendo il touch/pointer senza rilasciare, l'utente deve poter tornare al punto
esatto in cui aveva iniziato l'extra-drag verso `/galleria`, mai oltre. Il log browser allegato mostra
inoltre ripetuti warning Chrome `Ignored attempt to cancel a touchmove event with cancelable=false`,
coerenti con `preventDefault()` invocato dopo che lo scroll nativo aveva già preso possesso di alcuni
eventi.

### Decisione

Per il rail home BUSINESS:

- il gesto speciale può iniziare soltanto dal vero bordo finale e in direzione outward verso
  `/galleria`;
- appena l'intento outward è chiaramente orizzontale, la gesture viene acquisita prima possibile;
- il progress è calcolato dall'extra-drag **corrente**, non dal massimo raggiunto;
- reverse nella stessa pressione retrae progress/reveal fino a `0`;
- se il reverse scende sotto la soglia di armamento, lo stato armed viene rimosso;
- al raggiungimento di `0`, ulteriore reverse resta clampato a `0`: il rail reale non può muoversi
  verso le immagini precedenti fino al release/cancel;
- release con stato non armato resta sulla home; release armato apre `/galleria` una sola volta;
- dopo release/cancel una nuova gesture inversa deve tornare a usare il normale scroll nativo del
  rail;
- `preventDefault()` su `touchmove` viene eseguito soltanto quando `event.cancelable === true`.

### Invarianti

Restano invariati composizione visuale START-equivalent, ordine immagini, snap, fade, arrow hint,
route `/galleria`, filtri/lightbox, conversion contract, routing BUSINESS, dipendenze e scope cumulativo
della riconciliazione.

### Gate

Il `VALIDATE PASSED` v1.3.3 non certifica BW-DEC-057. Il candidate corretto deve ripetere Apply,
Validate e browser QA mirato prima della full diff review e dello staging.

## BW-DEC-058 — Rail categorie mobile full-bleed senza gutter esterno

**Data:** 7 settembre 2026
**Stato:** approvata per implementazione e verifica finale.

### Evidenza

Dopo `APPLY PASSED` + `VALIDATE PASSED` del CCP v1.3.4, il browser QA mobile ha
mostrato un difetto visivo ai bordi del rail categorie: la linea inferiore, i fade e la superficie
scrollabile terminano circa 16 px prima dei bordi viewport. La causa è la combinazione tra il
`container-editorial` mobile da 20 px e il solo compenso locale `-mx-1` / `px-1` da 4 px.

Lo stesso pattern è presente sia nella galleria (`GalleryExplorer`) sia nel catalogo
`/trattamenti`; congelare BUSINESS correggendo una sola route lascerebbe quindi lo stesso root cause
aperto nell'altra superficie pubblica.

### Decisione

Su viewport mobile, i rail categorie di `/galleria` e `/trattamenti` devono essere full-bleed come
superficie di scroll/sticky, mantenendo però i controlli allineati all'inset editoriale di 20 px:

- wrapper sticky esteso fino ai bordi viewport tramite compensazione del `container-editorial`;
- contenuto del rail con padding inline 20 px, così primo e ultimo controllo restano allineati al
  resto della pagina;
- border-bottom e fade laterali arrivano ai veri bordi visivi, senza gutter esterno;
- da `md` in su resta la geometria precedente del rail (`-mx-1` / `px-1`);
- nessun overflow orizzontale della pagina;
- auto-scroll del filtro attivo, sticky behavior, query/history, return-to-results e lightbox restano
  invariati.

### Scope

Il fix applicativo è limitato a:

```text
src/components/GalleryExplorer.tsx
src/routes/trattamenti/index.tsx
```

`GalleryExplorer.tsx`, finora protetto nella riconciliazione, entra nell'allowlist esclusivamente
per questa correzione del rail categorie. Nessuna logica lightbox o gallery-grid viene modificata.

### Gate

Il `VALIDATE PASSED` v1.3.4 non certifica BW-DEC-058. Il candidate successivo deve ripetere Apply,
Validate e browser QA su 360/390/430 px per entrambe le route prima di full diff review, staging e
freeze BUSINESS.

## BW-DEC-059 — Chiusura formale e freeze RITO Studio BUSINESS

**Data:** 7 settembre 2026
**Stato:** approvata; autorizza la sequenza Git di chiusura dopo i gate pre-stage verificati.

### Evidenza finale del candidate

Il CCP v1.3.5 è stato applicato sul branch
`feat/rito-business-final-freeze-reconciliation` derivato da
`main@b6a82f918370f730681e9e0c0572a7a653d2dfeb` e ha prodotto lo scope cumulativo
esatto di 39 path (38 tracked modificati + `src/components/RevealDivider.tsx` nuovo).

Il project owner ha successivamente confermato `Browser QA v1.3.5: PASS`, inclusi i rail categorie
mobile full-bleed di `/galleria` e `/trattamenti`, il gesto home-gallery con cancel clamp, gli smoke
check route/query/lightbox/navbar/footer, l'assenza di overflow orizzontale e l'assenza di errori
applicativi osservati nella sessione finale.

La full diff review finale è stata eseguita sull'esatto payload v1.3.5 contro la baseline protetta e
ha confermato:

- nessun drift di `package.json`, `bun.lock` o `src/routeTree.gen.ts`;
- nessuna route `/team` o `/prenota`;
- booking = WhatsApp + telefono e contact = email + telefono;
- `/trattamenti` query-driven e `/galleria` con filtri/lightbox preservati;
- nessun backend, database, auth, pagamento, booking nativo o capacità BUSINESS PLUS;
- parità visuale/compositiva START della gallery home con il solo gesto BUSINESS documentato;
- divider autonomi geometry-safe e reduced motion preservato;
- attribuzione Tretnix preservata;
- documentazione storica mantenuta come storia e stato corrente riconciliato.

### Decisione di chiusura

Il project owner autorizza una **singola chiusura non frammentata** del lavoro corrente:

1. exact staging dei 39 path del candidate;
2. staged validation tramite il validator CCP in `-StagedMode`;
3. un singolo commit locale di riconciliazione;
4. push della branch `feat/rito-business-final-freeze-reconciliation`;
5. una singola pull request verso `main`;
6. review del diff remoto e merge;
7. sincronizzazione locale di `main` e verifica dello SHA risultante;
8. creazione del tag annotato `family-business-v1.0` sul commit `main` verificato;
9. push e verifica remota del tag.

Il tag deve usare il messaggio:

```text
RITO Studio BUSINESS final frozen baseline — approved 2026-09-07
```

Come per START, il merge commit non può auto-registrare il proprio SHA nei file contenuti nello
stesso commit. Dopo il merge e la verifica, `family-business-v1.0` + metadata Git costituiscono il
record autorevole del freeze. Non deve essere creato un commit successivo soltanto per ripetere lo
SHA del merge.

### Confini

- deploy/produzione: non eseguiti e non implicati dal freeze;
- migrazioni, database, auth e infrastruttura: fuori scope;
- BUSINESS PLUS: fase successiva autorizzata soltanto dopo verifica remota del tag
  `family-business-v1.0`; nessuna modifica PLUS avviene in questa chiusura.

Qualsiasi mismatch di scope, staged state, remote main, PR diff, merge SHA o tag deve fermare la
sequenza senza bypass.
