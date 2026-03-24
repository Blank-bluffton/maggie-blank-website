'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building2,
  Calendar
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
                <Building2 className="w-4 h-4" />
                Get In Touch
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="heading-xl mb-6"
            >
              Let&apos;s Talk{' '}
              <span className="text-gradient-mixed">Financing</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-slate-400 text-lg max-w-2xl mx-auto mb-8"
            >
              Whether you&apos;re buying your dream home, refinancing, or exploring physician loan options — 
              I&apos;m here to guide you through every step.
            </motion.p>

            {/* Decorative line */}
            <motion.div 
              variants={fadeInUp}
              className="flex justify-center"
            >
              <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="relative py-12 px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Direct Contact Info */}
              <div className="glass-card p-6">
                <h3 className="heading-md text-white mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  <motion.a 
                    href="tel:+18437063101"
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Office</p>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">843-706-3101</p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="tel:+18435757768"
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Cell</p>
                      <p className="text-white font-medium group-hover:text-pink-400 transition-colors">843-575-7768</p>
                    </div>
                  </motion.a>

                  <motion.a 
                    href="mailto:maggieblank@synovus.com"
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Email</p>
                      <p className="text-white font-medium group-hover:text-purple-400 transition-colors">maggieblank@synovus.com</p>
                    </div>
                  </motion.a>

                  <motion.div 
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-900/50"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs">Office</p>
                      <p className="text-white font-medium">3 Belfair Village Drive</p>
                      <p className="text-slate-400 text-sm">Bluffton, SC 29910</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-card p-6">
                <h3 className="heading-md text-white mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Monday - Friday</span>
                    <span className="text-white font-medium">8:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-white font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
                
                {/* Calendar CTA */}
                <motion.div 
                  className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-slate-300 text-sm mb-3">
                    Need a time outside regular hours?
                  </p>
                  <a 
                    href="https://calendly.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule a Call
                  </a>
                </motion.div>
              </div>

              {/* Map Placeholder */}
              <div className="glass-card p-6">
                <h3 className="heading-md text-white mb-4">Location</h3>
                <div className="relative h-48 rounded-xl overflow-hidden bg-slate-900/80 border border-slate-700">
                  {/* Map placeholder with decorative elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                      <p className="text-slate-400 text-sm">Bluffton, SC</p>
                      <p className="text-slate-500 text-xs mt-1">Lowcountry Region</p>
                    </div>
                  </div>
                  
                  {/* Decorative grid overlay */}
                  <div className="absolute inset-0 opacity-20" 
                    style={{
                      backgroundImage: `linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  {/* Pin marker */}
                  <motion.div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <div className="w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-cyan-400" />
                  </motion.div>
                </div>
                <p className="text-slate-500 text-xs mt-3 text-center">
                  Located in Belfair Village, Bluffton
                </p>
              </div>

              {/* NMLS Info */}
              <div className="glass-card-light p-4 text-center">
                <p className="text-slate-500 text-xs">
                  NMLS #504377 • Synovus Bank • Equal Housing Lender
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-16 px-4 border-t border-slate-800/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading-lg text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-slate-400 mb-8">
            Join hundreds of satisfied homeowners in the Lowcountry who trusted me with their financing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              href="tel:+18437063101"
              className="glass-button flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
            <motion.a 
              href="mailto:maggieblank@synovus.com"
              className="glass-button-secondary glass-button flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4" />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
