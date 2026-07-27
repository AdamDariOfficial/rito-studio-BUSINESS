import { useEffect, useRef, useState, useId } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site, ctaLabels } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface StickyHeaderProps {
  onBookClick: (trigger: HTMLElement) => void;
}

export function StickyHeader({ onBookClick }: StickyHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerId = useId();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const desktopBookRef = useRef<HTMLButtonElement>(null);
  const mobileBookRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on breakpoint change to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    function handle(e: MediaQueryListEvent) {
      if (e.matches) setOpen(false);
    }
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  // Drawer effects: focus containment, escape, scroll lock
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const firstLink = drawerRef.current?.querySelector<HTMLElement>("a,button");
    firstLink?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const root = drawerRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])");
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
      triggerRef.current?.focus();
    };
  }, [open]);

  function handleAnchorClick() {
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-canvas transition-[border-color,background-color] duration-200",
        scrolled ? "border-b border-line" : "border-b border-transparent",
      )}
      style={{ height: "var(--header-height)" }}
    >
      <div className="container-editorial flex h-full items-center justify-between gap-6">
        <Link
          to="/"
          className="font-display text-lg leading-none tracking-tight text-ink"
          aria-label={`${site.brand.name} — home`}
        >
          RITO<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Navigazione principale" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.hash}
              href={item.hash}
              className="text-sm text-ink transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            ref={desktopBookRef}
            type="button"
            onClick={() => onBookClick(desktopBookRef.current!)}
            className="inline-flex min-h-11 items-center border border-ink bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-accent-strong hover:border-accent-strong"
          >
            {ctaLabels.book}
          </button>
        </div>

        <button
          ref={triggerRef}
          type="button"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls={drawerId}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id={drawerId}
        ref={drawerRef}
        aria-hidden={!open}
        className={cn(
          "fixed inset-x-0 top-[var(--header-height)] bottom-0 z-40 flex flex-col bg-canvas transition-opacity lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav
          aria-label="Navigazione mobile"
          className="container-editorial flex flex-1 flex-col pt-10"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item, idx) => (
              <li key={item.hash} className="border-b border-line">
                <a
                  href={item.hash}
                  onClick={handleAnchorClick}
                  className="flex items-baseline justify-between py-5 font-display text-3xl text-ink"
                >
                  <span>{item.label}</span>
                  <span className="eyebrow text-muted">{String(idx + 1).padStart(2, "0")}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto py-8">
            <button
              ref={mobileBookRef}
              type="button"
              onClick={() => {
                setOpen(false);
                // Defer to next frame so drawer's focus-return doesn't fight
                requestAnimationFrame(() => onBookClick(mobileBookRef.current!));
              }}
              className="inline-flex min-h-12 w-full items-center justify-center border border-ink bg-ink px-6 text-sm font-medium text-white"
            >
              {ctaLabels.bookPrimary}
            </button>
            <p className="mt-4 text-xs text-muted">{site.contact.locationLabel}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
