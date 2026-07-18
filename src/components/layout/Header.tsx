import { useEffect, useState } from "react";
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
      title: localStorage.getItem("token") ? "پنل کاربر" : "ورود / ثبت نام",
      link: localStorage.getItem("token") ? "/panel" : "/login",
    },
  ];

  return (
    <>
      <header
        className="
sticky
top-0
z-[99998]
h-[85px]
px-8
flex
items-center
justify-between
bg-[#100644]/80
backdrop-blur-xl
border-b
border-white/10
"
      >
        <Link
          to="/"
          className="
text-4xl
font-black
select-none
tracking-tight
"
        >
          <span className="text-[#1702FF]">Mobile</span>{" "}
          <span className="text-white">Abed</span>
        </Link>

        <motion.img
          src={isOpen ? CancelIcon : menuIcon}
          onClick={() => setIsOpen(!isOpen)}
          animate={{
            rotate: isOpen ? 180 : 0,
          }}
          whileTap={{
            scale: 0.85,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
w-11
cursor-pointer
"
        />
      </header>

      <motion.div
        className="
fixed
top-[85px]
left-0
h-[4px]
origin-left
z-[99999]
w-full
"
        style={{
          scaleX,
          background: "linear-gradient(90deg,#1702FF,#60a5fa,#fff)",
        }}
      />

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Layer */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setIsOpen(false)}
              className="
fixed
inset-0
z-[99998]
bg-black/40
backdrop-blur-md
"
            />

            {/* Drawer */}

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

                stiffness: 240,

                damping: 25,
              }}
              className="
fixed
right-0
top-0
z-[99999]
h-screen
w-[360px]
bg-[#100644]
shadow-2xl
flex
flex-col
justify-between
overflow-hidden
"
            >
              <div>
                {/* Close */}

                <div
                  className="
flex
justify-end
p-6
"
                >
                  <motion.img
                    src={CancelIcon}
                    onClick={() => setIsOpen(false)}
                    whileHover={{
                      rotate: 90,
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 0.9,
                    }}
                    className="
w-10
cursor-pointer
"
                  />
                </div>

                {/* Menu */}

                <div
                  className="
mt-10
flex
flex-col
"
                >
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: 60,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                    >
                      <Link
                        to={item.link}
                        onClick={() => setIsOpen(false)}
                        className="

relative

block

py-6

px-10

text-right

text-2xl

font-black

text-white

transition-all

hover:bg-[#1702FF]

group

"
                      >
                        <span
                          className="
relative
z-10
"
                        >
                          {item.title}
                        </span>

                        <motion.span
                          className="
absolute
right-0
top-0
h-full
w-1
bg-white
opacity-0
group-hover:opacity-100
"
                        />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Logo */}

              <div
                className="
p-8
border-t
border-white/10
"
              >
                <div
                  className="
text-center
opacity-90
"
                >
                  <div
                    className="
text-4xl
font-black
"
                  >
                    <span className="text-[#1702FF]">Mobile</span>{" "}
                    <span className="text-white">Abed</span>
                  </div>

                  <p
                    className="
text-gray-400
mt-3
font-bold
"
                  >
                    موبایل عابد آزادگله
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
