'use client';

import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

const attorneys = [
  {
    name: "Bannon Law Group",
    phone: "(843) 815-4505",
    address: "10 Westbury Park Way Unit A, Bluffton, SC 29910",
    specialties: ["Residential Closings", "Commercial Real Estate", "Title Insurance"]
  },
  {
    name: "Hale & Hale",
    phone: "(843) 837-3000",
    address: "1533 Fording Island Rd Suite 294, Hilton Head, SC 29926",
    specialties: ["Residential Closings", "Refinance Closings", "Contract Review"]
  },
  {
    name: "Liberty Oak Law Firm",
    phone: "(843) 671-5550",
    address: "71 Lighthouse Rd # 230, Hilton Head, SC 29928",
    specialties: ["Real Estate Closings", "Title Clearance", "Entity Transactions"]
  },
  {
    name: "Mikkelson Law Firm",
    phone: "(843) 757-9330",
    address: "214 Bluffton Rd, Bluffton, SC 29910",
    specialties: ["Real Estate Law", "Closings", "Title Searches"]
  }
];

export default function ClosingAttorneysPage() {
  return (
    <>
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
            <GlassCard key={index} solidWhite hover delay={index * 0.1}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{attorney.name}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-800">
                  <Phone className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>{attorney.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800">
                  <MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>{attorney.address}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-800 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-2">
                  {attorney.specialties.map((specialty, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-600 text-xs rounded-full">
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
          <p className="text-gray-800 mb-6">
            Need a closing attorney recommendation?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-800 font-semibold rounded-lg transition-colors"
            >
            Let's Connect <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
