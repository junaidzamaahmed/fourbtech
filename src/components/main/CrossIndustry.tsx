import React from "react";
import { ServiceBannersHome } from "./ServiceBannersHome";

export default function CrossIndustry() {
  return (
    <section className="main-container my-20 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Experience />
      <OurPerformance />
    </section>
  );
}

function Experience() {
  return (
    <div className="to-dark-bg-primary flex flex-col justify-between gap-4 rounded-[8px] bg-linear-to-b from-[#738cce] px-4 py-6 text-white">
      <div>
        <ServiceBannersHome direction="left" />
        <ServiceBannersHome direction="right" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-white">
          5 Years of <i>Cross Industry</i> Experience
        </h2>
        <p className="text-custom-white/40 text-sm duration-500 hover:text-white">
          We&apos;ve built performance-driven websites & cross platform
          applications for startups, agencies, e-commerce, edtech, and more —
          all tailored for results.
        </p>
        <p className="text-custom-white/50 text-base italic">
          “From idea to launch, we know what works.”
        </p>
      </div>
    </div>
  );
}
function OurPerformance() {
  return (
    <div className="border-dark-bg-primary/30 flex h-full flex-col gap-5 rounded-[8px] border-[1px] px-4 py-6 md:gap-10">
      <h2 className="">
        Most Website Just Look Good -{" "}
        <span className="text-accent-hover italic">Ours Perform!</span>
      </h2>
      <div className="">
        <div className="flex items-center gap-4">
          <div className="border-dark-bg-primary/40 h-full w-[66%] rounded-full border-[1px] inset-shadow-2xs">
            <div className="bg-p-color h-9 w-[40%] rounded-l-full" />
          </div>
          <h2 className="text-lg">1-2%</h2>
        </div>
        <div className="">
          <h2 className="text-sm sm:text-lg">Average Sites Convert Poorly</h2>
          <p>Slow, Confusing, Unoptimized</p>
        </div>
      </div>
      <div className="">
        <div className="flex items-center gap-6">
          <div className="border-dark-bg-primary/40 h-full w-[66%] rounded-full border-[1px] inset-shadow-2xs">
            <div className="to-accent-hover h-9 w-full rounded-full bg-linear-to-r from-black via-blue-900 via-40%" />
          </div>
          <h2 className="text-lg">10-35%</h2>
        </div>
        <div className="">
          <h2 className="text-sm sm:text-lg">
            FourBtech Websites Convert Better
          </h2>
          <p>Thanks To UX Testing, Speed, SEQ And CTA Placement</p>
        </div>
      </div>
      <p className="text-base italic md:text-lg">
        &ldquo;Your Traffic Deserves Better Returns.&ldquo;
      </p>
    </div>
  );
}
