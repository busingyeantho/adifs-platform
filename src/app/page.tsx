import Footer from "@/components/layouts/Footer";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import CTASection from "@/sections/CTASection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ContactSection/>
      <CTASection />
      <Footer />
    </main>
  );
}