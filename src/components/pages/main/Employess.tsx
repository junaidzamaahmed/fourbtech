import ArrowButton from "@/components/global/ArrowButton"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { employees } from "@/constants"
import type { Employee } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { CiMail } from "react-icons/ci"
import { FiLinkedin } from "react-icons/fi"

const EmployeeCard = ({ name, role, image, description, email, linkedin }: Employee) => (
  <Card className="border-dark-bg-primary/10 bg-custom-white h-full flex flex-col border-[1px] transition-all duration-300 hover:shadow-lg">
    <CardHeader className="flex flex-col items-center justify-center space-y-3 ">
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
        <p className="text-muted-foreground  text-sm font-medium">{role}</p>
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="prose prose-sm text-muted-foreground max-w-none">
        {description?.split("<br/>").map((text, index) => (
          <p className="mb-1 text-sm " key={index}>
            {text}
          </p>
        ))}
      </div>
    </CardContent>
    <CardFooter className="flex justify-start gap-3 ">
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

const Employees = () => {
  return (
    <section className="main-container my-16 flex flex-col items-center justify-between gap-10">
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-start justify-between gap-4">
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
        <div className="h-[300px] w-full sm:h-[350px] lg:h-full">
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

      <h2 className="mt-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">Our Team</h2>

      <div className="mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {employees.map((employee, index) => (
          <EmployeeCard key={index} {...employee} />
        ))}
      </div>
    </section>
  )
}

export default Employees
