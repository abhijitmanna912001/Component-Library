import { cva } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  size?: "small" | "medium" | "large";
  variant?: "default" | "primary" | "secondary";
  disabled?: boolean;
}

const paginationStyles = cva("flex items-center space-x-2", {
  variants: {
    size: { small: "text-sm", medium: "text-base", large: "text-lg" },
    variant: {
      default: "bg-gray-100 text-gray-800 hover:bg-gray-200",
      primary: "bg-blue-500 text-white hover:bg-blue-600",
      secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    },
    disabled: { true: "bg-gray-200 text-gray-400 cursor-not-allowed" },
  },
  defaultVariants: { size: "medium", variant: "default", disabled: false },
});

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  size,
  variant,
  disabled,
}: PaginationProps) => {
  const mergedClassNames = twMerge(
    paginationStyles({ size, variant, disabled })
  );

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          onClick={() => handlePageChange(i)}
          disabled={disabled}
          className={`px-4 py-2 rounded ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-800"
          }`}
          key={i}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className={mergedClassNames}>
      <button
        className="px-4 py-2 rounded"
        onClick={handlePrevious}
        disabled={currentPage === 1 || disabled}
      >
        &lt; Prev
      </button>
      {renderPageNumbers()}
      <button
        className="px-4 py-2 rounded"
        onClick={handleNext}
        disabled={currentPage === totalPages || disabled}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
