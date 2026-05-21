import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#1B1E25] text-white">

      <Container>

        <div className="text-center space-y-8">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready to Build Something
            <span className="text-[#F28026]">
              {" "}Innovative?
            </span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
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