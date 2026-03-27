'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    label: 'Loan Solutions', 
    children: [
      { href: '/physician-loans', label: 'Physician Loans' },
      { href: '/private-wealth', label: 'Private Wealth' },
      { href: '/construction', label: 'Construction Loans' },
      { href: '/conventional', label: 'Conventional' },
    ]
  },
  { href: '/concierge', label: 'Concierge Approach' },
  { 
    label: 'Lowcountry Market', 
    children: [
      { href: '/lowcountry-market/builders', label: 'Builders' },
      { href: '/lowcountry-market/closing-attorneys', label: 'Closing Attorneys' },
      { href: '/lowcountry-market/insurance', label: 'Insurance' },
      { href: '/lowcountry-market/neighborhoods', label: 'Neighborhoods' },
      { href: '/lowcountry-market/realtors', label: 'Realtors' },
      { href: '/lowcountry-market/schools', label: 'Schools' },
      { href: '/lowcountry-market/services', label: 'Services' },
    ]
  },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const toggleDropdown = (label: string) => {
    if (openDropdown === label) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(label);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - links to homepage */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md overflow-hidden transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-[#526E7A] to-[#4A6D7C]' 
                : 'bg-white shadow-lg'
            }`}>
              <img 
                src="/maggie-blank-logo.png" 
                alt="Maggie Blank Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
          </Link>

          {/* Text - links to About page */}
          <Link href="/about" className="flex flex-col group">
            <span className={`font-semibold text-lg tracking-tight ${
              isScrolled ? 'text-[#333333]' : 'text-[#333333]'
            }`}>Maggie Blank</span>
            <span className={`text-xs tracking-widest uppercase ${
              isScrolled ? 'text-[#777777]' : 'text-[#777777]'
            }`}>Mortgage Advisor</span>
            <span className={`text-xs tracking-widest uppercase ${
              isScrolled ? 'text-[#777777]' : 'text-[#777777]'
            }`}>NMLS 504377</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                ref={link.children ? dropdownRef : undefined}
                className="relative"
                onMouseEnter={() => link.children && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.children ? (
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    className={`flex items-center gap-1 px-4 py-2 transition-colors rounded-lg ${
                      isScrolled 
                        ? 'text-[#555555] hover:text-[#526E7A] hover:bg-[#F8F8F8]' 
                        : 'text-[#333333] hover:text-[#526E7A] hover:bg-white/50'
                    } ${openDropdown === link.label ? 'text-[#526E7A] font-semibold' : ''}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-4 py-2 transition-colors rounded-lg ${
                      pathname === link.href 
                        ? 'text-[#526E7A] font-semibold' 
                        : isScrolled 
                          ? 'text-[#555555] hover:text-[#526E7A] hover:bg-[#F8F8F8]'
                          : 'text-[#333333] hover:text-[#526E7A] hover:bg-white/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden"
                      style={{ pointerEvents: 'auto' }}
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-3 text-[#555555] hover:text-[#526E7A] hover:bg-[#F8F8F8] transition-colors border-l-3 hover:border-l-[#C5A059]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="https://www.synovus.com/maggieblank"
              className="px-6 py-3 bg-gradient-to-r from-[#526E7A] to-[#4A6D7C] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#526E7A]/30 transition-all duration-300"
            >
              Get Pre-Approved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#333333]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden"
            >
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <div className="px-4 py-3 text-[#777777] text-sm font-medium">{link.label}</div>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-6 py-3 text-[#555555] hover:text-[#526E7A] hover:bg-[#F8F8F8] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-[#555555] hover:text-[#526E7A] hover:bg-[#F8F8F8] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="p-4 border-t border-[#E5E5E5]">
                <Link
                  href="https://www.synovus.com/maggieblank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 bg-gradient-to-r from-[#526E7A] to-[#4A6D7C] text-white font-semibold rounded-lg"
                >
                  Get Pre-Approved
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
