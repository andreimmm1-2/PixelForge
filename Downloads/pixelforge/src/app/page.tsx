import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { PricingCards } from "@/components/sections/PricingCards";
import { Accordion } from "@/components/ui/Accordion";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { projects, faq, testimonials, clientLogos } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Recent Work" title="Selected projects" subtitle="A few of the businesses we've helped go from invisible to unmissable." />
        <PortfolioGrid projects={projects.slice(0, 3)} />
        <div className="text-center mt-10">
          <Button href="/portfolio" variant="outline">
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <section className="py-14 border-y border-border">
        <p className="text-center text-muted text-sm mb-8 uppercase tracking-widest">Trusted by growing businesses</p>
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {clientLogos.map((logo) => (
            <span key={logo} className="text-white/30 font-semibold text-lg">{logo}</span>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Pricing" title="Simple, honest pricing" subtitle="A one-off build cost, plus a small monthly fee for hosting, security and support." />
        <PricingCards />
        <div className="text-center mt-10">
          <Button href="/pricing" variant="outline">
            Compare Plans in Detail <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <section className="py-20 px-6 max-w-3xl mx-auto">
        <SectionHeader eyebrow="FAQ" title="Questions, answered" />
        <Accordion items={faq.slice(0, 5)} />
        <div className="text-center mt-10">
          <Button href="/faq" variant="outline">
            View All FAQs <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <Testimonials testimonials={testimonials} />
      <CTA />
    </>
  );
}
