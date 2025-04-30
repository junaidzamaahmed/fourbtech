"use client";

import { useState } from "react";

export default function FaqSeo() {
  const [activeQuestion, setActiveQuestion] = useState(
    "What Does SEO Involve?",
  );

  const faqs = [
    {
      question: "What Does SEO Involve?",
      answer: (
        <div className="space-y-6">
          <p>
            As more people rely on search engines to find information, SEO has
            become more competitive and complex. Outdated practices like keyword
            stuffing no longer work - instead, SEO today involves a wide range
            of strategic elements that establish a website&apos;s authority,
            relevance, and visibility.
          </p>
          <p>Here are some of the core components of effective SEO:</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Search Engine Results Page (SERP) Rankings
              </h3>
              <p className="pl-4">
                SERPs are the pages that appear when someone performs a search
                on platforms like Google or Bing. According to industry data,
                websites listed on the first page of Google capture around 71%—
                and in some cases up to 92%—of search traffic clicks. In
                contrast, results on the second page receive only about 6% of
                clicks. To gain meaningful visibility and attract more visitors,
                itapos;s crucial to rank on the first page of search results.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Organic Traffic
              </h3>
              <p className="pl-4">
                Organic traffic refers to visitors who land on your website
                through unpaid search results, as opposed to clicking on paid
                advertisements. This type of traffic is considered highly
                valuable because it&aos;s earned rather than bought—and it
                doesn&aos;t cost you money with each click. SEO focuses on
                increasing this type of unbiased search engine-recommended
                traffic, which tends to be more sustainable and trustworthy.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Quality Of Traffic
              </h3>
              <p className="pl-4">
                Attracting more visitors is only valuable if those users are
                genuinely interested in your offerings. SEO helps connect your
                business with people who are actively searching for what you
                provide. This improves the quality of traffic to your site and
                boosts the likelihood of conversions, turning visitors into
                customers.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Quantity Of Traffic
              </h3>
              <p className="pl-4">
                While targeting the right audience is vital, bringing in a
                higher volume of relevant visitors is equally important. Our SEO
                strategies are designed to drive both high-quality and
                high-quantity traffic, helping your business grow its reach and
                generate consistent leads.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // You can add more FAQ items here
  ];

  return (
    <div className="main-container">
      <h2 className="mb-10 text-center text-2xl font-bold">FAQ SEO</h2>
      <div className="flex ">
        <div className="w-full px-4 md:w-1/3 -mr-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className={`cursor-pointer p-4 ${activeQuestion === faq.question ? "bg-dark-bg-primary/10 border-r-4 border-blue-500" : ""}`}
              onClick={() => setActiveQuestion(faq.question)}
            >
              <h3 className="font-medium">{faq.question}</h3>
            </div>
          ))}
        </div>
        <div className="border-dark-bg/20 w-full border-l-4 px-4 md:w-2/3 md:px-6">
          <h3 className="font-medium">{faqs[0].question}</h3>
          {faqs.find((faq) => faq.question === activeQuestion)?.answer}
        </div>
      </div>
    </div>
  );
}
