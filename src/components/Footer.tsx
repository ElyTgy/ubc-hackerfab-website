
import React from 'react';
import { CircuitIcon } from './icons/CircuitIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ubc-blue/90 border-t border-ubc-slate/20 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <CircuitIcon className="w-8 h-8 text-ubc-slate mr-3" />
            <span className="text-ubc-mint font-aldrich text-xl">HACKERFAB<span className="text-ubc-slate">UBC</span></span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a href="#mission" className="text-ubc-mint/80 hover:text-ubc-mint transition-colors animated-underline">
              Mission
            </a>
            <a href="#capabilities" className="text-ubc-mint/80 hover:text-ubc-mint transition-colors animated-underline">
              Capabilities
            </a>
            <a href="#interest" className="text-ubc-mint/80 hover:text-ubc-mint transition-colors animated-underline">
              Join Us
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-ubc-slate/20 flex flex-col md:flex-row justify-between items-center text-ubc-mint/60 text-sm">
          <p>&copy; {new Date().getFullYear()} HackerFab UBC. All rights reserved.</p>
          <p className="mt-2 md:mt-0">University of British Columbia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
