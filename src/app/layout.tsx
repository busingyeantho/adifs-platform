import "./globals.css";
import type { Metadata } from "next";
import PageLayout from "@/components/layouts/PageLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://adifs-platform.com"), // Replace with your actual domain
  title: {
    default: "ADIFs Platform",
    template: "%s | ADIFs Platform", // Pattern for page titles: "About | ADIFs Platform"
  },
  description:
    "African Digital Innovative Frontiers – transforming Africa's digital landscape with cutting-edge solutions.",
  keywords: ["digital innovation", "Africa", "technology", "frontiers"],
  authors: [{ name: "ADIFs Team" }],
  creator: "ADIFs",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
      { url: "/apple-icon-precomposed.png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
      {
        rel: "msapplication-config",
        url: "/browserconfig.xml",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adifs-platform.com",
    siteName: "ADIFs Platform",
    title: "ADIFs Platform",
    description:
      "African Digital Innovative Frontiers – transforming Africa's digital landscape.",
    images: [
      {
        url: "https://adifs-platform.com/og-image.png", // You'll add this image to /public later
        width: 1200,
        height: 630,
        alt: "ADIFs Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADIFs Platform",
    description:
      "African Digital Innovative Frontiers – transforming Africa's digital landscape.",
    images: ["https://adifs-platform.com/og-image.png"],
    creator: "@adifs", // Replace with your Twitter handle
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://adifs-platform.com",
  },
};

export const viewport = "width=device-width, initial-scale=1";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}