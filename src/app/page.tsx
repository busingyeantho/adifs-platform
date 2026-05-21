import Footer from "@/components/layouts/Footer";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import CTASection from "@/sections/CTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  );
}