"use client";
import ArrowButton from "@/components/global/ArrowButton";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({
  number,
  text,
  index,
  triggerStart,
}: {
  number: number;
  text: string;
  index: number;
  triggerStart: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          delay: 0.15 * index,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    }
  }, [index, triggerStart]);

  return (
    <div ref={ref} className="text-center">
      <h1 className="text-custom-white font-semibold">
        {triggerStart && <CountUp start={0} end={number} duration={2.5} />}K+
      </h1>
      <p className="text-custom-white mt-2 text-sm font-light">{text}</p>
    </div>
  );
};

const CompanyProfile = ({ isHome = true }: { isHome?: boolean }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            onEnter: () => setStartCount(true),
            onLeaveBack: () => setStartCount(false),
          },
        });

        timeline.fromTo(
          sectionRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
        );
      }, sectionRef);

      return () => ctx.revert();
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`main-container grid min-h-[80vh] grid-cols-1 gap-10 sm:grid-cols-2 ${isHome ? "bg-dark-bg-primary text-custom-white" : "**:text-dark-bg-primary bg-custom-white"}`}
    >
      {/* Text Content */}
      <div className="sm:order-1x order-2 flex flex-col items-start justify-center gap-6">
        <h2 className="text-custom-white text-sm font-medium tracking-wider uppercase">
          Company Profile
        </h2>
        <h1 className="text-custom-white leading-tight font-bold">
          We Don&apos;t Just Work For You,
          <br /> We Grow With You!
        </h1>
        <p className="text-md text-custom-white leading-relaxed font-light">
          We specialize in creating visually stunning and highly functional
          websites that help businesses stand out in the digital world. Our team
          of talented designers and developers are passionate about crafting
          user-first experiences.
        </p>
        <ArrowButton
          left={true}
          variant="outline"
          className="hover:!text-custom-white"
        >
          <Link href="/about">MORE ABOUT US</Link>
        </ArrowButton>
      </div>

      {/* Counters */}
      <div className="order-1 flex flex-col items-center justify-center sm:order-2">
        <div className="grid w-full grid-cols-2 place-items-center gap-y-10 pt-10 sm:grid-cols-2 md:gap-y-12">
          {[
            "Projects Completed",
            "Happy Clients",
            "Years of Experience",
            "Team Members",
          ].map((label, i) => (
            <Counter
              key={label}
              text={label}
              number={26 + i * 5}
              index={i}
              triggerStart={startCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
