"use client";
import EmployeeCard from "@/components/EmployeeCard";
import { employees, projectShowcaseData, services } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import Button from "@/components/global/Button";
import InfiniteCardCarousel from "@/components/InfinityMovingCard";
import CustomSwiperCarousel from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main className="mx-auto h-screen w-full font-extrabold">
      <section className="relative flex min-h-screen flex-col items-center justify-center">
        {/* Hero section */}
        <div className="absolute top-0 left-0 -z-10 h-screen w-full opacity-45">
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
        <div className="flex max-w-[100vw] flex-col items-center justify-center">
          <div className="p-10 lg:max-w-[70vw]">
            <h1 className="text-h1-color my-8 text-center text-6xl leading-20 font-semibold max-md:text-5xl max-md:leading-16 max-sm:text-2xl max-sm:leading-8">
              We Design, Build & Grow Digital <br />
              Brands That Deliver Results
            </h1>
            <p className="text-p-color mb-8 text-center text-xl font-normal max-md:text-base">
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
              customCLass="text-sm hover:!bg-transparent hover:!text-accent-hover !border-accent-hover !text-custom-white !font-bold !border-[3px] !p-4 !min-w-52"
            />
            <Button
              text={"Let's talk"}
              leftIcon={true}
              href="/contact"
              outline={true}
              customCLass=" hover:!bg-accent-hover hover:!text-custom-white !border-[3px] !p-4 !min-w-52"
            />
          </div>
          <div className="mt-10 max-w-screen">
            <InfiniteCardCarousel services={services} />
          </div>
        </div>
      </section>
      <section className="bg-dark-bg-primary relative flex flex-col items-center justify-center px-20 py-10 max-md:px-5">
        <div className="mb-10 w-full items-center justify-between">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div className="w-full">
              <h1 className="py-2 text-4xl font-semibold max-md:text-xl">
                Case Studies
              </h1>
              <p className="text-base font-normal">
                Proven Solutions Tailored to Your Business Needs.
              </p>
            </div>
            <Button
              text={"View all cases"}
              outline={true}
              rightIcon={true}
              href={"/"}
              customCLass="!text-custom-white !px-5 !max-h-16 max-md:text-sm"
            />
          </div>
          <div className="relative">
            <CustomSwiperCarousel projectShowcaseData={projectShowcaseData} />
          </div>
        </div>
      </section>
      <section className="">
        <div className="gird grid-cols-2 gap-5">
          <div className="flex flex-col"></div>
        </div>
        <div className="grid w-full grid-cols-4 flex-wrap items-center justify-center gap-2 bg-gray-100 p-4 max-lg:grid-cols-2 max-md:hidden max-md:grid-cols-2">
          {employees.map((employee, index) => {
            return <EmployeeCard {...employee} key={index} />;
          })}
        </div>
        <div className="w-full md:hidden">
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
            {employees.map((employee, index) => {
              return (
                <SwiperSlide key={index} className="swiper-autoheight">
                  <EmployeeCard {...employee} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </main>
  );
}
