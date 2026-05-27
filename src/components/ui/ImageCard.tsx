"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedCard from "./AnimatedCard";

type ImageCardProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ImageCard({
  src,
  alt,
  className = "",
}: ImageCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <AnimatedCard className={className + " overflow-hidden"}>
      <div ref={ref} className="relative h-96 w-full">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </AnimatedCard>
  );
}
