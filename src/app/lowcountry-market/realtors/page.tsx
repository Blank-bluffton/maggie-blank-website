'use client';

import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Users, MapPin, Phone, Mail } from 'lucide-react';

const realtors = [
  {
    name: "Charter One - Shelley and Gary Elliott",
    phone: "(770) 639-1174",
    address: "Hilton Head, SC",
    specialties: ["Residential", "Luxury Homes", "Investment"],
    email: "shelleyandgary@charteronerealty.com",
    website: "https://wesellthelowcountry.com"
  },
  {
    name: "Dunes Real Estate - Bill Kelly",
    phone: "(843) 816-0116",
    address: "Hilton Head, SC",
    specialties: ["Residential", "Investment Properties", "Luxury Homes"],
    website: "https://billk.dunesrealestate.com",
    email: "bill@billkellyrealestate.com"
  },
  {
    name: "Lowcountry Live Oak Realty - Jennifer Windley",
    phone: "(843) 384-1685",
    address: "Bluffton, SC",
    specialties: ["Residential", "New Construction", "Relocation"],
    email: "lowcountryjen@gmail.com",
    website: "https://lowcountryliveoak.com"
  },
  {
    name: "The Agency - Lorie Sauer",
    phone: "(912) 656-2969",
    address: "Hilton Head, SC",
    specialties: ["Residential", "Luxury Homes", "First-Time Buyers"],
    website: "https://loriesauer.com",
    email: "lorie.sauer@theagencyre.com"
  }
];

export default function RealtorsPage() {
  return (
    <>
      <Section background="default" backgroundImage="https://raw.githubusercontent.com/Blank-bluffton/maggie-blank-website/main/public/IMG_4565.JPG">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Trusted Realtors
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            We work with experienced real estate professionals throughout the Lowcountry to ensure smooth transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {realtors.map((realtor, index) => (
            <GlassCard key={index} hover={true} delay={index * 0.1}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{realtor.name}</h3>
              <div className="space-y-3">
                {realtor.phone && (
                  <div className="flex items-center gap-3 text-gray-800">
                    <Phone className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <span>{realtor.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-800">
                  <MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>{realtor.address}</span>
                </div>
                {realtor.email && (
                  <div className="flex items-center gap-3 text-gray-800">
                    <Mail className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <a href={`mailto:${realtor.email}`} className="hover:text-cyan-600">{realtor.email}</a>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-600 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {realtor.specialties.map((specialty, i) => (
                    <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-600 text-xs rounded-full">
                      {specialty}
                    </span>
                  ))}
                </div>
                {realtor.website && (
                  <a
                    href={realtor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-300 font-medium"
                  >
                    Visit Website <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Partner With Local Experts
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            We've built relationships with top realtors across Bluffton, Hilton Head, and Beaufort. They know the market, and we close together.
          </p>
        </div>

        <GlassCard hover={false} className="max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Work With a Trusted Partner</h3>
              <p className="text-white mb-4">
                Whether you're buying your first home or investing in a second property, our network of local realtors is here to guide you.
              </p>
              <ul className="space-y-2 text-white mb-6">
                <li>✓ Local market expertise</li>
                <li>✓ Neighborhood knowledge</li>
                <li>✓ Smooth transaction coordination</li>
                <li>✓ Trusted closing process</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-800 mb-6">
            Need a realtor recommendation?
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
