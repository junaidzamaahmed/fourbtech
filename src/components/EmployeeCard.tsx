import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Employee } from "@/types";
import { LinkedinIcon, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const EmployeeCard = ({
  name,
  role,
  image,
  description,
  email,
  linkedin,
}: Employee) => {
  return (
    <Card className="bg-custom-white border-p-color/20 min-h-full max-w-[331px] rounded-xl border-[1px] shadow-lg hover:shadow-2xl ">
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
      <CardContent className="-mt-3">
        {description &&
          description.split("<br/>").map((line, index) => (
            <p key={index} className="text-p-color text-sm font-light">
              {line}
            </p>
          ))}
      </CardContent>
      <CardFooter className="gap-4">
        <Link
          href={"mailto:" + email}
          className="bg-p-color/20 hover:bg-accent-hover group rounded-full p-3 transition-all"
        >
          <Mail
            className="text-p-color transition-all group-hover:text-white"
            size={20}
          />
        </Link>
        <Link
          href={linkedin}
          className="bg-p-color/20 hover:bg-accent-hover group rounded-full p-3 transition-all"
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
