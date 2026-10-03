import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustMarquee from "./components/TrustMarquee";
import AboutSection from "./components/AboutSection";
import MetricsSection from "./components/MetricsSection";
import MediaSelector from "./components/MediaSelector";
import VizioBusSection from "./components/VizioBusSection";
import VizioMallSection from "./components/VizioMallSection";
import BenefitsSection from "./components/BenefitsSection";
import ComparisonSection from "./components/ComparisonSection";
import CreativeServicesSection from "./components/CreativeServicesSection";
import CaseShowcase from "./components/CaseShowcase";
import FinalCtaSection from "./components/FinalCtaSection";
import Footer from "./components/Footer";
import LeadModal from "./components/LeadModal";
import MobileStickyCta from "./components/MobileStickyCta";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInitialMedia, setModalInitialMedia] = useState<string>("all");
  const [activeMediaTab, setActiveMediaTab] = useState<"bus" | "mall">("bus");

  const handleOpenLeadModal = (initialMedia: string = "all") => {
    setModalInitialMedia(initialMedia);
    setModalOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.querySelector("#sobre");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col selection:bg-[#FF5A1F] selection:text-white">
      {/* Top 3-Zone Navigation */}
      <Navbar onOpenLeadModal={() => handleOpenLeadModal("all")} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenLeadModal={() => handleOpenLeadModal("all")}
          onExploreClick={handleExploreClick}
        />

        {/* Continuous Trust Marquee */}
        <TrustMarquee />

        {/* Section 01: About / Propósito */}
        <AboutSection />

        {/* Metrics: Impact Numbers (Light Contrast Rhythm) */}
        <MetricsSection />

        {/* Media Selector Tabs */}
        <MediaSelector
          activeTab={activeMediaTab}
          onSelectTab={setActiveMediaTab}
        />

        {/* Deep Dive 1: Vizio Bus | ABM */}
        <VizioBusSection
          onOpenLeadModal={(media) => handleOpenLeadModal(media || "bus")}
        />

        {/* Deep Dive 2: Vizio Mall | Barra Square (Light Contrast Rhythm) */}
        <VizioMallSection
          onOpenLeadModal={(media) => handleOpenLeadModal(media || "mall")}
        />

        {/* 6 Key Benefits */}
        <BenefitsSection />

        {/* Side-by-Side Comparison */}
        <ComparisonSection
          onOpenLeadModal={(initialMedia) => handleOpenLeadModal(initialMedia || "all")}
        />

        {/* Creative Production Services (Peças Estática, Motion, Vídeo) */}
        <CreativeServicesSection
          onOpenLeadModal={(media) => handleOpenLeadModal(media || "creative")}
        />

        {/* Case Showcase / Immersive Gallery */}
        <CaseShowcase onOpenLeadModal={() => handleOpenLeadModal("all")} />

        {/* Final Conversion Section */}
        <FinalCtaSection onOpenLeadModal={() => handleOpenLeadModal("all")} />
      </main>

      {/* Structured Footer */}
      <Footer />

      {/* Floating Bottom Mobile Sticky Action */}
      <MobileStickyCta onOpenLeadModal={() => handleOpenLeadModal("all")} />

      {/* Lead Generation & WhatsApp Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMedia={modalInitialMedia}
      />
    </div>
  );
}
