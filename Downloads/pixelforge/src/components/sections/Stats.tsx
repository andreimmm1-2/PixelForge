"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const stats = [
  { label: "Project focus", value: "Limited project intake while the studio grows" },
  { label: "Response time", value: "Usually within 1 working day" },
  { label: "Build style", value: "Custom-coded, not a page builder template" },
];

export const Stats = () => (
  <section className="py-16 border-y border-border bg-card/20">
    <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="h-full"
        >
          <Card className="p-6 h-full text-center">
            <p className="text-xs uppercase tracking-widest text-accent mb-2">{s.label}</p>
            <p className="text-white text-lg font-medium">{s.value}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
);
