import ArrowButton from "@/components/global/ArrowButton";
import Link from "next/link";
import React from "react";

export default function LetsTalk() {
  return (
    <section className="main-container flex-center flex-col !pb-10 lg:!pb-32 text-center *:max-w-[95%]">
      <h2 className="mb-5">
        Looking to create user-focused websites that showcase your products
        effectively? Get in touch with us for responsive front-end development
        solutions.
      </h2>
      <Link href={{ pathname: "/", hash: "contact" }}>
        <ArrowButton variant="fill" size={20} left className="!py-5">
          Let&apos;s Talk
        </ArrowButton>
      </Link>
    </section>
  );
}
