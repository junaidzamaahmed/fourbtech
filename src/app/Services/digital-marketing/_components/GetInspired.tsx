import ArrowButton from '@/components/global/ArrowButton'
import Link from 'next/link'
import React from 'react'

export default function GetInspired() {
  return (
          <section className="main-container flex-center mb-32 flex-col pb-32 text-center *:max-w-[95%]">
        <h2 className="text-h2-color mb-3 text-4xl font-semibold">
          Get Inspired. Get Informed. Get Started.
        </h2>
        <p className="">
          Discover powerful ideas, transparent pricing, and a clear path forward
          to help you achieve real, measurable results.
        </p>
        <Link href={{ pathname: "/", hash: "contact" }}>
          <ArrowButton variant="fill" size={20} left className="!py-5">
            get free seo consultation
          </ArrowButton>
        </Link>
      </section>
  )
}
