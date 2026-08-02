export const NAV_OFFSET = 84;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;

  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
  window.scrollTo({
    top: Math.max(top, 0),
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}

export function scrollToTop() {
  if (typeof window === "undefined") return;
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });
}
