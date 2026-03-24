import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Stethoscope, 
  GraduationCap, 
  Banknote, 
  Shield, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  DollarSign
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Physician loans built for how doctors actually earn.",
    subheadline: "Specialized mortgage programs designed for physicians, dentists, and high-income medical professionals. Get financing that understands your unique income situation.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Learn About Requirements",
    ctaSecondaryLink: "#requirements",
    trustBullets: [
      "0% Down Options Available",
      "No PMI Required",
      "Deferred Debt Handled"
    ]
  },

  benefits: {
    headline: "Why physicians choose Maggie Blank",
    cards: [
      {
        icon: GraduationCap,
        title: "Student Debt Solutions",
        description: "Deferred student loans don't count against your debt-to-income ratio the same way they do at traditional lenders."
      },
      {
        icon: Banknote,
        title: "0% Down Payment",
        description: "Physician loan programs allow up to 100% financing with no private mortgage insurance required."
      },
      {
        icon: Building2,
        title: "Contract Employment",
        description: "We accept attending contracts, fellowship positions, and guaranteed income provisions as qualifying income."
      },
      {
        icon: Shield,
        title: "Entity Structuring",
        description: "For high-earning specialists, we can help structure loans through LLCs or other entities for tax advantages."
      }
    ]
  },

  requirements: {
    headline: "Physician loan requirements",
    items: [
      "MD, DO, DDS, DMD, or equivalent medical/dental degree",
      "Completion of residency (or currently in residency with attending contract)",
      "Employment contract or letter of intent from hospital/practice",
      "Credit score typically 680+ (some programs go lower)",
      "Debt-to-income ratio considered with student debt adjustments"
    ]
  },

  comparison: {
    headline: "Physician loans vs. conventional",
    conventional: {
      title: "Conventional Loan",
      items: [
        "20% down payment typically required",
        "Student debt counts fully against DTI",
        "PMI required if under 20% down",
        "2 years of employment history required"
      ]
    },
    physician: {
      title: "Physician Loan",
      items: [
        "0-5% down payment options",
        "Deferred student debt may be excluded",
        "No PMI required",
        "Contract employment accepted"
      ]
    }
  },

  process: {
    headline: "Your path to homeownership",
    steps: [
      {
        number: "01",
        title: "Consultation",
        description: "We discuss your situation, goals, and find the best physician loan program for you."
      },
      {
        number: "02",
        title: "Pre-Approval",
        description: "Get a firm pre-approval letter showing exactly what you can afford."
      },
      {
        number: "03",
        title: "Find Your Home",
        description: "Work with your realtor to find the right property in the Lowcountry."
      },
      {
        number: "04",
        title: "Close on Time",
        description: "Our physician loan expertise means smooth underwriting and on-time closing."
      }
    ],
    cta: "Start Physician Loan Process",
    ctaLink: "/contact"
  },

  faq: {
    headline: "Physician loan questions",
    items: [
      {
        question: "Can I use a physician loan if I'm still in residency?",
        answer: "Yes, many physician loan programs accept residents with a signed attending contract. Some require a minimum time remaining in residency, while others look at your future attending income."
      },
      {
        question: "How is student debt treated differently in physician loans?",
        answer: "Deferred student loans (those not yet in repayment) can often be excluded from debt-to-income calculations, or calculated at a nominal amount. This significantly improves your buying power compared to conventional loans."
      },
      {
        question: "Can I include my spouse's income?",
        answer: "Yes, we can include spouse income for qualification. If your spouse is also a physician or has qualifying income, this can further increase your purchasing power."
      },
      {
        question: "What areas do you serve for physician loans?",
        answer: "We serve the entire South Carolina Lowcountry region including Bluffton, Hilton Head, Beaufort, Okatie, Hardeeville, and surrounding communities."
      }
    ]
  },

  cta: {
    headline: "Ready to buy your dream home?",
    subhead: "Let's discuss your physician loan options and get you pre-approved.",
    ctaPrimary: "Schedule Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Apply Now",
    ctaSecondaryLink: "/apply"
  }
};

export default function PhysicianLoansPage() {
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
        backgroundImage="/IMG_4397.jpg"
      />

      {/* Benefits Section */}
      <Section id="benefits" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.benefits.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.benefits.cards.map((card, index) => (
            <GlassCard key={index} hover delay={index * 0.1}>
              <card.icon className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-white text-sm leading-relaxed">{card.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Requirements Section */}
      <Section id="requirements">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {copy.requirements.headline}
            </h2>
            <ul className="space-y-4">
              {copy.requirements.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <GlassCard hover={false} className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Estimated Buying Power</h3>
              <p className="text-white text-sm mb-6">
                With physician loan programs, many doctors qualify for significantly more home than with conventional financing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                Get Custom Quote
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
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Conventional */}
          <GlassCard hover={false} className="border-red-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                <Banknote className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-white font-semibold text-xl">{copy.comparison.conventional.title}</h3>
            </div>
            <ul className="space-y-3">
              {copy.comparison.conventional.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white text-sm">
                  <span className="text-red-400">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Physician Loan */}
          <GlassCard hover={false} className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-xl">{copy.comparison.physician.title}</h3>
            </div>
            <ul className="space-y-3">
              {copy.comparison.physician.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
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

      {/* Download Guide Section */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Free: Lowcountry Physician Relocation Guide
          </h2>
          <p className="text-white mb-8">
            Everything you need to know about relocating to the Lowcountry as a physician — from housing markets and neighborhoods to schools, financing, and local resources.
          </p>
          <a 
            href="/Lowcountry Physician Relocation Guide.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            <GraduationCap className="w-5 h-5" />
            Download Free Guide
          </a>
        </div>
      </Section>

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
