import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import menuIcon from "../../assets/icons8-menu-64.png";
import CancelIcon from "../../assets/icons8-cancel-128.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between items-center bg-[#1B152D]/85 backdrop-blur-md px-4 md:px-8 lg:px-14 w-full h-[70px] md:h-[85px] text-white">
        <div className="h-full flex justify-start items-center">
          <Link
            to="/"
            className="font-bold text-[24px] sm:text-[30px] md:text-[42px]"
          >
            <span className="text-[#1702FF]">Mobile</span> Abed
          </Link>
        </div>

        <div className="h-full flex items-center">
          <motion.img
            src={isOpen ? CancelIcon : menuIcon}
            alt="Menu"
            className="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
      <motion.div
        className="fixed top-[85px] left-0 right-0 h-[4px] origin-left z-[60]"
        style={{
          scaleX,
          background: "linear-gradient(90deg,#2563eb,#60a5fa,#ffffff)",
        }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.35 }}
            className="
                  fixed
                  top-[70px]
                  md:top-[85px]
                  left-0
                  w-full
                  bg-[#100644]
                  text-white
                  z-40
                  shadow-xl
                "
          >
            <div className="flex flex-col items-center gap-6 py-10 text-xl font-semibold">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500 transition"
              >
                Home
              </Link>

              <Link
                to="/products"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500 transition"
              >
                Products
              </Link>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-500 transition"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
