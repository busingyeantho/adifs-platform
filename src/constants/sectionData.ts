// Centralized section content data
// Eliminates hardcoded values and duplicate strings across sections

export const sectionsContent = {
  hero: {
    badge: "African Digital Innovative Frontiers",
    titleMain: "Building Africa's Future Through",
    titleHighlight: " Digital Innovation",
    description:
      "ADIFs develops scalable web applications, AI systems, digital products, creative content, and innovative technology experiences for modern businesses and creators.",
    ctaButtons: {
      primary: "Explore Services",
      secondary: "Contact Us",
    },
  },

  cta: {
    titleMain: "Ready to Build Something",
    titleHighlight: " Innovative?",
    description:
      "Let's collaborate to transform your ideas into scalable digital products, AI systems, and impactful technology experiences.",
    ctaText: "Start a Project",
  },

  services: {
    label: "SERVICES",
    title: "Digital Solutions & Innovation",
    description:
      "ADIFs delivers scalable digital solutions, creative systems, AI-powered experiences, and technology innovation services.",
  },

  contact: {
    label: "CONTACT",
    title: "Let's Build Something Great",
    description:
      "Reach out to ADIFs for digital solutions, collaborations, AI systems, content creation, and scalable technology projects.",
  },

  // Section-specific metadata (background, spacing, etc.)
  metadata: {
    hero: {
      bgColor: "bg-accent",
      spacing: "min-h-screen flex items-center justify-center",
    },
    about: {
      bgColor: "bg-gray-50",
      spacing: "py-20 px-6 md:px-12 lg:px-20",
    },
    services: {
      bgColor: "bg-gray-50",
      spacing: "py-20 px-6 md:px-12 lg:px-20",
    },
    contact: {
      bgColor: "bg-white",
      spacing: "py-20 px-6 md:px-12 lg:px-20",
    },
    cta: {
      bgColor: "bg-[#1B1E25]",
      spacing: "py-20 px-6 md:px-12 lg:px-20",
    },
  },
};
