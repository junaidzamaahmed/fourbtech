import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const UIUX_categories = () => {
  const services = [
    {
      title: "Mobile App Design",
      description:
        "We craft intuitive, high-performing mobile apps tailored for both iOS and Android users.",
      image: "",
    },
    {
      title: "Website Design",
      description:
        "Modern, responsive websites built to engage users and drive results across all devices.",
      image: "",
    },
    {
      title: "Web App Design",
      description:
        "Custom web applications designed for seamless interaction, performance, and scalability.",
      image: "",
    },
    {
      title: "UX Audit & Redesign",
      description:
        "We identify UX pain points and deliver redesigns that enhance user satisfaction and retention.",
      image: "",
    },
    {
      title: "Design System Audit",
      description:
        "Ensure design consistency and efficiency with a detailed review of your design system.",
      image: "",
    },
    {
      title: "Usability Testing",
      description:
        "Real user testing to uncover friction, validate ideas, and optimize the user experience.",
      image: "",
    },
  ];

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Design Services That Solves, Not Just Looks Good!
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            We Don&apos;t Just Design For Beauty — We Design For Impact. Every
            Click, Scroll, And Interaction is Backed By UX Logic And User
            Psychology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="h-full border-none shadow-none transition-shadow duration-300 hover:shadow-lg hover:border-2 hover:border-black cursor-pointer"
            >
              <CardHeader>
                {service.image ? (
                  <Image
                    fill
                    src={service.image}
                    alt={service.title}
                    className="mb-4 h-20 w-20 rounded-md object-cover"
                  />
                ) : (
                  <div className="mb-4 h-60 w-full rounded-md bg-gray-200"></div>
                )}

                <CardTitle className="text-xl font-semibold text-gray-900">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UIUX_categories;
