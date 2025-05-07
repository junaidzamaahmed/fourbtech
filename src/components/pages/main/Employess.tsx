"use client"
import ArrowButton from "@/components/global/ArrowButton"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { employees } from "@/constants"
import type { Employee } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { CiMail } from "react-icons/ci"
import { FiLinkedin } from "react-icons/fi"

import { useEffect, useRef, forwardRef } from "react"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const EmployeeCard = forwardRef<HTMLDivElement, Employee>(
  ({ name, role, image, description, email, linkedin }, ref) => {
    return (
      <Card
        ref={ref}
        className="border-dark-bg-primary/10 bg-custom-white flex h-full flex-col border-[1px] transition-all duration-300 hover:shadow-lg"
      >
        <CardHeader className="flex flex-col items-center justify-center space-y-3">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src={image || "/placeholder.svg"}
              fill
              alt={name}
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
            />
          </div>
          <CardTitle className="w-full text-start">
            <h3 className="text-dark-bg-primary text-xl font-semibold">{name}</h3>
            <p className="text-muted-foreground text-sm font-medium">{role}</p>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="prose prose-sm text-muted-foreground max-w-none">
            {description?.split("<br/>").map((text, index) => (
              <p className="mb-1 text-sm" key={index}>
                {text}
              </p>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-start gap-3">
          <Link
            href={`mailto:${email}`}
            className="bg-p-color/20 hover:bg-accent-hover group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
            aria-label={`Email ${name}`}
          >
            <CiMail size={18} className="text-dark-bg-primary group-hover:text-custom-white" />
          </Link>
          <Link
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-p-color/20 hover:bg-accent-hover group flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300"
            aria-label={`LinkedIn profile of ${name}`}
          >
            <FiLinkedin size={18} className="text-dark-bg-primary group-hover:text-custom-white" />
          </Link>
        </CardFooter>
      </Card>
    )
  },
)

EmployeeCard.displayName = "EmployeeCard"

const Employees = () => {
  const employeeRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    employeeRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { autoAlpha: 0, y: 50 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: index * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        )
      }
    })
  }, [])

  return (
    <section className="main-container my-28 flex flex-col items-center justify-between gap-10">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who We Are</h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            At Our IT Solutions & Services Agency, we specialize in creating visually stunning and highly functional
            websites or mobile apps that help businesses stand out in the digital world. Our team of talented designers
            and developers are passionate about crafting innovative digital solutions.
          </p>
          <ArrowButton right variant="noOutline" size={24}>
            <Link href={"/"} className="font-medium">
              Continue Reading
            </Link>
          </ArrowButton>
        </div>
        <div className="h-[300px] w-full sm:h-[350px] lg:min-h-full">
          <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
              src="/placeholders/palaceholder2.png"
              alt="Our team at work"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>

      <h1 className="mt-16 text-center">Our Team</h1>

      <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {employees.map((employee, index) => (
          <EmployeeCard
            key={index}
            ref={(el) => {
              employeeRefs.current[index] = el
            }}
            {...employee}
          />
        ))}
      </div>
    </section>
  )
}

export default Employees
