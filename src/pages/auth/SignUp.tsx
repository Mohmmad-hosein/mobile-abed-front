import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UserGif from "../../assets/icons8-user.gif";
import FloatingInput from "../../components/ui/FloatingInput";
import GoogleIcon from "../../assets/icons8-google-96.png";
import { motion } from "framer-motion";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();


    if (
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("لطفاً تمام فیلدها را پر کنید.");
      return;
    }


    try {

      console.log("Register Data :", formData);


      // API بعداً اینجا میاد

      /*
      const response = await axios.post(
        "/auth/register",
        formData
      );

      toast.success("حساب شما ساخته شد");

      navigate("/login");
      */


      toast.success("اطلاعات آماده ارسال است");

    } catch (error) {

      toast.error("مشکلی در ساخت حساب پیش آمد");

      console.log(error);
    }
  };


  const goToLogin = () => {
    navigate("/login");
  };


  return (
    <div className="w-full h-screen flex justify-center items-center">

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="w-[70%] shadow-[0_10px_25px_rgba(24,3,129,0.5)] h-[90%] rounded-2xl overflow-hidden flex border-[3px] border-black"
      >


        {/* فرم ثبت نام */}

        <div className="w-[65%] h-full gap-6 flex flex-col justify-center items-center">

          <img
            src={UserGif}
            alt="User"
            className="w-[150px] h-[150px] mb-8"
          />


          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[488px]"
          >


            <FloatingInput
              name="username"
              value={formData.username}
              onChange={handleChange}
              height={60}
              width="100%"
              label="نام کاربری"
              autoComplete="username"
            />


            <FloatingInput
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              height={60}
              width="100%"
              label="ایمیل"
              autoComplete="email"
            />


            <FloatingInput
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              height={60}
              width="100%"
              label="پسورد"
              autoComplete="new-password"
            />



            <motion.button
              type="submit"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="h-[60px] rounded-lg bg-[#1A0873] text-white font-bold"
            >
              ساخت حساب
            </motion.button>



            <motion.button
              type="button"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="flex h-[60px] items-center justify-center gap-3 rounded-lg border border-black bg-[#1A0873]/10 font-bold"
            >

              <img
                src={GoogleIcon}
                alt="Google"
                className="w-8 h-8"
              />

              <span>
                ثبت نام با گوگل
              </span>

            </motion.button>


          </form>

        </div>




        {/* بخش سمت راست */}

        <motion.div
          initial={{
            x: 80,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
          }}

          className="w-[35%] p-8 flex flex-wrap justify-center items-center h-full bg-[#0D004D] border-[3px] border-black"
        >

          <div className="w-full flex flex-wrap justify-center items-center gap-14">


            <h1 className="text-4xl font-bold w-full text-center text-white">
              خوش آمدید
            </h1>


            <p className="text-white text-center w-full">
              با ساخت حساب جدید می‌توانید سفارش‌های خود را مدیریت کنید
            </p>


            <motion.button
              onClick={goToLogin}
              whileHover={{
                scale:1.03
              }}
              whileTap={{
                scale:0.97
              }}
              className="bg-[#D9D9D9] rounded-3xl w-[300px] h-[70px] text-black font-bold hover:bg-gray-200"
            >
              از قبل حساب دارید؟ وارد شوید
            </motion.button>


          </div>

        </motion.div>


      </motion.div>

    </div>
  );
}