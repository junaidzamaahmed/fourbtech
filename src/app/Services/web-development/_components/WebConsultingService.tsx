import Image from 'next/image'
import React from 'react'
import consulting from "../../../../../public/webDev/consulting.png";
import Cloud from "../../../../../public/Icons/Web/cloud.png";
import globe from "../../../../../public/Icons/Web/globe.png";
import technology from "../../../../../public/Icons/Web/technology.png";


export default function WebConsultingService() {
  return (
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-10 lg:!pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={consulting}
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
            alt="Web Consulting Service Services"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h2 className="text-h2-color">Web Consulting Service Services</h2>
          <p className="">
            Receive expert web development advice from seasoned industry
            professionals —partner with us to craft an effective development
            roadmap and growth strategy tailored to your business. Our
            consulting services guide you through a smooth and successful
            transition to digital solutions, helping you establish a strong
            online presence.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <Image
                src={Cloud}
                width={30}
                height={30}
                alt="Cloud Consulting"
                className="bg-dark-bg-primary/10 aspect-square rounded-full object-contain p-1"
              />
              <span className="text-gray-700">Cloud Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={globe}
                width={30}
                height={30}
                alt="Web Consulting"
                className="bg-dark-bg-primary/10 aspect-square rounded-full object-contain p-1"
              />
              <span className="text-gray-700">Web Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={technology}
                width={30}
                height={30}
                alt="Techonology Consultants"
                className="bg-dark-bg-primary/10 aspect-square rounded-full object-contain p-1"
              />
              <span className="text-gray-700">Techonology Consultants</span>
            </div>
          </div>
        </div>
      </section>
  )
}
