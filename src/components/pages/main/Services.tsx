"use client";
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
import React, { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
    <Card className="group bg-custom-white hover:bg-dark-bg-primary border-dark-bg-primary/10 transition-all duration-500">
      <CardHeader>
        <div className="group-hover:bg-accent-hover inline-block w-fit rounded-full p-2">
          <Image
            src={icon}
            alt={title}
            width={30}
            height={40}
            className="object-contain object-center group-hover:brightness-0 group-hover:invert"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>
          <h3 className="group-hover:text-custom-white text-h1-color titleHeader mb-4">
            {title}
          </h3>
        </CardTitle>
        <CardDescription className="group-hover:text-custom-white cardParagraph">
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
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });
  }, []);

  return (
    <div className="main-container my-28 flex flex-col items-center justify-between gap-14">
      <div className="text-center">
        <h1 className="mb-3">Our Services</h1>
        <p>
          Comprehensive Solutions Tailored To Your Business Needs And Technical
          Requirements.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="opacity-0"
          >
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
