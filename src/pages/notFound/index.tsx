import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFound extends Component {
  render() {
    return (
      <div className=" mb-10 bg-[#F8FAFF] flex flex-col justify-center items-center relative overflow-hidden">

        {/* Glow Background */}
        <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-700/20 rounded-full blur-[150px]" />

        {/* Phone SVG */}
        <div className="relative mb-10">
          <svg
            width="250"
            height="250"
            viewBox="0 0 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="65"
              y="20"
              width="120"
              height="210"
              rx="20"
              fill="#1A0873"
            />

            <rect
              x="75"
              y="40"
              width="100"
              height="150"
              rx="10"
              fill="white"
            />

            <circle
              cx="125"
              cy="205"
              r="8"
              fill="white"
            />

            <path
              d="M95 70L155 130"
              stroke="#2563EB"
              strokeWidth="10"
              strokeLinecap="round"
            />

            <path
              d="M155 70L95 130"
              stroke="#2563EB"
              strokeWidth="10"
              strokeLinecap="round"
            />

            <text
              x="125"
              y="175"
              textAnchor="middle"
              fill="#1A0873"
              fontSize="28"
              fontWeight="bold"
            >
              404
            </text>
          </svg>
        </div>

        {/* Content */}
        <h1 className="text-7xl font-black text-[#1A0873]">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4 text-gray-800">
          صفحه پیدا نشد!
        </h2>

        <p className="mt-4 text-gray-500 text-center max-w-[500px] leading-8">
          انگار این صفحه از دسترس خارج شده یا آدرس را اشتباه وارد
          کرده‌اید.
        </p>

        <div className="flex gap-5 mt-10">
          <Link
            to="/"
            className="px-8 py-4 rounded-xl bg-[#1A0873] text-white font-bold shadow-lg hover:scale-105 transition"
          >
            بازگشت به خانه
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 rounded-xl border-2 border-[#1A0873] text-[#1A0873] font-bold hover:bg-[#1A0873] hover:text-white transition"
          >
            صفحه قبلی
          </button>
        </div>
      </div>
    );
  }
}