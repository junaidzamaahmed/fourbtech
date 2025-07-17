"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { faqs } from "@/constants";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Handle arrow rotation animation
  useEffect(() => {
    arrowRefs.current.forEach((arrow, idx) => {
      if (!arrow) return;

      gsap.to(arrow, {
        rotation: openIndex === idx ? 90 : 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, [openIndex]);

  // Handle content animation
  useEffect(() => {
    contentRefs.current.forEach((content, idx) => {
      if (!content) return;

      if (openIndex === idx) {
        // Show content
        gsap.set(content, { height: "auto", opacity: 0 });
        gsap.from(content, {
          height: 0,
          duration: 0.5,
          ease: "power2.out",
        });
        gsap.to(content, {
          opacity: 1,
          duration: 0.4,
          delay: 0.1,
          ease: "power2.out",
        });
      } else {
        // Hide content
        gsap.to(content, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });
  }, [openIndex]);

  return (
    <section className="bg-dark-bg-primary main-container text-custom-white my-20">
      <div className="py-20">
        <h1 className="text-custom-white pb-20 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            return (
              <div key={idx} className="border-b border-gray-700 pb-4">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="hover:text-custom-white flex w-full items-center justify-between text-left text-xl font-medium transition-all"
                >
                  <span>
                    {idx + 1}. {faq.question}
                  </span>
                  <div
                    ref={(el) => {
                      arrowRefs.current[idx] = el;
                    }}
                    className="transform-origin-center"
                  >
                    <ArrowUpRight className="h-6 w-6" />
                  </div>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[idx] = el;
                  }}
                  className="text-custom-white/60 mt-3 ml-6 overflow-hidden text-base"
                  style={{
                    height: 0,
                    opacity: 0,
                    display: faq.answer ? "block" : "none",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
