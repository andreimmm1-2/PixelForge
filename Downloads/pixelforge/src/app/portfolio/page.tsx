"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { CTA } from "@/components/sections/CTA";
import { projects } from "@/lib/constants";

export default function PortfolioPage() {
  const industries = ["All", ...Array.from(new Set(projects.map((p) => p.industry)))];
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.industry === filter);

  return (
    <div className="pb-10">
      <div className="px-6 pt-10 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Portfolio" title="Work we're proud of" subtitle="Eight real-world builds across retail, hospitality, health and professional services." />

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                filter === ind ? "bg-accent text-white" : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        <motion.div layout>
          <PortfolioGrid projects={filtered} />
        </motion.div>
      </div>
      <CTA />
    </div>
  );
}
