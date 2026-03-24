import type { Metadata } from "next";
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  TrendingUp, 
  Home, 
  DollarSign, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Building2,
  Calculator,
  ArrowDown,
  Percent,
  RefreshCw
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Refinance Now or Wait? Lowcountry Market Analysis | Maggie Blank",
  description: "Analysis of current refinance rates and market conditions for Bluffton, Hilton Head, and Beaufort homeowners. Should you refinance now or wait? Expert guidance inside.",
  keywords: ["refinance rates Lowcountry", "should I refinance South Carolina", "mortgage rates 2026", "cash out refinance Bluffton", "rate and term refinance", "when to refinance mortgage", "Hilton Head refinance", "Beaufort mortgage rates"],
  authors: [{ name: "Maggie Blank" }],
  creator: "Maggie Blank",
  publisher: "Synovus Bank",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://maggie-website-pi.vercel.app/blog/refinance-now-or-wait",
    siteName: "Maggie Blank - Lowcountry Mortgage Advisor",
    title: "Refinance Now or Wait? Lowcountry Market Analysis",
    description: "Analysis of current refinance rates and market conditions for Bluffton, Hilton Head, and Beaufort homeowners.",
    images: [
      {
        url: "/IMG_4395.JPG",
        width: 1200,
        height: 630,
        alt: "Lowcountry home and mortgage financing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Refinance Now or Wait? Lowcountry Market Analysis",
    description: "Analysis of current refinance rates and market conditions for Lowcountry homeowners.",
  },
};

const copy = {
  hero: {
    headline: "Refinance Now or Wait? Lowcountry Market Analysis",
    subheadline: "Current market conditions and strategic considerations for homeowners in Bluffton, Hilton Head, and Beaufort deciding whether to refinance now or hold for better rates.",
    ctaPrimary: "Get Rate Quote",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Calculate Savings",
    ctaSecondaryLink: "/calculator"
  },

  intro: {
    headline: "The Refinance Decision",
    paragraphs: [
      "If you're a homeowner in the Lowcountry, you've likely been watching mortgage rates with keen interest. Rates have fluctuated significantly over the past few years, and the question on many homeowners' minds is simple: should I refinance now, or wait for a better rate?",
      "The answer isn't straightforward — it depends on your current rate, your financial goals, how long you plan to stay in the home, and the specific characteristics of Lowcountry properties.",
      "Let me walk you through the current market conditions and the key factors to consider when making this important decision."
    ]
  },

  market: {
    headline: "Current Market Conditions (February 2026)",
    paragraphs: [
      "As of early 2026, mortgage rates have settled into a range that's more favorable than the historic highs of 2023-2024, though still above the record lows we saw in 2020-2021. Here's what Lowcountry homeowners are seeing:"
    ],
    conditions: [
      {
        metric: "30-Year Fixed Rate",
        current: "6.5% - 7.0%",
        trend: "Stable",
        note: "Similar to rates seen in late 2025"
      },
      {
        metric: "15-Year Fixed Rate",
        current: "5.75% - 6.25%",
        trend: "Stable",
        note: "Slightly more favorable for rate-and-term refinancing"
      },
      {
        metric: "7/1 ARM",
        current: "6.0% - 6.5%",
        trend: "Trending down",
        note: "Considered by some for short-term plans"
      },
      {
        metric: "Cash-Out Refinance",
        current: "7.0% - 7.5%",
        trend: "Stable",
        note: "Typically 0.25-0.5% higher than rate-and-term"
      }
    ],
    insight: "While rates aren't at historic lows, they're competitive compared to where we've been. For many homeowners who locked in during the 2022-2023 period at 7-8%, current rates represent meaningful savings."
  },

  breakEven: {
    headline: "The Break-Even Calculation",
    paragraphs: [
      "The most important number in your refinance decision is your break-even point — how long until the monthly savings exceed the closing costs you pay today."
    ],
    formula: "Break-Even Point = Closing Costs ÷ Monthly Savings",
    factors: [
      "Closing costs typically run 2-5% of your loan amount (on a $300,000 loan, that's $6,000-$15,000)",
      "If you save $200/month, your break-even is 30-75 months (2.5-6 years)",
      "If you plan to sell before reaching break-even, refinancing doesn't make sense",
      "If you're staying long-term, even a small rate drop can mean significant savings"
    ]
  },

  shouldYouRefinance: {
    headline: "Should You Refinance Now? Key Scenarios",
    scenarios: [
      {
        answer: "YES — If Your Rate Is Above 7%",
        description: "If you're currently at 7%+ with a conventional loan, refinancing to current rates could save you $200-$500+ per month. Even with closing costs, the math often works out favorably."
      },
      {
        answer: "YES — If You Want to Cash Out Equity",
        description: "Lowcountry home values have appreciated significantly. If you need funds for home improvements, debt consolidation, or investment, a cash-out refinance at current rates may be worthwhile."
      },
      {
        answer: "WAIT — If Your Rate Is Below 5.5%",
        description: "If you locked in during 2020-2021 at sub-5% rates, it's hard to improve. Unless you're doing a significant cash-out, waiting makes sense unless rates drop substantially."
      },
      {
        answer: "WAIT — If You're Selling Soon",
        description: "If you plan to move within 2-3 years, the closing costs likely won't be recouped. Focus on your next purchase rather than refinancing your current home."
      },
      {
        answer: "CONSIDER — If You're Approaching Break-Even",
        description: "If you're 2-3 years from break-even, weigh whether the certainty of current rates outweighs the possibility of further drops. There's no guarantee rates will fall significantly."
      }
    ]
  },

  lowcountryFactors: {
    headline: "Lowcountry-Specific Considerations",
    factors: [
      {
        title: "Home Values Remain Strong",
        description: "The Lowcountry market — especially Bluffton and Hilton Head — has seen continued appreciation. This means healthy equity positions for homeowners looking to refinance or cash out."
      },
      {
        title: "High-End Market Activity",
        description: "Physicians, retirees, and relocating professionals continue to drive the luxury market. If you have a higher-value home, your refinance options and rates may be more favorable."
      },
      {
        title: "Flood Insurance Costs",
        description: "Remember to factor in flood insurance if you're in a high-risk zone. Refinancing doesn't change your insurance requirements, but it does affect your total monthly payment."
      },
      {
        title: "HOA Considerations",
        description: "Many Lowcountry communities have HOA fees. When calculating your refinance savings, make sure to factor in the full cost of housing — mortgage, taxes, insurance, and HOA."
      }
    ]
  },

  types: {
    headline: "Refinance Options for Lowcountry Homeowners",
    options: [
      {
        type: "Rate and Term Refinance",
        description: "Lower your interest rate, change your term (e.g., from 30 to 15 years), or switch from ARM to fixed. Best for lowering monthly payments.",
        bestFor: "Homeowners with rates above 7% who plan to stay long-term"
      },
      {
        type: "Cash-Out Refinance",
        description: "Replace your current mortgage with a new, larger loan and take the difference in cash. Uses your home equity.",
        bestFor: "Homeowners needing funds for renovations, debt, or investments"
      },
      {
        type: "FHA Streamline",
        description: "If you have an FHA loan, a streamline refinance offers reduced documentation and potentially lower costs.",
        bestFor: "Current FHA borrowers with good payment history"
      },
      {
        type: "VA IRRRL",
        description: "Interest Rate Reduction Refinance Loan for veterans with VA loans. Potentially lower costs and no appraisal required.",
        bestFor: "Eligible veterans looking to lower their rate"
      }
    ]
  },

  physician: {
    headline: "Physician-Specific Refinancing",
    paragraphs: [
      "If you're a physician with existing student debt, refinancing your mortgage to a lower rate can improve your debt-to-income ratio and free up cash flow for other priorities.",
      "Some physicians also explore cash-out refinancing to consolidate high-interest student loans — though this approach has tax implications worth discussing with your financial advisor."
    ],
    link: "/physician-loans"
  },

  selfEmployed: {
    headline: "Self-Employed Refinancing Considerations",
    paragraphs: [
      "Self-employed borrowers may face additional documentation requirements when refinancing. You'll likely need 2 years of tax returns, K-1s, and potentially 12-24 months of business bank statements.",
      "The good news: Lowcountry home values support strong equity positions, and self-employed borrowers with solid income can qualify for excellent refinance rates."
    ],
    link: "/self-employed"
  },

  decision: {
    headline: "Making Your Decision",
    paragraphs: [
      "There's no universal answer to 'refinance now or wait.' The right choice depends on your unique situation: your current rate, how long you plan to stay, your financial goals, and your risk tolerance.",
      "Here's my practical advice: if you're above 7% and plan to stay in your home for 5+ years, the current rates likely make sense. If you're below 6%, patience may be rewarded.",
      "The most important step is getting a personalized analysis. I can provide a no-obligation quote that shows exactly what you'd save — including all closing costs and your specific break-even timeline."
    ]
  },

  cta: {
    headline: "Get Your Personalized Refinance Analysis",
    subheadline: "Find out exactly what you'd save with a refinance — no obligation, no hard credit pull to get a rate estimate.",
    ctaPrimary: "Get Rate Quote",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Schedule Consultation",
    ctaSecondaryLink: "/contact"
  }
};

export default function RefinanceBlog() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Refinance Now or Wait? Lowcountry Market Analysis",
          "description": "Analysis of current refinance rates and market conditions for Bluffton, Hilton Head, and Beaufort homeowners.",
          "image": "/IMG_4395.JPG",
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
          "datePublished": "2026-02-18",
          "dateModified": "2026-02-18",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://maggie-website-pi.vercel.app/blog/refinance-now-or-wait"
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
        backgroundImage="/IMG_4395.JPG"
      />

      {/* Introduction Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {copy.intro.headline}
          </h2>
          {copy.intro.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Market Conditions */}
      <Section id="market" background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {copy.market.headline}
            </h2>
          </div>
          {copy.market.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="space-y-3 mt-8">
            {copy.market.conditions.map((item, index) => (
              <GlassCard key={index} hover={false}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-white font-semibold">{item.metric}</h4>
                    <p className="text-gray-300 text-sm">{item.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-cyan-400">{item.current}</p>
                    <p className="text-gray-500 text-sm flex items-center gap-1 justify-end">
                      {item.trend === "Stable" ? <ArrowRight className="w-3 h-3" /> : <ArrowDown className="w-3 h-3 text-green-400" />}
                      {item.trend}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <p className="text-gray-300">
              <span className="text-cyan-400 font-semibold">Market Insight:</span> {copy.market.insight}
            </p>
          </div>
        </div>
      </Section>

      {/* Break-Even Section */}
      <Section id="break-even">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {copy.breakEven.headline}
            </h2>
          </div>
          {copy.breakEven.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <div className="bg-gray-800/50 rounded-xl p-6 border border-cyan-500/20 mt-6">
            <p className="text-cyan-400 font-mono text-center text-lg">
              {copy.breakEven.formula}
            </p>
          </div>

          <ul className="space-y-3 mt-8">
            {copy.breakEven.factors.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Should You Refinance */}
      <Section id="scenarios" background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            {copy.shouldYouRefinance.headline}
          </h2>
          
          <div className="space-y-4">
            {copy.shouldYouRefinance.scenarios.map((scenario, index) => (
              <GlassCard key={index} hover={false}>
                <h3 className={`text-lg font-semibold mb-2 ${scenario.answer.includes("YES") ? "text-green-400" : scenario.answer.includes("WAIT") ? "text-amber-400" : "text-cyan-400"}`}>
                  {scenario.answer}
                </h3>
                <p className="text-gray-300">{scenario.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Lowcountry Factors */}
      <Section id="lowcountry">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {copy.lowcountryFactors.headline}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {copy.lowcountryFactors.factors.map((factor, index) => (
              <GlassCard key={index} hover delay={index * 0.1}>
                <h3 className="text-lg font-semibold text-white mb-2">{factor.title}</h3>
                <p className="text-gray-300 text-sm">{factor.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Refinance Options */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <RefreshCw className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {copy.types.headline}
            </h2>
          </div>
          
          <div className="space-y-4 mt-8">
            {copy.types.options.map((option, index) => (
              <GlassCard key={index} hover={false}>
                <h3 className="text-lg font-semibold text-white mb-1">{option.type}</h3>
                <p className="text-gray-300 text-sm mb-3">{option.description}</p>
                <p className="text-cyan-400 text-sm">
                  <span className="font-medium">Best for:</span> {option.bestFor}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Physician Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {copy.physician.headline}
            </h2>
          </div>
          {copy.physician.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <Link
            href={copy.physician.link}
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Explore Physician Loan Options <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Self-Employed Section */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {copy.selfEmployed.headline}
            </h2>
          </div>
          {copy.selfEmployed.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
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

      {/* Decision Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Percent className="w-8 h-8 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              {copy.decision.headline}
            </h2>
          </div>
          {copy.decision.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
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