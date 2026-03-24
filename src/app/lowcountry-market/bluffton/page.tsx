'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  Home, 
  Waves, 
  Trees, 
  Building2, 
  MapPin, 
  ChevronLeft,
  ArrowRight,
  School,
  Wifi,
  Dog,
  Palmtree,
  UtensilsCrossed,
  Dumbbell,
  Shield,
  Flag
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Find your Bluffton neighborhood.",
    subheadline: "From marshfront estates to golf communities, Bluffton offers diverse neighborhoods for every lifestyle. Here's what makes each one unique.",
    ctaPrimary: "Talk With Us",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Explore More Markets",
    ctaSecondaryLink: "/lowcountry-market",
    trustBullets: [
      "May River",
      "Palmetto Bluff",
      "Sun City",
      "Berkeley Hall"
    ]
  },

  neighborhoods: {
    headline: "Bluffton's best neighborhoods",
    subheadline: "Each community has its own character, price points, and lifestyle. Here's what you need to know about Bluffton's top neighborhoods.",
    list: [
      {
        name: "May River",
        description: "The crown jewel of Bluffton. This prestigious marshfront community offers luxury homes with stunning views of the May River, a private deep-water marina, and access to world-class amenities. Perfect for those seeking the finest Lowcountry living with a sophisticated, resort-style atmosphere.",
        priceRange: "$800K - $3.5M+",
        type: "Luxury Marshfront",
        highlights: [
          { icon: Waves, label: "Deep Water Marina" },
          { icon: Palmtree, label: "River Views" },
          { icon: Shield, label: "Gated Community" },
          { icon: UtensilsCrossed, label: "Fine Dining" }
        ],
        schools: "Bluffton High, H.E. McCracken Middle, Michael C. Riley Elementary",
        amenities: "Marina, Pool, Fitness Center, Tennis, Dining"
      },
      {
        name: "Palmetto Bluff",
        description: "An iconic 20,000-acre preserve community spanning the May River. Known for its Southern hospitality, championship golf, and conservation-focused living. Features luxury homes, a private club, and some of the Lowcountry's most coveted property with deep-water access.",
        priceRange: "$1M - $5M+",
        type: "Ultra-Luxury Preserve",
        highlights: [
          { icon: Flag, label: "Jack Nicklaus Golf" },
          { icon: Waves, label: "Deep Water Access" },
          { icon: Trees, label: "20,000-Acre Preserve" },
          { icon: Building2, label: "Private Club" }
        ],
        schools: "Bluffton High, H.E. McCracken Middle, Red Cedar Elementary",
        amenities: "Golf, Marina, Spa, Canoe Club, Hunting, Dining"
      },
      {
        name: "Sun City",
        description: "One of the largest and most established active adult communities in the Southeast. This award-winning 55+ community offers incredible value with over 50 amenity centers, golf courses, and a vibrant social scene. Great for those seeking an active lifestyle with excellent affordability.",
        priceRange: "$300K - $700K",
        type: "55+ Active Adult",
        highlights: [
          { icon: Dumbbell, label: "50+ Amenities" },
          { icon: Flag, label: "Multiple Golf Courses" },
          { icon: UtensilsCrossed, label: "Active Social Scene" },
          { icon: Shield, label: "Gated Security" }
        ],
        schools: "Bluffton High (community education)",
        amenities: "Golf, Pools, Fitness, Tennis, Bocce, Clubs, Dining"
      },
      {
        name: "Berkeley Hall",
        description: "A prestigious golf course community known for its beautifulLowcountry architecture and excellent value. Features two Robert Cupit-designed golf courses, a resort-style clubhouse, and a friendly, welcoming atmosphere. Ideal for golf enthusiasts and families alike.",
        priceRange: "$400K - $1.2M",
        type: "Golf Course Community",
        highlights: [
          { icon: Flag, label: "36 Holes Golf" },
          { icon: Building2, label: "Resort Clubhouse" },
          { icon: Shield, label: "Gated Security" },
          { icon: Trees, label: "Nature Trails" }
        ],
        schools: "Bluffton High, H.E. McCracken Middle, Bluffton Elementary",
        amenities: "Golf, Clubhouse, Pool, Tennis, Fitness, Dining"
      },
      {
        name: "Hampton Lake",
        description: "A premier resort-style community offering the best of Lowcountry living. Features a beautiful 90-acre lake, private beach club, golf course, and luxury amenities. Perfect for families and those seeking an active, social lifestyle with exceptional natural beauty.",
        priceRange: "$500K - $1.5M",
        type: "Resort Lifestyle",
        highlights: [
          { icon: Waves, label: "90-Acre Lake" },
          { icon: Palmtree, label: "Private Beach Club" },
          { icon: Flag, label: "Golf Course" },
          { icon: Dumbbell, label: "Resort Amenities" }
        ],
        schools: "Bluffton High, H.E. McCracken Middle, Michael C. Riley Elementary",
        amenities: "Lake, Beach Club, Golf, Pool, Fitness, Tennis, Trails"
      },
      {
        name: "Old Town Bluffton",
        description: "The historic heart of Bluffton. This charming district features live oak-lined streets, boutique shops, award-winning restaurants, and a vibrant arts scene. Offers a unique blend of Southern charm and modern conveniences, perfect for those who love walkable, character-filled neighborhoods.",
        priceRange: "$350K - $1.2M",
        type: "Historic District",
        highlights: [
          { icon: Building2, label: "Historic Charm" },
          { icon: UtensilsCrossed, label: "Top Restaurants" },
          { icon: MapPin, label: "Walkable Downtown" },
          { icon: Trees, label: "Oak Canopy Streets" }
        ],
        schools: "Bluffton High, H.E. McCracken Middle, Bluffton Elementary",
        amenities: "Dining, Shopping, Art Galleries, River Views, Parks"
      },
    ]
  },

  buyingConsiderations: {
    headline: "What Bluffton buyers need to know",
    subheadline: "Each community has unique characteristics that affect your buying decision. Here's what to consider.",
    items: [
      {
        title: "HOA Fees Vary Significantly",
        description: "Community HOA fees in Bluffton range from $500 to over $5,000 annually. Golf communities typically include club memberships in their fees. Factor these into your total cost of ownership."
      },
      {
        title: "Flood Zones Matter",
        description: "Some marshfront communities have properties in flood zones requiring flood insurance. We can help you understand specific flood risks for any property you're considering."
      },
      {
        title: "New Construction Opportunities",
        description: "Bluffton is one of the fastest-growing areas in the region. Many communities have new construction options withBuilder incentives and shorter wait times for move-in."
      },
      {
        title: "55+ Communities Offer Value",
        description: "Sun City and similar communities provide exceptional amenities at lower price points. If you're 55+, these communities offer the best bang for your buck in the Lowcountry."
      }
    ]
  },

  cta: {
    headline: "Ready to explore Bluffton neighborhoods?",
    subhead: "Let's find the right community for your lifestyle and budget. We'll help you understand the nuances of each area.",
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

export default function BlufftonNeighborhoodsPage() {
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

      {/* Back Link */}
      <Section background="dark" className="py-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/lowcountry-market"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Lowcountry Market
          </Link>
        </motion.div>
      </Section>

      {/* Neighborhoods Grid */}
      <Section id="neighborhoods" background="gradient">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {copy.neighborhoods.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {copy.neighborhoods.subheadline}
          </motion.p>
        </div>

        <div className="space-y-8">
          {copy.neighborhoods.list.map((neighborhood, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <GlassCard 
                hover={false} 
                className={`
                  ${index % 2 === 0 
                    ? 'bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-pink-500/10 border-cyan-500/20' 
                    : 'bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-cyan-500/10 border-pink-500/20'
                  }
                `}
              >
                {/* Header with gradient accent */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{neighborhood.name}</h3>
                      <span className={`
                        px-3 py-1 rounded-full text-xs font-medium
                        ${neighborhood.type.includes('Luxury') || neighborhood.type.includes('Ultra') 
                          ? 'bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border border-amber-500/30'
                          : neighborhood.type.includes('55+')
                            ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/30'
                            : neighborhood.type.includes('Golf') || neighborhood.type.includes('Resort')
                              ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30'
                              : neighborhood.type.includes('Historic')
                                ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30'
                                : 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/30'
                        }
                      `}>
                        {neighborhood.type}
                      </span>
                    </div>
                    <p className="text-cyan-400 font-semibold text-lg mb-3">{neighborhood.priceRange}</p>
                    <p className="text-gray-400 leading-relaxed">{neighborhood.description}</p>
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {neighborhood.highlights.map((highlight, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 p-3 rounded-lg bg-white/5"
                    >
                      <highlight.icon className="w-5 h-5 text-pink-400" />
                      <span className="text-gray-300 text-sm">{highlight.label}</span>
                    </div>
                  ))}
                </div>

                {/* Details Row */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2">
                    <School className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Schools</p>
                      <p className="text-gray-300 text-sm">{neighborhood.schools}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Building2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Amenities</p>
                      <p className="text-gray-300 text-sm">{neighborhood.amenities}</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Buying Considerations */}
      <Section id="considerations" background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {copy.buyingConsiderations.headline}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              {copy.buyingConsiderations.subheadline}
            </motion.p>

            <div className="space-y-6">
              {copy.buyingConsiderations.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
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
            <GlassCard hover={false} className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 border-purple-500/20 sticky top-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold text-xl mb-2">Not Sure Which Community Is Right for You?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Let's talk about your priorities — budget, lifestyle, amenities — and find the perfect Bluffton neighborhood for your goals.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  Schedule a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* Explore Other Markets */}
      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Explore Other Lowcountry Markets</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/lowcountry-market/hilton-head"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Hilton Head
            </Link>
            <Link 
              href="/lowcountry-market/beaufort"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Beaufort
            </Link>
            <Link 
              href="/lowcountry-market/okatie"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
            >
              Okatie / Hardeeville
            </Link>
          </div>
        </motion.div>
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