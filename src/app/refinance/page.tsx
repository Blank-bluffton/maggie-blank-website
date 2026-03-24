import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  TrendingDown, 
  Wallet, 
  Zap, 
  CheckCircle2,
  ArrowRight,
  Calculator,
  Clock,
  Home,
  PiggyBank
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Refinance With Confidence",
    subheadline: "Whether you want to lower your rate, tap into your home's equity, or streamline your existing mortgage — find the refinancing strategy that fits your goals.",
    ctaPrimary: "Get Your Rate Quote",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Explore Options",
    ctaSecondaryLink: "#refinance-types",
    trustBullets: [
      "No Hidden Closing Costs",
      "Local Lowcountry Expertise",
      "Competitive Rates"
    ]
  },

  refinanceTypes: {
    headline: "Three paths to a better mortgage",
    subhead: "Every homeowner's situation is different. Here's how each refinancing option works.",
    types: [
      {
        icon: TrendingDown,
        title: "Rate & Term Refinance",
        description: "Lower your interest rate, change your loan term, or switch from an ARM to a fixed-rate mortgage. This is the most common refinancing goal — reduce your monthly payment or pay off your loan faster.",
        benefits: [
          "Lower monthly payments",
          "Reduced interest rate",
          "Switch from ARM to fixed-rate",
          "Shorten or extend your term"
        ],
        accent: "cyan"
      },
      {
        icon: Wallet,
        title: "Cash-Out Refinance",
        description: "Tap into your home's equity by refinancing for more than you owe and taking the difference in cash. Use it for home improvements, debt consolidation, investments, or major purchases.",
        benefits: [
          "Access tax-deductible equity*",
          "Fund home improvements",
          "Consolidate high-interest debt",
          "Cover major expenses"
        ],
        accent: "purple"
      },
      {
        icon: Zap,
        title: "Streamline Refinance",
        description: "If you have an existing FHA, VA, or USDA loan, a streamline refinance can lower your rate with minimal documentation. Less paperwork, faster closing, less stress.",
        benefits: [
          "Minimal documentation required",
          "No appraisal often required",
          "Faster closing timeline",
          "Lower costs than traditional refi"
        ],
        accent: "pink"
      }
    ]
  },

  savings: {
    headline: "Could you be saving more?",
    subhead: "Even a small rate drop can mean tens of thousands of dollars over the life of your loan.",
    example: {
      currentRate: 6.5,
      newRate: 5.5,
      loanAmount: 350000,
      term: 30,
      monthlySavings: 217,
      lifetimeSavings: 78120
    }
  },

  process: {
    headline: "Refinancing made simple",
    steps: [
      {
        number: "01",
        title: "Rate Check",
        description: "We pull your current loan details and present today's competitive rates."
      },
      {
        number: "02",
        title: "Options Review",
        description: "We walk through rate & term, cash-out, and streamline options side by side."
      },
      {
        number: "03",
        title: "Lock & Process",
        description: "Lock your rate, submit documentation, and we handle the rest."
      },
      {
        number: "04",
        title: "Close & Save",
        description: "Sign on the dotted line and start saving on day one."
      }
    ],
    cta: "Start Refinance Consultation",
    ctaLink: "/contact"
  },

  whenToRefinance: {
    headline: "Is now the right time?",
    items: [
      {
        title: "Rates have dropped",
        description: "Even a 0.5% rate drop can meaningfully reduce your payment."
      },
      {
        title: "Your credit has improved",
        description: "If your score has gone up since your original loan, you may qualify for better rates."
      },
      {
        title: "You want to shorten your term",
        description: "Moving from a 30-year to a 15-year term can save massive interest — if your budget allows."
      },
      {
        title: "You need cash",
        description: "A cash-out refinance lets you access your home's equity without a second mortgage."
      },
      {
        title: "Your ARM is adjusting",
        description: "If your adjustable-rate mortgage is about to reset, refinancing to a fixed rate brings predictability."
      },
      {
        title: "You're planning to stay",
        description: "If you plan to stay in your home long-term, refinancing costs can pay for themselves."
      }
    ]
  },

  faq: {
    headline: "Refinancing questions",
    items: [
      {
        question: "How much does it cost to refinance?",
        answer: "Closing costs typically range from 2-5% of the loan amount. However, we can often roll costs into the loan or negotiate lender credits. We'll give you a clear cost breakdown before you commit."
      },
      {
        question: "How long does the refinance process take?",
        answer: "A typical refinance takes 30-45 days. Streamline refinances can be faster (14-21 days) since they require less documentation."
      },
      {
        question: "Will I need an appraisal?",
        answer: "Most traditional refinances require an appraisal. However, streamline programs (FHA, VA, USDA) often waive the appraisal requirement. We can tell you what's needed once we review your situation."
      },
      {
        question: "Can I refinance if I have less than 20% equity?",
        answer: "Yes. While 20% equity avoids PMI on conventional loans, there are options for owners with less equity. FHA streamline and VA IRRRL programs don't require specific equity thresholds."
      }
    ]
  },

  cta: {
    headline: "Ready to explore your options?",
    subhead: "Let's look at what refinancing could do for you. No pressure — just a clear picture of your options and potential savings.",
    ctaPrimary: "Schedule Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "/apply"
  }
};

export default function RefinancePage() {
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
        backgroundImage="/IMG_4396.jpg"
      />

      {/* Refinance Types Section */}
      <Section id="refinance-types" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.refinanceTypes.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {copy.refinanceTypes.subhead}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {copy.refinanceTypes.types.map((type, index) => (
            <GlassCard key={index} solidWhite darkText hover delay={index * 0.1}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                type.accent === 'cyan' 
                  ? 'bg-cyan-100' 
                  : type.accent === 'purple'
                  ? 'bg-purple-100'
                  : 'bg-pink-100'
              }`}>
                <type.icon className={`w-7 h-7 ${
                  type.accent === 'cyan' 
                    ? 'text-cyan-600' 
                    : type.accent === 'purple'
                    ? 'text-purple-600'
                    : 'text-pink-600'
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{type.title}</h3>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed">{type.description}</p>
              <ul className="space-y-2.5">
                {type.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      type.accent === 'cyan' 
                        ? 'text-cyan-600' 
                        : type.accent === 'purple'
                        ? 'text-purple-600'
                        : 'text-pink-600'
                    }`} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Savings Example Section */}
      <Section id="savings">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {copy.savings.headline}
            </h2>
            <p className="text-lg text-white mb-8">
              {copy.savings.subhead}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Get Your Custom Savings Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <GlassCard solidWhite hover className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
            <div className="text-center mb-6">
              <Calculator className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold text-lg">Example Savings</h3>
              <p className="text-white text-sm">If you refinanced today</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 rounded-xl bg-white/5">
                <p className="text-white text-xs mb-1">Current Rate</p>
                <p className="text-2xl font-bold text-white">{copy.savings.example.currentRate}%</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <p className="text-white text-xs mb-1">New Rate</p>
                <p className="text-2xl font-bold text-purple-400">{copy.savings.example.newRate}%</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <p className="text-white text-xs mb-1">Monthly Savings</p>
                <p className="text-2xl font-bold text-pink-400">${copy.savings.example.monthlySavings}</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-pink-500/10 border border-pink-500/20">
                <p className="text-white text-xs mb-1">Lifetime Savings</p>
                <p className="text-2xl font-bold text-cyan-400">${copy.savings.example.lifetimeSavings.toLocaleString()}</p>
              </div>
            </div>
            
            <p className="text-xs text-white mt-4 text-center">
              *Example based on ${copy.savings.example.loanAmount.toLocaleString()} loan, {copy.savings.example.term}-year term. Actual savings depend on rate, term, and closing costs.
            </p>
          </GlassCard>
        </div>
      </Section>

      {/* When to Refinance Section */}
      <Section id="when-to-refinance" background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.whenToRefinance.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {copy.whenToRefinance.items.map((item, index) => (
            <GlassCard key={index} solidWhite hover delay={index * 0.05} className="border-white/5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">{item.title}</h4>
                  <p className="text-white text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
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
    </>
  );
}
