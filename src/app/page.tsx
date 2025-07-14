import ArrowButton from "@/components/global/ArrowButton";
import CaseStudies from "@/components/main/CaseStudies";
import CompanyProfile from "@/components/main/Company Profile";
import ContactUS from "@/components/main/ContactUS";
import CustomerFeedBack from "@/components/main/CustomerFeedBack";
import Employess from "@/components/main/Employess";
import { HeroMarqee } from "@/components/main/FadingMarquee";
// import Insides from "@/components/pages/main/Insides";
import FaqSection from "@/components/main/Questions";
import Services from "@/components/main/Services";
import Link from "next/link";


export default function Home() {
  return (
    <main className="mt-10 md:-mt-10">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Background Video */}
        <div className="absolute inset-0 -z-10 opacity-80">
          <video
            src="/HeroBG.webm"
            autoPlay
            playsInline
            controls={false}
            preload="auto"
            loop
            muted
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="flex w-full max-w-5xl flex-col items-center gap-8 text-center">
          <h1 className="text-h1-color text-3xl leading-snug sm:text-4xl md:text-5xl">
            We Design, Build & Grow Digital <br />
            Brands That Deliver Results
          </h1>
          <h3 className="text-h3-color max-w-3xl text-base sm:text-lg md:text-xl">
            Empowering Your Business With Cutting-Edge Technology Solutions.
            Innovative, Tailored Tech Services Designed To Drive Growth And
            Efficiency.
          </h3>

          {/* Buttons */}
          <div className="grid gap-4 sm:grid-cols-2 md:w-[60%]">
            <Link href={{ pathname: "/", hash: "services" }} className="w-full">
              <ArrowButton
                variant="fill"
                className="!w-full !py-6 !text-base sm:!text-lg md:!py-8 lg:!py-8"
                left
                size={30}
              >
                See our services
              </ArrowButton>
            </Link>
            <Link href={{ pathname: "/", hash: "contact" }} className="!w-full">
              <ArrowButton
                variant="blueOutline"
                className="!w-full !py-6 !text-base sm:!text-lg md:!py-8 lg:!py-8"
                left
                size={30}
              >
                Talk to us
              </ArrowButton>
            </Link>
          </div>

          {/* Marquee */}
          <div className="mt-8 -mb-6">
            <HeroMarqee />
          </div>
        </div>
      </section>
      <CompanyProfile />
      <Services />
      <CaseStudies />
      <Employess />
      <FaqSection />
      <ContactUS />
      <CustomerFeedBack />
      {/* <Insides /> */}
    </main>
  );
}
