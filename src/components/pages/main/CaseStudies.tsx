"use client";
import ArrowButton from "@/components/global/ArrowButton";
import { projectShowcaseData } from "@/constants";
import Link from "next/link";
import Image from "next/image";
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
        <ArrowButton
          right
          variant="outline"
          size={24}
          className="!border-custom-white !text-custom-white/70 hover:!text-custom-white self-start !py-6 sm:self-center"
        >
          <Link href="/">view all</Link>
        </ArrowButton>
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
              <div className="grid grid-cols-1 overflow-hidden rounded-xl shadow-lg sm:grid-cols-2">
                <div className="relative h-56 w-full sm:h-full">
                  <Image
                    src={data.imageUrl}
                    fill
                    alt={data.title}
                    className="origin-center object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="bg-custom-white flex flex-col justify-between gap-4 p-6 md:p-8 lg:p-10">
                  <div className="space-y-3 md:space-y-4">
                    <h2 className="text-xl font-semibold md:text-2xl">
                      {data.company}
                    </h2>
                    <p className="text-lg font-medium md:text-xl">
                      {data.title}
                    </p>
                    <p className="text-sm text-gray-700 md:text-base">
                      {data.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <ArrowButton
                      right
                      variant="noOutline"
                      size={20}
                      className="hover:!bg-accent-hover inline-flex hover:!text-white"
                    >
                      <Link href={data.projectLink}>View</Link>
                    </ArrowButton>
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
