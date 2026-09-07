import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FloatingWhatsAppCTA } from "@/components/FloatingWhatsAppCTA";

export const metadata: Metadata = {
  title: "PEAK Performance | Sports Massage for Female Athletes",
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
    "Sofea PEAK",
  ],
  authors: [{ name: "PEAK Performance" }],
  openGraph: {
    title: "PEAK Performance | Sports Massage for Female Athletes",
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
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self' https: data: blob: 'unsafe-inline'; script-src 'self' 'unsafe-inline' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https: blob:; font-src 'self' https: data:; connect-src 'self' https: wss:;"
        />
      </head>
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
