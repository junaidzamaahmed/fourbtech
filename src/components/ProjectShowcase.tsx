"use client"

import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import CaseStudies from "./CaseStudies"
import type { ProjectShowcase } from "@/types"
import { IoIosArrowRoundForward } from "react-icons/io"

type ProjectData = {
  projectShowcaseData: ProjectShowcase[]
}

export default function CustomSwiperCarousel({ projectShowcaseData }: ProjectData) {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  const handleSlideChange = (swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning)
    setIsEnd(swiper.isEnd)
  }

  return (
    <div className="my-5">
      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        speed={400}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-10 h-3 rounded-full inline-block text-blue-50 mx-1 transition-all duration-300"></span>`
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className=""
      >
        {projectShowcaseData.map((project, index) => (
          <SwiperSlide key={index}>
            <CaseStudies {...project} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="flex items-center justify-center">
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
            className={`group rounded-full border-2 p-2 transition-all ${
              isBeginning ? "border-gray-400 opacity-40" : "border-white cursor-pointer hover:bg-white hover:text-black"
            }`}
          >
            <IoIosArrowRoundForward
              className={`rotate-180 ${!isBeginning && "group-hover:text-deep-black"}`}
              size={30}
            />
          </button>
          <div className="custom-pagination flex max-w-1/2 items-center justify-center gap-2 overflow-hidden" />
          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={`group rounded-full border-2 p-2 transition-all ${
              isEnd ? "border-gray-400 opacity-40" : "border-white cursor-pointer hover:bg-white hover:text-black"
            }`}
          >
            <IoIosArrowRoundForward className={`${!isEnd && "group-hover:text-deep-black"}`} size={30} />
          </button>
        </div>
      </div>
    </div>
  )
}
