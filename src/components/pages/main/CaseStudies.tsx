"use client";
import ArrowButton from "@/components/global/ArrowButton";
import { projectShowcaseData } from "@/constants";
import Link from "next/link";
import React from "react";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavigationButtons } from "@/components/global/NavigationButton";

const CaseStudies = () => {
  const swiperRef = useRef(null);
  return (
    <section className="main-container bg-dark-bg-primary">
      <div className="flex-between mb-8 sm:mb-16">
        <span className="">
          <h1 className="text-custom-white">Case Studies</h1>
          <p className="text-custom-white capitalize">
            Proven Solution Tailored to your business needs
          </p>
        </span>
        <ArrowButton
          right
          variant="outline"
          size={24}
          className="!border-custom-white text-custom-white/90 hover:!text-custom-white"
        >
          <Link href="/">view all cases</Link>
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
          className="pb-14"
        >
          {projectShowcaseData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 rounded-xl">
                <div className="relative h-full w-full rounded-xl">
                  <Image
                    src={data.imageUrl}
                    width={400}
                    height={300}
                    alt={data.title}
                    className="h-full w-full rounded-l-xl object-cover"
                  />
                </div>
                <div className="bg-custom-white item-start flex flex-col justify-between gap-2 rounded-r-xl p-8 md:justify-around">
                  <h2 className="">{data.company}</h2>
                  <p className="">{data.title}</p>
                  <p className="text-[.8rem] md:text-base">
                    {data.description}
                  </p>
                  <div className=" ">
                    <ArrowButton
                      right
                      variant="noOutline"
                      size={20}
                      className="inline-flex !pl-0"
                    >
                      <Link href={data.projectLink}>View Project</Link>
                    </ArrowButton>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-6 flex items-center justify-center"></div>
          <div className="mt-10"></div>

          {/* Navigation Buttons */}
          <NavigationButtons
            totalSlides={projectShowcaseData.length}
            swiperRef={swiperRef}
            customClass={"custom-pagination bg-custom-white"}
          />
        </Swiper>
      </div>
    </section>
  );
};

export default CaseStudies;
