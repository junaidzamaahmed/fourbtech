"use client"

import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { cn } from "@/lib/utils"

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1)
  const cols = new Array(100).fill(1)

  const hoverColor = "#5484be" // A light blue color (Tailwind blue-200)

  const boxRefs = useRef<(HTMLDivElement | null)[][]>([])

  useEffect(() => {
    boxRefs.current = Array(rows.length)
      .fill(null)
      .map(() => Array(cols.length).fill(null))
  }, [rows.length, cols.length])

  const handleMouseEnter = (rowIdx: number, colIdx: number) => {
    const box = boxRefs.current[rowIdx]?.[colIdx]
    if (box) {
      gsap.to(box, {
        backgroundColor: hoverColor,
        duration: 0.3,
        ease: "power1.out",
      })
    }
  }

  const handleMouseLeave = (rowIdx: number, colIdx: number) => {
    const box = boxRefs.current[rowIdx]?.[colIdx]
    if (box) {
      gsap.to(box, {
        backgroundColor: "transparent",
        duration: 0.5,
        ease: "power1.out",
      })
    }
  }

  return (
    <div className="h-full w-full overflow-hidden bg-white max-w-screen min-h-screen">
      <div
        style={{
          // Adjusted translate to bring the grid more into view
          transform: `translate(0%,0%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        }}
        className={cn(
          // Centered positioning for the transformed grid container
          "absolute inset-0 flex items-center justify-center z-0 overflow-hidden",
          className,
        )}
        {...rest}
      >
        {rows.map((_, i) => (
          <div key={`row` + i} className="relative h-8 w-16 border-l border-slate-700">
            {cols.map((_, j) => (
              <div
                key={`col` + j}
                ref={(el) => {
                  if (boxRefs.current[i]) {
                    boxRefs.current[i][j] = el
                  }
                }}
                onMouseEnter={() => handleMouseEnter(i, j)}
                onMouseLeave={() => handleMouseLeave(i, j)}
                className="relative h-8 w-16 border-t border-r border-slate-700/60 bg-transparent"
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-blue-300"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export const Boxes = React.memo(BoxesCore)
