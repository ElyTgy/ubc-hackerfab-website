import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CircuitBoard } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ubc-blue/95 backdrop-blur-sm border-b border-ubc-slate/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-ubc-mint hover:text-white transition-colors">
            <span className="font-aldrich text-lg">HackerFab UBC</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors ${
                isActive('/') 
                  ? 'text-white border-b-2 border-ubc-slate pb-1' 
                  : 'text-ubc-mint hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/teams" 
              className={`font-medium transition-colors ${
                isActive('/teams') 
                  ? 'text-white border-b-2 border-ubc-slate pb-1' 
                  : 'text-ubc-mint hover:text-white'
              }`}
            >
              Teams
            </Link>
            <a 
              href="https://app.youform.com/forms/h4pdrz0s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-ubc-slate hover:bg-ubc-slate/90 text-ubc-blue font-medium px-4 py-2 rounded-md transition-colors"
            >
              Apply
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;