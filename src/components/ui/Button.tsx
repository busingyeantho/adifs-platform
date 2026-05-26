import React from "react";
import { theme } from "@/constants/theme";

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  text,
  variant = "primary",
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      style={{
        backgroundColor: isPrimary
          ? theme.colors.primary
          : "transparent",

        color: isPrimary
          ? theme.colors.textLight
          : theme.colors.textDark,

        border: isPrimary
          ? "none"
          : `1px solid ${theme.colors.borderLight}`,
      }}
      className="
        px-6
        py-3
        rounded-full
        font-medium
        transition-all
        duration-300
        hover:scale-105
      "
    >
      {text}
    </button>
  );
}