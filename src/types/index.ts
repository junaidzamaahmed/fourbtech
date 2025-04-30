export interface ProjectShowcase {
  company: string;
  title: string;
  description: string;
  projectLink: string;
  imageUrl: string;
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

export interface Employee {
  name: string;
  role: string;
  image: string;
  description?: string;
  email: string;
  linkedin: string;
}

export interface Services {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface IndustrySolutionType {
  icon: string;
  title: string;
  desc: string;
}

export interface WhyUsType {
  icon: string;
  title: string;
}

export interface AppBenifitesType {
  icon: string;
  title: string;
  desc: string;
}

export interface Team {
  image: string;
  title: string;
  desc: string;
}

export interface TitleDesc {
  title?: string;
  desc: string;
}
