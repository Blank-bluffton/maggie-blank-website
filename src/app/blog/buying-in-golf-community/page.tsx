import type { Metadata } from "next";
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Flag, 
  Home, 
  DollarSign, 
  Shield, 
  TreePine, 
  Users, 
  CheckCircle2,
  ArrowRight,
  Building2,
  Calculator,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Buying in a Golf Community: What Lowcountry Buyers Need to Know | Maggie Blank",
  description: "Everything Bluffton, Hilton Head, and Beaufort buyers need to know about purchasing a home in a golf community — from HOA fees to financing options.",
  keywords: ["golf community real estate", "Lowcountry golf course homes", "Bluffton golf community buyer guide", "Hilton Head golf community mortgage", "golf community HOA fees", "golf community financing", "Beaufort golf community buying", "South Carolina golf community real estate"],
  authors: [{ name: "Maggie Blank" }],
  creator: "Maggie Blank",
  publisher: "Synovus Bank",
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://maggie-website-pi.vercel.app/blog/buying-in-golf-community",
    siteName: "Maggie Blank - Lowcountry Mortgage Advisor",
    title: "Buying in a Golf Community: What Lowcountry Buyers Need to Know",
    description: "Everything Bluffton, Hilton Head, and Beaufort buyers need to know about purchasing a home in a golf community — from HOA fees to financing options.",
    images: [
      {
        url: "/IMG_4405.jpg",
        width: 1200,
        height: 630,
        alt: "Golf community home in the Lowcountry"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Buying in a Golf Community: What Lowcountry Buyers Need to Know",
    description: "Everything Bluffton, Hilton Head, and Beaufort buyers need to know about purchasing a home in a golf community.",
  },
};

const copy = {
  hero: {
    headline: "Buying in a Golf Community: What Lowcountry Buyers Need to Know",
    subheadline: "From membership requirements to financing strategies — everything you need to consider before purchasing in one of the Lowcountry's renowned golf communities.",
    ctaPrimary: "Get Pre-Approved",
    ctaPrimaryLink: "/apply",
    ctaSecondary: "Explore Mortgage Options",
    ctaSecondaryLink: "/loan-solutions"
  },

  intro: {
    headline: "The Lowcountry Golf Community Advantage",
    paragraphs: [
      "The Bluffton, Hilton Head, and Beaufort areas offer some of the most desirable golf course communities in the Southeast. From the prestigious golf communities of Belfair and Berkeley Hall to the welcoming neighborhoods of Sun City and Okatie, these communities offer more than just a home — they offer a lifestyle.",
      "But buying in a golf community comes with unique considerations that traditional real estate transactions don't involve. Understanding these nuances before you start shopping can save you time, money, and unexpected headaches.",
      "As a mortgage lender who works with buyers throughout the Lowcountry, I've helped countless families navigate the specific challenges and opportunities that come with golf community purchases. Let me share what you need to know."
    ]
  },

  considerations: {
    headline: "Key Considerations When Buying in a Golf Community",
    cards: [
      {
        icon: DollarSign,
        title: "HOA and Club Dues",
        description: "Golf communities typically charge monthly or annual HOA fees plus club membership dues. These can range from a few hundred to several thousand dollars monthly. Factor these into your overall housing budget and debt-to-income calculations."
      },
      {
        icon: Home,
        title: "Membership Requirements",
        description: "Some communities require golf membership as a condition of ownership, while others offer it as an option. Understand what's mandatory and what's optional before you buy."
      },
      {
        icon: Shield,
        title: "Special Assessments",
        description: "Golf courses are expensive to maintain. Communities may levy special assessments for course upgrades, clubhouse renovations, or infrastructure improvements. Ask about recent and potential future assessments."
      },
      {
        icon: TreePine,
        title: "Lot Restrictions",
        description: "Many golf community subdivisions have strict architectural guidelines — from building materials to color schemes to landscaping requirements. Review CC&Rs carefully before making an offer."
      }
    ]
  },

  financing: {
    headline: "Financing Your Golf Community Home",
    paragraphs: [
      "The good news: financing a golf community home is similar to financing any other residential property. Conventional loans, FHA loans, and physician loan programs all work for golf community purchases.",
      "However, there are some specific considerations to keep in mind:"
    ],
    items: [
      "HOA and club dues are included in your debt-to-income ratio — lenders will factor these monthly costs when determining your purchasing power",
      "If mandatory golf membership is required, the membership fee may be considered part of your housing costs",
      "Jumbo loans may be needed for higher-priced golf community homes — we can help you understand your options",
      "New construction in golf communities may qualify for construction-to-permanent financing with favorable rates"
    ]
  },

  lowcountry: {
    headline: "Popular Golf Communities in the Lowcountry",
    regions: [
      {
        area: "Bluffton",
        communities: "Belfair, Berkeley Hall, Hampton Hall, Palmetto Bluff, Old Carolina"
      },
      {
        area: "Hilton Head",
        communities: "The Golf Club at Indigo Run, Sea Pines, Port Royal, Wexford, Long Cove"
      },
      {
        area: "Beaufort",
        communities: "Dataw Island, Cherry Point, Cat Island, Pleasant Point"
      }
    ]
  },

  tips: {
    headline: "Questions to Ask Before You Buy",
    items: [
      "What are the current monthly HOA and club fees?",
      "Are there any special assessments planned or recent?",
      "Is golf membership mandatory or optional?",
      "What are the rental restrictions if I want to rent seasonally?",
      "What amenities are included in the club dues?",
      "How old are the community's reserves?",
      "What's the average annual turnover in the community?"
    ]
  },

  physician: {
    headline: "Physician Buyers: Special Considerations",
    paragraphs: [
      "If you're a physician relocating to the Lowcountry, golf community living offers an excellent quality of life. Many physician loan programs work seamlessly with golf community purchases.",
      "Key advantages for physicians:",
      "Physician loan programs often allow higher debt-to-income ratios with student debt handled appropriately",
      "Relocation packages from hospital systems can be used toward down payment and closing costs",
      "Flexible employment contracts are accepted — including starting physicians who may not yet have a golf membership"
    ]
  },

  firstTime: {
    headline: "First-Time Buyers in Golf Communities",
    paragraphs: [
      "While golf communities might seem like a stretch for first-time buyers, some communities offer more affordable entry points. Sun City in Bluffton, for example, offers golf community living at various price points with no membership fees.",
      "First-time buyer programs including FHA loans with 3.5% down and Conventional 97 programs with 3% down can be used in many golf communities. The key is understanding the total cost of ownership — including those monthly club dues."
    ]
  },

  cta: {
    headline: "Ready to Explore Golf Community Living?",
    subheadline: "Let's discuss your financing options and find the right golf community for your lifestyle and budget.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "/apply"
  }
};

export default function GolfCommunityBlog() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Buying in a Golf Community: What Lowcountry Buyers Need to Know",
          "description": "Everything Bluffton, Hilton Head, and Beaufort buyers need to know about purchasing a home in a golf community.",
          "image": "/IMG_4405.jpg",
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
          "datePublished": "2025-12-15",
          "dateModified": "2025-12-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://maggie-website-pi.vercel.app/blog/buying-in-golf-community"
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
        backgroundImage="/IMG_4405.jpg"
      />

      {/* Introduction Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {copy.intro.headline}
          </h2>
          {copy.intro.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-200 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* Key Considerations Section */}
      <Section id="considerations" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.considerations.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {copy.considerations.cards.map((card, index) => (
            <GlassCard key={index} hover delay={index * 0.1}>
              <card.icon className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">{card.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Financing Section */}
      <Section id="financing">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {copy.financing.headline}
          </h2>
          {copy.financing.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-200 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          
          <ul className="space-y-4 mt-8">
            {copy.financing.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20">
            <div className="flex items-center gap-4">
              <Calculator className="w-10 h-10 text-cyan-400" />
              <div>
                <h3 className="text-white font-semibold">Financing Consultation</h3>
                <p className="text-gray-200 text-sm">Get a personalized analysis of how HOA and club dues will affect your buying power.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Lowcountry Golf Communities */}
      <Section id="communities" background="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            {copy.lowcountry.headline}
          </h2>
          <div className="space-y-6">
            {copy.lowcountry.regions.map((region, index) => (
              <GlassCard key={index} hover={false}>
                <h3 className="text-xl font-semibold text-white mb-2">{region.area}</h3>
                <p className="text-gray-200">{region.communities}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* Questions to Ask */}
      <Section id="questions">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            {copy.tips.headline}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {copy.tips.items.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-800/50 rounded-lg">
                <span className="flex-shrink-0 w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center text-cyan-400 text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Physician Buyers */}
      <Section background="gradient">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {copy.physician.headline}
            </h2>
          </div>
          {copy.physician.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-200 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <Link
            href="/physician-loans"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Learn About Physician Loan Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* First-Time Buyers */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Home className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {copy.firstTime.headline}
            </h2>
          </div>
          {copy.firstTime.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-200 text-lg leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
          <Link
            href="/first-time-buyers"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            Explore First-Time Buyer Programs <ArrowRight className="w-4 h-4" />
          </Link>
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