'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  MapPin, 
  Home, 
  Trees, 
  Waves, 
  Building2, 
  ArrowLeft,
  Target,
  Hammer,
  DollarSign,
  Car,
  CheckCircle2
} from 'lucide-react';

const neighborhoods = [
  {
    name: "Heritage Oaks",
    description: "AEstablished community with mature oak trees and a welcoming atmosphere. Heritage Oaks features winding streets lined with centuries-old live oaks, creating a serene setting for families and retirees alike. The community offers a blend of traditional and contemporary homes with generous lot sizes.",
    priceRange: "$350K - $550K",
    highlights: ["Mature Landscaping", "Family-Friendly", "Quiet Streets", "Community Pool"],
    icon: Trees
  },
  {
    name: "Indigo Lakes",
    description: "Master-planned community centered around scenic lakes and wetlands. Indigo Lakes offers residents tranquil water views and abundant wildlife. The community features walking trails, community dock, and outdoor recreation areas perfect for nature lovers.",
    priceRange: "$380K - $600K",
    highlights: ["Lake Frontage", "Walking Trails", "Wildlife Views", "New Construction"],
    icon: Waves
  },
  {
    name: "Compass Pointe",
    description: "Premier golf community with stunning course views and upscale amenities. Compass Pointe features an 18-hole championship golf course, clubhouse, and resort-style pool. The community attracts golf enthusiasts and those seeking an active lifestyle.",
    priceRange: "$450K - $750K",
    highlights: ["Golf Course", "Clubhouse", "Tennis Courts", "Resort Pool"],
    icon: Target
  },
  {
    name: "Hidden Lakes",
    description: "Peaceful residential community nestled among natural wetlands. Hidden Lakes offers a retreat from the hustle with private, wooded lots and a small private lake. Perfect for buyers seeking privacy and natural beauty without sacrificing accessibility.",
    priceRange: "$320K - $500K",
    highlights: ["Privacy", "Wetland Views", "Affordable", "Low HOA"],
    icon: MapPin
  },
  {
    name: "Pine Ridge",
    description: "Charming neighborhood with a mix of new construction and established homes. Pine Ridge offers convenient access to I-95 and nearby shopping while maintaining a residential character. Great for commuters and families looking for value.",
    priceRange: "$290K - $450K",
    highlights: ["I-95 Access", "New Construction", "Affordable", "Commuter Friendly"],
    icon: Car
  },
  {
    name: "Riverside at I-95",
    description: "Fast-growing corridor with new home communities and retail development. Riverside offers modern amenities, quick highway access, and growing restaurant and shopping options. Ideal for first-time buyers and investors.",
    priceRange: "$280K - $420K",
    highlights: ["New Development", "Shopping Nearby", "I-95 Access", "Affordable"],
    icon: Building2
  },
  {
    name: "Westbury",
    description: "Upscale master-planned community with premium amenities and diverse home styles. Westbury features a community center, pool, playground, and walking paths. The neighborhood attracts professionals and families seeking quality construction and amenities.",
    priceRange: "$400K - $650K",
    highlights: ["New Construction", "Community Amenities", "Playground", "Modern Homes"],
    icon: Home
  }
];

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

export default function OkatiePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/lowcountry-market"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Lowcountry Market
            </Link>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Okatie & <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Hardeeville</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              The growth corridor of the Lowcountry. New master-planned communities, golf resorts, and affordable new construction make this area ideal for first-time buyers and investors.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                New Construction
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Golf Communities
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                I-95 Access
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm">
                Affordable
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Stats */}
      <Section background="dark">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {[
            { value: "$300K - $750K", label: "Price Range" },
            { value: "7", label: "Communities" },
            { value: "New", label: "Construction" },
            { value: "Growing", label: "Area" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover={false} className="text-center py-6">
                <p className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-300 mt-1 text-sm">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
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
            Find Your <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Community</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            From established neighborhoods to new master-planned communities, Okatie and Hardeeville offer diverse options for every lifestyle and budget.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {neighborhoods.map((neighborhood, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard hover className="h-full group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <neighborhood.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {neighborhood.name}
                    </h3>
                    <p className="text-pink-400 font-medium">{neighborhood.priceRange}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {neighborhood.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {neighborhood.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why Buy Here Section */}
      <Section background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Buy in <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Okatie/Hardeeville</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              The Okatie and Hardeeville area represents the fastest-growing corridor in the Lowcountry. With new construction, golf communities, and affordable price points, it's ideal for first-time buyers, families, and investors.
            </p>

            <div className="space-y-4">
              {[
                "Access to I-95 for easy commuting to Savannah and Charleston",
                "Multiple new construction communities with builder incentives",
                "Golf communities with resort-style amenities",
                "Lower cost of living compared to Hilton Head and Bluffton",
                "Growing retail and dining options",
                "Strong rental market for investors"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard hover={false} className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 border-pink-500/20">
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold text-xl mb-2">Mortgage Options</h3>
                <p className="text-gray-300 text-sm mb-6">
                  We help buyers in Okatie and Hardeeville find the right financing — from conventional loans to physician loans and new construction financing.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                  >
                    Talk to Maggie
                  </Link>
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                  >
                    Get Pre-Approved
                  </Link>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* CTA Band */}
      <CTABand
        headline="Ready to find your Okatie home?"
        subhead="Let's figure out the right mortgage strategy for your goals in the Lowcountry's fastest-growing area."
        ctaPrimary="Schedule a Consultation"
        ctaPrimaryLink="/contact"
        ctaSecondary="Explore Other Areas"
        ctaSecondaryLink="/lowcountry-market"
      />
    </>
  );
}
