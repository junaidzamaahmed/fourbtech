"use client";
import { customerFeedbacks } from "@/constants";
import React from "react";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutFeedBack = () => {
  const swiperRef = useRef(null);
  return (
    <section className="main-container my-20">
      <div className="flex-center mb-8 flex-col sm:mb-16">
        <p className="">Testimonials</p>
        <h2 className="text-h1-color">
          See What Customers Say About Our Services
        </h2>
        <p className="text-p-color capitalize">
          Our diverse team of designers, developers, and strategists
          collaborates seamlessly to turn your vision into reality—combining
          technical expertise, creative flair, and data-driven insight to drive
          your digital success.
        </p>
      </div>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
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
        </Swiper>
      </div>
    </section>
  );
};

export default AboutFeedBack;
