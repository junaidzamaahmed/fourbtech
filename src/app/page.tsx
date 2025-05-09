import ArrowButton from "@/components/global/ArrowButton";
import CaseStudies from "@/components/pages/main/CaseStudies";
import CompanyProfile from "@/components/pages/main/Company Profile";
import ContactUS from "@/components/pages/main/ContactUS";
import CustomerFeedBack from "@/components/pages/main/CustomerFeedBack";
import Employess from "@/components/pages/main/Employess";
import Insides from "@/components/pages/main/Insides";
import Marquee from "@/components/pages/main/Marquee";
import FaqSection from "@/components/pages/main/Questions";
import Services from "@/components/pages/main/Services";
import Link from "next/link";

export default function Home() {
  return (
    <main className="-mt-24">
      {/* <section className="flex-center -mt-20 h-screen flex-col">
        <div className="absolute top-0 left-0 -z-10 h-screen w-full opacity-45">
          <video
            src="/herobg.mp4"
            autoPlay
            playsInline
            controls={false}
            preload="auto"
            loop
            muted
            className="h-full w-full object-cover outline-none"
          />
        </div>
        <div className="main-container flex-center flex-col gap-10">
          <h1 className="text-center leading-snug">
            We Design, Build & Grow Digital <br />
            Brands That Deliver Results
          </h1>
          <h3 className="text-center">
            Empowering Your Business With Cutting-Edge Technology Solutions.
            Innovative, Tailored Tech Services Designed To Drive Growth And
            Efficiency.
          </h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <ArrowButton
              variant="fill"
              className="!py-4 md:!py-4 lg:!py-7"
              left={true}
              size={30}
            >
              <Link href="/">See our products</Link>
            </ArrowButton>
            <ArrowButton
              variant="blueOutline"
              left={true}
              className="!py-4 md:!py-4 lg:!py-7"
              size={30}
            >
              <Link href="/" className="">
                talk to us
              </Link>
            </ArrowButton>
          </div>
          <Marquee />
        </div>
      </section> */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Background Video */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <video
            src="/herobg.mp4"
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
              <Link href="/" className="text-base sm:text-lg">
                See our products
              </Link>
            </ArrowButton>
            <ArrowButton
              variant="blueOutline"
              left
              className="!py-6 md:!py-8 lg:!py-8"
              size={30}
            >
              <Link href="/" className="text-base sm:text-lg">
                Talk to us
              </Link>
            </ArrowButton>
          </div>

          {/* Marquee */}
          <div className="mt-8 -mb-6 w-screen">
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
      <Insides />
    </main>
  );
}
