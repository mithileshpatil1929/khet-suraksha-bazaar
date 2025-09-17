import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PestAlertDashboard from "@/components/PestAlertDashboard";
import MarketplaceSection from "@/components/MarketplaceSection";
import FeaturesSection from "@/components/FeaturesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="alerts">
          <PestAlertDashboard />
        </section>
        <section id="marketplace">
          <MarketplaceSection />
        </section>
        <section id="features">
          <FeaturesSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
