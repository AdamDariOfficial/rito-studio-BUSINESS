import { Fragment } from "react";
import type { RouteSeo } from "@/lib/seo";
import { buildHead } from "@/lib/seo";

interface SeoDocumentHeadProps {
  seo: RouteSeo;
}

export function SeoDocumentHead({ seo }: SeoDocumentHeadProps) {
  const head = buildHead(seo);

  return (
    <>
      {head.meta.map((entry, index) => {
        if ("title" in entry) return <title key="title">{entry.title}</title>;

        return <meta key={`${entry.name ?? entry.property}-${index}`} {...entry} />;
      })}
      {head.links.map((entry) => (
        <Fragment key={`${entry.rel}-${entry.href}`}>
          <link {...entry} />
        </Fragment>
      ))}
    </>
  );
}
