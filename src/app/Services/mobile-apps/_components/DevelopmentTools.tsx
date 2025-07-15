import Image from "next/image";
import React from "react";
import flutter from "../../../../../public/Icons/app/flutter.png";
import flutterDeveloper from "../../../../../public/Icons/app/flutterDeveloper.png";
import java from "../../../../../public/Icons/app/java.png";
import ReactNative from "../../../../../public/Icons/app/react-native.png";
import ArrowButton from "@/components/global/ArrowButton";
import Link from "next/link";

export default function DevelopmentTools() {
  return (
    <section className="main-container grid grid-cols-1 gap-12 object-center !pb-10 lg:grid-cols-2 lg:!pb-32">
      <div className="order-1 h-full w-full lg:order-2">
        <Image
          src={flutterDeveloper}
          width={300}
          height={300}
          className="h-full w-full rounded-xl object-cover"
          alt="development"
        />
      </div>
      <div className="order-2 flex h-full flex-col items-start justify-center gap-4">
        <h2 className="text-h1-color mb-3 font-semibold">Development Tools</h2>
        <p className="text-[clamp(.8rem, 2vw, 1rem)]">
          We Leverage Powerful And Flexible Development Tools To Create
          Cross-platform Apps That Deliver Smooth Performance Across Different
          Devices And Pperating Systems, Enhancing Efficiency And Cutting Down
          Costs.
        </p>
        <div className="flex w-full items-center gap-6 pt-4 text-[.8rem] sm:text-[.9rem]">
          <div className="relative h-20 w-20 md:h-16 md:w-16">
            <Image
              src={ReactNative}
              fill
              alt="React Native Development"
              priority
            />
          </div>
          <div className="relative h-20 w-20 md:h-16 md:w-16">
            <Image src={flutter} fill alt="Flutter Development" />
          </div>
          <div className="relative h-28 w-28 md:h-28 md:w-28">
            <Image src={java} fill alt="Java Development" priority />
          </div>
        </div>
        <div className="">
          <Link href={{ pathname: "/", hash: "contact" }}>
            <ArrowButton variant="outline" right className="!px-7 !py-5">
              Get In touch
            </ArrowButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
