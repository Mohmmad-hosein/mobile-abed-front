import { Trash2, Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import Pagination from "../../components/ui/Pagination"; // آدرس کامپوننت صفحه‌بندی خود را بررسی کنید

export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    const fetchNotifications = async () => {
      setIsLoading(true);
      try {
        // TODO: این بخش را با API واقعی دریافت اعلانات جایگزین کنید
        // const response = await axios.get('/api/user/notifications');
        // setNotifications(response.data);

        // --- دیتای تستی برای اعلانات (10 آیتم) ---
        const mockData = Array.from({ length: 10 }).map((_, index) => ({
          id: index + 1,
          message: index % 2 === 0
            ? `محصول شما (کد پیگیری ${1000 + index}) در حال بررسی است و به زودی نتیجه آن برای شما ارسال خواهد شد.`
            : `سفارش شماره ${5000 + index} با موفقیت ثبت شد و در مرحله پردازش قرار گرفت.`,
        }));

        setTimeout(() => {
          setNotifications(mockData);
          setIsLoading(false);
        }, 1000);

      } catch (error) {
        console.error("خطا در دریافت اعلانات:", error);
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const handleDeleteItem = (id) => {
    // TODO: اتصال به API حذف یک اعلان مشخص
    console.log("Delete notification item:", id);
    setNotifications(prev => prev.filter(item => item.id !== id));
  };

  const handleDeleteAll = () => {
    // TODO: اتصال به API پاک‌سازی تمامی اعلانات
    console.log("Delete all notifications");
    setNotifications([]);
  };

  // ================= محاسبات صفحه‌بندی =================
  const totalPages = Math.ceil(notifications.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = notifications.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-start text-xl md:text-2xl font-bold text-gray-700 py-6 md:py-0">
      
      {/* هدر جدول - فقط در دسکتاپ نمایش داده می‌شود */}
      <div className="hidden text-xl mt-6 md:flex w-5/6 text-black p-3 border-dashed border-b-4">
        <h1 className="w-1/4 text-center">دکمه دسترسی</h1>
        <h1 className="w-3/4 text-center">عنوان پیام</h1>
      </div>

      {/* بخش نمایش اعلانات یا حالت لودینگ */}
      <div className="flex flex-col gap-4 w-full items-center mt-4 md:mt-8 min-h-[350px]">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full mt-20 text-[#430AFF]">
            <Loader2 className="w-12 h-12 animate-spin mb-4" />
            <p className="text-lg font-bold">در حال دریافت اعلانات...</p>
          </div>
        ) : currentItems.length === 0 ? (
          <div className="mt-20 text-xl font-normal text-gray-500">
            هیچ پیامی برای نمایش وجود ندارد.
          </div>
        ) : (
          currentItems.map((notification) => (
            <div 
              key={notification.id} 
              className="w-[90%] md:w-5/6 shadow-2xl border-2 bg-[#12054F]/70 h-auto md:h-[70px] flex flex-col-reverse md:flex-row rounded-2xl p-4 md:p-0 gap-4 md:gap-0 items-center justify-between transition-all hover:scale-[1.01]"
            >
              
              {/* دکمه‌های دسترسی */}
              <div className="w-full md:w-1/4 h-full gap-2 flex justify-center items-center text-white">
                <button 
                  onClick={() => handleDeleteItem(notification.id)}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                  title="حذف پیام"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              {/* متن اعلان */}
              <div className="w-full md:w-3/4 text-right md:text-center text-white text-base md:text-lg px-4 h-full flex justify-center items-center font-normal md:font-bold">
                <span className="md:hidden text-gray-300 ml-2 font-normal">پیام: </span>
                {notification.message}
              </div>

            </div>
          ))
        )}
      </div>

      {/* دکمه‌های عملیاتی پایین و صفحه‌بندی */}
      <div className="w-[90%] md:w-5/6 h-auto md:h-32 flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 mt-8 md:mt-4 mb-10">
        
        {!isLoading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        )}

        <button 
          onClick={handleDeleteAll}
          disabled={notifications.length === 0}
          className="bg-[#430AFF]/25 disabled:bg-gray-200 disabled:text-gray-400 w-full max-w-[200px] h-[75px] text-black shadow-2xl rounded-lg font-black hover:bg-red-500 hover:text-white transition-colors"
        >
          حذف تمامی موارد
        </button>

      </div>

    </div>
  );
}