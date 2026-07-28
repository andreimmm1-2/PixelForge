"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const plans = [
  {
    name: "Starter",
    price: "From £250",
    recurring: "£20/month",
    desc: "A focused, professional site for new or local businesses.",
    features: ["Up to 5 pages", "On-page SEO basics", "Hosting & SSL", "Monthly backups"],
    highlight: false,
  },
  {
    name: "Business",
    price: "From £450",
    recurring: "£30/month",
    desc: "More pages, improved performance and ongoing support for growing businesses.",
    features: ["Up to 15 pages", "SEO setup", "Performance optimisation", "Priority support"],
    highlight: true,
  },
  {
    name: "Premium",
    price: "Custom quote",
    recurring: "",
    desc: "Full bespoke websites, integrations, and retained support for enterprise needs.",
    features: ["Fully custom design", "Custom development", "Account manager", "Strategic roadmap"],
    highlight: false,
  },
];

export const PricingCards = () => (
  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
    {plans.map((p, i) => (
      <motion.div
        key={p.name}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delay: i * 0.1, duration: 0.5 }}
      >
        <Card
          className={`p-8 h-full flex flex-col ${p.highlight ? "border-accent/60 shadow-glow" : ""}`}
          hover
        >
          {p.highlight && <Badge className="w-fit mb-4">Most Popular</Badge>}
          <h3 className="text-xl font-semibold text-white">{p.name}</h3>
          <p className="text-muted text-sm mt-2">{p.desc}</p>
          <div className="mt-6">
            <span className="text-3xl font-bold text-white">{p.price}</span>
            {p.recurring && <span className="text-muted"> + {p.recurring}</span>}
          </div>
          <div className="mt-6 space-y-3 flex-1">
            {p.features.map((f) => (
              <div key={f} className="flex items-start gap-2 text-white/80 text-sm">
                <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <Button href="/contact" fullWidth className="mt-8" variant={p.highlight ? "primary" : "outline"}>
            Request a quote
          </Button>
        </Card>
      </motion.div>
    ))}
  </div>
);
