'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  headline: string;
  steps: ProcessStep[];
  cta?: string;
  ctaLink?: string;
}

export default function ProcessTimeline({ 
  headline, 
  steps, 
  cta,
  ctaLink = '/contact'
}: ProcessTimelineProps) {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {headline}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step card */}
                <div className="glass rounded-2xl p-6 h-full hover:bg-white/[0.07] hover:border-cyan-500/30 transition-all duration-300 group">
                  {/* Number badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-gray-600 lg:hidden" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector dot - desktop */}
                <div className="hidden lg:block absolute top-1/2 -right-4 w-2 h-2 bg-cyan-500 rounded-full -translate-y-1/2 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href={ctaLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group"
            >
              {cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
