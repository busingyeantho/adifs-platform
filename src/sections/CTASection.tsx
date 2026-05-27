import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { layout } from "@/constants/layout";
import { typography } from "@/constants/typography";

export default function CTASection() {
  return (
    <section className={layout.sectionSpacing + " bg-[#1B1E25] text-white"}>

      <Container>

        <div className="text-center space-y-8">

          <h2 className={typography.h2 + " text-white leading-tight"}>
            Ready to Build Something
            <span className="text-[#F28026]">{" "}Innovative?</span>
          </h2>

          <p className={typography.body + " text-gray-300 max-w-2xl mx-auto"}>
            Let’s collaborate to transform your ideas into scalable
            digital products, AI systems, and impactful technology experiences.
          </p>

          <div className="flex justify-center">
            <Button text="Start a Project" />
          </div>

        </div>

      </Container>

    </section>
  );
}