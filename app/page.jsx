import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import NosEngagements from "@/components/NosEngagements";
import IconicCollectionCarousel from "@/components/IconicCollectionCarousel";
import ServicesSection from "@/components/ServicesSection";
import NosOffres from "@/components/NosOffres";
import NosLogements from "@/components/NosLogements";

export const metadata = {
  title: "B&C Conciergerie Côte d'Azur | Gestion Airbnb Nice Monaco",
  description:
    "Conciergerie haut de gamme sur la Côte d'Azur. Gestion locative Airbnb, ménage professionnel, revenus optimisés. Nice, Monaco, Cannes. Devis gratuit.",
  icons: {
    icon: "https://bcconciergerie.com/assets/logo.jpg",
  },
};

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
      <HeroSection />

      {/* Welcome Section - B&C Conciergerie Introduction */}
      <WelcomeSection />
      {/* Nos Offres Section - Special Offers */}
      <NosOffres />

      {/* Why Choose Us Section - Key Benefits */}
      <WhyChooseUs />

      {/* Nos Engagements Section */}
      <NosEngagements />

      {/* Iconic Collection Carousel - Featured Destinations */}
      <IconicCollectionCarousel />

      {/* Services Section - Complete Management Services */}
      <ServicesSection />

      {/* Nos Logements Section - Property Showcase */}
      <NosLogements />
    </div>
  );
}
