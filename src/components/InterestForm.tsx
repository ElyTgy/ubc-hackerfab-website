
import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { Send, AtSign, User, Briefcase } from 'lucide-react';

const InterestForm: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [formPosition, setFormPosition] = useState({ x: 0, y: 0 });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [activeField, setActiveField] = useState('');
  
  // Magnetic form effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!formRef.current) return;
      
      const rect = formRef.current.getBoundingClientRect();
      const formCenterX = rect.left + rect.width / 2;
      const formCenterY = rect.top + rect.height / 2;
      
      // Distance from mouse to form center
      const distX = e.clientX - formCenterX;
      const distY = e.clientY - formCenterY;
      
      // Calculate distance
      const distance = Math.sqrt(distX * distX + distY * distY);
      
      // Max movement amount
      const maxMovement = 15;
      
      // Only move if mouse is within a certain range
      if (distance < 400) {
        // Calculate movement factor based on distance (closer = more movement)
        const factor = 1 - Math.min(distance / 400, 1);
        
        // Calculate new position with smoothing
        const newX = (distX / 400) * maxMovement * factor;
        const newY = (distY / 400) * maxMovement * factor;
        
        setFormPosition({ x: newX, y: newY });
      } else {
        // Reset to center if mouse is far away
        setFormPosition({ x: 0, y: 0 });
      }
    };
    
    // Intersection observer to trigger fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsFormVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    toast({
      title: "Form Submitted",
      description: "Thank you for your interest! We'll be in touch soon.",
    });
  };
  
  return (
    <section id="interest" className="py-32 px-6 relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#8BAAAD" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Circuit elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,0 L50,0 C70,0 70,20 90,20 L200,20 C220,20 220,40 240,40 L600,40 C620,40 620,20 640,20 L800,20 C820,20 820,50 840,50 L1200,50" 
                  stroke="#F4FFF8" 
                  strokeWidth="1" 
                  fill="none" />
            <circle cx="240" cy="40" r="4" fill="#8BAAAD" />
            <circle cx="640" cy="20" r="4" fill="#8BAAAD" />
            <circle cx="840" cy="50" r="4" fill="#8BAAAD" />
          </svg>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ubc-mint inline-block relative">
            Join the Community
            <div className="absolute left-0 right-0 h-px bottom-0 bg-ubc-slate"></div>
          </h2>
          <p className="text-xl text-ubc-mint/80 max-w-2xl mx-auto">
            Interested in becoming part of HackerFab UBC? Fill out the form below to stay updated on our
            progress, upcoming events, and opportunities to get involved.
          </p>
        </div>
        
        {/* Interactive form with "magnetic" movement effect */}
        <div 
          ref={formRef} 
          className={`max-w-3xl mx-auto transform transition-all duration-300 ease-out ${
            isFormVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{ 
            transform: `perspective(1000px) rotateX(${formPosition.y * 0.05}deg) rotateY(${-formPosition.x * 0.05}deg) translateX(${formPosition.x * 0.2}px) translateY(${formPosition.y * 0.2}px)`
          }}
        >
          <div className="relative backdrop-blur-sm bg-ubc-blue/40 border border-ubc-slate/30 rounded-lg p-8 shadow-[0_10px_40px_-15px_rgba(139,170,173,0.2)]">
            {/* Decorative form elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-ubc-mint/40"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-ubc-mint/40"></div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div 
                  className={`form-group relative transition-all duration-300 ${
                    activeField === 'firstName' ? 'scale-[1.02]' : ''
                  }`}
                >
                  <label className="text-ubc-mint/90 block mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2 text-ubc-slate" />
                    First Name
                  </label>
                  <Input 
                    className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate focus:ring-1 focus:ring-ubc-mint/30"
                    placeholder="First Name" 
                    required
                    onFocus={() => setActiveField('firstName')}
                    onBlur={() => setActiveField('')}
                  />
                </div>
                <div 
                  className={`form-group relative transition-all duration-300 ${
                    activeField === 'lastName' ? 'scale-[1.02]' : ''
                  }`}
                >
                  <label className="text-ubc-mint/90 block mb-2 flex items-center">
                    <User className="w-4 h-4 mr-2 text-ubc-slate" />
                    Last Name
                  </label>
                  <Input 
                    className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate focus:ring-1 focus:ring-ubc-mint/30"
                    placeholder="Last Name" 
                    required
                    onFocus={() => setActiveField('lastName')}
                    onBlur={() => setActiveField('')}
                  />
                </div>
              </div>
              
              <div 
                className={`form-group relative transition-all duration-300 ${
                  activeField === 'email' ? 'scale-[1.02]' : ''
                }`}
              >
                <label className="text-ubc-mint/90 block mb-2 flex items-center">
                  <AtSign className="w-4 h-4 mr-2 text-ubc-slate" />
                  Email
                </label>
                <Input 
                  type="email" 
                  className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate focus:ring-1 focus:ring-ubc-mint/30" 
                  placeholder="your.email@ubc.ca" 
                  required
                  onFocus={() => setActiveField('email')}
                  onBlur={() => setActiveField('')}
                />
              </div>
              
              <div 
                className={`form-group relative transition-all duration-300 ${
                  activeField === 'affiliation' ? 'scale-[1.02]' : ''
                }`}
              >
                <label className="text-ubc-mint/90 block mb-2 flex items-center">
                  <Briefcase className="w-4 h-4 mr-2 text-ubc-slate" />
                  UBC Affiliation
                </label>
                <Input 
                  className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate focus:ring-1 focus:ring-ubc-mint/30" 
                  placeholder="Student, Faculty, Staff, etc." 
                  required
                  onFocus={() => setActiveField('affiliation')}
                  onBlur={() => setActiveField('')}
                />
              </div>
              
              <div 
                className={`form-group relative transition-all duration-300 ${
                  activeField === 'interests' ? 'scale-[1.02]' : ''
                }`}
              >
                <label className="text-ubc-mint/90 block mb-2">Interests & Experience</label>
                <Textarea 
                  className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate focus:ring-1 focus:ring-ubc-mint/30 min-h-[120px]" 
                  placeholder="Tell us about your background, interests, and what you hope to gain from HackerFab UBC."
                  onFocus={() => setActiveField('interests')}
                  onBlur={() => setActiveField('')}
                />
              </div>
              
              <Button 
                type="submit" 
                className="group relative bg-ubc-slate hover:bg-ubc-slate/90 text-ubc-blue font-medium py-6 text-lg w-full overflow-hidden flex items-center justify-center gap-2"
              >
                <span>Submit Interest</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                
                {/* Button highlight effect */}
                <div className="absolute inset-0 w-40 h-40 bg-white opacity-0 group-hover:opacity-10 rounded-full -left-10 -top-10 transition-opacity"></div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestForm;
