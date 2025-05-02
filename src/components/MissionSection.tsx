
import React, { useEffect, useRef } from 'react';
import { Brain, Book, Users } from 'lucide-react';

const MissionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    
    const section = sectionRef.current;
    if (section) {
      const elements = section.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (section) {
        const elements = section.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section 
      id="mission" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute left-0 top-0 h-full w-32 text-ubc-slate/5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L50,100 L0,100 Z" fill="currentColor" />
        </svg>
        <svg className="absolute right-0 bottom-0 h-full w-48 text-ubc-mint/5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M100,0 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-ubc-slate/5 filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-16 w-72 h-72 rounded-full bg-ubc-blue/20 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section heading with diagonal line */}
        <div className="mb-24 animate-on-scroll opacity-0 translate-y-10 duration-1000">
          <div className="flex items-center mb-6">
            <div className="h-px w-12 bg-ubc-slate"></div>
            <h2 className="text-4xl md:text-6xl font-bold mx-4 text-ubc-mint">Our Mission</h2>
            <div className="h-px flex-grow bg-ubc-slate/50"></div>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl text-ubc-mint/90 leading-relaxed">
              HackerFab UBC is an open-access electronics fabrication facility designed to democratize hardware development
              and foster innovation across disciplines. We provide UBC students and faculty with the tools, resources, 
              and community needed to transform their ideas into functional electronic prototypes.
            </p>
          </div>
        </div>
        
        {/* Mission diagram (unconventional layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 items-center">
          {/* Hexagonal mission values */}
          <div className="md:col-span-5 animate-on-scroll opacity-0 translate-y-10 duration-1000">
            <div className="relative">
              <div className="hexagon-container">
                <div className="hexagon bg-ubc-blue/80 border border-ubc-slate/30 p-8 mb-6">
                  <Brain className="w-8 h-8 text-ubc-mint mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                  <p className="text-ubc-mint/80">Empowering students to create tangible solutions to real-world problems through electronic prototyping.</p>
                </div>
                <div className="hexagon bg-ubc-blue/80 border border-ubc-slate/30 p-8 mb-6 ml-16">
                  <Book className="w-8 h-8 text-ubc-mint mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Education</h3>
                  <p className="text-ubc-mint/80">Providing hands-on workshops, tutorials, and mentorship to develop practical electronics skills.</p>
                </div>
                <div className="hexagon bg-ubc-blue/80 border border-ubc-slate/30 p-8 ml-8">
                  <Users className="w-8 h-8 text-ubc-mint mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Community</h3>
                  <p className="text-ubc-mint/80">Building a vibrant network of makers, engineers, designers, and innovators across UBC.</p>
                </div>
              </div>
              {/* Connecting lines between hexagons */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 400 400">
                <path d="M100,120 L220,150" stroke="#8BAAAD" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                <path d="M220,150 L180,260" stroke="#8BAAAD" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
                <path d="M180,260 L100,120" stroke="#8BAAAD" strokeWidth="1" strokeDasharray="5,5" opacity="0.5" />
              </svg>
            </div>
          </div>
          
          {/* Mission statement in vertical layout */}
          <div className="md:col-span-7 md:pl-12 animate-on-scroll opacity-0 translate-y-10 duration-1000" style={{animationDelay: '0.3s'}}>
            <div className="mission-values relative border-l-2 border-ubc-slate/30 pl-8 py-4">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-ubc-mint -translate-x-[7px]"></div>
              <h3 className="text-2xl font-bold mb-3 text-ubc-mint">Breaking Barriers</h3>
              <p className="text-lg leading-relaxed opacity-80 mb-12">
                Our mission is to break down barriers in hardware development, making electronic 
                prototyping accessible to everyone regardless of their background or experience level.
              </p>
              
              <div className="absolute left-0 top-1/3 w-3 h-3 rounded-full bg-ubc-mint -translate-x-[7px]"></div>
              <h3 className="text-2xl font-bold mb-3 text-ubc-mint">Hands-On Learning</h3>
              <p className="text-lg leading-relaxed opacity-80 mb-12">
                We believe in learning by making. Our facility provides the tools, mentorship, and
                collaborative environment needed to turn ideas into tangible prototypes.
              </p>
              
              <div className="absolute left-0 bottom-0 w-3 h-3 rounded-full bg-ubc-mint -translate-x-[7px]"></div>
              <h3 className="text-2xl font-bold mb-3 text-ubc-mint">Cross-Disciplinary Innovation</h3>
              <p className="text-lg leading-relaxed opacity-80">
                By bringing together students and faculty from diverse fields, we foster
                interdisciplinary collaboration that leads to truly innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
