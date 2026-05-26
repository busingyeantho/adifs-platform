import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { typography } from "@/constants/typography";
import { theme } from "@/constants/theme";
import MotionSection from "@/components/ui/MotionSection";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6">
      <MotionSection>

        <Container>
          <div className="text-center space-y-8">

          {/* Badge */}
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
            African Digital Innovative Frontiers
          </div>

          {/* Heading */}
          <h1 className={typography.h1}>
            Building Africa’s Future Through
            <span className="text-indigo-600"> Digital Innovation</span>
          </h1>

          {/* Description */}
          <p className={typography.body + " max-w-2xl mx-auto"}>
            ADIFs develops scalable web applications, AI systems,
            digital products, creative content, and innovative
            technology experiences for modern businesses and creators.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

            <Button text="Explore Services" />

            <Button
              text="Contact Us"
              variant="secondary"
            />

          </div>
        </div>

        </Container>
        </MotionSection>

    </section>
  );
}