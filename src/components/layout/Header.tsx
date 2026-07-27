import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";

function handleAnchorClick(href: string) {
  if (!href.startsWith("#")) return;
  const el = document.querySelector(href);
  if (!el) return;
  const headerH = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
    10,
  ) || 80;
  const top = el.getBoundingClientRect().top + window.scrollY - headerH - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

export function Header({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab") {
        // simple focus containment inside the panel
        const panel = document.getElementById("mobile-drawer");
        if (!panel) return;
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
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
    };
    document.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [open]);

  const linkClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // Defer so the drawer close doesn't fight the scroll.
    requestAnimationFrame(() => handleAnchorClick(href));
  };

  return (
    <header
      className={`sticky top-0 z-40 bg-canvas transition-colors duration-200 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
      style={{ height: "var(--header-height)" }}
    >
      <div className="container-rito flex h-full items-center justify-between">
        <a
          href="#top"
          onClick={linkClick("#top")}
          className="font-display text-lg tracking-tight text-ink md:text-xl"
          aria-label={`${siteConfig.brand.name} — home`}
        >
          RITO<span className="text-accent"> ·</span> Studio
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigazione principale">
          {siteConfig.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={linkClick(l.href)}
              className="text-sm text-ink transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onBook}
            className="inline-flex h-10 items-center rounded-[3px] bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-accent-strong"
          >
            Prenota
          </button>
        </nav>

        <button
          ref={triggerRef}
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-label="Apri menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {open && (
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex flex-col bg-canvas md:hidden"
        >
          <div
            className="flex items-center justify-between border-b border-line px-5"
            style={{ height: "var(--header-height)" }}
          >
            <span className="font-display text-lg">RITO<span className="text-accent"> ·</span> Studio</span>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center"
              aria-label="Chiudi menu"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <nav className="flex flex-1 flex-col px-5 py-8" aria-label="Navigazione mobile">
            {siteConfig.nav.map((l, i) => (
              <a
                key={l.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={l.href}
                onClick={linkClick(l.href)}
                className="border-b border-line py-5 font-display text-2xl text-ink"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                requestAnimationFrame(onBook);
              }}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-[3px] bg-ink px-6 text-sm font-medium text-paper"
            >
              Prenota il tuo rituale
            </button>
            <p className="mt-6 text-sm text-muted">{siteConfig.contact.locationLabel}</p>
          </nav>
        </div>
      )}
    </header>
  );
}
