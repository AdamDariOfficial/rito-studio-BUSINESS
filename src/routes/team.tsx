import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PageIntro } from "@/components/PageIntro";
import { SiteShell } from "@/components/SiteShell";
import { teamProfiles } from "@/data/content";
import { getTreatment } from "@/data/treatments";
import { buildHead, routeSeo } from "@/lib/seo";

export const Route = createFileRoute("/team")({
  head: () => buildHead(routeSeo.team),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Team"
        title={
          <>
            Persone, competenze, <span className="italic text-accent">attenzione.</span>
          </>
        }
        intro="Profili esclusivamente dimostrativi: mostrano la struttura editoriale BUSINESS senza attribuire nomi reali, certificazioni, anzianità o risultati."
      />
      <section className="py-16 md:py-24" aria-label="Profili del team">
        <div className="container-editorial space-y-20 md:space-y-28">
          {teamProfiles.map((profile, index) => (
            <article key={profile.id} className="grid gap-10 md:grid-cols-12 md:gap-14" data-reveal>
              <div
                className={
                  index % 2
                    ? "order-2 md:order-2 md:col-span-5 md:col-start-8"
                    : "order-2 md:order-1 md:col-span-5"
                }
              >
                <ImagePlaceholder
                  ratio="3 / 4"
                  src={profile.image}
                  alt=""
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
              <div
                className={
                  index % 2
                    ? "order-1 md:order-1 md:col-span-6 md:self-center"
                    : "order-1 md:order-2 md:col-span-6 md:col-start-7 md:self-center"
                }
              >
                <p className="eyebrow">Profilo dimostrativo · 0{index + 1}</p>
                <h2 className="mt-4 font-display text-4xl text-ink">{profile.name}</h2>
                <p className="mt-2 text-sm text-accent-strong">{profile.role}</p>
                <p className="mt-6 max-w-lg leading-relaxed text-muted">{profile.approach}</p>
                <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 border-y border-line py-4 text-sm text-ink">
                  {profile.competencies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                  {profile.serviceSlugs.map((slug) => {
                    const treatment = getTreatment(slug);
                    return treatment ? (
                      <Link
                        key={slug}
                        to="/trattamenti/$slug"
                        params={{ slug }}
                        className="text-sm text-ink underline underline-offset-4 hover:text-accent"
                      >
                        {treatment.name}
                      </Link>
                    ) : null;
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
