import type { Metadata } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
// import SmoothScrollLayout from "@/components/global/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: ["400"],
  style: "italic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "FourBtech Limited | Web Development, Mobile Apps, & Digital Marketing",
  description:
    "FourBtech delivers expert website development, mobile app development, and digital marketing to help businesses grow online with smart IT solutions.",
  openGraph: {
    title: "FourBtech | Website, Mobile App, & Marketing Experts",
    description:
      "Build better apps, websites, and digital strategies with FourBtech. Your trusted IT partner for growth, innovation, and online success.",
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
    title: "FourBtech | Complete Web, App & Marketing Solutions",
    description:
      "FourBtech empowers businesses with mobile app development, website design, and data-driven digital marketing tailored for online growth.",
    images: [
      {
        url: "https://www.fourbtech.com/MetaImages/twitter-image.jpg",
        alt: "FourBtech - Complete Web, App & Marketing Solutions",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${poppins.variable} ${dmSerif.variable} antialiased`}>
        <Header />
        {/* <SmoothScrollLayout> */}
        <main>{children}</main>
        <Footer />
        {/* </SmoothScrollLayout> */}
      </body>
    </html>
  );
}
