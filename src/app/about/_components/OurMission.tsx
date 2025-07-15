import Image from "next/image";
import React from "react";
import Collaboration from "../../../../public/about/colaboration.png";


const OurMission = () => {
  return (
    <section className="main-container grid grid-cols-1 gap-12 object-center !py-10 lg:grid-cols-2">
      <div className="order-2 h-full w-full lg:order-2">
        <Image
          src={Collaboration}
          width={300}
          height={300}
          className="h-full w-full border-0 object-cover"
          alt="Our Mission"
        />
      </div>
      <div className="order-1 flex flex-col items-start justify-center gap-4">
        <p>Our Mission</p>
        <h2 className="">We believe clarity drives innovation</h2>
        <p className="text-[clamp(.8rem, 2vw, 1rem)]">
          We are dedicated to transforming business challenges into elegant
          digital solutions that drive growth and engagement. We believe in the
          power of minimalist design, strategic thinking, and impactful
          execution to create meaningful digital experiences.
        </p>
      </div>
    </section>
  );
};

export default OurMission;
