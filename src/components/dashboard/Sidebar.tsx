import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Receipt,
  Heart,
  Bookmark,
  ChevronRight,
  ChevronLeft,
  Wallet,
  House,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    id: 1,
    label: "اطلاعات کاربری",
    icon: User,
    path: "/dashboard",
  },
  {
    id: 2,
    label: "رسیدهای شما",
    icon: Receipt,
    path: "/dashboard/payments",
  },
  {
    id: 3,
    label: "علاقه‌مندی",
    icon: Heart,
    path: "/dashboard/favorites",
  },
  {
    id: 4,
    label: "نشان شده ها",
    icon: Bookmark,
    path: "/dashboard/bookmarks",
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const current = navItems.find((item) => item.path === location.pathname);

    if (current) {
      setActiveTab(current.id);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.aside
      animate={{
        width: isOpen ? 350 : 80,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="relative overflow-hidden flex h-full flex-col justify-between bg-[#0D004D] p-4 text-white shadow-xl select-none"
    >

      <div className="flex flex-col justify-center gap-2 pt-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div key={item.id} className="relative flex flex-col items-center">
              <button
                title={item.label}
                onClick={() => {
                  setActiveTab(item.id);
                  navigate(item.path);

                  if (window.innerWidth < 1024) {
                    setIsOpen(false);
                  }
                }}
                className={`relative flex w-[235px] text-center  flex justify-center items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isOpen ? "justify-start" : "justify-center"
                } ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5 shrink-0" />

                <AnimatePresence>
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap w-full"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              <div className="relative h-[3px] my-1 h-[1px] w-[235px] max-w-[85%] bg-gradient-to-r from-transparent via-white to-transparent">
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute inset-0 bg-[#1702FF] shadow-[0_0_12px_#3b82f6]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-3 pb-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:flex w-[235px] hidden items-center justify-center gap-2 rounded-xl border border-dashed border-indigo-500/60 bg-indigo-950/20 py-2.5 text-xs text-indigo-200 transition-colors hover:border-indigo-400 hover:bg-indigo-900/30"
        >
          {isOpen ? (
            <>
              <ChevronRight className="h-4 w-4" />
              <span>بستن منو</span>
            </>
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </button>

        <div className="flex w-[235px] items-center justify-between rounded-xl border border-dashed border-indigo-500/60 bg-indigo-950/30 p-3 text-right">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col justify-start items-start gap-1 text-right"
              >
                <span className="text-sm font-semibold text-indigo-100">
                  کیف پول
                </span>
                <span className="text-[10px] text-gray-400">عدم موجودی</span>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="rounded-lg bg-indigo-600/20 p-2 text-indigo-300">
            <Wallet className="h-5 w-5" />
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
