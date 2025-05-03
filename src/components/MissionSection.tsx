import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/1.jpeg',
  '/images/2.png',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
];

const MissionSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  /* ---------------- scroll‑in animation (unchanged) ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('appear');
        }),
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) {
      section.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  /* ---------------- auto‑slide every 4 s ---------------- */
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % images.length);
    }, 4000); // 4 000 ms
    return () => clearInterval(id);
  }, []);

  /* manual controls */
  const prev = () => setIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setIndex(i => (i + 1) % images.length);

  /* ---------------- JSX ---------------- */
  return (
    <section id="mission" ref={sectionRef} className="relative overflow-hidden py-24">
    {/* decorative background */}
    <div className="absolute inset-0 z-0">
      <svg
        className="absolute left-0 top-0 h-full w-32 text-ubc-slate/5"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L100,0 L50,100 L0,100 Z" fill="currentColor" />
      </svg>
      <svg
        className="absolute right-0 bottom-0 h-full w-48 text-ubc-mint/5"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path d="M100,0 L100,100 L0,100 Z" fill="currentColor" />
      </svg>
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-ubc-slate/5 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-ubc-blue/20 blur-3xl"></div>
    </div>
  
    <div className="relative z-10 mx-auto max-w-6xl px-6">
      <div className="animate-on-scroll mb-30 translate-y-10 text-center opacity-0 duration-1000">
        <div className="mb-6 flex items-center justify-center">
          <div className="h-px w-12 bg-ubc-slate" />
          <h2 className="mx-4 text-4xl font-bold text-ubc-mint md:text-6xl">
            Our Mission
          </h2>
          <div className="h-px w-12 bg-ubc-slate" />
        </div>
  
        <div className="mx-auto max-w-3xl">
          <p className="text-xl leading-relaxed text-ubc-mint/90">
          We’re developing open-source microfabrication machines and processes to build conventionally expensive and inaccessible hardware from scratch. Our first downstream goal is to synergize with the established biotech ecosystem here in Vancouver. We aim to make it 10x cheaper to get labs access to tools like microfluidic cytometers and microelectrode arrays by using first principles manufacturing. In the long term, this would enable early-stage startups to bring life-changing biomedical solutions to market at cheaper costs. 
          </p>
        </div>
      </div>
  
      {/* -------- image carousel -------- */}
      <div
        className="
          animate-on-scroll relative mx-auto mt-16 mb-8
          w-full max-w-lg sm:max-w-xl lg:max-w-2xl
          translate-y-10 opacity-0 duration-1000
        "
      >
        {/* inner frame keeps crop & rounded corners */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`slide-${i + 1}`}
              className={`
                absolute inset-0 h-full w-full object-cover object-center
                transition-opacity duration-700 ease-in-out
                ${i === index ? 'opacity-100' : 'opacity-0'}
              `}
              loading="lazy"
            />
          ))}
        </div>
  
        {/* arrows well outside the frame — roughly ⅓ of the screen gap */}
        <button
          onClick={prev}
          className="
            absolute -left-24 md:-left-32 lg:-left-40 top-1/2 -translate-y-1/2
            flex items-center justify-center
            opacity-50 hover:opacity-100 hover:scale-110
            transition-transform duration-200 ease-in-out
          "
        >
          <ChevronLeft size={48} />
        </button>
  
        <button
          onClick={next}
          className="
            absolute -right-24 md:-right-32 lg:-right-40 top-1/2 -translate-y-1/2
            flex items-center justify-center
            opacity-50 hover:opacity-100 hover:scale-110
            transition-transform duration-200 ease-in-out
          "
        >
          <ChevronRight size={48} />
        </button>
  
        {/* dot indicators */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`
                h-2 w-2 rounded-full
                transition-transform duration-200
                ${i === index ? 'scale-110 bg-ubc-mint' : 'bg-ubc-slate/40 hover:scale-110'}
              `}
            />
          ))}
        </div>
      </div>
      {/* -------- /image carousel -------- */}
    </div>
  </section>
  
  );
};

export default MissionSection;
