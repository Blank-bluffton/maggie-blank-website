'use client';

import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Home, Waves, Trees, Palmtree, Shield } from 'lucide-react';

const blufftonNeighborhoods = [
  {
    name: "May River",
    description: "The crown jewel of Bluffton. This prestigious marshfront community offers luxury homes with stunning views of the May River, a private deep-water marina, and access to world-class amenities.",
    priceRange: "$800K - $3.5M+",
    type: "Luxury Marshfront",
    icon: Waves
  },
  {
    name: "Palmetto Bluff",
    description: "A historic riverside community with luxury homes, yacht club, golf courses, and nature preserves. One of the most exclusive addresses in the Lowcountry.",
    priceRange: "$1M - $5M+",
    type: "Ultra-Luxury Preserve",
    icon: Trees
  },
  {
    name: "Berkeley Hall",
    description: "A prestigious golf community with two Robert Trent Jones courses, luxury amenities, and estate homes. Known for its privacy and world-class facilities.",
    priceRange: "$600K - $2M+",
    type: "Golf Community",
    icon: Home
  },
  {
    name: "Belfair",
    description: "Award-winning golf community with Greg Norman courses, tennis center, and resort-style amenities. Offers a range of home styles from villas to estate homes.",
    priceRange: "$400K - $1.5M+",
    type: "Golf Community",
    icon: Home
  },
  {
    name: "Hampton Hall",
    description: "Exclusive golf and marina community with Pete Dye golf course, full-service marina, and luxury amenities. Perfect for those seeking an active lifestyle.",
    priceRange: "$500K - $1.8M+",
    type: "Golf & Marina",
    icon: Home
  },
  {
    name: "Sun City",
    description: "Active 55+ community with golf, tennis, pools, and over 100 clubs. More affordable entry point to Lowcountry living with excellent amenities.",
    priceRange: "$250K - $600K",
    type: "55+ Active Adult",
    icon: Home
  },
  {
    name: "Old Carolina",
    description: "Charming community with golf, tennis, and family amenities. Known for its Moss-draped oaks and Lowcountry charm.",
    priceRange: "$350K - $800K",
    type: "Family Community",
    icon: Trees
  },
  {
    name: "Palmetto Hall",
    description: "Relaxed golf community with Pete Dye course, tennis, and pool amenities. More laid-back atmosphere with affordable pricing.",
    priceRange: "$300K - $700K",
    type: "Golf Community",
    icon: Home
  }
];

const hiltonHeadNeighborhoods = [
  {
    name: "Sea Pines",
    description: "The iconic resort community with Harbour Town, the famous lighthouse, and 5 miles of beach. World-renowned golf and tennis destinations.",
    priceRange: "$700K - $3M+",
    type: "Resort Living",
    icon: Palmtree
  },
  {
    name: "Port Royal",
    description: "Premier golf and tennis community with three Pete Dye courses, oceanfront park, and resort amenities.",
    priceRange: "$500K - $2M+",
    type: "Golf & Tennis",
    icon: Home
  },
  {
    name: "Indented",
    description: "Exclusive gated community with golf, marsh views, and luxury homes. Known for privacy and natural beauty.",
    priceRange: "$800K - $2.5M+",
    type: "Gated Luxury",
    icon: Shield
  },
  {
    name: "The Golf Club at Indigo Run",
    description: "Well-established golf community with championship course, tennis, and proximity to shopping and beaches.",
    priceRange: "$400K - $1.2M+",
    type: "Golf Community",
    icon: Home
  },
  {
    name: "Wexford",
    description: "Full-service marina and golf community with equestrian center, tennis, and diverse home options.",
    priceRange: "$500K - $1.8M+",
    type: "Marina & Golf",
    icon: Waves
  },
  {
    name: "Long Cove",
    description: "Pete Dye golf community with marsh views, tennis, and quieter atmosphere away from the crowds.",
    priceRange: "$400K - $1.5M+",
    type: "Golf Community",
    icon: Home
  },
  {
    name: "Palmetto Dunes",
    description: "Oceanfront resort with three golf courses, tennis center, and beach access. Perfect for beach lovers.",
    priceRange: "$600K - $2M+",
    type: "Oceanfront",
    icon: Palmtree
  },
  {
    name: "Shipyard",
    description: "Ocean-oriented community with beach access, tennis, and condos. More affordable Hilton Head entry.",
    priceRange: "$300K - $900K",
    type: "Beach Community",
    icon: Waves
  }
];

export default function NeighborhoodsPage() {
  return (
    <>
      <Section background="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Find Your Bluffton Neighborhood
          </h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            Each community has its own character, price points, and lifestyle. Here's what you need to know about Bluffton's top neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blufftonNeighborhoods.map((hood, index) => (
            <GlassCard key={index} hover={true} delay={index * 0.1}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <hood.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{hood.name}</h3>
                  <p className="text-cyan-400 text-sm font-medium">{hood.priceRange}</p>
                </div>
              </div>
              <p className="text-gray-200">{hood.description}</p>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <span className="text-xs text-gray-200">{hood.type}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/lowcountry-market/bluffton"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            View All Bluffton Neighborhoods <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Your Hilton Head Neighborhood
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            From oceanfront resorts to exclusive gated communities, Hilton Head offers world-class living with championship golf and pristine beaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {hiltonHeadNeighborhoods.map((hood, index) => (
            <GlassCard key={index} hover={true} delay={index * 0.1}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                  <hood.icon className="w-6 h-6 text-blue-800" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{hood.name}</h3>
                  <p className="text-blue-400 text-sm font-medium">{hood.priceRange}</p>
                </div>
              </div>
              <p className="text-gray-200">{hood.description}</p>
              <div className="mt-3 pt-3 border-t border-gray-700">
                <span className="text-xs text-gray-200">{hood.type}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/lowcountry-market/hilton-head"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg transition-colors"
          >
            View All Hilton Head Neighborhoods <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-200 mb-6">
            Need help finding the right neighborhood for your lifestyle and budget?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
