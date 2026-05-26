import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import MotionSection from "@/components/ui/MotionSection";

export default function ContactSection() {
  return (
    <section className="py-24 px-6 bg-white">

      <MotionSection>

        <Container>

          <SectionHeading
            label="CONTACT"
            title="Let’s Build Something Great"
            description="Reach out to ADIFs for digital solutions, collaborations, AI systems, content creation, and scalable technology projects."
          />

          <ContactForm />

        </Container>

      </MotionSection>

    </section>
  );
}
