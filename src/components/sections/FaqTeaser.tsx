import { Link } from "@tanstack/react-router";
import { EditorialArrow } from "@/components/EditorialArrow";
import { faqItems } from "@/data/content";

export function FaqTeaser() {
  return (
    <section
      className="border-y border-line bg-surface py-12 md:py-16"
      aria-labelledby="faq-teaser-heading"
    >
      <div className="container-editorial grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Prima dell'appuntamento</p>
          <h2
            id="faq-teaser-heading"
            className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl"
          >
            Domande essenziali.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <ul className="border-t border-line">
            {faqItems.slice(0, 3).map((item) => (
              <li key={item.id} className="border-b border-line py-5 text-sm text-ink" data-reveal>
                {item.question}
              </li>
            ))}
          </ul>
          <Link to="/faq" className="editorial-link group mt-7 min-h-11 text-sm font-medium">
            Leggi tutte le risposte
            <EditorialArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
