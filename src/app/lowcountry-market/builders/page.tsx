'use client';

import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';

const builders = [
  { name: "Esposito Construction" },
  { name: "AR Homes" },
  { name: "Compass Studio" },
  { name: "Front Light Building Company" },
  { name: "Jacoby and Sons" },
  { name: "VanGeison Construction" }
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
                <h3 className="text-xl font-semibold text-gray-800">{builder.name}</h3>
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
