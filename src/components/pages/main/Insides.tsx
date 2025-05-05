import ArrowButton from "@/components/global/ArrowButton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { insights } from "@/constants";
import { Insight } from "@/types";
import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InsightCard = ({ image, date, title, link }: Insight) => (
  <Card className="bg-custom-white border-0 hover:shadow-2xl">
    <CardHeader className="relative h-full w-full">
      <Image
        src={image}
        alt={title}
        height={100}
        width={100}
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardContent>
      <p className="mb-2 flex items-center gap-2 text-sm">
        <span>
          <Calendar size={14} />
        </span>
        {date}
      </p>
      <CardTitle className="text-p-color !text-sm leading-4 font-light">
        {title}
      </CardTitle>
    </CardContent>
    <CardFooter>
      <ArrowButton variant="outline" left size={20}>
        <Link href={link}>Read More</Link>
      </ArrowButton>
    </CardFooter>
  </Card>
);

const Insides = () => {
  return (
    <section className="main-container">
      <h1 className="text-dark-bg-primary my-12">Explore Latest Insights</h1>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {insights.slice(0, 4).map((data, index) => (
          <InsightCard key={index} {...data} />
        ))}
      </div>
    </section>
  );
};

export default Insides;
