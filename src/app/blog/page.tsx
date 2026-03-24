'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    slug: "tax-tips-lowcountry-homeowners",
    title: "Tax Tips for Lowcountry Homeowners",
    excerpt: "Essential tax deductions and strategies for homeowners in Bluffton, Hilton Head, and Beaufort. Mortgage interest, property taxes, and more.",
    category: "Financial Planning",
    date: "March 10, 2026",
    readTime: "7 min read",
    image: "/IMG_4402.jpg"
  },
  {
    slug: "refinance-now-or-wait",
    title: "Refinance Now or Wait? Lowcountry Market Analysis",
    excerpt: "Analysis of current refinance rates and market conditions for Bluffton, Hilton Head, and Beaufort homeowners. Should you refinance now or wait?",
    category: "Refinancing",
    date: "February 18, 2026",
    readTime: "8 min read",
    image: "/IMG_4395.JPG"
  },
  {
    slug: "lowcountry-flood-insurance",
    title: "Flood Insurance in the Lowcountry: Costs, Zones, and Savings",
    excerpt: "Understand flood insurance requirements, costs, and savings strategies for Bluffton, Hilton Head, and Beaufort homeowners.",
    category: "Local Market",
    date: "January 20, 2026",
    readTime: "6 min read",
    image: "/IMG_4406.JPG"
  },
  {
    slug: "buying-in-golf-community",
    title: "Buying in a Golf Community: What Lowcountry Buyers Need to Know",
    excerpt: "Everything Bluffton, Hilton Head, and Beaufort buyers need to know about purchasing a home in a golf community — from HOA fees to financing options.",
    category: "Local Market",
    date: "December 15, 2025",
    readTime: "7 min read",
    image: "/IMG_4405.jpg"
  },
  {
    slug: "physician-loans-2026",
    title: "Physician Loans: Everything Doctors Need to Know in 2026",
    excerpt: "Complete guide to physician mortgage loans for doctors in 2026. Learn about 0% down payment options, student debt handling, and financing in the Lowcountry.",
    category: "Physician Loans",
    date: "March 20, 2026",
    readTime: "8 min read",
    image: "/IMG_4408.JPG"
  },
  {
    slug: "bluffton-construction-loan-guide",
    title: "Building a Home in Bluffton: Construction Loan Guide 2026",
    excerpt: "Everything you need to know about financing a new build in the Lowcountry — from construction-to-permanent loans to lot selection and final walkthrough.",
    category: "Construction",
    date: "March 22, 2026",
    readTime: "9 min read",
    image: "/IMG_4404.JPG"
  },
  {
    slug: "first-time-buyer-programs-sc",
    title: "First-Time Buyer Programs in South Carolina: 2026 Guide",
    excerpt: "Complete guide to first-time home buyer programs in South Carolina. Learn about SC Housing loans, down payment assistance, and affordable mortgage options.",
    category: "First-Time Buyers",
    date: "March 18, 2026",
    readTime: "6 min read",
    image: "/IMG_4402.jpg"
  },
  {
    slug: "self-employed-mortgage-guide",
    title: "Self-Employed Mortgage: Bank Statements vs Tax Returns",
    excerpt: "Bank statements, K-1s, and profit & loss — understanding how self-employed borrowers qualify in today's market.",
    category: "Self-Employed",
    date: "March 15, 2026",
    readTime: "7 min read",
    image: "/IMG_4395.JPG"
  },
  {
    slug: "how-to-get-the-best-mortgage-rate-in-the-lowcountry",
    title: "How to Get the Best Mortgage Rate in the Lowcountry",
    excerpt: " insider strategies for locking in the best rate when buying in Bluffton, Hilton Head, and surrounding communities.",
    category: "Financial Planning",
    date: "March 15, 2026",
    readTime: "7 min read",
    image: "/IMG_4402.jpg"
  },
  {
    slug: "why-local-lenders-beat-big-banks-for-lowcountry-buyers",
    title: "Why Local Lenders Beat Big Banks for Lowcountry Buyers",
    excerpt: " working with a local lender means faster closings, better terms, and a partner who knows the Lowcountry market.",
    category: "Lender Selection",
    date: "March 10, 2026",
    readTime: "6 min read",
    image: "/IMG_4395.JPG"
  },
  {
    slug: "the-ultimate-move-to-lowcountry-checklist",
    title: "The Ultimate Move to Lowcountry Checklist",
    excerpt: " everything you need to do before moving to Bluffton, Hilton Head, or Beaufort — from financing to finding a mover.",
    category: "Local Market",
    date: "March 5, 2026",
    readTime: "7 min read",
    image: "/IMG_4405.jpg"
  },
  {
    slug: "understanding-closing-costs-in-south-carolina",
    title: "Understanding Closing Costs in South Carolina",
    excerpt: " what Bluffton and Hilton Head buyers need to know about SC closing costs, title insurance, and attorney involvement.",
    category: "Local Market",
    date: "February 28, 2026",
    readTime: "5 min read",
    image: "/IMG_4406.JPG"
  },
  {
    slug: "refinance-now-or-wait",
    title: "Refinance Now or Wait? Lowcountry Market Analysis",
    excerpt: " whether rates justify refinancing now — and what Lowcountry homeowners should consider before locking in a new rate.",
    category: "Refinancing",
    date: "February 20, 2026",
    readTime: "8 min read",
    image: "/IMG_4404.JPG"
  }
];

export default function BlogPage() {
  return (
    <>
      <Hero
        headline="Lowcountry Mortgage Insights"
        subheadline="Expert guidance on buying, financing, and living in the SC Lowcountry."
        ctaPrimary="Get Pre-Approved"
        ctaPrimaryLink="/contact"
        ctaSecondary="Mortgage Calculator"
        ctaSecondaryLink="/calculator"
        variant="compact"
      />

      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Stay informed about the Lowcountry mortgage market, financing strategies, and community insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <GlassCard 
              key={post.slug}
              hover={true}
              delay={index * 0.05}
              className="flex flex-col overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg -m-6 mb-4">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-500/90 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section background="gradient">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-gray-200 mb-6">
            Get personalized guidance from Maggie Blank directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
          >
            Schedule a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}