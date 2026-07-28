"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  { number: "01", title: "Discovery", desc: "We learn about your business, goals and audience on a free call." },
  { number: "02", title: "Design", desc: "Wireframes into high-fidelity mockups, with your feedback shaping every screen." },
  { number: "03", title: "Develop", desc: "Clean, fast, hand-coded builds using Next.js, Tailwind and Framer Motion." },
  { number: "04", title: "Launch", desc: "SEO checks, performance testing, and a smooth handover." },
  { number: "05", title: "Support", desc: "Ongoing maintenance and priority support, if you want it." },
];

export const HowItWorks = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto">
    <SectionHeader eyebrow="Our Process" title="From idea to live site" subtitle="Transparent, collaborative and fast — here's exactly how a project runs." />
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
      {steps.map((s, i) => (
        <motion.div
          key={s.number}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="glass rounded-2xl p-6 flex flex-col gap-3 text-center items-center"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center font-bold text-white text-sm">
            {s.number}
          </div>
          <h3 className="font-semibold text-white">{s.title}</h3>
          <p className="text-muted text-sm">{s.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
