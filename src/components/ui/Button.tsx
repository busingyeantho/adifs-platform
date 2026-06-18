import React from "react";
import { theme } from "@/constants/theme";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  variant = "primary",
  type = "button",
  className = "",
  children,
  disabled,
  ...props
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      type={type}
      {...props}
      disabled={disabled}
      style={{
        backgroundColor: isPrimary
          ? theme.colors.primary
          : "transparent",
          

        color: isPrimary
          ? theme.colors.textLight
          : theme.colors.primaryLight,

        border: isPrimary
          ? "none"
          : `1px solid ${theme.colors.borderLight}`,
      }}
     className={
  `px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ` +
  `${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ` +
  className
}
    >
      {text ?? children}
    </button>
  );
}