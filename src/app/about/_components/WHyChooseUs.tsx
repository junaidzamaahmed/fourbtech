import Image from "next/image";
import React from "react";

// import team from "../../../public/about/team.png";
import team from "../../../../public/about/team.png";
import results from "../../../../public/about/results.png";
import collaborationIcon from "../../../../public/about/colaboration-Icon.png";
import tools from "../../../../public/about/tools.png";
import data from "../../../../public/about/data.png";
import story from "../../../../public/about/story.png";
import signing from "../../../../public/whoWeAre/signing.jpg"


const Why_choose_Us = () => {
  return (
    <section className="main-container grid grid-cols-1 gap-12 object-center lg:grid-cols-2">
      <div className="order-2 flex flex-col items-start justify-center gap-6">
        <p>Why Choose Us</p>
        <h2 className="text-h2-color mb-3 text-4xl font-semibold">
          Your Success Is Our Mission
        </h2>
        <p className="text-[clamp(.8rem, 2vw, 1rem)]">
          We blend creativity, technology, and data to deliver measurable
          digital growth. Our integrated team handles everything from strategy
          and design through development, launch, and ongoing optimization—so
          you get results, not just deliverables.
        </p>
        <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
          <div className="flex items-center gap-2">
            <Image src={team} width={30} height={30} alt="All-in-one Team" />
            <span className="text-gray-700">All-in-one Team</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src={results} width={30} height={30} alt="Proven Results" />
            <span className="text-gray-700">Proven Results</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={collaborationIcon}
              width={30}
              height={30}
              alt="Transparent Collaboration"
            />
            <span className="text-gray-700">Transparent Collaboration</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={tools}
              width={30}
              height={30}
              alt="Cutting-Edge Tools"
            />
            <span className="text-gray-700">Cutting-Edge Tools</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={data}
              width={30}
              height={30}
              alt="Data-First Strategies"
            />
            <span className="text-gray-700">Data-First Strategies</span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={story}
              width={30}
              height={30}
              alt="Compelling Storytelling"
            />
            <span className="text-gray-700">Compelling Storytelling</span>
          </div>
        </div>
      </div>
      <div className="order-1 h-full w-full lg:order-2">
        <Image
          src={signing}
          width={300}
          height={300}
          className="h-full w-full rounded-xl object-cover"
          alt="whyChooseUs"
        />
      </div>
    </section>
  );
};

export default Why_choose_Us;
