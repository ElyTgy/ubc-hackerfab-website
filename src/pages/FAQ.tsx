import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqData = [
    {
      question: "What is HackerFab and what do you do?",
      answer: "HackerFab is developing open-source microfabrication machines and processes to build conventionally expensive and inaccessible hardware from scratch. We're making semiconductor fabrication tools and processes more accessible by using first principles manufacturing approaches."
    },
    {
      question: "Who can join the team and what qualifications do I need?",
      answer: "We're looking for passionate students across various disciplines including mechanical engineering, electrical engineering, physics, and software development. Since our team is small, you'll have significant control over what you work on. No specific qualifications are required - we value dedication and smart thinking over credentials."
    },
    {
      question: "What kind of projects will I work on?",
      answer: "You'll work on building chips from scratch using our open-source fabrication tools. This includes developing microfluidic cytometers, microelectrode arrays, and other biomedical devices. Projects span hardware development, software tools, process engineering, and research into new fabrication techniques."
    },
    {
      question: "How does the application process work?",
      answer: "The application process starts with our interest form, which should take about 10 minutes to complete. Based on your responses, we'll reach out with next steps. The process is designed to understand your interests, skills, and how you'd like to contribute to our mission."
    },
    {
      question: "What is your long-term vision and impact?",
      answer: "Our goal is to make biomedical hardware development 10x cheaper, enabling early-stage startups to bring life-changing solutions to market at lower costs. We're synergizing with Vancouver's biotech ecosystem to democratize access to semiconductor fabrication tools and accelerate innovation in medical technology."
    }
  ];

  return (
    <div className="min-h-screen bg-ubc-blue">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-aldrich mb-6 text-ubc-mint glow">
            FAQ
          </h1>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-ubc-slate/30 rounded-lg bg-ubc-blue/30 backdrop-blur-sm px-6"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-ubc-mint hover:text-white transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ubc-mint/90 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;