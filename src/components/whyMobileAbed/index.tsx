import { motion } from "framer-motion";
import React, { Component } from "react";
import MiniCart from "./cart";
import shadowNumber1 from "../../assets/Ellipse 1.png";

// تعریف تایپ داده‌های کارت
export interface WhyUsItem {
  id: number;
  title: string;
  desc: string;
}

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

interface State {
  features: WhyUsItem[];
}

export default class WhyMobileAbed extends Component<{}, State> {
  // تعریف اطلاعات درخواست‌شده در استیت
  state: State = {
    features: [
      {
        id: 1,
        title: "۲ دهه سابقه",
        desc: "بیش از دو دهه سابقه کار در حوزه موبایل",
      },
      {
        id: 2,
        title: "بیشترین رضایت",
        desc: "بیشترین رضایت مشتری در مپ گوگل در ساری",
      },
      {
        id: 3,
        title: "نمایندگی طلایی",
        desc: "جزو برترین نمایندگان ایرانسل در مازندران",
      },
      {
        id: 4,
        title: "تنوع کامل محصول",
        desc: "عرضه جدیدترین و کامل‌ترین محصولات بازار",
      },
    ],
  };

  render() {
    return (
      <motion.div
        className="mt-20 md:mt-36 lg:mt-64 flex relative flex-wrap justify-center w-full min-h-[600px] px-4 sm:px-6 lg:px-8 "
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* تصویر سایه پس‌زمینه */}
        <img
          src={shadowNumber1}
          alt="Shadow Number 1"
          className="w-[400px] md:w-[650px] lg:w-[885px] absolute -bottom-[200px] md:-bottom-[400px] left-0 h-auto pointer-events-none opacity-60 md:opacity-100"
        />

        <div className="w-full max-w-[1200px] h-full justify-center flex flex-wrap z-10">
          {/* هدر بخش (عنوان و توضیحات) */}
          <motion.div
            variants={childVariants}
            className="flex flex-col justify-center sm:justify-end min-h-[120px] sm:h-[185px] items-center sm:items-end w-full pb-6"
          >
            <div className="flex flex-col h-auto gap-2 sm:gap-4 justify-between items-center sm:items-end text-center sm:text-right">
              <h1 className="text-2xl sm:text-3xl md:text-[48px] font-semibold">
                چرا باید موبایل عابد رو انتخاب کنیم؟
              </h1>
              <p className="text-black/60 text-base sm:text-xl md:text-[24px]">
                دلایل کامل اینکه شما میتونید به ما اعتماد کنید
              </p>
            </div>
          </motion.div>

          {/* چیدمان کارت‌ها با گرید ریسپانسیو */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6 md:mt-10 justify-items-center">
            {this.state.features.map((item) => (
              <MiniCart key={item.id} data={item} />
            ))}
          </div>
        </div>
      </motion.div>
    );
  }
}