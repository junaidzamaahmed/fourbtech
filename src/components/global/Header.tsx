"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import ArrowButton from "./ArrowButton";
import { ChevronDown, Menu, X } from "lucide-react";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import Link from "next/link";

const links = [
  { title: "Home", path: "/", sub: [] },
  { title: "About", path: "/about", sub: [] },
  {
    title: "Services",
    path: "/services",
    sub: [
      { title: "Web Development", path: "/services/web-development" },
      {
        title: "Mobile Application Development",
        path: "/services/mobile-apps",
      },
      { title: "Digital Marketing", path: "/services/digital-marketing" },
    ],
  },
  // {
  //   title: "Blogs",
  //   path: "/blogs",
  //   sub: [],
  // },
  // { title: "Projects", path: "/projects", sub: [] },
];

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navContainerRef = useRef<HTMLDivElement>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const threshold = 10;

    if (Math.abs(currentScrollY - lastScrollY) < threshold) return;

    if (currentScrollY === 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      if (mobileMenu === false) {
        setIsNavVisible(false);
      }
    } else {
      setIsNavVisible(true);
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, mobileMenu]);

  useEffect(() => {
    // Avoid animations on first load or excessive re-renders
    if (typeof window === "undefined") return;

    const nav = navContainerRef.current;
    // console.log(nav)

    gsap.to(nav, {
      y: isNavVisible ? 0 : -100,
      autoAlpha: isNavVisible ? 1 : 0,
      ease: "power2.out",
      duration: 0.4,
    });
  }, [isNavVisible]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById("mobile-menu");
      if (mobileMenu && menu && !menu.contains(e.target as Node)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenu]);

  const closeAllDropdowns = () => setActiveDropdown(null);
  const closeMobileMenu = () => {
    setMobileMenu(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <div
      ref={navContainerRef}
      className={`fixed top-0 z-50 h-16 w-full border-none transition-all duration-700 sm:top-3`}
    >
      <header className="bsolute absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex-between main-container bg-custom-white">
          <Link href="/" className="relative w-20 sm:w-28 md:w-32">
            <Image
              src="/Primary logo.svg"
              alt="Logo"
              width={200}
              height={200}
              className="origin-center object-cover object-center"
            />
          </Link>
          {/* Desktop Nav */}
          <div className="hidden sm:block">
            <ul className="flex-between list-none !gap-1 duration-500 lg:!gap-5">
              {links.map((link) => {
                const hasSub = link.sub.length > 0;
                const isActive =
                  pathname === link.path ||
                  pathname.startsWith(link.path + "/");

                return (
                  <li
                    key={link.title}
                    className="group hover:text-accent-hover hover:bg-dark-bg-primary/10 relative cursor-pointer rounded-4xl px-6 py-2 duration-500"
                    onMouseEnter={() => hasSub && setActiveDropdown(link.title)}
                    onMouseLeave={() => hasSub && setActiveDropdown(null)}
                  >
                    {hasSub ? (
                      <div className="flex items-center gap-1">
                        <span
                          className={`text-h1-color group-hover:text-accent-hover ${isActive && "!text-accent-hover"}`}
                        >
                          {link.title}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            activeDropdown === link.title ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    ) : (
                      <Link href={link.path}>
                        <p
                          className={`text-h1-color group-hover:text-accent-hover ${isActive && "!text-accent-hover"}`}
                        >
                          {link.title}
                        </p>
                      </Link>
                    )}

                    {hasSub && (
                      <div
                        data-dropdown={link.title}
                        className={`absolute top-full left-0 mt-1 w-48 rounded-md bg-white shadow-lg transition-all duration-200 ${
                          activeDropdown === link.title
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                        }`}
                      >
                        <div className="py-1">
                          {link.sub.map((subLink) => (
                            <Link
                              key={subLink.title}
                              href={subLink.path}
                              className={`block px-4 py-2 text-sm hover:bg-gray-100 ${
                                pathname === subLink.path
                                  ? "text-accent-hover"
                                  : "text-gray-700"
                              }`}
                              onClick={closeAllDropdowns}
                            >
                              {subLink.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-center">
            <div className="hidden sm:block">
              <ArrowButton left={true} size={30} className="h-1/2 md:h-1/3">
                <Link
                  href={{ pathname: "/", hash: "contact" }}
                  className="w-full"
                >
                  Let&apos;s talk
                </Link>
              </ArrowButton>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                className="hover:text-accent-hover absolute top-5 right-7 z-50 cursor-pointer text-black"
                onClick={() => setMobileMenu((prev) => !prev)}
                aria-label={mobileMenu ? "Close menu" : "Open menu"}
              >
                {mobileMenu ? (
                  <X className="h-8 w-8 text-white" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>

              {/* Mobile Menu */}
              <div
                id="mobile-menu"
                className={`!bg-dark-bg-primary fixed inset-0 z-40 flex h-screen flex-col items-center justify-center pt-20 transition-all duration-500 ${
                  mobileMenu
                    ? "pointer-events-auto visible opacity-100"
                    : "pointer-events-none invisible opacity-0"
                }`}
                // onClick={closeMobileMenu}
              >
                <ul className="text-custom-white flex w-full flex-col items-center space-y-6 px-6">
                  {links.map((link) => {
                    const hasSub = link.sub.length > 0;
                    const isActive =
                      pathname === link.path ||
                      pathname.startsWith(link.path + "/");

                    return (
                      <li key={link.title} className="w-full">
                        {hasSub ? (
                          <div className="z-50 w-full">
                            <button
                              onMouseOver={() => toggleDropdown(link.title)}
                              className={`flex w-full items-center justify-between text-lg font-medium ${
                                isActive
                                  ? "text-accent-hover"
                                  : "text-custom-white hover:text-accent-hover"
                              }`}
                            >
                              <span>{link.title}</span>
                              <ChevronDown
                                className={`h-5 w-5 transition-transform duration-300 ${
                                  activeDropdown === link.title
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                            <div
                              className={`bg-dark-bg-primary mt-2 space-y-2 overflow-hidden pl-4 transition-[max-height,opacity] duration-300 ease-in-out ${
                                activeDropdown === link.title
                                  ? "max-h-64 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              {link.sub.map((subLink) => (
                                <Link
                                  key={subLink.title}
                                  href={subLink.path}
                                  className={`block py-2 text-sm ${
                                    pathname === subLink.path
                                      ? "text-accent-hover"
                                      : "hover:text-accent-hover text-custom-white"
                                  }`}
                                  onClick={closeMobileMenu}
                                >
                                  {subLink.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <Link
                            href={link.path}
                            className={`block text-lg font-medium ${
                              isActive
                                ? "text-accent-hover"
                                : "text-custom-white hover:text-accent-hover"
                            }`}
                            onClick={closeMobileMenu}
                          >
                            {link.title}
                          </Link>
                        )}
                      </li>
                    );
                  })}

                  <li className="w-full pt-4">
                    <ArrowButton
                      left={true}
                      size={30}
                      className="w-full !border-none"
                      variant="fill"
                    >
                      <Link
                        href={{ pathname: "/", hash: "contact" }}
                        className="text-cente w-full"
                        onClick={closeMobileMenu}
                      >
                        Let&apos;s talk
                      </Link>
                    </ArrowButton>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
