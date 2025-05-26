"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/constants";

export const HeroMarqee = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    return () => {
      // Cleanup GSAP timeline on unmount
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    // Update animation when props change
    if (start && timelineRef.current) {
      updateAnimation();
    }
  }, [direction, speed, start]);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items for seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);

      // Small delay to ensure DOM is updated
      setTimeout(() => {
        createGSAPAnimation();
      }, 10);
    }
  }

  function createGSAPAnimation() {
    if (!scrollerRef.current) return;

    // Kill existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const duration = getAnimationDuration();
    const directionMultiplier = direction === "left" ? -1 : 1;

    // Create GSAP timeline
    timelineRef.current = gsap.timeline({ repeat: -1 });

    // Set initial position
    gsap.set(scrollerRef.current, { x: 0 });

    // Animate to -50% (half width) for seamless loop
    timelineRef.current.to(scrollerRef.current, {
      x: `${directionMultiplier * 50}%`,
      duration: duration,
      ease: "none",
    });
  }

  function updateAnimation() {
    if (timelineRef.current && scrollerRef.current) {
      const duration = getAnimationDuration();
      const directionMultiplier = direction === "left" ? -1 : 1;

      // Update the timeline with new parameters
      timelineRef.current.clear();
      timelineRef.current.to(scrollerRef.current, {
        x: `${directionMultiplier * 50}%`,
        duration: duration,
        ease: "none",
      });
    }
  }

  function getAnimationDuration(): number {
    switch (speed) {
      case "fast":
        return 20;
      case "normal":
        return 40;
      case "slow":
        return 80;
      default:
        return 40;
    }
  }

  function handleMouseEnter() {
    if (pauseOnHover && timelineRef.current) {
      timelineRef.current.pause();
    }
  }

  function handleMouseLeave() {
    if (pauseOnHover && timelineRef.current) {
      timelineRef.current.resume();
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul
        ref={scrollerRef}
        className={cn("flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4")}
      >
        {services.map((item, idx) => (
          <li key={idx}>
            <Link href={item.link} className="flex-shrink-0">
              <div className="text-h1-color marquee-item mx-10 flex items-center gap-2">
                <div className="bg-dark-bg-primary/20 flex h-7 w-7 items-center justify-center rounded-full p-[3px] sm:h-8 sm:w-8">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={item.title}
                    width={30}
                    height={30}
                    className="aspect-square object-contain object-center p-1"
                  />
                </div>
                <h3 className="text-h1-color">{item.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
