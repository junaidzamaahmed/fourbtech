"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

interface ImageProps {
  id: number;
  src: StaticImageData;
  alt: string;
  title?: string;
  link?: string;
  description?: string;
}

export const FadingPhotoSlider = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  images = [],
  height = "400",
  width = "400",
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  images?: ImageProps[];
  height?: string;
  width?: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [start, setStart] = useState(false);
  const originalContentWidthRef = useRef(0); // Ref to store the width of the original content

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
      // Capture the scrollWidth of the original content before duplication
      originalContentWidthRef.current = scrollerRef.current.scrollWidth;

      const scrollerContent = Array.from(scrollerRef.current.children);
      // Duplicate items for seamless loop
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      setStart(true);
      // Small delay to ensure DOM is updated before creating animation
      setTimeout(() => {
        createGSAPAnimation();
      }, 10);
    }
  }

  function createGSAPAnimation() {
    if (!scrollerRef.current) return;

    // Kill existing timeline to prevent multiple animations
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    const duration = getAnimationDuration();
    let startX: number;
    let endX: number;

    if (direction === "left") {
      startX = 0;
      endX = -originalContentWidthRef.current;
    } else {
      // For right direction, start at negative width and animate to 0
      startX = -originalContentWidthRef.current;
      endX = 0;
    }

    // Create GSAP timeline
    timelineRef.current = gsap.timeline({ repeat: -1 });

    // Set initial position
    gsap.set(scrollerRef.current, { x: startX });

    // Animate to the target position for a seamless loop
    timelineRef.current.to(scrollerRef.current, {
      x: endX,
      duration: duration,
      ease: "none",
    });
  }

  function updateAnimation() {
    if (timelineRef.current && scrollerRef.current) {
      const duration = getAnimationDuration();
      let startX: number;
      let endX: number;

      if (direction === "left") {
        startX = 0;
        endX = -originalContentWidthRef.current;
      } else {
        startX = -originalContentWidthRef.current;
        endX = 0;
      }

      // Update the timeline with new parameters
      timelineRef.current.clear();
      gsap.set(scrollerRef.current, { x: startX }); // Reset position before animating
      timelineRef.current.to(scrollerRef.current, {
        x: endX,
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
        "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul
        ref={scrollerRef}
        className={cn("flex shrink-0 flex-nowrap gap-4 py-4")}
      >
        {images.map(({ id, src, alt, link }) => (
          <li key={id}>
            <Link href={link || "/"} className="flex-shrink-0">
              <div className="text-h1-color marquee-item mx-4 flex items-center md:mx-10">
                <div
                  className={`relative h-[${height}px] w-[${width}px] overflow-hidden rounded-lg sm:h-[250px] sm:w-[400px] md:h-[300px] md:w-[500px]`}
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={alt}
                    fill
                    className="object-cover"
                  />
                  <div className="bg-opacity-50 absolute inset-0 flex items-center justify-center text-white ">
                    {alt}
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
