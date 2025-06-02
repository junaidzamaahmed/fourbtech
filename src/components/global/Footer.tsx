"use client";
import Image from "next/image";
import Link from "next/link";
import { CiPaperplane } from "react-icons/ci";
import { Input } from "../ui/input";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import SecondaryLogo from "../../../public/Secondary logo.svg";

const Footer = () => {
  const [sendMail, setSendMail] = useState("");
  const handleSubmission = async () => {
    // alert("this feature is not active")
  };
  return (
    <footer className="bg-dark-bg-primary text-custom-white py-20">
      <div className="main-container grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + Newsletter */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="relative h-10 w-40">
            <Image
              src={SecondaryLogo}
              alt="FourBtech Logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 640px) 100vw, 10rem"
            />
          </Link>
          <h3 className="text-lg font-semibold">Stay in Touch</h3>
          <div className="relative max-w-full">
            <Input
              placeholder="Email Address"
              className="bg-custom-white text-dark-bg-primary rounded-full px-4 py-2 pr-10 text-sm focus-visible:!ring-0"
              value={sendMail}
              onChange={(e) => setSendMail(e.target.value)}
            />
            <CiPaperplane
              className="text-dark-bg-primary hover:text-accent-hover absolute top-1/2 right-4 z-50 size-6 -translate-y-1/2 cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-12"
              onClick={handleSubmission}
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Locations</h3>
          <p className="text-custom-white/70 text-sm leading-relaxed">
            <strong>UK Office:</strong> 252-262 Romford Road, E7 9HZ, London, UK
          </p>
          <p className="text-custom-white/70 text-sm leading-relaxed">
            <strong>BD Office:</strong> KA-5, Bashundhara Main Gate, Dhaka,
            Bangladesh
          </p>
          <p className="text-custom-white/70 text-sm leading-relaxed">
            <strong>Italy Office:</strong> Via-VIa Di S.Martino Ai Monti,
            900184, Roma, Italy
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <Link
            href={"mailto:info@fourbtech.com"}
            className="text-custom-white/70 text-sm lowercase"
          >
            info@fourbtech.com
          </Link>
          <Link
            href={"tel:+447424438741"}
            className="text-custom-white/70 text-sm"
          >
            UK: +44 7424 438741
          </Link>
          <Link
            href={"tel:+393319511365"}
            className="text-custom-white/70 text-sm"
          >
            Italy: +3933 1951 1365
          </Link>
          <Link
            href={"tel:+8801674982831"}
            className="text-custom-white/70 text-sm"
          >
            BD: +880 1674 982831
          </Link>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/fourbtech/"
              className="border-custom-white hover:bg-custom-white/20 rounded-full border p-2 transition"
            >
              <FaLinkedinIn className="text-xl" />
            </Link>
            <Link
              target="_blank"
              href="https://www.facebook.com/fourbtech.ltd"
              className="border-custom-white hover:bg-custom-white/20 rounded-full border p-2 transition"
            >
              <FaFacebookF className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="bg-custom-white/20 my-10 h-px w-full" />

      {/* Bottom Bar */}
      <div className="main-container text-custom-white/60 text-center text-sm">
        &copy; {new Date().getFullYear()} FourBtech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
