import ArrowButton from "@/components/global/ArrowButton";
import IndustrySolution from "@/components/pages/web/industry";
import WhyUs from "@/components/pages/web/WhyUs";
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
      {/* Comprehensove custom full-stack service */}
      <section className="main-container flex-center flex-center mb-32 flex-col text-center *:max-w-[95%]">
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
      {/* Professional web development */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-4">
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
            src="/webDev/pwds.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      {/* Front-End Development */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src="/webDev/front_end.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-4">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Front-End Development Services
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            Your website&apos;s frontend is the first and only point of contact
            with your potential customers. That&apos;s why a compelling design
            is essential to engage visitors, keep them interested, and drive
            conversions.
          </p>
          <div className="**:text-[clamp(.7rem, 2vw, .9rem)] grid grid-cols-2 gap-4 pt-4 text-[.8rem] sm:text-[.9rem]">
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/html.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">HTML Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/react.png"
                width={20}
                height={20}
                alt="react"
              />
              <span className="text-gray-700">React Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/css.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">CSS Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/bootstrap.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">Bootstrap Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/js.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">JavaScript Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/wardpress.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">WordPress Development</span>
            </div>
          </div>
        </div>
      </section>
      {/* Looking to create - Let's talk */}
      <section className="main-container flex-center mb-32 flex-col pb-32 text-center *:max-w-[95%]">
        <h2 className="mb-5">
          Looking to create user-focused websites that showcase your products
          effectively? Get in touch with us for responsive front-end development
          solutions.
        </h2>
        <ArrowButton variant="fill" size={20} left className="!py-5">
          <Link href="/#contact">Let&apos;s Talk</Link>
        </ArrowButton>
      </section>
      {/* Backend Development servie */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Backend Development Services
          </h3>
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
              <Image
                src="/Icons/Web/php.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">PHP Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/torch.png"
                width={20}
                height={20}
                alt="react"
              />
              <span className="text-gray-700">CodeIgniter Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/python.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">python Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/redis.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">CakePHP Development</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/laravel.png"
                width={20}
                height={20}
                alt="html"
              />
              <span className="text-gray-700">Laravel Development</span>
            </div>
          </div>
        </div>
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src="/webDev/backend.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      {/* Web Consulting Service */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src="/webDev/consulting.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Web Consulting Service Services
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
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
                src="/Icons/Web/cloud.png"
                width={30}
                height={30}
                alt="html"
                className="bg-dark-bg-primary/10 aspect-square rounded-full p-1"
              />
              <span className="text-gray-700">Cloud Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/globe.png"
                width={30}
                height={30}
                alt="html"
                className="bg-dark-bg-primary/10 aspect-square rounded-full p-1"
              />
              <span className="text-gray-700">Web Consulting</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/Web/techonology.png"
                width={30}
                height={30}
                alt="html"
                className="bg-dark-bg-primary/10 aspect-square rounded-full p-1"
              />
              <span className="text-gray-700">Techonology Consultants</span>
            </div>
          </div>
        </div>
      </section>
      {/* Hire Dedicated Developers */}
      <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-2 flex flex-col items-start justify-center gap-6">
          <h3 className="text-h2-color mb-3 text-4xl font-semibold">
            Hire Dedicated Web Developers
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
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
            src="/webDev/pWebDev.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="development"
          />
        </div>
      </section>
      {/* Get In Touch */}
      <section className="main-container flex-center mb-32 flex-col pb-32 text-center *:max-w-[95%]">
        <h2 className="mb-5">
          Our expert team can transform your vision into a cutting-edge web
          application
        </h2>
        <ArrowButton variant="fill" size={20} left className="!py-5">
          <Link href="/#contact">Get In touch</Link>
        </ArrowButton>
      </section>
      {/* Industry Support */}
      <IndustrySolution />
      {/* Partnering */}
      <section className="main-container mb-32 flex flex-col items-center pb-32 text-center">
        <h2 className="mb-5">
          Looking for a partner who truly understands your business? Get in
          touch with us —we&apos;re dedicated to providing top-tier custom web
          development services.
        </h2>
        <ArrowButton variant="fill" size={20} left>
          <Link href="/#contact">Get In touch</Link>
        </ArrowButton>
      </section>
      {/* Why us */}
      <WhyUs />
    </main>
  );
};

export default page;
