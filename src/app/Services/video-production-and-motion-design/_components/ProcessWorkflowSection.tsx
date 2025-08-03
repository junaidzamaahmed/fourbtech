"use client";
import { useState } from "react";
import Image from "next/image";
import { Lightbulb } from "lucide-react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type ProcessStep = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  image: string;
};

const processSteps: ProcessStep[] = [
  {
    id: "discovery-briefing",
    title: "Discovery & Briefing",
    icon: <Lightbulb className="h-8 w-8" />,
    description:
      "Every great video starts with a deep understanding. In this phase, we collaborate closely with you to explore your brand’s identity, core values, target audience, and business goals. We also define the purpose of the video—whether it’s to inform, inspire, convert, or engage—and gather essential insights. This strategic groundwork ensures every creative decision made down the line aligns with your vision and maximizes impact.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
  },
  {
    id: "script-visual-concepts",
    title: "Script + Visual Concepts",
    icon: (
      <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-600 text-sm font-bold text-white">
        S
      </div>
    ),
    description:
      "With a clear direction in place, our creative team begins shaping your story. We write a compelling script that captures your message in a concise and engaging way. Alongside, we develop detailed visual concepts—mood boards, style frames, storyboards, and references—to illustrate how the story will unfold visually. Every element is designed to match your brand’s tone and resonate with your intended audience.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
  },
  {
    id: "filming-motion-design",
    title: "Filming / Motion Design",
    icon: (
      <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-600 text-sm font-bold text-white">
        F
      </div>
    ),
    description:
      "Depending on your project type, we move into either live-action filming or crafting custom motion graphics. Our crew uses industry-standard equipment and cinematic techniques to capture stunning visuals on set, while our motion designers build dynamic animations, transitions, and effects. Regardless of the approach, this phase is where creative vision turns into captivating visual content.",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop",
  },
  {
    id: "editing-animation",
    title: "Editing & Animation",
    icon: (
      <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-600 text-sm font-bold text-white">
        E
      </div>
    ),
    description:
      "In post-production, all the creative elements come together. Our editors cut and structure the footage for clarity and emotional flow. We apply high-end color grading, sound design, visual effects, typography, and animations to create a seamless final product. For motion design projects, we animate scenes with fluidity and rhythm to keep the viewer fully engaged from start to finish.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
  },
  {
    id: "delivery-optimization",
    title: "Delivery & Optimization",
    icon: (
      <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-600 text-sm font-bold text-white">
        D
      </div>
    ),
    description:
      "Once the final cut is approved, we prepare the video in various formats tailored for different platforms—YouTube, Instagram, websites, presentations, ads, and more. But we don’t stop there. We also provide optimization tips and guidance on how to get the most visibility and engagement across your chosen platforms, ensuring your video performs at its highest potential.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
  },
];

const ProcessWorkflowSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const currentProcessStep = processSteps[currentStep];

  const goToPrevious = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : processSteps.length - 1));
  };

  const goToNext = () => {
    setCurrentStep((prev) => (prev < processSteps.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="main-container min-h-screen">
      <h1 className="mb-12 text-center text-4xl font-bold">How We Do It</h1>
      <div className="mx-auto px-6">
        {/* Process Steps Navigation */}
        <div className="mb-16">
          <div className="flex justify-center space-x-8 overflow-x-auto pb-4">
            {processSteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(index)}
                className={`flex-shrink-0 px-6 py-3 font-medium transition-colors duration-200 ${
                  currentStep === index
                    ? "text-accent-hover"
                    : "hover:text-accent-hover text-gray-600"
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex items-center gap-12">
          {/* Image */}
          <div className="relative h-100 w-1/2 overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={currentProcessStep.image}
              alt={currentProcessStep.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="max-w-2xl flex-1">
            {/* Icon and Title */}
            <div className="mb-6 flex items-center gap-4">
              <div className="text-blue-600">{currentProcessStep.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900">
                {currentProcessStep.title}
              </h2>
            </div>

            {/* Description */}
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {currentProcessStep.description}
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="mt-16 flex justify-center gap-4">
          <button
            onClick={goToPrevious}
            className={`flex h-12 w-12 items-center justify-center rounded-full border border-black ${
              currentStep > 0 ? "bg-black" : "bg-white"
            }`}
            aria-label="Previous step"
          >
            <FaArrowLeft
              className={`h-5 w-5 ${currentStep > 0 ? "text-white" : "text-black"}`}
            />
          </button>

          <button
            onClick={goToNext}
            className={`flex h-12 w-12 items-center justify-center rounded-full ${currentStep < processSteps.length - 1 ? "bg-black" : "bg-white"}`}
            aria-label="Next step"
          >
            <FaArrowRight
              className={`h-5 w-5 ${currentStep < processSteps.length - 1 ? "text-white" : "text-black"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProcessWorkflowSection;
