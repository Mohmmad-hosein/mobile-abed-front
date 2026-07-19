import { motion } from "framer-motion";
import React, { Component } from "react";
import MiniCart from "./cart";
import shadowNumber1 from "../../assets/Ellipse 1.png";


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

export default class WhyMobileAbed extends Component {
  render() {
    return (
      <motion.div
        className="mt-64 flex relative flex-wrap justify-center w-full h-[600px]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
              <img
        src={shadowNumber1}
        alt="Shadow Number 1"
        className="w-[885px] absolute -bottom-[400px] left-0 h-[885px]"
      />
              <div className="w-[1200px] h-full justify-center flex flex-wrap">
        <motion.div
          variants={childVariants}
          className="flex justify-between h-[185px] items-center w-full"
        >
          <p className="text-[28px] items-center flex cursor-pointer h-[100px] text-[#1A0873] font-semibold">
           
          </p>
          <div className="flex flex-col h-[100px] gap-4 items-end ">
            <h1 className="text-[48px] font-semibold text-left">
              چرا باید موبایل عابد رو انتخاب کنیم؟
            </h1>
            <p className="text-black/60 text-[24px] ">
             دلایل کامل اینکه شما میتونید به ما اعتماد کنید 
            </p>
          </div>
        </motion.div>
<div className="w-full flex gap-20 mt-10">
    <MiniCart/>
    <MiniCart/>
    <MiniCart/>
    <MiniCart/>
</div>
        </div>
        
      </motion.div>
    );
  }
}
