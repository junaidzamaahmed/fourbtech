import ArrowButton from "@/components/global/ArrowButton";
import HeroPhotoMarquee from "@/components/main/HeroPhotoMarquee";
import Link from "next/link";
import React from "react";
import UIUX_categories from "./_components/UIUX_categories";
import Why_choose_our_service from "./_components/Why_choose_our_service";
import OurApproach from "./_components/our_approach";

const page = () => {
  return (
    <div className="bg-custom-white min-h-screen md:mt-25">
      <div className="flex items-center justify-center gap-2 text-gray-500">
        <Link href="/" className="transition-colors hover:text-white">
          Home
        </Link>
        <span>{">"}</span>
        <span>UI UX DESIGN</span>
      </div>

      {/* Heading */}
      <div className="mt-8 text-center">
        <h1 className="text-3xl text-black md:text-5xl">
          Design That Feels Right, Functions Better &amp;
        </h1>
        <h2 className="text-accent-hover mt-4 text-3xl italic md:text-5xl">
          Make Your Business Grow
        </h2>
      </div>

      {/* Marquee */}
      <div className="mt-8 -mb-6 space-y-8">
        <HeroPhotoMarquee />
        <p className="text-center font-semibold">
          We create sleek, intuitive, and user-friendly interfaces that elevate
          user experience across web and mobile platforms.
        </p>
        <div className="flex justify-center">
          <Link href={{ pathname: "/", hash: "contact" }}>
            <ArrowButton
              variant="fill"
              className="my-auto py-6 text-base sm:text-lg md:py-8 lg:py-8"
              left={true}
              size={30}
            >
              Get in touch
            </ArrowButton>
          </Link>
        </div>
      </div>

      {/* categories */}
      <div className="mt-12">
        <UIUX_categories />
      </div>

      {/* Why Choose Our Service */}
      <div className="mt-12">
        <Why_choose_our_service />
      </div>

      {/* Our Approach */}
      <div className="mt-12">
        <OurApproach />
      </div>
    </div>
  );
};

export default page;
