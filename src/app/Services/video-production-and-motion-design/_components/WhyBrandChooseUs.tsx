import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clapperboard, BarChart3, Palette, Rocket } from "lucide-react";

const WhyBrandChooseUs = () => {
  const features = [
    {
      icon: Clapperboard,
      title: "End-To-End Production",
      description:
        "From concept to delivery, we handle every aspect of the production process",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Storytelling",
      description:
        "We create content that not only looks great but drives measurable results",
    },
    {
      icon: Palette,
      title: "Cinematic + Motion Hybrid Expertise",
      description:
        "Unique blend of filmmaking and animation capabilities for versatile content",
    },
    {
      icon: Rocket,
      title: "Built For Engagement & Conversion",
      description:
        "Strategic approach focused on audience engagement and business outcomes",
    },
  ];

  return (
    <section className="main-container px-8 py-20">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-bold mb-4 text-4xl text-gray-900">
            Why Brands Choose Us
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <CardContent>
                  <div>
                    <div className="flex h-16 w-16 rounded-md">
                      <IconComponent
                        className="text-accent-hover h-8 w-8"
                      />
                    </div>
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold">
                    {feature.title}
                  </h3>

                  <p className="leading-relaxed text-gray-600 mt-auto">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyBrandChooseUs;
