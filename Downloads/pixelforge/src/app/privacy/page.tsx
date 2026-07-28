import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <SectionHeader eyebrow="Legal" title="Privacy Policy" align="left" />
      <div className="space-y-6 text-muted leading-relaxed">
        <p>Last updated: July 2026</p>

        <h2 className="text-xl font-semibold text-white pt-4">1. Who we are</h2>
        <p>
          PixelForge Digital Ltd ("PixelForge", "we", "us") is a web design agency based in
          the United Kingdom. This policy explains how we collect, use and protect your
          personal data.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">2. Information we collect</h2>
        <p>
          When you contact us via our website, we collect information you provide directly,
          such as your name, business name, email address, phone number and project details.
          We may also collect basic analytics data about how visitors use our site.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">3. How we use your information</h2>
        <p>
          We use your information to respond to enquiries, deliver contracted services,
          send project-related communications, and improve our website and services.
          We do not sell your personal data to third parties.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">4. Data storage and security</h2>
        <p>
          We take reasonable technical and organisational measures to protect your data,
          including encrypted storage and restricted access. Data is retained only as long
          as necessary for the purposes outlined in this policy.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">5. Your rights</h2>
        <p>
          Under UK GDPR, you have the right to access, correct, or request deletion of your
          personal data. To exercise these rights, contact us at hello@pixelforge.co.uk.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">6. Cookies</h2>
        <p>
          Our website may use essential cookies for functionality and, with consent,
          analytics cookies to help us understand site usage.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">7. Changes to this policy</h2>
        <p>We may update this policy from time to time. Material changes will be reflected on this page.</p>

        <h2 className="text-xl font-semibold text-white pt-4">8. Contact</h2>
        <p>Questions about this policy can be sent to hello@pixelforge.co.uk.</p>
      </div>
    </div>
  );
}
