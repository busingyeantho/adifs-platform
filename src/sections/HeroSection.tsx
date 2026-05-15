import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 px-6">

      <div className="max-w-4xl text-center space-y-8">

        {/* Badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
          African Digital Innovative Frontiers
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Building Africa’s Future Through
          <span className="text-indigo-600"> Digital Innovation</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ADIFs develops scalable web applications, AI systems,
          digital products, creative content, and innovative
          technology experiences for modern businesses and creators.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Button text="Explore Services" />

          <Button
            text="Contact Us"
            variant="secondary"
          />

        </div>

      </div>

    </section>
  );
}