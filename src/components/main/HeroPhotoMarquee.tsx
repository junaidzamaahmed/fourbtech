import React from "react";
import { FadingPhotoSlider } from "../FadingPhoto";

import thumbnail from "../../../public/projectsCarousel/thumbnail.png";
import thumbnail1 from "../../../public/projectsCarousel/thumbnail1.png";
import thumbnail2 from "../../../public/projectsCarousel/thumbnail2.png";
import thumbnail3 from "../../../public/projectsCarousel/thumbnail3.png";
import { StaticImageData } from "next/image";

interface ImageSlide {
  id: number;
  src: StaticImageData;
  alt: string;
  title?: string;
  link?: string;
  description?: string;
}

const imageSlides: ImageSlide[] = [
  {
    id: 1,
    src: thumbnail,
    alt: "HomeX",
    link: "/",
    title: "HomeX",
    description: "HomeX",
  },
  {
    id: 2,
    src: thumbnail1,
    alt: "OMS",
    link: "/",
    title: "OMS",
    description: "OMS",
  },
  {
    id: 3,
    src: thumbnail2,
    alt: "Multivendor Ecommerce",
    link: "/",
    title: "Multivendor Ecommerce",
    description: "Multivendor Ecommerce",
  },
  {
    id: 4,
    src: thumbnail3,
    alt: "Multivendor Ecommerce Mobile App",
    link: "/",
    title: "Multivendor Ecommerce Mobile App",
    description: "Multivendor Ecommerce Mobile App",
  },
];

const HeroPhotoMarquee = () => {
  return (
    <div className="overflowHidden flex max-w-[95vw] items-center justify-center">
      <FadingPhotoSlider
        images={imageSlides}
        direction="right"
        pauseOnHover={false}
      />
    </div>
  );
};

export default HeroPhotoMarquee;
