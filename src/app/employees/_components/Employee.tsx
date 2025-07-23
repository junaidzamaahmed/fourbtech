"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { employees as AllEmployee } from "@/constants";
import { Employee } from "@/types";
import { LinkedinIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useState } from "react";
const EmployeeComp = () => {
  const employees = AllEmployee.slice(3, AllEmployee.length);
  return (
    <div className="flex w-full items-center justify-center flex-col ">
      <h2 className="mt-16 mb-8">Our Creative Team</h2>

      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 w-full">
        {employees.map((employee) => (
          <div key={employee.name} className="h-full w-full">
            <EmployeeCard {...employee} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeComp;

const EmployeeCard = ({
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
      className={`bg-custom-white border-p-color/20 group hover:shadow-2x flex h-full w-full flex-col justify-between rounded-xl border p-5 text-start shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.05] md:flex-row`}
    >
      <CardHeader className="relative h-56 w-full sm:h-56 md:h-full md:min-h-full md:w-1/2 lg:h-60">
        <Image
          src={image}
          alt={name}
          // width={281}
          // height={180}
          fill
          className="rounded-xl"
        />
      </CardHeader>
      <CardContent className="flex w-full flex-col items-start justify-between gap-4 p-0 md:w-1/2">
        <CardTitle className="text-h1-color text-xl font-bold">
          {name}
        </CardTitle>
        <p className="text-p-color -mt-2 text-sm font-normal">{role}</p>
        <CardDescription>
          <p className="text-p-color/90 text-sm font-light">
            {description &&
              allDescription?.map((desc, index) => (
                <span key={index}>
                  {desc}
                  <br />
                </span>
              ))}
          </p>
        </CardDescription>

        <CardFooter className="m-0 flex items-start gap-4 p-0">
          <Link
            href={"mailto:" + email}
            className="bg-p-color/20 group-hover:bg-accent-hover group rounded-full p-2 transition-all"
          >
            <Mail
              className="text-p-color transition-all group-hover:text-white"
              size={20}
            />
          </Link>
          <Link
            href={linkedin}
            className="bg-p-color/20 group-hover:bg-accent-hover group rounded-full p-2 transition-all"
          >
            <LinkedinIcon
              className="text-p-color transition-all group-hover:text-white"
              size={20}
            />
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
