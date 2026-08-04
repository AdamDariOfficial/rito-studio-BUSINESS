import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { EditorialServiceList } from "@/components/sections/EditorialServiceList";
import { RitualFeature } from "@/components/sections/RitualFeature";
import { StudioEditorial } from "@/components/sections/StudioEditorial";
import { TeamTeaser } from "@/components/sections/TeamTeaser";
import { GalleryRail } from "@/components/sections/GalleryRail";
import { FaqTeaser } from "@/components/sections/FaqTeaser";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { PracticalInfo } from "@/components/sections/PracticalInfo";
import { buildHead, routeSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildHead(routeSeo.home),
  component: Index,
});

function Index() {
  return (
    <SiteShell skipHref="#trattamenti" skipLabel="Vai ai trattamenti">
      <Hero />
      <EditorialServiceList />
      <RitualFeature />
      <StudioEditorial />
      <TeamTeaser />
      <GalleryRail />
      <FaqTeaser />
      <BookingCTA />
      <PracticalInfo />
    </SiteShell>
  );
}
