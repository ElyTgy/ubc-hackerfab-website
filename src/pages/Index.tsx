
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import InterestForm from '@/components/InterestForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Lock scrollbar on page load and smoothly enable it
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Enable smooth scrolling after initial render
    const timer = setTimeout(() => {
      document.body.style.overflow = '';
    }, 800);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-ubc-blue">
      <HeroSection />
      <MissionSection />
      <CapabilitiesSection />
      <InterestForm />
      <Footer />
    </div>
  );
};

export default Index;
