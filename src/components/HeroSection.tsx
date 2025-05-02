
import React, { useEffect, useRef } from 'react';
import { CircuitIcon } from './icons/CircuitIcon';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Circuit animation
    const particles: { x: number; y: number; radius: number; vx: number; vy: number; color: string }[] = [];
    const connectionDistance = 150;
    const particleCount = 70;
    
    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? '#8BAAAD' : '#F4FFF8'
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particles
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139, 170, 173, ${0.8 - distance / connectionDistance})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Circuit animation background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0"
      />
      
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-ubc-slate/5 rounded-bl-[60%] blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-ubc-mint/5 rounded-tr-[70%] blur-[80px]"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Main title and logo */}
          <div className="md:col-span-8 text-left transform -rotate-3">
            <div className="flex items-center mb-4">
              <CircuitIcon className="w-16 h-16 text-ubc-slate mr-4 animate-pulse-slow" />
              <div className="flex flex-col">
                <span className="text-sm md:text-base text-ubc-mint tracking-widest">UNIVERSITY OF BRITISH COLUMBIA</span>
                <div className="h-0.5 w-full bg-ubc-slate/50"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter glow text-transparent bg-clip-text bg-gradient-to-r from-ubc-mint via-ubc-slate/80 to-ubc-mint">
              HACKER<span className="text-ubc-slate">FAB</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-ubc-mint/90 mt-6 ml-1 max-w-xl">
              Where hardware innovation meets <span className="relative inline-block">
                electronic reality
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-ubc-slate"></span>
              </span>
            </p>
          </div>
          
          {/* Electronic elements visualization */}
          <div className="md:col-span-4 hidden md:flex justify-center items-center">
            <div className="circuit-board-visualization relative w-60 h-60">
              {/* Animated circuit lines */}
              <div className="absolute w-40 h-40 border-2 border-ubc-slate/40 rotate-45 animate-pulse-slow"></div>
              <div className="absolute w-60 h-60 border border-ubc-mint/30 animate-float" style={{animationDelay: '1s'}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-ubc-blue border border-ubc-slate flex items-center justify-center rounded-full">
                  <div className="w-12 h-12 bg-ubc-slate/20 rounded-full flex items-center justify-center animate-pulse-slow">
                    <div className="w-4 h-4 bg-ubc-mint rounded-full"></div>
                  </div>
                </div>
              </div>
              {/* Circuit traces */}
              <div className="absolute top-1/2 right-0 w-20 h-0.5 bg-ubc-slate/60"></div>
              <div className="absolute bottom-0 left-1/2 w-0.5 h-20 bg-ubc-mint/60"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-10 bg-ubc-slate/60"></div>
            </div>
          </div>
        </div>
        
        {/* CTA buttons with unusual layout */}
        <div className="mt-16 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
          <a 
            href="#mission" 
            className="group relative px-8 py-4 bg-transparent border-2 border-ubc-slate text-ubc-mint font-medium hover:bg-ubc-slate/10 transition-all overflow-hidden"
          >
            <span className="relative z-10 flex items-center group-hover:text-ubc-slate transition-colors">
              Explore Our Vision
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute bottom-0 left-0 w-full h-0 bg-ubc-mint group-hover:h-full transition-all duration-300 ease-out z-0"></div>
          </a>
          <a 
            href="#interest" 
            className="group relative px-8 py-4 bg-ubc-slate text-ubc-blue font-medium overflow-hidden"
          >
            <span className="relative z-10">Join The Movement</span>
            <div className="absolute inset-0 bg-gradient-to-r from-ubc-slate via-ubc-mint to-ubc-slate bg-[length:200%] animate-gradient-x"></div>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="w-6 h-6 text-ubc-mint/70" />
        <span className="text-xs text-ubc-mint/50 mt-2 tracking-widest">SCROLL</span>
      </div>
    </section>
  );
};

export default HeroSection;
