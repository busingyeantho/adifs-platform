import ServiceCard from "@/components/ui/ServiceCard";
import { servicesData } from "@/constants/servicesData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MotionSection from "@/components/ui/MotionSection";
import { layout } from "@/constants/layout";
import { sectionsContent } from "@/constants/sectionData";

export default function ServicesSection() {
  const { label, title, description } = sectionsContent.services;

  return (
    <section className={layout.sectionSpacing + " bg-gray-50"}>
      <MotionSection>

        <Container>

          {/* Section Header */}
          <SectionHeading
            label={label}
            title={title}
            description={description}
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {servicesData.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}

          </div>

        </Container>
      </MotionSection>

    </section>
  );
}