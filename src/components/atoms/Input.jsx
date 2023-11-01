import { useState } from "react";

export default function Input({ label, type }) {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showError, setShowError] = useState(false);
  const [emptyError, setEmptyError] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");

    setEmptyError(e.target.value === "");

    e.target.type === "email" && /^\S+@\S+\.\S+$/.test(e.target.value)
      ? setShowError(false)
      : e.target.type !== "email"
      ? setShowError(false)
      : setShowError(true);
  };

  return (
    <div>
      <label
        className={`transition duration-300  text-med mb-1 p-1 w-fit absolute ml-3 ${
          isFocused || hasValue
            ? "-translate-y-[10px] bg-neu-0 text-pri-5"
            : `translate-y-[14px] text-neu-6`
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        className={`border-2 rounded-md bg-neu-0 ${
          emptyError ? "border-dan-5" : "border-neu-5"
        }  focus:border-pri-5 focus:outline-none p-3 w-full`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      ></input>
      {showError && (
        <div>
          <i className="fa-solid fa-car"></i>
        </div>
      )}
    </div>
  );
}
