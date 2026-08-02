import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/PolicyLayout";
import { canonicalUrl } from "@/lib/site-config";

export const Route = createFileRoute("/privacy")({
  head: () => {
    const canonical = canonicalUrl("/privacy");

    return {
      meta: [
        { title: "Privacy — RITO Studio" },
        {
          name: "description",
          content:
            "Informativa privacy di RITO Studio: navigazione, contatti esterni, Google Fonts e mappa Google attivabile.",
        },
        { name: "robots", content: "noindex, follow" },
        { property: "og:title", content: "Privacy — RITO Studio" },
        {
          property: "og:description",
          content: "Informazioni sul trattamento dei dati tecnici durante la navigazione del sito.",
        },
        { property: "og:url", content: canonical },
      ],
      links: [{ rel: "canonical", href: canonical }],
    };
  },
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy"
      intro="Come vengono gestite le informazioni durante la navigazione e l'uso dei collegamenti esterni."
    >
      <section>
        <h2>Configurazione del sito</h2>
        <p>
          Il sito non include account, login, pagamenti, disponibilità in tempo reale o moduli che
          trasmettono dati a un database applicativo. I pulsanti di prenotazione avviano una
          chiamata telefonica tramite le funzioni del dispositivo dell&apos;utente.
        </p>
      </section>

      <section>
        <h2>Contatti esterni</h2>
        <p>
          I collegamenti a telefono ed email aprono applicazioni o servizi esterni scelti
          dall&apos;utente. Le informazioni eventualmente comunicate dopo l&apos;uscita dal sito
          sono trattate dai rispettivi provider e, in un progetto reale, dal titolare indicato nella
          versione definitiva dell&apos;informativa.
        </p>
      </section>

      <section>
        <h2>Dati tecnici di navigazione</h2>
        <p>
          L&apos;hosting e le risorse necessarie al caricamento della pagina possono ricevere dati
          tecnici ordinari, come indirizzo IP, tipo di browser, data e ora della richiesta e
          informazioni utili alla sicurezza e alla distribuzione dei contenuti.
        </p>
      </section>

      <section>
        <h2>Google Fonts</h2>
        <p>
          Il sito richiede i caratteri tipografici a Google Fonts. Durante questa richiesta Google
          può ricevere dati tecnici della connessione, inclusi indirizzo IP e informazioni del
          browser necessarie a fornire la risorsa.
        </p>
      </section>

      <section>
        <h2>Mappa Google su richiesta</h2>
        <p>
          La home mostra inizialmente un pannello locale, senza iframe e senza richiesta alla mappa
          di Google. Il contenuto interattivo viene creato soltanto quando l&apos;utente seleziona
          “Attiva la mappa interattiva”. Da quel momento il browser comunica con Google, che può
          ricevere indirizzo IP, informazioni sul dispositivo e altri dati tecnici secondo le
          proprie condizioni e informative.
        </p>
        <p>
          La mappa può essere disattivata nuovamente dalla pagina. Il collegamento esterno a Google
          Maps apre invece direttamente il servizio in una nuova scheda.
        </p>
      </section>

      <section>
        <h2>Titolare e diritti</h2>
        <p>
          Questa versione utilizza dati di contatto non operativi. Prima della pubblicazione per un
          cliente reale devono essere indicati titolare del trattamento, contatti, basi giuridiche,
          destinatari, tempi di conservazione e modalità per esercitare i diritti previsti dalla
          normativa applicabile.
        </p>
      </section>
    </PolicyLayout>
  );
}
