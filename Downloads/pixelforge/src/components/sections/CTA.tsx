"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const CTA = () => (
  <section className="py-24 px-6">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center glass rounded-3xl p-12 md:p-16"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        Ready to elevate your online presence?
      </h2>
      <p className="text-muted text-lg max-w-xl mx-auto mb-8">
        Book a free, no-obligation consultation and let's build something your customers remember.
      </p>
      <Button href="/contact" size="lg">
        Get Your Free Quote <ArrowRight className="w-5 h-5" />
      </Button>
    </motion.div>
  </section>
);
