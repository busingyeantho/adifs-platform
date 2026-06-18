"use client";

import { motion, type MotionProps } from "framer-motion";
import { ReactNode, JSX } from "react";
import { motionConfig } from "@/constants/motion";

type AnimatedElementProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  motionProps?: Partial<MotionProps>;
};

export default function AnimatedElement({
  children,
  className = "",
  delay = 0,
  as = "div",
  motionProps = {},
}: AnimatedElementProps) {
  const MotionTag = motion[as as keyof typeof motion] as any;

  return (
    <MotionTag
      initial={motionConfig.section.initial}
      whileInView={motionConfig.section.whileInView}
      viewport={motionConfig.section.viewport}
      transition={{
        ...motionConfig.section.transition,
        delay,
      }}
      className={className}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}
