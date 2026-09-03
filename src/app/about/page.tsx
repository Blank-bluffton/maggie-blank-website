"use client";

import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABand from '@/components/CTABand';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Award, 
  Shield, 
  MapPin, 
  Star, 
  Users, 
  Phone,
} from 'lucide-react';

// About page content
const copy = {
  hero: {
    headline: "Meet Maggie Blank",
    subheadline: "Mortgage Advisor. Lowcountry Expert. Your Advocate from Application to Closing."
  },

  expectations: [
    { icon: Award, title: "Personalized strategies", text: "Mortgage guidance shaped around your goals—not a one-size-fits-all approach." },
    { icon: Shield, title: "Complex-income guidance", text: "Thoughtful support for nuanced income and financial situations." },
    { icon: MapPin, title: "Local market knowledge", text: "A clear perspective on Lowcountry communities, homes, and market dynamics." },
    { icon: Users, title: "Professional coordination", text: "Collaboration with your Realtor, builder, financial advisor, and other professionals." },
    { icon: Phone, title: "Clear communication", text: "Proactive updates and direct, responsive guidance throughout the process." },
    { icon: Star, title: "Concierge-level experience", text: "A seamless, high-touch process designed to make financing feel more manageable." }
  ],

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

export default function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-28 sm:py-32">
        <motion.div
          className="absolute inset-0 bg-cover bg-center brightness-[0.78] contrast-110"
          style={{ backgroundImage: 'url(/IMG_4398.jpg)' }}
          animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.035, 1] }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[#14242B]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#13242C]/70 via-[#1F343B]/48 to-[#14242B]/72" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold !text-white mb-6 tracking-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.72)]">
              Meet <span className="!text-white">Maggie Blank</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white max-w-2xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              {copy.hero.subheadline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Advisory Section */}
      <Section id="professional" background="gradient" className="!bg-[#F7F5F0]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#A4813A] mb-4">A higher-touch approach to financing</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#26363D] mb-8">Mortgage guidance built around your life.</h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6 text-base sm:text-lg leading-relaxed text-[#43545C]">
              <p>For more than 15 years, I&apos;ve helped individuals and families navigate home financing with confidence.</p>
              <p>My role goes far beyond quoting an interest rate or processing a mortgage. As a Mortgage Advisor with Synovus Bank, I work with buyers throughout the Lowcountry, with particular expertise in physician mortgages, luxury and private wealth lending, and construction financing.</p>
              <p>Whether you&apos;re purchasing your first home, relocating for a new medical position, or building a custom home, I provide a hands-on, highly responsive experience from our first conversation through closing.</p>
            </div>

            <div className="mt-14 sm:mt-16">
              <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#A4813A] mb-3">What you can expect when you work with me</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#26363D]">Clear strategy. Thoughtful guidance. A seamless experience.</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {copy.expectations.map((expectation, index) => {
                  const Icon = expectation.icon;
                  return (
                    <motion.div
                      key={expectation.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06, duration: 0.45 }}
                    >
                      <GlassCard hover solidWhite darkText className="h-full border border-[#D7B36A]/15 shadow-[0_12px_28px_rgba(31,46,53,0.08)]">
                        <div className="w-11 h-11 rounded-xl bg-[#526E7A]/10 flex items-center justify-center mb-5">
                          <Icon className="w-5 h-5 text-[#526E7A]" />
                        </div>
                        <h4 className="text-lg font-semibold text-[#26363D] mb-2">{expectation.title}</h4>
                        <p className="text-sm leading-relaxed text-[#5A6970]">{expectation.text}</p>
                      </GlassCard>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-12 sm:mt-16 border-l-2 border-[#D7B36A] pl-5 sm:pl-7">
              <p className="text-xl sm:text-2xl font-serif font-semibold leading-snug text-[#314850]">My goal is simple: make the mortgage process easier, more personal, and more strategic, so you can focus on the life you&apos;re building beyond the closing table.</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Lowcountry Lifestyle Section */}
      <Section id="lowcountry-life" background="dark" className="!bg-[#1F2E35]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#E1C57E] mb-4">Lowcountry roots</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-7">More than mortgages.<br />This is home.</h2>
              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-slate-100">
                <p>The Lowcountry isn&apos;t simply the market I serve. It&apos;s the community my family and I call home. I&apos;ve been a resident for more than 20 years.</p>
                <p>Outside of mortgage banking, I&apos;m a wife and mom, and my family is at the center of everything I do. Much of our time is spent outdoors, enjoying the lifestyle that makes this part of South Carolina so special—from horses to boating and exploring everything the Lowcountry has to offer.</p>
                <p>Being part of this community gives me a perspective that goes beyond financing homes. When someone moves to the Lowcountry, they&apos;re not simply choosing a house. They&apos;re choosing a community, schools, neighborhoods, activities, friendships, and a lifestyle for their family.</p>
                <p>That is especially important when I work with physicians relocating to the area. I want to be more than the person handling your mortgage. I want to be your local resource and connection, helping introduce clients to the communities, professionals, Realtors, schools, and resources that make their transition easier.</p>
                <p>My clients often become friends, neighbors, and members of the same community where I&apos;m raising my own family. That&apos;s one of the reasons every relationship matters so much to me.</p>
              </div>
              <p className="mt-8 sm:mt-10 text-xl sm:text-2xl font-serif font-semibold leading-snug text-[#E1C57E]">For me, helping someone finance a home isn&apos;t just a transaction. It&apos;s helping them begin their next chapter in a place I&apos;m proud to call home.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-4 sm:gap-5"
            >
              <figure className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <Image src="/IMG_1750.jpg" alt="Maggie&apos;s children enjoying the Lowcountry outdoors" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-center" />
              </figure>
              <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <Image src="/IMG_4567.jpg" alt="Live oaks along a Lowcountry road" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </figure>
              <figure className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <Image src="/IMG_4395.JPG" alt="Lowcountry harbor and lighthouse" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </figure>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <TestimonialCarousel
        headline={copy.testimonials.headline}
        items={copy.testimonials.items}
      />

      {/* CTA Band Section */}
      <CTABand
        variant="luxury"
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
