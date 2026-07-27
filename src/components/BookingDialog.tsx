import { useEffect, useRef } from "react";
import { site } from "@/lib/site-config";

interface BookingDialogProps {
  open: boolean;
  onClose: () => void;
  returnFocusRef: React.RefObject<HTMLElement | null>;
}

/**
 * Small accessible demo dialog. It never submits or persists data — it only
 * shows the required demo notice.
 */
export function BookingDialog({ open, onClose, returnFocusRef }: BookingDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      returnFocusRef.current?.focus();
    };
  }, [open, onClose, returnFocusRef]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/40 px-4 py-6 sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-dialog-title"
        aria-describedby="booking-dialog-body"
        className="w-full max-w-md border border-line bg-canvas p-8 shadow-lg"
      >
        <p className="eyebrow">Demo</p>
        <h2
          id="booking-dialog-title"
          className="mt-3 text-2xl leading-tight text-ink"
        >
          Richiedi un appuntamento
        </h2>
        <p id="booking-dialog-body" className="mt-4 text-sm leading-relaxed text-muted">
          {site.booking.demoFeedback}
          {" "}Nel progetto reale questa azione aprirà il canale scelto dallo
          studio: telefono, WhatsApp o portale esterno.
        </p>
        <dl className="mt-6 space-y-2 border-t border-line pt-4 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Telefono</dt>
            <dd>
              <a href={site.contact.phoneHref} className="text-ink hover:text-accent">
                {site.contact.phone}
              </a>
            </dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Email</dt>
            <dd>
              <a href={site.contact.emailHref} className="text-ink hover:text-accent">
                {site.contact.email}
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex justify-end">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 items-center border border-ink px-5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
