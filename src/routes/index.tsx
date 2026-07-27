import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { IntroStatement } from "@/components/sections/IntroStatement";
import { EditorialServiceList } from "@/components/sections/EditorialServiceList";
import { RitualFeature } from "@/components/sections/RitualFeature";
import { MethodStrip } from "@/components/sections/MethodStrip";
import { StudioEditorial } from "@/components/sections/StudioEditorial";
import { GalleryRail } from "@/components/sections/GalleryRail";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { DemoBookingDialog } from "@/components/DemoBookingDialog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RITO Studio — Beauty & Care Atelier a Padova" },
      {
        name: "description",
        content:
          "RITO Studio è un atelier contemporaneo a Padova dedicato a capelli, pelle e benessere. Trattamenti su misura, gesti precisi e ascolto.",
      },
      { name: "robots", content: "noindex, follow" },
      {
        property: "og:title",
        content: "RITO Studio — Beauty & Care Atelier a Padova",
      },
      {
        property: "og:description",
        content:
          "Un atelier contemporaneo dedicato a capelli, pelle e benessere. La bellezza, nel suo ritmo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = () => setDemoOpen(true);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-[3px] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Vai al contenuto
      </a>
      <Header onBook={openDemo} />
      <main id="main">
        <Hero onBook={openDemo} />
        <IntroStatement />
        <EditorialServiceList />
        <RitualFeature />
        <MethodStrip />
        <StudioEditorial />
        <GalleryRail />
        <BookingCTA onBook={openDemo} />
        <PracticalInfo />
      </main>
      <Footer />
      <DemoBookingDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
