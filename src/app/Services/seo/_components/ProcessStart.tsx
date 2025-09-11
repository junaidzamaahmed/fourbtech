import { Lightbulb, LucideProps, Settings, Target } from "lucide-react";
import React from "react";
import { FaQuestionCircle } from "react-icons/fa";

const StepsList: StepsProps[] = [
  {
    icon: Lightbulb,
    title: "Research Project",
    description:
      "Identify your ideal audience and set clear SEO goals to reach them effectively.",
  },
  {
    icon: FaQuestionCircle,
    title: "Find Problem",
    description:
      "Run a comprehensive SEO audit to uncover technical issues, content gaps, and ranking barriers.",
  },
  {
    icon: Settings,
    title: "Start Optimizeing",
    description:
      "Apply targeted optimizations from keywords to code, for better visibility, speed, and performance.",
  },
  {
    icon: Target,
    title: "Reach Target",
    description:
      "Achieve higher rankings, increased traffic, and sustainable growth by reaching the right audience consistently.",
  },
];

export default function ProcessStart() {
  return (
    <section className="main-container bg-dark-bg-primary flex flex-col items-center justify-between gap-20 !py-10 lg:!py-32">
      <h2 className="text-custom-white">Simple Process To Start</h2>
      <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-10 sm:grid-cols-4">
        {StepsList.map((items, idx) => (
          <Steps key={idx} {...items} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <NumberSow number="01" />
        <NumberSow number="02" />
        <NumberSow number="03" />
        <NumberSow number="04" last />
      </div>
    </section>
  );
}

type StepsProps = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
};

function Steps({ title, description, icon: Icon }: StepsProps) {
  return (
    <div className="h-full w-full max-w-56">
      <div className="text-custom-white flex flex-col items-center gap-2">
        <Icon size={28} />
        <h3 className="text-custom-white text-center font-semibold">
          {title}
        </h3>
        <p className="text-custom-white/70 text-center capitalize">
          {description}
        </p>
      </div>
    </div>
  );
}

function NumberSow({
  number,
  last = false,
}: {
  number: string;
  last?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="text-custom-white flex-center hover:bg-custom-white h-10 w-10 rounded-full bg-[#3C3A58] transition-all duration-300 hover:text-[#3C3A58]">
        {number}
      </div>
      {!last && <div className="h-[1px] w-8 bg-[#3C3A58] sm:w-20" />}
    </div>
  );
}
