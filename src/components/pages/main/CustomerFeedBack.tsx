"use client";
import { customerFeedbacks } from "@/constants";
import React, { useRef } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationButtons } from "@/components/global/NavigationButton";

const CustomerFeedBack = () => {
  const swiperRef = useRef(null);
  return (
    <section className="main-container flex max-w-screen flex-col items-center justify-around">
      <div className="text-center">
        <h1>Our Customer FeedBack</h1>
        <p>Don&apos;t take our word tor it. Trust our customers</p>
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
          {customerFeedbacks.map((item, idx) => (
            <SwiperSlide key={idx} className="relative">
              <div className="border-0 bg-amber-400 hover:shadow-2xl">
                <p className="bg-red-700 text-black">{item.feedback}</p>
                <div className="flex-center">
                  <Avatar>
                    <AvatarImage src={item.avatarUrl} />
                    <AvatarFallback>US</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination mt-6 flex items-center justify-center"></div>
          <div className="mt-10"></div>

          {/* Navigation Buttons */}
          <NavigationButtons
            totalSlides={customerFeedbacks.length}
            swiperRef={swiperRef}
            
          />
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerFeedBack;
