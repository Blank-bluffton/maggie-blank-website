'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Award, TrendingUp, Users, MapPin, Phone, Mail, Star } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
  icon: React.ElementType;
}

interface TrustItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const stats: Stat[] = [
  { value: '$500M+', label: 'Loans Closed', icon: TrendingUp },
  { value: '1,200+', label: 'Families Helped', icon: Users },
  { value: '15+', label: 'Years Experience', icon: Award },
  { value: '4.9★', label: 'Average Rating', icon: Star },
];

const trustItems: TrustItem[] = [
  {
    icon: Shield,
    title: 'NMLS Licensed',
    description: 'NMLS #504377 — Fully licensed and regulated',
  },
  {
    icon: Award,
    title: 'President\'s Club',
    description: '2024 & 2025 Award Recipient',
  },
  {
    icon: Award,
    title: 'Best in Class',
    description: 'Customer Experience Award Winner',
  },
];

const partners = [
  'Synovus',
  'FHA',
  'VA',
  'USDA',
  'Conventional',
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <div ref={ref} className="w-full">
      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              className="glass-card p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-2">
                <Icon className="w-5 h-5 text-cyan-400" />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
              <p className="text-xs md:text-sm text-slate-400 mt-1">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/40 border border-slate-700/50"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Icon className="w-4 h-4 text-cyan-400" />
              <div>
                <p className="text-sm font-medium text-white">{item.title}</p>
                <p className="text-xs text-slate-500">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Partner Logos */}
      <motion.div
        className="border-t border-slate-800 pt-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <p className="text-center text-xs text-slate-500 mb-4 uppercase tracking-widest">
          We Partner With
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              className="text-sm md:text-base text-slate-500 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="mt-8 pt-6 border-t border-slate-800"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>3 Belfair Village Drive, Bluffton, SC 29910</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Phone className="w-4 h-4 text-cyan-400" />
            <a href="tel:8437063101" className="hover:text-cyan-400 transition-colors">
              (843) 706-3101
            </a>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Mail className="w-4 h-4 text-cyan-400" />
            <a href="mailto:maggieblank@synovus.com" className="hover:text-cyan-400 transition-colors">
              maggieblank@synovus.com
            </a>
          </div>
        </div>
      </motion.div>

      {/* NMLS Disclaimer */}
      <motion.p
        className="text-center text-xs text-slate-600 mt-6"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        NMLS #504377 • Synovus Bank • Equal Housing Lender •
        <a 
          href="https://www.nmlsconsumeraccess.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-slate-500 transition-colors ml-1"
        >
          Verify on NMLS Consumer Access
        </a>
      </motion.p>
    </div>
  );
}
