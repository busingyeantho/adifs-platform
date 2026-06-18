import Container from "@/components/ui/Container";
import AboutSection from "@/sections/AboutSection";

export default function AboutPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          African Digital Innovative Frontiers (ADIFs) is a forward-thinking digital solutions company dedicated to empowering businesses and creators across Africa.
        </p>
        <AboutSection />
        
      </div>
    </Container>
  );
}