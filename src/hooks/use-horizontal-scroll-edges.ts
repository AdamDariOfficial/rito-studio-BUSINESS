import { useEffect, useState, type RefObject } from "react";

interface HorizontalScrollEdges {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  hasOverflow: boolean;
}

const initialEdges: HorizontalScrollEdges = {
  canScrollLeft: false,
  canScrollRight: false,
  hasOverflow: false,
};

export function useHorizontalScrollEdges<T extends HTMLElement>(
  scrollRef: RefObject<T | null>,
  tolerance = 2,
) {
  const [edges, setEdges] = useState<HorizontalScrollEdges>(initialEdges);

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    let frame = 0;
    const update = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const maxScrollLeft = Math.max(0, element.scrollWidth - element.clientWidth);
        const next = {
          hasOverflow: maxScrollLeft > tolerance,
          canScrollLeft: element.scrollLeft > tolerance,
          canScrollRight: maxScrollLeft - element.scrollLeft > tolerance,
        };

        setEdges((current) =>
          current.hasOverflow === next.hasOverflow &&
          current.canScrollLeft === next.canScrollLeft &&
          current.canScrollRight === next.canScrollRight
            ? current
            : next,
        );
      });
    };

    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(update) : null;
    const observeWidths = () => {
      resizeObserver?.disconnect();
      resizeObserver?.observe(element);
      Array.from(element.children).forEach((child) => resizeObserver?.observe(child));
      update();
    };
    const mutationObserver = new MutationObserver(observeWidths);

    observeWidths();
    element.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    mutationObserver.observe(element, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      element.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      mutationObserver.disconnect();
      resizeObserver?.disconnect();
    };
  }, [scrollRef, tolerance]);

  return edges;
}
