'use client';

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  glow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  children, 
  className = "",
  glow = false,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles = "font-medium rounded-xl transition-all duration-300 inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-cyan text-background hover:bg-icy-blue",
    secondary: "bg-teal/20 text-cyan border border-teal/30 hover:bg-teal/30",
    outline: "bg-transparent border border-cyan/30 text-cyan hover:bg-cyan/10"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const glowClass = glow ? "glow-cyan" : "";
  
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${glowClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
    >
      {children}
    </motion.button>
  );
}
