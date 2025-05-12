import { Services } from "@/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import Button from "./global/Button";

const ServiceCard = ({ link, icon, description, title }: Services) => {
  return (
    <Card className="bg-custom-white hover:bg-dark-bg-primary group cursor-pointer transition-all">
      <CardHeader className="relative">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="bg-p-color/10 group-hover:bg-accent-hover h-8 w-8 rounded-full p-1 transition-all group-hover:text-amber-50"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-h1-color group-hover:text-custom-white mb-3 text-sm transition-all sm:text-xl md:text-3xl">
          {title}
        </CardTitle>
        <CardDescription className="text-[.6rem] font-normal transition-all sm:text-[1rem]">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          text={"Learn more"}
          rightIcon={true}
          href={link}
          outline={true}
          customCLass="inline-flex !border-0 text-[.6rem] group-hover:!text-custom-white transition-all  sm:text-[1rem]"
        />
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
