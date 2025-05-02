
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

interface CapabilityItem {
  title: string;
  description: string;
  icon: string;
}

const CapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("current");
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Current capabilities
  const currentCapabilities: CapabilityItem[] = [
    {
      title: "PCB Design & Fabrication",
      description: "Industry-standard PCB design software access, prototyping equipment, two-layer board capability.",
      icon: "circuit"
    },
    {
      title: "Component Assembly",
      description: "Soldering stations, hot air rework stations, component inventory, precision tools.",
      icon: "assembly"
    },
    {
      title: "Testing & Debugging",
      description: "Digital oscilloscopes, power supplies, multimeters, logic analyzers for thorough testing.",
      icon: "testing"
    },
    {
      title: "Workshops & Support",
      description: "Regular skill-building workshops, technical mentorship, project consultation and events.",
      icon: "workshop"
    }
  ];
  
  // Future capabilities
  const futureCapabilities: CapabilityItem[] = [
    {
      title: "Advanced Manufacturing",
      description: "Pick and place machine, reflow oven, multi-layer PCB fabrication, automated testing.",
      icon: "manufacturing"
    },
    {
      title: "Specialized Equipment",
      description: "RF testing chamber, environmental testing, high-performance computing for simulations.",
      icon: "equipment"
    },
    {
      title: "Integration Facilities",
      description: "3D printing for enclosures, CNC machining, laser cutting, full product development.",
      icon: "integration"
    },
    {
      title: "Expanded Programs",
      description: "Industry partnerships, research collaborations, start-up incubation, certification courses.",
      icon: "programs"
    }
  ];

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const scrollPosition = window.scrollY;
      const containerPosition = container.getBoundingClientRect().top + window.scrollY;
      const offset = scrollPosition - containerPosition;
      
      if (offset > -window.innerHeight && offset < container.offsetHeight + window.innerHeight) {
        // Apply parallax effect to the background elements
        const elements = container.querySelectorAll('.parallax-element');
        elements.forEach((el: any, i) => {
          const speed = i % 2 === 0 ? 0.05 : -0.03;
          el.style.transform = `translateY(${offset * speed}px)`;
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const renderCapability = (capability: CapabilityItem, index: number) => {
    return (
      <motion.div 
        key={capability.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="capability-card group"
      >
        <div className="relative overflow-hidden rounded-lg">
          <div className="bg-ubc-blue/40 border border-ubc-slate/30 p-8 h-full transform group-hover:scale-[0.98] transition-transform">
            <div className="capability-icon mb-6">
              {getCapabilityIcon(capability.icon)}
            </div>
            <h3 className="text-xl font-bold mb-3 text-ubc-mint">{capability.title}</h3>
            <p className="text-ubc-mint/80">{capability.description}</p>
          </div>
          
          {/* Decorative circuit traces */}
          <div className="absolute top-0 right-0 w-12 h-12">
            <div className="absolute top-0 right-0 w-full h-0.5 bg-ubc-slate/30"></div>
            <div className="absolute top-0 right-0 h-full w-0.5 bg-ubc-slate/30"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-8 h-8">
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ubc-slate/30"></div>
            <div className="absolute bottom-0 left-0 h-full w-0.5 bg-ubc-slate/30"></div>
          </div>
        </div>
      </motion.div>
    );
  };
  
  // Custom icons for capabilities
  const getCapabilityIcon = (iconType: string) => {
    switch (iconType) {
      case "circuit":
        return (
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 border-2 border-ubc-mint/60 rounded-full"></div>
            <div className="absolute inset-[4px] border border-ubc-slate/60 rounded-full"></div>
            <div className="absolute top-1/2 left-0 w-3 h-[1px] bg-ubc-mint"></div>
            <div className="absolute top-1/2 right-0 w-3 h-[1px] bg-ubc-mint"></div>
            <div className="absolute top-[10px] right-[10px] w-1 h-1 bg-ubc-slate rounded-full"></div>
            <div className="absolute bottom-[10px] left-[10px] w-1 h-1 bg-ubc-slate rounded-full"></div>
          </div>
        );
      case "assembly":
        return (
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 border border-ubc-mint/60 rounded-md"></div>
            <div className="absolute top-1/4 right-1/4 w-6 h-6 border border-ubc-slate/60"></div>
            <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-ubc-mint/20"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-ubc-mint rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        );
      case "testing":
        return (
          <div className="w-12 h-12 relative">
            <svg viewBox="0 0 24 24" className="text-ubc-slate" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 3h20v4H2zM4 7v10M20 7v10M2 17h20v4H2z"></path>
              <path d="M9 11h6M9 14h6" strokeWidth="1"></path>
            </svg>
          </div>
        );
      case "workshop":
        return (
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border border-ubc-mint/60 transform rotate-45"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-5 h-5 bg-ubc-slate/20 transform -rotate-12"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-ubc-mint rounded-full"></div>
            </div>
          </div>
        );
      case "manufacturing":
        return (
          <div className="w-12 h-12 relative">
            <svg viewBox="0 0 24 24" className="text-ubc-slate" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="8" rx="1"></rect>
              <rect x="2" y="14" width="20" height="8" rx="1"></rect>
              <path d="M6 6h.01M6 18h.01M12 6h6M12 18h6" strokeWidth="1.5"></path>
            </svg>
          </div>
        );
      case "equipment":
        return (
          <div className="w-12 h-12 relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-ubc-mint/60"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-ubc-mint/60"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-ubc-mint/60"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-ubc-mint/60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-ubc-slate/40 rounded-full"></div>
            </div>
          </div>
        );
      case "integration":
        return (
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1">
              <div className="border border-ubc-mint/60"></div>
              <div className="border border-ubc-slate/60"></div>
              <div className="border border-ubc-slate/60"></div>
              <div className="border border-ubc-mint/60"></div>
            </div>
          </div>
        );
      case "programs":
        return (
          <div className="w-12 h-12 relative">
            <svg viewBox="0 0 24 24" className="text-ubc-mint" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
        );
      default:
        return <div className="w-12 h-12 bg-ubc-slate/20 rounded-full"></div>;
    }
  };
  
  return (
    <section ref={containerRef} id="capabilities" className="py-32 bg-ubc-blue/80 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-element absolute -left-32 -top-32 w-96 h-96 rounded-full bg-ubc-slate/5 blur-3xl"></div>
        <div className="parallax-element absolute -right-48 top-1/2 w-96 h-96 rounded-full bg-ubc-mint/5 blur-3xl"></div>
        <div className="parallax-element absolute left-1/4 -bottom-48 w-96 h-96 rounded-full bg-ubc-slate/5 blur-3xl"></div>
        
        {/* Circuit board pattern elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-20 w-20 h-20 border border-ubc-mint/30 rounded-full"></div>
          <div className="absolute right-20 bottom-40 w-32 h-32 border border-ubc-slate/30 transform rotate-45"></div>
          <div className="absolute left-1/3 top-1/3 w-16 h-16 border-2 border-ubc-mint/20"></div>
          <div className="absolute right-1/4 top-1/4 w-24 h-1 bg-ubc-slate/30"></div>
          <div className="absolute left-2/3 bottom-1/3 w-1 h-24 bg-ubc-mint/30"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          {/* Section title with creative styling */}
          <div className="flex flex-col items-center">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-6xl font-bold text-ubc-mint mb-2">Our Capabilities</h2>
              <div className="absolute -left-4 -right-4 h-[1px] bottom-0 bg-gradient-to-r from-transparent via-ubc-slate to-transparent"></div>
            </div>
            <p className="text-xl text-ubc-mint/80 max-w-2xl text-center mt-6">
              Explore what HackerFab UBC can offer now and what we're building for the future
            </p>
          </div>
          
          {/* Custom styled tabs */}
          <Tabs 
            defaultValue="current" 
            className="w-full mt-12" 
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-12">
              <TabsList className="bg-ubc-blue/30 border border-ubc-slate/20 p-1">
                <TabsTrigger
                  value="current"
                  className={`px-8 py-3 text-lg transition-all duration-300 ${
                    activeTab === "current" 
                      ? "text-ubc-blue bg-ubc-mint rounded-sm" 
                      : "text-ubc-mint/70 hover:text-ubc-mint"
                  }`}
                >
                  Current Capabilities
                </TabsTrigger>
                <TabsTrigger
                  value="future"
                  className={`px-8 py-3 text-lg transition-all duration-300 ${
                    activeTab === "future" 
                      ? "text-ubc-blue bg-ubc-mint rounded-sm" 
                      : "text-ubc-mint/70 hover:text-ubc-mint"
                  }`}
                >
                  Future Capabilities
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Capabilities display with motion animation */}
            <TabsContent value="current" className="mt-0">
              <div className="capabilities-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentCapabilities.map((capability, index) => (
                  renderCapability(capability, index)
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="future" className="mt-0">
              <div className="capabilities-grid grid grid-cols-1 md:grid-cols-2 gap-8">
                {futureCapabilities.map((capability, index) => (
                  renderCapability(capability, index)
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
