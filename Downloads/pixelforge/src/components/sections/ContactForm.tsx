"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Input, Textarea, Select } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const business = String(formData.get("business") || "").trim();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const businessType = String(formData.get("businessType") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Website enquiry${business ? ` from ${business}` : ""}`;
    const body = [
      `Business: ${business || "Not provided"}`,
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Phone: ${phone || "Not provided"}`,
      `Business type: ${businessType || "Not provided"}`,
      `Budget: ${budget || "Not provided"}`,
      "",
      message || "No message provided.",
    ].join("\n");

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          business,
          name,
          email,
          phone,
          businessType,
          budget,
          message,
        }),
      });

      const result = await response.json();
      if (!response.ok || result?.error) {
        throw new Error(result?.error || 'Unable to send the message right now.');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err?.message || 'We couldn’t send the message. Please try again or email us directly.');
    } finally {
      setLoading(false);
    }
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
        <Input label="Business Name" id="business" name="business" required placeholder="Acme Ltd" />
        <Input label="Your Name" id="name" name="name" required placeholder="Jane Smith" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Input label="Email" id="email" name="email" type="email" required placeholder="jane@acme.co.uk" />
        <Input label="Phone" id="phone" name="phone" type="tel" placeholder="07123 456789" />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Select label="Business Type" id="businessType" name="businessType" defaultValue="">
          <option value="" disabled>Select an option</option>
          <option>Retail</option>
          <option>Hospitality</option>
          <option>Professional Services</option>
          <option>Health & Fitness</option>
          <option>Other</option>
        </Select>
        <Select label="Budget" id="budget" name="budget" defaultValue="">
          <option value="" disabled>Select an option</option>
          <option>Under £500</option>
          <option>£500 – £1,500</option>
          <option>£1,500 – £5,000</option>
          <option>£5,000+</option>
        </Select>
      </div>
      <Textarea label="Message" id="message" name="message" required placeholder="Tell us a little about your project..." />
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
      <Button type="submit" fullWidth size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};
