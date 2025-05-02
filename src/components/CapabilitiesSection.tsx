
import React, { useState } from 'react';
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const CapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <section id="capabilities" className="py-20 px-6 bg-ubc-blue/80 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ubc-mint">Our Capabilities</h2>
          <div className="h-1 w-20 bg-ubc-slate mb-8"></div>
        </div>
        
        <Tabs defaultValue="current" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-ubc-blue/50 border border-ubc-slate/30">
            <TabsTrigger
              value="current"
              className={`py-3 text-lg ${activeTab === "current" ? "text-ubc-mint" : "text-ubc-mint/70"}`}
            >
              Current Capabilities
            </TabsTrigger>
            <TabsTrigger
              value="future"
              className={`py-3 text-lg ${activeTab === "future" ? "text-ubc-mint" : "text-ubc-mint/70"}`}
            >
              Future Capabilities
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="current" className="mt-0 opacity-0 animate-fade-in-delay-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-ubc-blue/40 border border-ubc-slate/30 overflow-hidden">
                <div className="h-52 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubc-mint">PCB Design & Fabrication</h3>
                  <ul className="list-disc list-inside space-y-2 text-ubc-mint/80">
                    <li>Industry-standard PCB design software access</li>
                    <li>PCB prototyping equipment</li>
                    <li>Two-layer board capability</li>
                    <li>Component libraries and design resources</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ubc-blue/40 border border-ubc-slate/30 overflow-hidden">
                <div className="h-52 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubc-mint">Component Assembly</h3>
                  <ul className="list-disc list-inside space-y-2 text-ubc-mint/80">
                    <li>Soldering stations with temperature control</li>
                    <li>Hot air rework stations</li>
                    <li>Component inventory (resistors, capacitors, ICs)</li>
                    <li>Microscope for precision work</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ubc-blue/40 border border-ubc-slate/30 overflow-hidden">
                <div className="h-52 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubc-mint">Testing & Debugging</h3>
                  <ul className="list-disc list-inside space-y-2 text-ubc-mint/80">
                    <li>Digital oscilloscopes</li>
                    <li>Power supplies</li>
                    <li>Multimeters and basic test equipment</li>
                    <li>Logic analyzers</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ubc-blue/40 border border-ubc-slate/30 overflow-hidden">
                <div className="h-52 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubc-mint">Workshops & Support</h3>
                  <ul className="list-disc list-inside space-y-2 text-ubc-mint/80">
                    <li>Regular skill-building workshops</li>
                    <li>Technical mentorship</li>
                    <li>Project consultation</li>
                    <li>Community events and hackathons</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="future" className="mt-0 opacity-0 animate-fade-in-delay-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-ubc-blue/40 border border-ubc-slate/30 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubc-mint">Advanced Manufacturing</h3>
                  <ul className="list-disc list-inside space-y-2 text-ubc-mint/80">
                    <li>Pick and place machine for SMD components</li>
                    <li>Reflow oven for mass production</li>
                    <li>Multi-layer PCB fabrication</li>
                    <li>Automated testing systems</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ubc-blue/40 border border-ubc-slate/30 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubc-mint">Specialized Equipment</h3>
                  <ul className="list-disc list-inside space-y-2 text-ubc-mint/80">
                    <li>RF testing chamber</li>
                    <li>Environmental testing capabilities</li>
                    <li>High-performance computing for simulations</li>
                    <li>Specialized sensors and components library</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ubc-blue/40 border border-ubc-slate/30 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubc-mint">Integration Facilities</h3>
                  <ul className="list-disc list-inside space-y-2 text-ubc-mint/80">
                    <li>3D printing for enclosures</li>
                    <li>CNC machining for precision parts</li>
                    <li>Laser cutting for rapid prototyping</li>
                    <li>Full product development pipeline</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ubc-blue/40 border border-ubc-slate/30 overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-ubc-mint">Expanded Programs</h3>
                  <ul className="list-disc list-inside space-y-2 text-ubc-mint/80">
                    <li>Industry partnerships and sponsored projects</li>
                    <li>Research collaborations across departments</li>
                    <li>Start-up incubation support</li>
                    <li>Advanced certification courses</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
