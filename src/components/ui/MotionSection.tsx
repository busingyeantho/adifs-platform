"use client";

import { motion, Transition } from "framer-motion";
import { ReactNode } from "react";
import { motionConfig } from "@/constants/motion";


type Props = {
  children: ReactNode;
};

export default function MotionSection({ children }: Props) {
  return (
    <motion.div
      initial={motionConfig.section.initial}
      whileInView={motionConfig.section.whileInView}
      viewport={motionConfig.section.viewport}
      transition={{ duration: 0.6, ease: "easeOut" } as Transition}
    >
      {children}
    </motion.div>
  );
}