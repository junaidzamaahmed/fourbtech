import CompanyProfile from "@/components/main/Company Profile";
import Employees from "@/components/main/Employess";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import aboutUs from "../../../public/about/aboutUs.png";
import WhatWeDo from "./_components/WhatWeDo";
import OurMission from "./_components/OurMission";
import Why_choose_Us from "./_components/WHyChooseUs";
import AboutFeedBack from "./_components/AboutFeedBack";

export const metadata: Metadata = {
  title: "About us",
}

const page = () => {
  return (
    <div className="bg-custom-white">
      <section className="relative mb-14">
        <div className="relative flex h-[300px] w-full items-center justify-center bg-gray-900 sm:h-[360px]">
          <Image
            src={aboutUs}
            alt="Code background"
            fill
            className="h-full w-full object-cover opacity-50"
            priority
          />
          <div className="relative z-10 text-center">
            <h1 className="mb-2 font-semibold text-white">About Us</h1>
            <div className="flex items-center justify-center gap-2 text-gray-300">
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span>{">"}</span>
              <span>About</span>
            </div>
          </div>
        </div>
      </section>
      <WhatWeDo/>
      <CompanyProfile isHome={false} />
      <OurMission/>
      <Why_choose_Us/>
      <Employees isHome={false} />
      <AboutFeedBack />
      <div className="mb-16" />
    </div>
  );
};

export default page;
