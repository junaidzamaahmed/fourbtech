"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import Image from "next/image";

type MenuItem = {
  id: string;
  title: string;
  subItems?: {
    id: string;
    title: string;
    content: {
      title: string;
      subtitle: string;
      description: string;
      image: string;
    };
  }[];
};

const menuData: MenuItem[] = [
  {
    id: "video-production",
    title: "VIDEO PRODUCTION",
    subItems: [
      {
        id: "corporate-brand-films",
        title: "Corporate Brand Films",
        content: {
          title:
            "Elevate your brand with cinematic storytelling that resonates with your audience",
          subtitle: "",
          description:
            "Tell the story behind your brand with high-impact, emotionally driven visuals that connect deeply with your target audience. Our corporate brand films go beyond basic introductions—they capture your company’s mission, culture, and values through cinematic storytelling. Whether you’re launching a campaign, celebrating a milestone, or sharing your journey, we craft powerful narratives that leave lasting impressions and build stronger brand identity.",
          image:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=300&fit=crop",
        },
      },
      {
        id: "product-showcases",
        title: "Product Showcases",
        content: {
          title:
            "Highlight your product's features and benefits with stunning visuals",
          subtitle: "",
          description:
            "Bring your products to life with visually captivating videos designed to demonstrate functionality, aesthetics, and value. Our product showcase videos combine sleek cinematography, professional lighting, and precise editing to highlight every feature and benefit. Whether for e-commerce, presentations, or ads, we create visuals that drive engagement, build trust, and boost conversions by showing your product in its best light.",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
        },
      },
      {
        id: "explainer-videos",
        title: "Explainer Videos",
        content: {
          title: "Simplify complex ideas with clear, engaging explanations",
          subtitle: "",
          description:
            "Break down intricate concepts into easy-to-understand visuals that educate, inform, and persuade your audience. Using a blend of motion graphics, voiceover, and storytelling, our explainer videos make your message accessible and memorable. Perfect for apps, services, or internal training, these videos help viewers grasp your value proposition quickly—turning confusion into clarity and interest into action.",
          image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        },
      },
    ],
  },
  {
    id: "motion-design",
    title: "MOTION DESIGN",
    subItems: [
      {
        id: "ui-ux-animations",
        title: "UI/UX Animations",
        content: {
          title:
            "Bring your digital interfaces to life with fluid, intuitive animations",
          subtitle: "",
          description:
            "Enhance your app or website with motion that feels natural, guides users, and improves the overall experience. From subtle hover effects to dynamic transitions and loading animations, UI/UX animation creates a seamless flow that not only looks beautiful but also makes your digital product more usable and engaging. Every interaction is crafted with intent—bringing clarity, personality, and delight to every click and scroll.",
          image:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
        },
      },
      {
        id: "3d-product-visualizations",
        title: "3D Product Visualizations",
        content: {
          title: "Showcase your products with immersive 3D animations",
          subtitle: "",
          description:
            "Transform your product presentations into stunning, lifelike 3D experiences. Whether it’s showcasing features, materials, or functionality, our 3D product animations offer a dynamic and detailed look that traditional photos or videos can’t match. Perfect for marketing, e-commerce, investor decks, or industrial design, these visuals allow your audience to interact, explore, and understand your product from every angle—virtually.",
          image:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
        },
      },
      {
        id: "logo-brand-animations",
        title: "Logo & Brand Animations",
        content: {
          title: "Add movement and personality to your brand identity",
          subtitle: "",
          description:
            "Make a lasting impression by animating your logo, taglines, or brand elements. Motion breathes life into your identity, making it more memorable, expressive, and dynamic. Whether it’s for video intros, social media, or product launches, our brand animations reinforce your identity with visual energy and flair—perfect for modern, digital-first branding.",
          image:
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
        },
      },
    ],
  },
];

const WeAreCapableOfSection = () => {
  const [mainTab, setMainTab] = useState(menuData[0].id);
  const currentMainItem =
    menuData.find((item) => item.id === mainTab) || menuData[0];
  const [subTab, setSubTab] = useState(currentMainItem.subItems?.[0]?.id || "");

  // Update subTab when mainTab changes
  useEffect(() => {
    setSubTab(currentMainItem.subItems?.[0]?.id || "");
  }, [mainTab, currentMainItem.subItems]);

  const currentSubItem = currentMainItem.subItems?.find(
    (item) => item.id === subTab,
  );

  return (
    <div className="main-container mx-auto my-30">
      {/* Header */}
      <div>
        <div className="py-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            We Are Capable Of
          </h1>
        </div>

        {/* Top Main Menu */}
        <Tabs value={mainTab} onValueChange={setMainTab}>
          <TabsList className="h-auto w-full justify-center bg-transparent">
            {menuData.map((item) => (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className="data-[state=active]:text-accent-hover py-6 text-xl uppercase transition-colors hover:text-blue-800 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex">
        {/* Left Sub Menu */}
        <div className="w-80">
          <div className="p-6">
            <div className="space-y-2">
              {currentMainItem.subItems?.map((item) => (
                <button
                  key={item.id}
                  className={`w-full rounded-lg border border-gray-400 px-4 py-4 text-center font-medium transition-colors ${
                    subTab === item.id
                      ? "bg-accent-hover text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setSubTab(item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="p-8">
            {currentSubItem ? (
              <div className="flex items-start gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={currentSubItem.content.image}
                    alt={currentSubItem.content.title}
                    width={320}
                    height={240}
                    className="h-60 w-80 rounded-lg bg-gray-200 object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='18'%3EImage%3C/text%3E%3C/svg%3E";
                    }}
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="max-w-2xl flex-1">
                  <h2 className="mb-6 text-2xl leading-tight font-bold text-gray-900">
                    {currentSubItem.content.title}
                  </h2>
                  {currentSubItem.content.subtitle && (
                    <h3 className="mb-4 text-xl font-semibold text-gray-800">
                      {currentSubItem.content.subtitle}
                    </h3>
                  )}
                  <p className="text-base leading-relaxed text-gray-600">
                    {currentSubItem.content.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="py-16 text-center">
                <p className="text-lg text-gray-500">
                  Select a service to view details.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreCapableOfSection;
