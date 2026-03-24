// MAGGIE BLANK WEBSITE COPY
// Export all page copy modules
// Ready for React/Next.js components

import homepage from './homepage';
import physicianLoans from './physician-loans';
import firstTimeBuyers from './first-time-buyers';
import selfEmployed from './self-employed';

export const copy = {
  homepage,
  physicianLoans,
  firstTimeBuyers,
  selfEmployed
};

export default copy;

// =====================
// QUICK REFERENCE FOR DEVELOPERS
// =====================

/*
USAGE:
import { homepage } from '@/copy/homepage';

const { hero, whyMaggie, loanSolutions, ... } = homepage;

// Hero Section Example:
// <h1>{hero.headline}</h1>
// <p>{hero.subheadline}</p>
// <button>{hero.ctaPrimary}</button>

// FAQ Accordion Example:
// {faq.items.map((item, i) => (
//   <Accordion key={i} title={item.question}>
//     {item.answer}
//   </Accordion>
// ))}

// CTA Band Example:
// <Section>
//   <h2>{ctaBand.headline}</h2>
//   <p>{ctaBand.subhead}</p>
//   <Buttons primary={ctaBand.ctaPrimary} secondary={ctaBand.ctaSecondary} />
// </Section>
*/

// =====================
// PAGE STRUCTURE
// =====================

/*
PAGES:
1. Homepage (homepage.js)
   - Hero
   - Why Maggie
   - Loan Solutions
   - Physician Spotlight
   - Lowcountry Market
   - Process Timeline
   - Testimonials
   - FAQ Preview
   - CTA Band

2. Physician Loans (physician-loans.js)
   - Hero
   - Why Physician Loans
   - Challenges
   - How We Help
   - Loan Scenarios
   - Program Comparison
   - FAQ

3. First-Time Buyers (first-time-buyers.js)
   - Hero
   - What to Expect
   - Financial Readiness
   - Loan Options
   - Costs
   - Timeline
   - Common Questions

4. Self-Employed (self-employed.js)
   - Hero
   - What to Know
   - Documentation
   - Misconceptions
   - How We Help
   - Common Scenarios
   - FAQ
*/

// =====================
// COMPONENT MAPPING
// =====================

/*
Copy fields by component type:

HERO:
- headline: string
- headlineOptions: string[] (alternative headlines)
- subheadline: string
- ctaPrimary: string
- ctaPrimaryLink: string
- ctaSecondary: string
- ctaSecondaryLink: string

FEATURE/GRID CARDS:
- title: string
- description: string
- icon?: string

PROCESS STEPS:
- number: string ("01", "02", etc.)
- title: string
- description: string

TESTIMONIALS:
- quote: string
- author: string
- location: string
- role?: string

FAQ ACCORDION:
- question: string
- answer: string

CTA BAND:
- headline: string
- subhead: string
- ctaPrimary: string
- ctaPrimaryLink: string
- ctaSecondary: string
- ctaSecondaryLink: string

TRUST BAR:
- items: string[]

CHECKLIST:
- items: [{ label: string, ready: boolean }]

MISCONCEPTIONS:
- items: [{ myth: string, fact: string }]

TABLE:
- headers: string[]
- rows: [{ feature: string, physician: string, conventional: string }]
*/

// =====================
// GLOBAL CONSTANTS
// =====================

export const global = {
  brand: {
    name: "Maggie Blank",
    fullName: "Maggie Blank Dunning",
    tagline: "Mortgage strategy for the way you actually build a life.",
    nmls: "504377",
    company: "Synovus Bank",
    phone: {
      office: "843-706-3101",
      cell: "843-575-7768"
    },
    email: "maggieblank@synovus.com",
    address: "3 Belfair Village Drive, Bluffton, SC 29910"
  },
  regions: [
    "Bluffton",
    "Hilton Head Island",
    "Okatie",
    "Beaufort",
    "Hardeeville",
    "Jasper County",
    "Beaufort County"
  ],
  trustBadges: [
    "Synovus Bank Mortgage Banker",
    "NMLS #504377",
    "President's Club 2024 & 2025",
    "Best in Class Customer Experience Award",
    "15+ years Lowcountry expertise"
  ]
};

// =====================
// CTA LIBRARY
// =====================

export const ctas = {
  primary: [
    "Schedule a Consultation",
    "Get Pre-Approved",
    "Start Your Application",
    "Let's Talk Financing",
    "Schedule Consultation"
  ],
  secondary: [
    "Explore Loan Options",
    "Learn More",
    "Download Guide",
    "View Rates",
    "Get Rate Quote"
  ],
  niche: [
    "Physician Loan Consultation",
    "Self-Employed Consultation",
    "First-Time Buyer Chat"
  ]
};

// =====================
// FORM FIELDS
// =====================

export const formFields = {
  required: [
    "First Name",
    "Last Name",
    "Email",
    "Phone"
  ],
  recommended: [
    "Loan Type (Purchase / Refinance)",
    "Timeline",
    "Property Location",
    "Estimated Price",
    "Down Payment"
  ],
  optional: [
    "Employment Status",
    "Realtor Name",
    "Referral Source",
    "Message"
  ],
  physicianToggle: {
    label: "I am a physician or medical professional",
    expands: "Income details"
  }
};
