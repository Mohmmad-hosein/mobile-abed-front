import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UserGif from "../../assets/icons8-user.gif";
import FloatingInput from "../../components/ui/FloatingInput";
import GoogleIcon from "../../assets/icons8-google-96.png";
import { motion } from "framer-motion";
import { FiHome } from "react-icons/fi";
import { useMutation } from "@tanstack/react-query";
import { useGoogleLogin } from "@react-oauth/google";
import api from "../../api/axios"; // نمونه axios تعریف شده در پروژه

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🔴 ۱. میوتیشن ثبت‌نام عادی با نام کاربری، ایمیل و رمز عبور
  const registerMutation = useMutation({
    mutationFn: (newUser: typeof formData) => api.post("/auth/signup", newUser),
    onSuccess: (res) => {
      // ذخیره توکن در صورت بازگشت از API یا هدایت مستقیم به لاگین/داشبورد
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }
      toast.success(res.data?.message || "حساب شما با موفقیت ساخته شد");
      navigate("/dashboard");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "مشکلی در ساخت حساب پیش آمد");
    },
  });

  // 🔴 ۲. میوتیشن ارسال توکن گوگل به بک‌اند
  const googleAuthMutation = useMutation({
    mutationFn: (token: string) => api.post("/auth/google", { token }),
    onSuccess: (res) => {
      localStorage.setItem("token", res.data.token);
      toast.success("ثبت‌نام / ورود با گوگل موفقیت‌آمیز بود");
      navigate("/dashboard");
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "خطا در تایید حساب گوگل در سرور");
    },
  });

  // 🔴 ۳. هوک باز کردن مدال انتخاب حساب گوگل
  const handleGoogleSignUp = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      googleAuthMutation.mutate(tokenResponse.access_token);
    },
    onError: () => {
      toast.error("ثبت‌نام با گوگل ناموفق بود");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      toast.error("لطفاً تمام فیلدها را پر کنید.");
      return;
    }

    // ارسال اطلاعات به API
    registerMutation.mutate(formData);
  };

  const goToLogin = () => {
    navigate("/login");
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

      {/* کارت اصلی */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative flex h-auto min-h-[600px] w-full max-w-5xl flex-col-reverse overflow-hidden rounded-3xl border-2 border-black bg-white shadow-2xl md:flex-row"
      >
        {/* بخش فرم ثبت‌نام */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-1 flex-col items-center justify-center p-6 sm:p-10 md:w-7/12 lg:w-8/12"
        >
          <motion.img
            src={UserGif}
            alt="User"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6 h-28 w-28 object-contain sm:h-32 sm:w-32"
          />

          <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-4">
            <FloatingInput
              name="username"
              value={formData.username}
              onChange={handleChange}
              height={56}
              width="100%"
              label="نام کاربری"
              autoComplete="username"
            />

            <FloatingInput
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              height={56}
              width="100%"
              label="ایمیل"
              autoComplete="email"
            />

            <FloatingInput
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              height={56}
              width="100%"
              label="پسورد"
              autoComplete="new-password"
            />

            {/* دکمه ثبت‌نام اصلی */}
            <motion.button
              type="submit"
              disabled={registerMutation.isPending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 flex h-14 w-full items-center justify-center rounded-xl bg-[#1A0873] font-bold text-white shadow-lg transition-colors hover:bg-[#120554] disabled:opacity-60"
            >
              {registerMutation.isPending ? "در حال ساخت حساب..." : "ساخت حساب"}
            </motion.button>

            {/* 🔴 دکمه ثبت‌نام با گوگل */}
            <motion.button
              type="button"
              onClick={() => handleGoogleSignUp()}
              disabled={googleAuthMutation.isPending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-gray-50 font-bold text-gray-800 transition-colors hover:bg-gray-100 disabled:opacity-60"
            >
              <img src={GoogleIcon} alt="Google" className="h-7 w-7" />
              <span>
                {googleAuthMutation.isPending ? "در حال اتصال..." : "ثبت‌نام با گوگل"}
              </span>
            </motion.button>
          </form>
        </motion.div>

        {/* بخش بنر بنفش */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex w-full flex-col items-center justify-center bg-[#0D004D] p-8 text-white md:w-5/12 lg:w-4/12"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">خوش آمدید</h1>
            <p className="text-sm font-light leading-relaxed text-gray-200 sm:text-base">
              با ساخت حساب جدید می‌توانید سفارش‌های خود را به راحتی مدیریت کنید.
            </p>
            <motion.button
              onClick={goToLogin}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 w-full max-w-[260px] rounded-2xl bg-white py-3.5 text-sm font-bold text-black shadow-md transition-colors hover:bg-gray-200 sm:text-base"
            >
              از قبل حساب دارید؟ وارد شوید
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}