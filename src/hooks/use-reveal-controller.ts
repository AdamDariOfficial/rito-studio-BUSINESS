import { useEffect } from "react";

export function revealVisibleElements(root: ParentNode = document) {
  if (typeof window === "undefined") return;
  const revealBoundary = window.innerHeight * 0.94;
  root.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])").forEach((element) => {
    const rect = element.getBoundingClientRect();
    const visibleHeight = Math.min(rect.bottom, revealBoundary) - Math.max(rect.top, 0);
    if (visibleHeight > 0 && visibleHeight / Math.max(rect.height, 1) >= 0.1) {
      element.dataset.revealed = "true";
    }
  });
}

/**
 * Global reveal controller. Adds `.js` to <html> and observes every element
 * that carries a `data-reveal` attribute, promoting it to `data-revealed`
 * when it enters the viewport. Elements already revealed are skipped. When
 * IntersectionObserver is unavailable, every element is revealed immediately.
 */
export function useRevealController() {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("js");

    if (typeof IntersectionObserver === "undefined") {
      html.classList.remove("js");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.revealed = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );

    function observeAll() {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((el) => io.observe(el));
    }

    function observeNode(node: Node) {
      if (!(node instanceof HTMLElement)) return;
      if (node.matches("[data-reveal]:not([data-revealed])")) io.observe(node);
      node
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((el) => io.observe(el));
    }

    function refreshPendingReveals() {
      revealVisibleElements();
      document
        .querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed])")
        .forEach((element) => {
          io.unobserve(element);
          io.observe(element);
        });
    }

    observeAll();

    // Catch late mounts and every subsequent route/filter update.
    const raf = requestAnimationFrame(observeAll);
    let mutationFrame = 0;
    const mutationObserver = new MutationObserver((records) => {
      for (const record of records) {
        record.addedNodes.forEach(observeNode);
      }
      window.cancelAnimationFrame(mutationFrame);
      mutationFrame = window.requestAnimationFrame(refreshPendingReveals);
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("rito:refresh-reveals", refreshPendingReveals);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(mutationFrame);
      mutationObserver.disconnect();
      window.removeEventListener("rito:refresh-reveals", refreshPendingReveals);
      io.disconnect();
    };
  }, []);
}
