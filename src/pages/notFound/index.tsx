import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45 }}
      className="relative flex min-h-[calc(100vh-85px)] flex-col items-center justify-center overflow-hidden bg-[#F8FAFF] px-5"
    >
      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute -right-48 -top-48 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[150px]"
      />

      <motion.div
        animate={{
          scale: [1.08, 1, 1.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute -bottom-48 -left-48 h-[500px] w-[500px] rounded-full bg-indigo-700/20 blur-[150px]"
      />

      {/* Phone */}

      <motion.div
        initial={{ scale: 0.8, y: 40 }}
        animate={{
          scale: 1,
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
          scale: {
            duration: 0.5,
          },
        }}
        className="relative mb-10"
      >
        <svg
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
        >
          <rect
            x="65"
            y="20"
            width="120"
            height="210"
            rx="20"
            fill="#1A0873"
          />

          <rect
            x="75"
            y="40"
            width="100"
            height="150"
            rx="10"
            fill="white"
          />

          <circle
            cx="125"
            cy="205"
            r="8"
            fill="white"
          />

          <motion.path
            d="M95 70L155 130"
            stroke="#2563EB"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: .3, duration: .5 }}
          />

          <motion.path
            d="M155 70L95 130"
            stroke="#2563EB"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: .6, duration: .5 }}
          />

          <text
            x="125"
            y="175"
            textAnchor="middle"
            fill="#1A0873"
            fontSize="28"
            fontWeight="bold"
          >
            404
          </text>
        </svg>
      </motion.div>

      {/* Text */}

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: .2 }}
        className="text-7xl font-black text-[#1A0873]"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: .35 }}
        className="mt-4 text-center text-3xl font-bold text-gray-800"
      >
        صفحه پیدا نشد!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: .5 }}
        className="mt-4 max-w-[520px] text-center leading-8 text-gray-500"
      >
        انگار این صفحه از دسترس خارج شده یا آدرس را اشتباه وارد کرده‌اید.
      </motion.p>

      {/* Buttons */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: .7 }}
        className="mt-10 flex flex-wrap items-stretch justify-center gap-5"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .97 }}
          className="flex"
        >
          <Link
            to="/"
            className="
              flex
              h-[58px]
              min-w-[190px]
              items-center
              justify-center
              rounded-xl
              bg-[#1A0873]
              px-8
              font-bold
              text-white
              shadow-lg
            "
          >
            بازگشت به خانه
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .97 }}
          className="flex"
        >
          <button
            onClick={() => window.history.back()}
            className="
              flex
              h-[58px]
              min-w-[190px]
              items-center
              justify-center
              rounded-xl
              border-2
              border-[#1A0873]
              px-8
              font-bold
              text-[#1A0873]
              transition-colors
              hover:bg-[#1A0873]
              hover:text-white
            "
          >
            صفحه قبلی
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}