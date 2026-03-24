import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import CTABand from "@/components/CTABand";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, CheckCircle2, Briefcase, Calculator, FileText, TrendingUp, Building2, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Self-Employed Mortgage: Bank Statements vs Tax Returns | Maggie Blank",
  description: "Complete guide to self-employed mortgage options in 2026. Learn how bank statement loans compare to tax return financing for self-employed borrowers in the Lowcountry.",
  keywords: ["self-employed mortgage", "bank statement loan", "self-employed home loan", "no tax return mortgage", "1099 mortgage", "freelancer mortgage", "self-employed borrower requirements", "Lowcountry self-employed mortgage"],
  authors: [{ name: "Maggie Blank" }],
  openGraph: {
    title: "Self-Employed Mortgage: Bank Statements vs Tax Returns",
    description: "Complete guide to self-employed mortgage options. Learn how bank statement loans compare to tax return financing for self-employed borrowers.",
    url: "https://maggie-website-pi.vercel.app/blog/self-employed-mortgage-guide",
    siteName: "Maggie Blank - Lowcountry Mortgage Advisor",
    type: "article",
    authors: ["Maggie Blank"],
    images: [
      {
        url: "/IMG_4395.JPG",
        width: 1200,
        height: 630,
        alt: "Self-Employed Mortgage Guide"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Self-Employed Mortgage: Bank Statements vs Tax Returns",
    description: "Complete guide to self-employed mortgage options. Learn how bank statement loans compare to tax return financing."
  },
  alternates: {
    canonical: "https://maggie-website-pi.vercel.app/blog/self-employed-mortgage-guide"
  }
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Self-Employed Mortgage: Bank Statements vs Tax Returns",
  "description": "Complete guide to self-employed mortgage options in 2026. Learn how bank statement loans compare to tax return financing for self-employed borrowers in the Lowcountry.",
  "image": "/IMG_4395.JPG",
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
  "datePublished": "2026-03-15",
  "dateModified": "2026-03-15",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://maggie-website-pi.vercel.app/blog/self-employed-mortgage-guide"
  },
  "articleSection": "Mortgage Education",
  "wordCount": 1300
};

export default function SelfEmployedMortgageGuide() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Hero
        headline="Self-Employed Mortgage: Bank Statements vs Tax Returns"
        subheadline="Bank statements, K-1s, and profit & loss — understanding how self-employed borrowers qualify in today's market. Learn which option works best for your situation."
        ctaPrimary="Check Your Options"
        ctaPrimaryLink="/apply"
        ctaSecondary="Learn About Requirements"
        ctaSecondaryLink="#requirements"
        trustBullets={["Bank Statement Programs", "Tax Return Options", "Flexible Qualification"]}
        backgroundImage="/IMG_4395.JPG"
      />

      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 text-sm text-gray-200 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              March 15, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium">
              Self-Employed
            </span>
          </div>

          <div className="prose prose-invert prose-lg max-w-none">
            <h2 id="introduction">The Self-Employed Challenge</h2>
            <p>
              Being your own boss has tremendous advantages—you set your schedule, keep your profits, and build something on your terms. But when it comes to getting a mortgage, self-employed borrowers often face more hurdles than traditional employees.
            </p>
            <p>
              Traditional lenders love W-2 income. It's predictable, documented, and easy to verify. But if you're a freelancer, independent contractor, small business owner, or entrepreneur, your income might not fit their neat boxes. That's where understanding your options becomes critical.
            </p>
            <p>
              In the Lowcountry—where entrepreneurs are drawn to communities like <Link href="/lowcountry-market" className="text-cyan-400 hover:text-cyan-300">Bluffton</Link>, Hilton Head, and Beaufort for their quality of life—knowing the difference between bank statement loans and tax return financing can mean the difference between getting approved or being denied.
            </p>

            <h2 id="two-approaches">Two Approaches to Self-Employed Mortgages</h2>
            <p>
              When you're self-employed, lenders typically offer two main paths to qualification:
            </p>
            <ul>
              <li><strong>Tax return qualification</strong> — Using your filed tax returns to prove income</li>
              <li><strong>Bank statement qualification</strong> — Using your business and personal bank statements to demonstrate cash flow</li>
            </ul>
            <p>
              Each has advantages and drawbacks. Let's break them down.
            </p>

            <h2 id="tax-return">Option 1: Tax Return Qualification</h2>
            <p>
              This is the traditional approach that most lenders prefer. You'll provide your tax returns—typically the past two years—and the lender will calculate your qualifying income based on what's shown.
            </p>

            <h3>How It Works</h3>
            <p>
              For sole proprietors and single-member LLCs, lenders typically look at:
            </p>
            <ul>
              <li>Schedule C (Profit or Loss from Business)</li>
              <li>Net profit reported on your tax return</li>
              <li>Add-backs for certain deductions (depreciation, business use of home, etc.)</li>
            </ul>
            <p>
              For partners and multi-member LLCs, they'll review:
            </p>
            <ul>
              <li>Form K-1 (Partner/Shareholder distributions)</li>
              <li>W-2 wages if applicable</li>
              <li>Operating agreement or partnership agreement</li>
            </ul>

            <h3>Advantages</h3>
            <ul>
              <li>Widely accepted by conventional lenders</li>
              <li>Often offers better interest rates</li>
              <li>Clear documentation requirements</li>
              <li>Can qualify for more loan programs</li>
            </ul>

            <h3>Drawbacks</h3>
            <ul>
              <li>Requires 2 years of tax returns</li>
              <li>Income shown may be lower than actual cash flow (due to deductions)</li>
              <li>Business write-offs reduce qualifying income</li>
              <li>New business owners may not have 2 years of history</li>
            </ul>

            <h2 id="bank-statements">Option 2: Bank Statement Qualification</h2>
            <p>
              Bank statement loans let you qualify based on the actual money flowing through your accounts—rather than what's reported on your tax returns. This can be a game-changer for entrepreneurs who legitimately earn more than their tax returns show.
            </p>

            <h3>How It Works</h3>
            <p>
              Instead of tax returns, you'll provide 12-24 months of bank statements. The lender calculates your average monthly income by adding up deposits and dividing by the number of months.
            </p>
            <p>
              Key features of bank statement loans:
            </p>
            <ul>
              <li><strong>Deposit-based qualification</strong> — Lenders use actual deposits, not reported income</li>
              <li><strong>Expense adjustments</strong> — Some programs add back certain business expenses</li>
              <li><strong>Flexible documentation</strong> — You may need fewer documents than tax return programs</li>
              <li><strong>Higher limits</strong> — Some programs allow higher loan amounts</li>
            </ul>

            <h3>Advantages</h3>
            <ul>
              <li>Qualify on actual cash flow, not tax-reported income</li>
              <li>Ideal for business owners with significant write-offs</li>
              <li>May work for newer businesses without 2-year history</li>
              <li>Can qualify for more property types</li>
            </ul>

            <h3>Drawbacks</h3>
            <ul>
              <li>Higher interest rates than conventional loans</li>
              <li>More limited program availability</li>
              <li>Strict requirements on deposit sources</li>
              <li>May require larger down payment</li>
            </ul>

            <h2 id="comparison">Side-by-Side Comparison</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-left text-gray-200">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-3 px-4 font-semibold text-white">Factor</th>
                    <th className="py-3 px-4 font-semibold text-white">Tax Return</th>
                    <th className="py-3 px-4 font-semibold text-white">Bank Statements</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Interest Rates</td>
                    <td className="py-3 px-4 text-cyan-400">Typically lower</td>
                    <td className="py-3 px-4">Typically 0.5-1% higher</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Documentation</td>
                    <td className="py-3 px-4">2 years tax returns, K-1s</td>
                    <td className="py-3 px-4">12-24 months bank statements</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Business Age</td>
                    <td className="py-3 px-4">2+ years typically required</td>
                    <td className="py-3 px-4 text-cyan-400">May accept newer businesses</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Income Calculation</td>
                    <td className="py-3 px-4">Net profit on Schedule C/K-1</td>
                    <td className="py-3 px-4 text-cyan-400">Average deposits</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-3 px-4">Available Programs</td>
                    <td className="py-3 px-4">Most lenders</td>
                    <td className="py-3 px-4">Fewer lenders</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="requirements">General Self-Employed Requirements</h2>
            <p>
              Whether you choose tax returns or bank statements, expect these common requirements:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Credit score</strong> — Typically 620+ for most programs</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Debt-to-income ratio</strong> — Usually max 43-50%</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Business documentation</strong> — Business license, EIN, contracts</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span><strong>Reserves</strong> — Some programs require 2+ months of mortgage payments in reserve</span>
              </li>
            </ul>

            <h2 id="lowcountry-market">Self-Employed in the Lowcountry</h2>
            <p>
              The South Carolina Lowcountry is home to many entrepreneurs, from real estate investors to marine contractors to professional consultants. The region's growing economy and quality of life attract self-employed professionals from diverse fields.
            </p>
            <p>
              Whether you're a:
            </p>
            <ul>
              <li>Independent consultant or contractor</li>
              <li>Small business owner</li>
              <li>Freelancer or gig worker</li>
              <li>Real estate investor</li>
              <li>Marine or construction professional</li>
              <li>Medical or legal professional in private practice</li>
            </ul>
            <p>
              There are mortgage programs designed for your situation. The key is finding a lender who understands self-employed income and can help you navigate the documentation requirements.
            </p>

            <h2 id="getting-started">Getting Started</h2>
            <p>
              The best way to determine which path is right for you is to discuss your specific situation with a mortgage professional. At Maggie Blank, we work with self-employed borrowers regularly and can help you:
            </p>
            <ul>
              <li>Determine whether tax returns or bank statements work better for your situation</li>
              <li>Calculate your potential buying power under each approach</li>
              <li>Prepare the documentation you'll need</li>
              <li>Find the best program and rate for your profile</li>
            </ul>

            <div className="my-8 p-6 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to explore your mortgage options?</h3>
              <p className="text-gray-200 mb-6">
                Let's discuss your self-employed situation and find the right path to homeownership.
              </p>
              <div className="flex flex-wrap gap-4">
                  <Link
                  href="/apply"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold rounded-lg transition-colors"
                >
                  Apply Now <ArrowRight className="w-4 h-4" />
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
        headline="Ready to buy your dream home in the Lowcountry?"
        subhead="Let's discuss your self-employed mortgage options and find the right path to approval."
        ctaPrimary="Get Pre-Approved"
        ctaPrimaryLink="/apply"
        ctaSecondary="Contact Us"
        ctaSecondaryLink="/contact"
      />
    </>
  );
}