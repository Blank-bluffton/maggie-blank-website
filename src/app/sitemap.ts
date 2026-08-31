import type { MetadataRoute } from "next";

const SITE_URL = "https://www.lowcountrymortgageadvisor.com";

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/apply", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/concierge", changeFrequency: "monthly", priority: 0.8 },
  { path: "/construction", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/conventional", changeFrequency: "monthly", priority: 0.8 },
  { path: "/first-time-buyers", changeFrequency: "monthly", priority: 0.8 },
  { path: "/loan-solutions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/lowcountry-market", changeFrequency: "weekly", priority: 0.8 },
  { path: "/lowcountry-market/beaufort", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/bluffton", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/builders", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/closing-attorneys", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/hilton-head", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/insurance", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/neighborhoods", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/okatie", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/realtors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/schools", changeFrequency: "monthly", priority: 0.7 },
  { path: "/lowcountry-market/services", changeFrequency: "monthly", priority: 0.7 },
  { path: "/physician-loans", changeFrequency: "monthly", priority: 0.9 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/private-wealth", changeFrequency: "monthly", priority: 0.8 },
  { path: "/refinance", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resources", changeFrequency: "monthly", priority: 0.7 },
  { path: "/self-employed", changeFrequency: "monthly", priority: 0.8 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
] as const;

const articleRoutes = [
  { path: "/blog/bluffton-construction-loan-guide", lastModified: "2026-03-22" },
  { path: "/blog/buying-in-golf-community", lastModified: "2025-12-15" },
  { path: "/blog/first-time-buyer-programs-sc", lastModified: "2026-03-18" },
  { path: "/blog/how-to-get-the-best-mortgage-rate-in-the-lowcountry", lastModified: "2026-01-15" },
  { path: "/blog/lowcountry-flood-insurance", lastModified: "2026-01-20" },
  { path: "/blog/physician-loans-2026", lastModified: "2026-03-20" },
  { path: "/blog/refinance-now-or-wait", lastModified: "2026-02-18" },
  { path: "/blog/self-employed-mortgage-guide", lastModified: "2026-03-15" },
  { path: "/blog/tax-tips-lowcountry-homeowners", lastModified: "2026-03-10" },
  { path: "/blog/the-ultimate-move-to-lowcountry-checklist", lastModified: "2026-02-18" },
  { path: "/blog/understanding-closing-costs-in-south-carolina", lastModified: "2026-01-22" },
  { path: "/blog/why-local-lenders-beat-big-banks-for-lowcountry-buyers", lastModified: "2026-02-10" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency,
      priority,
    })),
    ...articleRoutes.map(({ path, lastModified }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
