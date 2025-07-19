import ArrowButton from "@/components/global/ArrowButton";
import { services } from "@/constants";
import Link from "next/link";
import React from "react";

const WhatWeDo = () => {
  return (
      <section className="main-container grid grid-cols-1 gap-12 object-center !py-10 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-4">
          <p>What We Do</p>
          <h2>
            Transforming Ideas Into Reality With Engaging Solutions by
            FourBTech.
          </h2>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            At our IT Solutions & Services Agency, we specialize in creating
            visually stunning and highly functional websites or mobile apps that
            help businesses stand out in the digital world. Our team of talented
            designers and developers are passionate about crafting
          </p>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center gap-6">
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] mb-6 grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            {services.map((service, index) => {
              return (
                <div className="flex items-center gap-2" key={index}>
                  <div className="bg-dark-bg-primary/10 flex-center relative h-8 w-8 rounded-full p-1">
                    <img
                      src={service.icon}
                      alt={service.title}
                      width={30}
                      height={30}
                      className="aspect-square h-full w-full object-contain p-[.6px]"
                    />
                  </div>
                  <span className="text-gray-700">{service.title}</span>
                </div>
              );
            })}
          </div>
          <Link href={"/"}>
            <ArrowButton variant="fill" className="!py-5" left size={24}>
              See Our Services
            </ArrowButton>
          </Link>
        </div>
      </section>
  );
};

export default WhatWeDo;
