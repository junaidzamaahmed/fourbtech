import {
  AppBenifitesType,
  Employee,
  FAQItem,
  IndustrySolutionType,
  Insight,
  Services,
  Team,
  TitleDesc,
  WhyUsType,
} from "@/types";
import { ProjectShowcase } from "@/types";
import { CustomerFeedback } from "@/types";

export const aboutLogo = [
  "/about/logos/logo1.png",
  "/about/logos/logo2.png",
  "/about/logos/logo3.png",
];

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
      "Thanks to FourBtech's vision system, we now predict crop yields with much higher precision. Their tech and timeline commitment are impressive.",
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
    company: "Monthly Meetup",
    title: "A Day of Reflection, Vision, and Appreciation at FourBtech.",
    description:
      "On the 1st of May, the FourBtech family came together for a special get-together — a day to pause, reflect, and connect. We shared our thoughts on current projects, future plans, and the exciting journey ahead. From strategic discussions to heartfelt appreciation, it was a day that reminded us of the strength and synergy within our team.",
    projectLink: "https://www.linkedin.com/company/fourbtech/",
    imageUrl: "/images/allMember.jpg",
  },
  {
    company: "Power Intern",
    title: "Introducing Our First “Power Intern of the Month”!",
    description:
      "We're thrilled to announce that our very first Power Intern of the Month for April 2025 is none other than our UI/UX Designer Intern — Md Muhib Monoar! Md Muhib has consistently demonstrated creativity, dedication, and a strong sense of ownership in every project he's been part of. His contributions have not only elevated our design quality but also inspired the team to push boundaries.",
    projectLink:
      "https://www.linkedin.com/posts/fourbtech_introducing-our-first-power-intern-of-the-activity-7324294094459961345-qJ-k?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4LWmYB86_zGEarK30a_jAK2aUQ-BwTK6c",
    imageUrl: "/images/powerIntern.jpg",
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
    image: "/insights/image1.png",
    date: "2025-04-15",
    title: "How Generative AI is Redefining Product Design",
    link: "https://fourbtech.com/insights/generative-ai-product-design",
  },
  {
    image: "/insights/image2.png",
    date: "2025-04-10",
    title: "5 Machine Learning Models Every Startup Should Know",
    link: "https://fourbtech.com/insights/ml-models-for-startups",
  },
  {
    image: "/insights/image3.png",
    date: "2025-04-03",
    title: "Designing Scalable UX for AI-Powered Apps",
    link: "https://fourbtech.com/insights/scalable-ux-ai",
  },
  {
    image: "/insights/image4.png",
    date: "2025-03-27",
    title: "Why Cybersecurity Should Be Baked Into Your MVP",
    link: "https://fourbtech.com/insights/cybersecurity-in-mvp",
  },
];

export const employees: Employee[] = [
  {
    name: "Kazi Md R. Islam",
    role: "Co-Founder & Chairman",
    image: "/members/kazi_rafiqual_islam.png",
    description:
      "B.Sc. Engr. Mech (DUET)<br/>M.Sc. Engr. (BUET) - Non-Thesis<br/>MBA-SSM-Switzerland<br/>MSc in Digital Marketing - UWL, London<br/>Doctorate of Business Administration In progress - UWL, London",
    email: "kazi@fourbtech.com",
    linkedin: "https://www.linkedin.com/in/kazi-rafiqual-islam-4btech",
  },
  {
    name: "Himu Chowdhury",
    role: "Co-Founder & CEO",
    image: "/members/Himu_Chowdhury.png",
    description:
      "Former Mobile Application Developer at PMT LLC, Tokyo, Japan <br/>Former Software Engineer at Togo and Webit, Okinawa, Japan <br/>Former Team Lead at SmartMux LTD BSc in Computer Science and Engineering (National University) ",
    email: "himu.chowdhury@fourbtech.com",
    linkedin: "https://www.linkedin.com/in/himu-chowdhury/",
  },

  {
    name: "Junaid Ahmed Zama",
    role: "Software Engineer",
    image: "/members/Junaid_Ahmed_Zama.png",
    description:
      "Former Founder of Zobotics IT<br/>Former Web Developer at Raqamisuq<br/>BSc. in Computer Science and <br/>Engineering (BRAC University)",
    email: "junaid@fourbtech.com",
    linkedin: "https://www.linkedin.com/in/junaidahmedzama",
  },
  {
    name: "Richard Costa",
    role: "Business development executive",
    image: "/members/RichardCosta.jpg",
    description:
      "Business development executive at FourBtech.<br/>Executive Officer at Costa outfitters.<br/>Worked at Jamuna group head Office.<br/>Front Desk Officer at Hotel Ashrafee.",
    email: "richard@fourbtech.com",
    linkedin: "https://www.linkedin.com/in/richard-costa-395210250/",
  },
  {
    name: "Mohammad Titon",
    role: "Digital Marketing Specialist",
    image: "/members/Mohammad_Titon.png",
    description:
      "Consultant for Data-Driven Digital <br/>Strategies - Freelance <br/>Expert in SEO, Social Media Marketing & <br/> Performance Ads <br/> Certified Creative IT Institute <br/> Skilled in PHP, Laravel & Vue.js.",
    email: "mrtiton@fourbtech.com",
    linkedin: "https://www.linkedin.com/in/md-titon-357816243",
  },
  {
    name: "Hirok Roy Rahul",
    role: "Frontend Developer",
    image: "/members/Hirok_Roy_Rahul.png",
    description:
      "Former Web Developer at  Nebulae-Soft<br/>Junior Machine Vision Engineer at BRACU  Duburi<br/>BS.c in computer science & Engineering (BRAC University) ",
    email: "hirokrr@fourbtech.com",
    linkedin: "https://www.linkedin.com/in/hirokrr",
  },
  {
    name: "A F M Shabbir khan",
    role: "Flutter Developer",
    image: "/members/A_F_M_Shabbir_khan.png",
    description:
      "Flutter Developer for Cross-Platform <br/> Mobile Apps - Freelance,<br/> Diploma in Computer - SSR Institute<br/> of Technology & Management",
    email: "afmsabbirkhan@fourbtech.com",
    linkedin: "https://www.linkedin.com/in/afmsabbirkhan/",
  },
  {
    name: "Md Muhib Monowar",
    role: "UI/UX Designer",
    image: "/members/Muhib_Monoar.png",
    description:
      "UI Designer - MediMontro App <br/>Professional UI/UX Designer - Freelance <br/>Complete Web & Mobile Design - ZTM <br/>Academy, Toronto",
    email: "muhib@fourbtech.com",
    linkedin: "https://www.linkedin.com/in/muhibmonoar/",
  },
];

export const services: Services[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/service/web dev.svg",
    link: "/services/web-development",
  },
  {
    title: "Mobile Application Development",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/service/app dev.svg",
    link: "/services/mobile-apps",
  },
  {
    title: "Digital Product Design",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/service/product design.svg",
    link: "/",
  },
  {
    title: "Digital Marketing",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/service/digital marketing.svg",
    link: "/services/digital-marketing",
  },
  {
    title: "SEO Optimisation",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/service/seo.svg",
    link: "/",
  },
  {
    title: "Video Production & Motion Design",
    description:
      "Building responsive, high-performance web applications using modern frameworks and technologies.",
    icon: "/service/video production.svg",
    link: "/",
  },
];

export const IndustrySolutionData: IndustrySolutionType[] = [
  {
    icon: "/Icons/Web/ecom.png",
    title: "ERetall ECommerce",
    desc: "wo Empower Retail Businesses By auibding Custom E-commerce platforms For Online Product Sales. Aaditionally, we Offer Specialised Web Solutions Like Inventory Control. Order Tracking. And Integrated Point-Of-Sale (POS) Systems.",
  },
  {
    icon: "/Icons/Web/healthcare.png",
    title: "Healthcare",
    desc: "Transform The Healthcare sector With Custom-Built Web Applications. From Digital Patient Record Systems And Lab Management Software To Telemedicine Platforms And E-Prescription Tools, We Create Solutions TO Modernise Healthcare Delivery.",
  },
  {
    icon: "/Icons/Web/entertainment.png",
    title: "Media & Entertainment—Social Platforms",
    desc: "Got An Idea For A Streaming Service Or A Video Editing Web App? Share Your Vision With us. We Bring Your Creative Ideas For The Entertainment Industry To Life With Functional And Engaging Web Applications",
  },
  {
    icon: "/Icons/Web/travel.png",
    title: "Travel",
    desc: "Looking to create a comprehensive  travel booking platform? We build  dynamic travel web apps for everything  from navigation and event booking to  transport scheduling and management,  tailored to your specific needs.",
  },
];

export const WhyUsData: WhyUsType[] = [
  {
    icon: "/Icons/Web/need/phoneCall.png",
    title: "30 min free consultation",
  },
  {
    icon: "/Icons/Web/need/nda.png",
    title: "Signs NDA",
  },
  {
    icon: "/Icons/Web/need/team.png",
    title: "Dedicated Web Developers & Designers",
  },
  {
    icon: "/Icons/Web/need/security.png",
    title: "100% Data Security",
  },
  {
    icon: "/Icons/Web/need/feedback.png",
    title: "Constant FeedBack Cycle",
  },
  {
    icon: "/Icons/Web/need/regular.png",
    title: "Regular Updatges",
  },
  {
    icon: "/Icons/Web/need/treanparancy.png",
    title: "Complete Transparency",
  },
  {
    icon: "/Icons/Web/need/varified.png",
    title: "Highest Code Quality",
  },
  // {
  //   icon: "/Icons/Web/need/support.png",
  //   title: "90 Days Maintainace Support",
  // },
];

export const AppBenifitesData: AppBenifitesType[] = [
  {
    icon: "/Icons/app/people-group.png",
    title: "Broader Audience",
    desc: "Java Cross-Platform Development Enables You TO Engage users On Various Platforms Like los And Android, Boosting Your App's Visibility And Expanding Your Market Presence.",
  },
  {
    icon: "/Icons/app/efficiency.png",
    title: "Cost and Time Efficiency",
    desc: "Develop once and deploy everywhere—saving both time and resources while  accelerating your app&apos;s launch.",
  },
  {
    icon: "/Icons/app/user-experience.png",
    title: "Seamless User Experiencee",
    desc: "Deliver a consistent and smooth user interface across all devices and platforms.",
  },
  {
    icon: "/Icons/app/simplified.png",
    title: "Simplified Maintenance and Updates",
    desc: "Manage and update your app more easily with a single codebase, ensuring quicker  rollouts and fewer complications.",
  },
];

export const OurIndustryExperties: WhyUsType[] = [
  { icon: "/Icons/app/e-commerce.png", title: "E-Commerce" },
  { icon: "/Icons/app/healthcare.png", title: "Healthcare" },
  { icon: "/Icons/app/education.png", title: "Eductaion" },
  { icon: "/Icons/app/travel.png", title: "Travel & Hospitality" },
];

export const MindsApart: Team[] = [
  {
    image: "/mobile/MindsAppart/team.png",
    title: "Dedicated Team",
    desc: "Our Compact And Focused Team Allows IJS TO Give Every Project The Detailed Attention It Deserves, Ensuring High-Quality Results With A Personalized Approach.",
  },
  {
    image: "/mobile/MindsAppart/project.png",
    title: "Skilled Project Management",
    desc: "With a flat organizational structure and  visionary product strategists, our  experienced project managers deliver  results faster and more efficiently, without  unnecessary layers of bureaucracy.",
  },
  {
    image: "/mobile/MindsAppart/agile.png",
    title: "Agile Development Approach",
    desc: "We don't wait until the end to show results.  Instead, we follow an agile  methodology—breaking development into  small, manageable phases. After each  phase, we gather your feedback, keeping  you involved and ensuring the final product  aligns perfectly with your expectations.",
  },
  {
    image: "/mobile/MindsAppart/communication.png",
    title: "Clear and Ongoing Communication",
    desc: "Strong communication is at the core of  everything we do. Our team collaborates  closely with you, sharing ideas, setting  strategies, and keeping you informed at  every stage. We value your input, offer  regular updates, and ensure a smooth,  transparent development journey.",
  },
  {
    image: "/mobile/MindsAppart/itSolution.png",
    title: "End-to-End IT Solutions",
    desc: "From UX/UI design and mobile app  development to backend systems,  re-engineering, consultation, testing, and  beyond, we offer comprehensive, full-cycle  software development services tailored to  your needs.",
  },
  {
    image: "/mobile/MindsAppart/assurance.png",
    title: "Thorough Quality Assurance",
    desc: "We prioritize quality at every stage. Our QA  process includes continuous bug detection,  error resolution, and rigorous testing to  ensure your product is stable, secure, and  ready for launch.",
  },
  {
    image: "/mobile/MindsAppart/support.png",
    title: "Reliable Support & Maintenance",
    desc: "Post-launch, our dedicated support and  maintenance team ensures your app  continues to run smoothly. We're here to  offer long-term solutions and dependable  performance, even after delivery.",
  },
  {
    image: "/mobile/MindsAppart/protection.png",
    title: "Fourbtech Protection",
    desc: "When you partner with us, your ideas and  data are treated with complete  confidentiality. We ensure full transparency  and uphold the highest level of respect for  your intellectual property through strict  Fourbtech agreements.",
  },
];

export const DigitalServiceAgency: AppBenifitesType[] = [
  {
    icon: "/Icons/digital/one-one.png",
    title: "Connect One-on-One with a Marketing Expert",
    desc: "Have a direct conversation with a dedicated marketing specialist who understands your  business and growth goals.",
  },
  {
    icon: "/Icons/digital/growth.png",
    title: "Driving Unmatched Growth",
    desc: "Take your business to the next level with innovative strategies that unlock your brand's full  potential.",
  },
  {
    icon: "/Icons/digital/expart.png",
    title: "Expert agency for SEO service",
    desc: "We develop smart, tailored ideas through organic SEO and provide a clear, actionable  roadmap for execution, every step of the way.",
  },
];

export const SEO_Details: TitleDesc[] = [
  {
    title: "SEO Optimisation service provider",
    desc: " Our comprehensive SEO audit thoroughly examines every element of your website — from technical performance and content quality to user experience and competitive positioning. This in-depth analysis identifies key opportunities for growth and ensures your site stays aligned with the latest search engine algorithms and industry best practices. With regular audits, you stay ahead of the curve in today's ever-evolving digital landscape.",
  },
  {
    title: "Keyword Research",
    desc: "Keywords are the phrases your potential customers use in search engines to find products, services, or information. Strategic keyword research lays the foundation for a successful SEO campaign by uncovering high-value terms that draw in your ideal audience. It drives smarter content creation and helps focus your SEO efforts where they matter most—delivering maximum visibility and results.",
  },
  {
    title: "Off-Page SEO",
    desc: "Off-page SEO strengthens your website's credibility and authority across the web. While link building plays a major role, effective off-page strategies also include brand mentions, citation management, influencer outreach, and active social media engagement. These efforts work together to enhance your site's trust, increase visibility in search results, and drive more qualified traffic to your business.",
  },
  {
    title: "Citation Building",
    desc: "Citations are online listings of your business that include essential details such as your name, address, phone number, and website. They play a vital role in boosting your local search rankings and strengthening your presence in your target area. To secure a spot in Google's local pack or top search results, consistent and accurate citation building is essential.",
  },
  {
    title: "Link Building",
    desc: "Link building is the process of acquiring high-quality backlinks from authoritative and relevant websites to enhance your site’s credibility. Search engines view these links as endorsements, using them to assess the trustworthiness and value of your content. When competing pages are similar, the one with stronger, more reputable backlinks typically ranks higher in search results.",
  },
  {
    title: "Blogging",
    desc: "Blogging is a powerful way to target additional keywords and share valuable content that may not fit on your main website pages. It also supports link building, boosts social media engagement, and reinforces your brand's Expertise, Authority, and Trust (E-A-T). Consistent, high-quality blogging not only improves your visibility but also drives long-term SEO success.",
  },
];

export const BoostRanking = [
  {
    desc: "Search Engine Optimization (SEO) is an  ongoing strategy focused on enhancing  your website's visibility in search engine  results—ultimately increasing both the  quality and quantity of organic traffic,  primarily from Google. SEO involves  optimizing hundreds of elements across  your site, all of which must work together to  ensure your business captures the full  benefits of search visibility.",
  },
  {
    desc: "The main goal of SEO is to attract highly  relevant visitors from search  engines—people actively searching for  products or services like yours. As one of  the most reliable and cost-effective digital  marketing strategies, SEO places your  business right where it matters most: in  front of potential customers when they're  ready to take action.",
  },
];
