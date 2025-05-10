
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MainInfoSection from "@/components/MainInfoSection";
import VehiclesSection from "@/components/VehiclesSection";
import AllInclusiveSection from "@/components/AllInclusiveSection";
import SafetySection from "@/components/SafetySection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <HeroSection />
        <MainInfoSection />
        <VehiclesSection />
        <AllInclusiveSection />
        <SafetySection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
