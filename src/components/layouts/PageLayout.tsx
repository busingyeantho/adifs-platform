import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

/**
 * PageLayout Component
 *
 * Provides consistent page-level architecture with:
 * - Integrated Navbar (sticky header)
 * - Flexible content area with standardized spacing
 * - Integrated Footer
 * - Unified spacing system across all pages
 *
 * Usage:
 * <PageLayout>
 *   <h1>Page Title</h1>
 *   <p>Page content</p>
 * </PageLayout>
 */
export default function PageLayout({
  children,
  className = "",
}: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar - Sticky Header */}
      <Navbar />

      {/* Page Content - Flexible Growth */}
      <main className={`flex-grow ${className}`}>
        {children}
      </main>

      {/* Footer - Always at Bottom */}
      <Footer />
    </div>
  );
}
