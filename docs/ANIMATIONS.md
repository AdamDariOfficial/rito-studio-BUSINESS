# RITO Studio — Animation Language

**Famiglia:** Beauty & Wellness
**Versione:** 1.2
**Stato:** approvato

## 1. Obiettivo

Il movimento deve comunicare:

- precisione;
- calma;
- continuità;
- tattilità;
- controllo.

Non deve comunicare:

- spettacolarità;
- gamification;
- velocità SaaS;
- effetto “template AI”;
- lusso ottenuto con animazioni invasive.

## 2. Token

```css
--motion-duration-fast: 180ms;
--motion-duration-ui: 280ms;
--motion-duration-reveal: 620ms;
--motion-duration-hero: 820ms;

--motion-ease-ui: cubic-bezier(0.2, 0.8, 0.2, 1);
--motion-ease-reveal: cubic-bezier(0.22, 1, 0.36, 1);
```

Stagger:

```text
60–80ms
massimo totale consigliato: 240ms
```

## 3. Hero

Sequenza:

1. eyebrow fade-in;
2. headline reveal per blocchi o righe;
3. body e CTA;
4. immagine con scale minima `1.025 → 1`;
5. microdato.

Vincoli:

- nessun ritardo superiore a 250ms prima del contenuto principale;
- headline leggibile anche senza JavaScript;
- nessun flash invisibile;
- niente split in singole lettere;
- niente parallax nella prima versione;
- immagine non deve spostare il layout.

## 4. Reveal sotto la fold

Pattern principale:

```text
opacity: 0 → 1
translateY: 20px → 0
duration: 620ms
once: true
```

Attivazione:

- quando il contenuto entra realmente nel viewport;
- soglia indicativa 10–20%;
- root margin regolato senza far concludere l'animazione prima della visibilità.

Fallback:

- contenuto visibile senza observer;
- in reduced motion, nessuna traslazione.

## 5. Image reveal

Uso selettivo:

- hero;
- RitualFeature;
- una sezione studio;
- gallery teaser.

Pattern ammesso:

```text
clip-path lieve
oppure
opacity + scale minima
```

Non applicarlo a ogni immagine.

## 6. Hover

Solo per `pointer: fine`.

### Immagini cliccabili

```text
scale: 1 → 1.02
duration: 500–700ms
```

### Link

- linea che si estende;
- freccia che si sposta massimo 4px;
- nessun cambio improvviso di layout.

### Pulsanti

- transizione di sfondo e testo;
- nessun magnetismo;
- nessun cursore custom;
- nessuna rotazione decorativa.

### Informazioni pratiche

Nessun effetto hover decorativo. Solo stato standard di link e focus.

## 7. Navbar e drawer

### Navbar

- sticky stabile;
- bordo o cambio superficie dopo lo scroll;
- transizione 180–280ms;
- non nascondere durante lo scroll nella prima versione.

### Drawer mobile

- apertura 280–360ms;
- pannello solido;
- voci con stagger minimo;
- focus trap;
- `Escape`;
- body scroll lock;
- nessuna animazione che ritardi l'accesso ai link.

## 8. FAQ BUSINESS

- altezza animata in modo controllato;
- icona ruota massimo 90°;
- focus invariato;
- niente auto-scroll tra domande;
- nessuna sequenza automatica;
- reduced motion: apertura immediata.

## 9. Gallery e lightbox BUSINESS

- apertura con opacity e scale minima;
- nessun zoom aggressivo;
- swipe opzionale;
- tastiera obbligatoria;
- focus iniziale e ritorno;
- viewport mobile con `100dvh`;
- chiusura con `Escape`;
- nessun autoplay.

## 10. Route transition BUSINESS

Non necessaria nella prima implementazione.

Se introdotta dopo verifica:

- durata massima 160–220ms;
- non mostrare la pagina precedente durante il reset scroll;
- non bloccare input;
- non usare smooth scroll;
- direct URL e refresh invariati.

## 11. Reduced motion

Con `prefers-reduced-motion: reduce`:

- contenuto immediatamente visibile;
- niente translate significativo;
- niente scale;
- niente stagger;
- drawer e dialog possono mantenere una dissolvenza molto breve;
- nessuna funzionalità dipende dal motion.

## 12. Performance

- preferire `transform` e `opacity`;
- evitare listener scroll non throttled;
- un solo observer condiviso quando appropriato;
- cleanup obbligatorio;
- niente animazioni su proprietà che causano layout continuo;
- lazy load per immagini sotto la fold;
- non caricare una libreria aggiuntiva se lo stack già copre il comportamento.

## 13. Anti-pattern

- smooth scroll al cambio route;
- reveal già terminato;
- animazioni su tutte le parole;
- cursor custom;
- parallax multipli;
- marquee continuo;
- infinite loop decorativi;
- floating badge;
- hover su elementi non interattivi;
- motion su orari e indirizzo;
- ritardi che nascondono contenuto;
- transizioni che ignorano reduced motion.

## 14. Acceptance criteria

- Il contenuto è leggibile senza animazioni.
- Gli elementi sotto la fold entrano quando raggiungono il viewport.
- Nessuna animazione riparte casualmente.
- Nessun elemento resta invisibile.
- Reduced motion è rispettato.
- Mobile non presenta jank evidente.
- START e BUSINESS usano gli stessi token e pattern percepiti.

## 15. Premium dark actions condivise — 8 agosto 2026

START e BUSINESS adottano lo stesso trattamento per le azioni rettangolari con fondo
inchiostro. Il controllo resta nero durante hover, focus e active; non usa il cambio
improvviso verso borgogna.

Pattern approvato:

```text
hover fine-pointer:
- passaggio di luce interno a contrasto molto basso;
- lift massimo: 1 px;
- ombra morbida e contenuta;
- durata principale dello sweep: 640 ms con motion-ease-reveal.

active:
- ritorno a quota base;
- micro-compressione massima: scale(0.995);
- ombra ridotta.

reduced motion:
- nessuna traslazione o compressione;
- nessuno sweep luminoso;
- funzionalità invariata.
```

Il pattern si applica soltanto a link e pulsanti rettangolari realmente neri. Restano
esclusi controlli circolari, azioni bianche e azioni outlined.

Questa regola prevale sul precedente esempio generico “transizione di sfondo e testo”
per le CTA nere. Nelle informazioni pratiche i dati statici restano privi di hover
decorativo; una vera CTA nera mantiene invece questo pattern condiviso.


## 16. Divider reveal e primary action chiara — 6 settembre 2026

I divider editoriali che partecipano a un reveal seguono il contratto condiviso `TRX-DEC-038`:

```text
opacity: 0 → 1
translate: none
scale: none
layout geometry: invariata
lifecycle: autonomo rispetto al contenuto
```

Un bordo che contribuiva al box model mantiene una geometria equivalente trasparente mentre la
linea visuale viene sovrapposta tramite `RevealDivider` o tecnica equivalente. In reduced motion la
linea è immediatamente visibile. Bordi strutturali di immagini, dialog, controlli o state boundary
non diventano automaticamente divider reveal.

La CTA primaria bianca del blocco booking usa il corrispondente trattamento premium delle dark
actions: superficie bianca invariata, sweep interno molto discreto, lift massimo 1 px,
micro-compressione in active e nessun movimento/sweep con reduced motion. Le CTA booking e contact
nel blocco vengono rivelate come elementi indipendenti, con stagger contenuto entro 240 ms.


## Browser QA corrective — 6 settembre 2026

La presenza di un divider autonomo non deve alterare selettori strutturali come `odd/even` o
`nth-child`. Quando una griglia dipende dalla parità dei figli, il divider di apertura vive fuori
dalla lista oppure usa una tecnica che non entra nel conteggio dei figli. `RitualFeature` applica
reveal separato ai tre step del metodo e ai relativi divider.


## End-of-rail gallery gesture — lock monotono

Per la home BUSINESS il drag additivo oltre il vero bordo finale usa uno stato monotono per la
singola sequenza di input:

- prima dell'engagement il rail conserva lo scroll nativo;
- dopo un movimento orizzontale valido verso `/galleria`, il massimo extra-drag raggiunto può solo
  aumentare fino a release/cancel;
- un reverse move nella stessa pressione non retrae rail o progress e non riattiva lo scroll nativo
  all'indietro;
- release sotto soglia ripristina lo stato senza route change;
- release armato apre `/galleria`;
- una nuova gesture dopo release/cancel riabilita integralmente il normale scroll del rail.

Il lock è quindi temporaneo e limitato alla gesture intenzionale, non al componente nel suo insieme.


## End-of-rail gallery gesture — cancellation clamp

BW-DEC-057 sostituisce il solo comportamento monotono di BW-DEC-056 mantenendone il vincolo sul rail
reale. Durante una singola pressione già acquisita verso `/galleria`:

- il progresso segue l'extra-drag **corrente**, non il massimo storico della gesture;
- invertendo direzione il reveal/progress può tornare fino a `0`;
- tornando sotto soglia lo stato armato viene rimosso e il rilascio resta sulla home;
- oltre `0` il reverse è clampato: la stessa pressione non può far scorrere il rail reale verso le
  immagini precedenti;
- per tornare realmente indietro nel rail l'utente rilascia e avvia una nuova gesture;
- l'intento outward dal vero bordo finale viene acquisito presto, prima che lo scroll nativo prenda
  possesso della gesture; `preventDefault()` viene invocato solo su eventi cancellabili.

Il risultato consente quindi sia il commit verso `/galleria` sia l'annullamento naturale dello stesso
drag, senza superare all'indietro il punto esatto da cui il gesto era partito.
