'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, User, Mail, Phone, Building2, Clock, Stethoscope, Check, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  loanType: string;
  timeline: string;
  // Physician-specific fields
  specialty: string;
  practiceName: string;
  yearsInPractice: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  loanType?: string;
  timeline?: string;
}

const loanTypes = [
  { value: 'purchase', label: 'Purchase Home' },
  { value: 'refinance', label: 'Refinance' },
  { value: 'construction', label: 'Construction Loan' },
  { value: 'physician', label: 'Physician Loan' },
  { value: 'first-time', label: 'First-Time Buyer' },
];

const timelines = [
  { value: 'immediate', label: 'Immediately' },
  { value: '1-3-months', label: '1-3 Months' },
  { value: '3-6-months', label: '3-6 Months' },
  { value: '6+months', label: '6+ Months' },
];

const physicianSpecialties = [
  'Anesthesiology',
  'Cardiology',
  'Dermatology',
  'Emergency Medicine',
  'Family Medicine',
  'Internal Medicine',
  'Neurology',
  'Obstetrics/Gynecology',
  'Oncology',
  'Ophthalmology',
  'Orthopedic Surgery',
  'Pediatrics',
  'Psychiatry',
  'Radiology',
  'Surgery',
  'Other',
];

export default function ContactForm() {
  const [isPhysician, setIsPhysician] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    loanType: '',
    timeline: '',
    specialty: '',
    practiceName: '',
    yearsInPractice: '',
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)]+$/.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.loanType) {
      newErrors.loanType = 'Please select a loan type';
    }
    
    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-8 text-center max-w-md mx-auto"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center">
          <Check className="w-8 h-8 text-slate-900" />
        </div>
        <h3 className="heading-md text-white mb-2">Thank You!</h3>
        <p className="text-slate-400">
          We've received your information. Maggie or her team will be in touch within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 max-w-lg mx-auto">
      <div className="text-center mb-6">
        <h2 className="heading-md text-white mb-2">Get Started</h2>
        <p className="text-slate-400 text-sm">
          Tell us about yourself and we&apos;ll find the right loan for you.
        </p>
      </div>

      {/* Physician Toggle */}
      <div className="mb-6">
        <button
          type="button"
          onClick={() => setIsPhysician(!isPhysician)}
          className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
            isPhysician
              ? 'bg-cyan-500/10 border-cyan-500/50'
              : 'bg-slate-900/40 border-slate-700 hover:border-slate-600'
          }`}
          aria-pressed={isPhysician}
        >
          <div className="flex items-center gap-3">
            <Stethoscope className={`w-5 h-5 ${isPhysician ? 'text-cyan-400' : 'text-slate-500'}`} />
            <span className={`font-medium ${isPhysician ? 'text-cyan-400' : 'text-slate-300'}`}>
              I'm a Physician
            </span>
          </div>
          <div className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${
            isPhysician ? 'bg-cyan-500' : 'bg-slate-700'
          }`}>
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
              animate={{ left: isPhysician ? '28px' : '4px' }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </div>
        </button>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="firstName" className="block text-sm text-slate-400 mb-2">
            First Name *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className={`glass-input w-full pl-10 ${errors.firstName ? 'error' : ''}`}
              placeholder="John"
              aria-invalid={!!errors.firstName}
              aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            />
          </div>
          {errors.firstName && (
            <p id="firstName-error" className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm text-slate-400 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleChange('lastName', e.target.value)}
            className={`glass-input w-full ${errors.lastName ? 'error' : ''}`}
            placeholder="Doe"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Contact Fields */}
      <div className="space-y-4 mb-4">
        <div>
          <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
            Email *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`glass-input w-full pl-10 ${errors.email ? 'error' : ''}`}
              placeholder="john@example.com"
              aria-invalid={!!errors.email}
            />
          </div>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm text-slate-400 mb-2">
            Phone *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className={`glass-input w-full pl-10 ${errors.phone ? 'error' : ''}`}
              placeholder="(555) 123-4567"
              aria-invalid={!!errors.phone}
            />
          </div>
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Loan Type & Timeline */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="loanType" className="block text-sm text-slate-400 mb-2">
            Loan Type *
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <select
              id="loanType"
              value={formData.loanType}
              onChange={(e) => handleChange('loanType', e.target.value)}
              className={`glass-input w-full pl-10 appearance-none cursor-pointer ${errors.loanType ? 'error' : ''}`}
              aria-invalid={!!errors.loanType}
            >
              <option value="">Select...</option>
              {loanTypes.map(type => (
                <option key={type.value} value={type.value} className="bg-slate-800">
                  {type.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>
          {errors.loanType && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.loanType}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm text-slate-400 mb-2">
            Timeline *
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <select
              id="timeline"
              value={formData.timeline}
              onChange={(e) => handleChange('timeline', e.target.value)}
              className={`glass-input w-full pl-10 appearance-none cursor-pointer ${errors.timeline ? 'error' : ''}`}
              aria-invalid={!!errors.timeline}
            >
              <option value="">Select...</option>
              {timelines.map(t => (
                <option key={t.value} value={t.value} className="bg-slate-800">
                  {t.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
          </div>
          {errors.timeline && (
            <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.timeline}
            </p>
          )}
        </div>
      </div>

      {/* Physician-specific fields */}
      <AnimatePresence>
        {isPhysician && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-slate-700/50">
              <p className="text-cyan-400 text-sm mb-4 font-medium">
                Physician Loan Details
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="specialty" className="block text-sm text-slate-400 mb-2">
                    Medical Specialty
                  </label>
                  <select
                    id="specialty"
                    value={formData.specialty}
                    onChange={(e) => handleChange('specialty', e.target.value)}
                    className="glass-input w-full appearance-none cursor-pointer"
                  >
                    <option value="">Select specialty...</option>
                    {physicianSpecialties.map(s => (
                      <option key={s} value={s} className="bg-slate-800">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="practiceName" className="block text-sm text-slate-400 mb-2">
                      Practice/Hospital Name
                    </label>
                    <input
                      type="text"
                      id="practiceName"
                      value={formData.practiceName}
                      onChange={(e) => handleChange('practiceName', e.target.value)}
                      className="glass-input w-full"
                      placeholder="Hospital name"
                    />
                  </div>
                  <div>
                    <label htmlFor="yearsInPractice" className="block text-sm text-slate-400 mb-2">
                      Years in Practice
                    </label>
                    <input
                      type="number"
                      id="yearsInPractice"
                      value={formData.yearsInPractice}
                      onChange={(e) => handleChange('yearsInPractice', e.target.value)}
                      className="glass-input w-full"
                      placeholder="5"
                      min="0"
                      max="50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="glass-button w-full mt-6 flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <>
            <span>Get Started</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </>
        )}
      </motion.button>

      <p className="text-slate-500 text-xs text-center mt-4">
        By submitting, you agree to be contacted about your mortgage options.
      </p>
    </form>
  );
}
