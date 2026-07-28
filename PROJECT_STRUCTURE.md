# ADIFs Platform - Project Structure & File Documentation

**Project Name:** ADIFs Platform  
**Framework:** Next.js 16.2.6  
**React Version:** 19.2.4  
**TypeScript:** Yes  
**Styling:** Tailwind CSS 4 + PostCSS 4  
**Animation:** Framer Motion 12.40.0  
**Icons:** Lucide React 1.16.0  
**Date Generated:** 2026-07-02

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Directory Structure](#directory-structure)
4. [Core Configuration Files](#core-configuration-files)
5. [Source Code Architecture](#source-code-architecture)
6. [Components Inventory](#components-inventory)
7. [Constants & Configuration](#constants--configuration)
8. [Pages & Routes](#pages--routes)
9. [Services & Utilities](#services--utilities)
10. [API Endpoints](#api-endpoints)
11. [Data Flow & Architecture](#data-flow--architecture)

---

## 🎯 Project Overview

**ADIFs Platform** is a modern Next.js web application for African Digital Innovative Frontiers - a digital solutions company. The platform showcases the company's services, includes information sections, and provides contact capabilities.

### Key Features:
- **SEO Optimized:** Comprehensive metadata configuration
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Animation-Rich:** Framer Motion for smooth, engaging transitions
- **Form Handling:** Contact form with email integration (SendGrid ready)
- **Modular Architecture:** Reusable components and centralized constants
- **Dark Mode Ready:** Theme system with support for light/dark variants

---

## 🛠 Technology Stack

### Core Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.2.6 | React framework |
| react | 19.2.4 | UI library |
| react-dom | 19.2.4 | DOM rendering |
| framer-motion | 12.40.0 | Animation library |
| lucide-react | 1.16.0 | Icon system |
| tailwindcss | 4 | Utility-first CSS |
| typescript | 5 | Type safety |
| eslint | 9 | Code linting |

### Development Stack
- TypeScript 5 for type safety
- Tailwind CSS 4 for styling
- PostCSS 4 for CSS processing
- ESLint for code quality

---

## 📁 Directory Structure

```
adifs-platform/
├── public/                          # Static assets
│   ├── favicon-*.png                # Favicon variants
│   ├── apple-icon-*.png             # Apple touch icons
│   ├── android-icon-*.png           # Android icons
│   ├── manifest.json                # PWA manifest
│   └── browserconfig.xml            # IE configuration
│
├── src/
│   ├── app/                         # Next.js app directory (main routes)
│   │   ├── layout.tsx               # Root layout with metadata
│   │   ├── page.tsx                 # Home page
│   │   ├── globals.css              # Global styles
│   │   ├── about/
│   │   │   └── page.tsx             # About page
│   │   ├── services/
│   │   │   └── page.tsx             # Services page
│   │   ├── contact/
│   │   │   └── page.tsx             # Contact page
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts         # Contact form API endpoint
│   │
│   ├── components/                  # Reusable React components
│   │   ├── layouts/
│   │   │   ├── PageLayout.tsx       # Main page wrapper (navbar + footer)
│   │   │   ├── Navbar.tsx           # Navigation bar with mobile support
│   │   │   └── Footer.tsx           # Footer component
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx      # Contact form component
│   │   │   └── InputField.tsx       # Reusable form input field
│   │   └── ui/
│   │       ├── Button.tsx           # CTA button component
│   │       ├── Container.tsx        # Layout container wrapper
│   │       ├── AnimatedElement.tsx  # Animation wrapper
│   │       ├── AnimatedCard.tsx     # Animated card container
│   │       ├── MotionSection.tsx    # Section animation wrapper
│   │       ├── SectionHeading.tsx   # Section header component
│   │       ├── ServiceCard.tsx      # Service card display
│   │       └── ImageCard.tsx        # Image card with styling
│   │
│   ├── sections/                    # Page section components
│   │   ├── HeroSection.tsx          # Hero/banner section
│   │   ├── AboutSection.tsx         # About company section
│   │   ├── ServicesSection.tsx      # Services showcase section
│   │   ├── ContactSection.tsx       # Contact form section
│   │   └── CTASection.tsx           # Call-to-action section
│   │
│   ├── constants/                   # Centralized data & configuration
│   │   ├── theme.ts                 # Design tokens (colors, spacing)
│   │   ├── typography.ts            # Font sizes & styles
│   │   ├── navigationLinks.ts        # Navigation menu items
│   │   ├── sectionData.ts           # Section content & metadata
│   │   ├── aboutData.ts             # About section content
│   │   ├── servicesData.ts          # Services list data
│   │   ├── motionVariants.ts        # Framer Motion animation presets
│   │   ├── motion.ts                # Motion configuration
│   │   ├── layout.ts                # Layout & spacing constants
│   │   └── sectionStyles.ts         # Reusable section classes
│   │
│   ├── services/                    # Business logic & utilities
│   │   └── contact.ts               # Contact form validation & submission
│   │
│   ├── utils/                       # Utility functions (currently empty)
│   │
│   └── layouts/                     # Layout wrappers (currently empty)
│
├── Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── tsconfig.json                # TypeScript configuration
│   ├── next.config.ts               # Next.js configuration
│   ├── tailwind.config.ts           # Tailwind CSS configuration
│   ├── postcss.config.mjs           # PostCSS configuration
│   ├── eslint.config.mjs            # ESLint rules
│   └── next-env.d.ts                # Next.js type definitions
│
└── Documentation
    ├── README.md                    # Project introduction
    ├── DEPLOYMENT_GUIDE.md          # Deployment instructions
    └── notes/
        └── engineering-notes.md     # Development notes
```

---

## ⚙️ Core Configuration Files

### 1. **package.json**
```json
{
  "name": "adifs-platform",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",           // Start development server
    "build": "next build",       // Build for production
    "start": "next start",       // Run production server
    "lint": "eslint"             // Run ESLint
  }
}
```
**Purpose:** Project metadata, dependencies, and npm scripts

---

### 2. **tsconfig.json**
```typescript
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "strict": true,           // Strict type checking
    "jsx": "react-jsx",       // React 19 JSX transform
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]      // Path alias for imports
    }
  }
}
```
**Purpose:** TypeScript compilation settings and path aliases

---

### 3. **next.config.ts**
```typescript
const nextConfig: NextConfig = {
  // Configuration options here
};
```
**Purpose:** Next.js-specific configurations

---

### 4. **tailwind.config.ts**
```typescript
{
  "content": [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  "theme": {
    "extend": {
      "colors": {
        "primary": "#F28026",
        "primaryLight": "#FEF3E2",
        "accent": "#D64927",
        "darkBg": "#1B1E25",
        // ... more colors
      }
    }
  }
}
```
**Purpose:** Tailwind CSS configuration with custom colors from theme.ts

---

### 5. **eslint.config.mjs**
**Purpose:** Code quality and style enforcement

---

## 🏗️ Source Code Architecture

### Architecture Pattern
The project follows a **Component-Based Architecture** with clear separation of concerns:

```
┌─────────────────────────────────────────┐
│          Pages (app/*)                  │  ← User-facing routes
├─────────────────────────────────────────┤
│       Sections & Layouts                │  ← Page composition
│   (sections/*, components/layouts/*)    │
├─────────────────────────────────────────┤
│    UI Components                        │  ← Reusable elements
│    (components/ui/*, components/forms/) │
├─────────────────────────────────────────┤
│    Constants & Configuration            │  ← Centralized data
│    (constants/*)                        │
├─────────────────────────────────────────┤
│    Services & Utilities                 │  ← Business logic
│    (services/*, utils/*)                │
└─────────────────────────────────────────┘
```

### Data Flow

```
User Interaction
    ↓
Component/Page
    ↓
Service (Business Logic)
    ↓
API Route (if needed)
    ↓
External Service (SendGrid, etc.)
    ↓
Response back to Component
```

---

## 🧩 Components Inventory

### Layout Components (`src/components/layouts/`)

#### **PageLayout.tsx**
| Property | Value |
|----------|-------|
| Type | Wrapper Component |
| Purpose | Main page layout with navbar and footer |
| Props | `children: ReactNode`, `className?: string` |
| Exports | Default export |
| Features | Sticky navbar, flexible content area, footer |

```typescript
// Usage
<PageLayout className="custom-class">
  <YourPageContent />
</PageLayout>
```

---

#### **Navbar.tsx**
| Property | Value |
|----------|-------|
| Type | Client Component ("use client") |
| Purpose | Navigation bar with mobile hamburger menu |
| State | `isOpen` - mobile menu toggle |
| Features | Sticky positioning, responsive design, animated logo |
| Dependencies | `lucide-react` (Menu, X icons), `navigationLinks` constant |

**Key Features:**
- Sticky header on scroll
- Desktop navigation (hidden on mobile)
- Mobile hamburger menu with slide-out navigation
- Logo branding with primary color (#F28026)
- Responsive breakpoint: `md` (768px)

---

#### **Footer.tsx**
| Property | Value |
|----------|-------|
| Type | Footer Component |
| Purpose | Page footer with copyright & links |

---

### UI Components (`src/components/ui/`)

#### **Button.tsx**
```typescript
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
  variant?: "primary" | "secondary";
};
```

| Property | Details |
|----------|---------|
| Variants | `primary` (filled orange), `secondary` (outlined) |
| Styling | Dynamic colors from theme, hover scale animation |
| Disabled State | 50% opacity, cursor-not-allowed |
| Default Type | `button` |

---

#### **Container.tsx**
- Wrapper component for consistent page width and padding
- Centers content horizontally

---

#### **AnimatedElement.tsx**
- Framer Motion wrapper for element animations
- Props: `delay`, `as` (element type), `className`
- Uses `whileInView` for scroll-triggered animations

---

#### **AnimatedCard.tsx**
- Card container with built-in animation effects
- Props: `children`, `className`
- Used in About section for animated content cards

---

#### **MotionSection.tsx**
- Wraps entire sections with animation variants
- Enables smooth entrance animations for page sections

---

#### **SectionHeading.tsx**
- Reusable heading component for sections
- Props: `label`, `title`, `description`
- Consistent styling across all sections

---

#### **ServiceCard.tsx**
- Individual service display card
- Props: `title`, `description`
- Grid-responsive component

---

#### **ImageCard.tsx**
- Image display with gradient background
- Props: `src`, `alt`, `className`
- Used in About section for SVG illustration

---

### Form Components (`src/components/forms/`)

#### **ContactForm.tsx**
| Property | Details |
|----------|---------|
| Type | Client Component ("use client") |
| State | `name`, `email`, `message`, `loading`, `error`, `success` |
| Submit Handler | Validates form, calls `sendContactMessage()` |
| Feedback | Real-time error and success messages |
| Features | Form reset on success |

**Form Flow:**
```
User Input
  ↓
Validation (client-side via service)
  ↓
API Call (/api/contact)
  ↓
SendGrid Email (if configured)
  ↓
Success/Error Response
```

---

#### **InputField.tsx**
- Reusable form input component
- Props: `label`, `placeholder`, `value`, `onChange`, `type`
- Consistent styling across form fields

---

## 🎨 Sections (`src/sections/`)

### **HeroSection.tsx**
- **Display:** Full viewport height (min-h-screen)
- **Background:** Accent color (#D64927)
- **Content:**
  - Badge: "African Digital Innovative Frontiers"
  - Main title with highlighted text
  - Description paragraph
  - Two CTA buttons (primary & secondary)
- **Animation:** Staggered entrance animations with Framer Motion

---

### **AboutSection.tsx**
- **Layout:** Two-column grid (responsive)
- **Left Side:** SVG globe illustration with gradient
- **Right Side:** Animated card with:
  - Descriptive paragraph
  - Animated list of highlights (3 items)
  - CTA button
- **Data Source:** `aboutData.ts` constant

---

### **ServicesSection.tsx**
- **Layout:** Three-column grid on desktop (responsive to 1 column on mobile)
- **Content:** Service cards from `servicesData`
- **Services Listed:**
  1. Mobile App Development
  2. Web App Development
  3. AI Chatbot Development
  4. Video Editing & Content Creation
  5. UI/UX & Figma Design
  6. Technical Documentation & Research

---

### **ContactSection.tsx**
- **Layout:** Contact form centered
- **Features:** Email validation, error/success feedback
- **API Integration:** Sends to `/api/contact` endpoint

---

### **CTASection.tsx**
- **Purpose:** Final call-to-action section
- **Background:** Dark background (#1B1E25)
- **Content:** Title, description, CTA button

---

## 📊 Constants & Configuration

### **theme.ts**
```typescript
export const theme = {
  colors: {
    primary: "#F28026",           // Main orange
    primaryLight: "#FEF3E2",      // Light cream/orange
    accent: "#D64927",            // Dark red/brown
    success: "#00B4A6",           // Teal
    info: "#4A90E2",              // Blue
    darkBg: "#1B1E25",            // Dark background
    surfaceDark: "#252932",       // Dark surface
    textDark: "#1B1E25",          // Dark text
    textLight: "#FFFFFF",         // White text
    grayLight: "#F8F9FA",         // Light gray
    borderLight: "#E5E7EB",       // Border gray
  },
  borderRadius: {
    md: "12px",
    lg: "16px",
    xl: "24px",
  },
};
```

**Purpose:** Centralized design tokens used across the entire application

---

### **typography.ts**
- Font size constants (h1, h2, body, etc.)
- Line height and letter spacing
- Used across components for consistent typography

---

### **navigationLinks.ts**
```typescript
export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
```

**Purpose:** Navigation menu configuration

---

### **sectionData.ts**
Centralized content for all sections:
- Hero section text and CTAs
- CTA section content
- Services section metadata
- Contact section description
- Section styling metadata

**Benefit:** Eliminates hardcoded strings and enables easy content updates

---

### **aboutData.ts**
```typescript
export const aboutData = {
  label: "ABOUT",
  title: "Who We Are",
  description: "Learn about ADIFs...",
  body: "ADIFs (African Digital Innovative Frontiers)...",
  highlights: [
    "Custom software development",
    "AI-powered solutions",
    "Content creation and digital strategy",
  ],
  ctaText: "Start a Project",
};
```

---

### **servicesData.ts**
Array of service objects with title and description:
```typescript
export const servicesData = [
  {
    title: "Mobile App Development",
    description: "Scalable Android and cross-platform mobile applications...",
  },
  // ... 5 more services
];
```

---

### **motionVariants.ts**
Reusable Framer Motion animation presets:

```typescript
export const motionVariants = {
  // List container with staggered child animations
  listContainer: {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },
  
  // Individual list item animation
  listItem: {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  },
};
```

---

### **layout.ts** & **sectionStyles.ts**
- Reusable spacing classes
- Section container configurations
- Responsive breakpoint utilities

---

## 📄 Pages & Routes

### **App Directory Structure (`src/app/`)**

#### **layout.tsx** (Root Layout)
| Property | Value |
|----------|-------|
| Type | Server Component |
| Imports | `PageLayout`, `globals.css` |
| Metadata | Comprehensive SEO configuration |
| Features | Favicon variants, social meta tags, PWA manifest |

**Metadata Highlights:**
- `metadataBase`: https://adifs-platform.com
- `title`: Template pattern for page titles
- Social sharing (OpenGraph, Twitter)
- Multiple favicon formats
- PWA support

---

#### **page.tsx** (Home Page)
```typescript
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
```

**Purpose:** Composed landing page with all major sections

---

#### **about/page.tsx**
- About company page
- Likely uses PageLayout wrapper
- Extends about information

---

#### **services/page.tsx**
- Detailed services page
- Lists all service offerings
- Potential for filtering/search

---

#### **contact/page.tsx**
- Contact form page
- Centered contact form component
- Additional contact information

---

## 🔌 Services & Utilities

### **services/contact.ts**

#### **Type Definitions**
```typescript
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};
```

#### **validateContactForm(data)**
- Validates all fields are filled
- Checks email format with regex
- Returns error message or null

**Regex Pattern:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

#### **sendContactMessage(data)**
- Sends POST request to `/api/contact`
- Handles response and errors
- Returns payload on success
- Throws error with message on failure

**API Call:**
```typescript
fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
})
```

---

## 🌐 API Endpoints

### **POST /api/contact**

**Location:** `src/app/api/contact/route.ts`

#### Request Body
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

#### Response (Success)
```json
{
  "success": true
}
```
**Status Code:** 200

#### Response (Error)
```json
{
  "error": "Error message"
}
```
**Status Code:** 400

---

#### Server-Side Validation
1. Checks request body is valid JSON
2. Validates all fields are filled and non-empty
3. Validates email format
4. Sends email via SendGrid (if configured)

#### Environment Variables Required
```
SENDGRID_API_KEY=your_sendgrid_key
SENDGRID_FROM_EMAIL=from@example.com
SENDGRID_TO_EMAIL=to@example.com
```

#### SendGrid Integration
- Sends email with:
  - **To:** `SENDGRID_TO_EMAIL`
  - **Subject:** `New contact from {name}`
  - **Body:** Name, Email, Message formatted as plain text
  - **From:** `SENDGRID_FROM_EMAIL`

---

## 🔄 Data Flow & Architecture

### Contact Form Submission Flow

```
ContactForm Component
       ↓
handleSubmit(e: FormEvent)
       ↓
validateContactForm() [Local validation]
       ↓ (if valid)
sendContactMessage() [Call /api/contact]
       ↓
POST /api/contact
       ↓
validateRequest() [Server validation]
       ↓ (if valid)
sendSendGridEmail()
       ↓
SendGrid API
       ↓ (if success)
Response: { success: true }
       ↓
setSuccess("Message sent")
Clear form
       ↓ (if error)
Response: { error: "Error message" }
       ↓
setError(error message)
```

---

### Page Composition Flow

```
User Visits Website
       ↓
Next.js Router → app/page.tsx
       ↓
Home Component Renders
       ↓
Components Tree:
  ├─ HeroSection
  │   └─ MotionSection → AnimatedElement
  ├─ AboutSection
  │   └─ AnimatedCard → ImageCard
  ├─ ServicesSection
  │   └─ ServiceCard[] (map over servicesData)
  ├─ ContactSection
  │   └─ ContactForm → InputField[] + Button
  └─ CTASection
       └─ Button
       ↓
Page Rendered with Animations
```

---

## 🎬 Animation System

### Framer Motion Usage

**HeroSection:**
- Staggered entrance with 0.1s delay increments
- Badge → Title → Description → Buttons

**AboutSection:**
- List container animation with 0.12s stagger
- Individual items fade in and slide up

**General Pattern:**
```typescript
<motion.element
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
  variants={motionVariants}
>
  {content}
</motion.element>
```

---

## 🎨 Styling Approach

### CSS Architecture
1. **Global Styles** (`src/app/globals.css`)
   - Base styles and resets
   
2. **Tailwind Utilities** (inline classes)
   - Responsive classes: `hidden md:flex`
   - Color system: `text-primary`, `bg-accent`
   - Spacing: `gap-8`, `py-20`, `px-6`

3. **Theme System** (constants/theme.ts)
   - Centralized color tokens
   - Used in Tailwind config
   - Referenced in inline styles

4. **Dynamic Inline Styles**
   - Button component uses `style` prop for dynamic colors
   - Theme colors referenced programmatically

---

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints used:
- `hidden md:flex` - Hide on mobile, show on tablet+
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Responsive grids
- `text-sm md:text-base lg:text-lg` - Responsive text sizes

**Breakpoints:**
- Mobile: default (< 768px)
- Tablet (md): 768px and up
- Desktop (lg): 1024px and up

---

## 🔐 Environment Configuration

### Required for Full Functionality

**.env.local**
```
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@adifs-platform.com
SENDGRID_TO_EMAIL=contact@adifs-platform.com
```

### Without SendGrid
- Contact form still works on frontend
- API endpoint accepts submissions but logs them (no email sent)

---

## 📈 Project Statistics

| Metric | Count |
|--------|-------|
| Total Components | 15+ |
| Layout Components | 3 |
| UI Components | 8 |
| Form Components | 2 |
| Page Sections | 5 |
| API Routes | 1 |
| Constants Files | 10 |
| Pages | 4 |

---

## 🚀 Key Features Summary

| Feature | Implementation | Location |
|---------|-----------------|----------|
| SEO | Metadata config in root layout | `src/app/layout.tsx` |
| Animations | Framer Motion | `src/sections/*`, `src/components/ui/` |
| Forms | Controlled components + validation | `src/components/forms/` |
| Icons | Lucide React | `src/components/layouts/Navbar.tsx` |
| Email | SendGrid integration | `src/app/api/contact/route.ts` |
| Responsive | Tailwind CSS breakpoints | All components |
| Theme | Centralized tokens | `src/constants/theme.ts` |
| Type Safety | TypeScript + strict mode | `tsconfig.json` |

---

## 📝 Development Notes

### Best Practices Implemented
1. **Component Composition:** Small, focused components
2. **Props Typing:** Full TypeScript support
3. **Data Centralization:** Constants prevent duplication
4. **Semantic HTML:** Proper heading hierarchy
5. **Mobile-First:** Responsive design approach
6. **Accessibility:** Semantic components (buttons, forms)
7. **Performance:** Lazy component loading via "use client"
8. **Code Organization:** Clear folder structure

### Extension Points
- `/src/utils/` - Ready for utility functions
- `/src/layouts/` - Ready for additional layout variants
- API Routes - Can be extended with more endpoints
- Constants - Easy to convert to CMS/API data

---

## 🔗 File Dependencies Graph

```
app/page.tsx
├── sections/HeroSection.tsx
├── sections/AboutSection.tsx
├── sections/ServicesSection.tsx
├── sections/ContactSection.tsx
└── sections/CTASection.tsx

All Sections depend on:
├── components/ui/Container.tsx
├── components/ui/MotionSection.tsx
├── components/ui/AnimatedElement.tsx
├── components/ui/Button.tsx
├── constants/typography.ts
├── constants/layout.ts
└── constants/motionVariants.ts

Navbar.tsx depends on:
├── constants/navigationLinks.ts
├── components/ui/Container.tsx
└── lucide-react (Menu, X icons)

ContactForm.tsx depends on:
├── services/contact.ts
├── components/forms/InputField.tsx
└── components/ui/Button.tsx

API Contact Route depends on:
└── services/contact.ts (types)
```

---

## 📚 Quick Reference Guide

### Import Paths
Use the `@` alias configured in `tsconfig.json`:
```typescript
import Button from "@/components/ui/Button";
import { theme } from "@/constants/theme";
import { sendContactMessage } from "@/services/contact";
```

### Adding a New Section
1. Create file: `src/sections/NewSection.tsx`
2. Import in: `src/app/page.tsx`
3. Add content constant to: `src/constants/sectionData.ts`
4. Add styles to: `tailwind.config.ts` (if needed)

### Adding a New Component
1. Create in: `src/components/[category]/NewComponent.tsx`
2. Define props interface
3. Export default
4. Import where needed

### Updating Colors
Edit: `src/constants/theme.ts`
Then update: `src/tailwind.config.ts` (extends section)

---

## 🎯 Development Workflow

### Start Development
```bash
npm run dev
```
Runs on: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

---

**Document Last Updated:** 2026-07-02  
**Project Status:** Active Development  
**Version:** 0.1.0
