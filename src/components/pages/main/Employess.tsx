"use client";
import ArrowButton from "@/components/global/ArrowButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { employees } from "@/constants";
import type { Employee } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiLinkedin } from "react-icons/fi";
import { useEffect, useRef } from "react";

import palaceholder from "../../../../public/placeholders/palaceholder2.png";

// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const EmployeeCard = ({
  name,
  role,
  image,
  description,
  email,
  linkedin,
}: Employee) => {
  return (
    <Card className="border-dark-bg-primary/10 bg-custom-white flex h-full flex-col border-[1px] transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex flex-col items-center justify-center space-y-3">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <img
            src={image || `https://placehold.co/600x400?text=${name}`}
            alt={name}
            className="h-full w-full !object-cover !object-center "
          />
        </div>
        <CardTitle className="w-full text-start">
          <h3 className="text-dark-bg-primary text-xl font-semibold">{name}</h3>
          <p className="text-muted-foreground text-sm font-medium">{role}</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="prose prose-sm text-muted-foreground max-w-none">
          {description?.split("<br/>").map((text, index) => (
            <p className="mb-1 text-sm" key={index}>
              {text}
            </p>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-3">
        <Link
          href={`mailto:${email}`}
          className="bg-p-color/20 hover:bg-accent-hover group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
          aria-label={`Email ${name}`}
        >
          <FiMail
            size={18}
            className="text-dark-bg-primary group-hover:text-custom-white"
          />
        </Link>
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-p-color/20 hover:bg-accent-hover group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
          aria-label={`LinkedIn profile of ${name}`}
        >
          <FiLinkedin
            size={18}
            className="text-dark-bg-primary group-hover:text-custom-white"
          />
        </Link>
      </CardFooter>
    </Card>
  );
};

const Employees = ({ isHome = true }: { isHome?: boolean }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Function to equalize slide heights
  const equalizeSlideHeights = () => {
    if (!swiperRef.current) return;

    // Get all slide elements
    const slides = swiperRef.current.slides;

    // Reset heights first
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.height = "auto";
    }

    // Find the tallest slide
    let maxHeight = 0;
    for (let i = 0; i < slides.length; i++) {
      const slideHeight = (slides[i] as HTMLElement).offsetHeight;
      maxHeight = Math.max(maxHeight, slideHeight);
    }

    // Set all slides to the height of the tallest
    for (let i = 0; i < slides.length; i++) {
      (slides[i] as HTMLElement).style.height = `${maxHeight}px`;
    }
  };

  // Re-equalize heights on window resize
  useEffect(() => {
    const handleResize = () => {
      // Add a small delay to ensure DOM has updated
      setTimeout(equalizeSlideHeights, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="main-container my-28 flex flex-col items-center justify-between gap-10">
      {isHome && (
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed ">
              At our IT solutions & services agency, we specialize in creating
              visually stunning and highly functional websites or mobile apps
              that help businesses stand out in the digital world. Our team of
              talented designers and developers are passionate about crafting
              innovative digital solutions.
            </p>
            <ArrowButton right variant="noOutline" size={24}>
              <Link href={"/"} className="font-medium">
                Continue Reading
              </Link>
            </ArrowButton>
          </div>
          <div className="h-[300px] w-full sm:h-[350px] lg:min-h-full">
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src={palaceholder}
                alt="Our team at work"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      <h1 className="mt-16 text-center">Our Team</h1>

      <div className="mt-4 w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            // Small devices (640px and up)
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // Medium devices (768px and up)
            768: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            // Large devices (1024px and up)
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="w-full"
          onInit={(swiper) => {
            swiperRef.current = swiper;
            // Wait for images to load before calculating heights
            setTimeout(equalizeSlideHeights, 100);
          }}
          onResize={() => equalizeSlideHeights()}
          onSlideChangeTransitionEnd={() => equalizeSlideHeights()}
        >
          {employees.map((employee, index) => (
            <SwiperSlide key={index} className="h-auto">
              <EmployeeCard {...employee} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Employees;
