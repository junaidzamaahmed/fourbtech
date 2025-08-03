"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type MenuItem = {
  id: string;
  title: string;
  content: {
    title: string;
    subtitle: string;
    description: string;
  };
  subItems?: {
    id: string;
    title: string;
  }[];
};

const menuData: MenuItem[] = [
  {
    id: "video-production",
    title: "VIDEO PRODUCTION",
    content: {
      title: "MOTION DESIGN",
      subtitle:
        "Elevate your brand with cinematic storytelling that resonates with your audience",
      description:
        "Tell the story behind your brand with high-impact, emotionally driven visuals that connect deeply with your target audience. Our corporate brand films go beyond basic introductions—they capture your company's mission, culture, and values through cinematic storytelling. Whether you're launching a campaign, celebrating a milestone, or sharing your journey, we craft powerful narratives that leave lasting impressions and build stronger brand identity.",
    },
    subItems: [
      { id: "corporate-brand-films", title: "Corporate Brand Films" },
      { id: "product-showcases", title: "Product Showcases" },
      { id: "explainer-videos", title: "Explainer Videos" },
    ],
  },
  {
    id: "other-service",
    title: "OTHER SERVICE",
    content: {
      title: "OTHER TITLE",
      subtitle: "This would be another service description",
      description:
        "Content for another service would go here with similar structure but different text.",
    },
    subItems: [
      { id: "sub-service-1", title: "Sub Service 1" },
      { id: "sub-service-2", title: "Sub Service 2" },
    ],
  },
];

const WeAreCapableOfSection = () => {
  const [mainTab, setMainTab] = useState(menuData[0].id);
  const [subTab, setSubTab] = useState(menuData[0].subItems?.[0].id || "");

  const currentMainItem =
    menuData.find((item) => item.id === mainTab) || menuData[0];

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sub Menu */}
      <div className="w-64 border-r border-gray-200 bg-gray-100 p-6">
        <h2 className="mb-8 text-2xl font-bold">{currentMainItem.title}</h2>
        <div className="space-y-4">
          {currentMainItem.subItems?.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer rounded-lg p-3 ${subTab === item.id ? "bg-gray-200" : "hover:bg-gray-100"}`}
              onClick={() => setSubTab(item.id)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Main Menu */}
        <Tabs
          value={mainTab}
          onValueChange={setMainTab}
          className="border-b border-gray-200"
        >
          <TabsList className="h-auto bg-white px-8 py-6">
            {menuData.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="rounded-none text-lg data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:bg-white data-[state=active]:shadow-none"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Content Area */}
        <div className="overflow-y-auto p-8">
          <div className="max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold">
              {currentMainItem.content.title}
            </h2>
            <h3 className="mb-4 text-xl font-semibold">
              {currentMainItem.content.subtitle}
            </h3>
            <p className="leading-relaxed text-gray-700">
              {currentMainItem.content.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreCapableOfSection;
