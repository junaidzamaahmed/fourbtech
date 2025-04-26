"use client";

import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

interface CustomPaginationProps {
  totalSlides: number;
  swiperRef: any;
}

export function CustomPagination({
  totalSlides,
  swiperRef,
}: CustomPaginationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiper = useSwiper();

  useEffect(() => {
    if (swiperRef?.current?.swiper) {
      const swiperInstance = swiperRef.current.swiper;

      const updateActiveIndex = () => {
        setActiveIndex(swiperInstance.realIndex);
      };

      swiperInstance.on("slideChange", updateActiveIndex);

      return () => {
        swiperInstance.off("slideChange", updateActiveIndex);
      };
    }
  }, [swiperRef]);

  const handleBulletClick = (index: number) => {
    if (swiperRef?.current?.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="custom-pagination  right-0 bottom-4 left-0 z-10 flex items-center justify-center space-x-2">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => handleBulletClick(index)}
          className={`bg-custom-white h-2 rounded-full transition-all duration-300 ${
            activeIndex === index ? "w-8 opacity-100" : "w-4 opacity-50"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
