"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { employees as AllEmployee } from "@/constants"
import { Employee } from "@/types"
import { LinkedinIcon, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const EmployeeComp1 = () => 
{
  const employees = AllEmployee.slice(3, AllEmployee.length)
  return (
    <div>
      <h2 className="mt-16 mb-8 text-2xl font-bold text-center">Our Creative Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
        {employees.map((employee) => (
          <div key={employee.name} className="h-full w-full">
            <EmployeeCard {...employee} />
          </div>
        ))}
      </div>
    </div>
  );
  
}


const EmployeeCard = (
{
  name,
  role,
  image,
  description,
  email,
  linkedin,
  
}
: Employee) => 
{
  const allDescription = description?.split("<br/>");
  return (
    <Card
      className="bg-custom-white border-p-color/20 group flex h-full w-full justify-between rounded-xl border text-start flex-col sm:flex-row p-4 sm:p-5"
    >
      <CardHeader className="relative h-48 sm:h-full min-h-full w-full sm:w-1/2 lg:h-60">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="rounded-xl object-cover"
          />
      </CardHeader>
      <CardContent className="flex flex-col w-full sm:w-1/2 items-start gap-4 justify-between p-0 sm:pl-6 pt-4 sm:pt-0">
        <CardTitle className="text-h1-color text-lg sm:text-xl font-bold">
          {name}
        </CardTitle>
        <p className="text-p-color font-normal">{role}</p>
        <CardDescription>
          <p className="text-p-color/90 text-xs sm:text-sm font-light">
            {description &&
              allDescription?.map((desc, index) => (
                <span key={index}>
                  {desc}
                  <br />
                </span>
              ))}
          </p>
        </CardDescription>
        <CardFooter className="flex gap-4 p-0">
          <Link
            href={"mailto:" + email}
            className="bg-p-color/20 group-hover:bg-accent-hover group rounded-full p-2"
          >
            <Mail
              className="text-p-color group-hover:text-white"
              size={20}
            />
          </Link>
          <Link
            href={linkedin}
            className="bg-p-color/20 group-hover:bg-accent-hover group rounded-full p-2"
          >
            <LinkedinIcon
              className="text-p-color group-hover:text-white"
              size={20}
            />
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};
