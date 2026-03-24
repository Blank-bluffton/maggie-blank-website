import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Home, 
  FileText, 
  PiggyBank, 
  Shield, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Calculator,
  Users,
  Key
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Your first home — simplified.",
    subheadline: "Buying your first home doesn't have to be overwhelming. We demystify the mortgage process so you can buy with confidence in the Lowcountry.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Learn About Programs",
    ctaSecondaryLink: "#programs",
    trustBullets: [
      "FHA, Conventional & USDA Options",
      "As Little as 3% Down",
      "Down Payment Assistance Available"
    ]
  },

  programs: {
    headline: "First-time buyer programs",
    cards: [
      {
        icon: PiggyBank,
        title: "Conventional 97",
        description: "Only 3% down required. Private mortgage insurance is required but can be removed once you reach 20% equity.",
        minDown: "3%"
      },
      {
        icon: Home,
        title: "FHA Loan",
        description: "3.5% down with flexible credit requirements. Great for buyers with less-than-perfect credit history.",
        minDown: "3.5%"
      },
      {
        icon: Shield,
        title: "USDA Loan",
        description: "0% down for eligible rural and suburban properties. No mortgage insurance — just a one-time guarantee fee.",
        minDown: "0%"
      },
      {
        icon: FileText,
        title: "SC Housing Programs",
        description: "State-specific down payment assistance and affordable financing options for South Carolina residents.",
        minDown: "0%"
      }
    ]
  },

  costs: {
    headline: "Understanding your upfront costs",
    sections: [
      {
        title: "Down Payment",
        items: [
          "Conventional: 3-20% of purchase price",
          "FHA: 3.5% of purchase price",
          "USDA: 0% for eligible properties",
          "VA: 0% for eligible veterans"
        ]
      },
      {
        title: "Closing Costs",
        items: [
          "Typically 2-5% of loan amount",
          "Includes appraisal, title, and origination fees",
          "Can sometimes be negotiated to be paid by seller",
          "May be partially covered by lender credits"
        ]
      },
      {
        title: "Pre-Purchase Costs",
        items: [
          "Home inspection: $300-500",
          "Appraisal: $400-600",
          "Credit report: Usually free through lender"
        ]
      }
    ]
  },

  timeline: {
    headline: "The first-time buyer journey",
    steps: [
      {
        number: "01",
        title: "Check Your Credit",
        description: "Review your credit report and score. We'll tell you what loan programs you qualify for."
      },
      {
        number: "02",
        title: "Get Pre-Approved",
        description: "Submit documentation. We'll give you a letter showing exactly how much you can afford."
      },
      {
        number: "03",
        title: "Find Your Realtor",
        description: "We'll connect you with a trusted local realtor who knows the Lowcountry market."
      },
      {
        number: "04",
        title: "Make an Offer",
        description: "Your pre-approval letter strengthens your offer. We'll help structure it for success."
      },
      {
        number: "05",
        title: "Close on Your Home",
        description: "Final walkthrough, sign papers, and get your keys. You're a homeowner!"
      }
    ],
    cta: "Start as a First-Time Buyer",
    ctaLink: "/contact"
  },

  mistakes: {
    headline: "Avoid these first-time buyer mistakes",
    items: [
      "Waiting too long to get pre-approved",
      "Not accounting for hidden costs",
      "Making big purchases before closing",
      "Skipping the home inspection",
      "Not comparing loan estimates",
      "Going solo without a realtor"
    ]
  },

  faq: {
    headline: "First-time buyer questions",
    items: [
      {
        question: "How much house can I afford?",
        answer: "We generally follow the 28/36 rule: your mortgage payment should be no more than 28% of your gross monthly income, and total debt payments should not exceed 36%. We'll give you a firm number during pre-approval."
      },
      {
        question: "Do I need perfect credit to buy a home?",
        answer: "No! FHA loans accept credit scores as low as 580 (or 500 with a larger down payment). We'll help you find the best program for your credit situation."
      },
      {
        question: "Can I use gift money for my down payment?",
        answer: "Yes, many loan programs allow gifted funds from family members. We'll explain the documentation requirements."
      },
      {
        question: "What happens at the closing?",
        answer: "You'll sign numerous documents, review final figures, and receive your keys. Plan for 1-2 hours. We'll walk you through everything beforehand."
      }
    ]
  },

  cta: {
    headline: "Ready to buy your first home?",
    subhead: "Let's get you pre-approved and on the path to homeownership.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Schedule Consultation",
    ctaSecondaryLink: "/contact"
  }
};

export default function FirstTimeBuyersPage() {
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
        backgroundImage="/IMG_4408.JPG"
      />

      {/* Programs Section */}
      <Section id="programs" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.programs.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.programs.cards.map((card, index) => (
            <GlassCard key={index} hover delay={index * 0.1}>
              <div className="flex items-center justify-between mb-4">
                <card.icon className="w-10 h-10 text-cyan-400" />
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                  {card.minDown} down
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{card.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Understanding Costs Section */}
      <Section id="costs">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.costs.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {copy.costs.sections.map((section, index) => (
            <GlassCard key={index} hover delay={index * 0.1}>
              <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Mistakes Section */}
      <Section id="mistakes" background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {copy.mistakes.headline}
            </h2>
            <ul className="space-y-3">
              {copy.mistakes.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm">!</span>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GlassCard hover={false} className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20">
            <div className="text-center">
              <Calculator className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Mortgage Calculator</h3>
              <p className="text-gray-300 text-sm mb-6">
                Get a rough estimate of your monthly mortgage payment based on home price, down payment, and loan terms.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 glass text-white font-medium rounded-xl hover:bg-white/10 transition-all"
              >
                Try Calculator
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Process Timeline */}
      <ProcessTimeline
        headline={copy.timeline.headline}
        steps={copy.timeline.steps}
        cta={copy.timeline.cta}
        ctaLink={copy.timeline.ctaLink}
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
    </>
  );
}
