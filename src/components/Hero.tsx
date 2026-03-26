'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: string;
  ctaPrimaryLink?: string;
  ctaSecondary?: string;
  ctaSecondaryLink?: string;
  trustBullets?: string[];
  microProof?: string;
  variant?: 'full' | 'compact';
  backgroundImage?: string;
  customCta?: React.ReactNode;
}

export default function Hero({
  headline,
  subheadline,
  ctaPrimary = 'Get Started',
  ctaPrimaryLink = '/contact',
  ctaSecondary = 'Learn More',
  ctaSecondaryLink = '/loan-solutions',
  trustBullets = [],
  microProof,
  variant = 'full',
  backgroundImage,
  customCta
}: HeroProps) {
  const isFull = variant === 'full';

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isFull ? 'pt-20' : 'pt-28 pb-16'
    }`}>
      {/* Background - Warm Off-white with optional image */}
      <div className="absolute inset-0 bg-[#F8F8F8]">
        {/* Lowcountry background image */}
        {backgroundImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#F8F8F8]/70" />
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#526E7A 1px, transparent 1px),
                             linear-gradient(90deg, #526E7A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Trust badges */}
            {trustBullets.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
              >
                {trustBullets.map((bullet, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-sm text-[#555555] shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#526E7A]" />
                    {bullet}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Headline - Serif Font */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight mb-6 font-serif"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-[#555555] mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href={ctaPrimaryLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#526E7A] to-[#4A6D7C] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#526E7A]/30 transition-all duration-300 group"
              >
                {ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={ctaSecondaryLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#526E7A] font-semibold rounded-lg border-2 border-[#526E7A] hover:bg-[#526E7A] hover:text-white transition-all duration-300"
              >
                {ctaSecondary}
              </Link>
              {customCta && (
                <div className="mt-4 sm:mt-0">
                  {customCta}
                </div>
              )}
            </motion.div>

            {/* Micro proof */}
            {microProof && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 text-sm text-[#333333] font-medium"
              >
                {microProof}
              </motion.p>
            )}
          </motion.div>

          {/* Visual/Image Area */}
          {isFull && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Card with stats */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/20 to-[#526E7A]/20 rounded-2xl blur-2xl" />
                <div className="relative bg-white rounded-2xl p-8 min-h-[400px] shadow-xl">
                  {/* Stats representation */}
                  <div className="space-y-8">
                    {/* Gold accent bar */}
                    <div className="w-16 h-1 bg-[#C5A059] rounded-full" />
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#526E7A]/10 flex items-center justify-center">
                        <span className="text-[#526E7A] font-bold">1</span>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#526E7A]/30 to-transparent" />
                      <div className="w-12 h-12 rounded-xl bg-[#526E7A]/10 flex items-center justify-center">
                        <span className="text-[#526E7A] font-bold">2</span>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#526E7A]/30 to-transparent" />
                      <div className="w-12 h-12 rounded-xl bg-[#526E7A]/10 flex items-center justify-center">
                        <span className="text-[#526E7A] font-bold">3</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-3xl font-bold text-[#333333]">30-45</p>
                        <p className="text-sm text-[#777777]">Days to Close</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-[#333333]">$250M+</p>
                        <p className="text-sm text-[#777777]">Funded Locally</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-[#333333]">99%</p>
                        <p className="text-sm text-[#777777]">On-Time Rate</p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#E5E5E5]">
                      <p className="text-center text-[#555555]">
                        Trusted by physicians, professionals & first-time buyers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
