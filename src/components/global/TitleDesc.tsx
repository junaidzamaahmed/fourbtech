import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card";
import { TitleDesc } from "@/types";

const TitleDescCard = ({ title, desc }: TitleDesc) => {
  return (
    <Card className="border-dark-bg-primary/10 transform-all border-[1px] p-5 shadow-none duration-500 hover:drop-shadow-xl">
      <CardContent>
      {title && <CardTitle className=" sm:text-lg mb-4">{title}</CardTitle>}
        <CardDescription className="sm:text-base">{desc}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TitleDescCard;
