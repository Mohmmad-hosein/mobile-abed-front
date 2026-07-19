import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    if (currentPage <= 3) {
      pages.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage,
        "...",
        totalPages
      );
    }
  }

  return (
    <motion.div
    layout
    initial={{
        opacity:0
    }}
    animate={{
        opacity:1
    }} className="flex justify-center mt-16 mb-10">
      <div className="bg-[#0A003B] rounded-xl px-6 py-4 flex items-center gap-4">

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: .95 }}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="flex items-center gap-2 text-white font-black disabled:opacity-40"
        >
          <ChevronLeft size={26} />
          قبلی
        </motion.button>

        <div className="flex gap-2">
          {pages.map((page, index) =>
            page === "..." ? (
              <span
                key={index}
                className="w-10 h-10 flex items-center justify-center text-white font-bold"
              >
                ...
              </span>
            ) : (
              <motion.button
                key={page}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .94 }}
                onClick={() => onPageChange(Number(page))}
                className={`
                  w-10
                  h-10
                  rounded-md
                  font-black
                  transition-all

                  ${
                    currentPage === page
                      ? "bg-white text-[#0A003B]"
                      : "bg-white/20 text-white hover:bg-[#1702FF]"
                  }
                `}
              >
                {page}
              </motion.button>
            )
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: .95 }}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="flex items-center gap-2 text-white font-black disabled:opacity-40"
        >
          بعدی
          <ChevronRight size={26} />
        </motion.button>

      </div>
    </motion.div>
  );
}