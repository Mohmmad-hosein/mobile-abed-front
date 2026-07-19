import TelegramIcon from "../../assets/icons8-telegram-50 1.png";
import InstagramIcon from "../../assets/icons8-instagram-50 1.png";
import FaceBookIcon from "../../assets/icons8-facebook-50 (1) 1.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1B152D]/90 mt-20">
      <div
        className="
        max-w-[1600px]
        mx-auto
        px-6
        md:px-10
        lg:px-14
        py-16

        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-12
      "
      >
        {/* Contact */}

        <div className="text-white text-center lg:border-r-4 border-white lg:pr-8">
          <h2 className="text-3xl font-extrabold mb-8">
            اطلاعات تماس
          </h2>

          <div className="space-y-6 text-xl font-bold">
            <p>0937 161 4300</p>

            <p className="break-all">
              omidabed47@gmail.com
            </p>

            <p>
              ساری، بلوار امام رضا،
              <br />
              روبه‌روی آستانه امام‌زاده عباس
            </p>
          </div>
        </div>

        {/* Services */}

        <div className="text-white text-center lg:border-r-4 border-white lg:pr-8">
          <h2 className="text-3xl font-extrabold mb-8">
            سرویس‌های ما
          </h2>

          <div className="space-y-5 text-xl font-bold">
            <p>فروش موبایل</p>
            <p>مشاوره خرید</p>
            <p>مشاوره تعمیرات</p>
          </div>
        </div>

        {/* Quick Links */}

        <div className="text-white text-center lg:border-r-4 border-white lg:pr-8">
          <h2 className="text-3xl font-extrabold mb-8">
            لینک سریع
          </h2>

          <div className="space-y-5 text-xl font-bold">
            <p className="cursor-pointer hover:text-blue-400 transition">
              درباره ما
            </p>

            <p className="cursor-pointer hover:text-blue-400 transition">
              لیست موبایل
            </p>

            <p className="cursor-pointer hover:text-blue-400 transition">
              مشاوره تعمیرات
            </p>

            <p className="cursor-pointer hover:text-blue-400 transition">
              مشاوره خرید
            </p>
          </div>
        </div>

        {/* Brand */}

        <div className="text-white text-center flex flex-col items-center">
          <h2 className="text-4xl font-black">
            <span className="text-[#1702FF]">Mobile</span>{" "}
            Abed
          </h2>

          <p className="mt-8 text-lg leading-9 max-w-[320px]">
            ارائه راهکارهای نوآورانه در فروش و تعمیرات موبایل
            همراه با خدمات حرفه‌ای و مشاوره تخصصی.
          </p>

          <div className="flex gap-6 mt-10">
            {[InstagramIcon, FaceBookIcon, TelegramIcon].map(
              (icon, index) => (
                <img
                  key={index}
                  src={icon}
                  className="
                    w-12
                    h-12
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:scale-110
                    hover:-translate-y-1
                  "
                  alt=""
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t-2 border-white/20 py-6 px-4">
        <p className="text-center text-white font-bold text-sm sm:text-base lg:text-lg">
          تمامی حقوق این وب‌سایت متعلق به Mobile Abed بوده و هرگونه
          کپی‌برداری بدون اجازه پیگرد قانونی دارد.
        </p>
      </div>
    </footer>
  );
}