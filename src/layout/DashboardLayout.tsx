import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import { motion } from "framer-motion";
import { House } from "lucide-react";

export default function DashboardLayout() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-100 dir-rtl">
      <div className="flex flex-1 flex-col overflow-y-auto">
        <motion.button
          onClick={() => navigate("/")}
          animate={{
            left: 20,
            top: 20,
          }}
          whileHover={{
            scale: 1.1,
            rotate: -8,
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="
    absolute
    z-50
    w-12
    h-12
    rounded-full
    bg-[#1702FF]
    flex
    items-center
    justify-center
    shadow-xl
    border
    border-gray-200
    shadow-2xl
  "
        >
          <House className="text-white" size={22} />
        </motion.button>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Sidebar />
    </div>
  );
}
