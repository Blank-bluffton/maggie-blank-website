'use client';

import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, Globe } from 'lucide-react';

const services = [
  {
    name: "Sparklight Telecommunications",
    category: "Internet & Telecom",
    phone: "843-815-1600",
    email: "",
    website: "https://www.sparklight.com"
  },
  {
    name: "Bolt Electric",
    category: "Electrical",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Ace Roofing Services",
    category: "Roofing",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "GutterXperts",
    category: "Gutters",
    phone: "843-783-6816",
    email: "",
    website: "https://www.gutterxperts.biz"
  },
  {
    name: "Brooms & Roses Cleaning Services",
    category: "Cleaning",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Cruise Planners",
    category: "Travel",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Coastal Solutions Media",
    category: "Marketing",
    phone: "678-416-5997",
    email: "",
    website: "https://www.coastalsolutionsmedia.com"
  },
  {
    name: "Pivotal Restoration",
    category: "Restoration",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "No BS Powerwash",
    category: "Pressure Washing",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Top Quality Flooring",
    category: "Flooring",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Pinnacle Heating and Air",
    category: "HVAC",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Chester CPA PC",
    category: "Accounting",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Sage Financial Planning",
    category: "Financial",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Synovus Bank",
    category: "Banking",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Pinnacle Bank",
    category: "Banking",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Garden of Eden Landscaping",
    category: "Landscaping",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "A Touch of Class Painting - Henry Capdepon",
    category: "Painting",
    phone: "",
    email: "",
    website: ""
  },
  {
    name: "Mullen Care Consultants",
    category: "Healthcare",
    phone: "404-917-6277",
    email: "",
    website: "https://www.mullencareconsultants.com"
  }
];

export default function ServicesPage() {
  return (
    <>
      <Section background="default">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Trusted Local Experts
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We've built relationships with top service providers across the Lowcountry. Here are the experts we recommend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <GlassCard key={index} solidWhite hover delay={index * 0.05}>
              <span className="text-xs font-medium text-cyan-600 uppercase tracking-wider mb-2 block">
                {service.category}
              </span>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.name}</h3>
              <div className="space-y-2">
                {service.phone && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Phone className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <span>{service.phone}</span>
                  </div>
                )}
                {service.email && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Mail className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <a href={`mailto:${service.email}`} className="hover:text-cyan-600">{service.email}</a>
                  </div>
                )}
                {service.website && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Globe className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                    <a href={service.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600">
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
          <p className="text-gray-400 mb-6">
            Need a recommendation for a specific service?
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
