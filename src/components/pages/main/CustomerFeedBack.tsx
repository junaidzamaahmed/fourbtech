"use client";
import { customerFeedbacks } from "@/constants";
import React from "react";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { NavigationButtons } from "@/components/global/NavigationButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CustomerFeedBack = () => {
  const swiperRef = useRef(null);
  return (
    <section className="main-container">
      <div className="flex-center mb-8 flex-col sm:mb-16">
        <h1 className="text-h1-color">Our Customer Feedback</h1>
        <p className="text-p-color capitalize">
          Don&apos;t take our word for it, Trust our customers
        </p>
      </div>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".custom-pagination-customer",
            renderBullet: () => "",
          }}
          className="pb-14"
        >
          {customerFeedbacks.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl">
                <div className="bg-custom-white item-start flex flex-col justify-between gap-2 rounded-r-xl p-8 md:justify-around">
                  <p className="text-center">{data.feedback}</p>
                  <div className="flex items-center justify-center gap-3">
                    <Avatar>
                      <AvatarImage src={data.avatarUrl} />
                      <AvatarFallback>US</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start justify-center">
                      <h3 className="font-semibold">{data.name}</h3>
                      <p>{data.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination-customer mt-6 flex items-center justify-center"></div>
          <div className="mt-5"></div>

          {/* Navigation Buttons */}
          <NavigationButtons
            totalSlides={customerFeedbacks.length}
            swiperRef={swiperRef}
            customClass={"custom-pagination-customer bg-accent-hover"}
          />
          <div className="mb-4"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerFeedBack;
