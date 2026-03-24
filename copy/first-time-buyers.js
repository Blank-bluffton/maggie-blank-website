// FIRST-TIME BUYERS PAGE COPY
// Ready to copy into React/Next.js components

export const firstTimeBuyers = {
  // =====================
  // HERO SECTION
  // =====================
  hero: {
    headline: "Buying your first home shouldn't feel like a second job.",
    subhead: "The mortgage process has enough moving parts. We're here to make the financing side feel simple, clear, and manageable.",
    ctaPrimary: "Start Pre-Approval",
    ctaPrimaryLink: "https://synovus.com/maggieblank",
    ctaSecondary: "Download Buyer's Guide",
    ctaSecondaryLink: "/resources/first-time-buyer-guide"
  },

  // =====================
  // WHAT TO EXPECT SECTION
  // =====================
  whatToExpect: {
    headline: "What the process actually looks like.",
    subtitle: "Five clear steps from conversation to keys. No hidden phases, no surprises.",
    steps: [
      {
        number: "01",
        title: "Conversation",
        description: "We talk about your goals, timeline, and any questions. This is a no-obligation chat to see if we're a good fit."
      },
      {
        number: "02",
        title: "Pre-Approval",
        description: "We pull your credit, verify your income and assets, and give you a written pre-approval letter. You'll know exactly what you can afford before you start shopping."
      },
      {
        number: "03",
        title: "House Hunting",
        description: "With your pre-approval in hand, you shop with confidence. Your realtor knows your exact budget, and sellers take your offer seriously."
      },
      {
        number: "04",
        title: "Offer & Acceptance",
        description: "Once you find the right home, we help structure your offer for success. We coordinate with your realtor and stay ahead of underwriting requirements."
      },
      {
        number: "05",
        title: "Underwriting",
        description: "We do the heavy lifting — collecting documents, communicating with the appraiser, and keeping you informed. You focus on planning your move."
      },
      {
        number: "06",
        title: "Closing",
        description: "Final walkthrough, signing, and keys. We'll review your closing disclosure beforehand so there are no last-minute surprises."
      }
    ]
  },

  // =====================
  // FINANCIAL READINESS SECTION
  // =====================
  financialReadiness: {
    headline: "Are you ready to buy?",
    subtitle: "Here's what lenders typically look for. Don't worry if you're not perfect in every area — we can discuss options.",
    checklist: {
      heading: "Financial readiness checklist",
      items: [
        { label: "Credit score 620+ (conventional), 580+ (FHA)", ready: true },
        { label: "2 years of stable employment history", ready: true },
        { label: "Down payment funds saved", ready: true },
        { label: "Debt-to-income ratio in acceptable range", ready: true },
        { label: "No recent major credit events (bankruptcy, foreclosure)", ready: true }
      ]
    },
    resources: [
      {
        title: "Pre-Approval Readiness Guide",
        description: "Everything you need to prepare for pre-approval",
        link: "/resources/pre-approval-readiness"
      },
      {
        title: "Credit Score Optimization Tips",
        description: "Quick actions to improve your score before applying",
        link: "/resources/credit-tips"
      }
    ]
  },

  // =====================
  // LOAN OPTIONS SECTION
  // =====================
  loanOptions: {
    headline: "Your first-time buyer loan options.",
    subtitle: "We offer several loan types suited for first-time buyers. We'll help you find the one that fits your situation.",
    cards: [
      {
        title: "FHA Loans",
        description: "Down payments as low as 3.5%. More flexible credit requirements. Great for buyers with less-than-perfect credit."
      },
      {
        title: "Conventional Loans",
        description: "As low as 3% down for first-time buyers. Private mortgage insurance may apply. Strong credit gets the best rates."
      },
      {
        title: "USDA Loans",
        description: "0% down in eligible rural areas. Income limits apply. Check if your Lowcountry community qualifies."
      },
      {
        title: "SC Housing Loans",
        description: "South Carolina-specific programs for first-time buyers. Down payment assistance available for qualifying buyers."
      }
    ]
  },

  // =====================
  // COSTS SECTION
  // =====================
  costs: {
    headline: "Understanding the costs beyond the down payment.",
    subtitle: "Knowing all the costs upfront helps you budget properly and avoid surprises at closing.",
    breakdown: [
      { category: "Down Payment", range: "3-20% of purchase price", description: "Your upfront equity in the home" },
      { category: "Closing Costs", range: "2-5% of loan amount", description: "Appraisal, title, attorney, origination fees" },
      { category: "Pre-Paid Items", range: "Varies", description: "Property taxes, homeowner's insurance, escrow reserves" },
      { category: "Inspection & Survey", range: "$500-1,500", description: "One-time fees for due diligence" },
      { category: "PMI (if applicable)", range: "0.5-1% of loan annually", description: "Required if down payment under 20%" }
    ],
    note: "We'll give you a Loan Estimate within 3 business days of your application. This document breaks down all projected costs clearly."
  },

  // =====================
  // TIMELINE SECTION
  // =====================
  timeline: {
    headline: "From 'maybe' to 'keys' in 30-45 days.",
    subtitle: "Typical timeline for a smooth first-time buyer transaction.",
    milestones: [
      { phase: "Days 1-3", task: "Application and document collection" },
      { phase: "Days 4-7", task: "Pre-approval issued" },
      { phase: "Days 8-21", task: "House hunting with pre-approval" },
      { phase: "Day 22", task: "Offer accepted, loan submitted to underwriting" },
      { phase: "Days 23-35", task: "Underwriting and conditions" },
      { phase: "Days 36-42", task: "Final approval and clear to close" },
      { phase: "Days 43-45", task: "Closing and keys" }
    ],
    disclaimer: "Timelines vary based on loan type, complexity, and current market conditions."
  },

  // =====================
  // COMMON QUESTIONS SECTION
  // =====================
  commonQuestions: {
    headline: "Questions first-time buyers consistently ask.",
    items: [
      {
        question: "How much down payment do I really need?",
        answer: "It depends on the loan type. Conventional loans can be as low as 3%, FHA is 3.5%, and some programs (like USDA or physician loans) can go to 0%. More down payment means lower monthly payments and potentially better rates, but the 'right' amount is what fits your current savings and goals."
      },
      {
        question: "What's the difference between FHA and conventional?",
        answer: "FHA loans are government-backed and allow lower credit scores and down payments, but require mortgage insurance for the life of the loan. Conventional loans typically require higher credit scores but offer more flexibility and lower costs if you can put down 20% or more."
      },
      {
        question: "Can I use gift money for my down payment?",
        answer: "Yes, in most cases. Gift funds from family members are generally acceptable, though lenders will require a gift letter stating the funds don't need to be repaid. We'll help you document this properly."
      },
      {
        question: "What costs beyond down payment should I plan for?",
        answer: "Plan for 2-5% of the loan amount in closing costs (appraisal, title, attorney, origination), plus pre-paid items like property taxes and homeowner's insurance. You'll also need an inspection ($400-600) and potentially a survey. We provide a Loan Estimate early so you know exactly what to expect."
      },
      {
        question: "How do I know if I'm ready to buy?",
        answer: "Key indicators: stable employment (2+ years), credit score in the 620+ range, debt manageable relative to income, and enough savings for down payment plus 2-3 months of reserves. Not sure? Let's talk — a 15-minute conversation can help you understand where you stand."
      },
      {
        question: "Do I need to be pre-approved before house hunting?",
        answer: "You're not required to be pre-approved, but it's strongly recommended. Pre-approval tells you exactly what you can afford, shows realtors and sellers you're serious, and speeds up the offer process once you find the right home."
      }
    ]
  },

  // =====================
  // CTA SECTION
  // =====================
  cta: {
    headline: "Ready to take the first step?",
    subhead: "Get pre-approved and know exactly what you can afford before you start shopping.",
    ctaPrimary: "Start Pre-Approval",
    ctaPrimaryLink: "https://synovus.com/maggieblank",
    ctaSecondary: "Download Buyer's Guide",
    ctaSecondaryLink: "/resources/first-time-buyer-guide"
  },

  // =====================
  // TRUST BAR
  // =====================
  trustBar: {
    items: [
      "NMLS #504377",
      "First-time buyer specialists",
      "FHA, Conventional, USDA available",
      "South Carolina housing programs"
    ]
  }
};

export default firstTimeBuyers;
