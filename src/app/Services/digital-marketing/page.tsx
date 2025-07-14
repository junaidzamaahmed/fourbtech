import ArrowButton from "@/components/global/ArrowButton";
import TitleDescCard from "@/components/global/TitleDesc";
import FaqSeo from "@/app/services/digital-marketing/_components/Faq";
import MarketingAgencyService from "@/app/services/digital-marketing/_components/MarketingAgency";
import { BoostRanking, SEO_Details } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import digital from "../../../../public/digital/digital.png";
import strategy from "../../../../public/digital/strategy.png";

export const metadata: Metadata = {
  title: "Digital Marketing",
};

const page = () => {
  return (
    <main className="bg-custom-white">
      {/* Video and header  */}
      <section className="relative mb-14">
        <div className="relative flex h-[300px] w-full items-center justify-center bg-gray-900 sm:h-[400px]">
          <Image
            src={digital}
            alt="Digital Marketing"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="relative z-10 text-center">
            <h1 className="text-custom-white mb-2 font-semibold">
              Digital Marketing
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

      {/* Digital Marketing Agency For A Service Provider */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={strategy}
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
            alt="Premium SEO Services"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-4 md:order-1">
          <h3>Premium SEO Services</h3>
          <h3 className="text-h1-color mb-3 text-4xl font-semibold">
            Digital marketing agency for a service provider
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            At Fourbtech Digital Marketing, we specialize in results-focused SEO
            strategies designed to improve your search engine rankings and
            attract high-quality organic traffic to your website. Our
            comprehensive SEO services include detailed site audits, strategic
            keyword research, on-page and technical optimization, authority
            development, citation management, link building, content creation,
            blogging, and more — all aimed at maximizing your online visibility
            and growth.
          </p>
          <div className="">
            <Link href={{ pathname: "/", hash: "contact" }}>
              <ArrowButton variant="blueOutline" right className="!px-6 !py-6">
                Get In touch
              </ArrowButton>
            </Link>
          </div>
        </div>
      </section>
      {/* Full-stack digital marketing service agency */}
      <MarketingAgencyService />
      {/* Get Inspired. Get Informed. Get Started. */}
      <section className="main-container flex-center mb-32 flex-col pb-32 text-center *:max-w-[95%]">
        <h2 className="text-h2-color mb-3 text-4xl font-semibold">
          Get Inspired. Get Informed. Get Started.
        </h2>
        <p className="">
          Discover powerful ideas, transparent pricing, and a clear path forward
          to help you achieve real, measurable results.
        </p>
        <Link href={{ pathname: "/", hash: "contact" }}>
          <ArrowButton variant="fill" size={20} left className="!py-5">
            get free seo consultation
          </ArrowButton>
        </Link>
      </section>
      {/* SEO Explainded */}
      <section className="main-container mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {SEO_Details.map((service, index) => (
          <TitleDescCard key={index} {...service} />
        ))}
      </section>
      {/* Boost Your Rankings and Drive Organic Traffic */}
      <section className="main-container">
        <h1 className="text-h1-color my-10 text-center font-semibold">
          Boost Your Rankings and Drive Organic Traffic
        </h1>
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
