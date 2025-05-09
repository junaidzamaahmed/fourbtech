import ArrowButton from "@/components/global/ArrowButton";
import AboutFeedBack from "@/components/pages/about/AboutFeedBack";
// import AboutMarquee from "@/components/pages/about/AboutMarquee";
import CompanyProfile from "@/components/pages/main/Company Profile";
import Employees from "@/components/pages/main/Employess";
import Insides from "@/components/pages/main/Insides";
import { services } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="bg-custom-white">
      <section className="relative mb-14">
        <div className="relative flex h-[300px] w-full items-center justify-center bg-gray-900">
          <Image
            src="/coding.png"
            alt="Code background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="relative z-10 text-center">
            <h1 className="mb-2 font-semibold text-white">About Us</h1>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>{">"}</span>
              <span>About</span>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do*/}
      <section className="main-container grid grid-cols-1 gap-12 object-center !py-10 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="">What We Do</p>
          <h1>
            Transforming Ideas Into Reality With Engaging Solutions by
            FourBTech.
          </h1>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            At our IT Solutions & Services Agency agency, we specialize in
            creating visually stunning and highly functional websites or mobile
            apps that help businesses stand out in the digital world. Our team
            of talented designers and developers are passionate about crafting
          </p>
        </div>
        <div className="flex h-full w-full flex-col items-start justify-center gap-6">
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] mb-6 grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            {services.map((service, index) => {
              return (
                <div className="flex items-center gap-2" key={index}>
                  <div className="bg-dark-bg-primary/10 flex-center relative h-8 w-8 rounded-full p-1">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={30}
                      height={30}
                      className="aspect-square object-contain p-[.6px]"
                    />
                  </div>
                  <span className="text-gray-700">Website Development</span>
                </div>
              );
            })}
          </div>
          <ArrowButton variant="fill" className="!py-5" left size={24}>
            <Link href={"/contactus"}>See Our Products</Link>
          </ArrowButton>
        </div>
      </section>
      <CompanyProfile isHome={false} />
      {/* Our Mission*/}
      <section className="main-container grid grid-cols-1 gap-12 object-center !py-10 lg:grid-cols-2">
        <div className="order-2 h-full w-full lg:order-2">
          <Image
            src="/about/colaboration.png"
            width={300}
            height={300}
            className="h-full w-full border-0 object-cover"
            alt="development"
          />
        </div>
        <div className="order-1 flex flex-col items-start justify-center gap-4">
          <p>Our Mission</p>
          <h1 className="">We believe clarity drives innovation</h1>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            We are dedicated to transforming business challenges into elegant
            digital solutions that drive growth and engagement. We believe in
            the power of minimalist design, strategic thinking, and impactful
            execution to create meaningful digital experiences.
          </p>
        </div>
      </section>
      {/* Why Choose Us  */}
      <section className="main-container grid grid-cols-1 gap-12 object-center lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <p>Why Choose Us</p>
          <h1 className="text-h2-color mb-3 text-4xl font-semibold">
            Your Success Is Our Mission
          </h1>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            We blend creativity, technology, and data to deliver measurable
            digital growth. Our integrated team handles everything from strategy
            and design through development, launch, and ongoing optimization—so
            you get results, not just deliverables.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <Image src="/about/team.png" width={30} height={30} alt="html" />
              <span className="text-gray-700">ALL-In-One Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/about/results.png"
                width={30}
                height={30}
                alt="react"
              />
              <span className="text-gray-700">Proven Results</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/about/collaborationIcon.png"
                width={30}
                height={30}
                alt="html"
              />
              <span className="text-gray-700">Transparent Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/about/tools.png" width={30} height={30} alt="html" />
              <span className="text-gray-700">Cutting-Edge Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/about/data.png" width={30} height={30} alt="html" />
              <span className="text-gray-700">Data-First Strategies</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/about/story.png" width={30} height={30} alt="html" />
              <span className="text-gray-700">Compelling Storytelling</span>
            </div>
          </div>
        </div>
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src="/about/whyChooseUs.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>

      <Employees isHome={false} />
      <AboutFeedBack />
      {/* Why us */}
      <Insides />
      <div className="mb-24" />
    </main>
  );
};

export default page;
