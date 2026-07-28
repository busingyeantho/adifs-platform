/*
|--------------------------------------------------------------------------
| Section Styles & Layout Constants
|--------------------------------------------------------------------------
|
| Centralized styling values, colors, and spacing patterns used
| consistently across all section components.
|
*/

import { theme } from "./theme";

// Section background colors - avoid scattered bg-gray-50, bg-white patterns
export const sectionBgColors = {
  light: "bg-gray-50",
  white: "bg-white",
  dark: `bg-[${theme.colors.darkBg}]`,
  accent: "bg-accent",
};

// Common section spacing using layout patterns
export const sectionSpacing = {
  standard: "py-20 px-6 md:px-12 lg:px-20",
  large: "py-32 px-6 md:px-12 lg:px-20",
  compact: "py-12 px-6 md:px-8",
};

// Text colors for different backgrounds
export const sectionTextColors = {
  dark: "text-gray-900",
  light: "text-white",
  muted: "text-gray-600",
  accent: `text-[${theme.colors.primary}]`,
};

// Highlight/accent colors for specific text
export const highlightColors = {
  primary: `text-[${theme.colors.primary}]`,
  orange: "text-orange-500",
};

// Grid layouts used across sections
export const sectionGrids = {
  twoCol: "grid grid-cols-1 md:grid-cols-2",
  threeCol: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  serviceGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
};
