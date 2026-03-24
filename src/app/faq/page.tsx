"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  HelpCircle, 
  ChevronDown, 
  Shield, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  ArrowRight,
  CheckCircle2,
  Calculator,
  FileText,
  TrendingUp,
  Home,
  Users,
  Briefcase
} from 'lucide-react';

// FAQ data for mortgage topics
const mortgageFAQs = [
  {
    category: "Getting Started",
    icon: FileText,
    items: [
      {
        question: "What documents do I need to apply for a mortgage?",
        answer: "Required documents typically include: proof of income (pay stubs, W-2s, tax returns), bank statements (2+ months), photo ID, and explanation of any credit inquiries. Self-employed borrowers need 2 years of tax returns and profit/loss statements. I'll guide you through exactly what's needed for your specific situation."
      },
      {
        question: "How long does the mortgage process take?",
        answer: "Most transactions close in 30-45 days from contract to funding. Timeline depends on loan type, your responsiveness, and third-party vendor speeds (appraisal, title). A pre-approval letter helps move faster once you find a home."
      },
      {
        question: "What credit score do I need to buy a home?",
        answer: "Conventional loans typically require 620+, FHA loans around 580-620 depending on down payment, and physician loans often allow for more flexible credit requirements. I can help you understand options even if your credit isn't perfect."
      }
    ]
  },
  {
    category: "Loan Options",
    icon: Calculator,
    items: [
      {
        question: "What's the difference between a fixed-rate and adjustable-rate mortgage?",
        answer: "A fixed-rate mortgage locks in your interest rate for the life of the loan (usually 15 or 30 years), giving you predictable monthly payments. An ARM starts with a lower rate that adjusts after a set period—better if you plan to move or refinance within 5-7 years."
      },
      {
        question: "What is a physician loan and who qualifies?",
        answer: "Physician loans (also called doctor loans) are specialized programs for medical professionals that often offer lower down payments, flexible underwriting, and no PMI. They typically require you to be a licensed MD, DO, DDS, DMD, or DPM. I specialize in helping physicians secure these unique financing options."
      },
      {
        question: "Can I use gift money for my down payment?",
        answer: "Yes, most loan programs allow gift funds from family members. However, the donor must provide a signed gift letter stating funds are a gift, not a loan. Some programs have restrictions on who can gift and minimum borrower contribution."
      }
    ]
  },
  {
    category: "First-Time Buyers",
    icon: Home,
    items: [
      {
        question: "What is down payment assistance and do I qualify?",
        answer: "Down payment assistance (DPA) programs offer grants or low-interest loans to help with upfront costs. South Carolina has several programs for first-time buyers. Eligibility depends on income, property location, and loan type. I can help you find programs you qualify for."
      },
      {
        question: "How much house can I afford?",
        answer: "A general rule is keeping housing costs under 28% of gross monthly income. But I look at your complete picture—income, debts, assets, and goals—to determine what truly works. Let's run numbers together in a pre-approval conversation."
      },
      {
        question: "What is private mortgage insurance (PMI)?",
        answer: "PMI is required when your down payment is under 20% on conventional loans. It protects the lender, not you, and adds to your monthly payment. Options include: larger down payment, lender-paid PMI, or exploring programs that don't require PMI."
      }
    ]
  },
  {
    category: "Self-Employed Borrowers",
    icon: Briefcase,
    items: [
      {
        question: "How do self-employed borrowers qualify for mortgages?",
        answer: "Lenders look at 2 years of tax returns, calculating your average adjusted gross income. Bank statement programs allow qualification based on deposits instead of tax returns. I work with self-employed clients regularly and can find the best path for your situation."
      },
      {
        question: "Can I use business income to qualify?",
        answer: "Yes, if you have 2+ years of consistent business income documented through tax returns. Recent changes to guidelines have made it easier for self-employed borrowers, but documentation requirements are strict. Let's review your specific situation."
      },
      {
        question: "What if my income varies year to year?",
        answer: "Lenders can use a 2-year average or the most recent year's income if it shows an upward trend. Gaps in employment or income drops require explanation. I know how to present your income in the best light for approval."
      }
    ]
  },
  {
    category: "The Lowcountry Market",
    icon: MapPin,
    items: [
      {
        question: "What makes buying in the Lowcountry different?",
        answer: "Coastal properties may require flood insurance (often required below certain elevations), and some communities have HOA fees. Property taxes vary significantly by county. I know the local market nuances and can connect you with the right insurance and title partners."
      },
      {
        question: "Are there special programs for SC first-time buyers?",
        answer: "South Carolina offers the SC Housing Homebuyer Program with down payment assistance up to $7,500 for eligible buyers. Income limits and property location requirements apply. I can help you navigate these programs and determine eligibility."
      }
    ]
  },
  {
    category: "Working With Me",
    icon: Users,
    items: [
      {
        question: "Why should I work with a local mortgage banker vs. an online lender?",
        answer: "As a local Synovus banker, I have underwriting authority, can advocate for your file, and understand the Lowcountry market intimately. You'll work directly with me—not a call center—and get personalized guidance throughout the entire process."
      },
      {
        question: "What makes Maggie's approach different?",
        answer: "I focus on education, not just approval. You'll understand your options, the pros and cons of each, and feel confident in your decisions. I also coordinate with realtors and title to keep deals moving smoothly. My goal is your long-term financial success, not just this one loan."
      }
    ]
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

// Gradient orbs background
function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.1, 0.15]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Single FAQ accordion item
function FAQItem({ 
  question, 
  answer, 
  isOpen, 
  onToggle 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-gray-800 font-medium pr-4 text-sm sm:text-base">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-cyan-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-700 leading-relaxed text-sm sm:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Category section with FAQs
function FAQCategory({ 
  category, 
  icon: Icon, 
  items, 
  defaultOpen = false 
}: { 
  category: string; 
  icon: any; 
  items: { question: string; answer: string }[]; 
  defaultOpen?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ? 0 : null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-cyan-400" />
        </div>
        <h3 className="text-xl font-semibold text-white">{category}</h3>
      </div>
      
      <div className="space-y-3">
        {items.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Trust badge
function TrustBadge({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
      <Icon className="w-4 h-4 text-cyan-400" />
      <span className="text-gray-300 text-sm">{text}</span>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <GradientOrbs />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6"
            >
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">Mortgage Guidance</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked <span className="text-gradient-cyan">Questions</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Find answers to common questions about buying a home, securing a mortgage, 
              and financing your Lowcountry property.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <TrustBadge icon={Shield} text="NMLS #504377" />
              <TrustBadge icon={MapPin} text="Lowcountry Expert" />
              <TrustBadge icon={Clock} text="15+ Years Experience" />
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-500"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 lg:py-24 relative bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Mortgage Questions, Answered
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Whether you're a first-time buyer, self-employed, or a physician looking 
              for specialized financing, find the information you need.
            </p>
          </motion.div>

          {/* FAQ Categories */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {mortgageFAQs.map((category, index) => (
              <FAQCategory
                key={index}
                category={category.category}
                icon={category.icon}
                items={category.items}
                defaultOpen={index === 0}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-teal-500/5 to-cyan-500/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 sm:p-12 text-center"
          >
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 mb-6">
              <HelpCircle className="w-8 h-8 text-cyan-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>

            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Every borrower's situation is unique. Let's talk about your specific 
              goals and find the right financing solution for you.
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group glow-cyan"
              >
                <Phone className="w-5 h-5" />
                Schedule a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Get Pre-Approved
              </Link>
            </div>

            {/* Contact info */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm mb-4">Or reach out directly:</p>
              <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                <a 
                  href="tel:8437063101" 
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Office: (843) 706-3101
                </a>
                <a 
                  href="tel:8435757768" 
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Cell: (843) 575-7768
                </a>
                <a 
                  href="mailto:maggieblank@synovus.com" 
                  className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  maggieblank@synovus.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick links section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-lg font-medium text-white mb-6">Explore More</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/physician-loans"
                className="px-5 py-2 rounded-full bg-white/5 border border-pink-500/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Physician Loans
              </Link>
              <Link
                href="/first-time-buyers"
                className="px-5 py-2 rounded-full bg-white/5 border border-cyan-500/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                First-Time Buyers
              </Link>
              <Link
                href="/self-employed"
                className="px-5 py-2 rounded-full bg-white/5 border border-purple-500/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                Self-Employed
              </Link>
              <Link
                href="/loan-solutions"
                className="px-5 py-2 rounded-full bg-white/5 border border-teal-500/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                All Loan Options
              </Link>
              <Link
                href="/about"
                className="px-5 py-2 rounded-full bg-white/5 border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 transition-all text-sm"
              >
                About Maggie
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
