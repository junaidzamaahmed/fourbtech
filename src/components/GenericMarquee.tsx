"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState, useRef, type ReactNode } from "react"
import { gsap } from "gsap"

interface GenericMarqueeProps {
  children: ReactNode
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
  itemClassName?: string
}

export const GenericMarquee = ({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: GenericMarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    addAnimation()
    return () => {
      // Cleanup GSAP timeline on unmount
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [])

  useEffect(() => {
    // Update animation when props change
    if (start && timelineRef.current) {
      updateAnimation()
    }
  }, [direction, speed, start])

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      // Duplicate items for seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      setStart(true)

      // Small delay to ensure DOM is updated
      setTimeout(() => {
        createGSAPAnimation()
      }, 10)
    }
  }

  function createGSAPAnimation() {
    if (!scrollerRef.current) return

    // Kill existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill()
    }

    const duration = getAnimationDuration()

    // Create GSAP timeline
    timelineRef.current = gsap.timeline({ repeat: -1 })

    if (direction === "left") {
      // For left direction: start at 0, move to -50%
      gsap.set(scrollerRef.current, { x: "0%" })
      timelineRef.current.to(scrollerRef.current, {
        x: "-50%",
        duration: duration,
        ease: "none",
      })
    } else {
      // For right direction: start at -50%, move to 0%
      gsap.set(scrollerRef.current, { x: "-50%" })
      timelineRef.current.to(scrollerRef.current, {
        x: "0%",
        duration: duration,
        ease: "none",
      })
    }
  }

  function updateAnimation() {
    if (timelineRef.current && scrollerRef.current) {
      const duration = getAnimationDuration()

      // Update the timeline with new parameters
      timelineRef.current.clear()

      if (direction === "left") {
        // For left direction: start at 0, move to -50%
        gsap.set(scrollerRef.current, { x: "0%" })
        timelineRef.current.to(scrollerRef.current, {
          x: "-50%",
          duration: duration,
          ease: "none",
        })
      } else {
        // For right direction: start at -50%, move to 0%
        gsap.set(scrollerRef.current, { x: "-50%" })
        timelineRef.current.to(scrollerRef.current, {
          x: "0%",
          duration: duration,
          ease: "none",
        })
      }
    }
  }

  function getAnimationDuration(): number {
    switch (speed) {
      case "fast":
        return 20
      case "normal":
        return 40
      case "slow":
        return 80
      default:
        return 40
    }
  }

  function handleMouseEnter() {
    if (pauseOnHover && timelineRef.current) {
      timelineRef.current.pause()
    }
  }

  function handleMouseLeave() {
    if (pauseOnHover && timelineRef.current) {
      timelineRef.current.resume()
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[98vw] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul ref={scrollerRef} className={cn("flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4")}>
        {children}
      </ul>
    </div>
  )
}

// Helper component for individual marquee items
export const MarqueeItem = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => <li className={cn("flex-shrink-0", className)}>{children}</li>
