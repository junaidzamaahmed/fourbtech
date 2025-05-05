import Image from "next/image";
import Link from "next/link";
import { CiPaperplane } from "react-icons/ci";
import { Input } from "../ui/input";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark-bg-primary text-custom-white py-20">
      <div className="main-container grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo + Newsletter */}
        <div className="flex flex-col gap-6">
          <Link href="/" className="relative h-10 w-40">
            <Image
              src="/Secondary logo.svg"
              alt="FourBtech Logo"
              fill
              priority
              className="object-contain"
            />
          </Link>
          <h3 className="text-lg font-semibold">Stay in Touch</h3>
          <div className="relative max-w-full">
            <Input
              placeholder="Email Address"
              className="bg-custom-white text-sm text-dark-bg-primary rounded-full px-4 py-2 pr-10 focus-visible:!ring-0"
            />
            <CiPaperplane className="absolute right-4 top-1/2 -translate-y-1/2 size-5 cursor-pointer text-dark-bg-primary hover:text-accent transition-transform duration-300 hover:-rotate-12" />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Locations</h3>
          <p className="text-custom-white/70 text-sm leading-relaxed">
            <strong>UK Office:</strong> 252-262 Romford Road, E7 9HZ, London, UK
          </p>
          <p className="text-custom-white/70 text-sm leading-relaxed">
            <strong>BD Office:</strong> KA-5, Bashundhara Main Gate, Dhaka, Bangladesh
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-custom-white/70 text-sm">info@fourbtech.com</p>
          <p className="text-custom-white/70 text-sm">UK: +44 7424 438741</p>
          <p className="text-custom-white/70 text-sm">BD: +880 1674 982831</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="/" className="rounded-full border border-custom-white p-2 hover:bg-custom-white/20 transition">
              <FaLinkedinIn className="text-xl" />
            </Link>
            <Link href="/" className="rounded-full border border-custom-white p-2 hover:bg-custom-white/20 transition">
              <FaFacebookF className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 h-px w-full bg-custom-white/20" />

      {/* Bottom Bar */}
      <div className="main-container text-center text-sm text-custom-white/60">
        &copy; {new Date().getFullYear()} FourBtech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
