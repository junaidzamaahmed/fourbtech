import { Card, CardTitle } from "@/components/ui/card";
import { WhyUsData } from "@/constants";
import { WhyUsType } from "@/types";
// import Image from "next/image";
import React from "react";

const OurServicesTold = ({ icon, title }: WhyUsType) => {
  return (
    <Card className="border-dark-bg-primary/10 group flex min-h-52 items-center justify-center border-[1px] p-5 shadow-none transition-all duration-500 hover:drop-shadow-xl">
      <img
        src={icon}
        width={40}
        height={40}
        alt={title}
        className="object-cover transition-all duration-500 group-hover:scale-120"
      />
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

const WhyUs = () => {
  return (
    <section className="main-container mb-44 flex flex-col items-center text-center ">
      <h2 className="mb-5">
        Why Fourbtech is the Perfect Partner for Your Web Technology Needs
      </h2>
      <p className="mb-12 max-w-[80%] text-center">
        Located in London, UK, Fourbtech specializes in creating custom web
        applications. We are committed to helping businesses grow through
        innovative technology. Our team delivers scalable and budget-friendly
        web solutions tailored to address your unique challenges.
      </p>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {WhyUsData.map((items, index) => (
          <OurServicesTold key={index} {...items} />
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
