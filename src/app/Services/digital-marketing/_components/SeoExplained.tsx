import TitleDescCard from '@/components/global/TitleDesc'
import { SEO_Details } from '@/constants'
import React from 'react'

export default function SeoExplained() {
  return (
    <section className="main-container mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {SEO_Details.map((service, index) => (
              <TitleDescCard key={index} {...service} />
            ))}
          </section>
  )
}
