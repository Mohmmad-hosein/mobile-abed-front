import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

export default function MiniCart() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -12,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 15,
      }}
      className="
        group
        relative
        overflow-hidden
        bg-[#0C0044]
        p-10
        text-white
        w-[250px]
        h-[280px]
        rounded-2xl
        border-[3px]
        border-white/20
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        bg-gradient-to-br
        from-blue-500/20
        to-purple-500/20
      "
      />

      {/* نور متحرک */}
      <motion.div
        animate={{
          x: ["-100%", "250%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "linear",
        }}
        className="
          absolute
          top-0
          left-0
          w-20
          h-full
          rotate-12
          bg-white/10
          blur-xl
        "
      />

      <div className="relative z-10">
        <motion.h1
          whileHover={{ scale: 1.08 }}
          className="text-3xl text-center font-bold"
        >
          title
        </motion.h1>

        <p className="text-center mt-8 text-white/70 leading-8">
          desc desc desc desc
        </p>
      </div>
    </motion.div>
  );
}