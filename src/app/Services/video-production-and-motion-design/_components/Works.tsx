"use client";

import Image from "next/image";
import { useState } from "react";

const VideoPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Brand Films",
    "UI Motion",
    "3D Animations",
    "Explainers",
  ];

  const works = [
    {
      id: 1,
      title: "Tech Startup Brand Film",
      category: "Brand Films",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces",
    },
    {
      id: 2,
      title: "SaaS Product UI Animation",
      category: "UI Motion",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "3D Product Visualization",
      category: "3D Animations",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Explainer Video For FinTech",
      category: "Explainers",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "E-Commerce Motion Graphics",
      category: "UI Motion",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Corporate Brand Story",
      category: "Brand Films",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
    },
  ];

  const filteredWorks =
    activeCategory === "All"
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <div className="main-container min-h-screen px-8 py-16">
      {/* Header */}
      <div className="mx-auto mb-16 max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Comprehensive Video Production & Motion Design Works
        </h1>

        {/* Category Filter */}
        <div className="mb-12 flex justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-accent-hover text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Works Grid */}
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="group relative transform cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority={work.id === 1}
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="absolute bg-gradient-to-t from-black to-transparent right-0 bottom-0 left-0 p-6 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors duration-20">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-300">click to view showreel</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPortfolio;
