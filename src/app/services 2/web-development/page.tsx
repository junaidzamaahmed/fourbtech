import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CodingPng from "../../../../public/coding.png";
import ProfessionalWebDevService from "./_components/WebDevService";
import FrontendDeveloment from "./_components/FrontendDeveloment";
import BackendDevelopment from "./_components/BackendDevelopment";
import HireDedicatedDevelopers from "./_components/HireDedicatedDevelopers";
import Partnering from "./_components/Partnering";
import WebConsultingService from "./_components/WebConsultingService";
import IndustrySolution from "./_components/industry";
import WhyUs from "./_components/WhyUs";
import GetInTouch from "./_components/GetInTouch";
import LetsTalk from "./_components/LetsTalk";
import FullStackService from "./_components/FullStackService";

export const metadata: Metadata = {
  title: "Website Development Services by FourBtech — Expert IT Solutions",
  description:
    "FourBtech delivers responsive, SEO-friendly website design and development services to grow your business online effectively.",
  openGraph: {
    title: "Professional Website Development",
    description:
      "Build fast, modern, and user-friendly websites with FourBtech's expert team. Enhance your brand and online presence today",
    type: "website",
    url: "https://www.fourbtech.com/",
    images: [
      {
        url: "https://www.fourbtech.com/MetaImages/og-image.jpg",
        alt: "FourBtech - Mobile Apps, Web Design & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FourBtech Expert Website Development Services",
    description:
      " Elevate your online presence with FourBtech's custom website development, designed for speed, SEO, and great user experience.",
    images: [
      {
        url: "https://www.fourbtech.com/MetaImages/twitter-image.jpg",
        alt: "FourBtech - Complete Web, App & Marketing Solutions",
      },
    ],
  },
};
const page = () => {
  return (
    <div className="bg-custom-white">
      {/* Video and header  */}
      <section className="relative mb-14">
        <div className="relative flex h-[300px] w-full items-center justify-center bg-gray-900 sm:h-[400px]">
          <Image
            src={CodingPng}
            alt="Web Development"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="relative z-10 text-center">
            <h1 className="mb-2 text-4xl font-bold text-white">
              Web Development
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>{">"}</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>
      <FullStackService />
      <ProfessionalWebDevService />
      <FrontendDeveloment />
      <LetsTalk />
      <BackendDevelopment />
      <WebConsultingService />
      <HireDedicatedDevelopers />
      <GetInTouch />
      <IndustrySolution />
      <Partnering />
      <WhyUs />
    </div>
  );
};

export default page;
