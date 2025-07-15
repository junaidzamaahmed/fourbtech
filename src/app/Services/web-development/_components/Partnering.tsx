import ArrowButton from "@/components/global/ArrowButton";
import Link from "next/link";
import React from "react";

export default function Partnering() {
  return (
    <section className="main-container flex flex-col items-center !pb-10 text-center lg:!pb-32">
      <h2 className="mb-5">
        Looking for a partner who truly understands your business? Get in touch
        with us —we&apos;re dedicated to providing top-tier custom web
        development services.
      </h2>
      <Link href={{ pathname: "/", hash: "contact" }}>
        <ArrowButton variant="fill" size={20} left>
          Get In touch
        </ArrowButton>
      </Link>
    </section>
  );
}
