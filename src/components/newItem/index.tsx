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
  <div className="w-[380px] h-[540px] rounded-2xl flex flex-col justify-start items-center bg-[#1A0873]/30 border-[3px] border-black/50 animate-pulse p-4">
    <div className="w-[330px] h-[175px] mt-2 rounded-[8px] bg-slate-400/30"></div>
    <div className="w-48 h-8 mt-6 bg-slate-400/30 rounded"></div>
    <div className="w-5/6 h-24 mt-6 bg-slate-400/30 rounded"></div>
    <div className="w-5/6 mt-14 flex justify-between items-center">
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
          image: "https://via.placeholder.com/150", // عکس تستی
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
      className="mt-56 flex relative flex-wrap justify-center w-full h-[600px]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <img
        src={shadowNumber1}
        alt="Shadow Number 1"
        className="w-[885px] absolute -bottom-[400px] right-0 h-[885px]"
      />
      <div className="w-[1200px] h-full justify-center flex flex-wrap">
        {" "}
        <motion.div
          variants={childVariants}
          className="flex justify-between h-[185px] items-center w-full"
        >
          <p className="text-[28px] items-center flex cursor-pointer h-[100px] text-[#1A0873] font-semibold">
            مشاهده همه{" "}
          </p>
          <div className="flex flex-col h-[100px] gap-4 justify-between items-end">
            <h1 className="text-[48px] font-semibold text-left">
              🔥 تازه رسیده ها
            </h1>
            <p className="text-black/60 text-[24px] ">
              جدید ترین و بهترین گوشی های موجود در بازار
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="w-full h-[600px] mt-6 flex justify-between items-center"
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
