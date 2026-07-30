# RITO Studio — Decision Log

**Famiglia:** Beauty & Wellness
**Versione:** 1.1
**Stato:** decisioni approvate e aggiornate al 28 luglio 2026

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
