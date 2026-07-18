import { FC, useState } from "react";
import { motion } from "framer-motion";

interface FloatingInputProps {
  label: string;
  width: number | string;
  height: number | string;
  textarea?: boolean;

  name?: string;
  type?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  autoComplete?: string;
  placeholder?: string;
  disabled?: boolean;
}

const FloatingInput: FC<FloatingInputProps> = ({
  label,
  width,
  height,
  textarea = false,

  name,
  type = "text",
  value = "",
  onChange,
  autoComplete,
  placeholder,
  disabled = false,
}) => {
  const [focused, setFocused] = useState(false);

  const active = focused || (value?.length ?? 0) > 0;

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
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
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
      )}
    </div>
  );
};

export default FloatingInput;
