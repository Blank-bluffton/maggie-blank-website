'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Shield } from 'lucide-react';

export default function InsurancePage() {
  return (
    <>
      <Hero
        headline="Insurance Partners"
        subheadline="Connect with local insurance agents for home, flood, and wind coverage in the Lowcountry."
        ctaPrimary="Get Quotes"
        ctaPrimaryLink="/contact"
        variant="compact"
      />

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Protect Your Investment
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Living in the Lowcountry means understanding flood, wind, and coastal insurance. We connect you with agents who know the area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <GlassCard hover className="border-cyan-500/20 hover:border-cyan-500/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Flood Insurance</h3>
                <p className="text-cyan-400 text-sm">Required in many zones</p>
              </div>
            </div>
            <p className="text-gray-400">
              Properties in AE and VE flood zones require flood insurance. We'll help you understand your options and costs.
            </p>
          </GlassCard>

          <GlassCard hover className="border-blue-900/20 hover:border-blue-900/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Homeowners Insurance</h3>
                <p className="text-blue-800 text-sm">Standard coverage</p>
              </div>
            </div>
            <p className="text-gray-400">
              Protect your home and belongings with comprehensive coverage tailored to coastal living.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Need insurance recommendations for your new home?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            Get Recommendations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}