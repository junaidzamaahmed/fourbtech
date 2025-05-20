import ArrowButton from "@/components/global/ArrowButton";
import CaseStudies from "@/components/pages/main/CaseStudies";
import CompanyProfile from "@/components/pages/main/Company Profile";
import ContactUS from "@/components/pages/main/ContactUS";
import CustomerFeedBack from "@/components/pages/main/CustomerFeedBack";
import Employess from "@/components/pages/main/Employess";
// import Insides from "@/components/pages/main/Insides";
import Marquee from "@/components/pages/main/Marquee";
import FaqSection from "@/components/pages/main/Questions";
import Services from "@/components/pages/main/Services";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-10 md:-mt-10">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Background Video */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <video
            src="/herobg.webm"
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
            <ArrowButton
              variant="fill"
              className="!py-6 md:!py-8 lg:!py-8"
              left
              size={30}
            >
              <Link
                href={{ pathname: "/", hash: "services" }}
                className="text-base sm:text-lg"
              >
                See our services
              </Link>
            </ArrowButton>
            <ArrowButton
              variant="blueOutline"
              left
              className="!py-6 md:!py-8 lg:!py-8"
              size={30}
            >
              <Link
                href={{ pathname: "/", hash: "contact" }}
                className="text-base sm:text-lg"
              >
                Talk to us
              </Link>
            </ArrowButton>
          </div>

          {/* Marquee */}
          <div className="mt-8 -mb-6 w-[98vw]">
            <Marquee />
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
