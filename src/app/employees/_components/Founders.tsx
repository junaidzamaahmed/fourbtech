"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { employees } from "@/constants";
import { Employee } from "@/types";
import clsx from "clsx";
import { LinkedinIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
const Founders = () => {
  // const founders = employees.slice(0, 3);
  const chairman = employees[0];
  const CEO = employees[1];
  const techLead = employees[2];
  return (
    <div className="flex w-full items-center justify-center flex-col ">
        <h2 className="mb-12 mt-6">Founding Members</h2>

        <div className="grid grid-cols-1 place-items-center gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-full w-full">
            <FounderCardItem {...chairman} />
          </div>
          <div className="h-full w-full">
            <FounderCardItem {...CEO} />
          </div>
          <div className="col-span-1 flex h-full w-full items-center justify-center sm:col-span-2 lg:col-span-1">
            <FounderCardItem {...techLead} />
          </div>
        </div>
      </div>
  );
};

export default Founders;

const FounderCardItem = ({
  name,
  role,
  image,
  description,
  email,
  linkedin,
}: Employee) => {
  const allDescription = description?.split("<br/>");
  return (
    <Card
      className={clsx(
        "bg-custom-white border-p-color/20 group hover:shadow-2x flex h-full w-full max-w-[370px] flex-col justify-between rounded-xl border text-start shadow-lg transition-all duration-300 ease-in-out hover:scale-105",
      )}
    >
      <CardHeader>
        <div className="relative mb-4 h-52 w-full lg:h-60">
          <Image
            src={image}
            alt={name}
            // width={281}
            // height={180}
            fill
            className="rounded-xl duration-500 group-hover:scale-95"
          />
        </div>
        <CardTitle className="text-h1-color text-xl font-bold">
          {name}
        </CardTitle>
        <p className="text-p-color -mt-2 font-normal">{role}</p>
      </CardHeader>
      <CardContent className="-mt-2 mb-2 flex-grow">
        <p className="text-p-color/80 text-sm font-light transition-all duration-300 group-hover:text-black">
          {description &&
            allDescription?.map((desc, index) => (
              <span key={index}>
                {desc}
                <br />
              </span>
            ))}
        </p>
      </CardContent>

      <CardFooter className="-mt-4 gap-4">
        <Link
          href={"mailto:" + email}
          className="bg-p-color/20 group-hover:bg-accent-hover group rounded-full p-2 transition-all duration-500"
        >
          <Mail
            className="text-p-color transition-all group-hover:text-white"
            size={20}
          />
        </Link>
        <Link
          href={linkedin}
          className="bg-p-color/20 group-hover:bg-accent-hover group rounded-full p-2 transition-all duration-500"
        >
          <LinkedinIcon
            className="text-p-color transition-all group-hover:text-white"
            size={20}
          />
        </Link>
      </CardFooter>
    </Card>
  );
};
