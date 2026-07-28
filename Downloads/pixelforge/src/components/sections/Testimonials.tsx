"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Testimonial } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Testimonials = ({ testimonials }: { testimonials: Testimonial[] }) => (
  <section className="py-20">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader eyebrow="Client Voices" title="What our clients say" />
      <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 snap-x">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="glass rounded-2xl p-6 min-w-[300px] max-w-[320px] shrink-0 snap-start"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className={`w-4 h-4 ${s < t.rating ? "fill-accent text-accent" : "text-white/20"}`} />
              ))}
            </div>
            <p className="text-white/80 text-sm italic">"{t.content}"</p>
            <div className="mt-4">
              <p className="font-semibold text-white text-sm">{t.name}</p>
              <p className="text-muted text-xs">{t.role}, {t.company}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
