"use client";

import Link from "next/link";
import { navigationLinks } from "@/constants/navigationLinks";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          ADIFs
        </div>

        {/* Navigation */}
        <div className="flex gap-6">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-indigo-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

      </nav>
    </header>
  );
}