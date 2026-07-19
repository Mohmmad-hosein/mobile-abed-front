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

  theme?: "primary" | "white";
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
  theme = "primary",
}) => {
  const [focused, setFocused] = useState(false);

  const active = focused || (value?.length ?? 0) > 0;

  const isWhite = theme === "white";

  const borderColor = isWhite ? "border-white" : "border-[#1A0873]";
  const textColor = isWhite ? "text-white" : "text-[#1A0873]";
  const labelBg = isWhite ? "bg-[#0A003B]" : "bg-white";
  const labelText = isWhite ? "text-white" : "text-[#0A003B]";

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
        className={`absolute px-2  font-black text-xl pointer-events-none rounded-md ${labelBg} ${labelText}`}
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
          className={`
            w-full
            h-full
            resize-none
            rounded-xl
            border-[3px]
            outline-none
            px-5
            pt-5
            pb-5
            text-lg
            text-right
            font-black
            leading-8
            overflow-y-auto
            ${borderColor}
${textColor}

${isWhite ? "placeholder:text-white/40" : "placeholder:text-[#1A0873]/40"}
        `}
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
          className={`
            w-full
            h-full
            resize-none
            rounded-xl
            border-[3px]
            outline-none
            px-5
            pt-5
            pb-5
            text-lg
            text-right
            font-black
            leading-8
            overflow-y-auto
            ${borderColor}
${textColor}
${isWhite ? "placeholder:text-white/40" : "placeholder:text-[#1A0873]/40"}
        `}
        />
      )}
    </div>
  );
};

export default FloatingInput;
