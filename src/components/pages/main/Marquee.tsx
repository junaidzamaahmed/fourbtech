"use client"
import { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import Image from "next/image"
import { services } from "@/constants"

export const MarqueeCard = ({
  title,
  icon,
}: {
  title: string
  icon: string
}) => {
  return (
    <div className="text-h1-color mx-10 flex items-center gap-2 marquee-item">
      <div className="relative h-8 w-8">
        <Image
          src={icon || "/placeholder.svg"}
          alt={title}
          fill
          className="bg-dark-bg-primary/10 rounded-full object-cover p-2"
        />
      </div>
      <h3 className="text-h1-color">{title}</h3>
    </div>
  )
}

interface MarqueeProps {
  speed?: number
  direction?: "left" | "right"
}

// Simple debounce function
function debounce(func: Function, wait: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return function executedFunction(...args: any[]) {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(later, wait)
  }
}

export default function Marquee({ speed = 20, direction = "left" }: MarqueeProps = {}) {
  const marqueeRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const [itemsCount, setItemsCount] = useState(2) // Start with 2 copies

  // Function to setup the animation
  const setupAnimation = useCallback(() => {
    if (!marqueeRef.current) return

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill()
    }

    const items = marqueeRef.current.querySelectorAll(".marquee-item")
    if (!items || items.length === 0) return

    // Get the width of a single set of items
    const singleSetWidth = marqueeRef.current.scrollWidth / itemsCount

    // Determine if we need more copies for a seamless loop
    const containerWidth = marqueeRef.current.parentElement?.clientWidth || window.innerWidth

    if (singleSetWidth < containerWidth * 2 && itemsCount < 4) {
      // We need more copies to ensure a seamless loop
      setItemsCount((prev) => prev + 1)
      return // Will trigger a re-render and call this function again
    }

    // Set the direction
    const xValue = direction === "left" ? `-=${singleSetWidth}` : `+=${singleSetWidth}`

    // Create the animation
    animationRef.current = gsap.to(items, {
      x: xValue,
      duration: speed,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          // Ensure the modulo operation works correctly for both directions
          const offset = Number.parseFloat(x) % singleSetWidth
          return direction === "left" ? offset : offset
        }),
      },
    })
  }, [direction, itemsCount, speed])

  // Setup animation on mount and when dependencies change
  useEffect(() => {
    setupAnimation()

    // Create debounced resize handler
    const debouncedResize = debounce(() => {
      setupAnimation()
    }, 200)

    window.addEventListener("resize", debouncedResize)

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
      window.removeEventListener("resize", debouncedResize)
    }
  }, [speed, direction, itemsCount, setupAnimation])

  // Create multiple copies of items for a seamless loop
  const marqueeItems = Array(itemsCount).fill(services).flat()

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex whitespace-nowrap" ref={marqueeRef}>
        {marqueeItems.map((item, index) => (
          <MarqueeCard title={item.title} key={`marquee-${index}`} icon={item.icon} />
        ))}
      </div>
    </div>
  )
}
