'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { 
  Waves, 
  Trees, 
  Anchor, 
  Flag, 
  Home, 
  Building2,
  MapPin,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Hilton Head Island Living",
    subheadline: "World-class golf, pristine beaches, and exclusive island communities. Discover the neighborhoods that make Hilton Head one of America's most desirable coastal destinations.",
    ctaPrimary: "Talk Local",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Back to Lowcountry",
    ctaSecondaryLink: "/lowcountry-market"
  },

  neighborhoods: [
    {
      name: "Sea Pines",
      description: "The iconic island destination featuring the historic Harbour Town Lighthouse, world-renowned golf at Harbour Town Golf Links, and exclusive beach club access. Sea Pines offers a perfect blend of natural beauty and refined resort living.",
      priceRange: "$800K - $5M+",
      highlights: ["Harbour Town Golf", "Beach Club", "Marina", "Historic Lighthouse", "Bike Trails"],
      icon: Flag,
      accent: "from-pink-500 to-purple-500"
    },
    {
      name: "Port Royal",
      description: "One of Hilton Head's most prestigious gated communities, featuring three championship golf courses, a world-class tennis center, and miles of pristine marsh frontage. Known for its grand antebellum-style clubhouse and timeless Southern charm.",
      priceRange: "$600K - $3.5M",
      highlights: ["3 Golf Courses", "Tennis Center", "Marsh Views", "Gated Entry", "Clubhouse"],
      icon: Building2,
      accent: "from-purple-500 to-cyan-500"
    },
    {
      name: "Wexford",
      description: "An exclusive equestrian and golf community offering luxury homes with marsh and golf views. Wexford features a stunning harbor with yacht slips, championship golf, and some of the island's most architecturally distinctive properties.",
      priceRange: "$900K - $4M+",
      highlights: ["Equestrian Center", "Harbor & Yacht Slips", "Golf Course", "Marsh Front", "Luxury Homes"],
      icon: Anchor,
      accent: "from-cyan-500 to-teal-500"
    },
    {
      name: "Long Cove",
      description: "A coveted golf community nestled among ancient oaks and tidal marshes. Long Cove offers privacy and sophistication with its Pete Dye-designed course, clubhouse amenities, and marsh-front estates.",
      priceRange: "$700K - $3M",
      highlights: ["Pete Dye Golf", "Marsh Front", "Private", "Clubhouse", "Tennis"],
      icon: Trees,
      accent: "from-teal-500 to-cyan-500"
    },
    {
      name: "Palmetto Dunes",
      description: "A legendary oceanfront resort community spanning 2,000 acres with three championship golf courses, a world-renowned tennis center, and direct beach access. Perfect for those seeking full resort amenities in a stunning coastal setting.",
      priceRange: "$500K - $4M+",
      highlights: ["Oceanfront", "3 Golf Courses", "Tennis Center", "Beach Access", "Resort Living"],
      icon: Waves,
      accent: "from-pink-500 to-cyan-500"
    },
    {
      name: "Shipyard",
      description: "A private, gated plantation offering a blend of golf, tennis, and beach club amenities amid natural maritime forests. Shipyard provides a more intimate, established feel with its tree-lined streets and charming Southern architecture.",
      priceRange: "$450K - $2.5M",
      highlights: ["Gated Community", "Beach Club", "Golf", "Tennis", "Maritime Forest"],
      icon: Home,
      accent: "from-purple-500 to-pink-500"
    },
    {
      name: "Indigo Run",
      description: "A sophisticated, gated golf community featuring a Jack Nicklaus-designed course and elegant marsh-front living. Indigo Run offers some of the island's finest custom homes with breathtaking water and golf views.",
      priceRange: "$650K - $3M",
      highlights: ["Jack Nicklaus Golf", "Gated", "Marsh Front", "Custom Homes", "Clubhouse"],
      icon: MapPin,
      accent: "from-cyan-500 to-pink-500"
    }
  ],

  tips: {
    headline: "Buying in Hilton Head",
    subheadline: "Island living comes with unique considerations. Here's what every buyer should know.",
    list: [
      {
        title: "Flood Zones Matter",
        description: "Many waterfront and marsh-front properties require flood insurance. Rates vary significantly by location and elevation."
      },
      {
        title: "HOA Fees Vary Widely",
        description: "Community fees range from $200 to $1,500+ monthly depending on amenities, beach club access, and golf entitlements."
      },
      {
        title: "Resort vs. Residential",
        description: "Some communities allow short-term rentals while others are strictly residential. Know the rules before you buy."
      },
      {
        title: "Island Access",
        description: "Hilton Head is accessible via US-278 or the intra-island ferry. Consider traffic patterns if commuting to work."
      }
    ]
  },

  cta: {
    headline: "Find Your Hilton Head Home",
    subhead: "Whether you're looking for a golf course home or oceanfront estate, let's find the right mortgage for your island lifestyle.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "/apply"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function HiltonHeadPage() {
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
        variant="compact"
      />

      {/* Back Link */}
      <Section background="dark" className="pb-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/lowcountry-market"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Lowcountry Market
          </Link>
        </motion.div>
      </Section>

      {/* Neighborhoods Section */}
      <Section id="neighborhoods" background="gradient">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Premier Island Neighborhoods
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-900 text-lg max-w-2xl mx-auto"
          >
            From oceanfront resorts to exclusive gated golf communities, discover the neighborhood that fits your lifestyle.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {copy.neighborhoods.map((hood, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard hover className="h-full group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${hood.accent} flex items-center justify-center mb-4`}>
                  <hood.icon className="w-7 h-7 text-gray-900" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{hood.name}</h3>
                <p className={`text-sm font-medium bg-gradient-to-r ${hood.accent} bg-clip-text text-transparent mb-4`}>
                  {hood.priceRange}
                </p>
                
                <p className="text-gray-900 text-sm mb-4 leading-relaxed">
                  {hood.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {hood.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-900 text-xs border border-white/10"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Buying Tips Section */}
      <Section id="tips" background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            >
              {copy.tips.headline}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-900 text-lg mb-8"
            >
              {copy.tips.subheadline}
            </motion.p>

            <div className="space-y-5">
              {copy.tips.list.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <GlassCard hover={false} className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-pink-400 text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-1">{tip.title}</h4>
                        <p className="text-gray-900 text-sm">{tip.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard hover={false} className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 border-pink-500/20 sticky top-24">
              <div className="text-center">
                <Waves className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-gray-900 font-semibold text-xl mb-2">Ready to Buy in Hilton Head?</h3>
                <p className="text-gray-900 text-sm mb-6">
                  From flood insurance to HOA financing, we understand the nuances of island mortgages. Let's talk strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-gray-900 font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-gray-900 font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Get Pre-Approved
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            {copy.cta.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-900 text-lg max-w-xl mx-auto mb-8"
          >
            {copy.cta.subhead}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={copy.cta.ctaPrimaryLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              {copy.cta.ctaPrimary}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={copy.cta.ctaSecondaryLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-gray-900 font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              {copy.cta.ctaSecondary}
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
