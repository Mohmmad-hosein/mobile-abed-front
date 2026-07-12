import { motion } from "framer-motion";
import React, { Component } from "react";
import CommentCart from "./commentCart";

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
        className="mt-36 mb-36 flex relative flex-wrap justify-center w-full h-auto"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-[1200px] h-full justify-center flex flex-wrap">
          <motion.div
            variants={childVariants}
            className="flex justify-between h-[185px] items-center w-full"
          >
            <p className="text-[28px] items-center flex cursor-pointer h-[100px] text-[#1A0873] font-semibold"></p>
            <div className="flex flex-col h-[100px] gap-4 items-end ">
              <h1 className="text-[48px] font-semibold text-left">
             نظراتی راجب ما
              </h1>
              <p className="text-black/60 text-[24px] ">
             نظرات بعضی از مشتری ها برای شما
              </p>
            </div>
          </motion.div>
          <div className="w-full flex-wrap flex justify-center gap-20 mt-10">
            <CommentCart/>
            <CommentCart/>
            <CommentCart/>
          </div>
        </div>
      </motion.div>
    );
  }
}
