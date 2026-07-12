import React, { Component } from "react";
import TelegramIcon from "../../assets/icons8-telegram-50 1.png";
import InstagramIcon from "../../assets/icons8-instagram-50 1.png";
import FaceBookIcon from "../../assets/icons8-facebook-50 (1) 1.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="w-full flex flex-wrap h-[620px] bg-[#1B152D]/85">
        <div className="w-full h-[580px] flex p-14">
          <div className="w-1/4 text-white flex justify-center flex-wrap border-r-4 border-white">
            <h1 className="text-4xl font-extrabold w-full text-center">
              اطلاعات تماس
            </h1>
            <div className=" w-full flex flex-wrap justify-center">
              {" "}
              <p className="w-5/6 text-center text-2xl font-black">
                0937 161 4300
              </p>
              <p className="w-5/6 text-center text-2xl font-black">
                omidabed47@gmail.com
              </p>
              <p className="w-5/6 text-center text-2xl font-black">
                ساری, بلوار امام رضا , رو به روی استانه امام زاده عباس
              </p>
            </div>
          </div>
          <div className="w-1/4 text-white flex justify-center flex-wrap border-r-4 border-white">
            <h1 className="text-4xl font-extrabold w-full text-center">
              سرویس های ما
            </h1>
            <div className=" w-full flex flex-wrap justify-center">
              {" "}
              <p className="w-5/6 text-center text-2xl font-black">
                فروش موبایل
              </p>
              <p className="w-5/6 text-center text-2xl font-black">
                مشاوره فروش
              </p>
              <p className="w-5/6 text-center text-2xl font-black">
                مشاوره تعمیرات
              </p>
            </div>
          </div>
          <div className="w-1/4 text-white flex justify-center flex-wrap border-r-4 border-white">
            <h1 className="text-3xl font-extrabold w-full text-center">
              لینک سریع
            </h1>
            <div className=" w-full flex flex-wrap justify-center">
              {" "}
              <p className="w-5/6 text-center text-2xl font-black">درباره ما</p>
              <p className="w-5/6 text-center text-2xl font-black">
                لیست موبایل
              </p>
              <p className="w-5/6 text-center text-2xl font-black">
                مشاوره تعمیرات
              </p>
              <p className="w-5/6 text-center text-2xl font-black">
                مشاوره فروش
              </p>
            </div>
          </div>
          <div className="w-1/4 text-white flex justify-center flex-wrap border-white">
            <h1 className="text-3xl font-extrabold">
              <span className="text-[#1702FF]">Mobile</span> Abed
            </h1>
            <div className=" w-full flex flex-wrap justify-center">
              {" "}
              <p className="w-5/6 text-center text-2xl font-black">
                ارعه راهکار های نوآورانه تجاری که رشد را هدایت کرده و ارزش
                پایدار ایجاد می کنند
              </p>
              <div className="w-full flex gap-8 justify-center overflow-hidden">
                <img
                  src={InstagramIcon}
                  className="w-[48px] h-[48px]"
                  alt="instagram"
                />
                <img
                  src={FaceBookIcon}
                  className="w-[48px] h-[48px]"
                  alt="facebook"
                />
                <img
                  src={TelegramIcon}
                  className="w-[48px] h-[48px]"
                  alt="telegram"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-10 text-white font-extrabold text-xl border-t-4 border-white flex justify-center items-center">
          تمامی حقوق و هر گونه استفاده از مطالب از این سایت پیگرد قانونی دارد .
        </div>
      </div>
    );
  }
}
