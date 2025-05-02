
import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ubc-mint">Our Mission</h2>
          <div className="h-1 w-20 bg-ubc-slate mb-8"></div>
          <p className="text-xl leading-relaxed opacity-90">
            HackerFab UBC is an open-access electronics fabrication facility designed to democratize hardware development
            and foster innovation across disciplines. We provide UBC students and faculty with the tools, resources, 
            and community needed to transform their ideas into functional electronic prototypes.
          </p>
          <p className="text-xl leading-relaxed mt-4 opacity-90">
            Our mission is to break down barriers in hardware development, making electronic prototyping accessible to everyone
            regardless of their background or experience level. We believe in learning by making and aim to create an inclusive,
            collaborative environment where innovators can bring their ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-ubc-blue/50 border border-ubc-slate/30 p-6 rounded-lg opacity-0 animate-fade-in-delay-1">
            <div className="w-12 h-12 bg-ubc-slate/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ubc-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-ubc-mint/80">Building a vibrant community of makers, engineers, designers, and innovators across UBC.</p>
          </div>
          
          <div className="bg-ubc-blue/50 border border-ubc-slate/30 p-6 rounded-lg opacity-0 animate-fade-in-delay-2">
            <div className="w-12 h-12 bg-ubc-slate/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ubc-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-ubc-mint/80">Providing hands-on workshops, tutorials, and mentorship to develop practical electronics skills.</p>
          </div>
          
          <div className="bg-ubc-blue/50 border border-ubc-slate/30 p-6 rounded-lg opacity-0 animate-fade-in-delay-3">
            <div className="w-12 h-12 bg-ubc-slate/20 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-ubc-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-ubc-mint/80">Empowering students to create tangible solutions to real-world problems through electronic prototyping.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
