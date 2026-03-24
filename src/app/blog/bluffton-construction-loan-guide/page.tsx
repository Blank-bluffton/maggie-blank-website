import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import CTABand from "@/components/CTABand";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, CheckCircle2, Hammer, Home, MapPin, LandPlot, Key, Clock3, Shield, Building, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Building a Home in Bluffton: Construction Loan Guide 2026 | Maggie Blank",
  description: "Complete guide to construction loans in Bluffton, SC. Learn about construction-to-permanent loans, building costs, and how to finance your custom home build in the Lowcountry.",
  keywords: ["construction loan Bluffton", "build home Bluffton SC", "construction to permanent loan", "custom home financing", "new home build Lowcountry", "construction loan requirements", "building a home SC", "home construction financing"],
  authors: [{ name: "Maggie Blank" }],
  openGraph: {
    title: "Building a Home in Bluffton: Construction Loan Guide 2026",
    description: "Complete guide to construction loans in Bluffton, SC. Learn about construction-to-permanent loans and how to finance your custom home build in the Lowcountry.",
    url: "https://maggie-website-pi.vercel.app/blog/bluffton-construction-loan-guide",
    siteName: "Maggie Blank - Lowcountry Mortgage Advisor",
    type: "article",
    authors: ["Maggie Blank"],
    images: [
      {
        url: "/IMG_4404.JPG",
        width: 1200,
        height: 630,
        alt: "Building a Home in Bluffton"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Building a Home in Bluffton: Construction Loan Guide 2026",
    description: "Complete guide to construction loans in Bluffton, SC. Learn about construction-to-permanent loans and building your custom home."
  },
  alternates: {
    canonical: "https://maggie-website-pi.vercel.app/blog/bluffton-construction-loan-guide"
  }
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Building a Home in Bluffton: Construction Loan Guide 2026",
  "description": "Complete guide to construction loans in Bluffton, SC. Learn about construction-to-permanent loans, building costs, and how to finance your custom home build in the Lowcountry.",
  "image": "/IMG_4404.JPG",
  "author": {
    "@type": "Person",
    "name": "Maggie Blank",
    "jobTitle": "Mortgage Banker at Synovus Bank"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Maggie Blank - Lowcountry Mortgage Advisor",
    "logo": {
      "@type": "ImageObject",
      "url": "/maggie-blank-logo.png"
    }
  },
  "datePublished": "2026-03-22",
  "dateModified": "2026-03-22",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://maggie-website-pi.vercel.app/blog/bluffton-construction-loan-guide"
  },
  "articleSection": "Mortgage Education",
  "wordCount": 1400
};

export default function BlufftonConstructionLoanGuide() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Hero
        headline="Building a Home in Bluffton: Construction Loan Guide 2026"
        subheadline="Everything you need to know about financing a new build in the Lowcountry — from construction-to-permanent loans to lot selection and final walkthrough."
        ctaPrimary="Get Pre-Approved"
        ctaPrimaryLink="/apply"
        ctaSecondary="Explore Options"
        ctaSecondaryLink="#options"
        trustBullets={["One-Time Close Loans", "Custom Home Financing", "Lowcountry Builder Network"]}
        backgroundImage="/IMG_4404.JPG"
      />

      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 text-sm text-gray-300 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              March 22, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
              Construction
            </span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2 id="introduction">Why Build in Bluffton?</h2>
            <p>
              The South Carolina Lowcountry has seen explosive growth in recent years, and <Link href="/lowcountry-market" className="text-cyan-400 hover:text-cyan-300">Bluffton</Link> sits at the center of this transformation. With its stunning marsh views, welcoming community, excellent schools, and convenient access to Hilton Head and Savannah, Bluffton has become one of the most desirable places to build a custom home in the Southeast.
            </p>
            <p>
              Building instead of buying offers unique advantages: you choose your floor plan, finishes, and layout. You avoid the competition of the existing home market. And you create a home precisely tailored to your lifestyle.
            </p>
            <p>
              But how do you finance a custom home build? That's where construction loans come in.
            </p>

            <h2 id="what-is-construction-loan">What Is a Construction Loan?</h2>
            <p>
              A construction loan is a short-term financing product designed specifically for building a new home. Unlike a traditional mortgage where money is provided in a single lump sum, construction loans provide funds in stages (called "draws") as the home is built.
            </p>
            <p>
              There are several types of construction financing:
            </p>
            <ul>
              <li><strong>Construction-to-permanent (one-time close)</strong> — A single loan that converts to a permanent mortgage when construction is complete</li>
              <li><strong>Construction-only loan</strong> — Short-term financing that must be refinanced or paid off when construction ends</li>
              <li><strong>Renovation loan</strong> — For major renovations that essentially rebuild an existing home</li>
            </ul>

            <h2 id="options">Construction Loan Options in 2026</h2>
            <p>
              Here's what Bluffton area builders and buyers typically use:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <GlassCard hover={false} className="border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Key className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">Construction-to-Permanent</h3>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>One application, one closing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Lock in rate during construction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Transitions to permanent mortgage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Lower total closing costs</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard hover={false}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <Hammer className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">Construction-Only</h3>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Short-term (6-12 months)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Interest-only payments during build</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>Must refinance or pay off at end</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>More flexible qualification</span>
                  </li>
                </ul>
              </GlassCard>
            </div>

            <h2 id="how-it-works">How Construction Loans Work</h2>
            <p>
              Understanding the construction loan process helps you prepare for each step:
            </p>

            <h3>1. Pre-Approval</h3>
            <p>
              Before you meet with builders, get pre-approved for your construction loan. This tells you exactly how much you can borrow and demonstrates to builders that you're a serious buyer.
            </p>

            <h3>2. Choosing Your Lot</h3>
            <p>
              You can purchase your lot separately or include it in your construction loan. Many buyers choose to secure their lot first, then finance the home build. <Link href="/lowcountry-market" className="text-cyan-400 hover:text-cyan-300">Learn about Lowcountry neighborhoods</Link> and available lots.
            </p>

            <h3>3. Selecting a Builder</h3>
            <p>
              Your lender will need to review your builder's credentials, experience, and insurance. Many lenders have a preferred builder network—working with approved builders can streamline the process.
            </p>

            <h3>4. Plans and Budget</h3>
            <p>
              You'll provide your home plans and specifications. The lender orders an appraisal based on the "as-completed" value of the home—this determines your maximum loan amount.
            </p>

            <h3>5. Loan Closing</h3>
            <p>
              At closing, funds are held in a construction escrow account. You don't receive money directly—instead, it's disbursed to your builder in draws as work progresses.
            </p>

            <h3>6. Construction Draws</h3>
            <p>
              As construction reaches milestones, your builder requests a draw. The lender sends an inspector to verify work is complete, then releases funds to pay the builder.
            </p>

            <h3>7. Conversion to Permanent Loan</h3>
            <p>
              For construction-to-permanent loans, once your home is complete and you receive your certificate of occupancy, your loan converts to a standard mortgage—often with the same rate you locked in at application.
            </p>

            <h2 id="requirements">Construction Loan Requirements</h2>
            <p>
              Construction loans typically have stricter requirements than traditional mortgages because they're considered higher risk:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Credit score</strong> — Typically 680+ for construction loans</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Down payment</strong> — Usually 20-25% of total project cost (land + construction)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Debt-to-income</strong> — Usually max 43-45% including projected mortgage</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Qualified builder</strong> — Must use an approved/licensed builder with insurance</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Detailed plans</strong> — Complete specifications for appraisal</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Timeline</strong> — Construction typically must be completed within 12 months</span>
              </li>
            </ul>

            <h2 id="costs">Building Costs in the Lowcountry</h2>
            <p>
              Construction costs in the Bluffton area vary based on location, lot price, and home specifications. Here's a general breakdown for 2026:
            </p>
            <GlassCard hover={false} className="my-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20">
              <h3 className="text-lg font-semibold text-white mb-4">Sample Budget for a 2,500 sq ft Custom Home</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Lot (0.5 acre in established community)</span>
                  <span className="text-white font-medium">$150,000 - $300,000</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Construction ($175-225/sq ft)</span>
                  <span className="text-white font-medium">$437,500 - $562,500</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Design, permits, impact fees</span>
                  <span className="text-white font-medium">$25,000 - $40,000</span>
                </div>
                <div className="border-t border-gray-700 pt-3 flex justify-between text-gray-300">
                  <span>Total Project Cost</span>
                  <span className="text-white font-bold text-lg">$612,500 - $902,500</span>
                </div>
              </div>
            </GlassCard>
            <p className="text-gray-300 text-sm">
              *Costs are estimates and vary based on location, finishes, site conditions, and builder. Flood insurance is required in many Lowcountry communities and adds to ongoing costs.
            </p>

            <h2 id="benefits">Benefits of Building in the Lowcountry</h2>
            <p>
              Building a home in the Bluffton area offers advantages you won't find in the existing home market:
            </p>
            <ul>
              <li><strong>Custom layout</strong> — Design your floor plan exactly how you want it</li>
              <li><strong>Modern efficiency</strong> — New homes are built to current energy codes</li>
              <li><strong>Warranty protection</strong> — New construction comes with builder warranties</li>
              <li><strong>No bidding wars</strong> — Negotiate directly with your builder</li>
              <li><strong>Personalization</strong> — Choose your finishes, fixtures, and features</li>
              <li><strong>Location control</strong> — Select your exact lot and neighborhood</li>
            </ul>

            <h2 id="getting-started">Getting Started</h2>
            <p>
              The first step in building your dream home is getting pre-approved for a construction loan. This tells you exactly how much you can spend and helps builders take you seriously.
            </p>
            <p>
              At Maggie Blank, we work with builders throughout the Lowcountry and can help you:
            </p>
            <ul>
              <li>Determine your construction loan budget</li>
              <li>Find approved builders in your target area</li>
              <li>Navigate the construction loan process</li>
              <li>Lock in your rate before construction begins</li>
            </ul>

            <div className="my-8 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to build your dream home in Bluffton?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your construction loan options and get you started on the path to your new home.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
                >
                  Get Pre-Approved <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTABand
        headline="Ready to build your dream home in the Lowcountry?"
        subhead="Let's discuss construction loan options and find the right path to your new home."
        ctaPrimary="Get Pre-Approved"
        ctaPrimaryLink="/apply"
        ctaSecondary="Learn About Construction"
        ctaSecondaryLink="/construction"
      />
    </>
  );
}