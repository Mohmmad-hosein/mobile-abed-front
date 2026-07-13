import { FC, useState } from "react";
import { motion } from "framer-motion";

interface FloatingInputProps {
  label: string;
  width: number | string;
  height: number | string;
  textarea?: boolean;
}

const FloatingInput: FC<FloatingInputProps> = ({
  label,
  width,
  height,
  textarea = false,
}) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const active = focused || value.length > 0;

  const labelAnimate = {
  top: active ? -12 : textarea ? 22 : "50%",
  right: 18,
  y: active ? 0 : textarea ? 0 : "-50%",
  scale: active ? 0.9 : 1,
};

  return (
    <div
      className="relative cursor-grab"
      style={{
        width,
        height,
      }}
    >
      <motion.label
        animate={labelAnimate}
        transition={{
          duration: 0.22,
        }}
        className="absolute bg-white px-2 text-[#1A0873] font-black text-xl pointer-events-none rounded-md"
      >
        {label}
      </motion.label>

      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          dir="rtl"
          className="
            w-full
            h-full
            resize-none
            rounded-xl
            border-[3px]
            border-[#1A0873]
            outline-none
            px-5
            pt-5
            pb-5
            text-lg
            text-right
            font-black
            text-[#1A0873]
            leading-8
            overflow-y-auto
        "
        />
      ) : (
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full font-black items-end text-right text-[#1A0873] h-full rounded-xl border-[3px] border-[#1A0873] outline-none px-5 text-lg"
        />
      )}
    </div>
  );
};

export default FloatingInput;
