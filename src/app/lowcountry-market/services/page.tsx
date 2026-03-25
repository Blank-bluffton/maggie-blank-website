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
    phone: "843-757-0025",
    email: "",
    website: "https://boltelectricinc.com"
  },
  {
    name: "Ace Roofing Services",
    category: "Roofing",
    phone: "843-368-6576",
    email: "",
    website: "https://www.aceroofingservice.com"
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
    phone: "843-304-0329",
    email: "",
    website: "https://www.broomstoroses.com"
  },
  {
    name: "Cruise Planners",
    category: "Travel",
    phone: "636-492-1146",
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
    phone: "201-803-4033",
    email: "",
    website: "https://www.nobspowerwash.com"
  },
  {
    name: "Top Quality Flooring",
    category: "Flooring",
    phone: "843-540-4324",
    email: "",
    website: ""
  },
  {
    name: "Pinnacle Heating and Air",
    category: "HVAC",
    phone: "843-271-3780",
    email: "",
    website: "https://www.pinnaclehvacsc.com"
  },
  {
    name: "Patrick Chester CPA",
    category: "Accounting",
    phone: "843-271-6788",
    email: "",
    website: "https://www.chestertax.com"
  },
  {
    name: "Sage Financial Planning",
    category: "Financial",
    phone: "843-301-0074",
    email: "",
    website: "https://www.sagefinancialplanning.com"
  },
  {
    name: "Synovus Bank",
    category: "Banking",
    phone: "888-796-6887",
    email: "",
    website: "https://www.synovus.com"
  },
  {
    name: "Pinnacle Bank",
    category: "Banking",
    phone: "800-264-3613",
    email: "",
    website: "https://pnfp.com"
  },
  {
    name: "Garden of Eden Landscaping",
    category: "Landscaping",
    phone: "843-962-0784",
    email: "",
    website: "https://www.gardenofedenearthworks.com"
  },
  {
    name: "A Touch of Class Painting",
    category: "Painting",
    phone: "540-842-0534",
    email: "",
    website: ""
  },
  {
    name: "Mullen Care Consultants",
    category: "Senior Care",
    phone: "404-917-6277",
    email: "",
    website: "https://www.mullencareconsultants.com"
  },
  {
    name: "Play Home Technology",
    category: "Smart Home",
    phone: "843-815-4292",
    email: "",
    website: "https://www.playhometechnology.com"
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
