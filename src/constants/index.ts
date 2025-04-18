import { Employee, FAQItem, Insight } from "@/types";
import { ProjectShowcase } from "@/types";
import { CustomerFeedback } from "@/types";

export const customerFeedbacks: CustomerFeedback[] = [
  {
    name: "Alyssa Greene",
    company: "NeoHealth Systems",
    role: "Chief Medical Officer",
    feedback:
      "FourBtech's AI-powered diagnostic platform has revolutionized how we serve our patients. The accuracy and usability are beyond expectations.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Mikhail Tanaka",
    company: "FinWise Capital",
    role: "Head of Data Science",
    feedback:
      "Their team delivered a state-of-the-art analytics dashboard that helped us uncover portfolio insights in real time. Exceptional work!",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=21",
  },
  {
    name: "Elena Rodríguez",
    company: "VeriEduTech",
    role: "Product Manager",
    feedback:
      "The learning assistant we built with FourBtech was a game changer for our platform. Students love the personalized responses and easy UI.",
    rating: 4,
    avatarUrl: "https://i.pravatar.cc/150?img=45",
  },
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
    name: "Benjamin Wallace",
    company: "SafeTalk Inc.",
    role: "Cybersecurity Consultant",
    feedback:
      "Their hate speech detection model caught 98% of flagged content in real-time. We've never had this level of content control before.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Nina Das",
    company: "SmartFleet Dynamics",
    role: "Fleet Operations Manager",
    feedback:
      "Fleet tracking and maintenance have become seamless with the FourBtech dashboard. The alerts and insights are incredibly useful.",
    rating: 4,
    avatarUrl: "https://i.pravatar.cc/150?img=30",
  },
  {
    name: "Carlos Mendes",
    company: "RetailX Analytics",
    role: "Consumer Insights Lead",
    feedback:
      "Their NLP model helped us understand our customers better. The sentiment analysis dashboard was a huge value add for marketing decisions.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=23",
  },
  {
    name: "Leila Farouq",
    company: "LegalAssist AI",
    role: "Contract Analyst",
    feedback:
      "Our legal team saves hours weekly thanks to the smart clause detection tool. FourBtech’s delivery was timely and highly professional.",
    rating: 5,
    avatarUrl: "https://i.pravatar.cc/150?img=14",
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
  // {
  //   company: "FinWise Capital",
  //   title: "Predictive Analytics Dashboard for Investment Forecasting",
  //   description:
  //     "Needed a responsive analytics dashboard for real-time portfolio risk analysis and stock trend prediction. We implemented a D3.js-powered data viz system integrated with a PyTorch forecasting engine and microservice APIs.",
  //   projectLink: "https://finwise-ai-dashboard.com",
  //   imageUrl:"/palaceholder/palaceholder1.png"
  // },
  // {
  //   company: "VeriEduTech",
  //   title: "Smart Learning Assistant Using NLP",
  //   description:
  //     "Wanted an adaptive AI chatbot to help students understand STEM concepts better. We fine-tuned GPT models for contextual Q&A and built a multilingual, accessible frontend using Next.js and TailwindCSS.",
  //   projectLink: "https://smartedu-assistant.com",
  //   imageUrl:"/palaceholder/palaceholder1.png"
  // },
  // {
  //   company: "CityVision Urban Labs",
  //   title: "AI-Powered Urban Traffic Flow Optimization System",
  //   description:
  //     "Faced challenges in visualizing real-time traffic bottlenecks and signal optimization. We developed a computer vision pipeline with YOLOv8 and a live control dashboard using React, Firebase, and WebSocket APIs.",
  //   projectLink: "https://urban-trafficai.com",
  //   imageUrl:"/palaceholder/palaceholder1.png"
  // },
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
    image: "https://source.unsplash.com/random/800x600?ai,technology",
    date: "2025-04-15",
    title: "How Generative AI is Redefining Product Design",
    link: "https://fourbtech.com/insights/generative-ai-product-design",
  },
  {
    image: "https://source.unsplash.com/random/800x600?machine-learning",
    date: "2025-04-10",
    title: "5 Machine Learning Models Every Startup Should Know",
    link: "https://fourbtech.com/insights/ml-models-for-startups",
  },
  {
    image: "https://source.unsplash.com/random/800x600?ux,design",
    date: "2025-04-03",
    title: "Designing Scalable UX for AI-Powered Apps",
    link: "https://fourbtech.com/insights/scalable-ux-ai",
  },
  {
    image: "https://source.unsplash.com/random/800x600?cybersecurity",
    date: "2025-03-27",
    title: "Why Cybersecurity Should Be Baked Into Your MVP",
    link: "https://fourbtech.com/insights/cybersecurity-in-mvp",
  },
  {
    image: "https://source.unsplash.com/random/800x600?startup,teamwork",
    date: "2025-03-21",
    title: "How Small Teams Can Build Billion-Dollar Tech",
    link: "https://fourbtech.com/insights/startup-team-strategy",
  },
  {
    image: "https://source.unsplash.com/random/800x600?web3,blockchain",
    date: "2025-03-14",
    title: "Web3 Explained: Opportunities for Early-Stage Founders",
    link: "https://fourbtech.com/insights/web3-for-founders",
  },
  {
    image: "https://source.unsplash.com/random/800x600?devops",
    date: "2025-03-06",
    title: "DevOps for Startups: Automate, Iterate, Succeed",
    link: "https://fourbtech.com/insights/devops-for-startups",
  },
  {
    image: "https://source.unsplash.com/random/800x600?data,analytics",
    date: "2025-02-27",
    title: "Turning Raw Data Into Business Gold",
    link: "https://fourbtech.com/insights/data-to-insight",
  },
  {
    image: "https://source.unsplash.com/random/800x600?innovation",
    date: "2025-02-18",
    title: "Why Innovation Starts With Listening",
    link: "https://fourbtech.com/insights/innovation-through-feedback",
  },
  {
    image: "https://source.unsplash.com/random/800x600?nextjs",
    date: "2025-02-10",
    title: "Mastering Next.js for High-Performance Web Apps",
    link: "https://fourbtech.com/insights/nextjs-performance-guide",
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
