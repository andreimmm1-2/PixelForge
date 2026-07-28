import Link from "next/link";
import { Sparkles, Twitter, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-3 font-bold text-lg text-white mb-4" aria-label="Northline Studio home">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </span>
            <span>Northline Studio</span>
            <span className="sr-only">— web design</span>
          </Link>
          <p className="text-muted text-sm max-w-xs">
            Custom websites for startups and small businesses that need a clearer, stronger online presence.
          </p>
          <div className="flex gap-3 mt-6">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-border flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Navigate</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/terms" className="text-muted hover:text-white text-sm transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="text-muted hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Get in touch</h4>
          <p className="text-muted text-sm">Use the contact form for the quickest response.</p>
          <p className="text-muted text-sm mt-2">UK-based, remote-first</p>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Northline Studio. All rights reserved.
      </div>
    </footer>
  );
}
