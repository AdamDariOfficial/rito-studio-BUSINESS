interface SkipLinkProps {
  href?: string;
  label?: string;
}

export function SkipLink({ href = "#trattamenti", label = "Vai ai trattamenti" }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:fixed focus:left-5 focus:top-3 focus:z-[100] focus:inline-flex focus:min-h-10 focus:items-center focus:border focus:border-ink focus:bg-canvas focus:px-4 focus:text-sm focus:font-medium focus:text-ink focus:shadow-[0_10px_30px_rgba(27,26,24,0.14)]"
    >
      {label}
    </a>
  );
}
