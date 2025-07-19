"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavigationButtons } from "@/components/global/NavigationButton";
import { customerFeedbacks } from "@/constants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const CustomerFeedback = () => {
  const swiperRef = useRef(null);

  return (
    <section className="main-container my-20">
      <div className="flex-center mb-8 flex-col sm:mb-16">
        <h1 className="text-h1-color">Our Customer Feedback</h1>
        <p className="text-p-color capitalize">
          Don&apos;t take our word for it, Trust our customers
        </p>
      </div>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            el: ".customerFeedBack",
            renderBullet: () => "",
          }}
          className="pb-14"
          aria-label="Customer testimonials carousel"
        >
          {customerFeedbacks.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl">
                <div className="bg-custom-white item-start flex flex-col justify-between gap-2 rounded-r-xl p-8 md:justify-around">
                  <p className="text-center">{data.feedback}</p>
                  <div className="flex items-center justify-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={data.avatarUrl || "/placeholder.svg"}
                        alt={`${data.name}'s avatar`}
                      />
                      <AvatarFallback>
                        {data.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start justify-center">
                      <h3 className="font-semibold">{data.name}</h3>
                      <p>{data.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="customerFeedBack mt-6 flex items-center justify-center"></div>
          <div className="mt-5"></div>

          {/* Navigation Buttons */}
          <NavigationButtons
            totalSlides={customerFeedbacks.length}
            swiperRef={swiperRef}
            customClass="customerFeedBack bg-accent-hover"
          />
        </Swiper>
      </div>
    </section>
  );
};

export default CustomerFeedback;
