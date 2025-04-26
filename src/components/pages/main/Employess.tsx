import ArrowButton from "@/components/global/ArrowButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { employees } from "@/constants";
import { Employee } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";

const EmployeeCard = ({
  name,
  role,
  image,
  description,
  email,
  linkedin,
}: Employee) => (
  <Card className="border-dark-bg-primary/30 items-center gap-2 border-[1px]">
    <CardHeader className="flex min-w-full flex-col items-center justify-center">
      <Image src={image} height={300} width={300} alt={name} />
      <CardTitle className="min-w-full">
        <h3 className="text-dark-bg-primary !font-semibold"> {name}</h3>
        <p className="!text-sm sm:!text-base">{role}</p>
      </CardTitle>
    </CardHeader>
    <CardContent className="min-w-full">
      {description?.split("<br/>").map((text, index) => (
        <p className="!text-sm" key={index}>
          {text}
        </p>
      ))}
    </CardContent>
    <CardFooter className="min-w-full flex gap-5">
      <Link
        href={`mailTo:${email}`}
        className="bg-p-color/20 hover:bg-accent-hover group rounded-full p-2 transition-all duration-300"
      >
        <CiMail
          size={20}
          className="text-dark-bg-primary group-hover:text-custom-white"
        />
      </Link>
      <Link
        href={linkedin}
        className="bg-p-color/20 hover:bg-accent-hover group rounded-full p-2 transition-all duration-300"
      >
        <FiLinkedin
          size={20}
          className="text-dark-bg-primary group-hover:text-custom-white"
        />
      </Link>
    </CardFooter>
  </Card>
);

const Employess = () => {
  return (
    <section className="main-container mt-10 flex flex-col items-center justify-between gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-start justify-between gap-2">
          <h2 className="">Who We Are</h2>
          <p className="">
            At Our IT Solutions & Services Agency Agency, We Specialize In
            Creating Visually Stunning And Highly Functional Websites Or Mobile
            Apps That Help Businesses Stand Out In The Digital World. Our Team
            Of Talented Designers And Developers Are Passionate About Crafting.
          </p>
          <ArrowButton right variant="noOutline" size={24}>
            <Link href={"/"}>Continue Reading</Link>
          </ArrowButton>
        </div>
        <div className="h-full w-full">
          <Image
            src="/placeholders/palaceholder2.png"
            alt=""
            height={300}
            width={300}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="grid min-w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {employees.map((employee, index) => (
          <EmployeeCard key={index} {...employee} />
        ))}
      </div>
    </section>
  );
};

export default Employess;
