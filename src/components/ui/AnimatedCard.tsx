"use client";

import { motion, type MotionProps } from "framer-motion";
import { ReactNode } from "react";
import { motionConfig } from "@/constants/motion";

type AnimatedCardProps = {
  children: ReactNode;
  className?: string;
  motionProps?: Partial<MotionProps>;
};

export default function AnimatedCard({
  children,
  className = "",
  motionProps = {},
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={motionConfig.card.initial}
      whileInView={motionConfig.card.animate}
      viewport={motionConfig.section.viewport}
      whileHover={motionConfig.card.hover}
      transition={motionConfig.card.transition}
      className={
        "rounded-3xl bg-white shadow-xl shadow-slate-200/30 transition-all duration-300 " +
        className
      }
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
