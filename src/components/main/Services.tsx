"use client";
import {
  Card,
  CardContent,
  CardDescription,
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
    <Link href={link} >
      <Card className="group bg-custom-white hover:bg-dark-bg-primary border-dark-bg-primary/10 h-full transition-all duration-500 ">
        <CardHeader>
          <div className="group-hover:bg-accent-hover bg-dark-bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full">
            <Image
              src={icon}
              alt={title}
              width={30}
              height={30}
              className="aspect-square object-contain object-center p-1 group-hover:brightness-0 group-hover:invert"
            />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle>
            <h1 className="group-hover:text-custom-white text-h1-color titleHeader mb-4">
              {title}
            </h1>
          </CardTitle>
          <CardDescription className="group-hover:!text-custom-white cardParagraph !text-h1-color">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
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
            duration: 0.6,
            delay: i * 0.1,
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
    <div
      id="services"
      className="main-container my-28 flex flex-col items-center justify-between gap-14"
    >
      <div className="text-center">
        <h1 className="mb-3">Our Services</h1>
        <p>
          Comprehensive Solutions Tailored To Your Business Needs And Technical
          Requirements.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
