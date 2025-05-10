"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwiper } from "swiper/react";
import { CustomPagination } from "./CustomePagination";

interface CustomPaginationProps {
  totalSlides: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  swiperRef: any;
  customClass?: string;
}

export function NavigationButtons({
  totalSlides,
  swiperRef,
  customClass = "",
}: CustomPaginationProps) {
  const swiper = useSwiper();

  return (
    <div className="mb-5 flex items-center justify-center gap-10 px-4">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-background/80 hover:bg-custom-white hover:text-dark-bg-primary hover:outline-dark-bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-md backdrop-blur-sm transition-all hover:outline-2"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <CustomPagination
        totalSlides={totalSlides}
        swiperRef={swiperRef}
        customClass={customClass}
      />
      <button
        onClick={() => swiper.slideNext()}
        className="bg-background/80 hover:bg-custom-white hover:text-dark-bg-primary hover:outline-dark-bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full shadow-md backdrop-blur-sm transition-all hover:outline-2"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}
