'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import FAQAccordion from '@/components/FAQAccordion';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { 
  MapPin, 
  Home, 
  Waves, 
  Shield, 
  Building2, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const copy = {
  hero: {
    headline: "Financing the Lowcountry lifestyle.",
    subheadline: "From marsh views to golf communities, buying in Bluffton, Hilton Head, and Beaufort County means understanding the local landscape. We do.",
    ctaPrimary: "Talk Local",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Explore Communities",
    ctaSecondaryLink: "#communities",
    trustBullets: [
      "Bluffton",
      "Hilton Head",
      "Beaufort",
      "Okatie"
    ]
  },

  marketOverview: {
    headline: "The Lowcountry market at a glance",
    subheadline: "The Lowcountry isn't just a market — it's a lifestyle. From the marsh views of Bluffton to the golf communities of Hilton Head, buying here means understanding flood zones, coastal insurance, HOA dynamics, and community character.",
    stats: [
      { value: "$500K-$1.2M", label: "Median Home Price" },
      { value: "2-4%", label: "Annual Appreciation" },
      { value: "30-45", label: "Days to Close" },
      { value: "95%", label: "On-Time Close Rate" }
    ]
  },

  communities: {
    headline: "Find your Lowcountry community",
    subheadline: "Each community has its own character, price points, and considerations. Here's what you need to know about the areas we serve.",
    list: [
      {
        name: "Bluffton",
        description: "The fastest-growing town in South Carolina. Marsh views, award-winning restaurants, and a charming historic district. Perfect for families and professionals seeking small-town charm with big-city amenities nearby.",
        priceRange: "$400K - $1.5M",
        highlights: ["Historic District", "May River", "Top Schools", "New Construction"],
        icon: Building2,
        link: "/lowcountry-market/neighborhoods"
      },
      {
        name: "Hilton Head Island",
        description: "World-class golf, pristine beaches, and resort-style living. A premier destination for second homes and retirees seeking an island lifestyle with world-class amenities.",
        priceRange: "$500K - $3M+",
        highlights: ["Beach Communities", "Golf Resorts", "Private Islands", "Marina Living"],
        icon: Waves,
        link: "/lowcountry-market/neighborhoods"
      },
      {
        name: "Beaufort",
        description: "Historic Southern charm meets waterfront living. Downtown Beaufort offers cobblestone streets, antebellum homes, and a vibrant cultural scene along the Intracoastal Waterway.",
        priceRange: "$350K - $1.2M",
        highlights: ["Historic Downtown", "Waterfront", "Arts & Culture", "Military Community"],
        icon: Home,
        link: "/lowcountry-market/beaufort"
      },
      {
        name: "Okatie / Hardeeville",
        description: "The growth corridor of the Lowcountry. New master-planned communities, golf resorts, and affordable new construction make this area ideal for first-time buyers and investors.",
        priceRange: "$300K - $800K",
        highlights: ["New Construction", "Golf Communities", "Affordable", "I-95 Access"],
        icon: MapPin,
        link: "/lowcountry-market/okatie"
      }
    ]
  },

  blufftonNeighborhoods: {
    headline: "Find Your Bluffton Neighborhood",
    subheadline: "Bluffton offers diverse communities from golf resorts to waterfront estates. Here's a breakdown of the neighborhoods and what makes each one unique.",
    neighborhoods: [
      {
        name: "Belfair",
        description: "Award-winning master-planned community with Greg Norman golf, tennis, and family amenities. Gated entry with diverse home styles.",
        priceRange: "$400K - $1.2M",
        highlights: ["Greg Norman Golf", "Tennis", "Family Friendly", "Gated"],
        icon: Award,
        link: "https://belfair1811.com"
      },
      {
        name: "Berkeley Hall",
        description: "Exclusive golf community with Tom Fazio courses, luxury amenities, and marsh-front properties. Lowcountry living at its finest.",
        priceRange: "$500K - $1.5M",
        highlights: ["Tom Fazio Golf", "Luxury", "Marsh Front", "Private"],
        icon: Building2,
        link: "https://www.berkeleyhallclub.com"
      },
      {
        name: "Colleton River",
        description: "Prestigious gated community with two championship golf courses, wetlands, and waterfront access. A retreat for discerning buyers.",
        priceRange: "$500K - $1.8M",
        highlights: ["Jack Nicklaus Golf", "Gated", "Waterfront", "Private"],
        icon: Building2,
        link: "https://www.colletonriverclub.com"
      },
      {
        name: "Hampton Hall",
        description: "Luxury master-planned community with Pete Dye golf, nature preserves, and high-end amenities. Gated entrance for privacy.",
        priceRange: "$450K - $1.3M",
        highlights: ["Pete Dye Golf", "Gated", "Luxury", "Nature Preserves"],
        icon: Award,
        link: "https://hamptonhallclubsc.com"
      },
      {
        name: "Hampton Lake",
        description: "Waterfront community with lake access, nature trails, and resort-style amenities. Perfect for families who love the outdoors.",
        priceRange: "$450K - $1M",
        highlights: ["Lake Access", "Nature Trails", "Family", "Resort Amenities"],
        icon: Waves,
        link: "https://hamptonlake.com"
      },
      {
        name: "Palmetto Bluff",
        description: "Luxury resort-style community with marsh views, golf, and world-class amenities. Top-tier custom homes in a private preserve setting.",
        priceRange: "$600K - $2M+",
        highlights: ["Luxury Homes", "Golf & Spa", "Private", "Marsh Views"],
        icon: Building2,
        link: "https://www.palmettobluff.com"
      },
      {
        name: "Rose Dhu Creek",
        description: "Charming neighborhood with marsh views, community dock, and proximity to Historic Bluffton. Peaceful Lowcountry living.",
        priceRange: "$350K - $750K",
        highlights: ["Marsh Views", "Community Dock", "Historic Nearby", "Quiet"],
        icon: Home
      },
      {
        name: "Rose Hill",
        description: "Established community with Greg Norman golf course, mature landscaping, and family-friendly atmosphere. Wide range of home styles.",
        priceRange: "$400K - $1M",
        highlights: ["Greg Norman Golf", "Established", "Family Friendly", "Amenities"],
        icon: Building2
      }
    ]
  },

  hiltonHeadNeighborhoods: {
    headline: "Find Your Hilton Head Neighborhood",
    subheadline: "Hilton Head Island offers world-class resort living with diverse communities. Here's a breakdown of the neighborhoods and what makes each one unique.",
    neighborhoods: [
      {
        name: "Hilton Head Plantation",
        description: "Large gated community with multiple golf courses, marsh views, and diverse home options. Family-friendly with extensive amenities.",
        priceRange: "$400K - $1.5M",
        highlights: ["Multiple Golf", "Marsh Views", "Gated", "Family Friendly"],
        icon: Building2,
        link: "https://www.hiltonheadplantation.com"
      },
      {
        name: "Indigo Run",
        description: "Private gated community with golf and luxury homes. Serene setting with top-tier amenities.",
        priceRange: "$450K - $1.5M",
        highlights: ["Gated", "Golf", "Luxury Homes", "Private"],
        icon: Building2,
        link: "https://invitedclubs.com"
      },
      {
        name: "Long Cove",
        description: "Exclusive gated marsh-front community with prestigious tennis and golf. One of Hilton Head's most desirable addresses.",
        priceRange: "$500K - $2M",
        highlights: ["Marsh Front", "Tennis", "Gated", "Private"],
        icon: Award,
        link: "https://www.longcoveclub.com"
      },
      {
        name: "Moss Creek",
        description: "Established gated community with marsh views, golf course, and private amenities. Quiet Lowcountry living with easy access to Hilton Head.",
        priceRange: "$350K - $900K",
        highlights: ["Marsh Views", "Golf", "Gated", "Established"],
        icon: Building2,
        link: "https://www.mosscreek-hiltonhead.com"
      },
      {
        name: "Palmetto Dunes",
        description: "Premier oceanfront resort with three golf courses, tennis center, and beach access. Perfect for families and golf enthusiasts.",
        priceRange: "$500K - $2.5M",
        highlights: ["Oceanfront", "3 Golf Courses", "Tennis", "Beach Access"],
        icon: Waves,
        link: "https://www.palmettodunes.com"
      },
      {
        name: "Port Royal",
        description: "Historic plantation community with beachfront, golf, and tennis. Prestigious addresses with ood Southern charm.",
        priceRange: "$400K - $2M",
        highlights: ["Beachfront", "Golf", "Tennis", "Historic"],
        icon: Award
      },
      {
        name: "Sea Pines",
        description: "Iconic gated resort community with Harbour Town, iconic lighthouse, and Pete Dye golf. Beachside living with world-class amenities.",
        priceRange: "$600K - $3M+",
        highlights: ["Harbour Town", "Pete Dye Golf", "Beach Access", "Gated"],
        icon: Waves,
        link: "https://www.seapines.com"
      },
      {
        name: "Wexford",
        description: "Upscale gated community with harborfront homes, Ernie Els golf, and eccess to intracoastal waterway. Elegant Lowcountry living.",
        priceRange: "$500K - $2.5M",
        highlights: ["Harbor Front", "Ernie Els Golf", "Gated", "Intracoastal"],
        icon: Waves,
        link: "https://www.wexfordhiltonhead.com"
      },
      {
        name: "Windmill Harbour",
        description: "Unique waterfront community with private marina, sailing, and golf. Distinctive neighborhood with deep water access.",
        priceRange: "$400K - $1.5M",
        highlights: ["Private Marina", "Sailing", "Golf", "Deep Water"],
        icon: Waves,
        link: "https://www.windmillharbour.org"
      }
    ]
  },

  privateSchools: {
    headline: "Private Schools in the Lowcountry",
    subheadline: "The Lowcountry offers excellent private education options for families. Here are some of the top schools in the area.",
    schools: [
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
    ]
  },

  publicSchools: {
    headline: "Public Schools in the Lowcountry",
    subheadline: "The Lowcountry has excellent public school options. Here are the schools serving Bluffton and Hilton Head areas.",
    regions: [
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
    ]
  },

  lifestyle: {
    headline: "Lowcountry Lifestyle",
    subheadline: "Experience the best of Lowcountry living. From world-class golf to scenic nature trails, here's what makes our area special.",
    categories: [
      {
        name: "Golf",
        description: "World-class golf courses designed by legendary architects including Pete Dye, Jack Nicklaus, and Tom Fazio.",
        icon: Award,
        courses: [
          { name: "Atlantic Dunes", link: "https://www.palmettodunes.com/golf/atlantic-dunes" },
          { name: "Colleton River Club", link: "https://www.colletonriverclub.com" },
          { name: "Golden Bear Golf Club at Indigo Run", link: "https://invitedclubs.com" },
          { name: "Harbour Town Golf Links", link: "https://www.seapines.com/golf" },
          { name: "Heron Point by Pete Dye", link: "https://www.palmettodunes.com/golf/heron-point" },
          { name: "Long Cove Golf Club", link: "https://www.longcoveclub.com" },
          { name: "May River Golf Club at Palmetto Bluff", link: "https://www.palmettobluff.com/golf" },
          { name: "Robert Trent Jones Oceanfront Course", link: "https://www.palmettodunes.com/golf/robert-trent-jones" },
          { name: "Sea Pines Country Club", link: "https://www.seapines.com/golf/sea-pines-country-club" },
          { name: "Wexford Golf Club", link: "https://www.wexfordhiltonhead.com" }
        ]
      },
      {
        name: "Dining",
        description: "Award-winning restaurants featuring fresh local seafood and Southern cuisine throughout Bluffton and Hilton Head.",
        icon: Award,
        restaurants: [
          { name: "Bluffton Room", link: "https://www.blufftonroom.com" },
          { name: "Bowdie's Chophouse", link: "https://bowdies.com" },
          { name: "Chez George", link: "https://www.chezgeorge.com" },
          { name: "Ela's on the Water", link: "https://www.elasonthewater.com" },
          { name: "FARM", link: "https://www.farmbluffton.com" },
          { name: "Michael Anthony's", link: "https://www.michaelanthonyscookbook.com" },
          { name: "OMBRA", link: "https://www.ombrarestaurant.com" },
          { name: "Okan", link: "https://www.okandining.com" },
          { name: "River House Palmetto Bluff", link: "https://www.palmettobluff.com/dining/river-house" },
          { name: "Sage Room", link: "https://www.therageroom.com" }
        ]
      },
      {
        name: "Nature & Trails",
        description: "Explore marsh walks, nature preserves, and scenic trails throughout the Lowcountry.",
        icon: Award
      },
      {
        name: "Water Activities",
        description: "Boating, fishing, kayaking, and paddleboarding in our pristine waterways and marshes.",
        icon: Award
      },
      {
        name: "Arts & Culture",
        description: "Art galleries, live theater, music festivals, and cultural events year-round.",
        icon: Award,
        link: "https://www.artshhi.com"
      },
      {
        name: "Shopping",
        description: "Unique boutiques, outlet malls, and local artisan shops in Historic Bluffton and beyond.",
        icon: Award
      }
    ],
    link: "https://www.locallifesc.com"
  },

  floodInsurance: {
    headline: "Flood insurance in the Lowcountry",
    subheadline: "Living near the water means understanding flood risk. Here's what every Lowcountry buyer needs to know about protecting their investment.",
    sections: [
      {
        title: "Flood Zones Explained",
        description: "Properties are rated AE, X, VE, or Shaded X zones. Properties in AE and VE zones require flood insurance for federally backed mortgages. We help you understand your specific risk."
      },
      {
        title: "NFIP vs. Private Flood",
        description: "The National Flood Insurance Program (NFIP) offers standard policies, while private flood insurance can offer higher limits and lower premiums in some cases. We'll shop both options."
      },
      {
        title: "Cost Implications",
        description: "Flood insurance in the Lowcountry typically ranges from $500-$3,000+ annually depending on zone, property value, and coverage. This factors into your qualifying ratios."
      },
      {
        title: "How It Affects Your Loan",
        description: "Flood insurance is a required escrow item for properties in designated flood zones. We'll factor this into your pre-approval so there are no surprises at closing."
      }
    ]
  },

  whyLocal: {
    headline: "Why local expertise matters",
    subheadline: "You wouldn't hire a divorce lawyer for a criminal case. Mortgage lending in the Lowcountry has nuances that require a local specialist.",
    reasons: [
      {
        title: "Flood Zone Navigation",
        description: "Every community has different flood zone designations. We know which neighborhoods flood, which require insurance, and how to find the best rates."
      },
      {
        title: "HOA Knowledge",
        description: "From Palmetto Bluff to Hilton Head plantations, each community has unique HOA requirements. We understand how these affect financing and closing timelines."
      },
      {
        title: "Local Lender Relationships",
        description: "We've built relationships with local builders, developers, and HOA management companies. This means smoother transactions and often faster closings."
      },
      {
        title: "Coastal Insurance Expertise",
        description: "Wind mitigation, flood insurance, and coastal property coverage all factor into your total cost of ownership. We factor this into your pre-approval accurately."
      }
    ]
  },

  cta: {
    headline: "Ready to find your Lowcountry home?",
    subhead: "Let's figure out the right mortgage strategy for your goals. No pressure. Just conversation.",
    ctaPrimary: "Schedule a Consultation",
    ctaPrimaryLink: "/contact",
    ctaSecondary: "Get Pre-Approved",
    ctaSecondaryLink: "/apply"
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function LowcountryMarketPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline={copy.hero.headline}
        subheadline={copy.hero.subheadline}
        ctaPrimary={copy.hero.ctaPrimary}
        ctaPrimaryLink={copy.hero.ctaPrimaryLink}
        ctaSecondary={copy.hero.ctaSecondary}
        ctaSecondaryLink={copy.hero.ctaSecondaryLink}
        trustBullets={copy.hero.trustBullets}
        variant="compact"
        backgroundImage="/IMG_4401.JPG"
      />

      {/* Quick Navigation Tabs */}
      <Section id="quick-nav" background="dark">
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#communities"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            <Building2 className="w-5 h-5" />
            Communities
          </a>
          <a 
            href="#private-schools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            Schools
          </a>
          <a 
            href="#lifestyle"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            <Award className="w-5 h-5" />
            Lifestyle
          </a>
        </div>
      </Section>

      {/* Market Overview Section */}
      <Section id="overview" background="dark">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {copy.marketOverview.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-lg max-w-3xl mx-auto"
          >
            {copy.marketOverview.subheadline}
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
        >
          {copy.marketOverview.stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard hover={false} className="text-center py-8">
                <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-white mt-2">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Communities Section */}
      <Section id="communities" background="gradient">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {copy.communities.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-lg max-w-2xl mx-auto"
          >
            {copy.communities.subheadline}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {copy.communities.list.map((community, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={community.link || '#'}>
                <GlassCard hover className="h-full cursor-pointer group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-900/20 group-hover:to-purple-500/20 transition-all">
                      <community.icon className="w-6 h-6 text-cyan-400 group-hover:text-blue-800 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-800 transition-colors">{community.name}</h3>
                      <p className="text-cyan-400 text-sm">{community.priceRange}</p>
                    </div>
                  </div>
                  
                  <p className="text-white mb-4">{community.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {community.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 rounded-full bg-white/5 text-white text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center text-blue-800 text-sm font-medium group-hover:text-blue-700">
                    View neighborhoods <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Bluffton Neighborhoods Section */}
      <Section id="bluffton-neighborhoods" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.blufftonNeighborhoods.headline}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {copy.blufftonNeighborhoods.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.blufftonNeighborhoods.neighborhoods.map((neighborhood, index) => (
            <GlassCard 
              key={neighborhood.name}
              hover={true}
              delay={index * 0.05}
              className="border-cyan-500/20 hover:border-cyan-500/50 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <neighborhood.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{neighborhood.name}</h3>
                  <p className="text-cyan-400 text-sm">{neighborhood.priceRange}</p>
                </div>
              </div>
              <p className="text-white text-sm mb-4 flex-grow">{neighborhood.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {neighborhood.highlights.map((highlight, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-white"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              {neighborhood.link && (
                <a 
                  href={neighborhood.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Visit Website <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Hilton Head Neighborhoods Section */}
      <Section id="hilton-head-neighborhoods" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.hiltonHeadNeighborhoods.headline}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {copy.hiltonHeadNeighborhoods.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {copy.hiltonHeadNeighborhoods.neighborhoods.map((neighborhood, index) => (
            <GlassCard 
              key={neighborhood.name}
              hover={true}
              delay={index * 0.05}
              className="border-blue-900/20 hover:border-blue-900/50 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-900/20 flex items-center justify-center flex-shrink-0">
                  <neighborhood.icon className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{neighborhood.name}</h3>
                  <p className="text-blue-800 text-sm">{neighborhood.priceRange}</p>
                </div>
              </div>
              <p className="text-white text-sm mb-4 flex-grow">{neighborhood.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {neighborhood.highlights.map((highlight, i) => (
                  <span 
                    key={i}
                    className="px-2 py-1 bg-white/10 rounded text-xs text-white"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
              {neighborhood.link && (
                <a 
                  href={neighborhood.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Visit Website <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* Private Schools Section */}
      <Section id="private-schools" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.privateSchools.headline}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {copy.privateSchools.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {copy.privateSchools.schools.map((school, index) => (
            <GlassCard 
              key={school.name}
              hover={true}
              delay={index * 0.05}
              className="border-purple-500/20 hover:border-purple-500/50 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{school.name}</h3>
                  <p className="text-purple-400 text-sm">{school.grades}</p>
                </div>
              </div>
              <p className="text-white text-sm mb-4 flex-grow">{school.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-white/10 rounded text-xs text-white">
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

        <div className="text-center mt-12">
          <Link
            href="/lowcountry-market/schools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white font-semibold rounded-lg transition-colors"
          >
            View All Schools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Public Schools Section */}
      <Section id="public-schools" background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.publicSchools.headline}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {copy.publicSchools.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {copy.publicSchools.regions.map((region, regionIndex) => (
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
                      <Award className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-white font-medium">{school.name}</h4>
                        <span className="px-2 py-0.5 bg-cyan-500/20 rounded text-xs text-cyan-400">
                          {school.type}
                        </span>
                      </div>
                      <p className="text-white text-sm">{school.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/lowcountry-market/schools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            View All Schools <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Lifestyle Section */}
      <Section id="lifestyle" background="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {copy.lifestyle.headline}
          </h2>
          <p className="text-white max-w-2xl mx-auto">
            {copy.lifestyle.subheadline}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {copy.lifestyle.categories.map((category, index) => (
            <GlassCard 
              key={category.name}
              hover={true}
              delay={index * 0.05}
              className="border-cyan-500/20 hover:border-cyan-500/50 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4">
                <category.icon className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">{category.name}</h3>
              <p className="text-white text-sm">{category.description}</p>
              {category.courses && (
                <div className="mt-4 w-full">
                  <a 
                    href={category.courses[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm hover:text-cyan-300 underline"
                  >
                    View Courses →
                  </a>
                </div>
              )}
              {category.link && !category.courses && (
                <div className="mt-4 w-full">
                  <a 
                    href={category.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-sm hover:text-cyan-300 underline"
                  >
                    Learn More →
                  </a>
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Golf Courses Section */}
        <div className="mt-12 p-8 bg-white rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Top Golf Courses in the Lowcountry</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {(copy.lifestyle.categories.find(c => c.name === "Golf")?.courses || []).map((course, index) => (
              <a 
                key={course.name}
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-800 font-medium">{course.name}</span>
                <ArrowRight className="w-4 h-4 text-cyan-600" />
              </a>
            ))}
          </div>
        </div>

        {/* Restaurants Section */}
        <div className="mt-12 p-8 bg-white rounded-xl">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Favorite Restaurants in the Lowcountry</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {(copy.lifestyle.categories.find(c => c.name === "Dining")?.restaurants || []).map((restaurant, index) => (
              <a 
                key={restaurant.name}
                href={restaurant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="text-gray-800 font-medium">{restaurant.name}</span>
                <ArrowRight className="w-4 h-4 text-cyan-600" />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a 
            href={copy.lifestyle.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            Explore Local Life <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Section>

      {/* Flood Insurance Section */}
      <Section id="flood-insurance" background="dark">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              {copy.floodInsurance.headline}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white text-lg mb-8"
            >
              {copy.floodInsurance.subheadline}
            </motion.p>

            <div className="space-y-6">
              {copy.floodInsurance.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">{section.title}</h4>
                      <p className="text-white text-sm">{section.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <GlassCard hover={false} className="bg-gradient-to-br from-blue-900/10 via-purple-500/10 to-cyan-500/10 border-blue-900/20">
              <div className="text-center">
                <Waves className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold text-xl mb-2">Flood Insurance Quote</h3>
                <p className="text-white text-sm mb-6">
                  We work with multiple carriers to find the best flood insurance rates for your specific property.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Get Flood Insurance Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </Section>

      {/* Why Local Matters Section */}
      <Section id="why-local" background="gradient">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            {copy.whyLocal.headline}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white text-lg max-w-2xl mx-auto"
          >
            {copy.whyLocal.subheadline}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {copy.whyLocal.reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover className="h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-900/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                    <p className="text-white text-sm">{reason.description}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Band */}
      <CTABand
        headline={copy.cta.headline}
        subhead={copy.cta.subhead}
        ctaPrimary={copy.cta.ctaPrimary}
        ctaPrimaryLink={copy.cta.ctaPrimaryLink}
        ctaSecondary={copy.cta.ctaSecondary}
        ctaSecondaryLink={copy.cta.ctaSecondaryLink}
      />
    </>
  );
}
