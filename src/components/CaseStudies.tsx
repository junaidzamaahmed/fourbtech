import { ProjectShowcase } from "@/types";
import Image from "next/image";
import React from "react";
import Button from "./global/Button";

const CaseStudies = ({
  company,
  title,
  description,
  projectLink,
  imageUrl,
}: ProjectShowcase) => {
  return (
    <div className="bg-custom-white grid grid-cols-2 gap-0 overflow-hidden rounded-xl max-sm:grid-cols-1">
      <div className="relative h-full ">
        <Image
          src={imageUrl}
          alt={title}
          width={626}
          height={410}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-center p-4 max-sm:px-0 gap-5">
        <h1 className="text-h1-color text-xl font-semibold tracking-wide lg:text-4xl">
          {company}
        </h1>
        <p className="text-h1-color text-sm font-semibold lg:text-xl">
          {title}
        </p>
        <p className="text-p-color  text-sm font-normal lg:text-lg">
          {description}
        </p>
        <Button
          text={"view project"}
          href={projectLink}
          outline={true}
          customCLass="!border-none hover:text-accent-hover text-sm"
          rightIcon={true}
        />
      </div>
    </div>
  );
};

export default CaseStudies;
