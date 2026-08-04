import { useRef, useState, type FormEvent } from "react";
import { treatments } from "@/data/treatments";
import { site } from "@/lib/site-config";

interface DemoValues {
  treatment: string;
  preference: string;
}

const initialValues: DemoValues = { treatment: "", preference: "" };

export function BookingDemoForm({ initialTreatment = "" }: { initialTreatment?: string }) {
  const seededValues = treatments.some((item) => item.slug === initialTreatment)
    ? { ...initialValues, treatment: initialTreatment }
    : initialValues;
  const [values, setValues] = useState(seededValues);
  const [errors, setErrors] = useState<Partial<Record<keyof DemoValues, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: typeof errors = {};
    if (!values.treatment) nextErrors.treatment = "Scegli un trattamento o un'esigenza.";
    if (!values.preference) nextErrors.preference = "Scegli una fascia dimostrativa.";
    setErrors(nextErrors);
    setSubmitted(false);

    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => errorRef.current?.focus());
      return;
    }

    setSubmitted(true);
  }

  return (
    <form onSubmit={submit} noValidate className="border border-line bg-surface p-6 sm:p-8 md:p-10">
      <div
        ref={errorRef}
        tabIndex={-1}
        role="alert"
        className={
          Object.keys(errors).length ? "mb-8 border border-accent bg-canvas p-4" : "sr-only"
        }
      >
        {Object.keys(errors).length ? (
          <>
            <p className="font-medium text-ink">Controlla i campi indicati.</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-muted">
              {Object.values(errors).map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      <div>
        <label htmlFor="treatment" className="text-sm font-medium text-ink">
          Trattamento o esigenza
        </label>
        <select
          id="treatment"
          required
          value={values.treatment}
          onChange={(event) =>
            setValues((current) => ({ ...current, treatment: event.target.value }))
          }
          aria-invalid={Boolean(errors.treatment)}
          aria-required="true"
          aria-describedby={errors.treatment ? "treatment-error" : "treatment-help"}
          className="mt-2 min-h-12 w-full border border-line bg-canvas px-4 text-base text-ink focus-visible:outline-2"
        >
          <option value="">Scegli una voce</option>
          <option value="non-so">Non so ancora quale scegliere</option>
          {treatments.map((treatment) => (
            <option key={treatment.slug} value={treatment.slug}>
              {treatment.name}
            </option>
          ))}
        </select>
        <p id="treatment-help" className="mt-2 text-xs text-muted">
          La selezione resta soltanto in questa pagina.
        </p>
        {errors.treatment ? (
          <p id="treatment-error" className="mt-2 text-sm text-accent-strong">
            {errors.treatment}
          </p>
        ) : null}
      </div>

      <fieldset
        className="mt-8"
        aria-required="true"
        aria-invalid={Boolean(errors.preference)}
        aria-describedby={errors.preference ? "preference-error" : undefined}
      >
        <legend className="text-sm font-medium text-ink">Preferenza dimostrativa</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {["Mattina", "Pomeriggio", "Da concordare"].map((label) => (
            <label
              key={label}
              className="flex min-h-12 cursor-pointer items-center gap-3 border border-line bg-canvas px-4 text-sm text-ink has-[:checked]:border-accent has-[:checked]:text-accent-strong"
            >
              <input
                type="radio"
                name="preference"
                value={label}
                required
                checked={values.preference === label}
                onChange={(event) =>
                  setValues((current) => ({ ...current, preference: event.target.value }))
                }
              />
              {label}
            </label>
          ))}
        </div>
        {errors.preference ? (
          <p id="preference-error" className="mt-2 text-sm text-accent-strong">
            {errors.preference}
          </p>
        ) : null}
      </fieldset>

      <div className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
        <p>
          Non inserire nome, email, telefono o altri dati personali: questa esperienza non contatta
          lo studio.
        </p>
        <p className="mt-2">La richiesta non blocca un appuntamento.</p>
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center border border-ink bg-ink px-6 text-sm font-medium text-white hover:border-accent-strong hover:bg-accent-strong sm:w-auto"
      >
        Simula la richiesta
      </button>

      {submitted ? (
        <div className="mt-8 border border-accent bg-canvas p-5" role="status" aria-live="polite">
          <p className="font-display text-2xl text-ink">Simulazione completata.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{site.booking.demoFeedback}</p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setValues(seededValues);
            }}
            className="mt-4 min-h-11 text-sm font-medium text-ink underline underline-offset-4"
          >
            Ricomincia
          </button>
        </div>
      ) : null}
    </form>
  );
}
