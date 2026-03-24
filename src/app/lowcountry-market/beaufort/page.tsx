'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { 
  MapPin, 
  Home, 
  Waves, 
  Building2, 
  History, 
  GraduationCap,
  Anchor,
  Trees,
  ArrowLeft,
  ChevronRight
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Beaufort, SC",
    subheadline: "Where historic Southern charm meets coastal waterfront living. Discover the neighborhoods that make Beaufort one of the South's most desirable places to call home.",
    ctaPrimary: "Talk Local",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Back to Lowcountry",
    ctaSecondaryLink: "/lowcountry-market"
  },

  intro: {
    headline: "Beaufort Neighborhoods",
    subheadline: "From the cobblestone streets of downtown to the tranquil marshes of Lady's Island, Beaufort offers diverse communities each with its own character. Whether you seek historic charm, waterfront serenity, or family-friendly amenities, there's a neighborhood for you."
  },

  neighborhoods: [
    {
      name: "Downtown Beaufort",
      description: "The heart of Beaufort's historic district. Cobblestone streets, antebellum homes, boutique shops, and award-winning restaurants line the waterfront. Walkable, vibrant, and steeped in Southern history.",
      priceRange: "$400K - $1.5M",
      highlights: ["Historic District", "Waterfront Dining", "Arts & Culture", "Walkable"],
      icon: History,
      accent: "pink"
    },
    {
      name: "The Point",
      description: "Beaufort's most prestigious waterfront neighborhood. Grand antebellum homes with sweeping views of the Intracoastal Waterway. Tree-lined streets and southern elegance define this exclusive enclave.",
      priceRange: "$700K - $2.5M+",
      highlights: ["Waterfront", "Historic Homes", "Intracoastal Views", "Exclusive"],
      icon: Waves,
      accent: "cyan"
    },
    {
      name: "Lady's Island",
      description: "A tranquil residential community just across the Beaufort River. Known for its salt marsh views, golf courses, and family-friendly atmosphere. Excellent schools and easy access to downtown.",
      priceRange: "$350K - $1.2M",
      highlights: ["Marsh Views", "Golf Communities", "Top Schools", "Family-Friendly"],
      icon: Trees,
      accent: "purple"
    },
    {
      name: "Sea Island",
      description: "A prestigious barrier island community offering luxury waterfront living. Private, gated, and known for its impressive estates, deepwater docks, and resort-style amenities.",
      priceRange: "$800K - $3M+",
      highlights: ["Gated Community", "Waterfront", "Deepwater Docks", "Luxury"],
      icon: Anchor,
      accent: "cyan"
    },
    {
      name: "Port Royal",
      description: "A laid-back coastal village with a rich military history. Fort Royal Park offers stunning waterfront views, and the community features a mix of historic homes and newer construction.",
      priceRange: "$350K - $1M",
      highlights: ["Military Heritage", "Waterfront Park", "Affordable", "Community Feel"],
      icon: Building2,
      accent: "purple"
    },
    {
      name: "Battery Creek",
      description: "A diverse neighborhood near the Beaufort River with a mix of single-family homes and waterfront properties. Popular with families and retirees seeking value near the water.",
      priceRange: "$300K - $900K",
      highlights: ["Affordable Waterfront", "Family-Friendly", "River Access", "Diverse"],
      icon: Home,
      accent: "pink"
    },
    {
      name: "Mossy Oaks",
      description: "A established residential neighborhood known for its oak-lined streets and convenient location. Close to shopping, schools, and just minutes from downtown Beaufort.",
      priceRange: "$300K - $700K",
      highlights: ["Mature Trees", "Great Schools", "Convenient Location", "Established"],
      icon: MapPin,
      accent: "purple"
    }
  ],

  cta: {
    headline: "Find Your Beaufort Home",
    subhead: "Whether you're looking for historic charm or waterfront luxury, I can help you secure the right mortgage for your Beaufort neighborhood.",
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

const accentColors = {
  pink: {
    gradient: "from-pink-500/20 to-purple-500/20",
    text: "text-pink-400",
    border: "border-pink-500/20",
    glow: "shadow-pink-500/20"
  },
  purple: {
    gradient: "from-purple-500/20 to-cyan-500/20",
    text: "text-purple-400",
    border: "border-purple-500/20",
    glow: "shadow-purple-500/20"
  },
  cyan: {
    gradient: "from-cyan-500/20 to-teal-500/20",
    text: "text-cyan-400",
    border: "border-cyan-500/20",
    glow: "shadow-cyan-500/20"
  }
};

export default function BeaufortPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/lowcountry-market"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-cyan-400 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Lowcountry Market
            </Link>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              {copy.hero.headline}
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              {copy.hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={copy.hero.ctaPrimaryLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all"
              >
                {copy.hero.ctaPrimary}
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href={copy.hero.ctaSecondaryLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                {copy.hero.ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-gray-500 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <Section id="intro" background="dark">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {copy.intro.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-200 text-lg max-w-3xl mx-auto"
          >
            {copy.intro.subheadline}
          </motion.p>
        </div>
      </Section>

      {/* Neighborhoods Grid */}
      <Section id="neighborhoods" background="gradient">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.neighborhoods.map((neighborhood, index) => {
            const colors = accentColors[neighborhood.accent as keyof typeof accentColors];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover className="h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4`}>
                    <neighborhood.icon className={`w-7 h-7 ${colors.text}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {neighborhood.name}
                  </h3>
                  
                  <p className={`text-sm font-medium ${colors.text} mb-3`}>
                    {neighborhood.priceRange}
                  </p>
                  
                  <p className="text-gray-200 text-sm mb-4">
                    {neighborhood.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {neighborhood.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className={`px-3 py-1 rounded-full bg-white/5 text-gray-200 text-xs`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* CTA Section */}
      <Section id="cta" background="dark">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard hover={false} className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 border-pink-500/20">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {copy.cta.headline}
              </h2>
              <p className="text-gray-200 text-lg mb-8">
                {copy.cta.subhead}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={copy.cta.ctaPrimaryLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  {copy.cta.ctaPrimary}
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href={copy.cta.ctaSecondaryLink}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  {copy.cta.ctaSecondary}
                </Link>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </Section>
    </>
  );
}
