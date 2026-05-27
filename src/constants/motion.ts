// Global motion system for ADIFs

export const motionConfig = {
  section: {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
    viewport: { once: true, amount: 0.2 },
  },

  card: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    hover: {
      y: -8,
      scale: 1.02,
    },
    transition: {
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};