import ArrowButton from "@/components/global/ArrowButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({
  icon,
  title,
  description,
  link,
}: {
  icon: string;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Card className="group bg-custom-white hover:bg-dark-bg-primary border-dark-bg-primary/10 transition-all duration-200">
      <CardHeader>
        <div className="">
          <Image
            src={icon}
            alt={title}
            width={30}
            height={40}
            className="bg-dark-bg-primary/10 group-hover:bg-accent-hover rounded-full object-cover p-2"
          />
        </div>
        <CardTitle className="group-hover:text-custom-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="group-hover:text-custom-white">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <ArrowButton
          right={true}
          variant="noOutline"
          className="group-hover:!text-custom-white"
          size={20}
        >
          <Link href={link}>Learn more</Link>
        </ArrowButton>
      </CardFooter>
    </Card>
  );
};

const Services = () => {
  return (
    <div className="main-container flex flex-col items-center justify-between gap-14">
      <div className="text-center">
        <h1 className="mb-3">Our Services</h1>
        <p className="">
          Comprehensive Solutions Tailored To Your Business Needs And Technical
          Requirements.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
