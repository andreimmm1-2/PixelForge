"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Palette, Zap, Search, ShieldCheck, PoundSterling, MapPin } from "lucide-react";

const features = [
  { icon: Palette, title: "Custom design", desc: "Every page is shaped around your business instead of a generic template." },
  { icon: Zap, title: "Fast delivery", desc: "Small teams need momentum, so we keep the process lean and responsive." },
  { icon: Search, title: "SEO foundations", desc: "Semantic markup, metadata and clean structure are in place from day one." },
  { icon: ShieldCheck, title: "Maintenance available", desc: "If you want ongoing support, we can keep the site updated after launch." },
  { icon: PoundSterling, title: "Clear quoting", desc: "You get a written scope and quote before any work starts." },
  { icon: MapPin, title: "UK-based", desc: "We work remotely with UK clients and keep communication straightforward." },
];

export const Features = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto">
    <SectionHeader eyebrow="Why choose us" title="Built for early-stage businesses" subtitle="Clear scope, clean design, and practical execution for teams that need a professional website without the agency fluff." />
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
