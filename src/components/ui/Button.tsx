import React from "react";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
        variant === "primary"
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "border border-gray-400 text-gray-800 hover:bg-gray-100"
      }`}
    >
      {text}
    </button>
  );
}