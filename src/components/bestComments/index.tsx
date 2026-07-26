import { motion } from "framer-motion";
import React, { Component } from "react";
import CommentCart from "./commentCart";
import shadowNumber1 from "../../assets/Ellipse 3.png";

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

export default class BestComment extends Component {
  render() {
    return (
      <motion.div
        className="my-16 md:my-36 flex relative flex-wrap justify-center w-full h-auto md:overflow-visible px-4"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={shadowNumber1}
          alt="Shadow Number 1"
          className="w-[300px] h-[300px] md:w-[885px] md:h-[885px] opacity-60 absolute -bottom-[100px] md:-bottom-[400px] right-0 pointer-events-none"
        />

        <div className="max-w-[1200px] w-full h-full justify-center flex flex-wrap z-10">
          <motion.div
            variants={childVariants}
            className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center w-full gap-4 md:gap-0"
          >
            {/* تگ خالی قبلی که در صورت نیاز به دکمه/لینک استفاده می‌شود */}
            <p className="text-[20px] md:text-[28px] items-center flex cursor-pointer text-[#1A0873] font-semibold"></p>
            
            {/* بخش هدر و توضیحات (در موبایل وسط‌چین و در دسکتاپ راست‌چین) */}
            <div className="flex flex-col gap-2 md:gap-4 items-center md:items-end text-center md:text-right">
              <h1 className="text-3xl md:text-[48px] font-semibold">
                نظراتی راجب ما
              </h1>
              <p className="text-black/60 text-lg md:text-[24px]">
                نظرات بعضی از مشتری ها برای شما
              </p>
            </div>
          </motion.div>

          {/* کارت‌های نظرات */}
          <div className="w-full flex flex-wrap justify-center gap-8 md:gap-20 mt-8 md:mt-10">
            <CommentCart />
            <CommentCart />
            <CommentCart />
          </div>
        </div>
      </motion.div>
    );
  }
}