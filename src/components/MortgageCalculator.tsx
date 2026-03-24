'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Percent, Calendar, Home, Info } from 'lucide-react';

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(400000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [downPayment, setDownPayment] = useState(80000);
  const [showInfo, setShowInfo] = useState(false);

  const calculations = useMemo(() => {
    const principal = loanAmount - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      return {
        monthlyPayment: principal / numberOfPayments,
        totalPayment: principal,
        totalInterest: 0,
        principal,
      };
    }

    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
      principal,
    };
  }, [loanAmount, interestRate, loanTerm, downPayment]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const sliderConfigs = [
    {
      label: 'Home Price',
      value: loanAmount,
      min: 100000,
      max: 2000000,
      step: 10000,
      onChange: setLoanAmount,
      icon: Home,
    },
    {
      label: 'Down Payment',
      value: downPayment,
      min: 0,
      max: loanAmount * 0.5,
      step: 5000,
      onChange: setDownPayment,
      icon: DollarSign,
    },
    {
      label: 'Interest Rate',
      value: interestRate,
      min: 2,
      max: 12,
      step: 0.125,
      onChange: setInterestRate,
      icon: Percent,
      suffix: '%',
    },
    {
      label: 'Loan Term',
      value: loanTerm,
      min: 10,
      max: 30,
      step: 5,
      onChange: setLoanTerm,
      icon: Calendar,
      suffix: ' years',
    },
  ];

  return (
    <div className="glass-card p-6 md:p-8 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 flex items-center justify-center">
            <Calculator className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h2 className="heading-md text-white">Payment Calculator</h2>
            <p className="text-slate-400 text-sm">Estimate your monthly payment</p>
          </div>
        </div>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
          aria-label="Toggle info"
        >
          <Info className="w-4 h-4 text-slate-500" />
        </button>
      </div>

      {showInfo && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="mb-6 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
        >
          <p className="text-slate-400 text-sm">
            This is a simple estimate for illustration purposes. Your actual rate and payment 
            may vary based on credit score, debt-to-income ratio, and other factors. 
            Contact Maggie for a personalized quote.
          </p>
        </motion.div>
      )}

      {/* Monthly Payment Display */}
      <div className="text-center mb-8 p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-teal-500/5 to-transparent border border-cyan-500/20">
        <p className="text-slate-400 text-sm mb-1">Estimated Monthly Payment</p>
        <motion.div
          key={calculations.monthlyPayment}
          initial={{ scale: 0.95, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl font-bold text-gradient"
        >
          {formatCurrency(calculations.monthlyPayment)}
        </motion.div>
        <p className="text-slate-500 text-xs mt-2">Principal & Interest Only</p>
      </div>

      {/* Input Sliders */}
      <div className="space-y-6">
        {sliderConfigs.map((config) => {
          const Icon = config.icon;
          const percentage = ((config.value - config.min) / (config.max - config.min)) * 100;

          return (
            <div key={config.label}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-slate-500" />
                  <span className="text-sm text-slate-400">{config.label}</span>
                </div>
                <span className="text-sm font-medium text-white">
                  {config.label === 'Interest Rate' || config.label === 'Loan Term'
                    ? `${config.value}${config.suffix}`
                    : formatCurrency(config.value)}
                </span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  value={config.value}
                  onChange={(e) => config.onChange(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-slate-800"
                  style={{
                    background: `linear-gradient(to right, #06b6d4 0%, #06b6d4 ${percentage}%, #1e293b ${percentage}%, #1e293b 100%)`,
                  }}
                  aria-label={`${config.label}: ${config.value}`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-700/50">
        <div className="text-center">
          <p className="text-slate-500 text-xs mb-1">Loan Amount</p>
          <p className="text-sm font-semibold text-white">{formatCurrency(calculations.principal)}</p>
        </div>
        <div className="text-center">
          <p className="text-slate-500 text-xs mb-1">Total Interest</p>
          <p className="text-sm font-semibold text-white">{formatCurrency(calculations.totalInterest)}</p>
        </div>
        <div className="text-center">
          <p className="text-slate-500 text-xs mb-1">Total Cost</p>
          <p className="text-sm font-semibold text-white">{formatCurrency(calculations.totalPayment)}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 text-center">
        <p className="text-slate-400 text-sm">
          Want a more accurate quote?{' '}
          <a href="#contact" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
            Get in touch →
          </a>
        </p>
      </div>
    </div>
  );
}
