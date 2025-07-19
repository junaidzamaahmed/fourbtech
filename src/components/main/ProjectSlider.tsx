"use client";

import Image, { StaticImageData } from "next/image";
import { GenericSwiper, SwiperSlide } from "../GenericSwiper";

import thumbnail from "../../../public/projectsCarousel/thumbnail.png";
import thumbnail1 from "../../../public/projectsCarousel/thumbnail1.png";
import thumbnail2 from "../../../public/projectsCarousel/thumbnail2.png";
import thumbnail3 from "../../../public/projectsCarousel/thumbnail3.png";
interface ImageSlide {
  id: number;
  src: StaticImageData;
  alt: string;
  title?: string;
  description?: string;
}

const imageSlides: ImageSlide[] = [
  {
    id: 1,
    src: thumbnail,
    alt: "HomeX",
    title: "HomeX",
    description: "HomeX",
  },
  {
    id: 2,
    src: thumbnail1,
    alt: "OMS",
    title: "OMS",
    description: "OMS",
  },
  {
    id: 3,
    src: thumbnail2,
    alt: "Multivendor Ecommerce",
    title: "Multivendor Ecommerce",
    description: "Multivendor Ecommerce",
  },
  {
    id: 4,
    src: thumbnail3,
    alt: "Multivendor Ecommerce Mobile App",
    title: "Multivendor Ecommerce Mobile App",
    description: "Multivendor Ecommerce Mobile App",
  },
];

export const ProjectSlider = () => {
  return (
    <GenericSwiper
      autoPlay={true}
      autoPlayDelay={2000}
      loop={true}
      draggable={true}
      slidesPerViewConfig={{
        default: 2,
        sm: 2,
        md: 2,
      }}
      showNavigation={false}
      showPagination={true}
      className="main-container w-full"
      // onSlideChange={(index) => console.log("Active slide:", index)}
    >
      {imageSlides.map((slide) => (
        <SwiperSlide key={slide.id} className="relative">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-80">
            <Image
              src={slide.src || "/placeholder.svg"}
              alt={slide.alt}
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
