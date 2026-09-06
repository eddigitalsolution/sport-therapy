import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FloatingWhatsAppCTA } from "@/components/FloatingWhatsAppCTA";

export const metadata: Metadata = {
  title: "RE:MK Performance | Sports Massage for Female Athletes",
  description:
    "Female-only sports massage and recovery services designed to support athletic performance, mobility, and physical readiness. Solve. Enhance. Dominate.",
  keywords: [
    "Sports Massage",
    "Female Athletes",
    "Athlete Recovery Studio",
    "PNF Stretching",
    "Sports Taping",
    "Kinesiology Tape",
    "Dry Cupping",
    "Football Recovery",
    "Badminton Recovery",
    "Sofea RE:MK",
  ],
  authors: [{ name: "RE:MK Performance" }],
  openGraph: {
    title: "RE:MK Performance | Sports Massage for Female Athletes",
    description:
      "Recovery designed for women who train hard, compete harder, and refuse to perform at 80%.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-brand-dark text-white font-sans antialiased selection:bg-brand-red selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          {children}
          <FloatingWhatsAppCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
