export const seoConfig = {
  siteUrl: "https://rito-studio-business.tretnix.com",
  locale: "it_IT",
  defaultSocialImage: {
    src: "/images/rito/rito-studio-wide.webp",
    width: 1600,
    height: 1000,
    alt: "Interno luminoso e materico di RITO Studio",
  },
  sitemapEnabled: false,
  structuredDataMode: "disabled" as const,
} as const;

export function canonicalUrl(pathname: string) {
  return new URL(pathname, seoConfig.siteUrl).toString();
}
