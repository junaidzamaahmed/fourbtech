"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import Image from "next/image"
import { aboutLogo } from "@/constants"

export const MarqueeCard = ({ icon }: { icon: string }) => {
  return (
    <div className="marquee-item flex items-center gap-28">
      <div className="relative">
        <Image src={icon || "/placeholder.svg"} alt="logo" width={350} height={400} className="object-cover" />
      </div>
    </div>
  )
}

interface MarqueeProps {
  speed?: number
  direction?: "left" | "right"
}

export default function AboutMarquee({ speed = 20, direction = "left" }: MarqueeProps = {}) {
  const marqueeRef = useRef<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [clones, setClones] = useState(2)

  // Calculate how many clones we need
  useEffect(() => {
    const calculateDimensions = () => {
      if (!marqueeRef.current) return

      const container = marqueeRef.current.parentElement
      if (!container) return

      const containerWidth = container.clientWidth
      setContainerWidth(containerWidth)

      // Get the width of a single item
      const firstItem = marqueeRef.current.querySelector(".marquee-item")
      if (!firstItem) return

      const itemWidth = (firstItem as HTMLElement).offsetWidth
      setItemWidth(itemWidth)

      // Calculate how many clones we need to fill the container at least twice
      // to ensure smooth infinite scrolling
      const itemsNeeded = Math.ceil((containerWidth * 2) / itemWidth)
      setClones(Math.max(itemsNeeded, 2)) // At least 2 clones
    }

    calculateDimensions()

    const handleResize = () => {
      calculateDimensions()
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Set up the animation
  useEffect(() => {
    if (!marqueeRef.current || !itemWidth || !containerWidth) return

    const totalWidth = itemWidth * aboutLogo.length

    // Kill any existing animation
    gsap.killTweensOf(marqueeRef.current)

    // Reset position
    gsap.set(marqueeRef.current, { x: 0 })

    // Create the animation
    gsap.to(marqueeRef.current, {
      x: direction === "left" ? -totalWidth : totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
      onRepeat: () => {
        // Jump back to start when we've moved one full set of items
        gsap.set(marqueeRef.current, { x: 0 })
      },
    })

    return () => {
      gsap.killTweensOf(marqueeRef.current)
    }
  }, [direction, speed, itemWidth, containerWidth])

  // Create multiple copies of items for a seamless loop
  const marqueeItems = Array(clones).fill(aboutLogo).flat()

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex whitespace-nowrap" ref={marqueeRef}>
        {marqueeItems.map((item, index) => (
          <MarqueeCard key={`marquee-${index}`} icon={item} />
        ))}
      </div>
    </div>
  )
}
