"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const contentItems = [
  {
    title: "User-Centered Approach",
    content:
      "We Put Your Users At The Heart Of Every Decision. Through Empathy-Driven Research And Behavioral Insights, We Create Interfaces That Feel Natural, Intuitive, And Delightful.",
  },
  {
    title: "Research-Led Strategy",
    content:
      "Every Project Begins With Discovery — Analyzing Your Users, Industry, And Competitors To Uncover The Right Design Direction. No Assumptions, Just Insights.",
  },
  {
    title: "Goal-Driven Design",
    content:
      "Our Designs Don't Just Look Good — They're Built To Perform. Whether It's Increasing Conversions, Reducing Bounce Rates, Or Enhancing Usability, We Align Design With Business Outcomes.",
  },
  {
    title: "Pixel-Perfect Aesthetics",
    content:
      "From Typography To Spacing, Color Palettes To Animations — Every Visual Detail Is Carefully Crafted To Match Your Brand Identity And Create A Consistent User Experience.",
  },
  {
    title: "Scalable, Dev-Ready Output",
    content:
      "We Hand Over Clean, Structured Design Systems With Clear Documentation — Making Developer Collaboration Smooth And Ensuring Your Product Scales Effortlessly.",
  },
];

const Why_choose_our_service = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animation for image
    gsap.from(imageRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    // Animation for content items
    contentRefs.current.forEach((item, index) => {
      if (!item) return;

      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: item,
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
      className="main-container bg-gray-50 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose Our UI/UX Services
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Trusted By Startups And Enterprises To Deliver Intuitive,
            Goal-Driven Digital Experiences.
          </p>
        </div>
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          <div ref={imageRef} className="relative aspect-[1] w-full lg:w-1/2">
            <Image
              src="/UiUxDesigns/why_choose_our_services.png"
              alt="UI/UX Design Process"
              fill
              className="rounded-xl object-cover shadow-md"
            />
          </div>
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            {contentItems.map((item, index) => (
              <div
                key={index}
                ref={(el) => (contentRefs.current[index] = el)}
                className="rounded-lg p-4 transition-all duration-300"
              >
                <h3 className="mb-1 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_choose_our_service;
