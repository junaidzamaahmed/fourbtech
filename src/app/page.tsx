"use client";
import EmployeeCard from "@/components/EmployeeCard";
import { employees, projectShowcaseData } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CaseStudies from "@/components/CaseStudies";
import Button from "@/components/global/Button";
export default function Home() {
  return (
    <main className="mx-auto h-screen w-full font-extrabold">
      <section className="min-h-screen">
        <div className="absolute top-0 left-0 h-screen w-full">
          <video
            src="/herobg.mp4"
            // autoPlay
            playsInline
            controls={false}
            preload="auto"
            loop
            muted
            className="h-full w-full object-cover outline-none"
          />
        </div>
      </section>
      <section className="bg-dark-bg-primary relative flex min-h-screen flex-col items-center justify-center px-10">
        <div className="mb-20 flex w-full items-center justify-between">
          <div className="">
            <h1 className="py-2 text-4xl font-semibold">Case Studies</h1>
            <p className="text-base font-normal ">
              Proven Solutions Tailored to Your Business Needs.
            </p>
          </div>
          <Button
            text={"View all cases"}
            outline={true}
            rightIcon={true}
            href={"/"}
            customCLass="!text-custom-white !px-5 !max-h-16"
          />
        </div>
        <div>
          {projectShowcaseData.map((project, index) => {
            return <CaseStudies {...project} key={index} />;
          })}
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
