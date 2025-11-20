export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // We will map this string to an actual icon component
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  image?: string;
}

export interface NavLink {
  label: string;
  path: string;
  subLinks?: { label: string; path: string }[];
}