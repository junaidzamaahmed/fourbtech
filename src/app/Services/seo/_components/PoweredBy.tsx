import React from "react";

import img1 from "../../../../../public/seo/Powredby/yoast.png";
import img2 from "../../../../../public/seo/Powredby/ahrefs.png";
import img3 from "../../../../../public/seo/Powredby/moz.png";
import img4 from "../../../../../public/seo/Powredby/semrush.png";
import img5 from "../../../../../public/seo/Powredby/supfer.png";
// import { FadingPhotoSlider } from "@/components/FadingPhoto";
// id: number;
// src: StaticImageData;
// alt: string;

const Tools = [
  { id: 1, src: img1, alt: "image1" },
  { id: 2, src: img2, alt: "image1" },
  { id: 3, src: img3, alt: "image1" },
  { id: 4, src: img4, alt: "image1" },
  { id: 5, src: img5, alt: "image1" },
];

export default function PoweredBy() {
  return (
    <section className="!py-10 lg:!py-32">
      <div className="flex w-full flex-col items-center">
        <h2 className="">Powered By Industry-Leading Tools</h2>
        <p className="">
          We use the best SEO tools and technologies to deliver exceptional
          results.
        </p>
      </div>
      <div className="w-full">
        {/* <FadingPhotoSlider images={Tools} height="20" width="40" /> */}
      </div>
    </section>
  );
}