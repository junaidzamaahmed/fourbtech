import ArrowButton from "@/components/global/ArrowButton";
import TitleDescCard from "@/components/global/TitleDesc";
import FaqSeo from "@/components/pages/digital/Faq";
import MarketingAgencyService from "@/components/pages/digital/MarketingAgency";
import { BoostRanking, SEO_Details } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="bg-custom-white">
      {/* Video and header  */}
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
              Digital Marketing
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

      {/* Digital Marketing Agency For A Service Provider */}
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
        <div className="order-2 flex flex-col items-start justify-center gap-4 md:order-1">
          <h3>Premium SEO Services</h3>
          <h3 className="text-h1-color mb-3 text-4xl font-semibold">
            Digital marketing agency for a service provider
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            At our Digital Marketing, we deliver results-driven SEO strategies
            that boost your search rankings and drive targeted organic traffic
            to your website. Fourbtech comprehensive SEO campaigns include
            in-depth audits, keyword research, on-page and technical
            optimization, authority building, citations, link building, content
            creation, blogging, and much more to maximise
          </p>
          <div className="">
            <ArrowButton variant="blueOutline" right className="!px-6 !py-6">
              <Link href="/">Get In touch</Link>
            </ArrowButton>
          </div>
        </div>
      </section>
      {/* Full-stack digital marketing service agency */}
      <MarketingAgencyService />
      {/* Get Inspired. Get Informed. Get Started. */}
      <section className="main-container flex-center mb-32 flex-col pb-32 text-center *:max-w-[95%]">
        <h2  className="text-h2-color mb-3 text-4xl font-semibold">Get Inspired. Get Informed. Get Started.</h2>
        <p className="">
          Discover powerful ideas, transparent pricing, and a clear path forward
          to help you achieve real, measurable results.
        </p>
        <ArrowButton variant="fill" size={20} left className="!py-5">
          <Link href="/">get free seo consultation</Link>
        </ArrowButton>
      </section>
      {/* SEO Explainded */}
      <section className="main-container mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {SEO_Details.map((service, index) => (
          <TitleDescCard key={index} {...service} />
        ))}
      </section>
      {/* Boost Your Rankings and Drive Organic Traffic */}
      <section className="main-container">
        <h3 className="text-h1-color mb-3 text-center text-4xl font-semibold">
          Boost Your Rankings and Drive Organic Traffic
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {BoostRanking.map((text, index) => (
            <TitleDescCard key={index} {...text} />
          ))}
        </div>
      </section>
      {/* FAQ */}
      <FaqSeo />
    </main>
  );
};

export default page;
