/* eslint-disable @next/next/no-img-element */
"use client";
import ArrowButton from "@/components/global/ArrowButton";
import { projectShowcaseData } from "@/constants";
import Link from "next/link";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavigationButtons } from "@/components/global/NavigationButton";

const CaseStudies = () => {
  const divRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      },
    );
  }, []);
  const swiperRef = useRef(null);
  return (
    <section
      className="main-container bg-dark-bg-primary !my-28 !py-16 md:!py-20"
      ref={divRef}
    >
      <div className="mb-6 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-between md:mb-16">
        <span className="space-y-1">
          <h1 className="text-custom-white">our recent events</h1>
          <p className="text-custom-white/80 capitalize">
            A Timeless Showcase of Cherished Occasions{" "}
          </p>
        </span>
        <Link href="/about">
          <ArrowButton
            right
            variant="outline"
            size={24}
            className="!border-custom-white !text-custom-white/70 hover:!text-custom-white self-start !py-6 sm:self-center"
          >
            view all
          </ArrowButton>
        </Link>
      </div>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
            renderBullet: () => "",
          }}
          loop={true}
          className="pb-14"
        >
          {projectShowcaseData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 overflow-hidden rounded-xl shadow-lg lg:grid-cols-2">
                <div className="relative !aspect-square h-56 !w-full sm:h-[400px]  max-h-[480px] md:!aspect-auto md:h-full">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    className="h-full w-full origin-center object-cover object-center"
                  />
                </div>
                <div className="bg-custom-white flex flex-col justify-center gap-4 p-6 md:p-8 lg:p-10">
                  <div className="space-y-3 md:space-y-4">
                    <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">
                      {data.company}
                    </h2>
                    <p className="text-h1-color text-lg font-medium sm:text-xl md:text-2xl">
                      {data.title}
                    </p>
                    <p className="text-sm text-gray-700 md:text-lg">
                      <span className="uppercase">{data.description[0]}</span>
                      <span className="lowercase">
                        {data.description.slice(1, data.description.length)}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={data.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowButton
                        right
                        variant="outline"
                        size={20}
                        className="hover:!bg-accent-hover hover:!border-accent-hover inline-flex hover:!text-white"
                      >
                        View
                      </ArrowButton>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-6 flex items-center justify-center"></div>

          {/* Navigation Buttons */}
          <NavigationButtons
            totalSlides={projectShowcaseData.length}
            swiperRef={swiperRef}
            customClass={"custom-pagination bg-custom-white mt-4 md:mt-8 !py-5"}
          />
        </Swiper>
      </div>
    </section>
  );
};

export default CaseStudies;
