import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GradientBlobs, CursorGlow } from "@/components/ui/Backdrop";

export const metadata: Metadata = {
  metadataBase: new URL("https://northline.studio"),
  title: {
    default: "Northline Studio — Web design for startups",
    template: "%s | Northline Studio",
  },
  description:
    "Northline Studio builds clean, custom websites for startups and small businesses that need a strong online presence.",
  openGraph: {
    title: "Northline Studio — Web design for startups",
    description:
      "Custom websites, redesigns and ongoing support for startups and small businesses. Fast, clear and built to convert.",
    url: "https://northline.studio",
    siteName: "Northline Studio",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northline Studio — Web design for startups",
    description:
      "Custom websites, redesigns and ongoing support for startups and small businesses. Fast, clear and built to convert.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-bg text-white noise relative">
        <GradientBlobs />
        <CursorGlow />
        <Navbar />
        <main className="relative z-10 pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
