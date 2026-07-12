import React from "react";
import shadowNumber1 from "../../assets/Ellipse 2.png";
import shadowNumber2 from "../../assets/Ellipse 1.png";
import PhoneIcon from "../../assets/—Pngtree—a 3d mobile phone icon_21261832 1.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  const buttons = [
    { id: 1, title: "مشاوره خرید" },
    { id: 2, title: "مشاوره تعمیرات" },
    { id: 3, title: "سرویس های ما" },
  ];

  return (
    <div className="h-[480px] mr-4 md:mr-10 lg:mr-20 justify-end flex flex-wrap text-right mt-[80px] md:mt-[116px]">
      <img
        src={shadowNumber1}
        alt="Shadow Number 1"
        className="w-[695px] absolute top-0 right-0 h-[695px]"
      />
      <img
        src={shadowNumber2}
        alt="Shadow Number 1"
        className="w-[685px] absolute bottom-[-400px] left-0 h-[900px]"
      />
      <motion.img
        className="
            hidden
            md:block
              absolute
              left-[-50px]
              md:left-[-20px]
              lg:left-0
              top-[250px]
              md:top-[180px]
              lg:top-[163px]
              w-[220px]
              md:w-[350px]
              lg:w-auto
            "
        src={PhoneIcon}
        alt="phone"
        initial={{ x: "-100%" }}
        animate={{
          x: 0,
          y: [0, -10, 0, 10, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          duration: 0.8,
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
          rotate: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.1,
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.5 },
        }}
      />
      <p className="text-[34px] sm:text-[48px] md:text-[60px] lg:text-[73px] w-full md:w-[800px] lg:w-[1080px] font-extrabold leading-tight">
        دنیای تکنولوژی و الکترونیک در{" "}
        <span className="text-[#0003CF]">موبایل عابد (آزادگله)</span>
      </p>

      <TypeAnimation
        sequence={[
          "تخصصی ترین مرکز فروش موبایل در ساری. تعمیرات موبایل خود را به ما بسپارید و با اعتماد از ما بخرید و لذت ببرید",
          5000,
          "",
          500,
        ]}
        wrapper="div"
        speed={70}
        repeat={Infinity}
        className="
    w-full
    sm:w-[90%]
    md:w-[600px]
    lg:w-[730px]
    mt-4
    h-auto
    min-h-[80px]
    font-extrabold
    text-[18px]
    sm:text-[22px]
    md:text-[24px]
    lg:text-[28px]
  "
      />

      <div
        className="
    flex
    flex-wrap
    gap-4
    md:gap-7
    items-center
    justify-end
    mt-10
    w-full
    md:w-[700px]
    lg:w-[810px]
  "
      >
        {buttons.map((button, index) => (
          <motion.button
            key={button.id}
            className="btn-1 relative"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.05,
              y: -8,
              backgroundColor: "#1A0873",
              color: "#ffffff",
              boxShadow: "0px 20px 40px rgba(26,8,115,.35)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            style={{
              overflow: "hidden",
            }}
          >
            {/* Shine Effect */}
            <motion.div
              className="absolute top-0 left-[-120%] h-full w-[60px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent)",
                transform: "skewX(-20deg)",
              }}
              whileHover={{
                left: "130%",
              }}
              transition={{
                duration: 0.95,
                ease: "easeInOut",
              }}
            />

            {/* Glow Ring */}
            <motion.div
              className="absolute inset-0 rounded-[8px] pointer-events-none"
              whileHover={{
                boxShadow: "0 0 25px rgba(26,8,115,.45)",
              }}
            />

            <span className="relative z-10">{button.title}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
