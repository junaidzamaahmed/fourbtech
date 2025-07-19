import Image from 'next/image'
import React from 'react'
import methodology from "../../../../../public/Icons/app/methodology.png";


export default function OurMethodology() {
  return (
          <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-6">
          <h2 className="text-h1-color mb-3 font-semibold">Our Methodology</h2>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            Our approach sets us apart as the preferred partner for outsourced
            mobile application development and software engineering solutions.
            We follow a structured process that begins with a deep understanding
            of your requirements. From there, we develop a prototype aligned
            with your design vision, bring your ideas to life through
            development and testing, and deliver a fully functional final
            product.
          </p>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            Throughout the entire development journey, we act as an extension of
            your team, providing free project consultations, accurate time
            estimates, and regular progress reports. We also stand by our
            commitment to ongoing maintenance and support, ensuring long-term
            success for your software solutions.
          </p>
        </div>
        <div className="h-full w-full">
          <Image
            src={methodology}
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
            alt="Our Methodology"
          />
        </div>
      </section>
  )
}
