import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "@tanstack/react-router";
import { EditorialArrow } from "@/components/EditorialArrow";
import { GestureProgressIndicator } from "@/components/GestureProgressIndicator";
import { galleryItems } from "@/data/content";
import { useHorizontalScrollEdges } from "@/hooks/use-horizontal-scroll-edges";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { cn } from "@/lib/utils";

type DragAxis = "pending" | "horizontal" | "vertical";

interface EndGestureState {
  pointerId: number;
  startX: number;
  startY: number;
  lastX: number;
  axis: DragAxis;
  startedAtEnd: boolean;
}

interface EndTouchState {
  startX: number;
  startY: number;
  lastX: number;
  axis: DragAxis;
  startedAtEnd: boolean;
}

const scrollDescriptionId = "gallery-scroll-description";
const scrollEndTolerance = 8;
const openGalleryThreshold = 96;
const homeIndicatorRevealDistance = 112;
const gallerySlots = galleryItems.slice(0, 4).map((item, index) => ({
  ...item,
  ratio: `${item.width} / ${item.height}`,
  tone: (["canvas", "surface", "ink", "canvas"] as const)[index] ?? "surface",
}));

export function GalleryRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<EndGestureState | null>(null);
  const touchRef = useRef<EndTouchState | null>(null);
  const armedRef = useRef(false);
  const navigatingRef = useRef(false);
  const [railRevealOffset, setRailRevealOffset] = useState(0);
  const [progress, setProgress] = useState(0);
  const [armed, setArmed] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const edges = useHorizontalScrollEdges(railRef, scrollEndTolerance);
  const navigate = useNavigate();

  function resetGesture() {
    dragRef.current = null;
    touchRef.current = null;
    armedRef.current = false;
    setRailRevealOffset(0);
    setProgress(0);
    setArmed(false);
    setAnnouncement("");
  }

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      const touch = event.touches[0];
      if (!touch) return;
      const remaining = rail.scrollWidth - rail.clientWidth - rail.scrollLeft;
      touchRef.current = {
        startX: touch.clientX,
        startY: touch.clientY,
        lastX: touch.clientX,
        axis: "pending",
        startedAtEnd: rail.scrollWidth > rail.clientWidth && remaining <= scrollEndTolerance,
      };
      armedRef.current = false;
      setRailRevealOffset(0);
      setProgress(0);
      setArmed(false);
      setAnnouncement("");
    };

    const handleTouchMove = (event: TouchEvent) => {
      const drag = touchRef.current;
      const touch = event.touches[0];
      if (!drag || !touch || !drag.startedAtEnd) return;
      const deltaX = touch.clientX - drag.startX;
      const deltaY = touch.clientY - drag.startY;

      if (drag.axis === "pending") {
        if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 10) return;
        drag.axis = Math.abs(deltaX) > Math.abs(deltaY) * 1.25 ? "horizontal" : "vertical";
      }
      if (drag.axis !== "horizontal" || deltaX >= 0) {
        if (drag.axis === "horizontal") {
          armedRef.current = false;
          setRailRevealOffset(0);
          setProgress(0);
          setArmed(false);
          setAnnouncement("");
        }
        return;
      }

      event.preventDefault();
      drag.lastX = touch.clientX;
      const nextExtraDrag = Math.max(0, -deltaX);
      const nextProgress = Math.min(1, nextExtraDrag / openGalleryThreshold);
      const nextArmed = nextProgress >= 1;
      setRailRevealOffset(nextProgress * homeIndicatorRevealDistance);
      setProgress(nextProgress);
      if (nextArmed !== armedRef.current) {
        armedRef.current = nextArmed;
        setArmed(nextArmed);
        setAnnouncement(nextArmed ? "Rilascia per aprire la galleria" : "");
      }
    };

    const finishTouch = (cancelled: boolean) => {
      const drag = touchRef.current;
      const shouldOpen =
        !cancelled && drag?.startedAtEnd && drag.axis === "horizontal" && armedRef.current;
      resetGesture();
      if (shouldOpen && !navigatingRef.current) {
        navigatingRef.current = true;
        void navigate({ to: "/galleria" });
      }
    };

    const handleTouchEnd = () => finishTouch(false);
    const handleTouchCancel = () => finishTouch(true);
    rail.addEventListener("touchstart", handleTouchStart, { passive: true });
    rail.addEventListener("touchmove", handleTouchMove, { passive: false });
    rail.addEventListener("touchend", handleTouchEnd);
    rail.addEventListener("touchcancel", handleTouchCancel);

    return () => {
      rail.removeEventListener("touchstart", handleTouchStart);
      rail.removeEventListener("touchmove", handleTouchMove);
      rail.removeEventListener("touchend", handleTouchEnd);
      rail.removeEventListener("touchcancel", handleTouchCancel);
    };
  }, [navigate]);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.button !== 0 || event.pointerType === "touch") return;
    const rail = event.currentTarget;
    const remaining = rail.scrollWidth - rail.clientWidth - rail.scrollLeft;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      axis: "pending",
      startedAtEnd: rail.scrollWidth > rail.clientWidth && remaining <= scrollEndTolerance,
    };
    armedRef.current = false;
    setRailRevealOffset(0);
    setProgress(0);
    setArmed(false);
    setAnnouncement("");
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId || !drag.startedAtEnd) return;

    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    if (drag.axis === "pending") {
      if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 10) return;
      drag.axis = Math.abs(deltaX) > Math.abs(deltaY) * 1.25 ? "horizontal" : "vertical";
    }

    if (drag.axis !== "horizontal" || deltaX >= 0) {
      if (drag.axis === "horizontal") {
        armedRef.current = false;
        setRailRevealOffset(0);
        setProgress(0);
        setArmed(false);
        setAnnouncement("");
      }
      return;
    }

    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    event.preventDefault();
    drag.lastX = event.clientX;

    const nextExtraDrag = Math.max(0, -deltaX);
    const nextProgress = Math.min(1, nextExtraDrag / openGalleryThreshold);
    const nextArmed = nextProgress >= 1;
    setRailRevealOffset(nextProgress * homeIndicatorRevealDistance);
    setProgress(nextProgress);
    if (nextArmed !== armedRef.current) {
      armedRef.current = nextArmed;
      setArmed(nextArmed);
      setAnnouncement(nextArmed ? "Rilascia per aprire la galleria" : "");
    }
  }

  function releasePointer(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    resetGesture();
  }

  function finishPointerGesture(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const shouldOpen = drag.startedAtEnd && drag.axis === "horizontal" && armedRef.current;
    releasePointer(event);

    if (shouldOpen && !navigatingRef.current) {
      navigatingRef.current = true;
      void navigate({ to: "/galleria" });
    }
  }

  function cancelPointerGesture(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    releasePointer(event);
  }

  return (
    <section aria-label="Immagini dello studio" className="bg-canvas py-16 md:py-20">
      <div className="container-editorial min-w-0">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="eyebrow">Galleria</p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">Gesti e materia.</h2>
          </div>
          <Link
            to="/galleria"
            className="editorial-link group hidden min-h-11 text-sm font-medium sm:inline-flex"
          >
            Apri la galleria
            <EditorialArrow />
          </Link>
        </div>
        <p id={scrollDescriptionId} className="sr-only">
          Su schermi piccoli, scorri orizzontalmente per visualizzare tutte le immagini. Alla fine,
          un ulteriore gesto deliberato apre la galleria completa.
        </p>
        <div className="relative min-w-0">
          <div
            data-js-only
            className="pointer-events-none absolute inset-y-0 right-0 z-0 flex w-28 items-center justify-end md:hidden"
          >
            <GestureProgressIndicator
              progress={progress}
              direction="right"
              armed={armed}
              label="Apri la galleria"
              length="home"
              className="text-muted data-[armed=true]:text-accent-strong"
            />
          </div>
          <div
            ref={railRef}
            role="list"
            tabIndex={0}
            aria-describedby={scrollDescriptionId}
            className={cn(
              "scrollbar-none relative z-10 -ml-5 flex min-w-0 select-none snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain bg-canvas pb-3 pl-5 pr-3 pt-1 md:ml-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:bg-transparent md:px-0 md:py-0 lg:grid-cols-12 lg:gap-6",
              railRevealOffset === 0
                ? "transition-transform duration-[var(--motion-duration-fast)] ease-[var(--motion-ease-ui)] motion-reduce:transition-none"
                : "will-change-transform transition-none",
            )}
            style={{ transform: `translateX(${-railRevealOffset}px)` }}
            onDragStart={(event) => event.preventDefault()}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={finishPointerGesture}
            onPointerCancel={cancelPointerGesture}
          >
            {gallerySlots.map((slot, index) => {
              const offsets = ["", "md:mt-8 lg:mt-12", "", "md:mt-5 lg:mt-8"];

              return (
                <div
                  key={slot.id}
                  role="listitem"
                  className={`w-[72vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none lg:col-span-3 ${offsets[index]}`}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${index * 70}ms` }}
                >
                  <ImagePlaceholder
                    ratio={slot.ratio}
                    tone={slot.tone}
                    src={slot.src}
                    alt={slot.alt}
                    objectPosition={slot.objectPosition}
                    sizes="(min-width: 1024px) 23vw, (min-width: 768px) 48vw, 72vw"
                  />
                </div>
              );
            })}
          </div>

          <div
            data-js-only
            aria-hidden
            className="pointer-events-none absolute right-2 top-1/2 z-20 -translate-y-1/2 md:hidden"
          >
            <span
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas/90 text-accent-strong backdrop-blur-sm transition-opacity duration-[var(--motion-duration-fast)] motion-reduce:transition-none",
                edges.canScrollRight ? "opacity-100" : "opacity-0",
              )}
            >
              <ArrowRight className="rito-gallery-arrow-nudge" size={18} strokeWidth={1.6} />
            </span>
          </div>
          <p className="sr-only" aria-live="polite" aria-atomic="true">
            {announcement}
          </p>
        </div>
        <Link
          to="/galleria"
          className="editorial-link group mt-7 min-h-11 text-sm font-medium sm:hidden"
        >
          Apri la galleria
          <EditorialArrow />
        </Link>
      </div>
    </section>
  );
}
