'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, FileText, MapPin, Phone, Mail } from 'lucide-react';

const attorneys = [
  {
    name: "Bannon Law Group",
    phone: "(843) 815-4505",
    address: "10 Westbury Park Way Unit A, Bluffton, SC 29910",
    specialties: ["Residential Closings", "Commercial Real Estate", "Title Insurance"]
  },
  {
    name: "Mikkelson Law Firm",
    phone: "(843) 757-9330",
    address: "214 Bluffton Rd, Bluffton, SC 29910",
    specialties: ["Real Estate Law", "Closings", "Title Searches"]
  },
  {
    name: "Hale & Hale",
    phone: "(843) 555-0303",
    address: "Bluffton, SC",
    specialties: ["Residential Closings", "Refinance Closings", "Contract Review"]
  },
  {
    name: "Liberty Oak Law Firm",
    phone: "(843) 555-0404",
    address: "Beaufort, SC",
    specialties: ["Real Estate Closings", "Title Clearance", "Entity Transactions"]
  }
];

export default function ClosingAttorneysPage() {
  return (
    <>
      <Hero
        headline="Closing Attorneys"
        subheadline="Trusted legal professionals to handle your real estate closing in the Lowcountry."
        ctaPrimary="Learn More"
        ctaPrimaryLink="/contact"
        variant="compact"
      />

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Smooth Closings, Every Time
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A strong closing team is essential. We work with experienced attorneys who ensure your transaction closes on time and without issues.
          </p>
        </div>

        <GlassCard hover={false} className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Why Closing Expertise Matters</h3>
              <p className="text-gray-400 mb-4">
                In South Carolina, attorneys handle real estate closings to ensure title clearance and legal compliance.
              </p>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li>✓ Title search & clearance</li>
                <li>✓ Contract review</li>
                <li>✓ Closing document preparation</li>
                <li>✓ Coordinate with all parties</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </Section>

      <Section background="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Trusted Closing Attorneys
          </h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            We work with these experienced attorneys throughout the Lowcountry to ensure smooth, hassle-free closings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {attorneys.map((attorney, index) => (
            <GlassCard key={index} hover={true} delay={index * 0.1}>
              <h3 className="text-xl font-semibold text-white mb-4">{attorney.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{attorney.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{attorney.address}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-500 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-2">
                  {attorney.specialties.map((specialty, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            Need a closing attorney recommendation?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
            >
            Let's Connect <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}