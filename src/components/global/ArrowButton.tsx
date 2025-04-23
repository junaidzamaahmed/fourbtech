import React from "react";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { IoIosArrowRoundForward } from "react-icons/io";

const arrowButtonVariants = cva(
  "group rounded-full uppercase transition-all duration-300 flex-center border-2 cursor-pointer font-normal",
  {
    variants: {
      variant: {
        blueOutline:
          "border-accent-hover text-accent-hover hover:text-white hover:bg-accent-hover",
        fill: "border-accent-hover bg-accent-hover text-white hover:bg-transparent hover:text-accent-hover",
        outline:
          "border border-h1-color text-h1-color bg-transparent hover:bg-transparent",
        noOutline: "!border-none hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "blueOutline",
    },
  }
);

interface ArrowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "blueOutline" | "fill" | "outline" | "noOutline";
  left?: boolean;
  right?: boolean;
  size?: number;
  children?: React.ReactNode;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  variant = "blueOutline",
  left,
  right,
  size = 20,
  className,
  children,
  ...props
}) => {
  return (
    <Button
      variant="ghost"
      className={cn(arrowButtonVariants({ variant }), className)}
      {...props}
    >
      {left && (
        <IoIosArrowRoundForward
          className={`size-${size} -mr-4 inline-flex -rotate-45 transition-transform duration-500 group-hover:rotate-0`}
          size={size}
        />
      )}
      <span className="inline-flex items-center justify-center">{children}</span>
      {right && (
        <IoIosArrowRoundForward
          className={`-rotate-45 transition-transform duration-500 group-hover:rotate-0 size-${size} -ml-4`}
          size={size}
        />
      )}
    </Button>
  );
};

export default ArrowButton;
