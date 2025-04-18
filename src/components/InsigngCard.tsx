import { Insight } from "@/types";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";
import Button from "./global/Button";

const InsigngCard = ({ image, date, title, link }: Insight) => {
  return (
    <Card>
      <CardHeader>
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="rounded-xl"
        />
        <div>
          <MdOutlineDateRange size={20} />
          <span>{date}</span>
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-lg font-bold">{title}</h2>
      </CardContent>
      <CardFooter>
        <Button
          text={"Read More"}
          href={link}
          rightIcon={true}
          outline={true}
          customCLass="!border-none hover:text-accent-hover text-sm"
        />
      </CardFooter>
    </Card>
  );
};

export default InsigngCard;
