import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";
import digital from "../../../../public/digital/digital.png";
import BoostRanking from "./_components/BoostRanking";
import GetInspired from "./_components/GetInspired";
import DigitalMarketingAgency from "./_components/DigitalMarketingAgency";
import SeoExplained from "./_components/SeoExplained";
import MarketingAgencyService from "./_components/MarketingAgency";
import FaqSeo from "./_components/Faq";

export const metadata: Metadata = {
  title: "Digital Marketing",
};

const page = () => {
  return (
    <div className="bg-custom-white">
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
      <DigitalMarketingAgency />
      <MarketingAgencyService />
      <GetInspired />
      <SeoExplained />
      <BoostRanking />
      <FaqSeo />
    </div>
  );
};

export default page;
