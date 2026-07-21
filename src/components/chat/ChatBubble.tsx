import React from "react";
import { motion } from "framer-motion";

interface ChatBubbleProps {
  message: string;
  sender: "user" | "admin";
  time?: string;
}


export default function ChatBubble({
  message,
  sender,
  time = "12:30",
}: ChatBubbleProps) {


  const isAdmin = sender === "admin";


  return (
    <motion.div
      initial={{
        opacity:0,
        x:isAdmin ? 50 : -50,
        y:20
      }}
      animate={{
        opacity:1,
        x:0,
        y:0
      }}
      transition={{
        duration:.35
      }}
      className={`
        w-full
        flex
        ${isAdmin ? "justify-start" : "justify-end"}
      `}
    >

      <div
        className={`
          relative
          max-w-[75%]
          px-6
          py-4
          rounded-2xl
          text-white
          font-bold
          text-lg
          shadow-lg

          ${
            isAdmin
            ?
            "bg-[#44414F] rounded-tr-none"
            :
            "bg-[#10005C] rounded-tl-none"
          }
        `}
      >

        <p className="leading-8 text-right">
          {message}
        </p>


        <span
          className="
          block
          text-xs
          text-white/60
          mt-2
          text-left
          "
        >
          {time}
        </span>


        </div>


    </motion.div>
  );
}