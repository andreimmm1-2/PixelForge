import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PricingCards } from "@/components/sections/PricingCards";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/sections/CTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { faq } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Current status" title="We’re small on purpose" subtitle="We’re in startup mode, building carefully and taking on a limited number of projects so each one gets proper attention." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "No fake case studies",
              desc: "We’re not pretending to have a long client list yet. The site is being built honestly while the business grows.",
            },
            {
              title: "Focused project intake",
              desc: "We prefer a handful of well-scoped projects over a busy calendar and rushed delivery.",
            },
            {
              title: "Better foundations first",
              desc: "Clean design, clear messaging and reliable delivery matter more than inflated claims.",
            },
          ].map((item) => (
            <Card key={item.title} className="p-6 h-full">
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Pricing" title="How pricing works" subtitle="Every project is quoted after a short discovery call so the scope, timeline and cost are clear before any work starts." />
        <PricingCards />
        <div className="text-center mt-10">
          <Button href="/pricing" variant="outline">
            See how we quote <ArrowRight className="w-4 h-4" />
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

      <CTA />
    </>
  );
}
