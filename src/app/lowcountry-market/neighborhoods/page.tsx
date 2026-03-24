'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export default function NeighborhoodsPage() {
  return (
    <>
      <Hero
        headline="Lowcountry Neighborhoods"
        subheadline="Explore the diverse communities across Bluffton, Hilton Head, Beaufort, and the surrounding areas."
        ctaPrimary="Explore Communities"
        ctaPrimaryLink="/lowcountry-market#communities"
        variant="compact"
      />

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Your Perfect Community
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From golf communities to waterfront estates, the Lowcountry offers diverse neighborhoods to match any lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard hover className="border-cyan-500/20 hover:border-cyan-500/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Bluffton Neighborhoods</h3>
                <p className="text-cyan-400 text-sm">8 communities</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              From award-winning golf communities to charming marsh-front neighborhoods, Bluffton has it all.
            </p>
            <Link
              href="/lowcountry-market/bluffton"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>

          <GlassCard hover className="border-blue-900/20 hover:border-blue-900/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-blue-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Hilton Head Neighborhoods</h3>
                <p className="text-blue-800 text-sm">9 communities</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              World-class resort living with beachfront communities, golf resorts, and exclusive gated estates.
            </p>
            <Link
              href="/lowcountry-market/hilton-head"
              className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-700 font-medium"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-400 mb-6">
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