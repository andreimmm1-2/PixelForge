"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Palette, Zap, Search, ShieldCheck, PoundSterling, MapPin } from "lucide-react";

const features = [
  { icon: Palette, title: "Bespoke Design", desc: "Every pixel crafted to reflect your brand's voice, not a template." },
  { icon: Zap, title: "Lightning Fast", desc: "Built on Next.js with sub-2s load times and Core Web Vitals in the green." },
  { icon: Search, title: "SEO Ready", desc: "Structured data and semantic HTML from day one, so Google understands you." },
  { icon: ShieldCheck, title: "Ongoing Support", desc: "Monthly maintenance, security patches, and priority support included." },
  { icon: PoundSterling, title: "Transparent Pricing", desc: "Clear upfront and recurring costs. No hidden fees, ever." },
  { icon: MapPin, title: "UK Based Team", desc: "Local developers who understand your market and your customers." },
];

export const Features = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto">
    <SectionHeader eyebrow="Why PixelForge" title="Built different, built better" subtitle="We blend the discipline of enterprise engineering with the creativity of a boutique studio." />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
        >
          <Card className="p-6 h-full">
            <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center text-accent mb-4">
              <f.icon className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white text-lg mb-2">{f.title}</h3>
            <p className="text-muted text-sm">{f.desc}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);
