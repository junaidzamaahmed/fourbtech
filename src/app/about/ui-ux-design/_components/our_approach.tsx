'use client';
import React, { useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dot } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "UX Research",
    description:
      "We start with deep exploration to understand user needs, business goals, and market opportunities.",
    items: [
      "Develop User Personas",
      "Define Business & Technical Requirements",
      "Organize Focus Groups",
      "Create Customer Journey Maps",
      "Perform Card Sorting",
    ],
  },
  {
    number: "02",
    title: "Conceptualize",
    description: "We shape insights into strategic design concepts and flows.",
    items: [
      "Create User Flow Diagrams",
      "Build Moodboards",
      "Develop Low-Fidelity Prototypes",
      "Define Information Architecture",
      "Design Initial Wireframes",
    ],
  },
  {
    number: "03",
    title: "UX Testing",
    description:
      "We test early to validate ideas, ensure accessibility, and improve usability.",
    items: [
      "Conduct Usability Testing",
      "Evaluate Accessibility Compliance",
      "Gather Emotional Response Feedback",
      "Identify UX Friction Points",
      "Iterate Based on Findings",
    ],
  },
  {
    number: "04",
    title: "Implement",
    description:
      "We transform validated concepts into final visuals — ready for development.",
    items: [
      "Execute Visual Design",
      "Perform Design Iterations",
      "Create Design Systems & UI Kits",
      "Ensure Quality Control",
      "Handoff with Full Specs",
    ],
  },
];

export default function OurApproach() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | undefined)[]>([]);

  useEffect(() => {
    // Animation for cards
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: index * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-4 py-12 md:px-0">
      <div className="mb-20 text-center">
        <h2 className="mb-2 text-3xl font-bold md:text-4xl">
          Our Comprehensive Approach To UI/UX
        </h2>
        <p className="text-muted-foreground text-base md:text-lg">
          A Complete Process To Elevate Every Click And Interaction
        </p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <Card
            key={step.number}
            ref={(el) => (cardsRef.current[index] = el)}
            className="border-border transition-all duration-300 hover:shadow-lg"
          >
            <CardHeader>
              <span className="text-accent-hover mb-2 text-4xl font-semibold">
                {step.number}
              </span>
              <CardTitle className="mb-1 text-xl">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{step.description}</p>
              <ul className="grid grid-cols-1 gap-x-6 text-sm sm:grid-cols-2">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-center justify-start">
                    <span className="text-accent-hover mt-1">
                      <Dot size={30} />
                    </span>
                    <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
