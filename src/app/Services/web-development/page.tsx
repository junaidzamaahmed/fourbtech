import ArrowButton from "@/components/global/ArrowButton";
import IndustrySolution from "@/components/pages/web/industry";
import WhyUs from "@/components/pages/web/WhyUs";
import { CheckCircle } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CodingPng from "../../../../public/coding.png";
import webDev from "../../../../public/webDev/pwds.png";
import frontend from "../../../../public/webDev/front_end.png";
import htmlIcon from "../../../../public/Icons/Web/html.png";
import react from "../../../../public/Icons/Web/react.png";
import CSSDev from "../../../../public/Icons/Web/css.png";
import bootstrap from "../../../../public/Icons/Web/bootstrap.png";
import Js from "../../../../public/Icons/Web/js.png";
import Wordpress from "../../../../public/Icons/Web/wardpress.png";
import PHP from "../../../../public/Icons/Web/php.png";
import torch from "../../../../public/Icons/Web/torch.png";
import redis from "../../../../public/Icons/Web/redis.png";
import laravel from "../../../../public/Icons/Web/laravel.png";
import nodejs from "../../../../public/Icons/Web/nodejs.png";
import backend from "../../../../public/webDev/backend.png";
import consulting from "../../../../public/webDev/consulting.png";
import Cloud from "../../../../public/Icons/Web/cloud.png";
import globe from "../../../../public/Icons/Web/globe.png";
import technology from "../../../../public/Icons/Web/technology.png";
import pWebDev from "../../../../public/webDev/pWebDev.png";
import Python from "../../../../public/Icons/Web/python.png";

export const metadata: Metadata = {
  title: "FourBtech | Services",
  description: "Tech Service Provider",
};

const page = () => {
  return (
    <main className="bg-custom-white">
      {/* Video and header  */}
      <section className="relative mb-14">
        <div className="relative flex h-[300px] sm:h-[400px] w-full items-center justify-center bg-gray-900">
          <Image
            src={CodingPng}
            alt="Web Development"
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
      {/* Comprehensove custom full-stack service */}
      <section className="main-container flex-center flex-center mb-32 flex-col text-center *:max-w-[95%]">
        <h1 className="mb-5">
          Comprehensive Custom Full-Stack Web Development Services
        </h1>
        <p className="leading-6">
          Need A Tailored Web Solution For Your Project? Fourbtech Provides
          Full-Stack Development Services Across The I-JK, Catering TO
          Businesses In Every Industry. we Build Custom web- And Cloud-Based
          Solutions From The Ground up, Designed To Meet Your Specific Needs.
        </p>
      </section>
      {/* Professional web development */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-4">
          <h1 className="text-h1-color">
            Professional Web Development Services
          </h1>
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
            className="h-full w-full object-cover"
            alt="Professional Web Development Services"
          />
        </div>
      </section>
      {/* Front-End Development */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={frontend}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-4">
          <h1 className="text-h1-color">Front-End Development Services</h1>
          <p className="">
            Your website&apos;s frontend is the first and only point of contact
            with your potential customers. That&apos;s why a compelling design
            is essential to engage visitors, keep them interested, and drive
            conversions.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <Image
                src={htmlIcon}
                width={20}
                height={20}
                alt="html Development"
              />
              <span className="text-gray-700">HTML Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={react}
                width={20}
                height={20}
                alt="react Development"
              />
              <span className="text-gray-700">React Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={CSSDev}
                width={20}
                height={20}
                alt="CSS Development"
              />
              <span className="text-gray-700">CSS Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={bootstrap}
                width={20}
                height={20}
                alt="Bootstrap Development"
              />
              <span className="text-gray-700">Bootstrap Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={Js}
                width={20}
                height={20}
                alt="JavaScript Development"
              />
              <span className="text-gray-700">JavaScript Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={Wordpress}
                width={20}
                height={20}
                alt="WordPress Development"
              />
              <span className="text-gray-700">WordPress Development</span>
            </div>
          </div>
        </div>
      </section>
      {/* Looking to create - Let's talk */}
      <section className="main-container flex-center mb-32 flex-col pb-32 text-center *:max-w-[95%]">
        <h1 className="mb-5">
          Looking to create user-focused websites that showcase your products
          effectively? Get in touch with us for responsive front-end development
          solutions.
        </h1>
        <Link href={{ pathname: "/", hash: "contact" }}>
          <ArrowButton variant="fill" size={20} left className="!py-5">
            Let&apos;s Talk
          </ArrowButton>
        </Link>
      </section>
      {/* Backend Development servie */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h1 className="text-h1-color">Backend Development Services</h1>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            A well-optimised backend lays the foundation for sustainable and
            future- ready web applications. We design your web app&apos;s
            architecture With scalability and flexibility in mind from the
            start, ensuring it can adapt to shifting business demands. Our
            tailor-made backend solutions ore built to evolve with changing user
            expectations and technological advancements. you&apos;ll be able to
            implement updates and roll out enhancements efficiently and
            cost-effectively.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <Image src={PHP} width={20} height={20} alt="PHP Development" />
              <span className="text-gray-700">PHP Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={torch}
                width={20}
                height={20}
                alt="CodeIgniter Development"
              />
              <span className="text-gray-700">CodeIgniter Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={Python}
                width={20}
                height={20}
                alt="Python Development"
              />
              <span className="text-gray-700">Python Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={redis}
                width={20}
                height={20}
                alt="CakePHP Development"
              />
              <span className="text-gray-700">CakePHP Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={laravel}
                width={20}
                height={20}
                alt="Laravel Development"
              />
              <span className="text-gray-700">Laravel Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={nodejs}
                width={40}
                height={40}
                alt="Node Js Development"
              />
              <span className="text-gray-700">NodeJs Development</span>
            </div>
          </div>
        </div>
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={backend}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Backend Development Services"
          />
        </div>
      </section>
      {/* Web Consulting Service */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={consulting}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Web Consulting Service Services"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h1 className="text-h2-color">Web Consulting Service Services</h1>
          <p className="">
            Receive expert web development advice from seasoned industry
            professionals —partner with us to craft an effective development
            roadmap and growth strategy tailored to your business. Our
            consulting services guide you through a smooth and successful
            transition to digital solutions, helping you establish a strong
            online presence.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <Image
                src={Cloud}
                width={30}
                height={30}
                alt="Cloud Consulting"
                className="bg-dark-bg-primary/10 aspect-square rounded-full object-contain p-1"
              />
              <span className="text-gray-700">Cloud Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={globe}
                width={30}
                height={30}
                alt="Web Consulting"
                className="bg-dark-bg-primary/10 aspect-square rounded-full object-contain p-1"
              />
              <span className="text-gray-700">Web Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={technology}
                width={30}
                height={30}
                alt="Techonology Consultants"
                className="bg-dark-bg-primary/10 aspect-square rounded-full object-contain p-1"
              />
              <span className="text-gray-700">Techonology Consultants</span>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Dedicated Developers */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h1 className="text-h2-color">Hire Dedicated Web Developers</h1>
          <p className="">
            We&apos;ve Crafted A Range Of Innovative Web Solutions For Startups,
            Established Businesses, And Entrepreneurs Alike. AS A Dedicated Web
            Development Company, Our Mission IS To Harness The Potential Of The
            Web To Create Solutions That Drive Business Growth. Explore The web
            Development services We Provide Below,
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire Web Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire Full Stack Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire Laravel Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire Python Developers</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-blue-500" />
              <span className="text-gray-700">Hire PHP Developers</span>
            </div>
          </div>
        </div>
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={pWebDev}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      {/* Get In Touch */}
      <section className="main-container flex-center mb-32 flex-col pb-32 text-center *:max-w-[95%]">
        <h1 className="mb-5">
          Our expert team can transform your vision into a cutting-edge web
          application
        </h1>
        <Link href={{ pathname: "/", hash: "contact" }}>
          <ArrowButton variant="fill" size={20} left className="!py-5">
            Get In touch
          </ArrowButton>
        </Link>
      </section>
      {/* Industry Support */}
      <IndustrySolution />
      {/* Partnering */}
      <section className="main-container my-24 flex flex-col items-center text-center">
        <h2 className="mb-5">
          Looking for a partner who truly understands your business? Get in
          touch with us —we&apos;re dedicated to providing top-tier custom web
          development services.
        </h2>
        <Link href={{ pathname: "/", hash: "contact" }}>
          <ArrowButton variant="fill" size={20} left>
            Get In touch
          </ArrowButton>
        </Link>
      </section>
      {/* Why us */}
      <WhyUs />
    </main>
  );
};

export default page;
