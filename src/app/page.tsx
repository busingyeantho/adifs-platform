import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold">
          African Digital Innovative Frontiers
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto">
          Building scalable digital solutions, AI systems, web applications,
          creative content, and innovative technology experiences.
        </p>

        <div className="flex justify-center gap-4">
          <Button text="Explore Services" />
          <Button text="Contact Us" variant="secondary" />
        </div>
      </div>
    </main>
  );
}