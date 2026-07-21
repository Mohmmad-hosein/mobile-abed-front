import React, { useState } from "react";
import { motion } from "framer-motion";


interface ChatInputProps {
  onSend: (message:string)=>void;
}


export default function ChatInput({
  onSend
}:ChatInputProps){


  const [message,setMessage] = useState("");



  const sendMessage = ()=>{

    const text = message.trim();

    if(!text) return;


    onSend(text);

    setMessage("");

  };



  const handleKeyDown = (
    e:React.KeyboardEvent<HTMLTextAreaElement>
  )=>{


    if(e.key === "Enter" && !e.shiftKey){

      e.preventDefault();

      sendMessage();

    }

  };



  return (

    <motion.div

      initial={{
        opacity:0,
        y:40
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:.4
      }}

      className="
      w-full
      flex
      items-center
      gap-4
      bg-[#3E3A4B]
      rounded-2xl
      p-4
      "

    >


      <input

        value={message}

        onChange={(e)=>
          setMessage(e.target.value)
        }

        onKeyDown={handleKeyDown}

        placeholder="
        سوال خود را بنویسید...
        "

        rows={1}

        className="
        flex-1
        resize-none
        bg-transparent
        outline-none
        text-white
        text-lg
        font-bold
        text-right
        placeholder:text-white/50
        max-h-[120px]
        "

      />




      <motion.button

        whileHover={{
          scale:1.05,
          boxShadow:
          "0 0 25px rgba(23,2,255,.5)"
        }}

        whileTap={{
          scale:.95
        }}

        onClick={sendMessage}

        className="
        w-[120px]
        h-[55px]
        rounded-xl
        bg-[#1702FF]
        text-white
        font-black
        text-lg
        "

      >

        ارسال

      </motion.button>


    </motion.div>

  );
}