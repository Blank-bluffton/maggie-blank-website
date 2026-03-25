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
    default: 'bg-[#F8F8F8] text-gray-800',
    gradient: 'relative text-gray-800',
    dark: 'bg-[#333333] text-white',
    warm: 'bg-[#F9F8F5] text-gray-800',
    white: 'bg-white text-gray-800',
    teal: 'bg-[#526E7A] text-white'
  };

  const sectionContent = (
    <>
      {/* Background image — separate div pattern like Hero component */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>
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
      >
        {sectionContent}
      </section>
    );
  }

  return (
    <motion.section 
      id={id}
      className={`py-20 lg:py-28 ${backgrounds[background]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {sectionContent}
    </motion.section>
  );
}
