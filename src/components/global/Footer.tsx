import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiPaperplane } from "react-icons/ci";
import { Input } from "../ui/input";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-bg-primary py-20">
      <div className="main-container mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <Link href="/" className="relative flex h-14 items-start">
            <Image
              src="/Secondary logo.svg"
              alt=""
              fill
              priority
              className="object-contain"
            />
          </Link>
          <h3>Subscribe to Stay in Touch</h3>
          <div className="relative max-w-full sm:max-w-[75%]">
            <Input
              placeholder="Email Address"
              className="bg-custom-white text-p-color rounded-full px-4 py-1 text-[.7rem] focus-visible:!ring-0 md:text-[1rem]"
            />
            <CiPaperplane className="hover:text-accent-hover absolute top-[25%] right-4 size-4 -rotate-45 cursor-pointer transition-all duration-300 hover:rotate-0" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-2">
          <h3 className="text-custom-white">Location</h3>
          <p className="text-custom-white/60">
            United Kingdom Address: 252-262 Romford Road, E7 9HZ, London, UK
          </p>
          <p className="text-custom-white/60">
            Bangladesh Address: ka-5, Bashundhara Main Gate, Dhaka, Bangladesh
          </p>
        </div>
        <div className="flex-between max-h-1/2 flex-col !items-start">
          <h3 className="text-custom-white">Contact Us</h3>
          <p className="text-custom-white/60">info@fourbtech.com</p>
          <p className="text-custom-white/60">UK: +447424438741</p>
          <p className="text-custom-white/60">BD: +8801674982831</p>
        </div>
        <div className="">
          <h3 className="text-custom-white mb-6">Follow US</h3>
          <div className="*:text-custom-white flex gap-4 *:rounded-full *:border-2 *:p-2 md:*:p-3">
            <Link href="/">
              <FaLinkedinIn className="size-3 md:size-6" />
            </Link>
            <Link href="/">
              <FaFacebookF className="size-3 md:size-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-p-color/40 h-[2px] w-full" />
      <div className="main-container flex-center h-full">
        <p>&copy; 2025 FourBtech. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
