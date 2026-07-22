import React, { Component } from "react";
import FloatingInput from "../../components/ui/FloatingInput";
import shadow from "../../assets/Ellipse 3.png";
import { motion } from "framer-motion";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="mt-8 md:mt-16 flex flex-wrap justify-center relative px-4 md:px-8">
        {/* تصویر سایه پس‌زمینه با اندازه ریسپانسیو */}
        <img
          src={shadow}
          alt="Shadow"
          className="w-[300px] h-[300px] md:w-[795px] md:h-[795px] z-10 absolute bottom-[-100px] md:bottom-[-500px] right-0 pointer-events-none opacity-50 md:opacity-100"
        />

        {/* تیتر اصلی */}
        <motion.h1
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl text-[#1A0873] font-bold text-center mb-6 md:mb-18 z-20 w-full"
        >
          درباره ما و ارسال نظر
        </motion.h1>

        {/* کانتینر اصلی محتوا */}
        <div className="w-full max-w-[1200px] mb-12 md:mb-16 flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-8 z-20">
          
          {/* بخش فرم ارسال نظر */}
          <div className="flex flex-col gap-4 justify-center w-full lg:w-[45%] max-w-[500px]">
            <FloatingInput label="عنوان نظر" width="100%" height={60} />
            
            {/* ارتفاع فرمر در موبایل و دسکتاپ متغیر شده است */}
            <div className="w-full h-[250px] md:h-[400px] lg:h-[510px]">
              <FloatingInput label="توضیحات" width="100%" height="100%" textarea />
            </div>

            <button className="w-full h-[55px] md:h-[68px] bg-[#1A0873] text-white font-black text-lg md:text-2xl rounded-lg mt-4 hover:bg-[#130559] transition-colors">
              ارسال نظر
            </button>
          </div>

          {/* بخش کارت‌های اطلاعات (درباره ما) */}
          <div className="flex flex-col justify-center w-full lg:w-[50%] max-w-[665px] gap-8 md:gap-20">
            
            {/* کارت ۱ */}
            <div className="text-white flex flex-col justify-center items-center text-lg md:text-2xl font-black w-full min-h-[140px] md:h-[175px] bg-[#1A0873] rounded-lg p-4 md:p-6 shadow-md">
              <span className="text-center w-full mb-1">موبایل عابد آزادگله</span>
              <span className="text-center w-full text-base md:text-2xl font-normal md:font-black">
                بیشتر از 20 سال کنار شما هستیم
              </span>
            </div>

            {/* کارت ۲ */}
            <div className="text-white z-20 justify-center text-center p-4 md:p-6 items-center flex text-sm md:text-lg lg:text-xl font-medium md:font-black w-full min-h-[140px] md:h-[175px] bg-[#0D004D] rounded-lg leading-relaxed shadow-md">
              اینجا فقط فروشنده موبایل نیستیم؛ ما همونایی هستیم که وقتی گوشیت
              خراب می‌شه، خودمون نگران می‌شیم! تعمیر تخصصی، تعویض قطعات
              اورجینال، خرید و فروش دست دوم تمیز، اقساط بدون بهره و مشاوره واقعی
              (نه فقط فروش).
            </div>

            {/* کارت ۳ */}
            <div className="text-white z-20 text-center p-4 md:p-6 flex flex-col justify-center items-center text-xs md:text-base lg:text-xl font-bold w-full min-h-[160px] md:h-[175px] bg-[#080031] rounded-lg gap-2 shadow-md">
              <p className="leading-relaxed">
                بیا سر بزن، یه چایی مهمون ما باش 😊 ساری, بلوار امام رضا , رو به
                رویاستانه امام زاده عباس – موبایل عابد
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 w-full text-xs md:text-sm font-normal opacity-90 mt-1">
                <span>0937 161 4300</span>
                <span className="hidden sm:inline">•</span>
                <span>omidabed47@gmail.com</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}