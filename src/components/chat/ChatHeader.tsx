import React from "react";
import { motion } from "framer-motion";

interface ChatHeaderProps {
  title?: string;
  description?: string;
}

export default function ChatHeader({
  title = "مشاوره فروش و تعمیرات",
  description = "هر سوالی درباره خرید موبایل، تعمیرات، قیمت روز یا انتخاب بهترین گوشی دارید، کارشناسان موبایل عابد آماده پاسخگویی هستند.",
}: ChatHeaderProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="w-full text-center flex flex-col items-center mb-12"
    >
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: 110,
        }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="h-1 rounded-full bg-[#1702FF] mb-6"
      />

      <h1
        className="
        text-4xl
        md:text-5xl
        font-black
        text-[#1702FF]
        "
      >
        {title}
      </h1>

      <p
        className="
        mt-6
        w-[95%]
        md:w-[70%]
        lg:w-[60%]
        text-gray-700
        font-bold
        leading-9
        text-lg
        "
      >
        {description}
      </p>
    </motion.div>
  );
}