"use client";

import { useState } from 'react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Shield, 
  MapPin, 
  Star, 
  Users, 
  Heart, 
  Ship, 
  Hammer, 
  Flower2,
  Calendar,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

// About page content
const copy = {
  hero: {
    headline: "Meet Maggie Blank",
    subheadline: "Mortgage banker. Lowcountry expert. Advocate for your financial success.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Explore Loan Options",
    ctaSecondaryLink: "/loan-solutions",
    trustBullets: [
      "Synovus Bank Mortgage Banker",
      "NMLS #504377",
      "President's Club 2024 & 2025"
    ]
  },

  story: {
    headline: "Helping Lowcountry families build their futures",
    body: `Maggie Blank Dunning has been helping families finance their dreams in the Lowcountry for over 15 years. Starting her career in banking, she discovered her passion for mortgages — not the paperwork, but the people behind it.

At Synovus Bank, Maggie specializes in serving physicians, first-time homebuyers, and self-employed borrowers who need more than a rate quote. They need a partner who understands their unique financial journey.

Maggie was featured in My FrontPage Story (January 2023) for her remarkable dedication — she once saved her son's life during an ATV accident, demonstrating the same fierce determination she brings to every client relationship.`
  },

  professional: {
    headline: "Professional excellence you can trust",
    stats: [
      { value: "15+", label: "Years Experience" },
      { value: "150M+", label: "In Homes Financed" },
      { value: "1000+", label: "Families Helped" }
    ],
    credentials: [
      { icon: Award, text: "President's Club 2024 & 2025" },
      { icon: Star, text: "Best in Class Customer Experience Award" },
      { icon: Shield, text: "NMLS #504377" },
      { icon: Users, text: "Synovus Bank Mortgage Banker" }
    ]
  },

  whyClients: {
    headline: "Why clients choose Maggie",
    bullets: [
      "Clear communication — no jargon, just straightforward guidance",
      "Responsive support — you work directly with Maggie, not a call center",
      "Local expertise — she lives and lends in the Lowcountry",
      "A champion in your corner — committed to your success",
      "15+ years of experience navigating complex loan scenarios",
      "Proven track record of closing on time, every time"
    ]
  },

  personal: {
    headline: "Beyond the numbers",
    intro: "Maggie is as dedicated to her community as she is to her clients.",
    facts: [
      { icon: Heart, text: "Married to Ben Dunning since 2013" },
      { icon: Users, text: "Proud mom of twins Robert and Reagan" },
      { icon: Ship, text: "Family boat outings on the Lowcountry waters" },
      { icon: Hammer, text: "Passionate about carpentry — building with her hands" },
      { icon: Flower2, text: "Koi pond building — creating serene backyard escapes" }
    ]
  },

  testimonials: {
    headline: "What clients say about working with Maggie",
    items: [
      {
        quote: "Maggie saved our deal when another lender couldn't close. Her expertise with our complex income situation made the difference. Highly recommend for any physician looking to buy.",
        author: "Dr. Sarah M.",
        location: "Hilton Head",
        role: "Physician"
      },
      {
        quote: "As a realtor, I need a lender I can trust to close on time. Maggie delivers every single time. She's my go-to for all my clients.",
        author: "Realtor",
        location: "Bluffton",
        role: "Real Estate Professional"
      },
      {
        quote: "First-time buyer process can be overwhelming. Maggie walked us through every step. We felt informed, not overwhelmed.",
        author: "New Homeowner",
        location: "Okatie",
        role: "First-Time Buyer"
      },
      {
        quote: "Self-employed and worried about qualifying. Maggie found a bank statement program that worked. Closed on our dream home.",
        author: "Small Business Owner",
        location: "Beaufort",
        role: "Self-Employed"
      }
    ]
  },

  cta: {
    headline: "Let's see if we're a fit",
    subhead: "Every great home financing journey starts with a conversation. Schedule a consultation and discover the Maggie Blank difference.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "/apply"
  }
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
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
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Background gradient component
function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.15, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

// Stats component
function StatsBar({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
          className="text-center"
        >
          <div className="text-3xl sm:text-4xl font-bold text-gradient-pink mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-900">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// Personal fact card
function PersonalFact({ icon: Icon, text, delay }: { icon: any; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-pink-400" />
      </div>
      <span className="text-gray-900">{text}</span>
    </motion.div>
  );
}

// Credential badge
function CredentialBadge({ icon: Icon, text, delay }: { icon: any; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-pink-500/20"
    >
      <Icon className="w-4 h-4 text-pink-400" />
      <span className="text-sm text-gray-900">{text}</span>
    </motion.div>
  );
}

// Bullet point with check
function TrustBullet({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="flex items-start gap-3"
    >
      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
      <span className="text-gray-900">{text}</span>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/IMG_4398.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-[#333333]/80" />
        <GradientOrbs />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/30 mb-6"
            >
              <span className="text-pink-400 text-sm font-medium">Your Lowcountry Mortgage Expert</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              Meet <span className="text-gradient-pink">Maggie Blank</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-900 max-w-2xl mx-auto mb-10">
              {copy.hero.subheadline}
            </p>

            {/* Trust bullets */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {copy.hero.trustBullets.map((bullet, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <Shield className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-900 text-sm">{bullet}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href={copy.hero.ctaPrimaryLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-gray-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all hover:-translate-y-1"
              >
                {copy.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={copy.hero.ctaSecondaryLink}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/20 text-gray-900 font-semibold rounded-xl hover:bg-white/10 transition-all"
              >
                {copy.hero.ctaSecondary}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-3 bg-cyan-400 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <GlassCard hover={false} className="bg-gradient-to-br from-pink-500/5 via-transparent to-cyan-500/5">
            <StatsBar stats={copy.professional.stats} />
          </GlassCard>
        </div>
      </section>

      {/* Story Section */}
      <Section id="story" background="dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              {copy.story.headline}
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <GlassCard hover={false} className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 overflow-hidden">
                <img 
                  src="/IMG_1750.jpg" 
                  alt="Maggie Blank with her family" 
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-gray-900 text-sm text-center mt-4">
                  Maggie with her family — Robert and Reagan
                </p>
              </GlassCard>
              
              <div className="space-y-4 text-gray-900 leading-relaxed text-lg">
                {copy.story.body.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Professional Credentials Section */}
      <Section id="professional" background="gradient">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              {copy.professional.headline}
            </h2>
            
            <div className="flex flex-wrap justify-center gap-3">
              {copy.professional.credentials.map((cred, index) => (
                <CredentialBadge 
                  key={index} 
                  icon={cred.icon} 
                  text={cred.text} 
                  delay={index * 0.1} 
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Why Clients Choose Maggie Section */}
      <Section id="why-clients" background="dark">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              {copy.whyClients.headline}
            </h2>
            
            <div className="space-y-4">
              {copy.whyClients.bullets.map((bullet, index) => (
                <TrustBullet key={index} text={bullet} delay={index * 0.1} />
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Personal Section */}
      <Section id="personal" background="gradient">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
              {copy.personal.headline}
            </h2>
            
            <p className="text-gray-900 text-center mb-8 max-w-xl mx-auto">
              {copy.personal.intro}
            </p>
            
            <GlassCard hover={false} className="bg-gradient-to-br from-pink-500/5 to-cyan-500/5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {copy.personal.facts.map((fact, index) => (
                  <PersonalFact 
                    key={index} 
                    icon={fact.icon} 
                    text={fact.text} 
                    delay={index * 0.1} 
                  />
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <TestimonialCarousel
        headline={copy.testimonials.headline}
        items={copy.testimonials.items}
      />

      {/* CTA Band Section */}
      <CTABand
        headline={copy.cta.headline}
        subhead={copy.cta.subhead}
        ctaPrimary={copy.cta.ctaPrimary}
        ctaPrimaryLink={copy.cta.ctaPrimaryLink}
        ctaSecondary={copy.cta.ctaSecondary}
        ctaSecondaryLink={copy.cta.ctaSecondaryLink}
      />
    </>
  );
}