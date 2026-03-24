'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline: string;
  items: FAQItem[];
  viewAllLink?: string;
  viewAllText?: string;
}

export default function FAQAccordion({ 
  headline, 
  items, 
  viewAllLink = '/faq',
  viewAllText = 'View All FAQs'
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 relative bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <HelpCircle className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {headline}
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-gray-800 font-medium pr-4">{item.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        {viewAllLink && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-8"
          >
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-600 transition-colors"
            >
              {viewAllText}
              <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
