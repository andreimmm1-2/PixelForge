"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const sizeMap: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantMap: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent/90 shadow-glow",
  secondary: "bg-accent-2 text-white hover:bg-accent-2/90",
  outline: "bg-transparent border border-border text-white hover:bg-white/5",
};

export const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const classes = `rounded-xl font-medium transition-all duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${sizeMap[size]} ${variantMap[variant]} ${fullWidth ? "w-full" : ""} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
};
