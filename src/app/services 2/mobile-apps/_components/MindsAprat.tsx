import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MindsApart } from "@/constants";
import { Team } from "@/types";
// import Image from "next/image";
import React from "react";

const WorkForceCard = ({ image, title, desc }: Team) => {
  return (
    <Card className="border-dark-bg-primary/10 transform-all group border-[1px] shadow-none duration-500 hover:drop-shadow-xl">
      <CardHeader className="w-full">
        <div className="relative rounded-xl">
          <img
            src={image}
            alt={title}
            width={256}
            height={144}
            className="aspect-video h-full w-full rounded-xl object-cover duration-500 group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 *:text-start">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="duration-300 group-hover:text-black/90">
          {desc}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
const Minds_Apart = () => {
  return (
    <section className="main-container flex flex-col items-center !pb-10 text-center lg:!pb-32">
      <h2 className="text-h1-color mb-5 text-4xl font-semibold">
        What Sets FourBtech Minds Apart
      </h2>
      <h3 className="mb-12 max-w-[80%] text-center">
        When businesses look to outsource mobile app development to the UK,
        Fourbtech Minds stands out as a trusted partner.
      </h3>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {MindsApart.map((items, index) => (
          <WorkForceCard key={index} {...items} />
        ))}
      </div>
    </section>
  );
};

export default Minds_Apart;
