import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Gaith is a small UK web design studio helping startups launch with clear, custom-built websites.",
};

export default function AboutPage() {
  return (
    <div className="pb-10">
      <div className="px-6 pt-10 max-w-3xl mx-auto">
        <SectionHeader eyebrow="About Us" title="A small studio, focused on the essentials" />
        <div className="space-y-5 text-muted text-lg leading-relaxed">
          <p>
            Gaith started as a small collaboration between a designer and a developer
            who were tired of seeing startups launch with generic, forgettable sites. We focus on
            practical design and technical craftsmanship so every project earns its place.
          </p>

          <p>
            We build websites for early-stage businesses that need clear messaging, strong
            visual structure and a site that feels credible from day one. Our work balances
            clean design with fast performance and a straightforward process.
          </p>

          <p>
            We’re a small, UK-based team that values direct communication, realistic timelines
            and honest quoting. If you need a strong starting point online, start with a short
            free consultation and we’ll outline practical next steps.
          </p>
        </div>
      </div>

      <div className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeader eyebrow="What we do" title="A practical team structure" />
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { title: "Strategy", desc: "Defining pages, priorities and a launch plan that makes sense for your business." },
            { title: "Design", desc: "Creating a clean visual system that feels premium without looking overdone." },
            { title: "Build", desc: "Turning the design into a fast, accessible website that is easy to maintain." },
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-8">
              <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}
