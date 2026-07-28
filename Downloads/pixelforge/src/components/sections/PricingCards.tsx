"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const plans = [
  {
    name: "Discovery",
    price: "Free consultation",
    recurring: "",
    desc: "A short call to understand your goals, audience and the scope you actually need.",
    features: ["Project goals", "Page list", "Content review", "Initial estimate"],
    highlight: false,
  },
  {
    name: "Website build",
    price: "Fixed quote",
    recurring: "",
    desc: "Once the scope is clear, we quote the build as one defined project so there are no surprises.",
    features: ["Custom design", "Development", "Revisions", "Launch support"],
    highlight: true,
  },
  {
    name: "Ongoing care",
    price: "Monthly support",
    recurring: "",
    desc: "Optional hosting, updates and maintenance after launch if you want us to stay involved.",
    features: ["Hosting", "Security updates", "Backups", "Small fixes"],
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
          {p.highlight && <Badge className="w-fit mb-4">Best fit for most projects</Badge>}
          <h3 className="text-xl font-semibold text-white">{p.name}</h3>
          <p className="text-muted text-sm mt-2">{p.desc}</p>
          <div className="mt-6">
            <span className="text-3xl font-bold text-white">{p.price}</span>
            {p.recurring && <span className="text-muted"> · {p.recurring}</span>}
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
            Discuss the project
          </Button>
        </Card>
      </motion.div>
    ))}
  </div>
);
