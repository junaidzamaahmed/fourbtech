"use client";
import EmployeeCard from "@/components/EmployeeCard";
import { employees, projectShowcaseData, services } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import Button from "@/components/global/Button";

import CustomSwiperCarousel from "@/components/ProjectShowcase";
import { InfiniteMovingCards } from "@/components/Infinity-movingcard";
import Image from "next/image";
import CounterOnView from "@/components/CoutUp";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main className="mx-auto h-screen w-full font-extrabold">
      <section className="relative flex flex-col items-center justify-center sm:min-h-screen">
        {/* Hero section */}
        <div className="absolute top-0 left-0 -z-10 w-full opacity-45">
          <video
            src="/herobg.mp4"
            autoPlay
            playsInline
            controls={false}
            preload="auto"
            loop
            muted
            className="h-full w-full object-cover outline-none"
          />
        </div>
        <div className="flex max-w-[100vw] flex-col items-center justify-between">
          <div className="p-10 lg:max-w-[90vw]">
            <h1 className="text-h1-color my-8 text-center text-6xl leading-20 font-semibold max-md:text-5xl max-md:leading-16 max-sm:text-2xl max-sm:leading-8">
              We Design, Build & Grow Digital <br />
              Brands That Deliver Results
            </h1>
            <p className="text-p-color mb-8 text-center text-2xl font-normal max-sm:text-base">
              Empowering Your Business With Cutting-Edge Technology Solutions.
              Innovative, Tailored Tech Services Designed To Drive Growth And
              Efficiency.
            </p>
          </div>
          <div className="mb-8 flex items-center justify-center gap-5">
            <Button
              text={"see our products"}
              leftIcon={true}
              href="/products"
              outline={false}
              customCLass="text-[.6rem] sm:text-lg  hover:!bg-transparent hover:!text-accent-hover !border-accent-hover !text-custom-white !font-bold border-[3px] sm:!p-4 !min-w-20 sm:!min-w-52"
            />
            <Button
              text={"Let's talk"}
              leftIcon={true}
              href="/contact"
              outline={true}
              customCLass="text-[.6rem] sm:text-lg hover:!bg-accent-hover hover:!text-custom-white !border-[3px] sm:!p-4 !min-w-30 sm:!min-w-52"
            />
          </div>
          <div className="max-w-[90vw] sm:mt-10">
            <InfiniteMovingCards items={services} />
          </div>
        </div>
      </section>

      <section className="bg-dark-bg-primary relative mx-auto grid grid-cols-2 items-center gap-x-12 gap-y-2 px-5 py-10 md:px-28">
        <p className="font-light">Company Profile</p>

        <div className="flex flex-col items-center justify-center">
          <div className="bg-p-color/70 h-[1px] w-[70%] rounded-full" />
        </div>
        <div className="flex flex-col items-start justify-between gap-3">
          <h1 className="text-base font-semibold sm:text-2xl md:text-4xl">
            We Don&apos;t Just Work For You, We Grow With You!
          </h1>
          <p className="text-[.5rem] font-light sm:text-sm md:text-base">
            We Specialize In Creating Visually Stunning And Highly Functional
            Websites That Help Businesses Stand Out In The Digital World. Our
            Team Of Talented Designers And Developers Are Passionate About
            Crafting
          </p>
          <Button
            outline={true}
            href="/"
            rightIcon={true}
            text="More about us "
            customCLass="!text-custom-white !border-0 !p-0 inline-flex !text-[.6rem] sm:!text-base"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-5 md:py-10">
          <div className="">
            <div className="inline-grid grid-cols-2 grid-rows-2 gap-12">
              <CounterOnView end={26} text={"Project Completed"} />
              <CounterOnView end={10} text={"Project Completed"} />
              <CounterOnView end={18} text={"Project Completed"} />
              <CounterOnView end={100} text={"Project Completed"} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-28">
        <div className="flex flex-col items-center justify-center gap-5 mb-10">
          <h1 className="text-h1-color md:text-6xl text-2xl font-semibold sm:text-4xl">
            Our Services
          </h1>
          <p className="text-p-color text-center font-normal text-sm sm:text-base md:text-lg">
            Comprehensive Solutions Tailored To Your Business Needs And
            Technical Requirements.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      <section className="bg-dark-bg-primary relative flex flex-col items-center justify-center px-5 py-10 md:px-28">
        <div className="mb-10 w-full items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="max-w-1/2">
              <h1 className="py-2 text-4xl font-semibold max-sm:text-xl">
                Case Studies
              </h1>
              <p className="text-base font-normal max-sm:text-[.8rem]">
                Proven Solutions Tailored to Your Business Needs.
              </p>
            </div>
            <Button
              text={"View all cases"}
              outline={true}
              rightIcon={true}
              href={"/"}
              customCLass="!text-custom-white sm:!p-5 !pl-3
                max-sm:text-[.6rem] text-lg "
            />
          </div>
          <div className="relative py-10">
            <CustomSwiperCarousel projectShowcaseData={projectShowcaseData} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-5 py-10">
        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:px-28">
          <div className="flex flex-col items-start justify-between gap-5 md:py-10">
            <h1 className="text-h1-color text-4xl font-semibold lg:text-5xl">
              Who We Are
            </h1>
            <p className="text-p-color text-sm font-light lg:text-base">
              At Our IT Solutions & Services Agency Agency, We Specialize In
              Creating Visually Stunning And Highly Functional Websites Or
              Mobile Apps That Help Businesses Stand Out In The Digital World.
              Our Team Of Talented Designers And Developers Are Passionate About
              Crafting.
            </p>
            <Button
              text="Continue reading"
              rightIcon={true}
              href="/"
              outline={true}
              customCLass="!border-0 text-sm hover:!text-accent-hover lg:!text-base"
            />
          </div>
          <div className="">
            <Image
              src="/placeholders/palaceholder2.png"
              alt="about"
              width={500}
              height={500}
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="bg-custom-white grid w-full flex-wrap items-center justify-center gap-2 p-4 max-md:hidden max-md:grid-cols-2 md:px-28 lg:grid-cols-3 xl:grid-cols-4">
          {employees.map((employee, index) => {
            return <EmployeeCard {...employee} key={index} />;
          })}
        </div>
        <div className="relative flex w-full flex-col items-center justify-center gap-5 md:hidden">
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 500,
              }}
              loop={true}
              speed={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className=""
            >
              {employees
                .slice(0, employees.length / 2)
                .map((employee, index) => {
                  return (
                    <SwiperSlide key={index} className="swiper-autoheight">
                      <EmployeeCard {...employee} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
          <div className="w-full">
            <Swiper
              spaceBetween={20}
              autoplay={{
                delay: 500,
              }}
              loop={true}
              speed={2}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className=""
            >
              {employees
                .slice(employees.length / 2 + 1, employees.length)
                .map((employee, index) => {
                  return (
                    <SwiperSlide key={index} className="swiper-autoheight">
                      <EmployeeCard {...employee} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </section>
      <section className="min-h-screen"></section>
    </main>
  );
}
