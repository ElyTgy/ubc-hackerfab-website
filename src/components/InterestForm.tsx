import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

/**
 * InterestCTA – pared‑down call‑to‑action that keeps the original heading
 * and description text but replaces the full form with a single button
 * linking to a Google Form. All magnetic / intersection‑observer effects
 * and decorative SVGs have been removed for simplicity.
 */

const InterestCTA: React.FC = () => {
  return (
    <section id="interest" className="py-32 px-6 bg-transparent">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-ubc-mint">
          Interested in joining the team?
        </h2>

        {/* Short description */}
        <p className="text-xl text-ubc-mint/80 mb-10">
          We are still in early stages, so there is no formal application process. Fill out this form and tell us about yourself, and we'll get back to you!
        </p>

        {/* CTA button – update the href with your live Google Form link */}
        <a
          href="https://app.youform.com/forms/h4pdrz0s" // ← replace this
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="group relative bg-ubc-slate hover:bg-ubc-slate/90 text-ubc-blue font-medium py-6 text-lg flex items-center justify-center gap-2">
            <span>Apply</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default InterestCTA;
