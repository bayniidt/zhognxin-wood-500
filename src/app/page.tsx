import { Header } from "@/components/sites/accesstimber.com-16361fa1/shared/Header";
import { AboutSection } from "@/components/sites/accesstimber.com-16361fa1/root-8a5edab2/AboutSection";
import { CtaSection } from "@/components/sites/accesstimber.com-16361fa1/root-8a5edab2/CtaSection";
import { HeroSection } from "@/components/sites/accesstimber.com-16361fa1/root-8a5edab2/HeroSection";
import { ProductsSection } from "@/components/sites/accesstimber.com-16361fa1/root-8a5edab2/ProductsSection";
import { StatsBar } from "@/components/sites/accesstimber.com-16361fa1/root-8a5edab2/StatsBar";
import { WhyChooseUs } from "@/components/sites/accesstimber.com-16361fa1/root-8a5edab2/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ProductsSection />
        <WhyChooseUs />
        <CtaSection />
      </main>
    </>
  );
}
