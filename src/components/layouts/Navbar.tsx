"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import { navigationLinks } from "@/constants/navigationLinks";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">

      <Container>

        <nav className="flex items-center justify-between py-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-[#F28026]">
            ADIFs
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">

            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#F28026] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-6 py-6 border-t border-gray-200">

            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-[#F28026] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          </div>
        )}

      </Container>

    </header>
  );
}