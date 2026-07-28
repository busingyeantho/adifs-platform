import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import MotionSection from "@/components/ui/MotionSection";
import { layout } from "@/constants/layout";
import { sectionsContent } from "@/constants/sectionData";

export default function ContactSection() {
  const { label, title, description } = sectionsContent.contact;

  return (
    <section className={layout.sectionSpacing + " bg-white"}>

      <MotionSection>

        <Container>

          <SectionHeading
            label={label}
            title={title}
            description={description}
          />

          <ContactForm />

        </Container>

      </MotionSection>

    </section>
  );
}
