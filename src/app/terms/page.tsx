'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTABand from '@/components/CTABand';

export default function TermsPage() {
  return (
    <>
      <Hero
        headline="Terms of Service"
        subheadline="Please read these terms carefully before using our services."
        ctaPrimary="Contact Us"
        ctaPrimaryLink="/contact"
      />
      
      <Section background="dark">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
            <p className="text-white mb-6">
              By accessing and using this website, you accept and agree to be bound by 
              the terms and provision of this agreement.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Use License</h2>
            <p className="text-white mb-6">
              Permission is granted to temporarily use this website for personal, non-commercial 
              viewing only. This is the grant of a license, not a transfer of title.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Mortgage Services</h2>
            <p className="text-white mb-6">
              This website provides information about mortgage products and services. All loans 
              are subject to credit approval, property approval, and other conditions.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
            <p className="text-white mb-6">
              The information on this website is provided &quot;as is&quot; without warranty of any kind. 
              We strive for accuracy but cannot guarantee all information is current.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
            <p className="text-white">
              For questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:maggieblank@synovus.com" className="text-cyan-400 hover:underline">
                maggieblank@synovus.com
              </a>
            </p>
          </div>
        </div>
      </Section>
      
      <CTABand
        headline="Questions about terms?"
        subhead="We're here to help."
        ctaPrimary="Contact Us"
        ctaPrimaryLink="/contact"
      />
    </>
  );
}
