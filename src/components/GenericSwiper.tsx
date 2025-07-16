"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GenericSwiperProps {
  children: ReactNode[];
  autoPlay?: boolean;
  autoPlayDelay?: number;
  loop?: boolean;
  slidesPerView?: number;
  spaceBetween?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  draggable?: boolean; // Add this new prop
  className?: string;
  slideClassName?: string;
  navigationClassName?: string;
  paginationClassName?: string;
  onSlideChange?: (activeIndex: number) => void;
}

export const GenericSwiper = ({
  children,
  autoPlay = false,
  autoPlayDelay = 3000,
  loop = true,
  slidesPerView = 1,
  spaceBetween = 20,
  showNavigation = false,
  showPagination = true,
  draggable = true, // Add this line
  className,
  slideClassName,
  navigationClassName,
  paginationClassName,
  onSlideChange,
}: GenericSwiperProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState(0);
  const dragThreshold = 50; // Minimum drag distance to trigger slide change

  useEffect(() => {
    setTotalSlides(Math.floor(children.length / slidesPerView));
  }, [children.length, slidesPerView]);

  useEffect(() => {
    if (autoPlay) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [autoPlay, autoPlayDelay, currentIndex]);

  useEffect(() => {
    onSlideChange?.(currentIndex);
  }, [currentIndex, onSlideChange]);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setTimeout(() => {
      goToNext();
    }, autoPlayDelay);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearTimeout(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const goToSlide = (index: number) => {
    if (isAnimatingRef.current || !wrapperRef.current) return;

    let targetIndex = index;

    // Handle loop logic
    if (loop) {
      if (index < 0) {
        targetIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        targetIndex = 0;
      }
    } else {
      targetIndex = Math.max(0, Math.min(index, totalSlides - 1));
    }

    if (targetIndex === currentIndex) return;

    isAnimatingRef.current = true;

    const slideWidth = containerRef.current?.offsetWidth || 0;
    const translateX = -(targetIndex * (slideWidth + spaceBetween));

    gsap.to(wrapperRef.current, {
      x: translateX,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        setCurrentIndex(targetIndex);
        isAnimatingRef.current = false;
      },
    });
  };

  const goToPrev = () => {
    const prevIndex = loop
      ? currentIndex === 0
        ? totalSlides - 1
        : currentIndex - 1
      : Math.max(0, currentIndex - 1);
    goToSlide(prevIndex);
  };

  const goToNext = () => {
    const nextIndex = loop
      ? currentIndex === totalSlides - 1
        ? 0
        : currentIndex + 1
      : Math.min(totalSlides - 1, currentIndex + 1);
    goToSlide(nextIndex);
  };

  const handleDragStart = (clientX: number, clientY: number) => {
    if (!draggable || isAnimatingRef.current) return;

    setIsDragging(true);
    setDragStart({ x: clientX, y: clientY });
    setDragOffset(0);

    if (autoPlay) stopAutoPlay();
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!isDragging || !draggable) return;

    const deltaX = clientX - dragStart.x;
    const deltaY = clientY - dragStart.y;

    // Only drag horizontally if the horizontal movement is greater than vertical
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setDragOffset(deltaX);

      if (wrapperRef.current) {
        const slideWidth = containerRef.current?.offsetWidth || 0;
        const currentTranslateX = -(currentIndex * (slideWidth + spaceBetween));
        gsap.set(wrapperRef.current, {
          x: currentTranslateX + deltaX,
        });
      }
    }
  };

  const handleDragEnd = () => {
    if (!isDragging || !draggable) return;

    setIsDragging(false);

    // Determine if we should change slides based on drag distance
    if (Math.abs(dragOffset) > dragThreshold) {
      if (dragOffset > 0) {
        // Dragged right, go to previous slide
        goToPrev();
      } else {
        // Dragged left, go to next slide
        goToNext();
      }
    } else {
      // Snap back to current slide
      if (wrapperRef.current) {
        const slideWidth = containerRef.current?.offsetWidth || 0;
        const translateX = -(currentIndex * (slideWidth + spaceBetween));
        gsap.to(wrapperRef.current, {
          x: translateX,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }

    setDragOffset(0);

    if (autoPlay) startAutoPlay();
  };

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseEnter = () => {
    if (autoPlay && !isDragging) stopAutoPlay();
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleDragMove(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
    >
      {/* Main swiper container */}
      <div
        ref={containerRef}
        className={cn(
          "overflow-hidden",
          draggable ? "cursor-grab active:cursor-grabbing" : "",
        )}
        onMouseDown={draggable ? handleMouseDown : undefined}
        onMouseMove={draggable ? handleMouseMove : undefined}
        onMouseUp={draggable ? handleMouseUp : undefined}
        onMouseLeave={draggable ? handleMouseEnter : handleMouseEnter}
        onTouchStart={draggable ? handleTouchStart : undefined}
        onTouchMove={draggable ? handleTouchMove : undefined}
        onTouchEnd={draggable ? handleTouchEnd : undefined}
        style={{ touchAction: draggable ? "pan-y" : "auto" }}
      >
        <div
          ref={wrapperRef}
          className={cn(
            "flex",
            !isDragging && "transition-transform duration-500 ease-out",
          )}
          style={{
            gap: `${spaceBetween}px`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className={cn("flex-shrink-0", slideClassName)}
              style={{
                width: `calc((100% - ${(slidesPerView - 1) * spaceBetween}px) / ${slidesPerView})`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {showNavigation && (
        <>
          <button
            onClick={goToPrev}
            disabled={!loop && currentIndex === 0}
            className={cn(
              "absolute top-1/2 left-4 z-10 -translate-y-1/2",
              "rounded-full bg-white/90 p-2 shadow-lg hover:bg-white",
              "transition-all duration-200 hover:scale-110",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
              navigationClassName,
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            disabled={!loop && currentIndex === totalSlides - 1}
            className={cn(
              "absolute top-1/2 right-4 z-10 -translate-y-1/2",
              "rounded-full bg-white/90 p-2 shadow-lg hover:bg-white",
              "transition-all duration-200 hover:scale-110",
              "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100",
              navigationClassName,
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </>
      )}

      {/* Pagination dots */}
      {showPagination && (
        <div
          className={cn(
            "mt-4 flex justify-center space-x-2",
            paginationClassName,
          )}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-200",
                currentIndex === index
                  ? "scale-110 bg-blue-600"
                  : "hover:bg-accent-hover bg-gray-300 hover:scale-105",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Helper component for individual swiper slides
export const SwiperSlide = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <div className={cn("h-full w-full", className)}>{children}</div>;
