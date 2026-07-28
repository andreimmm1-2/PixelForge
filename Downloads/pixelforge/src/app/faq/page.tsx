import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/sections/CTA";
import { faq } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about pricing, process, hosting and support.",
};

export default function FAQPage() {
  return (
    <div className="pb-10">
      <div className="px-6 pt-10 max-w-3xl mx-auto">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" subtitle="Can't find what you're looking for? Get in touch and we'll answer directly." />
        <Accordion items={faq} />
      </div>
      <CTA />
    </div>
  );
}
