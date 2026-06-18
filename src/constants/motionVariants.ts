// Reusable motion variants for consistent animations
// Extracted from inline definitions across sections

export const motionVariants = {
  // List animations with stagger effect
  listContainer: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },

  // Individual list item animations
  listItem: {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  },
};
