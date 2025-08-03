import {
  File,
  Globe,
  Link,
  LocationEdit,
  LucideProps,
  Settings,
  Tag,
} from "lucide-react";
import React from "react";

const SeoServiceData: SeoServiceProps[] = [
  {
    icon: Settings,
    title: "Technical SEO",
    description:
      "Ensures your website is optimized for crawling, indexing, and speed. Includes fixing errors, mobile responsiveness, HTTPS security, and a clean site structure to build trust with search engines and users.",
  },
  {
    icon: File,
    title: "On-Page SEO",
    description:
      "Optimizes your website's content, meta tags, headers, images, and URLs to help search engines understand your pages and improve rankings for relevant searches.",
  },
  {
    icon: Globe,
    title: "Off-Page SEO",
    description:
      "Boosts your site's authority through backlinks, brand mentions, citations, influencer outreach, and social engagement to improve trust and visibility in search results.",
  },
  {
    icon: Tag,
    title: "Keyword Research",
    description:
      "Identifies high-value search terms your audience uses. Guides content strategy and helps attract the right traffic by targeting what users are actively searching for.",
  },
  {
    icon: Link,
    title: "Link Building",
    description:
      "Earns backlinks from credible, relevant websites to improve your site's authority. Strong backlinks often give your content a ranking edge over competitors.",
  },
  {
    icon: LocationEdit,
    title: "Citation Building",
    description:
      "Creates consistent listings of your business name, address, and phone across directories. Essential for improving local SEO and appearing in Google's local pack.",
  },
];

export default function SeoServiceFromUS() {
  return (
    <section className="main-container flex flex-col items-center justify-between !pb-10 lg:!pb-32">
      <div className="flex flex-col items-center gap-1 my-10">
        <h2>SEO Services You&apos;ll Get From Us</h2>
        <p>
          Comprehensive SEO solutions tailored to your business needs and goals.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {SeoServiceData.map((dataItem, index) => (
          <SeoService key={index} {...dataItem} />
        ))}
      </div>
    </section>
  );
}

type SeoServiceProps = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
};

function SeoService({ title, description, icon: Icon }: SeoServiceProps) {
  return (
    <div className="rounded-lg border-[1px] border-gray-500/50 p-4 transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col items-start gap-2">
        <div className="text-accent-hover">
          <Icon size={28} />
        </div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 capitalize">{description}</p>
      </div>
    </div>
  );
}
