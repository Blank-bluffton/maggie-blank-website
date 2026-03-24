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
