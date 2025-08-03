import Image from "next/image";
import Link from "next/link";
import React from "react";

import ArrowButton from "@/components/global/ArrowButton";
import WeAreCapableOfSection from "./_components/WeAreCapableOfSection";
import ProcessWorkflowSection from "./_components/ProcessWorkflowSection";
import ConnectWithUs from "./_components/ConnectWithUs";
import Works from "./_components/Works";
import WhyBrandChooseUs from "./_components/WhyBrandChooseUs";

const VideoProductionAndMotionDesignPage = () => {
  return (
    <div className=" min-h-screen space-y-10 md:space-y-20 mt-25">
      {/* Header */}
      <div className="flex flex-col items-center justify-center gap-12">
        {/* navigation */}
        <div className="flex items-center justify-center gap-2 text-gray-500">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span>{">"}</span>
          <span>Video Production</span>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl leading-relaxed text-black md:text-5xl md:leading-snug">
            Bring Your
            <span className="text-accent-hover mt-4 text-3xl md:text-5xl">
              {" "}
              Vision of Life{" "}
            </span>
            with High-Impact <br /> Video Production & Bold Motion Design
          </h1>
        </div>
      </div>

      {/* Hero Section */}
      <div className="main-container flex flex-col items-center space-y-8">
        <div className="relative aspect-video w-full">
          <Image
            src="/videoProduction/video_production_image.jpg"
            alt="Video Production Hero"
            fill
            className="rounded-2xl object-cover shadow-lg"
          />
        </div>
        <p className="text-center font-semibold">
          From cinematic video production to bold motion design, we bring your
          brand to life.
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

      {/* We are capable of */}
      <WeAreCapableOfSection />

      {/* Why Brands Choose Us Section */}
      <WhyBrandChooseUs />

      {/* Process Workflow Section */}
      <ProcessWorkflowSection />

      {/* Works Section */}
      <Works />

      {/* Contact us */}
      <ConnectWithUs />
    </div>
  );
};

export default VideoProductionAndMotionDesignPage;
