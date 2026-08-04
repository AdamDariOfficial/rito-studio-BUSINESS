import { Link } from "@tanstack/react-router";
import { teamProfiles } from "@/data/content";

export function TeamTeaser() {
  return (
    <section className="bg-canvas py-24 md:py-32" aria-labelledby="team-teaser-heading">
      <div className="container-editorial grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <p className="eyebrow" data-reveal>
            Team
          </p>
          <h2
            id="team-teaser-heading"
            className="mt-5 font-display text-[clamp(2rem,4.4vw,3.5rem)] leading-[1.04] text-ink"
            data-reveal
          >
            Persone, competenze, <span className="italic">attenzione.</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Profili dimostrativi che mostrano come raccontare ruoli e servizi senza inventare
            credenziali o risultati.
          </p>
          <Link
            to="/team"
            className="mt-7 inline-flex min-h-11 items-center border-b border-ink text-sm font-medium text-ink hover:text-accent"
          >
            Conosci il team
          </Link>
        </div>
        <ol className="border-t border-line md:col-span-6 md:col-start-7">
          {teamProfiles.map((profile, index) => (
            <li
              key={profile.id}
              className="grid grid-cols-[2rem_1fr] gap-4 border-b border-line py-6"
              data-reveal
            >
              <span className="font-display text-lg text-accent">0{index + 1}</span>
              <div>
                <h3 className="font-display text-2xl text-ink">{profile.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{profile.role}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
