import React from 'react';
import { Cpu, Zap, Code, Wrench, Users, Target } from 'lucide-react';
import InterestForm from '@/components/InterestForm';
import Header from '@/components/Header';

const Teams = () => {
  const teamRoles = [
    {
      title: "Hardware Engineering",
      description: "Design and develop cutting-edge hardware systems, from circuit boards to mechanical components. Work on lithography steppers, precision machinery, and electronic control systems.",
      skills: ["Circuit Design", "PCB Layout", "Embedded Systems", "CAD Design", "Signal Processing"],
      icon: Cpu
    },
    {
      title: "Software Engineering", 
      description: "Build robust software solutions for hardware control, user interfaces, and system automation. Develop drivers, control algorithms, and monitoring systems.",
      skills: ["Python", "C/C++", "MATLAB", "Linux", "Real-time Systems", "GUI Development"],
      icon: Code
    },
    {
      title: "Mechanical Engineering",
      description: "Design and fabricate precision mechanical systems, structural components, and integration solutions. Focus on nanometer-level precision and stability.",
      skills: ["Mechanical Design", "3D Modeling", "Precision Manufacturing", "Materials Science", "FEA Analysis"],
      icon: Wrench
    },
    {
      title: "Electrical Engineering",
      description: "Develop power systems, control electronics, and sensor integration. Work on high-precision electrical systems and measurement equipment.",
      skills: ["Power Electronics", "Control Systems", "Sensor Integration", "PCB Design", "Test Equipment"],
      icon: Zap
    },
    {
      title: "Project Management",
      description: "Coordinate project timelines, manage resources, and ensure successful delivery of complex engineering projects. Bridge technical teams and stakeholders.",
      skills: ["Project Planning", "Team Coordination", "Risk Management", "Technical Communication", "Agile Methods"],
      icon: Target
    },
    {
      title: "Research & Development",
      description: "Explore new technologies, conduct feasibility studies, and prototype innovative solutions. Stay at the forefront of semiconductor manufacturing technology.",
      skills: ["Research Methods", "Data Analysis", "Prototyping", "Technical Writing", "Literature Review"],
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-ubc-blue circuit-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-aldrich mb-6 text-ubc-mint glow">
            Join Our Teams
          </h1>
          <p className="text-xl text-ubc-mint/80 max-w-2xl mx-auto">
            We're looking for passionate engineers and innovators to help build the future of semiconductor manufacturing technology.
          </p>
        </div>
      </section>

      {/* Team Roles Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamRoles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <div 
                  key={role.title}
                  className="bg-card border border-border rounded-lg p-6 hover:border-ubc-slate/40 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-ubc-slate/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-ubc-slate" />
                    </div>
                    <h3 className="text-xl font-aldrich text-ubc-mint">{role.title}</h3>
                  </div>
                  
                  <p className="text-ubc-mint/80 mb-6 leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-ubc-mint mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 bg-ubc-slate/20 text-ubc-mint text-xs rounded-md border border-ubc-slate/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <InterestForm />
    </div>
  );
};

export default Teams;