import { gallerySlots } from "@/lib/site-config";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export function GalleryRail() {
  return (
    <section aria-label="Immagini dello studio" className="pb-24 md:pb-36">
      <div className="container-editorial">
        <div
          role="list"
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-12 md:gap-6 md:overflow-visible md:px-0"
        >
          {gallerySlots.map((slot, i) => {
            const spans = ["md:col-span-4", "md:col-span-3", "md:col-span-5", "md:col-span-4"];
            const offsets = ["", "md:mt-16", "", "md:mt-8"];
            return (
              <div
                key={slot.id}
                role="listitem"
                className={`w-[72%] shrink-0 snap-start md:w-auto ${spans[i]} ${offsets[i]}`}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <ImagePlaceholder
                  ratio={slot.ratio}
                  tone={slot.tone}
                  label={`Immagine dello studio ${i + 1} — asset in curazione`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
