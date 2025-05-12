import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IndustrySolutionData } from "@/constants";
import { IndustrySolutionType } from "@/types";
// import Image from "next/image";
import React from "react";

const IndustryCard = ({ icon, title, desc }: IndustrySolutionType) => {
  return (
    <Card className="border-dark-bg-primary/10 transform-all border-[1px] shadow-none duration-500 hover:drop-shadow-xl">
      <CardHeader className="">
        <div className="bg-p-color/20 flex-center aspect-square h-10 w-10 rounded-full p-2">
          <img
            src={icon}
            width={30}
            height={30}
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 *:text-start">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardContent>
    </Card>
  );
};

const IndustrySolution = () => {
  return (
    <section className="main-container flex flex-col items-center pb-32 text-center">
      <h1 className="mb-10">
        Industries We Support with Web Development Solutions
      </h1>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-3">
        {IndustrySolutionData.map((items, index) => (
          <IndustryCard key={index} {...items} />
        ))}
      </div>
    </section>
  );
};

export default IndustrySolution;
