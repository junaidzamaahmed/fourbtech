import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import pWebDev from "../../../../../public/webDev/pWebDev.png";

export default function HireDedicatedDevelopers() {
  return (
          <section className="main-container grid grid-cols-1 gap-12 object-center !pb-10 lg:!pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h2 className="text-h2-color">Hire Dedicated Web Developers</h2>
          <p className="">
            We&apos;ve Crafted A Range Of Innovative Web Solutions For Startups,
            Established Businesses, And Entrepreneurs Alike. AS A Dedicated Web
            Development Company, Our Mission IS To Harness The Potential Of The
            Web To Create Solutions That Drive Business Growth. Explore The web
            Development services We Provide Below,
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire Web Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire Full Stack Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire Laravel Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire Python Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire PHP Developers</span>
            </div>
          </div>
        </div>
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={pWebDev}
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
            alt="development"
          />
        </div>
      </section>
  )
}
