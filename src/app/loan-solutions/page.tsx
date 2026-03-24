import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Stethoscope, 
  FileCheck, 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Wallet
} from 'lucide-react';

const loanTypes = [
  {
    slug: 'physician-loans',
    icon: Stethoscope,
    title: 'Physician Loans',
    description: 'Specialized financing for doctors, dentists, and high-income medical professionals. 0% down options, deferred student debt handled, contract employment accepted.',
    highlight: '0% Down Available',
    cta: 'Learn More',
    color: 'cyan'
  },
  {
    slug: 'private-wealth',
    icon: Wallet,
    title: 'Private Wealth Mortgages',
    description: 'Sophisticated financing solutions for high-net-worth individuals, executives, and affluent homeowners. Jumbo loans, portfolio lending, and custom structures.',
    highlight: 'Jumbo & Portfolio Loans',
    cta: 'Learn More',
    color: 'pink'
  },
  {
    slug: 'conventional',
    icon: FileCheck,
    title: 'Conventional Loans',
    description: 'Traditional financing for qualified buyers. Competitive rates, flexible terms, and PMI options that can be removed once you reach 20% equity.',
    highlight: 'Competitive Rates',
    cta: 'Learn More',
    color: 'cyan'
  }
];

const copy = {
  hero: {
    headline: "Find Your Perfect Loan",
    subheadline: "Whether you're a physician, high-net-worth professional, or self-employed, we have mortgage solutions tailored to your unique situation. Explore our loan options below.",
    trustBullets: [
      "Competitive Rates",
      "Local Lowcountry Expertise",
      "Personalized Guidance"
    ]
  },

  cta: {
    headline: "Not sure which loan is right for you?",
    subhead: "Let's have a conversation. I'll help you find the best mortgage solution for your goals.",
    ctaPrimary: "Schedule Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Apply Now",
    ctaSecondaryLink: "/apply"
  }
};

export default function LoanSolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={copy.hero.headline}
        subheadline={copy.hero.subheadline}
        trustBullets={copy.hero.trustBullets}
        variant="compact"
        backgroundImage="/IMG_4402.jpg"
      />

      {/* Loan Types Grid */}
      <Section id="loans" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Explore Your Options
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Click on any loan type to learn more about specific programs, requirements, and benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {loanTypes.map((loan, index) => (
            <Link 
              key={loan.slug} 
              href={`/${loan.slug}`}
              className="block group"
            >
              <GlassCard 
                hover={true} 
                delay={index * 0.1}
                className={`
                  h-full border transition-all duration-300 group-hover:scale-[1.02]
                  ${loan.color === 'cyan' ? 'group-hover:border-cyan-500/40' : ''}
                  ${loan.color === 'pink' ? 'group-hover:border-pink-500/40' : ''}
                  ${loan.color === 'purple' ? 'group-hover:border-purple-500/40' : ''}
                `}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0
                    ${loan.color === 'cyan' ? 'bg-cyan-500/20' : ''}
                    ${loan.color === 'pink' ? 'bg-pink-500/20' : ''}
                    ${loan.color === 'purple' ? 'bg-purple-500/20' : ''}
                  `}>
                    <loan.icon className={`
                      w-7 h-7
                      ${loan.color === 'cyan' ? 'text-cyan-400' : ''}
                      ${loan.color === 'pink' ? 'text-pink-400' : ''}
                      ${loan.color === 'purple' ? 'text-purple-400' : ''}
                    `} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors">
                      {loan.title}
                    </h3>
                    <span className={`
                      inline-flex items-center gap-1 text-sm font-medium mt-1
                      ${loan.color === 'cyan' ? 'text-cyan-400' : ''}
                      ${loan.color === 'pink' ? 'text-pink-400' : ''}
                      ${loan.color === 'purple' ? 'text-purple-400' : ''}
                    `}>
                      <Sparkles className="w-3 h-3" />
                      {loan.highlight}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-100 text-sm leading-relaxed mb-4">
                  {loan.description}
                </p>

                <div className={`
                  inline-flex items-center gap-2 text-sm font-medium
                  ${loan.color === 'cyan' ? 'text-cyan-400' : ''}
                  ${loan.color === 'pink' ? 'text-pink-400' : ''}
                  ${loan.color === 'purple' ? 'text-purple-400' : ''}
                  group-hover:gap-3 transition-all
                `}>
                  {loan.cta}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Choose Maggie Section */}
      <Section id="why" background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Work With Maggie Blank
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Experience the difference of working with a local mortgage expert who understands the Lowcountry market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <GlassCard hover={false} className="text-center">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Local Expertise</h3>
            <p className="text-gray-100 text-sm">
              Deep knowledge of the Bluffton, Hilton Head, and Beaufort markets. We understand local neighborhoods and values.
            </p>
          </GlassCard>

          <GlassCard hover={false} className="text-center">
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Personal Service</h3>
            <p className="text-gray-100 text-sm">
              Direct access to Maggie herself. No call centers or automated systems — just honest, responsive communication.
            </p>
          </GlassCard>

          <GlassCard hover={false} className="text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-100 text-sm">
              President's Club award winner. Known for closing on time and making the mortgage process smooth and stress-free.
            </p>
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
    </>
  );
}
