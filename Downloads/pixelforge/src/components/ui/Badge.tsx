import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "danger";
  className?: string;
}

const map = {
  primary: "bg-accent/15 text-accent",
  secondary: "bg-accent-2/15 text-accent-2",
  success: "bg-success/15 text-success",
  danger: "bg-danger/15 text-danger",
};

export const Badge = ({ children, variant = "primary", className = "" }: BadgeProps) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${map[variant]} ${className}`}>
    {children}
  </span>
);
