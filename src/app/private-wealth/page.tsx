import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Wallet, 
  Building2, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Gem,
  Briefcase
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Financing for the exceptional.",
    subheadline: "Sophisticated mortgage solutions for high-net-worth individuals, executives, and affluent homeowners in the Lowcountry. When standard loans aren't enough, we deliver custom financing.",
    ctaPrimary: "Discuss Your Needs",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Explore Options",
    ctaSecondaryLink: "#options",
    trustBullets: [],
  },

  options: {
    headline: "Private wealth mortgage solutions",
    subhead: "When your financial situation exceeds conventional loan limits, you need a lender who understands high-complexity financing.",
    cards: [
      {
        icon: Building2,
        title: "Jumbo Loans",
        description: "Financing beyond conforming limits for luxury properties. Loans from $1M to $5M+ with competitive rates and flexible terms.",
        highlight: "Up to $5M+",
        href: "/loan-solutions"
      },
      {
        icon: Gem,
        title: "Portfolio Lending",
        description: "Non-agency loans tailored to your specific situation. Asset-based underwriting, foreign national financing, and complex income structures.",
        highlight: "Flexible Underwriting",
        href: "/loan-solutions"
      },
      {
        icon: TrendingUp,
        title: "Investment Property Loans",
        description: "Financing for rental properties, vacation homes, and multi-family investments in the Lowcountry market.",
        highlight: "DSCR Available",
        href: "/loan-solutions"
      },
      {
        icon: Briefcase,
        title: "Executive & Physician Packages",
        description: "Specialized programs for high-income professionals. Stock options, bonus income, and complex compensation structures welcomed.",
        highlight: "Income Diversity",
        href: "/loan-solutions"
      }
    ]
  },

  benefits: {
    headline: "Why high-net-worth clients choose Maggie",
    items: [
      {
        title: "Portfolio Lending Expertise",
        description: "We work with investors and business owners who need flexibility beyond traditional underwriting."
      },
      {
        title: "Speed & Discretion",
        description: "Private wealth transactions move fast. We deliver pre-approvals in 24-48 hours with confidential service."
      },
      {
        title: "Custom Structures",
        description: "Interest-only, balloon payments, ARM options, and cross-collateralization. We build what fits your strategy."
      },
      {
        title: "Local Lowcountry Knowledge",
        description: "We understand the nuances of high-value properties in Bluffton, Hilton Head, and surrounding areas."
      }
    ]
  },

  requirements: {
    headline: "Qualifying for private wealth mortgages",
    items: [
      "Credit score typically 720+ (we'll review exceptions)",
      "Significant assets or income documentation",
      "Low debt-to-income ratio preferred",
      "Investment properties may qualify via DSCR",
      "Foreign national and entity structures welcome"
    ]
  },

  cta: {
    headline: "Ready to discuss your financing needs?",
    subhead: "Let's talk about your specific situation. I'll help you find the right structure for your goals.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Explore Loan Solutions",
    ctaSecondaryLink: "/loan-solutions"
  }
};

export default function PrivateWealthPage() {
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
        backgroundImage="/IMG_4395.jpg"
      />

      {/* Options Section */}
      <Section id="options" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.options.headline}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {copy.options.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {copy.options.cards.map((option, index) => (
            <Link 
              key={option.title} 
              href={option.href || '/contact'}
              className="block group"
            >
              <GlassCard solidWhite darkText hover delay={index * 0.1}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                    ${option.title === 'Jumbo Loans' ? 'bg-pink-100' : ''}
                    ${option.title === 'Portfolio Lending' ? 'bg-purple-100' : ''}
                    ${option.title === 'Investment Property Loans' ? 'bg-cyan-100' : ''}
                    ${option.title === 'Executive & Physician Packages' ? 'bg-pink-100' : ''}
                  `}>
                    <option.icon className={`
                      w-7 h-7
                      ${option.title === 'Jumbo Loans' ? 'text-pink-600' : ''}
                      ${option.title === 'Portfolio Lending' ? 'text-purple-600' : ''}
                      ${option.title === 'Investment Property Loans' ? 'text-cyan-600' : ''}
                      ${option.title === 'Executive & Physician Packages' ? 'text-pink-600' : ''}
                    `} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-800 transition-colors">
                      {option.title}
                    </h3>
                    <span className={`
                      inline-flex items-center gap-1 text-sm font-medium mt-1
                      ${option.title === 'Jumbo Loans' ? 'text-pink-600' : ''}
                      ${option.title === 'Portfolio Lending' ? 'text-purple-600' : ''}
                      ${option.title === 'Investment Property Loans' ? 'text-cyan-600' : ''}
                      ${option.title === 'Executive & Physician Packages' ? 'text-pink-600' : ''}
                    `}>
                      <DollarSign className="w-3 h-3" />
                      {option.highlight}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {option.description}
                </p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section id="benefits" background="dark" backgroundImage="/IMG_4405.jpg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {copy.benefits.headline}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {copy.benefits.items.map((item, index) => (
              <GlassCard key={item.title} solidWhite darkText hover className="border-pink-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-white text-sm">{item.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Requirements Section */}
      <Section id="requirements" background="gradient">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            {copy.requirements.headline}
          </h2>
          
          <GlassCard solidWhite darkText hover className="text-left">
            <ul className="space-y-4">
              {copy.requirements.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
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
