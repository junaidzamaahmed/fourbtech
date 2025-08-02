"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const UIUX_categories = () => {
  const services = [
    {
      title: "Mobile App Design",
      description:
        "We craft intuitive, high-performing mobile apps tailored for both iOS and Android users.",
      image: "",
    },
    {
      title: "Website Design",
      description:
        "Modern, responsive websites built to engage users and drive results across all devices.",
      image: "",
    },
    {
      title: "Web App Design",
      description:
        "Custom web applications designed for seamless interaction, performance, and scalability.",
      image: "",
    },
    {
      title: "UX Audit & Redesign",
      description:
        "We identify UX pain points and deliver redesigns that enhance user satisfaction and retention.",
      image: "",
    },
    {
      title: "Design System Audit",
      description:
        "Ensure design consistency and efficiency with a detailed review of your design system.",
      image: "",
    },
    {
      title: "Usability Testing",
      description:
        "Real user testing to uncover friction, validate ideas, and optimize the user experience.",
      image: "",
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animation for heading and subheading
    gsap.from([headingRef.current, subheadingRef.current], {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // Animation for cards
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "back.out(1.2)",
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
    <section
      ref={sectionRef}
      className="main-container mt-20 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto">
        <div className="mb-12 text-center">
          <h1
            ref={headingRef}
            className="mb-4 text-4xl font-bold text-gray-900"
          >
            Design Services That Solves, Not Just Looks Good!
          </h1>
          <p
            ref={subheadingRef}
            className="mx-auto max-w-3xl text-xl text-gray-600"
          >
            We Don&apos;t Just Design For Beauty — We Design For Impact. Every
            Click, Scroll, And Interaction is Backed By UX Logic And User
            Psychology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="h-full cursor-pointer border-none shadow-none transition-all duration-300 hover:border-2 hover:border-black hover:shadow-lg"
            >
              <CardHeader>
                {service.image ? (
                  <Image
                    fill
                    src={service.image}
                    alt={service.title}
                    className="mb-4 h-20 w-20 rounded-md object-cover"
                  />
                ) : (
                  <div className="mb-4 h-60 w-full rounded-md bg-gray-200"></div>
                )}

                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUX_categories;
