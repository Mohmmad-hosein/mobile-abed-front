import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

import menuIcon from "../../assets/icons8-menu-64.png";
import CancelIcon from "../../assets/icons8-cancel-128.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const menuItems = [
    {
      title: "خانه",
      link: "/",
    },
    {
      title: "محصولات",
      link: "/products",
    },
    {
      title: "درباره ما",
      link: "/about",
    },
    {
      title: "واردشدن/پنل کاربر",
      link: localStorage.getItem("token") ? "/panel" : "/login",
    },
  ];

  return (
    <>
      {/* Header */}

      <header className="sticky top-0 z-50 h-[85px] bg-[#1B152D]/85 backdrop-blur-md flex justify-between items-center px-8">
        <Link to="/" className="text-4xl font-black select-none">
          <span className="text-[#1702FF]">Mobile</span>{" "}
          <span className="text-white">Abed</span>
        </Link>

        <motion.img
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          src={isOpen ? CancelIcon : menuIcon}
          className="w-11 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </header>

      {/* Progress */}

      <motion.div
        className="fixed top-[85px] left-0 h-[4px] origin-left z-[60]"
        style={{
          scaleX,
          width: "100%",
          background: "linear-gradient(90deg,#2563eb,#60a5fa,#ffffff)",
        }}
      />

      {/* Drawer */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]"
            />

            {/* Menu */}

            <motion.aside
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                mass: 0.9,
              }}
              className="fixed right-0 top-0 h-screen w-[330px] bg-[#100644] z-[90] shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              {/* Top */}

              <div>
                <div className="flex justify-end items-center p-6">
                  <motion.img
                    src={CancelIcon}
                    whileHover={{ rotate: 90, scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                    }}
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 cursor-pointer"
                  />
                </div>

                <div className="mt-12 flex flex-col">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: 50,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                    >
                      <Link
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className="
                        block
                        py-5
                        px-10
                        text-right
                        text-2xl
                        font-bold
                        text-white
                        hover:bg-[#1702FF]
                        transition-all
                        "
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom */}

              <div className="border-t border-white/10 p-8">
                <div className="text-center">
                  <div className="text-4xl font-black">
                    <span className="text-[#1702FF]">Mobile</span>{" "}
                    <span className="text-white">Abed</span>
                  </div>

                  <p className="text-gray-400 mt-3">موبایل عابد آزادگله</p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
