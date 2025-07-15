import { Card, CardTitle } from "@/components/ui/card";
import { OurIndustryExperties } from "@/constants";
import { WhyUsType } from "@/types";
import React from "react";

const OurServicesTold = ({ icon, title }: WhyUsType) => {
  return (
    <Card className="border-dark-bg-primary/10 group flex items-center justify-center border-[1px] p-5 shadow-none transition-all duration-500 hover:drop-shadow-xl">
      <div className="h-full w-full">
        <img
          src={icon}
          width={300}
          height={120}
          alt={title}
          className="rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div>
        <CardTitle>{title}</CardTitle>
      </div>
    </Card>
  );
};

const OurExparties = () => {
  return (
    <section className="main-container flex flex-col items-center !pb-10 text-center lg:!pb-32">
      <h2 className="text-h2-color mb-5 text-4xl font-semibold">
        Our Industry Expertise
      </h2>
      <h3 className="mb-12 max-w-[80%] text-center">
        We Specialise In The Cross-platform Of Outsource Mobile App Development
        Service That Delivers Efficient, Cost-Effoctive Solutions Tailored To A
        Wide Range Of Industries. Our Apps Run Smoothly Across Different Devices
        And Platforms. Helping Businesses Stay Competitive And Connected.
      </h3>
      <div className="grid origin-center grid-cols-2 gap-5 md:grid-cols-4">
        {OurIndustryExperties.map((items, index) => (
          <OurServicesTold key={index} {...items} />
        ))}
      </div>
    </section>
  );
};

export default OurExparties;
