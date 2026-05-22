import ServiceCard from "@/components/ui/ServiceCard";
import { servicesData } from "@/constants/servicesData";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <FadeIn>

        <Container>

          {/* Section Header */}
          <SectionHeading
    label="SERVICES"
    title="Digital Solutions & Innovation"
    description="ADIFs delivers scalable digital solutions, creative systems, AI-powered experiences, and technology innovation services."
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
      </FadeIn>

    </section>
  );
}