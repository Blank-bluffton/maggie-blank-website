'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import CTABand from '@/components/CTABand';

export default function PrivacyPage() {
  return (
    <>
      <Hero
        headline="Privacy Policy"
        subheadline="Your privacy is important to us. This policy outlines how we protect your information."
        ctaPrimary="Contact Us"
        ctaPrimaryLink="/contact"
      />
      
      <Section background="dark">
        <div className="max-w-3xl mx-auto prose prose-invert">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            <p className="text-white mb-6">
              We collect information you provide directly to us, including name, email, phone number, 
              and financial information necessary for mortgage services.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <p className="text-white mb-6">
              We use the information we collect to provide mortgage services, communicate with you 
              about your application, and comply with legal requirements.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Information Security</h2>
            <p className="text-white mb-6">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-white">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:maggieblank@synovus.com" className="text-cyan-400 hover:underline">
                maggieblank@synovus.com
              </a>
            </p>
          </div>
        </div>
      </Section>
      
      <CTABand
        headline="Questions about privacy?"
        subhead="We're here to help with any concerns."
        ctaPrimary="Contact Us"
        ctaPrimaryLink="/contact"
      />
    </>
  );
}
