import { Infinity, LucideProps, Percent, X } from "lucide-react";
import React from "react";

const Data = [
  {
    number: "93",
    icon: Percent,
    description:
      "of online experiences start with a search engine—making search visibility essential.",
  },
  {
    number: "8",
    icon: X,
    description:
      "of online experiences start with a search engine—making search visibility essential.",
  },
  {
    icon: Infinity,
    description:
      "of online experiences start with a search engine—making search visibility essential.",
  },
  {
    number: "75",
    icon: Percent,
    description:
      "of online experiences start with a search engine—making search visibility essential.",
  },
];

export default function WhySeoMatters() {
  return (
    <section className="main-container grid w-full grid-cols-1 gap-4 !pb-10 md:grid-cols-2 lg:!pb-32">
      <div className="flex flex-col gap-4">
        <p className="text-accent-hover font-bold">
          WHY SEO MATTERS FOR YOUR BUSINESS?
        </p>
        <h2 className="text-p-color/60">
          Search engine optimization isn&apos;t just about rankings—
          <span className="text-p-color">
            it&apos;s about sustainable growth and long-term success.
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {Data.map((data, index) => (
          <DataCard key={index} {...data} />
        ))}
      </div>
    </section>
  );
}

type DataCardProps = {
  number?: string;
  icon: React.ComponentType<LucideProps>;
  description: string;
};

function DataCard({ number, description, icon: Icon }: DataCardProps) {
  return (
    <div className="rounded-lg border-2 border-gray-500 p-4 transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col items-start gap-2">
        <div className="text-accent-hover flex items-center">
          {number && <h2 className="text-accent-hover text-xl">{number}</h2>}
          {number ? <Icon size={24} /> : <Icon size={28} />}
        </div>
        <div>
          <p className="text-sm text-gray-600 capitalize">{description}</p>
        </div>
      </div>
    </div>
  );
}
