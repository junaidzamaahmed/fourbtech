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
            As search engines become the go-to resource for finding information, SEO has grown increasingly competitive and complex. Gone are the days of keyword stuffing and outdated tactics—modern SEO focuses on building authority, relevance, and visibility through strategic, data-driven methods.
          </p>
          <p>Here are the core components of effective SEO:</p>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Search Engine Results Page (SERP) Rankings
              </h3>
              <p className="pl-4">
                SERPs are the listings displayed when someone searches on platforms like Google or Bing. Data shows that websites on the first page of Google capture about 71%—and sometimes up to 92%—of all clicks. In comparison, second-page results receive only around 6%. Ranking on the first page is essential to gain meaningful visibility and attract qualified visitors.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Organic Traffic
              </h3>
              <p className="pl-4">
                Organic traffic refers to users who land on your website through unpaid search results. Unlike paid ads, this traffic is earned and doesn&apos;t cost you with each click. SEO focuses on growing this sustainable, high-trust traffic by aligning your content with what people are actively searching for.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Quality Of Traffic
              </h3>
              <p className="pl-4">
                Driving traffic is only effective if the visitors are genuinely interested in what you offer. SEO ensures that your website reaches people who are actively looking for your products or services, increasing the likelihood of engagement and conversions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="flex items-center font-medium">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500"></span>
                Quantity Of Traffic
              </h3>
              <p className="pl-4">
                While attracting the right audience is crucial, scaling that audience is equally important. Our SEO strategies are designed to deliver both quality and volume—bringing in more of the right visitors to grow your brand, increase leads, and drive long-term success.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // You can add more FAQ items here
  ];

  return (
    <div className="main-container !py-24">
      <h2 className="mb-10 text-center font-semibold">FAQ SEO</h2>
      <div className="flex flex-col sm:flex-row">
        <div className="-mr-5 mb-3 w-full sm:mb-0 sm:px-4 md:w-1/3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className={`p-4 ${activeQuestion === faq.question ? "bg-dark-bg-primary/10 border-blue-500 sm:border-r-4" : ""}`}
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
