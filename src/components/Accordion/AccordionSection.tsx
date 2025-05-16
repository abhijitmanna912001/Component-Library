import { cva } from "class-variance-authority";
import React, { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface AccordionSectionProps {
  children: ReactNode;
  title: string;
  variant?: "default" | "bordered";
}

const accordionSectionStyles = cva("p-4", {
  variants: {
    variant: { default: "bg-gray-100", bordered: "border-b border-gray-300" },
  },
  defaultVariants: { variant: "default" },
});

const AccordionSection = ({
  children,
  title,
  variant,
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={twMerge(accordionSectionStyles({ variant }))}>
      <button
        type="button"
        className="flex justify-between items-center w-full cursor-pointer focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2 className="text-left">{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
        {isOpen && <div className="mt-2">{children}</div>}
      </button>
    </div>
  );
};

export default AccordionSection;
