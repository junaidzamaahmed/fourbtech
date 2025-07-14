import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly"
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly"
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly"
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: "weekly"
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/mobile-apps`,
      lastModified: new Date(),
      changeFrequency: "weekly"
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/web-development`,
      lastModified: new Date(),
      changeFrequency: "weekly"
    },
  ];
}
