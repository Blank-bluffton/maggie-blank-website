'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTABandProps {
  variant?: 'default' | 'luxury';
  headline: string;
  subhead?: string;
  subheadline?: string;
  ctaPrimary?: string;
  ctaPrimaryLink?: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
}

export default function CTABand({
  variant = 'default',
  headline,
  subhead,
  subheadline,
  ctaPrimary = 'Get Started',
  ctaPrimaryLink = '/contact',
  ctaSecondary,
  ctaSecondaryLink
}: CTABandProps) {
  // Support both subhead and subheadline props
  const description = subhead || subheadline;
  const isLuxury = variant === 'luxury';
  return (
    <section className={`py-20 lg:py-28 relative overflow-hidden ${isLuxury ? 'bg-[#1F2E35]' : ''}`}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={isLuxury ? 'absolute inset-0 bg-gradient-to-r from-[#14242B] via-[#2D4852] to-[#14242B]' : 'absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-cyan-500/10'} />
        <div className={isLuxury ? 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D7B36A]/10 rounded-full blur-3xl' : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl'} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Decorative icon */}
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 ${isLuxury ? 'border border-[#D7B36A]/35 bg-white/10' : 'glass'}`}>
            <ArrowRight className={`w-8 h-8 ${isLuxury ? 'text-[#E1C57E]' : 'text-cyan-400'}`} />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold !text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)]">
            {headline}
          </h2>

          {/* Subheadline */}
          {description && (
            <p className={`text-lg mb-8 max-w-2xl mx-auto ${isLuxury ? 'text-slate-100' : 'text-gray-400'}`}>
              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaPrimaryLink}
              className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 group ${isLuxury ? 'bg-gradient-to-r from-[#B98C42] to-[#D7B36A] shadow-lg shadow-black/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30' : 'bg-gradient-to-r from-cyan-500 to-teal-600 hover:shadow-lg hover:shadow-cyan-500/25 glow-cyan'}`}
            >
              {ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {ctaSecondary && ctaSecondaryLink && (
              <Link
                href={ctaSecondaryLink}
                className={`inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 ${isLuxury ? 'border border-white/35 bg-white/10 hover:bg-white/20' : 'glass hover:bg-white/10'}`}
              >
                {ctaSecondary}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
