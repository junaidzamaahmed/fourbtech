import ArrowButton from "@/components/global/ArrowButton";
import Benefites from "@/components/pages/app-dev/Benifites";
import OurExparties from "@/components/pages/app-dev/IndustryExparties";
import Minds_Apart from "@/components/pages/app-dev/MindsAprat";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="bg-custom-white">
      {/* Video and header  */}
      <section className="relative mb-14">
        <div className="relative flex h-[300px] w-full items-center justify-center bg-gray-900">
          <Image
            src="/mobile/mobileDev.png"
            alt="Code background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="main-container relative z-10 text-center">
            <h1 className="mb-2 font-bold text-white">
              Mobile App Development
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>{">"}</span>
              <span>Services</span>
            </div>
          </div>
        </div>
      </section>
      {/* Universal mobile app development */}
      <section className="main-container flex-center flex-center mb-32 flex-col text-center *:max-w-[95%]">
        <h1 className="text-h1-color mb-5 font-semibold">
          Universal Mobile App Development Solutions Unified Cross-Platform App
          Development Services
        </h1>
      </section>
      {/* Consistent Performance On All Devices */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-4">
          <h1 className="text-h1-color mb-3 font-semibold">
            Consistent Performance On All Devices
          </h1>
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
            src="/mobile/performance.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      {/* Development Tools */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src="/mobile/flutter.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-4 h-full">
          <h1 className="text-h1-color mb-3 font-semibold">
            Development Tools
          </h1>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            We Leverage Powerful And Flexible Development Tools To Create
            Cross-platform Apps That Deliver Smooth Performance Across Different
            Devices And Pperating Systems, Enhancing Efficiency And Cutting Down
            Costs.
          </p>
          <div className="flex w-full items-center gap-6 pt-4 text-[.8rem] sm:text-[.9rem] ">
            <div className="relative h-20 w-20 md:h-16 md:w-16">
              <Image
                src="/Icons/app/react-native.png"
                fill
                alt="React Native"
                priority
              />
            </div>
            <div className="relative h-20 w-20 md:h-16 md:w-16">
              <Image src="/Icons/app/flutter.png" fill alt="Flutter" />
            </div>
            <div className="relative h-28 w-28 md:h-28 md:w-28">
              <Image src="/Icons/app/java.png" fill alt="Java" priority />
            </div>
          </div>
          <div className="">
            <ArrowButton variant="outline" right className="!px-7 !py-5">
              <Link href="/">Get In touch</Link>
            </ArrowButton>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <Benefites />
      {/* Our Methodology */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="text-h1-color mb-3 font-semibold">
            Our Methodology
          </h1>
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
            src="/Icons/app/methodology.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      <OurExparties />
      <Minds_Apart />
    </main>
  );
};

export default page;
