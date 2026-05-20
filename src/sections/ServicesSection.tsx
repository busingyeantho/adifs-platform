import ServiceCard from "@/components/ui/ServiceCard";
import { servicesData } from "@/constants/servicesData";
import Container from "@/components/ui/Container";

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">

          <p className="text-indigo-600 font-semibold mb-3">
            SERVICES
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Digital Solutions & Innovation
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            ADIFs delivers scalable digital solutions,
            creative systems, AI-powered experiences,
            and technology innovation services.
          </p>

        </div>

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

      </div>

    </section>
  );
}