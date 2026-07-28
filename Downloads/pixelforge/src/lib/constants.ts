import { Project, Service, FAQItem, Testimonial, TeamMember } from "@/types";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const projects: Project[] = [
  {
    slug: "bakery-deluxe",
    name: "Bakery Deluxe",
    industry: "Food & Beverage",
    description:
      "A full ecommerce redesign that increased online orders through a streamlined checkout and a custom product builder.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop",
    features: ["Custom Product Builder", "Loyalty Program", "Local Delivery Zones", "SEO"],
    tech: ["Next.js", "Tailwind", "Stripe", "Sanity"],
  },
  {
    slug: "legal-hub",
    name: "Legal Hub",
    industry: "Professional Services",
    description:
      "A secure client portal with document automation and e-signature workflow for a growing family law practice.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    features: ["Role-Based Access", "Encrypted Storage", "E-Signature", "GDPR Ready"],
    tech: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
  },
  {
    slug: "fitforge-gym",
    name: "FitForge Gym",
    industry: "Health & Fitness",
    description:
      "A bold, high-energy site with class booking, membership tiers, and a live timetable that syncs with their front desk software.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    features: ["Class Booking", "Membership Portal", "Live Timetable", "Instructor Profiles"],
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    slug: "north-and-oak",
    name: "North & Oak Interiors",
    industry: "Interior Design",
    description:
      "A visually rich portfolio site with an immersive project gallery and a before/after slider that showcases renovation work.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    features: ["Immersive Gallery", "Before/After Slider", "Enquiry Funnel", "CMS-Driven"],
    tech: ["Next.js", "Contentful", "Framer Motion"],
  },
  {
    slug: "harbourside-dental",
    name: "Harbourside Dental",
    industry: "Healthcare",
    description:
      "A calm, trustworthy brand refresh with online booking integration and patient resources that improved appointment attendance.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
    features: ["Online Booking", "Patient Resources", "Review Widget", "Accessibility AA"],
    tech: ["Next.js", "Tailwind", "Cal.com"],
  },
  {
    slug: "the-tap-room",
    name: "The Tap Room",
    industry: "Hospitality",
    description:
      "A characterful pub website with a live events calendar, menu builder, and table reservation system.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
    features: ["Events Calendar", "Menu Builder", "Reservations", "Local SEO"],
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    slug: "greenline-logistics",
    name: "Greenline Logistics",
    industry: "Logistics",
    description:
      "A data-forward corporate site with a live shipment tracker demo and investor-grade case study pages.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200&auto=format&fit=crop",
    features: ["Shipment Tracker Demo", "Case Studies", "Careers Portal", "Multi-language"],
    tech: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    slug: "willow-and-co",
    name: "Willow & Co Florists",
    industry: "Retail",
    description:
      "A soft, elegant storefront with same-day delivery checkout and a subscription flower box offering.",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop",
    features: ["Subscription Checkout", "Same-day Delivery", "Gift Notes", "Instagram Feed"],
    tech: ["Next.js", "Shopify API", "Tailwind"],
  },
];

export const services: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    emoji: "🏢",
    description: "Full-site builds that reflect your brand and turn visitors into enquiries.",
    benefits: ["Custom UI/UX", "Mobile-first responsive", "Integrated CMS", "Performance-tuned"],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    emoji: "🎯",
    description: "High-converting single pages for campaigns, launches, and ad traffic.",
    benefits: ["A/B test ready", "Sub-1.5s load times", "Analytics built in", "Lead capture forms"],
  },
  {
    id: "redesigns",
    title: "Website Redesigns",
    emoji: "♻️",
    description: "Modernise an ageing site without losing the SEO equity you've already built.",
    benefits: ["SEO-safe migration", "Design system rebuild", "Content audit", "Speed uplift"],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    emoji: "🛠️",
    description: "Ongoing updates, monitoring and fixes so your site stays fast and secure.",
    benefits: ["Monthly updates", "Uptime monitoring", "Priority bug fixes", "Monthly report"],
  },
  {
    id: "hosting",
    title: "Hosting",
    emoji: "☁️",
    description: "Managed, UK-friendly hosting with backups and SSL handled for you.",
    benefits: ["Daily backups", "Free SSL", "CDN included", "99.9% uptime"],
  },
  {
    id: "performance",
    title: "Performance Optimisation",
    emoji: "⚡",
    description: "Technical audits and fixes that push your Core Web Vitals into the green.",
    benefits: ["Image & asset optimisation", "Code splitting", "Caching strategy", "Lighthouse 90+"],
  },
  {
    id: "seo",
    title: "SEO",
    emoji: "🔍",
    description: "Technical and on-page SEO foundations that help local customers find you.",
    benefits: ["Structured data", "Local SEO setup", "Keyword-mapped content", "Search Console setup"],
  },
  {
    id: "custom-development",
    title: "Custom Development",
    emoji: "🧩",
    description: "Bespoke features, integrations and tools built around how your business works.",
    benefits: ["API integrations", "Custom dashboards", "Booking/payment systems", "Scalable architecture"],
  },
];

export const faq: FAQItem[] = [
  { question: "How long does a typical website take to build?", answer: "Most projects are delivered within 4-6 weeks from kickoff to launch, depending on scope and how quickly feedback comes back to us." },
  { question: "Do you provide ongoing maintenance?", answer: "Yes. We offer monthly maintenance packages covering security updates, performance monitoring and priority support." },
  { question: "What's included in the Starter plan?", answer: "A five-page custom site, basic on-page SEO, hosting and an SSL certificate, all backed by our £20/month care plan." },
  { question: "Can you redesign my existing website?", answer: "Absolutely. We audit your current site, preserve your SEO rankings, and rebuild it with a modern design system and faster performance." },
  { question: "Do I own the website once it's built?", answer: "Yes, full ownership of the code and design transfers to you on final payment. There's no lock-in." },
  { question: "Will my website work on mobile?", answer: "Every site we build is mobile-first and tested across devices before launch." },
  { question: "Do you write the content for me?", answer: "We can. Copywriting is available as an add-on, or we're happy to work with content you already have." },
  { question: "How much does a website cost?", answer: "Starter projects begin at £250 plus £20/month, with Business plans from £450 plus £30/month. Premium projects are custom-quoted." },
  { question: "What's the £20/month for?", answer: "It covers hosting, SSL, backups, security monitoring and small ongoing fixes so you never have to think about the technical side." },
  { question: "Can I cancel the monthly plan?", answer: "Yes, with 30 days' notice. You keep full ownership of the site regardless." },
  { question: "Do you offer e-commerce websites?", answer: "Yes, from simple product catalogues to full checkout and inventory systems." },
  { question: "How do I request changes after launch?", answer: "Simply message your account manager. Small changes are usually turned around within 48 hours." },
  { question: "What platforms do you build on?", answer: "We hand-code with Next.js and React rather than page builders, which means faster, more secure, more flexible sites." },
  { question: "Will my site rank on Google?", answer: "We build every site with technical SEO foundations in place. Ranking also depends on content and competition, which we can advise on." },
  { question: "Do you offer payment plans?", answer: "Yes, most projects can be split across two or three milestone payments." },
  { question: "What information do you need from me to start?", answer: "Your branding (if you have it), a rough idea of pages/content needed, and examples of sites you like." },
  { question: "Can you integrate booking or payment systems?", answer: "Yes, we regularly integrate Stripe, Cal.com, and other booking/payment tools." },
  { question: "Do you work with businesses outside your local area?", answer: "Yes, we work with clients across the UK remotely, with calls and updates throughout the project." },
  { question: "What if I need a feature you haven't listed?", answer: "Get in touch, most custom requirements can be scoped as part of our Custom Development service." },
  { question: "How do we get started?", answer: "Book a free consultation through our contact page and we'll come back to you within 24 hours with next steps." },
];

export const testimonials: Testimonial[] = [
  { name: "Sarah Mitchell", role: "Marketing Director", company: "Bloom Boutique", content: "PixelForge turned our outdated site into a fast, modern shop that doubled our online revenue within two months.", rating: 5 },
  { name: "James Okafor", role: "Owner", company: "The Tap Room", content: "They understood exactly what our pub needed. Bookings through the site went up almost immediately after launch.", rating: 5 },
  { name: "Priya Anand", role: "Practice Manager", company: "Harbourside Dental", content: "Professional from the first call to the final handover. Our patients constantly comment on how easy the new site is to use.", rating: 5 },
  { name: "Tom Whitfield", role: "Founder", company: "Greenline Logistics", content: "The performance improvements alone paid for the project. Our site finally feels as serious as the business it represents.", rating: 4 },
];

export const teamMembers: TeamMember[] = [
  { name: "Alex Rivera", role: "Co-Founder & Lead Engineer" },
  { name: "Mia Patel", role: "Co-Founder & Design Director" },
  { name: "Sam Whitaker", role: "Frontend Developer" },
];

export const clientLogos = ["Bloom", "TapRoom", "Harbourside", "Greenline", "Willow&Co", "FitForge", "North&Oak", "LegalHub"];
