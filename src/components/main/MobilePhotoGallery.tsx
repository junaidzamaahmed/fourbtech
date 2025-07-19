"use client";

import Image, { StaticImageData } from "next/image";

import { GenericSwiper, SwiperSlide } from "../GenericSwiper";

interface ImagesProps {
  id: number;
  image: StaticImageData;
  title: string;
  description?: string;
}

export const MobilePhotoSlider = ({ images }: { images: ImagesProps[] }) => {
  return (
    <GenericSwiper
      autoPlay={true}
      autoPlayDelay={1000}
      loop={true}
      draggable={true}
      slidesPerViewConfig={{
        default: 1,
        sm: 2,
        md: 2,
      }}
      showNavigation={false}
      showPagination={true}
      className="main-container w-full"
      // onSlideChange={(index) => console.log("Active slide:", index)}
    >
      {images.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-80">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </GenericSwiper>
  );
};
