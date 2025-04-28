import ArrowButton from "@/components/global/ArrowButton";
import CaseStudies from "@/components/pages/main/CaseStudies";
import CompanyProfile from "@/components/pages/main/Company Profile";
import ContactUS from "@/components/pages/main/ContactUS";
import CustomerFeedBack from "@/components/pages/main/CustomerFeedBack";
import Employess from "@/components/pages/main/Employess";
import Insides from "@/components/pages/main/Insides";
import FaqSection from "@/components/pages/main/Questions";
import Services from "@/components/pages/main/Services";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <section className="flex-center -mt-20 h-screen flex-col">
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
