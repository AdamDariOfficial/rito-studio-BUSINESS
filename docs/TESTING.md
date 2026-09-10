# RITO Studio — Testing and Verification

**Famiglia:** Beauty & Wellness
**Versione:** 1.2
**Stato:** matrice approvata; gli esiti dei pass sono registrati in `docs/STATUS.md`

## 1. Regola di evidenza

Non dichiarare superati typecheck, lint, test, build, browser check, accessibilità o deploy se non eseguiti.

Per ogni controllo registrare:

- comando o procedura;
- ambiente;
- data;
- risultato;
- errore;
- limite;
- artefatti prodotti.

## 2. Comandi

Eseguire soltanto gli script realmente presenti nel repository.

```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

Adattare al package manager rilevato.

Se uno script non esiste:

```text
non disponibile
```

Non inventarlo.

## 3. Viewport obbligatori

- 360 px;
- 390 px;
- 430 px;
- 768 px;
- desktop rappresentativo;
- desktop ampio.

## 4. START — matrice funzionale

### Header

- logo;
- link anchor;
- CTA;
- sticky;
- drawer;
- `Escape`;
- focus return;
- body scroll lock.

### Hero

- nessun layout shift;
- testo leggibile;
- CTA raggiungibili;
- immagine con dimensioni dichiarate;
- nessun overflow.

### Trattamenti

- righe leggibili;
- eventuale espansione da tastiera;
- nessuna card tagliata;
- contenuti da configurazione.

### Gallery

- immagini responsive;
- alt;
- lazy loading;
- nessun salto di layout.

### Recensioni demo

- visibili di default;
- nessun gating development o query di preview;
- wording neutro e indicazione dimostrativa;
- nessuna attribuzione Google o falso URL;
- nessun `review`, `rating` o `aggregateRating` nel JSON-LD.

### CTA e contatti

- modalità demo non invia dati;
- placeholder chiaramente dimostrativi;
- link esterni non puntano a servizi reali non approvati;
- informazioni pratiche senza hover inutili.

### Legal e 404

- route dirette;
- refresh;
- link footer;
- pagina 404.

## 5. BUSINESS — matrice funzionale

### Routing

- tutte le route;
- direct URL;
- refresh;
- back;
- forward;
- route inesistente;
- query trattamento valida, non valida e fuori categoria;
- reset scroll immediato.

### Catalogo trattamenti

- filtri ripetuti per almeno 20 cambi, inclusi Back e Forward;
- categorie;
- righe interattive compatte;
- dati mancanti;
- prezzi opzionali;
- durata opzionale;
- dettaglio minimo senza sezioni vuote;
- dettaglio arricchito;
- dialog/sheet con Escape, focus trap/return e scroll interno;
- filtri su una sola riga a 360, 390 e 430 px, con scroll nativo e fade start/middle/end;
- posizione verticale invariata entro 2 px su open, close, Back e Forward;
- step precedente/successivo, ArrowLeft/ArrowRight e swipe di un solo trattamento;
- apertura iniziale push, navigazione interna e raccomandazioni con replace;
- raccomandazioni derivate dalla stessa categoria, escluso il corrente, massimo tre;
- apertura diretta tramite `categoria` e `trattamento`;
- `/trattamenti/:slug` risolve nella 404.

### Conversione booking e contact

- `booking` espone WhatsApp + telefono;
- `contact` espone email + telefono;
- desktop header, drawer mobile e fallback no-JS;
- hero, booking CTA, dettaglio trattamento, contatti e footer;
- label visibile e nome accessibile chiari;
- i link esterni usano target/rel appropriati;
- `/prenota` risolve nella 404.

### Moduli rimossi

- Team assente da home, navigazione, footer e route tree;
- `/team` risolve nella 404;
- nessun form o search parameter di prenotazione;
- nessuna richiesta applicativa/server generata dalle CTA: l’azione finale è un link esterno scelto dall’utente.

### Gallery/lightbox

- click;
- tastiera;
- frecce;
- `Escape`;
- focus trap;
- focus return;
- `100dvh`;
- orientamento mobile.
- reveal individuale degli item e refresh sicuro dopo filtro;
- progresso drag proporzionale, soglia armata, reset sotto soglia e su cancel;
- gesto verticale senza progresso e rilascio armato di un solo step;
- rail home senza overflow verticale e con hint circolare 44 × 44 px;
- normale scroll rail senza redirect e gesto finale deliberato verso `/galleria`.

### FAQ

- tastiera;
- focus;
- aria;
- apertura/chiusura;
- reduced motion;
- nessun auto-scroll.
- reveal individuale con stagger massimo 240 ms, indipendente dall’accordion.

### Ritmo e densità

- griglia categorie home: geometria e spacing identici alla baseline pre-reconciliation;
- RitualFeature: tre step presenti senza sezione MethodStrip separata;
- location PracticalInfo cliccabile verso Google Maps;
- intro route interne compatte senza perdita di heading o contenuto;
- `/studio` seconda immagine verticale assente su mobile;
- `/trattamenti` righe più compatte senza perdita di prezzo/durata/descrizione;
- `/contatti` policy pre-visita in griglia desktop;
- nessun overflow orizzontale o touch target sotto il minimo dopo la compattazione.

## 6. Accessibilità

- landmark;
- un `h1` principale per pagina;
- gerarchia heading;
- alt;
- label form;
- error summary quando necessario;
- focus visibile;
- focus order;
- contrasto;
- touch target;
- dialog;
- drawer;
- lightbox;
- reduced motion;
- zoom 200%;
- navigazione solo tastiera.

Obiettivo pratico: WCAG 2.2 AA per i flussi rilevanti.

## 7. Responsive

Verificare:

- nessun overflow orizzontale;
- nessun contenuto tagliato;
- CTA non sovrapposte;
- immagini non deformate;
- footer;
- drawer;
- testi lunghi;
- prezzi lunghi;
- nomi professionisti lunghi;
- safe area;
- tastiera virtuale nel booking;
- mobile editorial order: testo prima dell'immagine, salvo eccezioni documentate.

## 8. Motion

- hero;
- reveal viewport;
- divider reveal autonomo opacity-only, senza translate/scale o layout shift;
- Privacy/Cookie restano sulla stessa riga tra loro a 360, 390 e 430 px;
- CTA booking/contact del blocco scuro rivelate indipendentemente;
- CTA primaria bianca resta bianca in hover/focus/active e rispetta reduced motion;
- replay;
- reduced motion;
- route change;
- drawer;
- FAQ;
- lightbox;
- performance;
- observer cleanup;
- contenuto visibile senza JavaScript, quando applicabile.

## 9. SEO pubblico

- title;
- description;
- canonical;
- Open Graph;
- favicon;
- robots;
- sitemap;
- 404;
- status code;
- URL leggibili;
- structured data appropriati;
- nessun rating sintetico nei dati strutturati e nessuna fixture demo presentata come autentica;
- dati demo non confondibili con attività reale.

## 10. Performance

- immagini dimensionate;
- formati moderni;
- lazy load;
- hero ottimizzata;
- font e pesi limitati;
- layout shift;
- richieste duplicate;
- bundle;
- console;
- network;
- errori runtime.

## 11. Sicurezza e privacy

### START

- nessun form reale in demo;
- nessun segreto client;
- nessun dato reale;
- nessun analytics senza consenso.

### BUSINESS request mode

- validazione server;
- anti-spam;
- rate limiting;
- consenso;
- minimizzazione dati;
- retention documentata;
- accesso minimo;
- log senza dati sensibili;
- nessuna service role nel client.

## 12. QA comparativa START ↔ BUSINESS

Confrontare affiancati:

- palette;
- tipografia;
- navbar;
- footer;
- pulsanti;
- spacing;
- hero;
- trattamento immagini;
- service list;
- reveal;
- hover;
- drawer;
- CTA;
- mobile;
- attribuzione Tretnix.

Test finale:

```text
Nascondendo nome e logo, START e BUSINESS devono sembrare parte della stessa famiglia.
```

## 13. Report richiesto

```md
## Verification report

- Commit:
- Ambiente:
- Comandi disponibili:
- Typecheck:
- Lint:
- Test:
- Build:
- Browser:
- Responsive:
- Accessibility:
- Reduced motion:
- Direct URL:
- Refresh:
- Back/forward:
- Console:
- Network:
- Limiti:
- Test manuali rimanenti:
```

## Premium actions + logo navigation — evidenza dell'8 agosto 2026

Candidate verificato:

```text
5e0ba1acd51dfca0274768ed155224820e81b9d9
```

Merge verificato su GitHub:

```text
PR #5
main: 276fd8e2d985bc7ea37442546800d14236009705
```

Scope esatto:

```text
src/components/Footer.tsx
src/components/StickyHeader.tsx
src/styles.css
```

Gate automatici eseguiti nel clone canonico prima del commit e push:

```text
bun install --frozen-lockfile -> exit 0, no changes
bun run lint                 -> exit 0, 0 errors, 6 inherited warnings
bun run build                -> exit 0, client + SSR + Nitro
git diff --check             -> exit 0
```

Il validator e il publish gate hanno inoltre confermato scope esatto, nessun drift di
`package.json`/`bun.lock`, staged set esatto, remote SHA uguale al candidate e working
tree finale pulito.

Acceptance manuale confermata dall'utente prima della pubblicazione:

- tutte le CTA rettangolari nere condividono un'unica interazione premium;
- il fondo resta inchiostro durante hover/focus/active;
- azioni bianche, outlined e controlli circolari restano distinti;
- logo navbar/footer sulla home porta in cima;
- logo navbar/footer da una route diversa torna alla home in cima.

Il deploy e il runtime di produzione del merge `276fd8e...` non sono stati verificati
in questo pass.

## 14. Browser QA — BW-DEC-051

Verificare prima dello staging:

- navbar desktop e drawer mobile: CTA booking `Prenota`, nessuna icona, nessuna collisione a 1024 px;
- footer: booking senza icona; Privacy + Cookie restano inseparabili;
- `/studio` 360/390/430 px: testo prima dell'immagine, nessun overflow, una sola immagine ambiente;
- `/studio` 768/1024/1440 px: intro e visual condividono il primo blocco, nessun vuoto verticale
  sproporzionato;
- `Il modo RITO`: descrizione sotto il titolo; step verticali su 360/390/430/768 px e quattro
  colonne compatte da 1024/1440 px, senza tagli o testo sovrapposto;
- fascia pre-visita: location apre Google Maps, booking apre WhatsApp + telefono, `Informazioni
  pratiche` apre `/contatti`;
- Back, Forward, refresh e direct URL `/studio` restano invariati;
- reduced motion non nasconde contenuti e non introduce trasformazioni non essenziali;
- console errors = 0 e horizontal page overflow = 0.


## 15. Browser QA — BW-DEC-053

Verificare prima dello staging:

- `/studio` 360/390/430/768 px: intro testo → immagine, una sola immagine, nessun overflow;
- `Dentro RITO`: esattamente tre concetti (`Ambiente`, `Materiali`, `Cura`), verticali su
  mobile/tablet, copy breve e leggibile, divider senza layout shift;
- 1024/1440 px: tre colonne ariose, senza descrizione introduttiva laterale o quarta colonna;
- nessuna ripetizione di `Filosofia` o `Metodo` nella route Studio;
- chiusura utility: nessun heading `Prima della visita`; location apre Google Maps, booking apre
  WhatsApp + telefono, `Informazioni pratiche` apre `/contatti`;
- pagina percepita meno affollata di v1.2.1 senza reintrodurre vuoti verticali sproporzionati;
- navbar/drawer `Prenota` senza icona e footer booking senza icona restano invariati;
- direct URL, refresh, Back/Forward, reduced motion, console errors = 0, horizontal overflow = 0.

## 16. Browser QA finale — BW-DEC-054

Prima dello staging verificare il candidate aggiornato a 360/390/430/768/1024/1440 px.

### Home gallery START parity

Confronto diretto con `family-start-v1.0`:

- nessun heading `Galleria` o titolo `Gesti e materia` dentro `GalleryRail`;
- nessun link `Apri la galleria` dentro il rail;
- ordine immagini Hair → Skin → Studio detail → Hair professional;
- mobile `w-[72%]`, snap nativo, gap e padding equivalenti allo START;
- fade destro e arrow hint presenti finché esiste contenuto a destra e nascosti al termine;
- nessun extra-drag al bordo finale apre `/galleria`;
- tablet e desktop replicano griglia, offset e ritmo START;
- nessun overflow verticale/orizzontale di pagina e nessun layout shift inatteso;
- `prefers-reduced-motion` disabilita la nudge animation senza nascondere il controllo.

### Regressione BUSINESS completa

- `/studio` conserva la versione BW-DEC-053 approvata per il candidate corrente;
- `/trattamenti` filtri + query detail + Back/Forward/refresh invariati;
- `/galleria` route, filtri, lightbox, tastiera, swipe, focus return e direct URL invariati;
- `/faq`, `/contatti`, `/privacy`, `/cookie`, 404, `/team` 404 e `/prenota` 404 invariati;
- navbar `Prenota` senza icona; footer booking senza icona;
- booking = WhatsApp + telefono; contact = email + telefono;
- console errors = 0;
- horizontal page overflow = 0.

Solo dopo questo browser PASS si procede a full diff review e staged validation.

## 17. Browser QA finale — BW-DEC-055

Questa sezione sostituisce il solo requisito `nessun extra-drag` della sezione BW-DEC-054. Tutti gli
altri controlli v1.3.1 restano applicabili.

Verificare a 360/390/430/768/1024/1440 px:

### Home gallery visual parity

- nessun heading `Galleria`, titolo `Gesti e materia` o link `Apri la galleria` dentro il rail;
- ordine Hair → Skin → Studio detail → Hair professional;
- mobile `w-[72%]`, snap, gap, padding, fade e arrow hint equivalenti allo START frozen;
- tablet/desktop replicano griglia, offset e ritmo START;
- nessun overflow di pagina o layout shift inatteso.

### End-of-rail BUSINESS gesture

Su viewport mobile con rail realmente scrollabile:

1. raggiungere normalmente il bordo finale: **non** deve cambiare route;
2. iniziare un nuovo drag orizzontale verso sinistra dal vero bordo finale;
3. verificare la comparsa progressiva dell'indicatore `Apri la galleria`;
4. rilasciare sotto soglia: restare sulla home e ripristinare il rail;
5. ripetere oltre soglia fino allo stato armato e rilasciare: aprire `/galleria` una sola volta;
6. verificare che un drag verticale, inverso o cancellato non apra `/galleria`;
7. Back deve tornare alla home senza rompere scroll/history; Forward deve restare coerente;
8. con `prefers-reduced-motion: reduce`, nessuna motion non essenziale deve restare attiva e il gesto
   diretto deve continuare a funzionare.

### Regression completa

- `/studio` conserva BW-DEC-053;
- `/trattamenti` filtri/query detail/Back/Forward/refresh invariati;
- `/galleria` filtri, lightbox, tastiera, swipe, focus return e direct URL invariati;
- navbar/footer/CTA e conversion channels invariati;
- `/team` e `/prenota` restano 404;
- console errors = 0;
- horizontal page overflow = 0.

Solo dopo browser PASS si procede a full diff review e staged validation.


## 18. Browser QA finale — BW-DEC-056

Questa sezione integra BW-DEC-055 con il bug di reverse durante la stessa pressione.

Su 360/390/430 px, con rail home realmente scrollabile:

1. raggiungere il vero bordo finale con scroll normale;
2. iniziare il drag extra verso `/galleria` e mantenere il touch/pointer premuto;
3. invertire la direzione senza rilasciare;
4. verificare che il rail non possa scorrere indietro durante la stessa pressione;
5. verificare che progress/reveal non diminuiscano dopo l'engagement;
6. rilasciare sotto soglia: nessuna navigazione e rail ripristinato;
7. ripetere oltre soglia, invertire direzione senza release, quindi rilasciare: `/galleria` si apre
   una sola volta;
8. tornare indietro e verificare che, dopo release/cancel, un nuovo swipe inverso normale sia
   nuovamente consentito;
9. gesture verticale, reverse-start e cancel non devono aprire `/galleria`;
10. console errors = 0, horizontal page overflow = 0 e reduced motion invariato.

Tutti i regression check delle sezioni BW-DEC-053/055 restano obbligatori prima del freeze.


## 19. Browser QA finale — BW-DEC-057

Questa sezione sostituisce i punti monotoni 4-7 della sezione BW-DEC-056. Tutti gli altri regression
check precedenti restano obbligatori.

Su 360/390/430 px, con rail home realmente scrollabile:

1. raggiungere il vero bordo finale con scroll normale;
2. iniziare un nuovo drag outward verso `/galleria` e mantenere il touch/pointer premuto;
3. avanzare sotto soglia, quindi invertire fino al punto di partenza: progress/reveal devono tornare a
   `0`, il rail reale deve restare fermo al bordo finale e il rilascio non deve navigare;
4. superare la soglia, verificare lo stato armato, quindi invertire sotto soglia senza release: lo stato
   deve disarmarsi e il rilascio deve restare sulla home;
5. superare la soglia, invertire parzialmente ma restare sopra soglia, quindi rilasciare: `/galleria`
   deve aprirsi una sola volta;
6. durante una gesture già acquisita, invertire oltre il punto iniziale: il synthetic offset deve
   restare clampato a `0` e il rail non deve mostrare immagini precedenti;
7. dopo release/cancel, iniziare una nuova gesture inversa: il normale scroll verso le immagini
   precedenti deve funzionare;
8. gesture verticale o gesture che nasce direttamente inversa dal bordo finale non deve essere
   acquisita dal shortcut e non deve aprire `/galleria`;
9. la Console non deve accumulare warning `Ignored attempt to cancel a touchmove event with
   cancelable=false` generati dal gesto gallery;
10. console application errors = 0, horizontal page overflow = 0 e reduced motion invariato.

Solo dopo questo browser PASS si procede a full diff review e staged validation.

## Browser QA finale — rail categorie edge-to-edge

Dopo BW-DEC-058 verificare `/galleria` e `/trattamenti` a 360, 390 e 430 px:

1. a `scrollLeft = 0`, la superficie sticky e la linea inferiore arrivano al bordo sinistro e destro
   del viewport senza gutter esterno;
2. il primo controllo (`Tutte` / `Tutti`) resta interamente leggibile e allineato all'inset
   editoriale di 20 px;
3. a fine corsa il controllo finale resta interamente leggibile con lo stesso inset, mentre la
   superficie del rail continua fino al bordo viewport;
4. fade sinistro e destro compaiono solo quando `canScrollLeft` / `canScrollRight` lo richiedono e
   sono ancorati ai veri bordi del rail;
5. nessun overflow orizzontale della pagina;
6. selezione filtro, auto-scroll del filtro attivo, sticky behavior e return-to-results restano
   invariati;
7. `/trattamenti` preserva query detail, Back/Forward e refresh; `/galleria` preserva grid, lightbox,
   swipe, tastiera, focus return e direct URL.

Il browser PASS di questa sezione è obbligatorio prima del freeze BUSINESS.

## Verification report — final BUSINESS freeze candidate v1.3.5

**Data:** 7 settembre 2026
**Branch:** `feat/rito-business-final-freeze-reconciliation`
**Source HEAD:** `b6a82f918370f730681e9e0c0572a7a653d2dfeb`
**Scope:** 39 path cumulativi.

Automated validation executed in the canonical Windows repository:

```text
Frozen install:        PASSED
Typecheck:             NOT AVAILABLE
Lint:                  PASSED
Tests:                 NOT AVAILABLE
Production build:      PASSED
Repository checksums:  PASSED
Exact 39-file scope:   PASSED
Payload/protected:     PASSED
Whitespace:            PASSED
Stage state:           0 staged paths
```

Manual/browser evidence confirmed by the project owner after v1.3.5:

- `/galleria` and `/trattamenti` category rails: PASS at the requested mobile edge behavior;
- first/last category inset and full-bleed sticky/underline/fade surfaces: PASS;
- no unintended horizontal page overflow observed;
- filter selection/auto-scroll/return behavior: PASS;
- home gallery START-equivalent composition: PASS;
- BUSINESS end-of-rail gesture, cancel-to-origin clamp and route transition: PASS;
- `/galleria` filters/lightbox smoke regression: PASS;
- `/trattamenti` query detail and navigation smoke regression: PASS;
- `/studio`, navbar, footer and CTA smoke regression: PASS;
- direct navigation/history checks requested in the final pass: PASS;
- no application error remained open from the final browser review.

A full diff review was completed before staging and found no blocker. Staged validation remains the
next evidence gate and must not be inferred from this report until it is actually run.
