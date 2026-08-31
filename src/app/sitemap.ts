import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lowcountrymortgageadvisor.com";

const publicRoutes = [
  "",
  "/about",
  "/apply",
  "/blog",
  "/blog/bluffton-construction-loan-guide",
  "/blog/buying-in-golf-community",
  "/blog/first-time-buyer-programs-sc",
  "/blog/how-to-get-the-best-mortgage-rate-in-the-lowcountry",
  "/blog/lowcountry-flood-insurance",
  "/blog/physician-loans-2026",
  "/blog/refinance-now-or-wait",
  "/blog/self-employed-mortgage-guide",
  "/blog/tax-tips-lowcountry-homeowners",
  "/blog/the-ultimate-move-to-lowcountry-checklist",
  "/blog/understanding-closing-costs-in-south-carolina",
  "/blog/why-local-lenders-beat-big-banks-for-lowcountry-buyers",
  "/concierge",
  "/construction",
  "/contact",
  "/conventional",
  "/first-time-buyers",
  "/loan-solutions",
  "/lowcountry-market",
  "/lowcountry-market/beaufort",
  "/lowcountry-market/bluffton",
  "/lowcountry-market/builders",
  "/lowcountry-market/closing-attorneys",
  "/lowcountry-market/hilton-head",
  "/lowcountry-market/insurance",
  "/lowcountry-market/neighborhoods",
  "/lowcountry-market/okatie",
  "/lowcountry-market/realtors",
  "/lowcountry-market/schools",
  "/lowcountry-market/services",
  "/physician-loans",
  "/privacy",
  "/private-wealth",
  "/refinance",
  "/resources",
  "/self-employed",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
  }));
}
