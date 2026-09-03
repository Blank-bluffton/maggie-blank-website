'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CountUp from '@/components/CountUp';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaPrimary?: string | null;
  ctaPrimaryLink?: string;
  ctaSecondary?: string | null;
  ctaSecondaryLink?: string;
  trustBullets?: string[];
  microProof?: string;
  variant?: 'full' | 'compact';
  backgroundImage?: string;
  backgroundClassName?: string;
  overlayClassName?: string;
  contentTone?: 'dark' | 'light';
  introContent?: React.ReactNode;
  introContentClassName?: string;
  visualContent?: React.ReactNode;
  mobileVisualContent?: React.ReactNode;
  hideVisual?: boolean;
  microProofClassName?: string;
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
  backgroundClassName,
  overlayClassName,
  contentTone = 'dark',
  introContent,
  introContentClassName,
  visualContent,
  mobileVisualContent,
  hideVisual = false,
  microProofClassName,
  customCta
}: HeroProps) {
  const isFull = variant === 'full';
  const hasCtas = Boolean(ctaPrimary || ctaSecondary || customCta);
  const isContentOnlyCompact = !isFull && !hasCtas;

  return (
    <section className={`relative flex items-center justify-center overflow-hidden ${
      isFull ? 'min-h-screen pt-20' : isContentOnlyCompact ? 'pt-32 pb-20 sm:py-32' : 'min-h-screen pt-28 pb-16'
    }`}>
      {/* Background - Warm Off-white with optional image */}
      <div className="absolute inset-0 bg-[#F8F8F8]">
        {/* Lowcountry background image */}
        {backgroundImage && (
          <div 
            className={`absolute inset-0 bg-cover ${backgroundClassName ?? 'bg-center'}`}
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          />
        )}
        {/* Overlay for readability */}
        <div className={`absolute inset-0 ${overlayClassName ?? 'bg-[#F8F8F8]/82 lg:bg-gradient-to-r lg:from-[#F8F8F8]/95 lg:via-[#F8F8F8]/82 lg:to-[#F8F8F8]/58'}`} />
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

      <div className={`relative z-10 mx-auto px-4 sm:px-6 lg:px-8 ${isContentOnlyCompact ? 'max-w-4xl' : 'max-w-7xl'}`}>
        <div className={`grid gap-12 lg:gap-16 items-center ${isContentOnlyCompact ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={isContentOnlyCompact ? 'text-center' : 'text-center lg:text-left'}
          >
            {isFull && mobileVisualContent && (
              <div className="flex justify-center mb-6 lg:hidden">
                {mobileVisualContent}
              </div>
            )}

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
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-serif ${contentTone === 'light' ? 'text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.42)]' : 'text-[#333333]'}`}
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: contentTone === 'light' ? '#ffffff' : '#333333',
              }}
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            {introContent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg sm:text-xl mb-8 max-w-xl mx-auto ${contentTone === 'light' ? 'text-white/90' : 'text-[#555555]'} ${isContentOnlyCompact ? '' : 'lg:mx-0'} ${introContentClassName ?? ''}`}
              >
                {introContent}
              </motion.div>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg sm:text-xl mb-8 max-w-xl mx-auto ${contentTone === 'light' ? 'text-white/90' : 'text-[#555555]'} ${isContentOnlyCompact ? '' : 'lg:mx-0'}`}
              >
                {subheadline}
              </motion.p>
            )}

            {/* CTAs */}
            {hasCtas && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {ctaPrimary && (
                  <Link
                    href={ctaPrimaryLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#526E7A] to-[#4A6D7C] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#526E7A]/30 transition-all duration-300 group"
                  >
                    {ctaPrimary}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                {ctaSecondary && (
                  <Link
                    href={ctaSecondaryLink}
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#526E7A] font-semibold rounded-lg border-2 border-[#526E7A] hover:bg-[#526E7A] hover:text-white transition-all duration-300"
                  >
                    {ctaSecondary}
                  </Link>
                )}
                {customCta && (
                  <div className={ctaPrimary || ctaSecondary ? 'mt-4 sm:mt-0' : undefined}>
                    {customCta}
                  </div>
                )}
              </motion.div>
            )}

            {/* Micro proof */}
            {microProof && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className={`mt-8 text-sm font-medium ${contentTone === 'light' ? 'text-white/90' : 'text-[#333333]'} ${microProofClassName ?? ''}`}
              >
                {microProof}
              </motion.p>
            )}
          </motion.div>

          {/* Visual/Image Area */}
          {isFull && !hideVisual && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {visualContent ?? (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/20 to-[#526E7A]/20 rounded-2xl blur-2xl" />
                  <div className="relative bg-white rounded-2xl p-8 min-h-[400px] shadow-xl">
                    <div className="space-y-8">
                      <div className="w-16 h-1 bg-[#C5A059] rounded-full" />
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#526E7A]/10 flex items-center justify-center"><span className="text-[#526E7A] font-bold">1</span></div>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#526E7A]/30 to-transparent" />
                        <div className="w-12 h-12 rounded-xl bg-[#526E7A]/10 flex items-center justify-center"><span className="text-[#526E7A] font-bold">2</span></div>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#526E7A]/30 to-transparent" />
                        <div className="w-12 h-12 rounded-xl bg-[#526E7A]/10 flex items-center justify-center"><span className="text-[#526E7A] font-bold">3</span></div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div><p className="text-3xl font-bold text-[#333333]"><CountUp value="30-45" /></p><p className="text-sm text-[#777777]">Days to Close</p></div>
                        <div><p className="text-3xl font-bold text-[#333333]"><CountUp value="$250M+" /></p><p className="text-sm text-[#777777]">Funded Locally</p></div>
                        <div><p className="text-3xl font-bold text-[#333333]"><CountUp value="99%" /></p><p className="text-sm text-[#777777]">On-Time Rate</p></div>
                      </div>
                      <div className="pt-6 border-t border-[#E5E5E5]"><p className="text-center text-[#555555]">Trusted by physicians, professionals & first-time buyers</p></div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
