import Image from 'next/image'
import React from 'react'
import frontend from "../../../../../public/webDev/front_end.png";
import htmlIcon from "../../../../../public/Icons/Web/html.png";
import react from "../../../../../public/Icons/Web/react.png";
import CSSDev from "../../../../../public/Icons/Web/css.png";
import bootstrap from "../../../../../public/Icons/Web/bootstrap.png";
import Js from "../../../../../public/Icons/Web/js.png";
import Wordpress from "../../../../../public/Icons/Web/wardpress.png";


export default function FrontendDeveloment() {
  return (
          <section className="main-container grid grid-cols-1 gap-12 object-center !pb-10 lg:!pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={frontend}
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
            alt="development"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-4">
          <h2 className="text-h1-color">Front-End Development Services</h2>
          <p className="">
            Your website&apos;s frontend is the first and only point of contact
            with your potential customers. That&apos;s why a compelling design
            is essential to engage visitors, keep them interested, and drive
            conversions.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <Image
                src={htmlIcon}
                width={20}
                height={20}
                alt="html Development"
              />
              <span className="text-gray-700">HTML Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={react}
                width={20}
                height={20}
                alt="react Development"
              />
              <span className="text-gray-700">React Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={CSSDev}
                width={20}
                height={20}
                alt="CSS Development"
              />
              <span className="text-gray-700">CSS Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={bootstrap}
                width={20}
                height={20}
                alt="Bootstrap Development"
              />
              <span className="text-gray-700">Bootstrap Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={Js}
                width={20}
                height={20}
                alt="JavaScript Development"
              />
              <span className="text-gray-700">JavaScript Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={Wordpress}
                width={20}
                height={20}
                alt="WordPress Development"
              />
              <span className="text-gray-700">WordPress Development</span>
            </div>
          </div>
        </div>
      </section>
  )
}
