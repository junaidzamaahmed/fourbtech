"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Services } from "@/types";

interface InfiniteCardCarouselProps {
  services: Services[];
}

export default function InfiniteCardCarousel({
  services,
}: InfiniteCardCarouselProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      loop={true}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      allowTouchMove={false}
      grabCursor={true}
      className="z-50 max-w-full"
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center gap-2">
            <Image
              src={service.icon}
              alt={service.title}
              width={24}
              height={24}
              className="bg-h1-color/20 min-lg: rounded-full p-1"
            />
            <h2 className="text-sm font-medium text-gray-700 min-lg:text-2xl">
              {service.title}
            </h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
