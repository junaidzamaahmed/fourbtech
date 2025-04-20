"use client";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterOnView = ({ end, text = "" }: { end: number; text?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3, // 30% of the element must be visible
  });

  return (
    <div
      ref={ref}
      className="text-custom-white flex flex-col items-start justify-between text-center sm:text-4xl font-normal text-2xl "
    >
      <div>{inView ? <CountUp end={end} duration={3} className="" /> : 0}K+</div>
      {text && <p className="text-[.6rem] sm:text-sm"> {text}</p>}
    </div>
  );
};

export default CounterOnView;
