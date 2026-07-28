"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const Hero = () => {
  return (
    <section className="relative px-6 pt-12 pb-24 lg:pb-32 grid lg:grid-cols-12 items-center gap-12 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-7"
      >
        <div className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass text-sm text-white/80">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          Startup studio — limited project intake
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-3xl leading-tight text-white"
        >
          Premium websites for local businesses that convert visitors into customers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-6 text-lg text-muted max-w-2xl"
        >
          Bespoke design, thoughtful UX, and fast performance — delivered with clear timelines and transparent pricing. We focus on measurable results so your website becomes a reliable lead generator.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Button href="/contact" size="lg" className="shadow-glow">
            Get a free quote <ArrowRight className="w-5 h-5" />
          </Button>
          <Button href="/portfolio" variant="outline" size="lg">
            View portfolio
          </Button>
        </motion.div>

        <div className="mt-8 flex gap-6 text-sm text-white/70 max-w-lg">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" /> Mobile first
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" /> Fast turnaround
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-muted" /> Free consultation
          </div>
        </div>
      </motion.div>

      {/* Device mockup for larger screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.18 }}
        className="hidden lg:flex lg:col-span-5 justify-center"
      >
        <div className="relative w-[420px] h-[260px] rounded-2xl bg-card border border-border shadow-soft overflow-hidden">
          <div className="absolute inset-3 rounded-xl overflow-hidden bg-gradient-to-br from-[#0b0b0d] via-[#0f1724] to-[#0b0b0d]">
            <div className="absolute -right-8 -top-8 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-blob" />
            <div className="p-6 h-full flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-tr from-[#111827] to-[#0b1220] rounded-xl flex items-center justify-center">
                <div className="w-[88%] h-[78%] bg-gradient-to-b from-white/6 to-transparent rounded-lg border border-white/6 flex items-center justify-center">
                  <div className="text-sm text-muted text-center px-6">Website direction preview — live case studies will be added as real projects launch</div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-10 w-36 h-36 bg-gradient-to-r from-accent to-accent-2 opacity-8 rounded-full filter blur-2xl" />
        </div>
      </motion.div>
    </section>
  );
};
