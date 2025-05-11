import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
// import SmoothScrollLayout from "@/components/global/SmoothScroll";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FourBtech",
  description: "Tech Service Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {/* <SmoothScrollLayout> */}
          <div className="mt-24">{children}</div>
          <Footer />
          {/* </SmoothScrollLayout> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
