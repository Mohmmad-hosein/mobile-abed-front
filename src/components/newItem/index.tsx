import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileCart from "../mobileCart";
import shadowNumber1 from "../../assets/Ellipse 3.png";

interface MobileData {
  id: number;
  title: string;
  desc: string;
  price: string;
  image: string;
}

const SkeletonCart: React.FC = () => (
  <div className="w-full sm:w-[320px] md:w-[350px] lg:w-[380px] h-[500px] sm:h-[540px] rounded-2xl flex flex-col justify-start items-center bg-[#1A0873]/30 border-[3px] border-black/50 animate-pulse p-4 shrink-0">
    <div className="w-full h-[175px] mt-2 rounded-[8px] bg-slate-400/30"></div>
    <div className="w-48 h-8 mt-6 bg-slate-400/30 rounded"></div>
    <div className="w-5/6 h-24 mt-6 bg-slate-400/30 rounded"></div>
    <div className="w-5/6 mt-auto mb-4 flex justify-between items-center">
      <div className="w-10 h-10 bg-slate-400/30 rounded-full"></div>
      <div className="w-24 h-6 bg-slate-400/30 rounded"></div>
    </div>
  </div>
);

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

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const NewItemSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mobiles, setMobiles] = useState<MobileData[]>([]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setMobiles([
        {
          id: 1,
          title: "iPhone 15 Pro",
          desc: "بدنه تیتانیومی، چیپ A17 Pro، دوربین ۱۲ مگاپیکسلی و قوی ترین آیفون.",
          price: "تماس بگیرید",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 2,
          title: "Galaxy S24 Ultra",
          desc: "فریم تیتانیومی، پردازنده اسنپدراگون 8 نسل 3، دوربین 200 مگاپیکسلی.",
          price: "تماس بگیرید",
          image: "https://via.placeholder.com/150",
        },
        {
          id: 3,
          title: "Xiaomi 14 Pro",
          desc: "لنزهای لایکا، شارژر 120 واتی فوق سریع، صفحه نمایش با روشنایی بالا.",
          price: "تماس بگیرید",
          image: "https://via.placeholder.com/150",
        },
      ]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="mt-20 md:mt-36 lg:mt-56 flex relative flex-wrap justify-center w-full min-h-[600px] px-4 sm:px-6 lg:px-8"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* عکس سایه پس‌زمینه */}
      <img
        src={shadowNumber1}
        alt="Shadow Number 1"
        className="w-[400px] md:w-[650px] lg:w-[885px] absolute -bottom-[200px] md:-bottom-[400px] right-0 h-auto pointer-events-none opacity-60 md:opacity-100"
      />

      <div className="w-full max-w-[1200px] h-full justify-center flex flex-wrap z-10">
        {/* هدر بخش (تیتر و دکمه مشاهده همه) */}
        <motion.div
          variants={childVariants}
          className="flex flex-col-reverse sm:flex-row justify-between min-h-[120px] sm:h-[185px] items-center sm:items-end w-full gap-4 sm:gap-0 pb-6"
        >
          <p className="text-lg sm:text-2xl md:text-[28px] items-center flex cursor-pointer h-auto sm:h-[100px] text-[#1A0873] font-semibold hover:opacity-80 transition-opacity">
            مشاهده همه
          </p>
          <div className="flex flex-col h-auto sm:h-[100px] gap-2 sm:gap-4 justify-between items-center sm:items-end text-center sm:text-right">
            <h1 className="text-2xl sm:text-3xl md:text-[48px] font-semibold">
              🔥 تازه رسیده ها
            </h1>
            <p className="text-black/60 text-base sm:text-xl md:text-[24px]">
              جدید ترین و بهترین گوشی های موجود در بازار
            </p>
          </div>
        </motion.div>

        {/* لیست کارت‌ها */}
        <motion.div
          variants={cardVariants}
          className="w-full mt-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-4"
          style={{ perspective: "1000px" }}
        >
          {isLoading
            ? [1, 2, 3].map((skeleton) => <SkeletonCart key={skeleton} />)
            : mobiles.map((mobile) => (
                <MobileCart key={mobile.id} data={mobile} />
              ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NewItemSection;