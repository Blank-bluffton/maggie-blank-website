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
  { href: '/about', label: 'Meet Maggie' },
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Complete original brand lockup always returns home. */}
          <Link href="/" aria-label="Maggie Blank home" className="flex items-center gap-2.5 rounded-lg group">
            <div className="flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img 
                src="/maggie-blank-logo-transparent.png"
                alt=""
                className="h-12 w-12 object-contain drop-shadow-[0_2px_5px_rgba(82,110,122,0.2)]"
              />
            </div>
            <span className="flex flex-col">
              <span className="text-lg font-semibold tracking-tight text-[#333333]">Maggie Blank</span>
              <span className="mt-0.5 text-xs tracking-widest text-[#526E7A] uppercase">Mortgage Advisor</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.filter((link) => link.label !== 'Contact').map((link) => (
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
                    className={`flex items-center gap-1 px-3 xl:px-4 py-2 transition-colors rounded-lg ${
                      'text-[#555555] hover:text-[#526E7A] hover:bg-[#F8F8F8]'
                    } ${openDropdown === link.label ? 'text-[#526E7A] font-semibold' : ''}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`px-3 xl:px-4 py-2 transition-colors rounded-lg ${
                      pathname === link.href 
                        ? 'text-[#526E7A] font-semibold' 
                        : 'text-[#555555] hover:text-[#526E7A] hover:bg-[#F8F8F8]'
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
          <div className="hidden xl:block">
            <Link
              href="https://www.synovus.com/maggieblank"
              className="inline-flex whitespace-nowrap px-5 xl:px-6 py-3 bg-gradient-to-r from-[#526E7A] to-[#4A6D7C] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#526E7A]/30 transition-all duration-300"
            >
              Get Pre-Approved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-[#333333]"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
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
              className="md:hidden max-h-[calc(100vh-64px)] overflow-y-auto border-t border-gray-100 bg-white"
            >
              {/* Navigation Links */}
              <div className="pb-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setMobileOpenGroup(mobileOpenGroup === link.label ? null : link.label)}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-[#526E7A] hover:bg-[#F8F8F8]"
                          aria-expanded={mobileOpenGroup === link.label}
                        >
                          {link.label}
                          <ChevronDown className={`h-4 w-4 transition-transform ${mobileOpenGroup === link.label ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileOpenGroup === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.18 }}
                              className="overflow-hidden bg-[#F8F8F8]"
                            >
                              <div className="pb-2 pl-4">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-4 py-3 text-sm text-[#555555] hover:bg-white hover:text-[#526E7A]"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-[#333333] font-medium hover:bg-gray-50"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="sticky bottom-0 border-t border-gray-100 bg-white p-4 shadow-[0_-8px_20px_rgba(0,0,0,0.06)]">
                <Link
                  href="https://www.synovus.com/maggieblank"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center px-5 py-3.5 bg-gradient-to-r from-[#526E7A] to-[#4A6D7C] text-white font-semibold rounded-lg"
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
