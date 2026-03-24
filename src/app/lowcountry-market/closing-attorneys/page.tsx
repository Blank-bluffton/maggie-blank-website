'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function ClosingAttorneysPage() {
  return (
    <>
      <Hero
        headline="Closing Attorneys"
        subheadline="Trusted legal professionals to handle your real estate closing in the Lowcountry."
        ctaPrimary="Learn More"
        ctaPrimaryLink="/contact"
        variant="compact"
      />

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Smooth Closings, Every Time
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A strong closing team is essential. We work with experienced attorneys who ensure your transaction closes on time and without issues.
          </p>
        </div>

        <GlassCard hover={false} className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Why Closing Expertise Matters</h3>
              <p className="text-gray-400 mb-4">
                In South Carolina, attorneys handle real estate closings to ensure title clearance and legal compliance.
              </p>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li>✓ Title search & clearance</li>
                <li>✓ Contract review</li>
                <li>✓ Closing document preparation</li>
                <li>✓ Coordinate with all parties</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Need a closing attorney recommendation?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
            >
            Let's Connect <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}