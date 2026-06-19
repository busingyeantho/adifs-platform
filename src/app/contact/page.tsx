import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <Container>
      <div className="py-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Ready to transform your digital presence? Get in touch with our team and let&apos;s build something amazing together.
        </p>
        <ContactForm/>
      </div>
    </Container>
  );
}