import type { Metadata } from "next";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-20">
      <SectionHeader eyebrow="Legal" title="Terms of Service" align="left" />
      <div className="space-y-6 text-muted leading-relaxed">
        <p>Last updated: July 2026</p>

        <h2 className="text-xl font-semibold text-white pt-4">1. Agreement to Terms</h2>
        <p>
          These Terms of Service govern your use of services provided by Gaith
          ("we", "us"). By engaging our services, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">2. Services</h2>
        <p>
          We provide website design, development, hosting, maintenance and related digital
          services as agreed in a project proposal or statement of work. Scope, timelines
          and deliverables will be confirmed in writing prior to project commencement.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">3. Payment Terms</h2>
        <p>
          One-off project fees are typically split across milestone payments. Recurring
          monthly fees (hosting, maintenance and support) are billed monthly in advance and
          may be cancelled with 30 days' written notice.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">4. Intellectual Property</h2>
        <p>
          Upon full payment, ownership of the final website design and code transfers to
          the client. We retain the right to showcase completed work in our
          portfolio unless otherwise agreed in writing.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">5. Client Responsibilities</h2>
        <p>
          Clients are responsible for providing timely feedback, content and access needed
          to complete the project. Delays in providing these may affect project timelines.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">6. Cancellation</h2>
        <p>
          Either party may terminate an ongoing engagement with 30 days' written notice.
          Work completed up to the point of cancellation remains payable.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">7. Limitation of Liability</h2>
        <p>
          Gaith shall not be liable for indirect, incidental or consequential damages
          arising from the use of our services, to the maximum extent permitted by law.
        </p>

        <h2 className="text-xl font-semibold text-white pt-4">8. Governing Law</h2>
        <p>These terms are governed by the laws of England and Wales.</p>

        <h2 className="text-xl font-semibold text-white pt-4">9. Contact</h2>
        <p>Questions about these terms can be sent through the contact form on the website.</p>
      </div>
    </div>
  );
}
