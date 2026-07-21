import React from "react";
import { motion } from "framer-motion";

interface ChatInfoCardProps {
  title: string;
  description: string;
  variant?: "dark" | "light";
}

export default function ChatInfoCard({
  title,
  description,
  variant = "dark",
}: ChatInfoCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className={`
        relative
        w-full
        max-w-[620px]
        min-h-[220px]
        rounded-xl
        border-[3px]
        border-[#1A0873]
        p-8
        flex
        items-center
        justify-center
        text-center
        shadow-lg

        ${
          variant === "dark"
            ? "bg-[#0A003B] text-white"
            : "bg-[#4B4B4B] text-white"
        }

        md:rounded-xl
      `}
    >


      <div className="flex flex-col gap-6">
        <h2
          className="
          text-2xl
          md:text-3xl
          font-black
          "
        >
          {title}
        </h2>

        <p
          className="
          text-lg
          md:text-xl
          font-bold
          leading-10
          opacity-95
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}