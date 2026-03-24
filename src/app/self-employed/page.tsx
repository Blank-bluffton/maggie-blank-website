import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Briefcase, 
  FileText, 
  Calculator, 
  Building2, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Receipt,
  Users,
  Wallet
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Self-employed mortgages that actually work.",
    subheadline: "Business owners, freelancers, and entrepreneurs face unique mortgage challenges. We specialize in alternative documentation pathways that reflect how you actually earn.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Explore Options",
    ctaSecondaryLink: "#options",
    trustBullets: [
      "Bank Statement Programs",
      "K-1 Analysis Available",
      "No Tax Returns Required"
    ]
  },

  options: {
    headline: "Self-employed loan options",
    cards: [
      {
        icon: Receipt,
        title: "Bank Statement Loan",
        description: "Use 12-24 months of business bank statements to verify income. Ideal for freelancers and solo entrepreneurs.",
        bestFor: "Freelancers, consultants, sole proprietors"
      },
      {
        icon: FileText,
        title: "K-1 Analysis",
        description: "For partners in partnerships and S-corps, we can analyze K-1 schedules and ordinary income for qualification.",
        bestFor: "Business partners, S-corp owners"
      },
      {
        icon: Calculator,
        title: "Profit & Loss Statement",
        description: "Use signed profit & loss statements from your CPA in lieu of full tax returns. Great for newer businesses.",
        bestFor: "New business owners, 1099 contractors"
      },
      {
        icon: Building2,
        title: "Conventional Financing",
        description: "If you have 2 years of stable self-employed income on tax returns, conventional loans with competitive rates are available.",
        bestFor: "Established business owners"
      }
    ]
  },

  documentation: {
    headline: "Documentation requirements",
    sections: [
      {
        title: "Bank Statement Program",
        items: [
          "12-24 months of business bank statements",
          "2 years of personal tax returns",
          "Proof of business registration (if applicable)",
          "Explanation of any large deposits"
        ]
      },
      {
        title: "K-1 Analysis",
        items: [
          "2 years of K-1 forms",
          "2 years of personal tax returns",
          "Corporate/partnership tax returns",
          "Year-to-date profit & loss"
        ]
      },
      {
        title: "P&L Program",
        items: [
          "Signed P&L from CPA (12-24 months)",
          "2 years of personal tax returns",
          "Business license or registration",
          "Client contracts or retainer letters"
        ]
      }
    ]
  },

  tips: {
    headline: "Tips for self-employed buyers",
    items: [
      "Maintain clean, consistent business bank accounts",
      "Keep detailed records of business expenses",
      "Consider incorporating if you haven't already",
      "Build business credit separate from personal",
      "Avoid large purchases before closing",
      "Work with a CPA who understands mortgage docs"
    ]
  },

  process: {
    headline: "The self-employed path to homeownership",
    steps: [
      {
        number: "01",
        title: "Income Analysis",
        description: "We review your documentation and identify the best loan program for your situation."
      },
      {
        number: "02",
        title: "Program Selection",
        description: "Choose between bank statement, K-1, or P&L programs based on your documentation strengths."
      },
      {
        number: "03",
        title: "Pre-Approval",
        description: "Get a solid pre-approval letter that reflects your true income potential."
      },
      {
        number: "04",
        title: "Home Purchase",
        description: "Close on your home with confidence, knowing your income documentation is solid."
      }
    ],
    cta: "Start Self-Employed Process",
    ctaLink: "/contact"
  },

  faq: {
    headline: "Self-employed mortgage questions",
    items: [
      {
        question: "How do bank statement loans work?",
        answer: "We analyze your business bank statements to calculate average monthly income. We typically average the last 12-24 months of deposits, subtracting documented business expenses to determine your qualifying income."
      },
      {
        question: "Can I qualify with just one year of self-employment?",
        answer: "Some programs allow one year of self-employment if you have a related college degree or prior work experience in the field. Otherwise, most programs require 2 years."
      },
      {
        question: "Do bank statement loans have higher rates?",
        answer: "Bank statement loans typically have slightly higher rates than conventional loans due to the increased risk. However, the difference is often offset by not having to wait 2 years to qualify on tax returns."
      },
      {
        question: "Can I use both personal and business income?",
        answer: "Yes, we can often combine W-2 income from a spouse or partner with self-employed income for qualification, which can significantly increase your buying power."
      }
    ]
  },

  cta: {
    headline: "Ready to buy despite what traditional lenders say?",
    subhead: "Let's find a mortgage program that works with your self-employed income.",
    ctaPrimary: "Schedule Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Apply Now",
    ctaSecondaryLink: "/apply"
  }
};

export default function SelfEmployedPage() {
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

      {/* Options Section */}
      <Section id="options" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.options.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.options.cards.map((card, index) => (
            <GlassCard key={index} hover delay={index * 0.1} darkText>
              <card.icon className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>
              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs text-cyan-600 font-medium">Best for:</p>
                <p className="text-xs text-gray-600">{card.bestFor}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Documentation Section */}
      <Section id="documentation">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.documentation.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {copy.documentation.sections.map((section, index) => (
            <GlassCard key={index} hover delay={index * 0.1} darkText>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Tips Section */}
      <Section id="tips" background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {copy.tips.headline}
            </h2>
            <ul className="space-y-3">
              {copy.tips.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GlassCard hover={false} className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Why Self-Employed Loans Work</h3>
              <p className="text-white text-sm mb-4">
                Traditional lenders only look at tax returns, which often understate your true income due to aggressive deductions.
              </p>
              <p className="text-white text-sm">
                We look at the actual money coming in — because that's what matters for mortgage qualification.
              </p>
            </div>
          </GlassCard>
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
    </>
  );
}
