import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Hammer, 
  Home, 
  Building, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Calendar,
  Shield,
  Banknote
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Build Your Dream Home",
    subheadline: "Construction-to-permanent financing that moves with you from groundbreaking to housewarming. One loan, one closing, one simplified path to your new home in the Lowcountry.",
    ctaPrimary: "Get Started",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Learn How It Works",
    ctaSecondaryLink: "#how-it-works",
    trustBullets: [
      "One Loan, One Closing",
      "Lock Your Rate During Construction",
      "Lowcountry Builder Network"
    ]
  },

  howItWorks: {
    headline: "How construction-to-permanent loans work",
    steps: [
      {
        number: "01",
        title: "Choose Your Builder",
        description: "Select from our network of trusted Lowcountry builders or bring your own. We work with custom homes, spec builds, and major renovations."
      },
      {
        number: "02",
        title: "One Loan, One Closing",
        description: "You get a single loan that covers both construction and permanent financing. No duplicate closings, no double fees, no hassle."
      },
      {
        number: "03",
        title: "Draws During Construction",
        description: "Funds are drawn in stages as construction progresses. You only pay interest on the amount drawn, not the full loan amount."
      },
      {
        number: "04",
        title: "Automatic Conversion",
        description: "Once construction completes, your loan automatically converts to permanent financing. No re-qualification, no new closing."
      }
    ]
  },

  benefits: {
    headline: "Why builders choose construction-to-permanent",
    cards: [
      {
        icon: Clock,
        title: "One-Time Closing",
        description: "Single loan covers construction through permanent financing. One set of closing costs, one closing date, done."
      },
      {
        icon: Banknote,
        title: "Interest-Only During Build",
        description: "Only pay interest on funds drawn during construction. Lock your rate upfront and avoid market volatility."
      },
      {
        icon: Shield,
        title: "Rate Protection",
        description: "Lock your permanent rate before construction begins. Don't worry about rate increases while building your home."
      },
      {
        icon: Building,
        title: "Flexible Draws",
        description: "Draw funds as needed with professional inspection releases. Transparent process keeps your builder on track."
      }
    ]
  },

  requirements: {
    headline: "What you need to qualify",
    items: [
      "Land equity or signed land purchase contract",
      "Approved building plans and specs",
      "Licensed general contractor with builder's risk insurance",
      "Credit score typically 680+",
      "Debt-to-income ratio typically 43% or less",
      "Cash reserves for construction phase"
    ]
  },

  faq: {
    headline: "Construction loan questions",
    items: [
      {
        question: "What's the difference between construction-to-permanent and a construction-only loan?",
        answer: "A construction-to-permanent loan (also called a single-close loan) covers both the construction phase and permanent financing in one loan. A construction-only loan is short-term and requires refinancing or a new loan when construction ends, which means duplicate closing costs and additional underwriting."
      },
      {
        question: "How long does construction take?",
        answer: "Most new home construction in the Lowcountry takes 6-12 months depending on size, complexity, and builder schedules. We offer 12-18 month construction terms with extensions available if needed."
      },
      {
        question: "Can I act as my own general contractor?",
        answer: "Generally, we require a licensed general contractor for construction-to-permanent loans to ensure proper insurance coverage, building permits, and professional oversight. Owner-builder arrangements may be considered on a case-by-case basis."
      },
      {
        question: "What happens if construction goes over budget?",
        answer: "We work with you and your builder to establish realistic budgets with contingency reserves. If unexpected costs arise, we can discuss options like increasing the loan amount (if appraised value supports it) or covering overages from other sources."
      },
      {
        question: "Do I need land equity to qualify?",
        answer: "You can use land you already own as equity, or include land purchase in your construction loan. Many borrowers choose to include both the land and home construction in a single loan transaction."
      }
    ]
  },

  cta: {
    headline: "Ready to build in the Lowcountry?",
    subhead: "Let's discuss your construction-to-permanent options and connect you with trusted local builders.",
    ctaPrimary: "Schedule Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Apply Now",
    ctaSecondaryLink: "/apply"
  }
};

export default function ConstructionPage() {
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
        backgroundImage="/IMG_4401.JPG"
      />

      {/* How It Works Section */}
      <Section id="how-it-works" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {copy.howItWorks.headline}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.howItWorks.steps.map((step, index) => (
            <GlassCard key={index} hover delay={index * 0.1}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-900 text-sm leading-relaxed">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {copy.benefits.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.benefits.cards.map((card, index) => (
            <GlassCard 
              key={index} 
              hover 
              delay={index * 0.1}
              className={index === 1 ? "border-pink-500/30 bg-gradient-to-br from-pink-500/5 to-transparent" : 
                         index === 2 ? "border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-transparent" : ""}
            >
              <card.icon className={`w-10 h-10 mb-4 ${index === 0 ? 'text-cyan-400' : index === 1 ? 'text-pink-400' : index === 2 ? 'text-purple-400' : 'text-teal-400'}`} />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-gray-900 text-sm leading-relaxed">{card.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Requirements Section */}
      <Section id="requirements" background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              {copy.requirements.headline}
            </h2>
            <ul className="space-y-4">
              {copy.requirements.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-900">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GlassCard hover={false} className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 border-pink-500/20">
            <div className="text-center">
              <Hammer className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-gray-900 font-semibold text-xl mb-2">Building in the Lowcountry?</h3>
              <p className="text-gray-900 text-sm mb-6">
                We work with experienced local builders who understand coastal construction, permits, and the unique challenges of building in Beaufort County.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-gray-900 font-medium rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all"
              >
                Get Builder Recommendations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Process CTA */}
      <Section>
        <GlassCard 
          hover={false} 
          className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-cyan-500/20"
        >
          <div className="text-center max-w-3xl mx-auto">
            <Home className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Your Dream Home Starts Here
            </h2>
            <p className="text-gray-900 text-lg mb-8">
              Whether you're building a custom home on the water, a family home in Belfair, or a retirement retreat in Sun City, we make construction financing simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Start Your Build
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-pink-500/50 text-gray-900 font-semibold rounded-xl hover:bg-pink-500/10 transition-all"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </GlassCard>
      </Section>

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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Free: Lowcountry Physician Relocation Guide
          </h2>
          <p className="text-gray-900 mb-8">
            Everything you need to know about relocating to the Lowcountry as a physician.
          </p>
          <a 
            href="/Lowcountry Physician Relocation Guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            <ArrowRight className="w-5 h-5" />
            Download Free Guide
          </a>
        </div>
      </Section>
    </>
  );
}
