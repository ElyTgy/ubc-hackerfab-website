
import React from 'react';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import InterestForm from '@/components/InterestForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="circuit-background min-h-screen">
      <HeroSection />
      <MissionSection />
      <CapabilitiesSection />
      <InterestForm />
      <Footer />
    </div>
  );
};

export default Index;
