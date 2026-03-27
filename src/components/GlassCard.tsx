'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  /** Use dark text (for use on light/gradient backgrounds where the card needs readable contrast) */
  darkText?: boolean;
  /** Opaque white background — use when card sits on a light section without its own gradient */
  solidWhite?: boolean;
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  darkText = false,
  solidWhite = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl p-6 shadow-md ${
        hover 
          ? 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out' 
          : ''
      } ${solidWhite ? 'bg-white' : ''} ${className}`}
    >
      <div className={darkText ? 'text-gray-800' : ''}>
        {children}
      </div>
    </motion.div>
  );
}
