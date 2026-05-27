import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import MotionSection from "@/components/ui/MotionSection";
import { layout } from "@/constants/layout";

export default function ContactSection() {
  return (
    <section className={layout.sectionSpacing + " bg-white"}>

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
