import React, { useState } from "react";
import UserGif from "../../assets/icons8-user.gif";
import FloatingInput from "../../components/ui/FloatingInput";
import GoogleIcon from "../../assets/icons8-google-96.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiHome } from "react-icons/fi"; // آیکون خانه

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      toast.error("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    try {
      console.log("Login Data :", formData);
      toast.success("با موفقیت وارد شدید.");
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "مشکلی در ورود پیش آمد.");
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-50 p-4 dir-rtl">
      {/* دکمه بازگشت به خانه */}
      <motion.button
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-5 right-5 z-20 flex items-center justify-center rounded-full bg-white p-3 text-gray-700 shadow-md transition-colors hover:bg-gray-100 hover:text-black"
        title="بازگشت به صفحه اصلی"
      >
        <FiHome className="h-6 w-6" />
      </motion.button>

      {/* کارت اصلی - ریسپانسیو */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex h-auto min-h-[600px] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border-2 border-black bg-white shadow-2xl md:flex-row"
      >
        {/* بخش بنر بنفش (سمت راست در RTL) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col items-center justify-center bg-[#0D004D] p-8 text-white md:w-5/12 lg:w-4/12"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">خوش برگشتید</h1>
            <p className="text-sm font-light leading-relaxed sm:text-base text-gray-200">
              با وارد کردن اطلاعات خودتون، تجربه دوباره استفاده و سفارش از فروشگاه ما رو داشته باشید.
            </p>
            <motion.button
              onClick={() => navigate("/SignUp")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 w-full max-w-[240px] rounded-2xl bg-white py-3.5 font-bold text-black shadow-md transition-colors hover:bg-gray-200"
            >
              ساخت حساب
            </motion.button>
          </div>
        </motion.div>

        {/* بخش فرم ورود (سمت چپ در RTL) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex w-full flex-1 flex-col items-center justify-center p-6 sm:p-10 md:w-7/12 lg:w-8/12"
        >
          <motion.img
            src={UserGif}
            alt="User"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 h-28 w-28 sm:h-32 sm:w-32 object-contain"
          />

          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4">
            <FloatingInput
              name="username"
              value={formData.username}
              onChange={handleChange}
              height={56}
              width="100%"
              label="نام کاربری"
            />

            <FloatingInput
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              height={56}
              width="100%"
              label="رمز عبور"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 flex h-14 w-full items-center justify-center rounded-xl bg-[#1A0873] font-bold text-white shadow-lg transition-colors hover:bg-[#120554]"
            >
              وارد شدن
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-gray-50 font-bold text-gray-800 transition-colors hover:bg-gray-100"
            >
              <img src={GoogleIcon} alt="Google" className="h-7 w-7" />
              <span>ورود با گوگل</span>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}