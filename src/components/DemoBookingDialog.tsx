import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function DemoBookingDialog({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/50 p-4 md:items-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md rounded-[4px] bg-paper p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">Demo Tretnix</p>
            <h2 id="demo-title" className="mt-2 font-display text-2xl">
              {siteConfig.booking.ctaPrimary}
            </h2>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Chiudi"
            className="inline-flex h-10 w-10 items-center justify-center"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">
          {siteConfig.booking.demoMessage} In una versione reale questa azione
          aprirebbe il canale scelto dallo studio (portale esterno, WhatsApp o
          richiesta contatti).
        </p>

        <div className="mt-6 flex flex-col gap-2 text-sm">
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex h-11 items-center justify-center rounded-[3px] border border-ink text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Scrivi a {siteConfig.contact.email}
          </a>
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="inline-flex h-11 items-center justify-center rounded-[3px] border border-line text-ink transition-colors hover:border-ink"
          >
            Chiama {siteConfig.contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
