import { createFileRoute } from "@tanstack/react-router";
import { PolicyLayout } from "@/components/PolicyLayout";
import { buildHead, routeSeo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => buildHead(routeSeo.privacy),
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
          trasmettono dati a un database applicativo. Il percorso di prenotazione è una simulazione
          locale e non invia né conserva dati personali.
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
          La pagina Contatti mostra inizialmente un pannello locale, senza iframe e senza richiesta
          alla mappa di Google. Il contenuto interattivo viene creato soltanto quando l&apos;utente
          seleziona “Attiva la mappa interattiva”. Da quel momento il browser comunica con Google,
          che può ricevere indirizzo IP, informazioni sul dispositivo e altri dati tecnici secondo
          le proprie condizioni e informative.
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
