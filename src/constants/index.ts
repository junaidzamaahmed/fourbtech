import { Employee, FAQItem, Insight, Services } from "@/types";
import { ProjectShowcase } from "@/types";
import { CustomerFeedback } from "@/types";

export const customerFeedbacks: CustomerFeedback[] = [
  {
    name: "Victor Osei",
    company: "CityVision Urban Labs",
    role: "Director of Innovation",
    feedback:
      "FourBtech created a real-time traffic management tool that drastically improved city flow metrics. Their AI pipeline was robust and efficient.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Sara Lee",
    company: "AgroMind AI",
    role: "Agricultural Data Lead",
    feedback:
      "Thanks to FourBtech’s vision system, we now predict crop yields with much higher precision. Their tech and timeline commitment are impressive.",
    rating: 4,
    avatarUrl: "https://i.pravatar.cc/150?img=17",
  },
  {
    name: "Daniel Huang",
    company: "VisionaryFX",
    role: "Risk Assessment Officer",
    feedback:
      "With their fraud detection engine, we reduced false positives significantly. We highly recommend their data science team.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=39",
  },
];

export const projectShowcaseData: ProjectShowcase[] = [
  {
    company: "NeoHealth Systems",
    title: "AI-Driven Medical Diagnosis Platform",
    description:
      "Required a fast, secure platform for diagnosing patient symptoms via image and voice input. We built a HIPAA-compliant AI model with TensorFlow and deployed a React-based frontend integrated with FastAPI for clinical insights.",
    projectLink: "https://ai-medical-platform.com",
    imageUrl: "/placeholders/palaceholder1.png",
  },
  {
    company: "FinWise Capital",
    title: "Predictive Analytics Dashboard for Investment Forecasting",
    description:
      "Needed a responsive analytics dashboard for real-time portfolio risk analysis and stock trend prediction. We implemented a D3.js-powered data viz system integrated with a PyTorch forecasting engine and microservice APIs.",
    projectLink: "https://finwise-ai-dashboard.com",
    imageUrl: "/placeholders/palaceholder1.png",
  },
  {
    company: "VeriEduTech",
    title: "Smart Learning Assistant Using NLP",
    description:
      "Wanted an adaptive AI chatbot to help students understand STEM concepts better. We fine-tuned GPT models for contextual Q&A and built a multilingual, accessible frontend using Next.js and TailwindCSS.",
    projectLink: "https://smartedu-assistant.com",
    imageUrl: "/placeholders/palaceholder1.png",
  },
  {
    company: "CityVision Urban Labs",
    title: "AI-Powered Urban Traffic Flow Optimization System",
    description:
      "Faced challenges in visualizing real-time traffic bottlenecks and signal optimization. We developed a computer vision pipeline with YOLOv8 and a live control dashboard using React, Firebase, and WebSocket APIs.",
    projectLink: "https://urban-trafficai.com",
    imageUrl: "/placeholders/palaceholder1.png",
  },
];

export const faqs: FAQItem[] = [
  {
    question: "What services does FourBtech specialize in?",
    answer:
      "To take a trivial example, which undertakes laborious coding effort solely to produce elegant digital experiences, with no annoying consequences for end-users.",
  },
  {
    question: "How secure are the applications developed by FourBtech?",
    answer:
      "Our development philosophy avoids any form of annoyance, employing robust encryption, authentication flows, and best practices in cybersecurity — because pleasure in software comes from peace of mind.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Except to obtain some advantage from streamlining workflows, we serve industries ranging from healthcare and finance to agriculture and education, ensuring custom-fit software solutions.",
  },
  {
    question: "Do you offer AI/ML integration services?",
    answer:
      "Yes, we embrace artificial intelligence not for the sake of complexity, but to deliver delightfully intelligent systems that ease the burden of repetitive decisions and offer meaningful insights.",
  },
  {
    question: "Can FourBtech handle enterprise-scale applications?",
    answer:
      "Even though it may seem laborious, our scalable architecture and containerized deployments allow us to serve enterprise clients with precision and reliability, turning complexity into clarity.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Though timelines vary, we believe in rapid iteration cycles that minimize wasted time while maximizing client satisfaction — with annoying delays kept to the absolute minimum.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, because we believe pleasure is sustained not in launching software, but in maintaining its quality, performance, and adaptability over time.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We choose tools not for their trendiness, but for their ability to create enjoyable, scalable, and maintainable systems — from React and Next.js to TensorFlow and FastAPI.",
  },
  {
    question: "Can you redesign or upgrade an existing product?",
    answer:
      "Undertaking such laborious transformation can be pleasurable when it results in improved UX, faster load times, and a renewed brand identity that users love.",
  },
  {
    question: "How do I get started with FourBtech?",
    answer:
      "Simply reach out through our contact form or schedule a free consultation. The journey from idea to execution begins with a single message — no annoying forms or hidden fees.",
  },
];

export const insights: Insight[] = [
  {
    image: "/placeholders/palaceholder3.png",
    date: "2025-04-15",
    title: "How Generative AI is Redefining Product Design",
    link: "https://fourbtech.com/insights/generative-ai-product-design",
  },
  {
    image: "/placeholders/palaceholder3.png",
    date: "2025-04-10",
    title: "5 Machine Learning Models Every Startup Should Know",
    link: "https://fourbtech.com/insights/ml-models-for-startups",
  },
  {
    image: "/placeholders/palaceholder3.png",
    date: "2025-04-03",
    title: "Designing Scalable UX for AI-Powered Apps",
    link: "https://fourbtech.com/insights/scalable-ux-ai",
  },
  {
    image: "/placeholders/palaceholder3.png",
    date: "2025-03-27",
    title: "Why Cybersecurity Should Be Baked Into Your MVP",
    link: "https://fourbtech.com/insights/cybersecurity-in-mvp",
  },
  {
    image: "/placeholders/palaceholder3.png",
    date: "2025-03-21",
    title: "How Small Teams Can Build Billion-Dollar Tech",
    link: "https://fourbtech.com/insights/startup-team-strategy",
  },
  {
    image: "/placeholders/palaceholder3.png",
    date: "2025-03-14",
    title: "Web3 Explained: Opportunities for Early-Stage Founders",
    link: "https://fourbtech.com/insights/web3-for-founders",
  },
  {
    image: "/placeholders/palaceholder3.png",
    date: "2025-03-06",
    title: "DevOps for Startups: Automate, Iterate, Succeed",
    link: "https://fourbtech.com/insights/devops-for-startups",
  },
];

export const employees: Employee[] = [
  {
    name: "Kazi Rafiqual Islam",
    role: "Co-Founder & Chairma",
    image: "/members/CHAIRMAIN.png",
    description:
      "B.Sc. Engr. Mechanical (DUET) <br/>M.Sc. Engr. PMRE - Non-thesis (BUET) <br/>MBA-SSM-Switzerland <br/>MSc Digital Marketing - I-JWL London <br/>Doctor of Business Administration <br/>(DBA) in progress)- I-JWL London.",
    email: "https://twitter.com/kazirafiqual",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
  {
    name: "Kazi Rafiqual Islam",
    role: "Co-Founder & Chairma",
    image: "/members/CHAIRMAIN.png",
    description:
      "B.Sc. Engr. Mechanical (DUET) <br/>M.Sc. Engr. PMRE - Non-thesis (BUET) <br/>MBA-SSM-Switzerland <br/>MSc Digital Marketing - I-JWL London <br/>Doctor of Business Administration <br/>(DBA) in progress)- I-JWL London.",
    email: "https://twitter.com/kazirafiqual",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
  {
    name: "Kazi Rafiqual Islam",
    role: "Co-Founder & Chairma",
    image: "/members/CHAIRMAIN.png",
    description:
      "B.Sc. Engr. Mechanical (DUET) <br/>M.Sc. Engr. PMRE - Non-thesis (BUET) <br/>MBA-SSM-Switzerland <br/>MSc Digital Marketing - I-JWL London <br/>Doctor of Business Administration <br/>(DBA) in progress)- I-JWL London.",
    email: "https://twitter.com/kazirafiqual",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
  {
    name: "Kazi Rafiqual Islam",
    role: "Co-Founder & Chairma",
    image: "/members/CHAIRMAIN.png",
    description:
      "B.Sc. Engr. Mechanical (DUET) <br/>M.Sc. Engr. PMRE - Non-thesis (BUET) <br/>MBA-SSM-Switzerland <br/>MSc Digital Marketing - I-JWL London <br/>Doctor of Business Administration <br/>(DBA) in progress)- I-JWL London.",
    email: "https://twitter.com/kazirafiqual",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
  {
    name: "Kazi Rafiqual Islam",
    role: "Co-Founder & Chairma",
    image: "/members/CHAIRMAIN.png",
    description:
      "B.Sc. Engr. Mechanical (DUET) <br/>M.Sc. Engr. PMRE - Non-thesis (BUET) <br/>MBA-SSM-Switzerland <br/>MSc Digital Marketing - I-JWL London <br/>Doctor of Business Administration <br/>(DBA) in progress)- I-JWL London.",
    email: "https://twitter.com/kazirafiqual",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
  {
    name: "Kazi Rafiqual Islam",
    role: "Co-Founder & Chairma",
    image: "/members/CHAIRMAIN.png",
    description:
      "B.Sc. Engr. Mechanical (DUET) <br/>M.Sc. Engr. PMRE - Non-thesis (BUET) <br/>MBA-SSM-Switzerland <br/>MSc Digital Marketing - I-JWL London <br/>Doctor of Business Administration <br/>(DBA) in progress)- I-JWL London.",
    email: "https://twitter.com/kazirafiqual",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
  {
    name: "Kazi Rafiqual Islam",
    role: "Co-Founder & Chairma",
    image: "/members/CHAIRMAIN.png",
    email: "https://twitter.com/kazirafiqual",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
  {
    name: "Kazi Rafiqual Islam",
    role: "Co-Founder & Chairma",
    image: "/members/CHAIRMAIN.png",
    description:
      "B.Sc. Engr. Mechanical (DUET) <br/>M.Sc. Engr. PMRE - Non-thesis (BUET) <br/>MBA-SSM-Switzerland <br/>MSc Digital Marketing - I-JWL London <br/>Doctor of Business Administration <br/>(DBA) in progress)- I-JWL London.",
    email: "https://twitter.com/kazirafiqual",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
];

export const services: Services[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/icons/code.svg",
    link: "/web-development",
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/icons/code.svg",
    link: "/web-development",
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/icons/code.svg",
    link: "/web-development",
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/icons/code.svg",
    link: "/web-development",
  },
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/icons/code.svg",
    link: "/web-development",
  },
];
