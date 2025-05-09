import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AppBenifitesData } from "@/constants";
import { AppBenifitesType } from "@/types";
import Image from "next/image";
import React from "react";

export const BenifitCard = ({ icon, title, desc }: AppBenifitesType) => (
  <Card className="border-dark-bg-primary/10 transform-all border-[1px] shadow-none duration-500 hover:drop-shadow-xl">
    <CardHeader className="flex-center w-full">
      <div className="bg-h1-color/20 flex-center flex h-12 w-12 rounded-full p-2">
        <Image
          src={icon}
          width={52}
          height={52}
          alt={title}
          className="object-contain"
        />
      </div>
    </CardHeader>
    <CardContent className="flex flex-col gap-3 *:text-center">
      <CardTitle>{title}</CardTitle>
      <CardDescription>{desc}</CardDescription>
    </CardContent>
  </Card>
);

const Benefites = () => {
  return (
    <section className="main-container mb-44 flex flex-col items-center pb-32 text-center">
      <h2 className="!text-h1-color mb-5 text-4xl font-semibold">Benefits</h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {AppBenifitesData.map((benifit, index) => (
          <BenifitCard key={index} {...benifit} />
        ))}
      </div>
    </section>
  );
};

export default Benefites;
