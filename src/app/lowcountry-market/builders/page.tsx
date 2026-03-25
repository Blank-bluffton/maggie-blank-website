'use client';

import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Building2, Phone, Globe } from 'lucide-react';

const builders = [
  { 
    name: "Esposito Construction",
    phone: "843-896-2316",
    website: "https://www.espositoconstructioninc.com"
  },
  { 
    name: "AR Homes",
    phone: "843-757-2300",
    website: "https://www.arhomes.com"
  },
  { 
    name: "Compass Studio",
    phone: "440-467-5848",
    website: "https://www.compassstudio.com"
  },
  { 
    name: "Front Light Building Company",
    phone: "843-380-4800",
    website: "https://www.frontlightbuildingco.com"
  },
  { 
    name: "Jacoby and Sons",
    phone: "843-707-1501",
    website: "https://www.jacobyandsons.com"
  },
  { 
    name: "VanGeison Construction",
    phone: "843-837-6410",
    website: "https://www.vangeisonconstruction.com"
  }
];

export default function BuildersPage() {
  return (
    <>
      <Section background="default" backgroundImage="/IMG_4567.jpg">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted Local Builders
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            We partner with experienced builders throughout the Lowcountry to help you design and build your dream home from the ground up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {builders.map((builder, index) => (
            <GlassCard key={index} solidWhite hover delay={index * 0.05}>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center mb-4">
                  <Building2 className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{builder.name}</h3>
                {builder.phone && (
                  <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
                    <Phone className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <span>{builder.phone}</span>
                  </div>
                )}
                {builder.website && (
                  <div className="flex items-center gap-2 text-gray-700 text-sm">
                    <Globe className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <a href={builder.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-800 mb-6">
            Ready to start building?
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
