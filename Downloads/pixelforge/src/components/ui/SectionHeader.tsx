"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-2xl mb-12 ${className}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">{title}</h2>
      {subtitle && <p className="text-muted text-lg mt-4">{subtitle}</p>}
    </motion.div>
  );
};
