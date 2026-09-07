# PEAK Sports Therapy & Performance Recovery ⚡

An elite, high-performance web application built for **PEAK Sports Therapy** — a specialized athletic recovery and sports therapy hub designed specifically for athletes, hybrid trainers, powerlifters, runners, and active individuals.

> **"NOT A SPA. THIS IS ATHLETIC RECOVERY & PERFORMANCE REHAB."**

---

## 🌟 Highlights & Features

- **Female-Only Recovery Focus**: Tailored recovery environment led by certified recovery specialist Sofea.
- **Interactive Body Recovery Map**: Visual muscle group selector (Quads, Hamstrings, Lower Back, Shoulders/Neck, Calves) with instant treatment & recovery protocol suggestions.
- **Structured Service Catalog**: Clear offerings including Sports Recovery Massage, Soft Tissue Mobilization, PNF Stretching, and Sports Taping.
- **Instant WhatsApp Integration**: One-click direct booking with pre-filled service inquiry parameters.
- **Interactive Athlete Readiness Quiz**: Self-assessment tool to recommend optimal recovery protocols based on current fatigue & training volume.
- **Dark Athletic-Tech UI**: Cyber-industrial design aesthetic featuring neon red/yellow accents, micro-interactions, and glassmorphism.

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, React 19) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) + Custom Design Tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) + Custom Canvas Dynamics |
| **Smooth Scroll** | [@studio-freight/lenis](https://lenis.darkroom.engineering/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Deployment / Edge** | [OpenNext](https://opennext.js.org/) + Cloudflare Workers / Pages |

---

## 🎨 UI/UX Design System & Prompt Blueprint

For developers, designers, or AI assistants recreating or extending this aesthetic, use the following **UI Design Prompt Blueprint**:

### 🎯 Design System Prompt Specification

```text
Create a high-impact, luxury athletic-tech web application for PEAK Sports Therapy.

[Visual Aesthetic & Tone]
- Mood: High performance, dark mode, clinical precision meets elite athletic energy.
- Theme: Deep Pitch Charcoal/Black (#09090B), Dark Zinc (#18181B), Accent Hyper Lime (#CCFF00 / #A3E635), Electric Cyan (#06B6D4), Clean White typography.
- Glassmorphism: Heavy dark glass cards (bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80).
- Typography: Bold sans-serif headers (Inter / Outfit / Syne style), high contrast, uppercase tracked badges.

[Key Components & Flow]
1. Header & Navigation: Floating blurred glass navigation bar with brand badge, quick links, and WhatsApp booking trigger.
2. Hero Section: Dynamic typography with glowing hyper-lime accents, live statistics counters, and direct action triggers.
3. Interactive Anatomical Map: Interactive SVG/3D human body selector highlighting target muscle groups (Knees, Shoulders, Lumbar, etc.) with real-time protocol drawer overlay.
4. "Not A Spa" Distinction Grid: High-contrast comparison section contrasting relaxing spa therapy vs. target-driven sports performance rehab.
5. Sport-Specific Grid: Category cards filtered by athletic discipline (Running, Powerlifting, Combat Sports, Hyrox/CrossFit).
6. Body Needs Quiz: Multi-step interactive diagnostic modal calculating customized treatment recommendations.
7. High-Conversion CTAs: Floating WhatsApp quick-contact widget pre-populating customized booking messages.
```

---

## 📁 Repository Structure

```text
sport-service/
├── src/
│   ├── app/
│   │   ├── globals.css          # Core CSS variables, Lenis styles & custom scrollbars
│   │   ├── layout.tsx           # Root layout with SmoothScroll & CustomCursor
│   │   └── page.tsx             # Main landing page combining all sections
│   ├── components/
│   │   ├── BodyNeedsInteractive.tsx # Multi-step interactive diagnostic quiz
│   │   ├── BodyRecoveryMap.tsx      # Interactive human body target selector
│   │   ├── CustomCursor.tsx         # Animated custom magnetic cursor dot
│   │   ├── FAQ.tsx                  # Frequently asked questions accordion
│   │   ├── FinalCTA.tsx             # High-conversion end-of-page booking CTA
│   │   ├── FloatingWhatsAppCTA.tsx  # Sticky bottom-right WhatsApp quick trigger
│   │   ├── Footer.tsx               # Footer with location info, hours & social links
│   │   ├── Hero.tsx                 # Main hero section with live stat counters
│   │   ├── Marquee.tsx              # Continuous scrolling text ticker banner
│   │   ├── Navbar.tsx               # Sticky glassmorphism header navigation
│   │   ├── NotASpaSection.tsx       # Feature comparison (Clinical Rehab vs Spa)
│   │   ├── PhotoBanner.tsx          # High-res therapy & recovery photo gallery
│   │   ├── RecoveryProcess.tsx      # 4-step athlete recovery journey timeline
│   │   ├── ServicesGrid.tsx         # Core therapy modalities (Dry Needling, Cupping, etc.)
│   │   ├── SmoothScroll.tsx         # Lenis smooth scrolling wrapper
│   │   ├── SportsGrid.tsx           # Sport-by-sport recovery protocols
│   │   └── WhyRemk.tsx              # Key differentiators & clinical credentials
│   └── lib/
│       ├── data.ts                  # Structured therapy data, FAQs, and body map protocols
│       └── whatsapp.ts              # WhatsApp pre-filled message generator
├── public/                          # Static assets and media files
├── open-next.config.ts              # OpenNext deployment config for Cloudflare
├── tailwind.config.ts               # Custom color palette and animation definitions
└── package.json                     # Dependencies and scripts
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js 18+** installed.

### Installation

```bash
# Clone the repository
git clone https://github.com/eddigitalsolution/sport-therapy.git

# Navigate into the project folder
cd sport-therapy

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the live application.

---

## 📦 Building & Deployment

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run start
```

For Cloudflare / Edge deployment via OpenNext:

```bash
npx open-next-cloudflare
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
