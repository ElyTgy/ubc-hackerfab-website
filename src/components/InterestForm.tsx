
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const InterestForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    toast({
      title: "Form Submitted",
      description: "Thank you for your interest! We'll be in touch soon.",
    });
  };

  return (
    <section id="interest" className="py-20 px-6 relative">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 opacity-0 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ubc-mint">Join the Community</h2>
          <div className="h-1 w-20 bg-ubc-slate mb-8"></div>
          <p className="text-xl leading-relaxed opacity-90 mb-8">
            Interested in becoming part of HackerFab UBC? Fill out the form below to stay updated on our
            progress, upcoming events, and opportunities to get involved.
          </p>
        </div>
        
        <div className="bg-ubc-blue/40 border border-ubc-slate/30 rounded-lg p-8 opacity-0 animate-fade-in-delay-1">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="firstName" className="text-ubc-mint/90 block">First Name</label>
                <Input 
                  id="firstName" 
                  className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate" 
                  placeholder="First Name" 
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="text-ubc-mint/90 block">Last Name</label>
                <Input 
                  id="lastName" 
                  className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate" 
                  placeholder="Last Name" 
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-ubc-mint/90 block">Email</label>
              <Input 
                id="email" 
                type="email" 
                className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate" 
                placeholder="your.email@ubc.ca" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="affiliation" className="text-ubc-mint/90 block">UBC Affiliation</label>
              <Input 
                id="affiliation" 
                className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate" 
                placeholder="Student, Faculty, Staff, etc." 
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="interests" className="text-ubc-mint/90 block">Interests & Experience</label>
              <Textarea 
                id="interests" 
                className="bg-ubc-blue/70 border-ubc-slate/40 text-ubc-mint placeholder:text-ubc-mint/50 focus:border-ubc-slate min-h-[120px]" 
                placeholder="Tell us about your background, interests, and what you hope to gain from HackerFab UBC."
              />
            </div>
            
            <Button type="submit" className="bg-ubc-slate hover:bg-ubc-slate/90 text-ubc-blue font-medium px-8 py-6 text-lg w-full">
              Submit Interest
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InterestForm;
