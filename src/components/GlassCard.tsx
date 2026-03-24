'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  delay = 0
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl p-6 shadow-md ${
        hover 
          ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' 
          : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
