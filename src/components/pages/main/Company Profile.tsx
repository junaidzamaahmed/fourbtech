"use client";
import ArrowButton from "@/components/global/ArrowButton";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";

const Counter = ({ number, text }: { number: number; text: string }) => (
  <span>
    <h2 className="text-custom-white font-light">
      <CountUp start={0} end={number} duration={5} />
      <span>K+</span>
    </h2>
    <p className="text-custom-white">{text}</p>
  </span>
);

const CompanyProfile = () => {
  return (
    <section className="bg-dark-bg-primary main-container text-custom-white grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div className="text-custom-white order-2 flex flex-col items-start justify-between gap-5 sm:order-1">
        <p className="text-custom-white">Company Profile</p>
        <h2 className="text-custom-white">
          We Don&apos;t Just Work For You, We Grow With You!
        </h2>
        <p className="text-custom-white">
          We Specialize In Creating Visually Stunning And Highly Functional
          Websites That Help Businesses Stand Out In The Digital World. Our Team
          Of Talented Designers And Developers Are Passionate About Crafting
        </p>
        <ArrowButton
          left={true}
          variant="noOutline"
          className="hover:!text-custom-white"
        >
          <Link href={"/"}>MORE ABOUT US</Link>
        </ArrowButton>
      </div>
      <div className="order-1 flex h-full flex-col items-center sm:order-2">
        <div className="bg-p-color hidden h-[3px] w-full sm:visible" />
        <div className=" grid  min-w-full grid-cols-2 gap-2 sm:grid-cols-2 md:gap-5 min-h-full md:grid-cols-2 place-items-center">
          <Counter text="Project Completed" number={26} />
          <Counter text="Project Completed" number={26} />
          <Counter text="Project Completed" number={26} />
          <Counter text="Project Completed" number={26} />
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
