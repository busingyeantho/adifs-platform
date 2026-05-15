import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/Navbar";

export const metadata: Metadata = {
  title: "ADIFs Platform",
  description: "African Digital Innovative Frontiers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}