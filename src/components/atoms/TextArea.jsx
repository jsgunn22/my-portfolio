import { useState } from "react";

export default function TextArea({ label }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  return (
    <div className={`flex flex-col`}>
      <label
        className={`transition duration-300  text-med mb-1 p-1 w-fit absolute ml-3 ${
          isFocused || hasValue
            ? "-translate-y-[10px] bg-neu-0 text-pri-5"
            : `translate-y-[14px] text-neu-6`
        }`}
      >
        {label}
      </label>
      <textarea
        className="border-2 rounded-md bg-neu-0 border-neu-5 focus:border-pri-5 focus:outline-none p-3 w-full"
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></textarea>
    </div>
  );
}
