import React from "react";
import FloatingInput from "../../components/ui/FloatingInput";
import MobileCart from "../../components/mobileCart";
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
  return (
    <div className="mt-16 flex mb-16 flex-wrap justify-center">
      <h1 className="text-4xl text-[#1A0873] font-black text-center mb-16 w-full">
        لیست موبایل ها
      </h1>
      <div className="w-[90%] rounded-2xl h-[105px] bg-[#0A003B] flex items-center justify-center gap-12">
        <button className=" w-[235px] h-[60px] bg-[#1702FF] rounded-lg text-white font-black text-2xl">
          {" "}
          اعمال فیلتر{" "}
        </button>
        <FloatingInput
          theme="white"
          label="حداکثر قیمت"
          width="215px"
          height={60}
        />
        <FloatingInput
          theme="white"
          label="حداقل قیمت"
          width="215px"
          height={60}
        />
        <FloatingInput
          theme="white"
          label="جستجوی نام موبایل"
          width="395px"
          height={60}
        />
      </div>
      <div className="w-[90%] mt-16 flex flex-wrap gap-8 justify-center">
        {mobiles.map((mobile) => (
          <MobileCart key={mobile.id} data={mobile} />
        ))}
      </div>
    </div>
  );
}
