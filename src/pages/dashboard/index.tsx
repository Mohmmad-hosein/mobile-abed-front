import React, { useState } from "react";
import { X } from "lucide-react"; // در صورت عدم استفاده از lucide-react می‌توانید این خط را حذف کرده و از آیکون ساده استفاده کنید

export default function DashboardInfoPage() {
  // استیت نگه‌داری اطلاعات کاربری
  const [userInfo, setUserInfo] = useState({
    nationalId: "2081382164",
    fullName: "سید محمد حسین جلالی",
    phoneNumber: "09109681679",
    address: "ساری , ذغال چال , بعثت 31",
    email: "mohmmadjalali44@gmail.com",
    birthDate: "1999/12/30",
  });

  // استیت باز/بسته بودن مدال
  const [isModalOpen, setIsModalOpen] = useState(false);

  // استیت برای فرم داخل مدال
  const [formData, setFormData] = useState({ ...userInfo });

  // باز کردن مدال و لود اطلاعات فعلی
  const handleOpenModal = () => {
    setFormData({ ...userInfo });
    setIsModalOpen(true);
  };

  // تغییر مقادیر اینپوت‌ها
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ثبت فرم و آپدیت اطلاعات
  const handleSubmit = (e) => {
    e.preventDefault();

    // ====================================================
    // TODO: کد ای‌پای (API) خود را در این بخش قرار دهید
    // مثال:
    // await axios.put('/api/user/profile', formData);
    // ====================================================

    setUserInfo(formData); // آپدیت مقادیر صفحه
    setIsModalOpen(false); // بستن مدال
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-2xl font-bold text-gray-700 py-10 md:py-0 relative">
      <h1>اطلاعات کاربری</h1>

      {/* نمایش اطلاعات */}
      <div className="w-[95%] md:w-5/6 mt-10 md:mt-16 flex flex-col gap-8 md:gap-0">
        <div className="flex flex-col md:flex-row text-[#0D004D] justify-around items-center gap-4 text-base md:text-lg font-bold text-center">
          <h1> کد ملی : {userInfo.nationalId} </h1>
          <h1> نام و نام خانوادگی: {userInfo.fullName} </h1>
        </div>

        <div className="flex flex-col md:flex-row md:mt-12 text-[#0D004D] justify-around items-center gap-4 text-base md:text-lg font-bold text-center">
          <h1> شماره موبایل : {userInfo.phoneNumber} </h1>
          <h1> آدرس : {userInfo.address} </h1>
        </div>

        <div className="flex flex-col md:flex-row md:mt-12 text-[#0D004D] justify-around items-center gap-4 text-base md:text-lg font-bold text-center">
          <h1> ایمیل : {userInfo.email} </h1>
          <h1> تاریخ تولد : {userInfo.birthDate} </h1>
        </div>
      </div>

      {/* دکمه‌های صفحه */}
      <div className="w-[95%] md:w-5/6 mt-16 md:mt-28 h-auto flex flex-col md:flex-row justify-around items-center gap-4 md:gap-0">
        <button
          onClick={handleOpenModal}
          className="bg-[#430AFF] w-full max-w-[285px] h-[45px] text-white shadow-2xl rounded-lg font-black hover:bg-[#3400d6] transition-all"
        >
        ویرایش اطلاعات کاربری
        </button>
        <button
          className="bg-[#430AFF]/25 w-full max-w-[285px] h-[45px] text-black shadow-2xl rounded-lg font-black opacity-60 cursor-not-allowed"
          disabled
        >
        درخواست پنل همکاری
        </button>
      </div>

      {/* ==================== مدال ویرایش اطلاعات ==================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden p-6 text-gray-800 text-right animate-in fade-in zoom-in-95 duration-200">
            {/* هدر مدال */}
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-xl font-bold text-[#0D004D]">
                ویرایش اطلاعات کاربری
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* فرم ویرایش */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-normal">
                {/* نام و نام خانوادگی */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-gray-700">
                    نام و نام خانوادگی:
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#430AFF]"
                    required
                  />
                </div>

                {/* کد ملی */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-gray-700">کد ملی:</label>
                  <input
                    type="text"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#430AFF]"
                    required
                  />
                </div>

                {/* شماره موبایل */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-gray-700">
                    شماره موبایل:
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#430AFF]"
                    required
                  />
                </div>

                {/* ایمیل */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-gray-700">ایمیل:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#430AFF] text-left dir-ltr"
                    required
                  />
                </div>

                {/* تاریخ تولد */}
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-gray-700">تاریخ تولد:</label>
                  <input
                    type="text"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#430AFF]"
                    required
                  />
                </div>

                {/* آدرس */}
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="font-bold text-gray-700">آدرس:</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={2}
                    className="border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-[#430AFF] resize-none"
                    required
                  />
                </div>
              </div>

              {/* دکمه‌های مدال */}
              <div className="flex justify-end gap-3 mt-6 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-bold transition-colors text-sm"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#430AFF] hover:bg-[#3400d6] text-white rounded-lg font-bold transition-colors text-sm shadow-md"
                >
                  ذخیره تغییرات
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
