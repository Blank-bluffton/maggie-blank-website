'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Wrench, Truck, Home, ClipboardCheck } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      name: "Home Inspectors",
      description: "Thorough inspections for peace of mind. We work with certified inspectors who know the Lowcountry's specific needs.",
      icon: ClipboardCheck,
      color: "cyan"
    },
    {
      name: "Contractors & Renovators",
      description: "From minor repairs to full renovations, connect with trusted local contractors.",
      icon: Wrench,
      color: "blue"
    },
    {
      name: "Moving Services",
      description: "Reliable local movers to help you get settled in your new Lowcountry home.",
      icon: Truck,
      color: "cyan"
    },
    {
      name: "Landscaping & Pool Companies",
      description: "Transform your outdoor space with local experts who know coastal landscaping.",
      icon: Home,
      color: "blue"
    }
  ];

  return (
    <>
      <Hero
        headline="Local Services"
        subheadline="Trusted partners for your home buying journey — from inspections to renovations and beyond."
        ctaPrimary="Get Recommendations"
        ctaPrimaryLink="/contact"
        variant="compact"
      />

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Services You Can Trust
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Buying a home involves more than just the mortgage. We've built a network of trusted local professionals to help you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <GlassCard 
              key={service.name}
              hover={true}
              delay={index * 0.05}
              className={`border-${service.color}-500/20 hover:border-${service.color}-500/50 flex flex-col`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-${service.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-400`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                  <p className={`text-${service.color}-400 text-sm`}>Local experts</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 text-${service.color}-400 hover:text-${service.color}-300 font-medium`}
              >
                Get a recommendation <ArrowRight className="w-4 h-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            Need a recommendation for a specific service?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}