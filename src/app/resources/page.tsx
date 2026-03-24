import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Home, 
  Stethoscope, 
  FileText, 
  TrendingUp, 
  ArrowRight, 
  BookOpen,
  Calculator,
  Shield,
  Users,
  MapPin,
  ChevronRight
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Mortgage Resources & Insights",
    subheadline: "Everything you need to make confident financing decisions. Expert guidance, practical tools, and local market intelligence — all in one place.",
    ctaPrimary: "Get in Touch",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "/apply",
    trustBullets: [
      "Free Consultations",
      "Local Lowcountry Expertise",
      "15+ Years Experience"
    ]
  },

  categories: {
    headline: "Explore by Topic",
    subhead: "Find the information that matters to your situation",
    cards: [
      {
        title: "First-Time Buyer Guides",
        description: "Everything you need to know about buying your first home — from understanding loan programs to closing day.",
        icon: Home,
        link: "/first-time-buyers",
        color: "cyan",
        stats: "3% minimum down"
      },
      {
        title: "Physician Loans",
        description: "Specialized financing for doctors — deferred debt handling, contract employment, and 0% down options.",
        icon: Stethoscope,
        link: "/physician-loans",
        color: "pink",
        stats: "0% down available"
      },
      {
        title: "Self-Employed Guides",
        description: "Navigate mortgage approval with non-W2 income — bank statements, K-1s, and alternative documentation.",
        icon: FileText,
        link: "/self-employed",
        color: "purple",
        stats: "Multiple pathways"
      },
      {
        title: "Market Updates",
        description: "Local Lowcountry market insights, rate trends, and neighborhood analysis for smart buying decisions.",
        icon: TrendingUp,
        link: "/lowcountry-market",
        color: "teal",
        stats: "Local expertise"
      }
    ]
  },

  resources: {
    headline: "Helpful Resources",
    subhead: "Tools and information to support your home buying journey",
    items: [
      {
        title: "Mortgage Calculator",
        description: "Estimate your monthly payments and see how different down payments affect your costs.",
        icon: Calculator,
        link: "/contact",
        tag: "Tool"
      },
      {
        title: "Understanding Loan Types",
        description: "FHA, conventional, USDA, VA — learn the differences and find what fits your situation.",
        icon: BookOpen,
        link: "/loan-solutions",
        tag: "Guide"
      },
      {
        title: "Down Payment Assistance",
        description: "South Carolina programs that can help you buy with less money down.",
        icon: Shield,
        link: "/first-time-buyers",
        tag: "Program"
      },
      {
        title: "Working with a Realtor",
        description: "Why you need a realtor and how to find the right one for your Lowcountry purchase.",
        icon: Users,
        link: "/contact",
        tag: "Advice"
      },
      {
        title: "Lowcountry Neighborhoods",
        description: "Explore communities in Bluffton, Hilton Head, Beaufort, and surrounding areas.",
        icon: MapPin,
        link: "/lowcountry-market",
        tag: "Local"
      },
      {
        title: "The Mortgage Process",
        description: "Step-by-step overview of what to expect from application to closing.",
        icon: BookOpen,
        link: "/contact",
        tag: "Overview"
      }
    ]
  },

  cta: {
    headline: "Can't find what you're looking for?",
    subhead: "Every borrower's situation is unique. Let's talk about yours.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "/apply"
  }
};

export default function ResourcesPage() {
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
      />

      {/* Categories Section */}
      <Section id="categories" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.categories.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {copy.categories.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {copy.categories.cards.map((card, index) => (
            <Link key={index} href={card.link}>
              <GlassCard solidWhite darkText hover delay={index * 0.1}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                    card.color === 'cyan' ? 'bg-cyan-100' :
                    card.color === 'pink' ? 'bg-pink-100' :
                    card.color === 'purple' ? 'bg-purple-100' :
                    'bg-teal-100'
                  }`}>
                    <card.icon className={`w-7 h-7 ${
                      card.color === 'cyan' ? 'text-cyan-600' :
                      card.color === 'pink' ? 'text-pink-600' :
                      card.color === 'purple' ? 'text-purple-600' :
                      'text-teal-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition-colors">
                        {card.title}
                      </h3>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {card.description}
                    </p>
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                      card.color === 'cyan' ? 'bg-cyan-100 text-cyan-700' :
                      card.color === 'pink' ? 'bg-pink-100 text-pink-700' :
                      card.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                      'bg-teal-100 text-teal-700'
                    }`}>
                      {card.stats}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      {/* Resources Grid Section */}
      <Section id="resources">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.resources.headline}
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            {copy.resources.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.resources.items.map((item, index) => (
            <Link key={index} href={item.link}>
              <GlassCard solidWhite hover delay={index * 0.05} className="h-full group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-2 py-0.5 bg-gray-800 text-white text-xs rounded-full">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-white text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
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
