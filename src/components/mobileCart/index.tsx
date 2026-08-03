import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface MobileData {
  id: number;
  title: string;
  desc: string;
  price: string;
  image: string;
}

interface MobileCartProps {
  data: MobileData;
}

const MOBILE_WIDTH = 300;
const MOBILE_HEIGHT = 430;

const DESKTOP_WIDTH = 380;
const DESKTOP_HEIGHT = 540;

const isMobile = window.innerWidth < 640;

const CARD_WIDTH = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;
const CARD_HEIGHT = isMobile ? MOBILE_HEIGHT : DESKTOP_HEIGHT;
const ROTATION_RANGE = 12;

const MobileCart: React.FC<MobileCartProps> = ({ data }) => {
  const navigate = useNavigate();

  const { title, desc, price, image } = data;

  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("animations");

    if (saved !== null) {
      setAnimationsEnabled(saved === "true");
      return;
    }

    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;

    const weakDevice = cores <= 4 || memory <= 4;

    if (weakDevice) {
      setAnimationsEnabled(false);
      localStorage.setItem("animations", "false");
    }
  }, []);

  const x = useMotionValue(CARD_WIDTH / 2);
  const y = useMotionValue(CARD_HEIGHT / 2);

  const rotateY = useTransform(
    x,
    [0, CARD_WIDTH],
    [-ROTATION_RANGE, ROTATION_RANGE],
  );

  const rotateX = useTransform(
    y,
    [0, CARD_HEIGHT],
    [ROTATION_RANGE, -ROTATION_RANGE],
  );

  const rotateXSpring = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
  });

  const rotateYSpring = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!animationsEnabled) return;

    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(CARD_WIDTH / 2);
    y.set(CARD_HEIGHT / 2);
  };

  return (
    <motion.div
      onClick={() => navigate(`/mobile/${data.id}`)}
      whileTap={{
        scale: 0.98,
      }}
className="
w-[300px]
h-[430px]
sm:w-[340px]
sm:h-[480px]
lg:w-[380px]
lg:h-[540px]
rounded-2xl
flex flex-wrap
justify-center
items-center
bg-[#1A0873]
border-[3px]
border-black
overflow-hidden
cursor-pointer
"
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.45,
      }}
      style={
        animationsEnabled
          ? {
              rotateX: rotateXSpring,
              rotateY: rotateYSpring,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }
          : {}
      }
      whileHover={
        animationsEnabled
          ? {
              scale: 1.02,
            }
          : {}
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="w-[330px] h-[175px] mt-2 rounded-[8px] bg-[#12054F]/70 flex justify-center items-center overflow-hidden"
        style={{
          transform: animationsEnabled ? "translateZ(40px)" : "none",
        }}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
className="
w-[260px]
h-[140px]
sm:w-[290px]
sm:h-[155px]
lg:w-[330px]
lg:h-[175px]
mt-2
rounded-lg
bg-[#12054F]/70
flex
justify-center
items-center
overflow-hidden
"
          onError={(e) => {
            e.currentTarget.src = "/images/no-image.png";
          }}
        />
      </motion.div>

      <motion.h1
className="
mt-3
text-xl
sm:text-2xl
lg:text-3xl
text-white
font-bold
text-center
px-3
"
        style={{
          transform: animationsEnabled ? "translateZ(35px)" : "none",
        }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="
text-white/80
w-5/6
sm:w-4/6
text-center
text-sm
sm:text-base
line-clamp-3
"
        style={{
          transform: animationsEnabled ? "translateZ(25px)" : "none",
        }}
      >
        {desc}
      </motion.p>

      <motion.div
        className="
w-5/6
mt-8
sm:mt-10
lg:mt-14
flex
justify-end
items-center
text-white
"
        style={{
          transform: animationsEnabled ? "translateZ(15px)" : "none",
        }}
      >
        <p className="font-bold text-base sm:text-lg">{price}</p>
      </motion.div>
    </motion.div>
  );
};

export default MobileCart;
