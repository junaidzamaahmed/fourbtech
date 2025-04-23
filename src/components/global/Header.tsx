"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import ArrowButton from "./ArrowButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useScroll, useMotionValueEvent } from "motion/react";

const links = [
  { title: "Home", path: "/", sub: [] },
  { title: "About", path: "/about", sub: [] },
  { title: "Services", path: "/services", sub: [] },
  { title: "Blogs", path: "/blogs", sub: [] },
  { title: "Projects", path: "/projects", sub: [] },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <header
      ref={ref}
      className={`flex-between main-container sticky top-0 z-50 ${visible ? "bg-transparent" : "bg-custom-white/50"}`}
    >
      <Link href="/" className="relative w-28 sm:w-36 md:w-44 lg:w-52">
        <Image
          src="/Primary logo.svg"
          alt=""
          width={200}
          height={200}
          property=""
          className="origin-center object-cover object-center"
        />
      </Link>
      <nav className="hidden sm:block">
        <ul className="flex-between list-none !gap-1 duration-500 lg:!gap-5">
          {links.map((link) => {
            return (
              <li
                key={link.title}
                className={`group hover:text-accent-hover hover:bg-dark-bg-primary/10 cursor-pointer rounded-4xl p-2 duration-500`}
              >
                <Link href={link.path}>
                  <p
                    className={`text-h1-color group-hover:text-accent-hover ${pathname === link.path && "!text-accent-hover"}`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex-center">
        <div className="hidden sm:block">
          <ArrowButton left={true} size={30} className="h-full md:h-1/3">
            <Link href="/contact" className="h-full w-full">
              Let&apos;s talk
            </Link>
          </ArrowButton>
        </div>
        <div className="sm:hidden">
          <div
            className="hover:text-accent-hover z-50 cursor-pointer *:size-8"
            onClick={() => setMobileMenu((prev) => !prev)}
          >
            {mobileMenu ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </div>
          <div
            className={`bg-dark-bg-primary flex-center absolute top-20 left-0 w-screen flex-col transition-all duration-500 ${mobileMenu ? "h-screen" : "z-0 hidden h-0"}`}
          >
            <ul className="flex-between text-custom-white list-none flex-col">
              {links.map((link) => {
                return (
                  <li
                    key={link.title}
                    className={`hover:text-accent-hover ${pathname === link.path && "!text-accent-hover"} ${mobileMenu ? "block h-full delay-300" : "hidden h-0"}`}
                  >
                    <Link href={link.path}>{link.title}</Link>
                  </li>
                );
              })}
              <div
                className={`${mobileMenu ? "block h-full delay-300" : "hidden"}`}
              >
                <ArrowButton
                  left={true}
                  size={30}
                  className="!border-none"
                  variant="fill"
                >
                  <Link href="/contact" className="">
                    Let&apos;s talk
                  </Link>
                </ArrowButton>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
