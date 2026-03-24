'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Building2, Award } from 'lucide-react';

export default function SchoolsPage() {
  const privateSchools = [
    {
      name: "Hilton Head Preparatory School",
      description: "College-preparatory school offering PK-12 education with rigorous academics, arts, and athletics. Strong college placement record.",
      grades: "PK-12",
      type: "College Preparatory",
      link: "https://www.hhprep.org"
    },
    {
      name: "Hilton Head Christian Academy",
      description: "Christian-based education serving PK-12 with academic excellence, spiritual growth, and character development.",
      grades: "PK-12",
      type: "Christian",
      link: "https://www.hhca.org"
    },
    {
      name: "John Paul II Catholic School",
      description: "Catholic college-preparatory school offering K-12 education with faith-based learning and academic excellence.",
      grades: "K-12",
      type: "Catholic",
      link: "https://www.johnpaul2school.org"
    },
    {
      name: "St. Francis Catholic School",
      description: "Faith-based education serving PK-8 with nurturing environment and strong academic foundation.",
      grades: "PK-8",
      type: "Catholic",
      link: "https://www.stfrancishhi.org"
    },
    {
      name: "May River Montessori School",
      description: "Authentic Montessori education serving ages 3-12 with prepared environment and mixed-age classrooms.",
      grades: "Ages 3-12",
      type: "Montessori",
      link: "https://www.mayrivermontessori.com"
    },
    {
      name: "Cross Schools",
      description: "Christian classical education serving PK-8 with rigorous academics and spiritual formation.",
      grades: "PK-8",
      type: "Christian Classical",
      link: "https://www.crossschools.org"
    },
    {
      name: "Heritage Academy",
      description: "College-preparatory Christian school serving K-12 with academic excellence and biblical worldview.",
      grades: "K-12",
      type: "Christian College Preparatory",
      link: "https://www.heritageacademysc.org"
    }
  ];

  const publicSchoolRegions = [
    {
      region: "Bluffton Area Schools",
      schools: [
        {
          name: "Bluffton High School",
          type: "High School",
          description: "Modern high school serving Bluffton with strong academics, athletics, and arts programs.",
          link: "https://www.blufftonhigh.org"
        },
        {
          name: "H.E. McCracken Middle School",
          type: "Middle School",
          description: "Serving middle school students in the Bluffton area with comprehensive curriculum.",
          link: "https://www.blufftonmiddle.org"
        },
        {
          name: "Michael C. Riley Elementary",
          type: "Elementary",
          description: "Award-winning elementary school serving the Bluffton community.",
          link: "https://www.bcescowboy.org"
        },
        {
          name: "Pritchardville Elementary",
          type: "Elementary",
          description: "Elementary school serving the Pritchardville and Bluffton areas.",
          link: "https://www.presbulldogs.org"
        }
      ]
    },
    {
      region: "Hilton Head Area Schools",
      schools: [
        {
          name: "Hilton Head High School",
          type: "High School",
          description: "Premier high school on Hilton Head Island with strong academic and athletic programs.",
          link: "https://www.hiltonheadhigh.org"
        },
        {
          name: "Hilton Head Island Middle School",
          type: "Middle School",
          description: "Serving middle school students on Hilton Head Island.",
          link: "https://www.hhimschool.org"
        },
        {
          name: "Hilton Head Elementary",
          type: "Elementary",
          description: "Elementary school serving Hilton Head Island with excellent educational programs.",
          link: "https://www.hhesc.org"
        }
      ]
    }
  ];

  return (
    <>
      <Hero
        headline="Lowcountry Schools"
        subheadline="Explore educational options from private schools to public districts across Bluffton, Hilton Head, and Beaufort."
        ctaPrimary="Learn More"
        ctaPrimaryLink="#private-schools"
        variant="compact"
      />

      {/* Private Schools */}
      <Section id="private-schools" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Private Schools in the Lowcountry
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            The Lowcountry offers excellent private education options for families. Here are some of the top schools in the area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {privateSchools.map((school, index) => (
            <GlassCard 
              key={school.name}
              hover={true}
              delay={index * 0.05}
              className="border-purple-500/20 hover:border-purple-500/50 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{school.name}</h3>
                  <p className="text-purple-400 text-sm">{school.grades}</p>
                </div>
              </div>
              <p className="text-gray-100 text-sm mb-4 flex-grow">{school.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-white/10 rounded text-xs text-gray-100">
                  {school.type}
                </span>
              </div>
              {school.link && (
                <a 
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Visit Website <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Public Schools */}
      <Section id="public-schools" background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Public Schools in the Lowcountry
          </h2>
          <p className="text-gray-100 max-w-2xl mx-auto">
            The Lowcountry has excellent public school options. Here are the schools serving Bluffton and Hilton Head areas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publicSchoolRegions.map((region, regionIndex) => (
            <GlassCard 
              key={region.region}
              hover={false}
              className="border-cyan-500/20"
            >
              <h3 className="text-xl font-semibold text-white mb-6">{region.region}</h3>
              <div className="space-y-4">
                {region.schools.map((school, index) => (
                  <div key={school.name} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-medium">{school.name}</h4>
                        <span className="px-2 py-0.5 bg-cyan-500/20 rounded text-xs text-cyan-400">
                          {school.type}
                        </span>
                      </div>
                      <p className="text-gray-100 text-sm">{school.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <div className="text-center">
          <p className="text-gray-100 mb-6">
            Have questions about schools in a specific neighborhood?
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