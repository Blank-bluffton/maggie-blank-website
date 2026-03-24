'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram } from 'lucide-react';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterNewsletter {
  headline: string;
  placeholder: string;
  button: string;
}

interface FooterLegal {
  nmls: string;
  copyright: string;
  privacy: string;
  terms: string;
}

interface FooterProps {
  newsletter?: FooterNewsletter;
  links?: FooterLink[];
  legal?: FooterLegal;
}

export default function Footer({ 
  newsletter, 
  links, 
  legal 
}: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const footerLinks = links || [
    { text: "Home", href: "/" },
    { text: "Physician Loans", href: "/physician-loans" },
    { text: "First-Time Buyers", href: "/first-time-buyers" },
    { text: "Self-Employed", href: "/self-employed" },
    { text: "Blog", href: "/blog" },
    { text: "Lowcountry Market", href: "/lowcountry-market" },
    { text: "About Maggie", href: "/about" },
    { text: "Resources", href: "/resources" },
    { text: "Contact", href: "/contact" }
  ];

  const footerLegal = legal || {
    nmls: "NMLS #504377",
    copyright: "© 2026 Maggie Blank | Synovus Bank",
    privacy: "/privacy",
    terms: "/terms"
  };

  const newsletterConfig = newsletter || {
    headline: "Subscribe for Lowcountry mortgage insights",
    placeholder: "Enter your email",
    button: "Subscribe"
  };

  return (
    <footer className="bg-[#526E7A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md">
                <span className="text-[#526E7A] font-bold text-lg">MB</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-lg tracking-tight">Maggie Blank</span>
                <span className="text-xs text-[#CDB291] tracking-widest uppercase">Mortgage Banker</span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-white/80 mb-8 max-w-md">
              Premium mortgage guidance for homebuyers who demand more than a rate quote. 
              Serving physicians, first-time buyers, and self-employed borrowers in the Lowcountry.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <h4 className="text-white font-semibold mb-3">{newsletterConfig.headline}</h4>
              {subscribed ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[#C5A059]"
                >
                  Thanks for subscribing!
                </motion.p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterConfig.placeholder}
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#C5A059]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-[#C5A059] text-[#333333] rounded-lg hover:bg-[#CDB291] transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com/maggie.blank"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 5).map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-[#C5A059] transition-colors"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Blog</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blog"
                  className="text-white/80 hover:text-[#C5A059] transition-colors"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/physician-mortgage-guide-2026"
                  className="text-white/80 hover:text-[#C5A059] transition-colors"
                >
                  Physician Loans
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/first-time-buyer-mistakes"
                  className="text-white/80 hover:text-[#C5A059] transition-colors"
                >
                  First-Time Buyers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/bluffton-neighborhood-guide"
                  className="text-white/80 hover:text-[#C5A059] transition-colors"
                >
                  Local Market
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/self-employed-mortgage-options"
                  className="text-white/80 hover:text-[#C5A059] transition-colors"
                >
                  Self-Employed
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  3 Belfair Village Drive<br />
                  Bluffton, SC 29910
                </span>
              </li>
              <li>
                <a
                  href="tel:8437063101"
                  className="flex items-center gap-3 text-white/80 hover:text-[#C5A059] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                  (843) 706-3101 <span className="text-white/50">Office</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:8435757768"
                  className="flex items-center gap-3 text-white/80 hover:text-[#C5A059] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#C5A059]" />
                  (843) 575-7768 <span className="text-white/50">Cell</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:maggieblank@synovus.com"
                  className="flex items-center gap-3 text-white/80 hover:text-[#C5A059] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#C5A059]" />
                  maggieblank@synovus.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              {footerLegal.copyright}
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-white/60 text-sm">{footerLegal.nmls}</span>
              <Link href="/privacy" className="text-white/60 hover:text-[#C5A059] text-sm transition-colors">
                {footerLegal.privacy}
              </Link>
              <Link href="/terms" className="text-white/60 hover:text-[#C5A059] text-sm transition-colors">
                {footerLegal.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
