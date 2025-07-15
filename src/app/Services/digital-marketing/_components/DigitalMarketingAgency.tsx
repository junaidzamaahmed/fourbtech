import ArrowButton from '@/components/global/ArrowButton'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import strategy from "../../../../../public/digital/strategy.png";

export default function DigitalMarketingAgency() {
  return (
          <section className="main-container grid grid-cols-1 gap-12 object-center !pb-32 lg:grid-cols-2">
        <div className="order-1 h-full w-full lg:order-2">
          <Image
            src={strategy}
            width={300}
            height={300}
            className="h-full w-full rounded-xl object-cover"
            alt="Premium SEO Services"
          />
        </div>
        <div className="order-2 flex flex-col items-start justify-center gap-4 md:order-1">
          <h3>Premium SEO Services</h3>
          <h3 className="text-h1-color mb-3 text-4xl font-semibold">
            Digital marketing agency for a service provider
          </h3>
          <p className="text-[clamp(.8rem, 2vw, 1rem)]">
            At Fourbtech Digital Marketing, we specialize in results-focused SEO
            strategies designed to improve your search engine rankings and
            attract high-quality organic traffic to your website. Our
            comprehensive SEO services include detailed site audits, strategic
            keyword research, on-page and technical optimization, authority
            development, citation management, link building, content creation,
            blogging, and more — all aimed at maximizing your online visibility
            and growth.
          </p>
          <div className="">
            <Link href={{ pathname: "/", hash: "contact" }}>
              <ArrowButton variant="blueOutline" right className="!px-6 !py-6">
                Get In touch
              </ArrowButton>
            </Link>
          </div>
        </div>
      </section>
  )
}
