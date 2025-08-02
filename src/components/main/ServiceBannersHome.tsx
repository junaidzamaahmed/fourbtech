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
  borderColor,
}: {
  direction: "left" | "right";
  borderColor?: string;
}) => {
  return (
    <GenericMarquee direction={direction} speed="normal" pauseOnHover={false}>
      {[...Data, ...Data].map((text, index) => (
      <div
        key={index}
        className={`flex items-center justify-center rounded-full border-[1px] px-3 py-1 !text-sm border-${borderColor || "border-white"}`}
      >
        {text}
      </div>
      ))}
    </GenericMarquee>
  );
};
