import { Pen, Trash2, Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import Pagination from "../../components/ui/Pagination";

export default function UserPayList() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 4; 
  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        // TODO: این بخش را با API واقعی خود جایگزین کنید
        // const response = await axios.get('/api/user/orders');
        // setOrders(response.data);

        // --- دیتای تستی برای تست صفحه‌بندی (12 آیتم) ---
        const mockData = Array.from({ length: 12 }).map((_, index) => ({
          id: index + 1,
          title: `iphone ${17 - (index % 3)} pro max`,
          price: `${500 - index * 10} میلیون`,
          status: index % 2 === 0 ? "پرداخت نشده" : "در انتظار تایید",
          image: "", // آدرس عکس
        }));
        
        setTimeout(() => {
          setOrders(mockData);
          setIsLoading(false);
        }, 1000);

      } catch (error) {
        console.error("خطا در دریافت اطلاعات:", error);
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteItem = (id) => {
    // TODO: اتصال به API حذف آیتم
    console.log("Delete item:", id);
    setOrders(orders.filter(order => order.id !== id));
  };

  const handleCheckoutAll = () => {
    console.log("Checkout all");
  };

  const handleDeleteAll = () => {
    console.log("Delete all");
    setOrders([]);
  };

  // ================= محاسبات صفحه‌بندی =================
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // اسکرول نرم به بالای لیست هنگام تغییر صفحه
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col h-full w-full items-center justify-start text-xl md:text-2xl font-bold text-gray-700 py-6 md:py-0">
      
      {/* هدر جدول - فقط در دسکتاپ نمایش داده می‌شود */}
      <div className="hidden text-xl mt-6 md:flex w-5/6 text-black p-3 border-dashed border-b-4">
        <h1 className="w-1/5 text-left">دکمه دسترسی</h1>
        <h1 className="w-1/5 text-center">وضعیت سفارش شما</h1>
        <h1 className="w-1/5 text-center">قیمت</h1>
        <h1 className="w-1/5 text-center">نام موبایل</h1>
        <h1 className="w-1/5 text-center">عکس موبایل</h1>
      </div>

      {/* بخش نمایش کارت‌ها یا حالت لودینگ */}
      <div className="flex flex-col gap-4 w-full items-center mt-4 md:mt-8 min-h-[350px]">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full mt-20 text-[#430AFF]">
            <Loader2 className="w-12 h-12 animate-spin mb-4" />
            <p className="text-lg font-bold">در حال دریافت اطلاعات...</p>
          </div>
        ) : currentItems.length === 0 ? (
          <div className="mt-20 text-xl font-normal text-gray-500">
            هیچ سفارشی یافت نشد.
          </div>
        ) : (
          currentItems.map((order) => (
            <div key={order.id} className="w-[90%] md:w-5/6 shadow-2xl border-2 bg-[#12054F]/70 h-auto md:h-[70px] flex flex-col-reverse md:flex-row rounded-2xl p-4 md:p-0 gap-4 md:gap-0 items-center justify-between transition-all hover:scale-[1.01]">
              
              {/* دکمه‌های دسترسی */}
              <div className="w-full md:w-1/5 h-full gap-2 flex justify-center items-center text-white">
                <button 
                  onClick={() => handleDeleteItem(order.id)}
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="bg-[#0D004D] text-white p-2 rounded-lg hover:bg-[#180280] transition-colors">
                  <Pen className="w-5 h-5" />
                </button>
                <button className="bg-[#0D004D] text-white px-3 py-2 rounded-lg text-sm md:text-base hover:bg-[#180280] transition-colors">
                  پرداخت
                </button>
              </div>

              {/* وضعیت سفارش */}
              <div className="w-full md:w-1/5 h-full flex justify-center items-center text-white text-base md:text-xl">
                <span className="md:hidden text-gray-300 ml-2 font-normal">وضعیت: </span>
                {order.status}
              </div>

              {/* قیمت */}
              <div className="w-full md:w-1/5 h-full flex justify-center items-center text-white text-base md:text-xl">
                <span className="md:hidden text-gray-300 ml-2 font-normal">قیمت: </span>
                {order.price}
              </div>

              {/* نام موبایل */}
              <div className="w-full md:w-1/5 h-full flex justify-center items-center text-white text-base md:text-xl dir-ltr">
                {order.title}
              </div>

              {/* عکس موبایل */}
              <div className="w-full md:w-1/5 h-full flex justify-center items-center">
                <div className="w-[58px] h-[58px] bg-[#D9D9D9] rounded-lg overflow-hidden flex items-center justify-center">
                  {order.image ? (
                     <img src={order.image} alt={order.title} className="w-full h-full object-cover" />
                  ) : (
                     <span className="text-xs text-gray-500">بدون عکس</span>
                  )}
                </div>
              </div>

            </div>
          ))
        )}
      </div>


      {/* دکمه‌های عملیاتی پایین */}
      <div className="w-[90%] md:w-5/6 h-32 flex-col md:flex-row flex  justify-around items-center gap-4 md:gap-0">
        <button 
          onClick={handleCheckoutAll}
          disabled={orders.length === 0}
          className="bg-[#430AFF] disabled:bg-gray-400 w-full max-w-[200px] h-[75px] text-white shadow-2xl rounded-lg font-black transition-all hover:bg-[#3200cc]"
        >
          تسویه حساب
        </button>

      {!isLoading && totalPages > 1 && (
        <Pagination
          currentPage={currentPage} 
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
        />
      )}

        <button 
          onClick={handleDeleteAll}
          disabled={orders.length === 0}
          className="bg-[#430AFF]/25 disabled:bg-gray-200 disabled:text-gray-400 w-full max-w-[200px] h-[75px] text-black shadow-2xl rounded-lg font-black hover:bg-red-500 hover:text-white transition-colors"
        >
          حذف تمامی موارد
        </button>
      </div>

    </div>
  );
}