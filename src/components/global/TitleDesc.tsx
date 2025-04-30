import React from "react";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { TitleDesc } from "@/types";

const TitleDescCard = ({ title, desc }: TitleDesc) => {
  return (
    <Card className="border-dark-bg-primary/10 transform-all flex flex-col items-center justify-center border-[1px] p-5 shadow-none duration-500 hover:drop-shadow-xl">
      {title && <CardTitle className="">{title}</CardTitle>}
      <CardDescription className="">{desc}</CardDescription>
    </Card>
  );
};

export default TitleDescCard;
