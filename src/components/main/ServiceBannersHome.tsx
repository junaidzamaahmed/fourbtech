import React from "react";
import { GenericMarquee } from "../GenericMarquee";

const Data: string[] = [
  "E-Commerce",
  "Healthcare",
  "Saas",
  "EdTech",
  "RealEstate",
  "Logistics",
  "Fitness",
];

export const ServiceBannersHome = ({
  direction,
}: {
  direction: "left" | "right";
}) => {
  return (
    <GenericMarquee direction={direction} speed="normal" pauseOnHover={false}>
      {Data.map((text, index) => (
        <div
          key={index}
          className="flex items-center justify-center rounded-full border-[1px] border-white px-3 py-1 !text-sm"
        >
          {text}
        </div>
      ))}
    </GenericMarquee>
  );
};
