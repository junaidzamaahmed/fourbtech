import React from 'react'
import { CheckCircle } from "lucide-react";
import performance from "../../../../../public/mobile/performance.png";
import Image from 'next/image';


export default function Consistancy() {
  return (
          <section className="main-container grid grid-cols-1 gap-12 object-center !pb-10 lg:!pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-4">
          <h2 className="text-
          -color mb-3 font-semibold">
            Consistent Performance On All Devices
          </h2>
          <p className="">
            Expand Your Audience With Budget-friendly Mobile Apps That Run
            Smoothly Across Multiple Platforms And Devices. Our Cross-platform
            Development Expertise Ensures Your App Delivers A Seamless User
            Experience And Full Functionality, NO Matter The operating system.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-1 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">
                Single Codebase For Streamlined Development Across Platforms
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">
                Uniform user Ex rience On All Devices
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">
                Accelerated Launch Timelines TO Stay Ahead In The Market
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">
                Lower Costs For Both Development And Ongoing Maintenance
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">
                Scalable Architecture To Sup ort Future Growth And Updates
              </span>
            </div>
          </div>
        </div>
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={performance}
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
            alt="Consistent Performance On All Devices"
          />
        </div>
      </section>
  )
}
