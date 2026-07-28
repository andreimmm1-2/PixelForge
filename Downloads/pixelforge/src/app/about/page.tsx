import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { teamMembers, testimonials } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "PixelForge is a UK web design agency helping local businesses grow online with fast, custom-built websites.",
};

export default function AboutPage() {
  return (
    <div className="pb-10">
      <div className="px-6 pt-10 max-w-3xl mx-auto">
        <SectionHeader eyebrow="About Us" title="A small team, obsessed with the details" />
        <div className="space-y-5 text-muted text-lg leading-relaxed">
          <p>
            PixelForge began as a local collaboration between a designer and a developer who
            were tired of seeing small businesses stuck with slow, forgettable sites. We focus
            on practical design and technical craftsmanship so every project earns its place.
          </p>

          <p>
            We build websites for retailers, hospitality, clinics and professional services —
            businesses that rely on clear messaging and measurable leads. Our work balances
            clean design with fast performance and straightforward processes so you can see
            the return on your investment.
          </p>

          <p>
            We’re a small, UK-based team that values direct communication, realistic timelines,
            and honest pricing. If your website could do more for your business, start with a
            short, free consultation and we'll share practical next steps.
          </p>
        </div>
      </div>

      <div className="py-20 px-6 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Our Team" title="The people behind the pixels" />
        <div className="grid sm:grid-cols-3 gap-6">
          {teamMembers.map((m) => (
            <div key={m.name} className="glass rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-2 mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="font-semibold text-white">{m.name}</h3>
              <p className="text-muted text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Testimonials testimonials={testimonials} />
      <CTA />
    </div>
  );
}
