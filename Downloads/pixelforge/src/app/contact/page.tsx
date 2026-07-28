import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with PixelForge for a free, no-obligation website quote.",
};

export default function ContactPage() {
  return (
    <div className="pb-20 px-6 max-w-6xl mx-auto">
      <SectionHeader eyebrow="Contact" title="Let's build something great" subtitle="Tell us about your project and we'll come back to you within 24 hours." />

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <ContactForm />
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <Mail className="w-5 h-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-white">Email us</h4>
              <p className="text-muted text-sm">hello@pixelforge.co.uk</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <MapPin className="w-5 h-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-white">Location</h4>
              <p className="text-muted text-sm">Bridgwater, Somerset, UK — remote clients welcome</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <Clock className="w-5 h-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-white">Response time</h4>
              <p className="text-muted text-sm">Within 24 hours, Monday to Friday</p>
            </div>
          </div>
          <div className="glass rounded-2xl overflow-hidden h-56">
            <iframe
              title="map"
              className="w-full h-full grayscale opacity-70"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-2.99%2C51.11%2C-2.95%2C51.15&layer=mapnik"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
