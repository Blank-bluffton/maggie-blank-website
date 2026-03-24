import type { Metadata } from "next";
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Waves, 
  Home, 
  DollarSign, 
  Shield, 
  MapPin, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Building2,
  Calculator,
  Clock,
  FileText,
  TrendingDown
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Flood Insurance in the Lowcountry: Costs, Zones, and Savings | Maggie Blank",
  description: "Understand flood insurance requirements, costs, and savings strategies for Bluffton, Hilton Head, and Beaufort homeowners. Learn how to potentially lower your premiums.",
  keywords: ["flood insurance Lowcountry", "flood zone Bluffton", "FEMA flood map Hilton Head", "flood insurance cost South Carolina", "National Flood Insurance Program", "flood insurance savings", "Beaufort flood zone", "flood insurance requirements coastal SC"],
  authors: [{ name: "Maggie Blank" }],
  creator: "Maggie Blank",
  publisher: "Synovus Bank",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://maggie-website-pi.vercel.app/blog/lowcountry-flood-insurance",
    siteName: "Maggie Blank - Lowcountry Mortgage Advisor",
    title: "Flood Insurance in the Lowcountry: Costs, Zones, and Savings",
    description: "Understand flood insurance requirements, costs, and savings strategies for Bluffton, Hilton Head, and Beaufort homeowners.",
    images: [
      {
        url: "/IMG_4406.JPG",
        width: 1200,
        height: 630,
        alt: "Lowcountry coastal home and flood zone"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Flood Insurance in the Lowcountry: Costs, Zones, and Savings",
    description: "Understand flood insurance requirements, costs, and savings strategies for Lowcountry homeowners.",
  },
};

const copy = {
  hero: {
    headline: "Flood Insurance in the Lowcountry: Costs, Zones, and Savings",
    subheadline: "Understanding flood risk, insurance requirements, and strategies to potentially lower your premiums in the coastal South Carolina market.",
    ctaPrimary: "Get Insurance Quote",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Calculate Your Budget",
    ctaSecondaryLink: "/calculator"
  },

  intro: {
    headline: "Flood Risk Is Part of Lowcountry Living",
    paragraphs: [
      "Living in the beautiful Lowcountry — from Bluffton to Hilton Head to Beaufort — means accepting that water is a part of daily life. Whether it's the marsh views, waterfront access, or proximity to the ocean, we embrace our coastal environment.",
      "But with that comes the reality of flood risk. Understanding flood insurance isn't just a bureaucratic requirement — it's a crucial part of protecting your investment and peace of mind.",
      "As a mortgage lender working with Lowcountry buyers for years, I see the same questions come up again and again. Let me break down what you actually need to know."
    ]
  },

  zones: {
    headline: "Understanding Flood Zones",
    paragraphs: [
      "FEMA (Federal Emergency Management Agency) designates flood zones using letters and numbers. Understanding your zone helps you determine insurance requirements and costs."
    ],
    zones: [
      {
        zone: "Zone X (Shaded)",
        risk: "Moderate risk",
        description: "Areas with 0.2% annual chance of flooding. Insurance is not federally required but recommended.",
        lowcountry: "Most of Bluffton's higher ground, inland communities"
      },
      {
        zone: "Zone AE",
        risk: "High risk",
        description: "Areas with 1% annual chance of flooding (100-year floodplain). Flood insurance is required for federally backed mortgages.",
        lowcountry: "Many waterfront communities, marsh-front properties in Bluffton and Hilton Head"
      },
      {
        zone: "Zone VE",
        risk: "Highest risk",
        description: "Coastal areas with 1% annual chance of flooding plus wave action. Additional elevation requirements apply.",
        lowcountry: "Beachfront properties on Hilton Head, Fripp Island, Hunting Island"
      }
    ]
  },

  costs: {
    headline: "What Flood Insurance Costs in the Lowcountry",
    paragraphs: [
      "Flood insurance premiums vary significantly based on multiple factors. Here's what to expect in our market:"
    ],
    factors: [
      {
        factor: "Coverage Amount",
        description: "Structure coverage up to $250,000 + contents up to $100,000"
      },
      {
        factor: "Flood Zone",
        description: "Zone VE can be 2-3x more expensive than Zone X"
      },
      {
        factor: "Deductible",
        description: "Higher deductibles lower premiums significantly"
      },
      {
        factor: "Property Elevation",
        description: "Elevated structures (pilings, piers) often qualify for lower rates"
      },
      {
        factor: "Age of Home",
        description: "Older homes in high-risk zones typically cost more to insure"
      }
    ],
    averages: {
      zoneX: "$400-$700/year",
      zoneAE: "$1,200-$2,500/year",
      zoneVE: "$3,000-$6,000+/year"
    }
  },

  requirements: {
    headline: "When Flood Insurance Is Required",
    paragraphs: [
      "If you're financing your home with a federally backed mortgage (FHA, VA, USDA) or a conventional loan through Fannie Mae or Freddie Mac, flood insurance is mandatory if your property is in a high-risk flood zone (Zone AE or VE).",
      "This requirement protects both you and the lender — it's not optional, and you cannot waive it.",
      "For conventional loans in moderate-risk zones (Zone X), flood insurance is not federally required, but strongly recommended. Many lenders will still require it as a condition of the loan."
    ]
  },

  savings: {
    headline: "Strategies to Lower Your Flood Insurance",
    paragraphs: [
      "The good news: there are several strategies that can help reduce your flood insurance premiums:"
    ],
    strategies: [
      {
        icon: Building2,
        title: "Elevate the Structure",
        description: "Elevating your home above base flood elevation can save 30-50% on premiums. This is especially effective in Zone VE areas."
      },
      {
        icon: TrendingDown,
        title: "Increase Your Deductible",
        description: "Raising your deductible from $1,000 to $2,000 or $5,000 can significantly reduce your premium."
      },
      {
        icon: FileText,
        title: "LOMA Letter",
        description: "If you believe your property is incorrectly mapped, you can request a Letter of Map Amendment from FEMA. This can remove the mandatory insurance requirement."
      },
      {
        icon: Home,
        title: " NFIP vs. Private Insurance",
        description: "Some buyers qualify for private flood insurance, which can sometimes be cheaper than NFIP policies."
      },
      {
        icon: Shield,
        title: "Bundle with Homeowners",
        description: "Some insurers offer discounts when you bundle flood and homeowners insurance."
      }
    ]
  },

  selfEmployed: {
    headline: "Self-Employed Buyers: Deducting Flood Insurance",
    paragraphs: [
      "If you operate a home-based business or have a rental property, you may be able to deduct flood insurance as a business expense. This is one more way to factor insurance costs into your overall financial picture.",
      "Consult with your tax advisor to understand how flood insurance might impact your tax situation — especially if you have a vacation rental property in the Lowcountry."
    ],
    link: "/self-employed"
  },

  physician: {
    headline: "Physician Buyers: Relocation Considerations",
    paragraphs: [
      "If you're relocating to the Lowcountry for a hospital position, your employer relocation package may include a first-year homeowners insurance stipend. We can help you understand what's included and how to budget for ongoing costs.",
      "Many physician loan programs consider insurance costs as part of your overall qualification — we factor in the full cost of ownership, not just the mortgage payment."
    ],
    link: "/physician-loans"
  },

  closing: {
    headline: "Budgeting for Flood Insurance",
    paragraphs: [
      "When you're calculating how much home you can afford, don't forget flood insurance. It's not optional for most financed homes in our area, and the costs add up.",
      "As a rule of thumb, budget $1,500-$2,500 annually for flood insurance on a typical Lowcountry home. Waterfront and beachfront properties will be higher.",
      "We always include insurance estimates in our pre-approval analysis — so you'll know exactly what to expect before you start shopping."
    ]
  },

  cta: {
    headline: "Get a Clear Picture of Your Total Costs",
    subheadline: "Let's include flood insurance and all associated costs in your pre-approval so there are no surprises.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "/apply"
  }
};

export default function FloodInsuranceBlog() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Flood Insurance in the Lowcountry: Costs, Zones, and Savings",
          "description": "Understand flood insurance requirements, costs, and savings strategies for Bluffton, Hilton Head, and Beaufort homeowners.",
          "image": "/IMG_4406.JPG",
          "author": {
            "@type": "Person",
            "name": "Maggie Blank"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Synovus Bank",
            "logo": {
              "@type": "ImageObject",
              "url": "/maggie-blank-logo.png"
            }
          },
          "datePublished": "2026-01-20",
          "dateModified": "2026-01-20",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://maggie-website-pi.vercel.app/blog/lowcountry-flood-insurance"
          }
        }) }}
      />

      {/* Hero Section */}
      <Hero
        headline={copy.hero.headline}
        subheadline={copy.hero.subheadline}
        ctaPrimary={copy.hero.ctaPrimary}
        ctaPrimaryLink={copy.hero.ctaPrimaryLink}
        ctaSecondary={copy.hero.ctaSecondary}
        ctaSecondaryLink={copy.hero.ctaSecondaryLink}
        variant="compact"
        backgroundImage="/IMG_4406.JPG"
      />

      {/* Introduction Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {copy.intro.headline}
          </h2>
          {copy.intro.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-900 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Flood Zones Section */}
      <Section id="zones" background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {copy.zones.headline}
            </h2>
          </div>
          {copy.zones.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-900 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="space-y-4 mt-8">
            {copy.zones.zones.map((zone, index) => (
              <GlassCard key={index} hover={false}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
                  <span className="inline-flex items-center px-3 py-1 bg-cyan-500/20 text-cyan-400 font-mono font-semibold rounded">
                    {zone.zone}
                  </span>
                  <span className="text-gray-900 font-semibold">{zone.risk}</span>
                </div>
                <p className="text-gray-900 text-sm mb-3">{zone.description}</p>
                <p className="text-gray-900 text-sm">
                  <span className="text-cyan-400 font-medium">Lowcountry examples:</span> {zone.lowcountry}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Costs Section */}
      <Section id="costs">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {copy.costs.headline}
            </h2>
          </div>
          {copy.costs.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-900 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <GlassCard hover={false}>
              <h4 className="text-gray-900 text-sm mb-2">Zone X (Moderate)</h4>
              <p className="text-2xl font-bold text-gray-900">{copy.costs.averages.zoneX}</p>
              <p className="text-gray-900 text-sm mt-2">per year</p>
            </GlassCard>
            <GlassCard hover={false}>
              <h4 className="text-gray-900 text-sm mb-2">Zone AE (High)</h4>
              <p className="text-2xl font-bold text-gray-900">{copy.costs.averages.zoneAE}</p>
              <p className="text-gray-900 text-sm mt-2">per year</p>
            </GlassCard>
            <GlassCard hover={false}>
              <h4 className="text-gray-900 text-sm mb-2">Zone VE (Highest)</h4>
              <p className="text-2xl font-bold text-gray-900">{copy.costs.averages.zoneVE}</p>
              <p className="text-gray-900 text-sm mt-2">per year</p>
            </GlassCard>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Factors Affecting Your Premium</h3>
            <div className="space-y-3">
              {copy.costs.factors.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gray-900 font-medium">{item.factor}:</span>
                    <span className="text-gray-900"> {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Requirements Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {copy.requirements.headline}
            </h2>
          </div>
          {copy.requirements.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-900 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Savings Strategies */}
      <Section id="savings">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <TrendingDown className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {copy.savings.headline}
            </h2>
          </div>
          {copy.savings.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-900 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {copy.savings.strategies.map((strategy, index) => (
              <GlassCard key={index} hover delay={index * 0.1}>
                <strategy.icon className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{strategy.title}</h3>
                <p className="text-gray-900 text-sm">{strategy.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Self-Employed Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {copy.selfEmployed.headline}
            </h2>
          </div>
          {copy.selfEmployed.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-900 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <Link
            href={copy.selfEmployed.link}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Learn About Self-Employed Mortgage Options <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Physician Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {copy.physician.headline}
            </h2>
          </div>
          {copy.physician.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-900 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <Link
            href={copy.physician.link}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Explore Physician Loan Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Closing Budget Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {copy.closing.headline}
            </h2>
          </div>
          {copy.closing.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-900 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Use Our Mortgage Calculator <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* CTA Band */}
      <CTABand
        headline={copy.cta.headline}
        subheadline={copy.cta.subheadline}
        ctaPrimary={copy.cta.ctaPrimary}
        ctaPrimaryLink={copy.cta.ctaPrimaryLink}
        ctaSecondary={copy.cta.ctaSecondary}
        ctaSecondaryLink={copy.cta.ctaSecondaryLink}
      />
    </>
  );
}