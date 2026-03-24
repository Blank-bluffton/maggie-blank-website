import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Sparkles, 
  UserCheck, 
  Clock, 
  Shield, 
  Heart,
  ArrowRight,
  Download,
  CheckCircle2
} from 'lucide-react';

const copy = {
  hero: {
    headline: "A Smarter, Simpler Mortgage Experience",
    subheadline: "Experience a concierge approach to home financing — where you're not just a file, you're a partner. I offer a personalized, high-touch mortgage experience designed for busy professionals, physicians, and families relocating to the Lowcountry.",
    trustBullets: [
      "Financial Partner, Not Just a Lender",
      "High-Touch Guidance From Start to Close",
      "Trusted Advisor for Life"
    ]
  },

  whatIsConcierge: {
    headline: "What 'Concierge' Actually Means",
    subhead: "Most lenders talk about service. We deliver it. Here's what working with me actually looks like:",
    items: [
      {
        icon: UserCheck,
        title: "You Get Me, Not a Call Center",
        description: "Direct access to Maggie Blank herself. No rotating loan officers. No automated systems. Just responsive, informed guidance from someone who knows your file."
      },
      {
        icon: Clock,
        title: "Your Time Is Respected",
        description: "Busy professionals don't have time for back-and-forth paperwork runs. I streamline the process, anticipate hurdles, and keep things moving efficiently."
      },
      {
        icon: Shield,
        title: "Strategy Before Paperwork",
        description: "Before you sign anything, we map out the best financial path. Rates are one piece — your long-term wealth building strategy matters more."
      },
      {
        icon: Heart,
        title: "Relationship, Not Transaction",
        description: "This isn't a one-time deal. I'm here for you now, and I'm here for your next refinance, investment property, or when your kids are ready to buy."
      }
    ]
  },

  whoItFor: {
    headline: "Who Benefits Most From This Approach",
    subhead: "The concierge model works best for clients who value expertise, clarity, and a true partner in their corner:",
    profiles: [
      "Physicians and medical professionals with complex income situations",
      "Executives relocating to the Lowcountry",
      "Self-employed business owners with non-traditional income",
      "First-time buyers who want guidance, not just approval",
      "Buyers who've been frustrated by impersonal lender experiences"
    ]
  },

  compared: {
    headline: "Traditional Lending vs. The Concierge Approach",
    comparison: [
      {
        traditional: "You're assigned a loan officer who may change mid-process",
        concierge: "You work with Maggie Blank from inquiry to closing — every step"
      },
      {
        traditional: "Paperwork is pushed; questions wait for answers",
        concierge: "Proactive communication; I'm always a call or text away"
      },
      {
        traditional: "Rate is the main focus — if it changes, you're left guessing",
        concierge: "Full financial strategy: rates, terms, and long-term impact explained"
      },
      {
        traditional: "Closing day is the end of the relationship",
        concierge: "The beginning. I'm your mortgage partner for life"
      }
    ]
  },

  leadMagnet: {
    headline: "Start With the Lowcountry Relocation Guide",
    subhead: "Whether you're new to the area or just starting your home search, my free Lowcountry Relocation Guide covers everything you need to know about financing your Lowcountry home.",
    benefits: [
      "Understanding Bluffton, Hilton Head, and surrounding communities",
      "Loan options tailored to your profession and income type",
      "Timeline guidance — when to get pre-approved, when to close",
      "Local insights they won't tell you on Zillow"
    ],
    cta: "Download Free Guide"
  },

  cta: {
    headline: "Ready for a Different Mortgage Experience?",
    subhead: "Let's talk strategy. I'll help you understand your options, find the best path forward, and close with confidence.",
    ctaPrimary: "Schedule a Conversation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Explore Loan Options",
    ctaSecondaryLink: "/loan-solutions"
  }
};

export default function ConciergePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={copy.hero.headline}
        subheadline={copy.hero.subheadline}
        trustBullets={copy.hero.trustBullets}
        variant="compact"
        backgroundImage="/IMG_4406.JPG"
      />

      {/* What Is Concierge Section */}
      <Section id="what-is-concierge" background="warm">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">The Concierge Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.whatIsConcierge.headline}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {copy.whatIsConcierge.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {copy.whatIsConcierge.items.map((item, index) => (
            <GlassCard 
              key={item.title} 
              hover={true} 
              delay={index * 0.1}
              className="border-cyan-500/20 hover:border-cyan-500/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-white text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Who It's For Section */}
      <Section id="who-it-is-for" background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.whoItFor.headline}
          </h2>
          <p className="text-white mb-10">
            {copy.whoItFor.subhead}
          </p>

          <div className="grid grid-cols-1 gap-4">
            {copy.whoItFor.profiles.map((profile, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl text-left"
              >
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-white">{profile}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Comparison Section */}
      <Section id="comparison" background="warm">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.compared.headline}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {copy.compared.comparison.map((item, index) => (
            <div 
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white/5 border border-white/10 rounded-xl"
            >
              <div className="md:border-r md:border-white/10 md:pr-6">
                <span className="text-xs font-medium text-white uppercase tracking-wider">Traditional Lending</span>
                <p className="text-white mt-2">{item.traditional}</p>
              </div>
              <div>
                <span className="text-xs font-medium text-cyan-400 uppercase tracking-wider">Concierge Approach</span>
                <p className="text-white mt-2">{item.concierge}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lead Magnet Section */}
      <Section id="download" background="dark">
        <div className="max-w-4xl mx-auto">
          <GlassCard hover={false} className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-transparent">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {copy.leadMagnet.headline}
              </h2>
              <p className="text-white max-w-xl mx-auto">
                {copy.leadMagnet.subhead}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-white font-semibold mb-4">What's Inside:</h3>
                <ul className="space-y-3">
                  {copy.leadMagnet.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/20 rounded-full mb-4">
                  <Download className="w-10 h-10 text-cyan-400" />
                </div>
                <p className="text-white text-sm mb-4">
                  Free PDF Download
                </p>
                <Link
                  href="/contact?interest=relocation-guide"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-all"
                >
                  {copy.leadMagnet.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
