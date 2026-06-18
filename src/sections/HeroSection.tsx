"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import AnimatedElement from "@/components/ui/AnimatedElement";
import { typography } from "@/constants/typography";
import MotionSection from "@/components/ui/MotionSection";
import { sectionsContent } from "@/constants/sectionData";



export default function HeroSection() {
  const { badge, titleMain, titleHighlight, description, ctaButtons } =
    sectionsContent.hero;

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-accent"
    >
      <MotionSection>
        <Container>
          <div className="text-center space-y-8">
            {/* Badge */}
            <AnimatedElement delay={0}>
              <div className="inline-block px-4 py-2 rounded-full bg-primaryLight text-textDark text-sm font-medium">
                {badge}
              </div>
            </AnimatedElement>

            {/* Heading */}
            <AnimatedElement as="h1" delay={0.1} className={typography.h1}>
              {titleMain}
              <span className="text-primary">{titleHighlight}</span>
            </AnimatedElement>

            {/* Description */}
            <AnimatedElement as="p" delay={0.2} className={`${typography.body} max-w-2xl mx-auto`}>
              {description}
            </AnimatedElement>

            {/* CTA Buttons */}
            <AnimatedElement delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button text={ctaButtons.primary} />
                <Button text={ctaButtons.secondary} variant="secondary" />
              </div>
            </AnimatedElement>
          </div>
        </Container>
      </MotionSection>
    </section>
  );
}
