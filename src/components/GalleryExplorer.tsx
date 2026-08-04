import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryCategories, galleryItems, type GalleryItem } from "@/data/content";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { cn } from "@/lib/utils";

type GalleryCategory = (typeof galleryCategories)[number];

function GalleryImage({ item, sizes }: { item: GalleryItem; sizes: string }) {
  return (
    <ImagePlaceholder
      ratio={`${item.width} / ${item.height}`}
      src={item.src}
      alt={item.alt}
      label={item.src ? undefined : "Immagine non disponibile"}
      objectPosition={item.objectPosition}
      sizes={sizes}
      className="bg-surface"
    />
  );
}

export function GalleryExplorer() {
  const [category, setCategory] = useState<GalleryCategory>("Tutte");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const filtered = useMemo(
    () => galleryItems.filter((item) => category === "Tutte" || item.category === category),
    [category],
  );
  const selectedIndex = filtered.findIndex((item) => item.id === selectedId);
  const selected = selectedIndex >= 0 ? filtered[selectedIndex] : undefined;

  const move = useCallback(
    (direction: -1 | 1) => {
      if (!filtered.length) return;
      const nextIndex = (selectedIndex + direction + filtered.length) % filtered.length;
      setSelectedId(filtered[nextIndex]?.id ?? null);
    },
    [filtered, selectedIndex],
  );

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [move, selected]);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    const previousGutter = document.documentElement.style.scrollbarGutter;
    document.documentElement.style.scrollbarGutter = "stable";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.scrollbarGutter = previousGutter;
    };
  }, [selected]);

  return (
    <Dialog.Root open={Boolean(selected)} onOpenChange={(open) => !open && setSelectedId(null)}>
      <div
        role="group"
        className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line"
        aria-label="Filtra la galleria"
      >
        {galleryCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={cn(
              "min-h-12 border-b-2 px-1 text-sm transition-colors",
              category === item
                ? "border-accent text-accent"
                : "border-transparent text-muted hover:text-ink",
            )}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <Dialog.Trigger asChild key={item.id}>
            <button
              type="button"
              onClick={(event) => {
                openerRef.current = event.currentTarget;
                setSelectedId(item.id);
              }}
              className="group mb-5 block w-full break-inside-avoid text-left"
              aria-label={`Apri immagine: ${item.alt}`}
            >
              <span className="block overflow-hidden">
                <span className="block transition-transform duration-700 ease-[var(--motion-ease-reveal)] group-hover:scale-[1.02] motion-reduce:transition-none">
                  <GalleryImage
                    item={item}
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                  />
                </span>
              </span>
              <span className="mt-3 flex items-center justify-between gap-4 text-xs text-muted">
                <span>{item.category}</span>
                <span>Apri</span>
              </span>
            </button>
          </Dialog.Trigger>
        ))}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-ink/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 motion-reduce:transition-none" />
        <Dialog.Content
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            openerRef.current?.focus({ preventScroll: true });
          }}
          className="fixed inset-0 z-[81] grid min-h-0 grid-rows-[auto_1fr_auto] bg-ink p-4 text-white outline-none sm:p-6 md:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <Dialog.Title className="font-display text-2xl text-white">
                {selected?.category ?? "Galleria"}
              </Dialog.Title>
              <Dialog.Description className="mt-1 max-w-xl text-xs text-surface">
                {selected?.alt}
              </Dialog.Description>
            </div>
            <Dialog.Close
              className="inline-flex h-11 w-11 items-center justify-center border border-white/50 text-white hover:bg-white hover:text-ink"
              aria-label="Chiudi la galleria"
            >
              <X aria-hidden size={20} />
            </Dialog.Close>
          </div>

          <div className="relative flex min-h-0 items-center justify-center py-5">
            {selected?.src ? (
              <img
                src={selected.src}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                className="max-h-[calc(100dvh-11rem)] max-w-full object-contain"
              />
            ) : (
              <p className="text-sm text-surface">Immagine non disponibile.</p>
            )}
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => move(-1)}
              className="inline-flex min-h-11 items-center gap-2 border border-white/50 px-4 text-sm hover:bg-white hover:text-ink"
            >
              <ChevronLeft aria-hidden size={18} />
              Precedente
            </button>
            <p className="text-xs tabular-nums text-surface" aria-live="polite">
              {selectedIndex + 1} / {filtered.length}
            </p>
            <button
              type="button"
              onClick={() => move(1)}
              className="inline-flex min-h-11 items-center gap-2 border border-white/50 px-4 text-sm hover:bg-white hover:text-ink"
            >
              Successiva
              <ChevronRight aria-hidden size={18} />
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
