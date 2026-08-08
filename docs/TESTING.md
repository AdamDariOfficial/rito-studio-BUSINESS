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

### Prenotazione telefonica

- tutte le CTA usano `site.contact.phoneHref`;
- desktop header, drawer mobile e fallback no-JS;
- hero, booking CTA, dettaglio trattamento, contatti e footer;
- label visibile e nome accessibile chiari;
- `/prenota` risolve nella 404.

### Moduli rimossi

- Team assente da home, navigazione, footer e route tree;
- `/team` risolve nella 404;
- nessun form o search parameter di prenotazione;
- nessuna richiesta di rete generata dalle CTA telefoniche.

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
- nessun rating inventato;
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
