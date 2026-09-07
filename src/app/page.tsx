import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { NotASpaSection } from "@/components/NotASpaSection";
import { SportsGrid } from "@/components/SportsGrid";
import { BodyNeedsInteractive } from "@/components/BodyNeedsInteractive";
import { ServicesGrid } from "@/components/ServicesGrid";
import { BodyRecoveryMap } from "@/components/BodyRecoveryMap";
import { WhyPeak } from "@/components/WhyPeak";
import { RecoveryProcess } from "@/components/RecoveryProcess";
import { PhotoBanner } from "@/components/PhotoBanner";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <NotASpaSection />
      <SportsGrid />
      <BodyNeedsInteractive />
      <ServicesGrid />
      <BodyRecoveryMap />
      <WhyPeak />
      <RecoveryProcess />
      <PhotoBanner />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
