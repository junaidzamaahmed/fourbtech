import { CheckCircle } from "lucide-react";
import Image from "next/image";
import React from "react";
import webDev from "../../../../../public/webDev/pwds.png";

export default function ProfessionalWebDevService() {
  return (
    <section className="main-container grid grid-cols-1 gap-12 object-center !pb-10 lg:!pb-32 lg:grid-cols-2">
      <div className="order-2 flex flex-col items-start justify-center gap-4">
        <h2 className="text-h1-color">Professional Web Development Services</h2>
        <p className="">
          We&apos;ve Crafted A Range Ot Innovative Web Solutions For Startups.
          Established Businessesr And Entrepreneurs Alike. As A Dedicated Web
          Development Company, Our Mission Is TO Harness The Potential Of The
          Web TO Create Solutions Thot Drive Business Growth. Explore The Web
          Development Services We Provide Below.
        </p>
        <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700">Website Development</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700">Web Portal Development</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700">E-Commerce Development</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700">Full-Stack Web Development</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700">Enterprise Development</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-blue-500" />
            <span className="text-gray-700">
              WordPress Site Development Company
            </span>
          </div>
        </div>
      </div>
      <div className="order-1 h-full w-full lg:order-2">
        <Image
          src={webDev}
          width={300}
          height={300}
          className="h-full w-full rounded-xl object-cover"
          alt="Professional Web Development Services"
        />
      </div>
    </section>
  );
}
