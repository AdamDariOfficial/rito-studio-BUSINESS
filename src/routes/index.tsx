import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { StickyHeader } from "@/components/StickyHeader";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { BookingDialog } from "@/components/BookingDialog";
import { Hero } from "@/components/sections/Hero";
import { IntroStatement } from "@/components/sections/IntroStatement";
import { EditorialServiceList } from "@/components/sections/EditorialServiceList";
import { RitualFeature } from "@/components/sections/RitualFeature";
import { MethodStrip } from "@/components/sections/MethodStrip";
import { StudioEditorial } from "@/components/sections/StudioEditorial";
import { GalleryRail } from "@/components/sections/GalleryRail";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { PracticalInfo } from "@/components/sections/PracticalInfo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RITO Studio — Beauty & Care Atelier · Padova" },
      {
        name: "description",
        content:
          "Un atelier contemporaneo dedicato a capelli, pelle e benessere. Trattamenti su misura, gesti precisi e il tempo necessario per ascoltarti.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "RITO Studio — Beauty & Care Atelier" },
      {
        property: "og:description",
        content: "La bellezza, nel suo ritmo. Concept dimostrativo Tretnix.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("js");
  }, []);

  function handleBookClick(trigger: HTMLElement) {
    returnFocusRef.current = trigger;
    setDialogOpen(true);
  }

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SkipLink />
      <StickyHeader onBookClick={handleBookClick} />
      <main id="contenuto">
        <Hero onBookClick={handleBookClick} />
        <IntroStatement />
        <EditorialServiceList />
        <RitualFeature />
        <MethodStrip />
        <StudioEditorial />
        <GalleryRail />
        <BookingCTA onBookClick={handleBookClick} />
        <PracticalInfo />
      </main>
      <Footer />
      <BookingDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        returnFocusRef={returnFocusRef}
      />
    </div>
  );
}
