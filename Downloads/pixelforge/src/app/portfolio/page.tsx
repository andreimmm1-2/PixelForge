import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/components/sections/CTA";
import { Card } from "@/components/ui/Card";

export default function PortfolioPage() {
  return (
    <div className="pb-10">
      <div className="px-6 pt-10 max-w-6xl mx-auto">
        <SectionHeader eyebrow="Portfolio" title="Work in progress" subtitle="We’re building a real portfolio section as the studio takes on projects. For now, this page shows the standard we’re aiming for rather than invented client work." />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Design direction", desc: "Premium, minimal layouts with clear hierarchy and strong conversion focus." },
            { title: "Build quality", desc: "Fast, accessible pages with careful motion and solid technical foundations." },
            { title: "Future case studies", desc: "When we have genuine live projects, they’ll be added here with real outcomes." },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
      <CTA />
    </div>
  );
}
