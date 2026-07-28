import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Gaith for a free website discovery call.",
};

export default function ContactPage() {
  return (
    <div className="pb-20 px-6 max-w-6xl mx-auto">
      <SectionHeader eyebrow="Contact" title="Let's talk about your website" subtitle="Tell us what you need and we’ll reply with next steps within 24 hours." />

      <div className="grid md:grid-cols-5 gap-10">
        <div className="md:col-span-3">
          <ContactForm />
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <Mail className="w-5 h-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-white">Email us</h4>
              <p className="text-muted text-sm">Use the form for the fastest response</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <MapPin className="w-5 h-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-white">Location</h4>
              <p className="text-muted text-sm">UK-based, remote-first</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6 flex items-start gap-4">
            <Clock className="w-5 h-5 text-accent mt-1" />
            <div>
              <h4 className="font-semibold text-white">Response time</h4>
              <p className="text-muted text-sm">Within 24 hours, Monday to Friday</p>
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h4 className="font-semibold text-white mb-2">What happens next</h4>
            <p className="text-muted text-sm leading-relaxed">
              Send the form, tell us what you need, and we’ll reply with a practical next step
              or a short list of questions if we need a bit more detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
