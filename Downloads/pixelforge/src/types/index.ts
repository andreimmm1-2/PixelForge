export interface Project {
  slug: string;
  name: string;
  industry: string;
  description: string;
  image: string;
  features: string[];
  tech: string[];
}

export interface Service {
  id: string;
  title: string;
  emoji: string;
  description: string;
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
}
