"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import MotionSection from "@/components/ui/MotionSection";
import ImageCard from "@/components/ui/ImageCard";
import AnimatedCard from "@/components/ui/AnimatedCard";
import { typography } from "@/constants/typography";
import { layout } from "@/constants/layout";
import { aboutData } from "@/constants/aboutData";

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section className={layout.sectionSpacing + " bg-gray-50"}>
      <MotionSection>
        <Container>
          <SectionHeading
            label={aboutData.label}
            title={aboutData.title}
            description={aboutData.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <ImageCard
              src="/globe.svg"
              alt="Digital globe illustration"
              className="bg-gradient-to-br from-orange-400 to-orange-600 text-white"
            />

            <AnimatedCard className="p-8">
              <div className="flex flex-col gap-6">
                <p className={typography.body + " text-gray-700"}>
                  {aboutData.body}
                </p>

                <motion.ul
                  className="space-y-4"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={listVariants}
                >
                  {aboutData.highlights.map((highlight) => (
                    <motion.li
                      key={highlight}
                      className="flex gap-3"
                      variants={itemVariants}
                    >
                      <span className="text-orange-500 font-bold">✓</span>
                      <span className="text-gray-700">{highlight}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                <div className="pt-4">
                  <Button text={aboutData.ctaText} variant="primary" />
                </div>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </MotionSection>
    </section>
  );
}