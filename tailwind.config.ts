import type { Config } from "tailwindcss";
import { theme } from "./src/constants/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,      // "#F28026"
        primaryLight: theme.colors.primaryLight,  // "#FEF3E2"
        accent: theme.colors.accent,        // "#D64927"
        darkBg: theme.colors.darkBg,        // "#1B1E25"
        surfaceDark: theme.colors.surfaceDark,
        textDark: theme.colors.textDark,
        textLight: theme.colors.textLight,
        grayLight: theme.colors.grayLight,
        borderLight: theme.colors.borderLight,
      },
    },
  },
  plugins: [],
};

export default config;
