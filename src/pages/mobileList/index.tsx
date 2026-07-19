import React, { useMemo, useState } from "react";
import FloatingInput from "../../components/ui/FloatingInput";
import MobileCart from "../../components/mobileCart";
import Pagination from "../../components/ui/Pagination";
import { AnimatePresence, motion } from "framer-motion";
export const mobiles = [
  {
    id: 1,
    title: "iPhone 16 Pro Max",
    desc: "256GB - رنگ مشکی تیتانیوم",
    price: "145,000,000 تومان",
    image: "https://via.placeholder.com/500x500?text=iPhone+16+Pro+Max",
  },
  {
    id: 2,
    title: "Samsung Galaxy S25 Ultra",
    desc: "512GB - رنگ تیتانیوم",
    price: "118,000,000 تومان",
    image: "https://via.placeholder.com/500x500?text=Galaxy+S25+Ultra",
  },
  {
    id: 3,
    title: "Xiaomi 15 Ultra",
    desc: "512GB",
    price: "79,000,000 تومان",
    image: "https://via.placeholder.com/500x500?text=Xiaomi+15+Ultra",
  },
  {
    id: 4,
    title: "iPhone 15 Pro",
    desc: "256GB",
    price: "116,000,000 تومان",
    image: "https://via.placeholder.com/500x500?text=iPhone+15+Pro",
  },
  {
    id: 5,
    title: "Samsung Galaxy A56",
    desc: "256GB",
    price: "29,000,000 تومان",
    image: "https://via.placeholder.com/500x500?text=Galaxy+A56",
  },
  {
    id: 6,
    title: "POCO F7 Pro",
    desc: "512GB",
    price: "32,000,000 تومان",
    image: "https://via.placeholder.com/500x500?text=POCO+F7+Pro",
  },
  {
    id: 7,
    title: "Redmi Note 14 Pro",
    desc: "256GB",
    price: "24,500,000 تومان",
    image: "https://via.placeholder.com/500x500?text=Redmi+Note+14+Pro",
  },
  {
    id: 8,
    title: "Google Pixel 9 Pro",
    desc: "256GB",
    price: "84,000,000 تومان",
    image: "https://via.placeholder.com/500x500?text=Pixel+9+Pro",
  },
  {
    id: 9,
    title: "Nothing Phone (3)",
    desc: "256GB",
    price: "54,000,000 تومان",
    image: "https://via.placeholder.com/500x500?text=Nothing+Phone+3",
  },
];

export default function MobileList() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const start = (currentPage - 1) * itemsPerPage;

  const [filteredMobiles, setFilteredMobiles] = useState(mobiles);

  const priceToNumber = (price: string) => {
    return Number(price.replace(/[^\d]/g, ""));
  };

  const handleFilter = () => {
    const result = mobiles.filter((mobile) => {
      const price = priceToNumber(mobile.price);

      const matchName = mobile.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchMin = minPrice === "" || price >= Number(minPrice);

      const matchMax = maxPrice === "" || price <= Number(maxPrice);

      return matchName && matchMin && matchMax;
    });

    setFilteredMobiles(result);
  };

  const currentMobiles = filteredMobiles.slice(start, start + itemsPerPage);

  const totalPages = Math.ceil(filteredMobiles.length / itemsPerPage);
  return (
    <div className="mt-16 flex mb-16 flex-wrap justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-[#1A0873] font-black text-center mb-16 w-full"
      >
        لیست موبایل ها
      </motion.h1>
      <motion.div
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.45,
          delay: 0.15,
        }}
        className="w-[90%] rounded-2xl min-h-[105px] bg-[#0A003B] flex flex-wrap lg:flex-nowrap items-center justify-center gap-9 py-6 px-5"
      >
        <motion.button
          whileHover={{
            scale: 1.04,
            boxShadow: "0 10px 35px rgba(23,2,255,.45)",
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{
            duration: 0.2,
          }}
          onClick={handleFilter}
          className="w-[235px] h-[60px] bg-[#1702FF] rounded-lg text-white font-black text-2xl"
        >
          اعمال فیلتر
        </motion.button>
        <FloatingInput
          theme="white"
          label="حداکثر قیمت"
          width="215px"
          height={60}
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <FloatingInput
          theme="white"
          label="حداقل قیمت"
          width="215px"
          height={60}
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <FloatingInput
          theme="white"
          label="جستجوی نام موبایل"
          width="395px"
          height={60}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </motion.div>
      <div className="w-[90%] mt-16 mb-8 flex flex-wrap gap-8 justify-center">
        <AnimatePresence mode="wait">
          {" "}
          {currentMobiles.map((mobile) => (
            <MobileCart key={mobile.id} data={mobile} />
          ))}
        </AnimatePresence>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
