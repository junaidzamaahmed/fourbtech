import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TitleDesc } from "@/types";

const TitleDescCard = ({ title, desc }: TitleDesc) => {
  return (
    <Card className="border-dark-bg-primary/10 transform-all border-[1px] p-5 shadow-none duration-500 hover:drop-shadow-xl">
      {title && (
        <CardHeader>
          <CardTitle className="">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <CardDescription className="text-p-color">{desc}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default TitleDescCard;
