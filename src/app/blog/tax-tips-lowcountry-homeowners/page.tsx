import type { Metadata } from "next";
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Receipt, 
  Home, 
  DollarSign, 
  Shield, 
  Calculator, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Building2,
  FileText,
  Percent,
  TrendingUp,
  Briefcase
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Tax Tips for Lowcountry Homeowners | Maggie Blank",
  description: "Essential tax deductions and strategies for homeowners in Bluffton, Hilton Head, and Beaufort. Mortgage interest, property taxes, and more.",
  keywords: ["tax deductions homeowners", "mortgage interest deduction", "property tax deduction South Carolina", "Lowcountry homeowner taxes", "tax tips for mortgage", "home office deduction self-employed", "points deduction mortgage", "South Carolina property tax"],
  authors: [{ name: "Maggie Blank" }],
  creator: "Maggie Blank",
  publisher: "Synovus Bank",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://maggie-website-pi.vercel.app/blog/tax-tips-lowcountry-homeowners",
    siteName: "Maggie Blank - Lowcountry Mortgage Advisor",
    title: "Tax Tips for Lowcountry Homeowners",
    description: "Essential tax deductions and strategies for homeowners in Bluffton, Hilton Head, and Beaufort.",
    images: [
      {
        url: "/IMG_4402.jpg",
        width: 1200,
        height: 630,
        alt: "Lowcountry home and tax planning"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tax Tips for Lowcountry Homeowners",
    description: "Essential tax deductions and strategies for Lowcountry homeowners.",
  },
};

const copy = {
  hero: {
    headline: "Tax Tips for Lowcountry Homeowners",
    subheadline: "Maximize your tax benefits as a homeowner in Bluffton, Hilton Head, and Beaufort. Understanding deductions can save you thousands annually.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Calculate Your Budget",
    ctaSecondaryLink: "/calculator"
  },

  intro: {
    headline: "Homeownership Has Significant Tax Advantages",
    paragraphs: [
      "One of the often-overlooked benefits of owning a home in the Lowcountry is the significant tax advantages available to homeowners. From mortgage interest deductions to property tax exclusions, there are multiple ways to reduce your annual tax burden.",
      "Whether you're a first-time homeowner or have been in your home for years, understanding these deductions can help you keep more of your hard-earned money. As someone who's helped hundreds of Lowcountry families finance their homes, I've seen how much of a difference these tax benefits can make.",
      "Let me walk you through the key tax advantages available to Lowcountry homeowners — and some strategies to maximize your savings."
    ]
  },

  deductions: {
    headline: "Key Mortgage Deductions for Homeowners",
    paragraphs: [
      "The federal tax code provides several deductions specifically for homeowners. Here's what you need to know:"
    ],
    items: [
      {
        title: "Mortgage Interest Deduction",
        description: "The interest you pay on your mortgage — whether for a primary residence or a second home — is typically deductible. On a $400,000 mortgage at 6.5%, you could deduct $20,000+ in interest in the first year alone.",
        limit: "Interest on mortgages up to $750,000 (or $375,000 if married filing separately)"
      },
      {
        title: "Property Tax Deduction",
        description: "Your state and local property taxes are deductible, up to $10,000 annually (combined with state income taxes under the SALT cap).",
        limit: "$10,000 total per year (for SALT)"
      },
      {
        title: "Mortgage Points (Discount Points)",
        description: "If you paid points to lower your interest rate, those points are deductible over the life of the loan. If you refinance or sell, you can deduct any remaining points.",
        limit: "Must be on your primary residence"
      },
      {
        title: "Mortgage Insurance Premiums",
        description: "PMI, FHA MIP, and VA funding fees may be deductible for eligible borrowers. This deduction phases out for higher-income homeowners.",
        limit: "Income limits apply"
      }
    ]
  },

  lowcountry: {
    headline: "South Carolina-Specific Benefits",
    paragraphs: [
      "Beyond federal deductions, South Carolina offers additional benefits for Lowcountry homeowners:"
    ],
    benefits: [
      {
        title: "Homestead Exemption",
        description: "South Carolina provides a significant exemption on your primary residence — reducing your property tax assessment by tens of thousands of dollars. Apply through your county auditor."
      },
      {
        title: "Age 65 Exemption",
        description: "Homeowners 65 and older may qualify for additional exemptions. Beaufort County offers an additional $50,000 exemption for qualifying seniors."
      },
      {
        title: "Disability Exemption",
        description: "Homeowners with disabilities may qualify for additional property tax reductions in Beaufort and Jasper counties."
      },
      {
        title: "Capital Gains Exclusion",
        description: "When you sell your primary residence, you can exclude up to $250,000 (or $500,000 for married couples) in capital gains — meaning you could sell a $600,000 home you bought for $200,000 and owe no federal tax on the gain."
      }
    ]
  },

  selfEmployed: {
    headline: "Self-Employed Homeowner Benefits",
    paragraphs: [
      "If you run a business from your Lowcountry home, you may be able to deduct a portion of your housing costs as business expenses:"
    ],
    deductions: [
      {
        title: "Home Office Deduction",
        description: "If you have a dedicated space used exclusively for business, you can deduct a portion of your mortgage interest, property taxes, utilities, and maintenance based on the percentage of your home used for business."
      },
      {
        title: "Rental Property Deductions",
        description: "If you rent out your Lowcountry property (including vacation rentals in Hilton Head or Beaufort), you can deduct expenses including mortgage interest, property management, cleaning, repairs, and depreciation."
      },
      {
        title: "Business Use of Second Home",
        description: "If you have a second home used for business purposes (client meetings, retreat space, etc.), you may qualify for additional deductions beyond standard vacation home rules."
      }
    ],
    note: "These deductions require careful record-keeping and have specific requirements. Work with a CPA to ensure you're claiming everything correctly."
  },

  physician: {
    headline: "Physician-Specific Tax Considerations",
    paragraphs: [
      "If you're a physician with student debt, your mortgage setup can impact your overall tax strategy:"
    ],
    items: [
      "Mortgage interest deduction can offset some of your student loan interest deduction phase-out if you're above the income limits",
      "Consider whether a cash-out refinance to pay off higher-interest student loans makes sense (interest rates on mortgages are typically lower than student loans)",
      "Entity structuring — some physicians set up LLCs for their practice and may be able to structure their home purchase differently for tax advantages"
    ],
    note: "Always consult with a tax professional about your specific situation, especially when considering major financial decisions."
  },

  strategies: {
    headline: "Strategies to Maximize Your Benefits",
    strategies: [
      {
        title: "Keep Good Records",
        description: "Maintain records of all mortgage statements, property tax payments, and home-related expenses. You'll need them come tax time and if you're ever audited."
      },
      {
        title: "Consider a Cash-Out Refinance for Home Improvements",
        description: "If you've been thinking about major home improvements, a cash-out refinance lets you deduct the interest on the new loan — unlike a home equity line of credit in some cases."
      },
      {
        title: "Time Your Points Deduction",
        description: "If you paid discount points, spread the deduction over the life of your loan. If you sell or refinance, you can claim the remaining balance."
      },
      {
        title: "Don't Overlook Closing Costs",
        description: "Some closing costs — like appraisal fees and title insurance — may be deductible as itemized deductions in the year you buy."
      },
      {
        title: "Review Your Withholding",
        description: "If you're deducting more mortgage interest and property taxes, you might be able to reduce your withholding — increasing your monthly take-home pay."
      }
    ]
  },

  firstTime: {
    headline: "First-Time Homebuyer Tax Benefits",
    paragraphs: [
      "If you're buying your first home in the Lowcountry, you may be leaving money on the table if you're not taking advantage of these benefits:"
    ],
    benefits: [
      "You're likely taking the standard deduction — but as a homeowner with mortgage interest and property taxes, itemizing often pays off",
      "First-time buyers using FHA loans can deduct PMI premiums",
      "SC homestead exemption can save you hundreds annually — apply immediately after closing"
    ]
  },

  important: {
    headline: "Important Caveats",
    paragraphs: [
      "While these tax benefits are real and significant, there are important considerations:"
    ],
    caveats: [
      "These deductions are only valuable if you itemize — if your deductions don't exceed the standard deduction ($14,600 for single filers, $29,200 for married couples in 2026), you won't benefit",
      "SALT cap limits your state and local tax deduction to $10,000 — this affects high-tax states more, but still applies in SC",
      "Mortgage interest deduction is limited to mortgages under $750,000 — if you have a larger loan, you can't deduct all the interest",
      "Tax laws change — what applies this year may be different next year. Stay informed and work with a professional."
    ]
  },

  cta: {
    headline: "Make the Most of Your Lowcountry Homeownership",
    subheadline: "Understanding your tax benefits is part of smart financial planning. Let's discuss your mortgage options and how homeownership fits into your overall financial strategy.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Schedule Financial Consultation",
    ctaSecondaryLink: "/contact"
  }
};

export default function TaxTipsBlog() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Tax Tips for Lowcountry Homeowners",
          "description": "Essential tax deductions and strategies for homeowners in Bluffton, Hilton Head, and Beaufort.",
          "image": "/IMG_4402.jpg",
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
          "datePublished": "2026-03-10",
          "dateModified": "2026-03-10",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://maggie-website-pi.vercel.app/blog/tax-tips-lowcountry-homeowners"
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
        backgroundImage="/IMG_4402.jpg"
      />

      {/* Introduction Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            {copy.intro.headline}
          </h2>
          {copy.intro.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-800 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Key Deductions */}
      <Section id="deductions" background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Receipt className="w-8 h-8 text-cyan-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {copy.deductions.headline}
            </h2>
          </div>
          {copy.deductions.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-800 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="space-y-4 mt-8">
            {copy.deductions.items.map((item, index) => (
              <GlassCard key={index} solidWhite hover>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-800 text-sm mb-3">{item.description}</p>
                <div className="flex items-center gap-2 text-cyan-600 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-medium">Limit:</span> {item.limit}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* SC-Specific Benefits */}
      <Section id="sc-benefits">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="w-8 h-8 text-cyan-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {copy.lowcountry.headline}
            </h2>
          </div>
          {copy.lowcountry.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-800 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {copy.lowcountry.benefits.map((benefit, index) => (
              <GlassCard key={index} solidWhite hover delay={index * 0.1}>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-800 text-sm">{benefit.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Self-Employed Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {copy.selfEmployed.headline}
            </h2>
          </div>
          {copy.selfEmployed.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-white text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="space-y-4 mt-6">
            {copy.selfEmployed.deductions.map((item, index) => (
              <GlassCard key={index} solidWhite hover>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-white text-sm">{item.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="mt-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            <p className="text-white text-sm">
              <span className="text-amber-400 font-semibold">Note:</span> {copy.selfEmployed.note}
            </p>
          </div>

          <Link
            href="/self-employed"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium mt-6"
          >
            Learn About Self-Employed Mortgage Options <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Physician Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-cyan-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {copy.physician.headline}
            </h2>
          </div>
          {copy.physician.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-800 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <ul className="space-y-3 mt-6">
            {copy.physician.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <p className="text-gray-800 text-sm">
              <span className="text-cyan-600 font-semibold">Note:</span> {copy.physician.note}
            </p>
          </div>

          <Link
            href="/physician-loans"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-300 font-medium mt-6"
          >
            Explore Physician Loan Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Strategies Section */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-cyan-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              {copy.strategies.headline}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {copy.strategies.strategies.map((strategy, index) => (
              <GlassCard key={index} solidWhite hover delay={index * 0.1}>
                <h3 className="text-gray-800 font-semibold mb-2">{strategy.title}</h3>
                <p className="text-gray-800 text-sm">{strategy.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* First-Time Homebuyers */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8 text-cyan-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              {copy.firstTime.headline}
            </h2>
          </div>
          {copy.firstTime.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-800 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <ul className="space-y-3 mt-6">
            {copy.firstTime.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
                {benefit}
              </li>
            ))}
          </ul>

          <Link
            href="/first-time-buyers"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-300 font-medium mt-6"
          >
            Explore First-Time Buyer Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Important Caveats */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {copy.important.headline}
            </h2>
          </div>
          {copy.important.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-white text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="space-y-3 mt-6">
            {copy.important.caveats.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg">
                <span className="flex-shrink-0 w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 text-sm font-medium">
                  !
                </span>
                <span className="text-white">{item}</span>
              </div>
            ))}
          </div>
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