'use client';

import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Shield } from 'lucide-react';

const agents = [
  {
    name: "Belmont Insurance Services",
    phone: "",
    address: "1 Westbury Park Way #101, Bluffton, SC 29910",
    specialties: ["Homeowners", "Flood Insurance", "Auto"]
  },
  {
    name: "Carolina Heritage Insurance",
    phone: "(843) 689-3030",
    address: "92 Main Street Suite C, Hilton Head, SC 29926",
    specialties: ["Homeowners", "Flood Insurance", "Auto"]
  },
  {
    name: "Gallagher Insurance",
    phone: "(843) 706-3006",
    address: "6 Johnston Way, Bluffton, SC 29910",
    specialties: ["Business Insurance", "Homeowners", "Specialty"]
  },
  {
    name: "Hilton Head Insurance & Brokerage",
    phone: "(843) 252-0840",
    address: "55 New Orleans Rd Suite 203, Hilton Head, SC 29928",
    specialties: ["Coastal Insurance", "Flood", "Wind"]
  },
  {
    name: "Kinghorn Insurance",
    phone: "(843) 837-3911",
    address: "4 Thurmond Way, Bluffton, SC 29910",
    specialties: ["Homeowners", "Commercial", "Flood"]
  },
  {
    name: "State Farm Insurance",
    phone: "(843) 836-9900",
    address: "152 State Street Suite 102, Bluffton, SC 29910",
    specialties: ["Homeowners", "Life Insurance", "Business"]
  }
];

export default function InsurancePage() {
  return (
    <>
      <Section background="default" backgroundImage="https://raw.githubusercontent.com/Blank-bluffton/maggie-blank-website/main/public/IMG_4570.JPG" className="relative after:absolute after:inset-0 after:bg-black/60 after:-z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Trusted Insurance Agents
          </h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            We work with experienced insurance agents throughout the Lowcountry to protect your home and investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {agents.map((agent, index) => (
            <GlassCard key={index} solidWhite hover delay={index * 0.1}>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{agent.name}</h3>
              <div className="space-y-3">
                {agent.phone && (
                  <div className="flex items-center gap-3 text-gray-800">
                    <Phone className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <span>{agent.phone}</span>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-800">
                  <MapPin className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                  <span>{agent.address}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-800 mb-2">Specialties:</p>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties?.map((specialty, i) => (
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

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Protect Your Investment
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            Living in the Lowcountry means understanding flood, wind, and coastal insurance. We connect you with agents who know the area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <GlassCard solidWhite hover className="border-cyan-500/20 hover:border-cyan-500/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Flood Insurance</h3>
                <p className="text-cyan-400 text-sm">Required in many zones</p>
              </div>
            </div>
            <p className="text-white">
              Properties in AE and VE flood zones require flood insurance. We'll help you understand your options and costs.
            </p>
          </GlassCard>

          <GlassCard solidWhite hover className="border-blue-900/20 hover:border-blue-900/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Homeowners Insurance</h3>
                <p className="text-blue-800 text-sm">Standard coverage</p>
              </div>
            </div>
            <p className="text-white">
              Protect your home and belongings with comprehensive coverage tailored to coastal living.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-800 mb-6">
            Need insurance recommendations for your new home?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-gray-800 font-semibold rounded-lg transition-colors"
          >
            Get Recommendations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
