import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description: "Business websites, landing pages, redesigns, SEO, hosting and custom development for UK businesses.",
};

export default function ServicesPage() {
  return (
    <div className="pb-10">
      <div className="px-6 pt-10">
        <SectionHeader eyebrow="Services" title="Everything your website needs" subtitle="From first build to long-term growth — one team, one clear plan." />
      </div>
      <ServicesGrid services={services} />
      <CTA />
    </div>
  );
}
