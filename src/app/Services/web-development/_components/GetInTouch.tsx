import ArrowButton from '@/components/global/ArrowButton'
import Link from 'next/link'
import React from 'react'

export default function GetInTouch() {
  return (
          <section className="main-container flex-center flex-col !pb-10 lg:!pb-32 text-center *:max-w-[95%]">
        <h2 className="mb-5">
          Our expert team can transform your vision into a cutting-edge web
          application
        </h2>
        <Link href={{ pathname: "/", hash: "contact" }}>
          <ArrowButton variant="fill" size={20} left className="!py-5">
            Get In touch
          </ArrowButton>
        </Link>
      </section>
  )
}
