import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Maggie Blank | Premium Mortgage Lending in the Lowcountry",
  description: "Mortgage strategy for physicians, first-time buyers, and self-employed borrowers. Expert guidance in Bluffton, Hilton Head, and the SC Lowcountry.",
  keywords: ["mortgage", "physician loans", "self-employed mortgage", "first-time buyer", "Lowcountry", "Bluffton", "Hilton Head", "Beaufort", "SC", "NMLS 504377", "construction loans", "jumbo loans"],
  authors: [{ name: "Maggie Blank" }],
  creator: "Maggie Blank",
  publisher: "Synovus Bank",
  metadataBase: new URL("https://maggie-website-pi.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maggie-website-pi.vercel.app",
    siteName: "Maggie Blank - Lowcountry Mortgage Advisor",
    title: "Maggie Blank | Premium Mortgage Lending in the Lowcountry",
    description: "Mortgage strategy for physicians, first-time buyers, and self-employed borrowers. Expert guidance in Bluffton, Hilton Head, and the SC Lowcountry.",
    images: [
      {
        url: "/maggie-blank-logo.png",
        width: 1024,
        height: 1024,
        alt: "Maggie Blank - Lowcountry Mortgage Advisor Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Maggie Blank | Premium Mortgage Lending in the Lowcountry",
    description: "Mortgage strategy for physicians, first-time buyers, and self-employed borrowers. Expert guidance in Bluffton, Hilton Head, and the SC Lowcountry.",
    creator: "@maggieblank",
    images: ["/maggie-blank-logo.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "google-site-verification-code",
  },
  icons: {
    icon: [{ url: "/favicon.png" }],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MortgageOrLoan",
            "name": "Maggie Blank - Lowcountry Mortgage Advisor",
            "description": "Premium mortgage guidance for physicians, first-time buyers, and self-employed borrowers in the SC Lowcountry.",
            "url": "https://maggie-website-pi.vercel.app",
            "telephone": "+1-843-706-3101",
            "email": "maggieblank@synovus.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3 Belfair Village Drive",
              "addressLocality": "Bluffton",
              "addressRegion": "SC",
              "postalCode": "29910",
              "addressCountry": "US"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Bluffton, Hilton Head, Beaufort, Okatie, Hardeeville, SC Lowcountry"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Fr 09:00-17:00",
            "image": "https://maggie-website-pi.vercel.app/maggie-blank-logo.png",
            "logo": "https://maggie-website-pi.vercel.app/maggie-blank-logo.png",
            "sameAs": [
              "https://www.facebook.com/maggie.blank",
              "https://www.linkedin.com/in/maggieblank"
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Synovus Bank",
              "url": "https://www.synovus.com"
            },
            "financialProduct": [
              { "@type": "FinancialProduct", "name": "Physician Loans", "description": "Up to 100% financing for doctors with deferred debt, no PMI" },
              { "@type": "FinancialProduct", "name": "Self-Employed Mortgages", "description": "Bank statement programs and alternative documentation" },
              { "@type": "FinancialProduct", "name": "Conventional Loans", "description": "Competitive rates for qualified buyers" },
              { "@type": "FinancialProduct", "name": "Construction Loans", "description": "Finance from foundation to finish" },
              { "@type": "FinancialProduct", "name": "Private Wealth Mortgages", "description": "Jumbo loans for high-net-worth clients" }
            ]
          }) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer 
          newsletter={{
            headline: "Subscribe for Lowcountry mortgage insights",
            placeholder: "Enter your email",
            button: "Subscribe"
          }}
          links={[
            { text: "Home", href: "/" },
            { text: "Physician Loans", href: "/physician-loans" },
            { text: "First-Time Buyers", href: "/first-time-buyers" },
            { text: "Construction Loans", href: "/construction" },
            { text: "Lowcountry Market", href: "/lowcountry-market" },
            { text: "About Maggie", href: "/about" },
            { text: "Resources", href: "/resources" },
            { text: "Contact", href: "/contact" }
          ]}
          legal={{
            nmls: "NMLS #504377",
            copyright: "© 2026 Maggie Blank | Synovus Bank",
            privacy: "Privacy Policy",
            terms: "Terms"
          }}
        />
      </body>
    </html>
  );
}
