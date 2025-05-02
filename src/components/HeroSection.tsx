
import React from 'react';
import { CircuitIcon } from './icons/CircuitIcon';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-ubc-slate/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-ubc-blue/30 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl opacity-0 animate-fade-in">
        <div className="flex justify-center mb-6">
          <CircuitIcon className="w-24 h-24 text-ubc-slate animate-float" />
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 glow text-ubc-mint">
          HACKERFAB<span className="text-ubc-slate">UBC</span>
        </h1>
        <p className="text-xl md:text-2xl text-ubc-mint/90 mb-8">
          Where Innovation Meets Electronics
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#mission" 
            className="px-8 py-3 bg-ubc-slate text-ubc-blue font-medium rounded-md hover:bg-ubc-slate/90 transition-all"
          >
            Learn More
          </a>
          <a 
            href="#interest" 
            className="px-8 py-3 bg-transparent border border-ubc-slate text-ubc-mint font-medium rounded-md hover:bg-ubc-slate/10 transition-all"
          >
            Join Us
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-ubc-mint/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
