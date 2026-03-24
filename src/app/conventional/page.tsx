import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Building2, 
  Percent, 
  Shield, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Wallet,
  Scale,
  Home,
  Check,
  X
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Conventional loans — the gold standard in homeownership.",
    subheadline: "Flexible, competitive, and widely accessible. Conventional financing offers some of the best rates and terms for buyers who qualify. Let's see if it's right for you.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "See Requirements",
    ctaSecondaryLink: "#requirements",
    trustBullets: [
      "As Low as 3% Down",
      "Competitive Interest Rates",
      "No Upfront Mortgage Insurance"
    ]
  },

  whatIs: {
    headline: "What is a conventional loan?",
    description: "A conventional loan is a mortgage not backed by a government agency like the FHA, VA, or USDA. These loans are offered by private lenders and conform to guidelines set by Fannie Mae and Freddie Mac.",
    features: [
      "Not insured or guaranteed by the federal government",
      "Typically requires higher credit scores than government loans",
      "Can be used for primary residences, second homes, and investment properties",
      "Offers both fixed-rate and adjustable-rate options"
    ]
  },

  benefits: {
    headline: "Why borrowers choose conventional loans",
    cards: [
      {
        icon: TrendingDown,
        title: "Lower Interest Rates",
        description: "Conventional loans typically offer the lowest interest rates available — especially for borrowers with strong credit."
      },
      {
        icon: Wallet,
        title: "No PMI Options",
        description: "With 20% down, you can avoid private mortgage insurance entirely, saving hundreds per month."
      },
      {
        icon: Scale,
        title: "Flexible Terms",
        description: "Choose from 10, 15, 20, or 30-year terms to match your budget and long-term financial goals."
      },
      {
        icon: Building2,
        title: "Higher Loan Limits",
        description: "Conventional loans support higher loan amounts, making them ideal for move-up buyers and luxury homes."
      }
    ]
  },

  requirements: {
    headline: "Conventional loan requirements",
    items: [
      "Credit score: Typically 620+ (740+ for the best rates)",
      "Down payment: As low as 3% (20% to avoid PMI)",
      "Debt-to-income ratio: Usually below 43%",
      "Employment history: 2+ years of stable employment",
      "Property requirements: Must meet Fannie Mae/Freddie Mac standards"
    ],
    note: "Requirements may vary based on your specific situation and the lender. We'll help you understand your options."
  },

  comparison: {
    headline: "Conventional vs. FHA vs. USDA",
    description: "Understanding the differences helps you choose the right loan program.",
    conventional: {
      title: "Conventional",
      items: [
        "Down payment: 3-20%",
        "Credit score: 620+ typical",
        "PMI: Required under 20% down",
        "DTI: Up to 43%",
        "Property type: Primary, second home, investment"
      ]
    },
    fha: {
      title: "FHA",
      items: [
        "Down payment: 3.5%+",
        "Credit score: 580+ typical",
        "PMI: Required for all loans",
        "DTI: Up to 43% (may exceed)",
        "Property type: Primary residence only"
      ]
    },
    usda: {
      title: "USDA",
      items: [
        "Down payment: 0%",
        "Credit score: 640+ typical",
        "PMI: Guarantee fee (no traditional PMI)",
        "DTI: Up to 41%",
        "Property type: Rural/suburban eligible"
      ]
    }
  },

  whenMakesSense: {
    headline: "When a conventional loan makes sense",
    scenarios: [
      {
        title: "Strong Credit",
        description: "If your credit score is 740 or higher, you'll qualify for the best rates — often beating government loan programs."
      },
      {
        title: "20% Down Payment",
        description: "With 20% or more to put down, you avoid PMI entirely while getting competitive rates."
      },
      {
        title: "Move-Up Buyer",
        description: "Selling your current home to buy a larger one? Conventional loans handle complex situations well."
      },
      {
        title: "Investment Property",
        description: "Looking to buy a rental? Conventional loans work for second homes and investment properties."
      }
    ]
  },

  process: {
    headline: "Your path to conventional financing",
    steps: [
      {
        number: "01",
        title: "Rate Check",
        description: "We pull your credit and discuss current conventional rates and your eligibility."
      },
      {
        number: "02",
        title: "Pre-Approval",
        description: "Get your official pre-approval letter with your approved loan amount."
      },
      {
        number: "03",
        title: "Find Your Home",
        description: "Work with your realtor to find the right property in the Lowcountry."
      },
      {
        number: "04",
        title: "Close Smoothly",
        description: "Our conventional loan expertise means efficient underwriting and on-time closing."
      }
    ],
    cta: "Start Conventional Process",
    ctaLink: "/contact"
  },

  faq: {
    headline: "Conventional loan questions",
    items: [
      {
        question: "What's the minimum down payment for a conventional loan?",
        answer: "As low as 3% for primary residences. However, putting down less than 20% requires private mortgage insurance (PMI) which adds to your monthly payment."
      },
      {
        question: "How do I remove PMI from my conventional loan?",
        answer: "Once you reach 20% equity in your home (either through payments or appreciation), you can request your lender to remove PMI. The loan must be in good standing."
      },
      {
        question: "Can I use a conventional loan for an investment property?",
        answer: "Yes! Conventional loans can be used for primary residences, second homes, and investment properties. Terms and rates may vary based on property type."
      },
      {
        question: "What's the difference between conforming and non-conforming conventional loans?",
        answer: "Conforming loans meet Fannie Mae and Freddie Mac limits ($766,000 in 2024 for most areas). Non-conforming loans exceed these limits (jumbo loans) and have different requirements."
      }
    ]
  },

  cta: {
    headline: "Ready to explore conventional financing?",
    subhead: "Let's find out if a conventional loan is your best path to homeownership.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Schedule Consultation",
    ctaSecondaryLink: "/contact"
  }
};

export default function ConventionalLoansPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={copy.hero.headline}
        subheadline={copy.hero.subheadline}
        ctaPrimary={copy.hero.ctaPrimary}
        ctaPrimaryLink={copy.hero.ctaPrimaryLink}
        ctaSecondary={copy.hero.ctaSecondary}
        ctaSecondaryLink={copy.hero.ctaSecondaryLink}
        trustBullets={copy.hero.trustBullets}
        variant="compact"
        backgroundImage="/IMG_4406.JPG"
      />

      {/* What Is Conventional Section */}
      <Section id="what-is">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {copy.whatIs.headline}
          </h2>
          <p className="text-white text-lg leading-relaxed mb-8">
            {copy.whatIs.description}
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {copy.whatIs.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 text-white">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.benefits.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.benefits.cards.map((card, index) => (
            <GlassCard key={index} solidWhite darkText hover delay={index * 0.1}>
              <card.icon className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Requirements Section */}
      <Section id="requirements">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.requirements.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <ul className="space-y-4">
              {copy.requirements.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GlassCard solidWhite darkText hover className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
            <div className="text-center">
              <Percent className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-gray-800 font-semibold text-xl mb-2">Competitive Rates</h3>
              <p className="text-gray-600 text-sm mb-6">
                Conventional loans often feature the lowest interest rates of any loan type — especially for borrowers with strong credit.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Get Rate Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Comparison Section */}
      <Section id="comparison" background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.comparison.headline}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {copy.comparison.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Conventional */}
          <GlassCard solidWhite hover className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Home className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">{copy.comparison.conventional.title}</h3>
            </div>
            <ul className="space-y-3">
              {copy.comparison.conventional.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* FHA */}
          <GlassCard solidWhite hover className="border-orange-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">{copy.comparison.fha.title}</h3>
            </div>
            <ul className="space-y-3">
              {copy.comparison.fha.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white text-sm">
                  <span className="text-orange-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* USDA */}
          <GlassCard solidWhite hover className="border-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                <Scale className="w-5 h-5 text-green-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">{copy.comparison.usda.title}</h3>
            </div>
            <ul className="space-y-3">
              {copy.comparison.usda.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white text-sm">
                  <span className="text-green-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </Section>

      {/* When Conventional Makes Sense */}
      <Section id="when-makes-sense">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.whenMakesSense.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {copy.whenMakesSense.scenarios.map((scenario, index) => (
            <GlassCard key={index} solidWhite hover delay={index * 0.1}>
              <h3 className="text-lg font-semibold text-white mb-2">{scenario.title}</h3>
              <p className="text-white text-sm leading-relaxed">{scenario.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Process Timeline */}
      <ProcessTimeline
        headline={copy.process.headline}
        steps={copy.process.steps}
        cta={copy.process.cta}
        ctaLink={copy.process.ctaLink}
      />

      {/* FAQ Section */}
      <FAQAccordion
        headline={copy.faq.headline}
        items={copy.faq.items}
      />

      {/* CTA Band */}
      <CTABand
        headline={copy.cta.headline}
        subhead={copy.cta.subhead}
        ctaPrimary={copy.cta.ctaPrimary}
        ctaPrimaryLink={copy.cta.ctaPrimaryLink}
        ctaSecondary={copy.cta.ctaSecondary}
        ctaSecondaryLink={copy.cta.ctaSecondaryLink}
      />

      {/* Download Guide Section */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Free: Lowcountry Physician Relocation Guide
          </h2>
          <p className="text-white mb-8">
            Everything you need to know about relocating to the Lowcountry as a physician.
          </p>
          <a 
            href="/Lowcountry Physician Relocation Guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
            Download Free Guide
          </a>
        </div>
      </Section>
    </>
  );
}
