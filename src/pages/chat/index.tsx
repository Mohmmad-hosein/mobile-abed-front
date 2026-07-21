import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import ChatHeader from "../../components/chat/ChatHeader";
import ChatInfoCard from "../../components/chat/ChatInfoCard";
import ChatBubble from "../../components/chat/ChatBubble";
import ChatInput from "../../components/chat/ChatInput";
import TypingAnimation from "../../components/chat/TypingAnimation";

import shadowNumber1 from "../../assets/Ellipse 2.png";
import shadowNumber2 from "../../assets/Ellipse 1.png";

interface Message {
  id: number;
  sender: "user" | "admin";
  message: string;
  time: string;
}

export default function RepairAndSalesConsultation() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "admin",
      message:
        "سلام 👋 به بخش مشاوره فروش و تعمیرات موبایل عابد خوش اومدید. هر سوالی درباره خرید، تعمیرات یا قیمت روز دارید بپرسید.",
      time: "12:30",
    },
  ]);

  const [typing, setTyping] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const sendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now(),
      sender: "user",
      message: text,
      time: new Date().toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);

    setTyping(true);

    setTimeout(() => {
      setTyping(false);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "admin",
          message:
            "پیام شما ثبت شد. کارشناسان موبایل عابد در اولین فرصت پاسخگوی شما خواهند بود.",
          time: new Date().toLocaleTimeString("fa-IR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1800);
  };

  return (
    <div className="relative overflow-hidden py-20">

      {/* Background */}

      <img
        src={shadowNumber1}
        className="absolute top-0 right-0 w-[700px] opacity-60 pointer-events-none"
      />

      <img
        src={shadowNumber2}
        className="absolute bottom-0 left-0 w-[700px] opacity-60 pointer-events-none"
      />

      <div className="relative z-10 w-[92%] xl:w-[1400px] mx-auto">

              <motion.h1
        initial={{ opacity: 0, y: -35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-[#1A0873] font-bold text-center mb-8"
      >
        شاوره تعمیرات و فروش
      </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-14">

          {/* Sidebar */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .5,
            }}
            className="flex flex-col gap-6"
          >

            <ChatInfoCard
              variant="dark"
              title="مشاوره خرید"
              description="قبل از خرید موبایل، بودجه، نیاز و انتظارات خود را برای ما ارسال کنید تا بهترین گزینه را به شما معرفی کنیم."
            />

            <ChatInfoCard
              variant="light"
              title="تعمیرات تخصصی"
              description="در صورت خرابی گوشی، مدل دستگاه و مشکل آن را توضیح دهید تا کارشناسان ما شما را راهنمایی کنند."
            />

            <motion.div
              whileHover={{
                y: -5,
              }}
              className="
                rounded-xl
                bg-[#0A003B]
                p-6
                text-white
                shadow-xl
              "
            >
              <h2 className="text-2xl font-black mb-5">
                خدمات ما
              </h2>

              <ul className="space-y-4 font-bold leading-8">

                <li>✅ مشاوره رایگان خرید موبایل</li>

                <li>✅ بررسی قیمت روز بازار</li>

                <li>✅ تعمیرات تخصصی</li>

                <li>✅ معرفی بهترین گوشی متناسب با بودجه</li>

                <li>✅ پاسخگویی سریع کارشناسان</li>

              </ul>

            </motion.div>

          </motion.div>

          {/* Chat */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .2,
            }}
            className="
              lg:col-span-2
              bg-[#ECECEC]
              rounded-2xl
              shadow-2xl
              border-4
              border-[#1A0873]
              overflow-hidden
              flex
              flex-col
            "
          >
                        {/* Messages */}

            <div
              className="
                flex-1
                h-[650px]
                overflow-y-auto
                p-6
                flex
                flex-col
                gap-5
                bg-[#F8F9FD]
              "
            >
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  sender={message.sender}
                  message={message.message}
                  time={message.time}
                />
              ))}

              {typing && <TypingAnimation />}

              <div ref={bottomRef} />
            </div>

            {/* Input */}

            <div
              className="
                border-t-2
                border-[#E4E4E4]
                bg-white
                p-5
              "
            >
              <ChatInput onSend={sendMessage} />
            </div>
          </motion.div>
        </div>

        {/* Footer Text */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
          }}
          className="
            mt-14
            text-center
            text-gray-500
            font-bold
            leading-8
          "
        >
          تمامی پیام‌های شما پس از ارسال توسط کارشناسان
          <span className="text-[#1702FF]"> Mobile Abed </span>
          بررسی شده و در سریع‌ترین زمان ممکن پاسخ داده خواهند شد.
        </motion.div>
      </div>
    </div>
  );
}