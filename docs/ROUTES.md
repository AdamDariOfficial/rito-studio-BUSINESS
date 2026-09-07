# RITO Studio — Routes and Information Architecture

**Famiglia:** Beauty & Wellness
**Versione:** 1.1
**Stato:** approvato

## 1. Principi

- Mobile-first.
- Nuove route aperte dall'alto con reset immediato.
- Nessuno smooth scroll durante il cambio route.
- Back, forward, refresh e direct URL devono funzionare.
- Gli anchor interni possono usare scroll controllato.
- Le route devono essere semanticamente leggibili.
- La 404 è obbligatoria.
- Privacy e cookie restano route reali.
- Dati, menu e route metadata devono essere centralizzati.

## 2. START

## Route pubbliche

```text
/
/privacy
/cookie
/*
```

## Anchor nella home

```text
#trattamenti
#metodo
#studio
#contatti
```

## Home — ordine sezioni

```text
1. StickyHeader
2. Hero
3. IntroStatement
4. EditorialServiceList
5. RitualFeature
6. MethodStrip
7. StudioEditorial
8. GalleryRail
9. BookingCTA
10. PracticalInfo
11. Footer
```

## Regole START

- La CTA “Prenota” porta al canale configurato o a `#contatti`.
- Nessuna route di prenotazione nativa.
- Nessun form con trasmissione dati nella demo.
- Gallery senza lightbox obbligatoria nella prima build.
- Privacy e cookie possono contenere placeholder chiaramente segnalati come non definitivi.

## 3. BUSINESS

## Route pubbliche

```text
/
/trattamenti
/studio
/galleria
/faq
/contatti
/privacy
/cookie
/*
```

## Route opzionali future

```text
/journal
/journal/:slug
/gift-card
/account
/admin
```

Non implementare le route future nella prima versione BUSINESS.

## 4. Responsabilità delle route

### `/`

- posizionamento;
- teaser compatto delle quattro categorie di trattamento;
- metodo;
- gallery teaser;
- CTA;
- informazioni essenziali.

### `/trattamenti`

- elenco completo;
- filtri per categoria;
- ricerca opzionale soltanto se il catalogo è ampio;
- durata e prezzo base;
- righe compatte e interattive;
- dettaglio accessibile in dialog/sheet guidato dalla query.

### Query dettaglio trattamento

- modello URL: `/trattamenti?categoria=hair&trattamento=taglio-essenziale`;
- apertura, chiusura, Back, Forward e refresh conservano lo stato route-aware;
- la query `trattamento` valida apre il dialog/sheet nel catalogo;
- uno slug non valido lascia il catalogo utilizzabile e mostra un recupero inline;
- un trattamento fuori dal filtro attivo non apre il dialog;
- la precedente route `/trattamenti/:slug` non è attiva nel base BUSINESS;
- durata, quando disponibile;
- prezzo;
- contenuti editoriali opzionali, senza sezioni vuote;
- CTA telefonica;
- focus trap, Escape e ritorno al trigger esatto.

URL esempio:

```text
/trattamenti?categoria=skin&trattamento=rituale-viso
```

### `/studio`

- ambiente e identità dello spazio;
- materiali;
- cura e igiene;
- accessibilità essenziale;
- location e conversione.

Il metodo completo non viene ripetuto: resta spiegato nella home.

### `/galleria`

- gallery categorizzata;
- lightbox accessibile;
- keyboard navigation;
- focus return;
- immagini con dimensioni dichiarate.

### `/faq`

- domande complete;
- accordion accessibile;
- un solo pannello aperto per default oppure comportamento documentato;
- nessun auto-scroll invasivo.

### `/contatti`

- dati pratici;
- orari;
- canali;
- indicazioni;
- accessibilità;
- policy appuntamenti;
- CTA.

### `/privacy` e `/cookie`

- contenuti specifici del cliente da revisionare;
- nessuna dichiarazione di conformità legale automatica;
- metadata appropriati;
- accessibili dal footer.

### `404`

- messaggio coerente;
- link home;
- link trattamenti;
- nessun redirect automatico silenzioso.

## 5. Navigazione

### START desktop

```text
Trattamenti
Metodo
Studio
Contatti
Prenota
```

### BUSINESS desktop

```text
Home
Trattamenti
Studio
Galleria
FAQ
Contatti
Prenota
```

`Home` è la prima voce della configurazione condivisa da navbar desktop, drawer mobile e
fallback senza JavaScript. Il suo stato attivo usa un confronto esatto con `/`; le altre
route non vengono marcate come Home.

### Mobile

- pulsante menu con label accessibile;
- drawer con focus management;
- `Escape` chiude;
- il focus ritorna al trigger;
- click su route chiude il drawer;
- body scroll lock senza layout shift;
- CTA booking presente ma non sovrapposta al contenuto; usa WhatsApp + telefono.

## 6. Prenotazione base BUSINESS

- Nessuna route `/prenota` e nessun form.
- Le azioni `booking` usano il conversion adapter centralizzato con WhatsApp + telefono.
- Le azioni `contact` usano email + telefono.
- Il fallback senza JavaScript espone link reali WhatsApp e `tel:` senza introdurre persistenza.
- `/team` e `/prenota` risolvono naturalmente nella 404 condivisa.
- Team può essere rivalutato soltanto come modulo futuro opzionale.

## 7. Configurazione proposta

```ts
interface SiteConfig {
  brand: {
    name: string;
    descriptor: string;
    tagline: string;
  };
  contact: {
    city: string;
    address?: string;
    email: string;
    phone: string;
    phoneHref: `tel:${string}`;
    emailHref: `mailto:${string}`;
    whatsappHref: string;
  };
  contactActions: {
    booking: ContactAction;
    contact: ContactAction;
  };
  hours: OpeningHours[];
  social: SocialLink[];
  seo: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    locale: "it_IT";
  };
}
```

`contactActions` è la fonte centrale del comportamento di conversione BUSINESS: `booking` espone
WhatsApp + telefono e `contact` espone email + telefono. `phoneHref`, `emailHref` e `whatsappHref`
restano link esterni reali del concept demo. Request flow, form, disponibilità live e persistenza
richiedono una decisione separata.

I valori devono essere validati e non duplicati nei componenti.

## 7A. Ritmo verticale corrente

- le intro delle route interne sono compatte e non devono occupare un viewport completo;
- `/trattamenti` mantiene righe dense ma leggibili, senza rimuovere informazioni utili;
- `/studio` usa una composizione breve: intro + unica immagine ambiente, tre concetti Studio-specifici e fascia utility/conversione; non ripete il metodo home, non usa manifesto sticky né seconda immagine;
- `/contatti` dispone le policy pre-visita in griglia su desktop;
- `/galleria`, `/faq`, Privacy e Cookie riducono padding non informativo mantenendo la stessa gerarchia;
- la home preserva la hero e compatta le sezioni sotto il fold.

## 8. Scroll e history

### Cambio route

```text
navigate
→ mount nuova route
→ reset immediato all'inizio
→ focus sul contenuto principale quando appropriato
```

Non usare `behavior: "smooth"`.

### Anchor nella stessa pagina

- compensare l'header;
- aggiornare focus quando necessario;
- non usare offset fragili duplicati;
- rispettare reduced motion.

### Back e forward

Non forzare sempre `scrollTo(0, 0)` durante navigazione history se questo distrugge un ripristino previsto. Il comportamento va testato e documentato.

### Query interne al catalogo

- filtri categoria e apertura/chiusura del dettaglio usano `resetScroll: false` localmente;
- l’apertura iniziale del dettaglio crea una voce history;
- step, swipe e raccomandazioni sostituiscono soltanto `trattamento` con `replace: true`;
- Back chiude il dialog senza attraversare ogni trattamento consultato e Forward lo riapre;
- la chiusura e il focus return usano `preventScroll`, senza disabilitare il reset globale
  delle nuove route.

### Affordance orizzontali

- i filtri trattamento sono una sola riga con scroll nativo e fade sinistro/destro basati
  sulla posizione reale;
- il rail gallery home nasconde l’overflow verticale e conserva quello orizzontale;
- al bordo finale, un nuovo gesto deliberato oltre soglia può navigare a `/galleria`;
- il normale raggiungimento del bordo non naviga e il link `Apri la galleria` resta
  l’alternativa esplicita.

## 9. Metadata

Ogni route BUSINESS deve definire:

- title;
- description;
- canonical;
- Open Graph;
- image social;
- indexability;
- structured data quando appropriato.

Non aggiungere `aggregateRating` senza recensioni reali e verificabili.

## 10. Acceptance criteria routing

- Nessuna route produce pagina bianca.
- Direct URL e refresh funzionano.
- La 404 intercetta slug inesistenti.
- Le anchor START raggiungono la sezione corretta.
- Il drawer mobile si chiude e ripristina il focus.
- La route nuova appare dall'alto senza smooth scroll.
- La navigazione non provoca flash di contenuto nascosto.
- Nessun link placeholder porta a un dominio reale non approvato.

## 11. Override corrente home gallery — 7 settembre 2026

`BW-DEC-055` sostituisce BW-DEC-054 soltanto sul gesto finale del rail; la parità visuale START resta
obbligatoria:

- `GalleryRail` sulla home replica composizione, ordine, dimensioni, spacing, fade e arrow hint del
  rail frozen START;
- nessun heading o link `Apri la galleria` viene aggiunto dentro il rail;
- il normale scroll fino al bordo finale non cambia route;
- soltanto un nuovo drag orizzontale iniziato al vero bordo finale può armare la navigazione;
- il rilascio oltre soglia apre `/galleria`; drag verticale, inverso, cancellato o sotto soglia no;
- `/galleria` continua a essere una route BUSINESS autonoma raggiungibile anche dalla navigazione;
- filtri, lightbox, direct URL, Back/Forward e refresh di `/galleria` restano invariati.

Il gesto è un shortcut BUSINESS additivo e non modifica il contratto history della route.
