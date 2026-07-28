import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCards } from "@/components/sections/PricingCards";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/sections/CTA";
import { faq } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for websites, hosting and ongoing support.",
};

const pricingFaq = faq.filter((f) => f.question.toLowerCase().includes("cost") || f.question.toLowerCase().includes("plan") || f.question.toLowerCase().includes("month") || f.question.toLowerCase().includes("pay"));

export default function PricingPage() {
  return (
    <div className="pb-10">
      <div className="px-6 pt-10">
        <SectionHeader eyebrow="Pricing" title="One clear price, no surprises" subtitle="A one-off build cost plus a small monthly fee covering hosting, security, backups and support." />
      </div>
      <PricingCards />

      <div className="py-20 px-6">
        <SectionHeader eyebrow="Compare" title="What's included in each plan" />
        <ComparisonTable />
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-10">
        <SectionHeader eyebrow="Pricing FAQ" title="Common pricing questions" />
        <Accordion items={pricingFaq.length ? pricingFaq : faq.slice(0, 4)} />
      </div>

      <CTA />
    </div>
  );
}
