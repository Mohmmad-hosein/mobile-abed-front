import { motion } from "framer-motion";
import React from "react";

export default function CommentCart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        w-[90%]
        h-[185px]
        flex
        justify-end
        rounded-2xl
        border-[3px]
        border-black
        bg-[#D9D9D9]
        transition-all
      "
    >
      {/* خط نور */}
      <motion.div
        className="
          absolute
          bottom-0
          left-[-100%]
          h-[4px]
          w-[100%]
          bg-[#1A0873]
        "
        whileHover={{
          left: "100%",
        }}
        transition={{
          duration: 0.8,
        }}
      />

      <div className="w-[85%] h-full flex flex-wrap justify-end p-10">
        <motion.h1
          className="
            w-[250px]
            h-10
            text-end
            text-xl
            font-extrabold
            border-b-[3px]
            border-black
          "
          whileHover={{
            color: "#1A0873",
          }}
        >
          user name
        </motion.h1>

        <p className="w-full mt-5 text-xl text-end">
          “ممنون بابت تمامی خدمات شما . از رفتار مناسب پرسونل و پایین بودن
          قیمت‌ها راضی بودم”
        </p>
      </div>

      <div className="w-[15%] h-full flex justify-center items-center">
        <motion.img
          src=""
          alt="UserPic"
          whileHover={{
            scale: 1.08,
            rotate: 3,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="
            w-[125px]
            h-[125px]
            rounded-full
            border-[3px]
            border-black
            shadow-[0px_4px_4px_0px_rgba(26,8,115,0.5)]
          "
        />
      </div>
    </motion.div>
  );
}