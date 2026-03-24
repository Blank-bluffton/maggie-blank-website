'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'gradient' | 'dark' | 'warm' | 'white' | 'teal';
  backgroundImage?: string;
  noAnimate?: boolean;
}

export default function Section({ 
  children, 
  className = '',
  id,
  background = 'default',
  backgroundImage,
  noAnimate = false
}: SectionProps) {
  const backgrounds = {
    default: 'bg-[#F8F8F8]',
    gradient: 'relative',
    dark: 'bg-[#333333]',
    warm: 'bg-[#F9F8F5]',
    white: 'bg-white',
    teal: 'bg-[#526E7A]'
  };

  const sectionContent = (
    <>
      {/* Overlay for readability when background image is present */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/20 z-0" />
      )}
      {background === 'gradient' && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#526E7A]/5 rounded-full blur-3xl" />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );

  if (noAnimate) {
    return (
      <section 
        id={id}
        className={`py-20 lg:py-28 ${backgrounds[background]} ${className}`}
        style={backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        } : undefined}
      >
        {sectionContent}
      </section>
    );
  }

  return (
    <motion.section 
      id={id}
      className={`py-20 lg:py-28 ${backgrounds[background]} ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      } : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {sectionContent}
    </motion.section>
  );
}
