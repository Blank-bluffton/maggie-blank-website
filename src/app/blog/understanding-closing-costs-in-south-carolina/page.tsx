

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import GlassCard from '@/components/GlassCard';
import CTABand from '@/components/CTABand';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, CheckCircle2, FileText, DollarSign, Calculator, Home, Shield, PenTool } from 'lucide-react';

export const metadata = {
  title: "Understanding Closing Costs in South Carolina | Maggie Blank",
  description: "A comprehensive guide to closing costs for Lowcountry homebuyers. Learn what to expect in Bluffton, Hilton Head, and Beaufort SC.",
  keywords: ["closing costs South Carolina", "closing costs Lowcountry", "mortgage closing costs Bluffton SC", "who pays closing costs SC", "mortgage fees explained", "title insurance SC", "transfer tax South Carolina"],
  openGraph: {
    title: "Understanding Closing Costs in South Carolina",
    description: "A comprehensive guide to closing costs for Lowcountry homebuyers.",
    type: "article",
    authors: ["Maggie Blank"],
  }
};

export default function BlogPost() {
  return (
    <>
      <Hero
        headline="Understanding Closing Costs in South Carolina"
        subheadline="Everything Lowcountry homebuyers need to know about closing costs, fees, and what to expect at the settlement table."
        ctaPrimary="Get Cost Estimate"
        ctaPrimaryLink="/contact"
        ctaSecondary="Mortgage Calculator"
        ctaSecondaryLink="/calculator"
        variant="compact"
      />

      <Section background="dark">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 text-sm text-gray-200 mb-8">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              January 22, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
              Mortgage Education
            </span>
          </div>

          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              If you're buying a home in the Lowcountry, you've probably focused on your down payment and monthly mortgage payment. But there's another significant cost to plan for: closing costs. In South Carolina, buyers typically pay between 2% and 5% of the purchase price in closing costs—but that number can vary substantially based on your loan type, property location, and specific circumstances.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">What Are Closing Costs?</h2>
            <p className="text-gray-200 mb-6">
              Closing costs are the fees associated with finalizing your mortgage and transferring ownership of the property. They include lender fees, third-party services, taxes, and insurance. Unlike your down payment, which is paid at closing, some closing costs can be rolled into your loan—though this isn't always the best strategy.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Breaking Down South Carolina Closing Costs</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  Lender Fees
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex justify-between"><span>Loan origination</span><span>0.5-1%</span></li>
                  <li className="flex justify-between"><span>Appraisal</span><span>$400-600</span></li>
                  <li className="flex justify-between"><span>Credit report</span><span>$30-50</span></li>
                  <li className="flex justify-between"><span>Rate lock fee</span><span>0-0.5%</span></li>
                  <li className="flex justify-between"><span>Underwriting</span><span>$500-800</span></li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-cyan-400" />
                  Title & Insurance
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex justify-between"><span>Title insurance</span><span>$800-1,500</span></li>
                  <li className="flex justify-between"><span>Title search</span><span>$200-400</span></li>
                  <li className="flex justify-between"><span>Attorney fees</span><span>$500-1,000</span></li>
                  <li className="flex justify-between"><span>Recording fees</span><span>$50-150</span></li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-cyan-400" />
                  Taxes & Government
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex justify-between"><span>Transfer tax</span><span>0.7-1.1%</span></li>
                  <li className="flex justify-between"><span>Recording taxes</span><span>$1.10/$100</span></li>
                  <li className="flex justify-between"><span>Deed stamps</span><span>$3.70/$1,000</span></li>
                </ul>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-cyan-400" />
                  Prepaid Items
                </h3>
                <ul className="space-y-2 text-sm text-gray-200">
                  <li className="flex justify-between"><span>Homeowners insurance</span><span>$1,200-2,500/yr</span></li>
                  <li className="flex justify-between"><span>Flood insurance</span><span>$500-2,000/yr</span></li>
                  <li className="flex justify-between"><span>Property taxes</span><span>2-4 months</span></li>
                  <li className="flex justify-between"><span>Mortgage insurance</span><span>2-6 months</span></li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">South Carolina Transfer Tax: A Unique Consideration</h2>
            <p className="text-gray-200 mb-6">
              One of the largest closing costs in South Carolina is the transfer tax, also known as the deed stamp tax. This is a state tax on the transfer of real property, and it's a significant line item in your settlement.
            </p>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Transfer Tax Rates in South Carolina</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1" />
                  <span><strong className="text-white">State deed stamps:</strong> $3.70 per $1,000 of purchase price</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1" />
                  <span><strong className="text-white">County documentary fees:</strong> Varies by county—Beaufort County is $1.10 per $1,000</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1" />
                  <span><strong className="text-white">Total effective rate:</strong> Approximately 0.7-1.1% depending on county</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-200 mb-6">
              For a $500,000 home in Beaufort County, transfer taxes alone will be approximately $2,400-$2,700. This is a cost that must be paid in cash at closing—you cannot finance this.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Lowcountry-Specific Considerations</h2>
            <p className="text-gray-200 mb-6">
              Buying in the Lowcountry comes with some unique cost factors that buyers in other parts of South Carolina might not encounter:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Flood Insurance Requirements:</strong> If your property is in a flood zone (common in coastal areas near Hilton Head and Beaufort), you'll likely need flood insurance. This can cost $500-$2,000+ annually and must often be prepaid at closing.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Wind/Hurricane Insurance:</strong> Coastal properties often require wind mitigation insurance, which can add $500-$1,500 annually to your insurance costs.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">HOA Capital Contributions:</strong> Many Lowcountry communities—especially in golf communities and marsh-front developments—require one-time capital contribution fees ranging from $500 to several thousand dollars.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <span><strong className="text-white">Dock/Marina Fees:</strong> If you're buying property with water access or boat slip rights, there may be additional fees to consider.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Who Pays What in South Carolina?</h2>
            <p className="text-gray-200 mb-6">
              In South Carolina, closing costs are typically negotiable between buyer and seller. However, here's what's standard in the Lowcountry market:
            </p>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Buyer Typically Pays</h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>• Loan origination fees</li>
                    <li>• Appraisal</li>
                    <li>• Credit report</li>
                    <li>• Survey</li>
                    <li>• Title insurance (lender's policy)</li>
                    <li>• Transfer taxes (often split)</li>
                    <li>• Prepaid interest</li>
                    <li>• Prepaid insurance</li>
                    <li>• Property taxes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Seller Typically Pays</h3>
                  <ul className="space-y-2 text-sm text-gray-200">
                    <li>• Owner's title insurance</li>
                    <li>• Real estate commission</li>
                    <li>• Transfer taxes (often split)</li>
                    <li>• Attorney fees</li>
                    <li>• Prorated property taxes</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              In a competitive market, sellers may agree to pay a portion of the buyer's closing costs—but this is less common in the current Lowcountry market where inventory is limited.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Can You Negotiate Closing Costs?</h2>
            <p className="text-gray-200 mb-6">
              Absolutely. Here are several strategies to potentially reduce your closing costs:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-gray-200">
                <PenTool className="w-5 h-5 text-cyan-400 mt-1" />
                <span><strong className="text-white">Request a Loan Estimate comparison:</strong> Get quotes from multiple lenders and ask them to match or beat competitor pricing on origination fees.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <PenTool className="w-5 h-5 text-cyan-400 mt-1" />
                <span><strong className="text-white">Ask for lender credits:</strong> Some lenders will provide a credit toward closing costs in exchange for a slightly higher interest rate.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <PenTool className="w-5 h-5 text-cyan-400 mt-1" />
                <span><strong className="text-white">Shop for title services:</strong> You're not required to use the title company your lender recommends. Getting multiple quotes can save hundreds.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-200">
                <PenTool className="w-5 h-5 text-cyan-400 mt-1" />
                <span><strong className="text-white">Time your closing:</strong> Scheduling your closing early in the month reduces the prepaid interest you'll owe.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Estimating Your Closing Costs</h2>
            <p className="text-gray-200 mb-6">
              As a general rule, plan for 3-4% of your purchase price in closing costs if you're using a conventional loan with 20% down. Here's a quick reference for the Lowcountry:
            </p>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-white font-semibold">Purchase Price</th>
                      <th className="text-right py-3 text-white font-semibold">Est. Closing Costs</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-200">
                    <tr className="border-b border-gray-800">
                      <td className="py-3">$300,000</td>
                      <td className="text-right">$9,000 - $12,000</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">$400,000</td>
                      <td className="text-right">$12,000 - $16,000</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">$500,000</td>
                      <td className="text-right">$15,000 - $20,000</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3">$600,000</td>
                      <td className="text-right">$18,000 - $24,000</td>
                    </tr>
                    <tr>
                      <td className="py-3">$750,000+</td>
                      <td className="text-right">$22,500 - $30,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-gray-200 mb-6">
              These estimates include transfer taxes but exclude any financed costs. FHA loans will have higher fees (upfront MIP), and VA loans have funding fees.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Getting Your Closing Cost Estimate</h2>
            <p className="text-gray-200 mb-6">
              The best way to get an accurate closing cost estimate is to get pre-approved. Within three business days of your application, lenders are required to provide you with a Loan Estimate that breaks down all projected costs. This document is your best tool for comparing offers and planning your budget.
            </p>
            <p className="text-gray-200 mb-8">
              I can help you understand exactly what to expect in closing costs for your specific situation—whether you're buying in Belfair, Sea Pines, or downtown Bluffton. Let's work through the numbers together.
            </p>

            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-8 border border-cyan-500/30 mt-12">
              <h3 className="text-xl font-bold text-white mb-4">Get Your Personalized Closing Cost Estimate</h3>
              <p className="text-gray-200 mb-6">
                I'll provide a detailed breakdown of closing costs tailored to your specific situation and the Lowcountry property you're targeting.
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
          </article>
        </div>
      </Section>

      <CTABand
        headline="Let's estimate your closing costs"
        subheadline="Get a detailed breakdown of what you'll pay at closing."
        ctaPrimary="Contact Maggie"
        ctaPrimaryLink="/contact"
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Understanding Closing Costs in South Carolina",
          "description": "Everything Lowcountry homebuyers need to know about closing costs, fees, and what to expect at the settlement table.",
          "author": {
            "@type": "Person",
            "name": "Maggie Blank"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Maggie Blank - Synovus Bank"
          },
          "datePublished": "2026-01-22",
          "dateModified": "2026-01-22",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://maggie-website-pi.vercel.app/blog/understanding-closing-costs-in-south-carolina"
          },
          "image": "https://maggie-website-pi.vercel.app/maggie-blank-logo.png",
          "articleSection": "Mortgage Education",
          "keywords": ["closing costs South Carolina", "Lowcountry closing costs", "Bluffton SC closing costs", "transfer tax SC"]
        }) }}
      />
    </>
  );
}