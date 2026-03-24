'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTABandProps {
  headline: string;
  subhead?: string;
  ctaPrimary?: string;
  ctaPrimaryLink?: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
}

export default function CTABand({
  headline,
  subhead,
  ctaPrimary = 'Get Started',
  ctaPrimaryLink = '/contact',
  ctaSecondary,
  ctaSecondaryLink
}: CTABandProps) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-teal-500/5 to-cyan-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Decorative icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl glass mb-8">
            <ArrowRight className="w-8 h-8 text-cyan-400" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {headline}
          </h2>

          {/* Subheadline */}
          {subhead && (
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              {subhead}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={ctaPrimaryLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group glow-cyan"
            >
              {ctaPrimary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            {ctaSecondary && ctaSecondaryLink && (
              <Link
                href={ctaSecondaryLink}
                className="inline-flex items-center justify-center px-8 py-4 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
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
