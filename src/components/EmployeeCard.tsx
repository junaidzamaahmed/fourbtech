"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Employee } from "@/types";
import clsx from "clsx";
import { LinkedinIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
const EmployeeCard = ({
  name,
  role,
  image,
  description,
  email,
  linkedin,
}: Employee) => {
  // const [showMore, setShowMore] = useState<boolean>(false);
  const allDescription = description?.split("<br/>");
  return (
    <Card
      className={clsx(
        "bg-custom-white border-p-color/20 min-h-full max-w-[331px] rounded-xl border-[1px] text-start shadow-lg hover:shadow-2xl",
      )}
    >
      <CardHeader>
        <Image
          src={image}
          alt={name}
          width={281}
          height={180}
          className="rounded-xl"
        />
        <CardTitle className="text-h1-color text-xl font-bold">
          {name}
        </CardTitle>
        <p className="text-p-color -mt-2 font-normal">{role}</p>
      </CardHeader>
      <CardContent className="-mt-5">
        <p className="text-p-color/70 text-sm font-light">
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

export default EmployeeCard;
