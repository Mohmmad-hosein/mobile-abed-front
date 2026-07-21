import React, { Component } from "react";
import FloatingInput from "../../components/ui/FloatingInput";
import shadow from "../../assets/Ellipse 3.png";
import { motion } from "framer-motion";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="mt-16 felx flex-wrap justify-center">
        <img
          src={shadow}
          alt="Shadow"
          className="w-[795px] z-10 absolute bottom-[-500px] right-0 h-[795px]"
        />
        <motion.h1
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-[#1A0873] font-bold text-center mb-8"
        >
          درباره ما و ارسال نظر
        </motion.h1>
        <div className="w-full p-[5%] mb-16 flex flex-wrap justify-between">
          <div className="flex flex-wrap gap-3 justify-center w-[490px]">
            <FloatingInput label="عنوان نظر" width="100%" height={80} />
            <FloatingInput label="توضیحات" width="100%" height={510} textarea />
            <button className="w-full h-[68px] bg-[#1A0873] text-white font-black text-2xl rounded-lg mt-10">
              {" "}
              ارسال نظر{" "}
            </button>
          </div>
          <div className="flex flex-wrap justify-center w-[665px] gap-[100px]">
            <div className="text-white flex-wrap justify-center items-center flex text-2xl font-black w-full h-[175px] bg-[#1A0873] rounded-lg">
              <span className="text-center w-full"> موبایل عابد آزادگله</span>
              <span className="text-center w-full">
                بیشتر از 18 سال کنار شما هستیم{" "}
              </span>
            </div>
            <div className="text-white z-20 justify-center text-center p-4 items-center flex text-xl font-black w-full h-[175px] bg-[#0D004D] rounded-lg">
              اینجا فقط فروشنده موبایل نیستیم؛ ما همونایی هستیم که وقتی گوشیت
              خراب می‌شه، خودمون نگران می‌شیم! تعمیر تخصصی، تعویض قطعات
              اورجینال، خرید و فروش دست دوم تمیز، اقساط بدون بهره و مشاوره واقعی
              (نه فقط فروش).
            </div>
            <div className="text-white z-20 text-center p-6 flex-wrap justify-center items-center flex text-2xl font-black w-full h-[175px] bg-[#080031] rounded-lg">
              بیا سر بزن، یه چایی مهمون ما باش 😊 ساری, بلوار امام رضا , رو به
              رویاستانه امام زاده عباس – موبایل عابد
              <span className="text-center w-full">omidabed47@gmail.com</span>
              <span className="text-center w-full">0937 161 4300</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
