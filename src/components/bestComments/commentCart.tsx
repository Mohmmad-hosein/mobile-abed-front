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
        w-full max-w-[90%] md:max-w-full
        min-h-[185px]
        flex flex-col-reverse sm:flex-row
        justify-between items-center sm:items-start
        rounded-2xl
        border-[3px]
        border-black
        bg-[#D9D9D9]
        transition-all
        p-5 sm:p-6 md:p-8
        gap-4 sm:gap-6
        mx-auto
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
          pointer-events-none
        "
        whileHover={{
          left: "100%",
        }}
        transition={{
          duration: 0.8,
        }}
      />

      {/* بخش متن و نام کاربر */}
      <div className="w-full sm:w-[80%] flex flex-col items-end text-end">
        <motion.h1
          className="
            w-full max-w-[250px]
            pb-1
            text-end
            text-lg sm:text-xl
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

        <p className="w-full mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-end leading-relaxed">
          “ممنون بابت تمامی خدمات شما . از رفتار مناسب پرسونل و پایین بودن
          قیمت‌ها راضی بودم”
        </p>
      </div>

      {/* بخش تصویر کاربر */}
      <div className="w-full sm:w-[20%] flex justify-center sm:justify-end items-center shrink-0">
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
            w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[125px] md:h-[125px]
            rounded-full
            border-[3px]
            border-black
            shadow-[0px_4px_4px_0px_rgba(26,8,115,0.5)]
            object-cover
          "
        />
      </div>
    </motion.div>
  );
}
