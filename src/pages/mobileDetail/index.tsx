import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PhoneImage from "../../assets/iPhone_13_Blue 2.png";
import CommentCart from "../../components/bestComments/commentCart";

// نمونه دیتای تصاویر برای آزمایش حالت چند عکس (در حالت واقعی از API دریافت می‌گردد)
const productImages = [
  PhoneImage,
  // PhoneImage, // در صورت اضافه شدن تصویر دوم، اسلایدر فعال می‌شود
];

export default function MobileDetail() {
  const { id } = useParams();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // تغییر عکس بعدی/قبلی
  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev + 1) % productImages.length);
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="mt-8 md:mt-16 flex flex-wrap justify-center px-4 md:px-8  dir-rtl">
      {/* عنوان اصلی */}
      <motion.h1
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-3xl md:text-4xl text-[#1A0873] font-bold text-center mb-10 md:mb-16"
      >
        جزئیات موبایل
      </motion.h1>

      {/* بخش اصلی محصول */}
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-[1300px] justify-between min-h-[500px] items-center gap-8 lg:gap-4">
        {/* اطلاعات محصول (سمت راست) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full lg:w-[750px] flex flex-wrap items-center justify-center lg:justify-start text-center lg:text-right"
        >
          <h1 className="w-full text-center text-3xl md:text-4xl text-[#13074f] font-black">
            iPhone 17 Pro Max
          </h1>

          <p className="w-full text-center text-lg md:text-2xl font-medium text-[#13074f] mt-4 leading-relaxed">
            بدنه تیتانیومی ، چیپ ۱۷ ، دوربین ۱۲ مگاپیکسلی و قوی‌ترین آیفون
          </p>

          <h1 className="w-full text-center text-3xl md:text-5xl text-[#13074f] font-black mt-6">
            قیمت: ۱۰,۰۰۰,۰۰۰ تومان
          </h1>

          {/* دکمه‌های عملیاتی */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-4 p-4 md:p-9 mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-[230px] h-[55px] rounded-lg bg-[#12054F]/70 text-white font-black text-xl md:text-2xl transition-colors"
            >
              افزودن علاقه‌مندی
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-[235px] h-[55px] rounded-lg border-[3px] border-[#0D004D] text-[#0D004D] font-black text-xl md:text-2xl transition-colors"
            >
              مشاهده دیگر نمونه‌ها
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-[175px] h-[55px] rounded-lg bg-[#0D004D] text-white font-black text-xl md:text-2xl transition-colors"
            >
              ثبت سفارش
            </motion.button>
          </motion.div>
        </motion.div>

        {/* بخش تصویر / اسلایدر (سمت چپ) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-[600px] h-[350px] sm:h-[450px] lg:h-full items-center justify-center flex relative"
        >
          {/* هاله نور پشت عکس */}
          <div className="w-[300px] sm:w-[450px] lg:w-[550px] h-[300px] sm:h-[450px] lg:h-[550px] absolute bg-[#1A0873]/65 blur-3xl rounded-full pointer-events-none" />

          {/* نمایش عکس یا اسلایدر */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImgIndex}
                src={productImages[currentImgIndex]}
                alt="iPhone"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="max-h-full object-contain drop-shadow-xl"
              />
            </AnimatePresence>

            {/* کنترل‌های اسلایدر (تنها در صورت وجود بیش از ۱ عکس نمایش داده می‌شود) */}
            {productImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  &#10094;
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  &#10095;
                </button>

                {/* نشانگرهای اسلاید */}
                <div className="absolute bottom-2 flex gap-2 z-20">
                  {productImages.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setCurrentImgIndex(idx)}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                        idx === currentImgIndex
                          ? "bg-white scale-125"
                          : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* بخش نظرات */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1300px] h-auto flex flex-wrap mt-20 md:mt-40"
      >
        <h1 className="w-full text-right text-3xl md:text-5xl font-bold text-black">
          نظراتی راجب این محصول
        </h1>
        <p className="w-full text-right text-lg md:text-xl text-black/60 mt-2 md:mt-4">
          نظرات بعضی از مشتری‌ها برای شما
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full h-auto flex gap-4 justify-center lg:justify-between flex-wrap mt-10 md:mt-16 mb-16"
        >
          <CommentCart />
          <CommentCart />
          <CommentCart />
        </motion.div>
      </motion.div>
    </div>
  );
}