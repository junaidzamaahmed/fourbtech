import ArrowButton from "@/components/global/ArrowButton";
import IndustrySolution from "@/components/pages/web/industry";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="bg-custom-white">
      <section className="relative mb-14">
        <div className="relative flex h-[200px] w-full items-center justify-center bg-gray-900">
          <Image
            src="/coding.png"
            alt="Code background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="relative z-10 text-center">
            <h2 className="mb-2 text-4xl font-bold text-white">
              Web Development
            </h2>
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
      <section className="main-container mb-32 text-center">
        <h2 className="mb-5">
          Comprehensive Custom Full-Stack Web Development Services
        </h2>
        <p className="leading-6">
          Need A Tailored Web Solution For Your Project? Fourbtech Provides
          Full-Stack Development Services Across The I-JK, Catering TO
          Businesses In Every Industry. we Build Custom web- And Cloud-Based
          Solutions From The Ground up, Designed To Meet Your Specific Needs.
        </p>
      </section>
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-between">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Professional Web Development Services
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            We&apos;ve Crafted A Range Ot Innovative Web Solutions For Startups.
            Established Businessesr And Entrepreneurs Alike. As A Dedicated Web
            Development Company, Our Mission Is TO Harness The Potential Of The
            Web TO Create Solutions Thot Drive Business Growth. Explore The Web
            Development Services We Provide Below.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem]">
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
            src="/placeholders/palaceholder2.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src="/placeholders/palaceholder2.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-between">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Front-End Development Services
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            Your website&apos;s frontend is the first and only point of contact
            with your potential customers. That&apos;s why a compelling design
            is essential to engage visitors, keep them interested, and drive
            conversions.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem]">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">HTML Development</span>
            </div>
          </div>
        </div>
      </section>
      <section className="main-container mb-32 flex flex-col items-center pb-32 text-center">
        <h2 className="mb-5">
          Looking to create user-focused websites that showcase your products
          effectively? Get in touch with us for responsive front-end development
          solutions.
        </h2>
        <ArrowButton variant="fill" size={20} left>
          <Link href="/">Let&apos;s Talk</Link>
        </ArrowButton>
      </section>
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-between">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Professional Web Development Services
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            We&apos;ve Crafted A Range Ot Innovative Web Solutions For Startups.
            Established Businessesr And Entrepreneurs Alike. As A Dedicated Web
            Development Company, Our Mission Is TO Harness The Potential Of The
            Web TO Create Solutions Thot Drive Business Growth. Explore The Web
            Development Services We Provide Below.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem]">
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
            src="/placeholders/palaceholder2.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src="/placeholders/palaceholder2.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-between">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Front-End Development Services
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            Your website&apos;s frontend is the first and only point of contact
            with your potential customers. That&apos;s why a compelling design
            is essential to engage visitors, keep them interested, and drive
            conversions.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem]">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">HTML Development</span>
            </div>
          </div>
        </div>
      </section>
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-between">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Professional Web Development Services
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            We&apos;ve Crafted A Range Ot Innovative Web Solutions For Startups.
            Established Businessesr And Entrepreneurs Alike. As A Dedicated Web
            Development Company, Our Mission Is TO Harness The Potential Of The
            Web TO Create Solutions Thot Drive Business Growth. Explore The Web
            Development Services We Provide Below.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem]">
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
            src="/placeholders/palaceholder2.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      <section className="main-container mb-32 flex flex-col items-center pb-32 text-center">
        <h2 className="mb-5">
          Our expert team can transform your vision into a cutting-edge web
          application
        </h2>
        <ArrowButton variant="fill" size={20} left>
          <Link href="/">Get In touch</Link>
        </ArrowButton>
      </section>
      <IndustrySolution />
    </main>
  );
};

export default page;
