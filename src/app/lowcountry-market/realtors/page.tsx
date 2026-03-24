'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';

export default function RealtorsPage() {
  return (
    <>
      <Hero
        headline="Trusted Realtors"
        subheadline="Connect with experienced local real estate professionals who know the Lowcountry market."
        ctaPrimary="Get Connected"
        ctaPrimaryLink="/contact"
        variant="compact"
      />

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Partner With Local Experts
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            We've built relationships with top realtors across Bluffton, Hilton Head, and Beaufort. They know the market, and we close together.
          </p>
        </div>

        <GlassCard hover={false} className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Work With a Trusted Partner</h3>
              <p className="text-gray-200 mb-4">
                Whether you're buying your first home or investing in a second property, our network of local realtors is here to guide you.
              </p>
              <ul className="space-y-2 text-gray-200 mb-6">
                <li>✓ Local market expertise</li>
                <li>✓ Neighborhood knowledge</li>
                <li>✓ Smooth transaction coordination</li>
                <li>✓ Trusted closing process</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-200 mb-6">
            Looking for a realtor recommendation?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            Get a Recommendation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}