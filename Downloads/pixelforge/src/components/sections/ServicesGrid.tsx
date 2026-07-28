"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Service } from "@/types";

export const ServicesGrid = ({ services }: { services: Service[] }) => (
  <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
    {services.map((s, i) => {
      const palettes = [
        { bg: "bg-accent/10", ring: "ring-accent/20", dot: "bg-accent" },
        { bg: "bg-accent-2/10", ring: "ring-accent-2/20", dot: "bg-accent-2" },
        { bg: "bg-success/8", ring: "ring-success/20", dot: "bg-success" },
      ];
      const p = palettes[i % palettes.length];

      return (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
        >
          <Card className="p-8 h-full relative overflow-visible">
            <div className={`w-14 h-14 rounded-2xl ${p.bg} ring-1 ${p.ring} flex items-center justify-center text-2xl mb-5`}> 
              <div className="text-xl">{s.emoji}</div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-muted text-sm mb-4 max-w-xl">{s.description}</p>
              </div>
            </div>

            <div className="mt-3 space-y-3">
              {s.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-white/85 text-sm">
                  <div className={`${p.dot} w-3 h-3 rounded-full shrink-0`} />
                  <div className="font-medium text-sm">{b}</div>
                </div>
              ))}
            </div>

            <div className="absolute -right-6 -top-6 w-24 h-24 rounded-lg opacity-10 bg-gradient-to-br from-accent to-accent-2 blur-2xl pointer-events-none" />
          </Card>
        </motion.div>
      );
    })}
  </div>
);
