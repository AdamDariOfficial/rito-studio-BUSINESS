import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { SkipLink } from "@/components/SkipLink";
import { StickyHeader } from "@/components/StickyHeader";
import { useRevealController } from "@/hooks/use-reveal-controller";

interface SiteShellProps {
  children: ReactNode;
  skipHref?: string;
  skipLabel?: string;
}

export function SiteShell({
  children,
  skipHref = "#contenuto",
  skipLabel = "Vai al contenuto",
}: SiteShellProps) {
  useRevealController();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SkipLink href={skipHref} label={skipLabel} />
      <StickyHeader />
      <main id="contenuto">{children}</main>
      <Footer />
    </div>
  );
}
