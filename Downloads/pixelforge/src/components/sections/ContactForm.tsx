"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-2xl p-10 text-center"
      >
        <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Thanks — message sent!</h3>
        <p className="text-muted">We'll come back to you within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label="Business Name" id="business" required placeholder="Acme Ltd" />
        <Input label="Your Name" id="name" required placeholder="Jane Smith" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label="Email" id="email" type="email" required placeholder="jane@acme.co.uk" />
        <Input label="Phone" id="phone" type="tel" placeholder="07123 456789" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Select label="Business Type" id="businessType" defaultValue="">
          <option value="" disabled>Select an option</option>
          <option>Retail</option>
          <option>Hospitality</option>
          <option>Professional Services</option>
          <option>Health & Fitness</option>
          <option>Other</option>
        </Select>
        <Select label="Budget" id="budget" defaultValue="">
          <option value="" disabled>Select an option</option>
          <option>Under £500</option>
          <option>£500 – £1,500</option>
          <option>£1,500 – £5,000</option>
          <option>£5,000+</option>
        </Select>
      </div>
      <Textarea label="Message" id="message" required placeholder="Tell us a little about your project..." />
      <Button type="submit" fullWidth size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};
