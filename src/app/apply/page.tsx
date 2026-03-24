import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Home, RefreshCw, Shield, Lock, CheckCircle2 } from 'lucide-react';

const copy = {
  hero: {
    headline: "Begin Your Mortgage Journey",
    subheadline: "Starting your mortgage application is simpler than you think. Whether you're buying your first home or refinancing to save, we're here to guide you through every step — with clarity, transparency, and personalized service.",
  },
  process: {
    headline: "How the Application Works",
    steps: [
      {
        title: "Choose Your Path",
        description: "Select whether you're purchasing a new home or refinancing your current mortgage."
      },
      {
        title: "Share Your Info",
        description: "Fill out a brief pre-qualification form. We gather what we need to understand your financial picture."
      },
      {
        title: "Get Pre-Approved",
        description: "Receive a written pre-approval letter within 24-48 hours. Know exactly what you can afford."
      },
      {
        title: "Close with Confidence",
        description: "From underwriting to signing, we keep you informed. Smooth closes, every time."
      }
    ]
  },
  ctas: {
    purchase: {
      title: "Purchase a Home",
      description: "Ready to buy? Let's find the right mortgage for your new home.",
      button: "Start Purchase Application",
      icon: Home
    },
    refinance: {
      title: "Refinance",
      description: "Lower your rate, shorten your term, or access your equity.",
      button: "Start Refinance Application",
      icon: RefreshCw
    },
    consult: {
      title: "Not Sure? Let's Talk",
      description: "Unsure which path is right for you? A quick conversation can help.",
      button: "Schedule a Consultation",
      icon: ArrowRight
    }
  },
  trust: {
    nmls: "NMLS #504377",
    secure: "Your information is encrypted and secure. We never share your data."
  }
};

export default function ApplyPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="gradient">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 tracking-tight">
            {copy.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {copy.hero.subheadline}
          </p>
        </div>
      </Section>

      {/* Process Steps */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            {copy.process.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.process.steps.map((step, index) => (
            <GlassCard key={index} hover delay={index * 0.1} darkText>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 border border-pink-300 mb-4">
                <span className="text-pink-600 font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* CTA Cards */}
      <Section background="dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Purchase CTA */}
          <GlassCard hover delay={0.1} className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mb-6">
              <copy.ctas.purchase.icon className="w-7 h-7 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{copy.ctas.purchase.title}</h3>
            <p className="text-white text-sm mb-6">{copy.ctas.purchase.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
            >
              {copy.ctas.purchase.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>

          {/* Refinance CTA */}
          <GlassCard hover delay={0.2} className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <copy.ctas.refinance.icon className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{copy.ctas.refinance.title}</h3>
            <p className="text-white text-sm mb-6">{copy.ctas.refinance.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              {copy.ctas.refinance.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>

          {/* Consultation CTA */}
          <GlassCard hover delay={0.3} className="relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-500/30 mb-6">
              <copy.ctas.consult.icon className="w-7 h-7 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{copy.ctas.consult.title}</h3>
            <p className="text-white text-sm mb-6">{copy.ctas.consult.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-pink-500/25 transition-all"
            >
              {copy.ctas.consult.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </GlassCard>
        </div>
      </Section>

      {/* Trust Elements */}
      <Section background="gradient">
        <GlassCard hover={false} darkText className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-cyan-600" />
              <span className="text-gray-700">{copy.trust.nmls}</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-6 h-6 text-purple-600" />
              <span className="text-gray-700">{copy.trust.secure}</span>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-700 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>No hard credit pull to start</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-600" />
                <span>Dedicated loan officer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600" />
                <span>Local closing team</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </Section>
    </>
  );
}
