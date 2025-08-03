import Benefites from "@/app/services/mobile-apps/_components/Benifites";
import OurExparties from "@/app/services/mobile-apps/_components/IndustryExparties";
import Minds_Apart from "@/app/services/mobile-apps/_components/MindsAprat";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import mobileDev from "../../../../public/mobile/mobileDev.png";

import OurMethodology from "./_components/OurMethodology";
import DevelopmentTools from "./_components/DevelopmentTools";
import Consistancy from "./_components/consistancy";

export const metadata: Metadata = {
  title: 'FourBtech | Expert Mobile App Development Services',
  description: ": FourBtech delivers custom mobile app development for iOS and Android, creating scalable, user-friendly apps that drive business growth and engagement.",
  openGraph: {
    title: 'FourBtech | Professional Mobile App Development',
    description: "Build powerful mobile apps with FourBtech. We specialize in creating innovative, high-performance applications for businesses of all sizes.",
    type: 'website',
    url: 'https://www.fourbtech.com/',
    images: [
      {
        url: 'https://www.fourbtech.com/MetaImages/og-image.jpg',
        alt: 'FourBtech - Mobile Apps, Web Design & Digital Marketing'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FourBtech | Custom Mobile App Development Experts',
    description: ' Partner with FourBtech for tailored mobile app solutions. We develop feature-rich, scalable apps designed to enhance your digital presence.',
    images: [
      {
        url: 'https://www.fourbtech.com/MetaImages/twitter-image.jpg',
        alt: 'FourBtech - Complete Web, App & Marketing Solutions'
      }
    ]
  }
}
const page = () => {
  return (
    <div className="bg-custom-white">
      {/* Video and header  */}
      <section className="relative !pb-10 lg:!pb-32">
        <div className="relative flex h-[300px] w-full items-center justify-center bg-gray-900 sm:h-[400px]">
          <Image
            src={mobileDev}
            alt="Code background"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="main-container relative z-10 text-center">
            <h1 className="mb-2 font-bold text-white">
              Mobile App Development
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
      {/* Universal mobile app development */}
      <section className="main-container flex-center flex-center!pb-10 lg:!pb-32 flex-col text-center *:max-w-[95%]">
        <h2 className="text-h1-color font-semibold">
          Universal Mobile App Development Solutions Unified Cross-Platform App
          Development Services
        </h2>
      </section>
      <Consistancy/>
      <DevelopmentTools/>
      <Benefites />
      <OurMethodology/>
      <OurExparties />
      <Minds_Apart />
    </div>
  );
};

export default page;
