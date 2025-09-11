import ArrowButton from "@/components/global/ArrowButton";
import Link from "next/link";
import React from "react";

export default function HigherRank() {
  return (
    <section className="main-container flex-center w-full flex-col !py-10 lg:!py-32">
      <div className="max-w-[80vw]">
        <h1 className="text-center">
          <span className="text-accent-hover italic">
            Rank Higher. Get Found. Grow Smart
          </span>
          <br />
          With SEO That Works.
        </h1>
        <p className="text-p-color/80 mt-4 text-center">
          FourBTech helps businesses increase visibility, attract organic
          traffic, and drive long-term growth with proven SEO strategies.
        </p>
      </div>
      <Link href={{ pathname: "/services/seo", hash: "#contact" }}>
        <ArrowButton variant="fill" right>
          BOOK A SEO AUDIT
        </ArrowButton>
      </Link>
    </section>
  );
}
