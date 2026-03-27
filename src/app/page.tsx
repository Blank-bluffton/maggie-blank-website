'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import ProcessTimeline from '@/components/ProcessTimeline';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle2, Stethoscope, FileText, MapPin, Award, Download } from 'lucide-react';

// Homepage copy
const copy = {
  hero: {
    headline: "Strategic Mortgage Guidance for Physicians Moving to the Lowcountry",
    subheadline: "From your first offer to closing day, experience a seamless, high-touch approach to financing your move to the Lowcountry — built entirely around your career, timeline, and financial strategy.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Explore Loan Options",
    ctaSecondaryLink: "/loan-solutions",
    trustBullets: [],
    microProof: "Maggie has helped Lowcountry families finance over $250M in homes"
  },

  whyMaggie: {
    headline: "The intelligent choice. The calm expert. The Lowcountry insider.",
    subhead: "You're not looking for someone to print paperwork. You need a partner who understands your profession, your goals, and the local market.",
    features: [
      {
        title: "Physician Loan Specialist",
        description: "Physicians face unique challenges — student debt, residency gaps, contract employment. Maggie specializes in navigating complex income scenarios that other lenders struggle with.",
        icon: Stethoscope
      },
      {
        title: "Lowcountry Market Authority",
        description: "Bluffton. Hilton Head. Beaufort. Okatie. Every community has nuances — flood zones, HOA dynamics, coastal insurance. Maggie knows the local terrain.",
        icon: MapPin
      },
      {
        title: "White-Glove Process",
        description: "From pre-approval to closing, you'll work directly with Maggie. No call centers. No revolving loan officers. Just responsive, informed guidance.",
        icon: Award
      }
    ]
  },

  loanSolutions: {
    headline: "Financing tailored to how you live.",
    cards: [
      {
        title: "Physician Loans",
        description: "Up to 100% financing for doctors with deferred debt. No PMI. Flexible underwriting.",
        link: "/physician-loans",
        linkText: "Learn More"
      },
      {
        title: "Private Wealth Mortgages",
        description: "Jumbo loans and portfolio lending for high-net-worth clients. Custom financing solutions for luxury properties.",
        link: "/private-wealth",
        linkText: "Learn More"
      },
      {
        title: "Conventional Loans",
        description: "Competitive rates for qualified buyers with strong credit and down payment.",
        link: "/conventional",
        linkText: "Learn More"
      },
      {
        title: "Refinance",
        description: "Rate and term, cash-out, or streamline — find the right refinancing strategy.",
        link: "/refinance",
        linkText: "Learn More"
      },
      {
        title: "Construction/Perm",
        description: "Finance your build from foundation to finish with one seamless loan.",
        link: "/construction",
        linkText: "Learn More"
      }
    ]
  },

  physicianSpotlight: {
    headline: "Physician loans built for how doctors actually earn.",
    body: "Between medical school debt, residency stipends, and attending contracts, physicians face lending scenarios that require a specialist — not a generic loan officer.\n\nMaggie Blank understands:\n- Deferred student debt can be treated differently\n- Employment contracts as qualifying income\n- Loan programs with 0% down and no PMI\n- Entity structuring for high-earning specialists",
    cta: "Physician Loan Consultation",
    ctaLink: "/physician-loans"
  },

  lowcountryMarket: {
    headline: "Local market. Local expertise. Local results.",
    body: "The Lowcountry isn't just a market — it's a lifestyle. From the marsh views of Bluffton to the golf communities of Hilton Head, buying here means understanding flood zones, coastal insurance, HOA dynamics, and community character.\n\nMaggie lives and lends here. She knows which builders to trust, which neighborhoods hold value, and how to structure deals that close on time.",
    areas: [
      "Bluffton",
      "Hilton Head Island",
      "Okatie",
      "Beaufort",
      "Hardeeville",
      "Jasper / Beaufort County corridor"
    ]
  },

  testimonials: {
    headline: "What realtors and clients say.",
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
      }
    ]
  },

  ctaBand: {
    headline: "Ready to talk financing?",
    subhead: "Let's figure out the right mortgage strategy for your goals. No pressure. Just conversation.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "https://www.synovus.com/maggieblank"
  }
};

export default function Home() {
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={copy.hero.headline}
        subheadline={copy.hero.subheadline}
        ctaPrimary={copy.hero.ctaPrimary}
        ctaPrimaryLink={copy.hero.ctaPrimaryLink}
        ctaSecondary={copy.hero.ctaSecondary}
        ctaSecondaryLink={copy.hero.ctaSecondaryLink}
        trustBullets={copy.hero.trustBullets}
        microProof={copy.hero.microProof}
        variant="full"
        backgroundImage="/IMG_4408.JPG"
        customCta={
          <button
            onClick={() => setIsGuideModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            <Download className="w-5 h-5" />
            Download Free Guide
          </button>
        }
      />

      {/* Why Maggie Section */}
      <Section id="why-maggie" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.whyMaggie.headline}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {copy.whyMaggie.subhead}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {copy.whyMaggie.features.map((feature, index) => (
            <GlassCard key={index} solidWhite darkText hover delay={index * 0.1}>
              <feature.icon className="w-10 h-10 text-cyan-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Loan Solutions Section */}
      <Section id="loan-solutions">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            {copy.loanSolutions.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {copy.loanSolutions.cards.map((card, index) => (
            <GlassCard key={index} solidWhite darkText hover delay={index * 0.1}>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{card.description}</p>
              <Link
                href={card.link}
                className="inline-flex items-center gap-1 text-cyan-600 hover:text-cyan-700 transition-colors text-sm font-medium"
              >
                {card.linkText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Physician Spotlight Section */}
      <Section id="physician-spotlight" background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {copy.physicianSpotlight.headline}
            </h2>
            <div className="text-white space-y-4 leading-relaxed">
              {copy.physicianSpotlight.body.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={copy.physicianSpotlight.ctaLink}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-medium rounded-xl mt-8 hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              {copy.physicianSpotlight.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <GlassCard hover className="bg-gradient-to-br from-cyan-600 to-teal-700 border-cyan-400">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/30 flex items-center justify-center">
                  <Stethoscope className="w-8 h-8 text-cyan-200" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Physician Loan Benefits</h3>
                  <p className="text-cyan-100 text-sm">Tailored for medical professionals</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {[
                  "0% down payment options",
                  "No PMI required",
                  "Deferred student debt handled",
                  "Contract employment accepted",
                  "Entity structuring available"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        </div>
      </Section>

      {/* Lowcountry Market Section */}
      <Section id="lowcountry" background="gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <GlassCard solidWhite darkText hover className="overflow-hidden">
            <img 
              src="/IMG_4402.jpg" 
              alt="Lowcountry landscape" 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-gray-800 font-semibold text-lg mb-4">Communities We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {copy.lowcountryMarket.areas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  {area}
                </div>
              ))}
            </div>
          </GlassCard>
          
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {copy.lowcountryMarket.headline}
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed">
              {copy.lowcountryMarket.body.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
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
        headline={copy.ctaBand.headline}
        subhead={copy.ctaBand.subhead}
        ctaPrimary={copy.ctaBand.ctaPrimary}
        ctaPrimaryLink={copy.ctaBand.ctaPrimaryLink}
        ctaSecondary={copy.ctaBand.ctaSecondary}
        ctaSecondaryLink={copy.ctaBand.ctaSecondaryLink}
      />

      {/* Lead Capture Modal for Free Guide */}
      <LeadCaptureModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
        downloadUrl="/Lowcountry Physician Relocation Guide.pdf"
        guideName="Lowcountry Physician Relocation Guide"
      />
    </>
  );
}
