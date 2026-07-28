"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`w-full max-w-6xl flex items-center justify-between rounded-2xl px-5 transition-all duration-300 backdrop-blur-sm ${
          scrolled ? "h-14 glass shadow-soft" : "h-20 bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 font-bold text-lg text-white" aria-label="Gaith home">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </span>
          <span className="leading-none">Gaith</span>
          <span className="sr-only">— web design</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  active ? "text-accent bg-accent/10" : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button href="/contact" size="sm">
            Get a free quote
          </Button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-1 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2" fullWidth>
              Get a free quote
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
