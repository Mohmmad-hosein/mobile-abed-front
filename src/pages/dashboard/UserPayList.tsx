import { Pen, Trash2 } from "lucide-react";
import React from "react";

export default function UserPayList() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-2xl font-bold text-gray-700">
      <div className="w-5/6  text-black p-3 border-dashed border-b-4 flex ">
        <h1 className="w-1/5 ">دکمه دسترسی</h1>
        <h1 className="w-1/5 text-center">وضغیت سفارش شما</h1>
        <h1 className="w-1/5 text-center">قیمت</h1>
        <h1 className="w-1/5 text-center">نام موبایل</h1>
        <h1 className="w-1/5 text-center">عکس موبایل</h1>
      </div>

      <div className="flex gap-3 flex-wrap w-full justify-center mt-8">
        {/* card */}
        <div className="w-5/6 shadow-2xl border-2 bg-[#12054F]/70 h-[70px] flex rounded-2xl ">
          <div className="w-1/5 h-full gap-2 flex justify-center items-center text-white">
            <button className="bg-red-500 text-white p-2 rounded-lg"><Trash2 /></button>
            <button className="bg-[#0D004D] text-white p-2 rounded-lg"><Pen /></button>
            <button className="bg-[#0D004D] text-white p-1 rounded-lg">پرداخت</button>
          </div>
          <div className="w-1/5 h-full flex justify-center items-center text-white">
            پرداخت نشده
          </div>
          <div className="w-1/5 h-full flex justify-center items-center text-white">
            500 میلیون
          </div>
          <div className="w-1/5 h-full flex justify-center items-center text-white">
            iphone 17 pro max
          </div>
          <div className="w-1/5 h-full flex justify-center items-center">
            {" "}
            <div className="w-[58px] h-[58px] bg-[#D9D9D9] rounded-lg">
              <img src="" alt="عکس " />
            </div>{" "}
          </div>
        </div>
      </div>
            <div className="w-5/6 mt-28 h-auto flex justify-around">
      <button className="bg-[#430AFF] w-[285px] h-[45px] text-white shadow-2xl rounded-lg font-black ">
       تسویه حساب 
      </button>
      <button className="bg-[#430AFF]/25 w-[285px] h-[45px] text-black shadow-2xl rounded-lg font-black " disabled>
       حذف تمامی موارد
      </button>
      </div>
    </div>
  );
}
