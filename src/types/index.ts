export interface ProjectShowcase {
  company: string;
  title: string;
  description: string;
  projectLink: string;
}

export interface CustomerFeedback {
  name: string;
  company: string;
  role: string;
  feedback: string;
  rating: number;
  avatarUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Insight {
  image: string;
  date: string;
  title: string;
  link: string;
}