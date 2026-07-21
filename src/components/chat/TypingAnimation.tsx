import React from "react";
import { motion } from "framer-motion";

export default function TypingAnimation() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="flex justify-start w-full"
    >
      <div
        className="
        bg-[#44414F]
        rounded-2xl
        rounded-tr-none
        px-6
        py-4
        shadow-lg
        "
      >
        <div className="flex gap-2 items-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-white"
              animate={{
                y: [0, -7, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 0.7,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}