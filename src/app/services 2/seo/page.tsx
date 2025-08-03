import { Metadata } from "next";
import React from "react";

import seoImage from "../../../../public/seo/seo.png";
import Image from "next/image";
import Link from "next/link";
import HigherRank from "./_components/HigherRank";
import WhySeoMatters from "./_components/WhySeoMatters";
import SeoServiceFromUS from "./_components/SeoServiceFromUS";
import ProcessStart from "./_components/ProcessStart";
import BookAnAudit from "./_components/contactUs";
import PoweredBy from "./_components/PoweredBy";

// TODO: need to add the SEO content here
export const metadata: Metadata = {
  title: "SEO Services by FourBtech — Expert IT Solutions",
  description:
    "FourBtech delivers responsive, SEO-friendly website design and development services to grow your business online effectively.",
  openGraph: {
    title: "Professional SEO",
    description:
      "Build fast, modern, and user-friendly websites with FourBtech's expert team. Enhance your brand and online presence today",
    type: "website",
    url: "https://www.fourbtech.com/",
    images: [
      {
        url: "https://www.fourbtech.com/MetaImages/og-image.jpg",
        alt: "FourBtech - Mobile Apps, Web Design & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FourBtech Expert SEO Services",
    description:
      " Elevate your online presence with FourBtech's custom SEO, designed for speed, SEO, and great user experience.",
    images: [
      {
        url: "https://www.fourbtech.com/MetaImages/twitter-image.jpg",
        alt: "FourBtech - Complete Web, App & Marketing Solutions",
      },
    ],
  },
};

export default function page() {
  return (
    <div className="bg-custom-white">
      <section className="relative ">
        <div className="relative flex h-[40vh] w-full items-center justify-center bg-gray-900 md:h-[45vh]">
          <Image
            src={seoImage}
            alt="Seo Service"
            fill
            className="object-cover opacity-50 blur-xs"
            priority
          />
          <div className="relative z-10 text-center">
            <h1 className="mb-2 text-4xl font-bold text-white">SEO</h1>
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
      <HigherRank />
      <WhySeoMatters />
      <SeoServiceFromUS />
      <ProcessStart />
      <PoweredBy />
      <BookAnAudit />
    </div>
  );
}
