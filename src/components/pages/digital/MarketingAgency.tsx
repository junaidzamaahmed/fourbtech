import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { DigitalServiceAgency } from "@/constants";
import { AppBenifitesType } from "@/types";
import Image from "next/image";
import React from "react";

export const MarketAgencyCard = ({ icon, title, desc }: AppBenifitesType) => (
  <Card className="border-dark-bg-primary/10 transform-all flex flex-col items-center justify-center border-[1px] shadow-none duration-500 hover:drop-shadow-xl">
    <div className=" ">
      <Image
        src={icon}
        width={52}
        height={52}
        alt={title}
        className="bg-p-color/20 flex rounded-full object-contain p-2"
      />
    </div>
    <CardContent className="flex flex-col gap-3 *:text-center">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardContent>
  </Card>
);

const MarketingAgencyService = () => {
  return (
    <section className="main-container mb-44 flex flex-col items-center pb-32 text-center">
      <h2 className="!text-h1-color mb-5 text-4xl font-semibold">
        Full-stack digital marketing service agency
      </h2>
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {DigitalServiceAgency.map((service, index) => (
          <MarketAgencyCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default MarketingAgencyService;
