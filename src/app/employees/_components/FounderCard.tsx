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
const FounderCard = () => {
  // const founders = employees.slice(0, 3);
  const kaji = employees[0];
  const himu = employees[1];
  const junaid = employees[2];
  return (
    <>
      <div>Founding Members</div>

      <div className="grid grid-cols-2 place-items-center gap-2 lg:grid-cols-3">

        <div className="h-full w-full">
          <FounderCardItem {...kaji} />
        </div>
        <div className="h-full w-full">
          <FounderCardItem {...himu} />
        </div>
        <div className="col-span-2 h-full w-full lg:col-span-1">
          <FounderCardItem {...junaid} />
        </div>
      </div>
    </>
  );
};

export default FounderCard;

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
        "bg-custom-white border-p-color/20 group hover:shadow-2x flex h-full w-full max-w-[400px] flex-col justify-between rounded-xl border text-start shadow-lg transition-all duration-300 ease-in-out hover:scale-110",
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
            className="rounded-xl"
          />
        </div>
        <CardTitle className="text-h1-color text-xl font-bold">
          {name}
        </CardTitle>
        <p className="text-p-color -mt-2 font-normal">{role}</p>
      </CardHeader>
      <CardContent className="-mt-2 mb-2 flex-grow">
        <p className="text-p-color/90 text-sm font-light">
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
          className="bg-p-color/20 hover:bg-accent-hover group rounded-full p-2 transition-all"
        >
          <Mail
            className="text-p-color transition-all group-hover:text-white"
            size={20}
          />
        </Link>
        <Link
          href={linkedin}
          className="bg-p-color/20 hover:bg-accent-hover group rounded-full p-2 transition-all"
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
