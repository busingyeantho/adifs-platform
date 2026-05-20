import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">

      <Container>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              ADIFs
            </h2>

            <p className="text-gray-400 mt-2">
              African Digital Innovative Frontiers
            </p>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © 2026 ADIFs. All rights reserved.
          </p>

        </div>

      </Container>

    </footer>
  );
}