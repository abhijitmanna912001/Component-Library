import { cva } from "class-variance-authority";
import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  size?: "small" | "medium" | "large";
  shadow?: "none" | "sm" | "md" | "lg";
  border?: "none" | "solid" | "rounded";
  children: ReactNode;
  className?: string;
}

const cardStyles = cva("p-4 rounded-lg bg-white shadow-md", {
  variants: {
    size: { small: "w-64 h-48", medium: "w-80 h-60", large: "w-96 h-72" },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    },
    border: {
      none: "border-none",
      solid: "border border-gray-300",
      rounded: "border-2 border-gray-300 rounded-lg",
    },
  },
  defaultVariants: { size: "medium", shadow: "md", border: "solid" },
});

const Card = ({ size, shadow, border, children, className }: CardProps) => {
  const mergedClassNames = twMerge(
    cardStyles({ size, shadow, border }),
    className
  );
  return <div className={mergedClassNames}>{children}</div>;
};

export default Card;
