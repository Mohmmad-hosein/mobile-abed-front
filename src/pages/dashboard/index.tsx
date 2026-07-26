import React from "react";

export default function DashboardInfoPage() {
  return (
    <div className="flex  flex-col h-full w-full items-center justify-center text-2xl font-bold text-gray-700">
      <h1>اطلاعات کاربری</h1>
      <div className="w-5/6 mt-16  flex flex-col">
        <div className="flex text-[#0D004D] justify-around items-center gap-4 text-lg font-bold">
          <h1> کدملی : {"2081382164"} </h1>{" "}
          <h1>نام و نام خانوادگی: {"سید محمد حسین جلالی"}</h1>
        </div>
        <div className="flex mt-12 text-[#0D004D] justify-around items-center gap-4 text-lg font-bold">
          <h1>شماره موبایل : {"09109681679"}</h1>
          <h1> ادرس :{" ساری , ذغال چال , بعثت 31"} </h1>
        </div>
        <div className="flex mt-12 text-[#0D004D] justify-around items-center gap-4 text-lg font-bold">
          <h1> {'mohmmadjalali44@gmail.com'} : ایمیل </h1>
          <h1> {'1999/12/30'} : تاریخ تولد </h1>
        </div>
      </div>
      <div className="w-5/6 mt-28 h-auto flex justify-around">
      <button className="bg-[#430AFF] w-[285px] h-[45px] text-white shadow-2xl rounded-lg font-black ">
        ویرایش پروفایل
      </button>
      <button className="bg-[#430AFF]/25 w-[285px] h-[45px] text-black shadow-2xl rounded-lg font-black " disabled>
        ثبت تغییرات
      </button>
      </div>
    </div>
  );
}
