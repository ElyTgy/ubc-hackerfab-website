import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs,
} from "@/components/ui/tabs";

/* ──────────────────────────────────────────────────────────
   Types
   ────────────────────────────────────────────────────────── */
interface CapabilityItem {
  title: string;
  description: string;
  icon: string;
}

/* ──────────────────────────────────────────────────────────
   Component
   ────────────────────────────────────────────────────────── */
const CapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("current");
  const containerRef = useRef<HTMLDivElement>(null);

  /* 1. Define capabilities ─────────────────────────────── */
  const currentCapabilities: CapabilityItem[] = [
    {
      title: "Reflow Oven",
      description:
        "Repurposing an old toaster oven for soldering our PCBs. Precise temperature curve control via PID.",
      icon: "circuit",
    },
    {
      title: "Maskless UV Lithostepper",
      description:
        "Building on top of the TI DLP projector module to achieve ~10 µm feature sizes.",
      icon: "assembly",
    },
  ];

  const futureCapabilities: CapabilityItem[] = [
    {
      title: "Thin Film Microelectrodes",
      description:
        "Making devices used for recording electrical signals of cells using simple 4‑layer polyimide and metal microelectrodes.",
      icon: "equipment",
    },
    {
      title: "Soft‑Litho Microfluidics",
      description:
        "Making chips that can precisely control the flow of fluids in ≲ 20 µm‑wide channels.",
      icon: "integration",
    },
    {
      title: "Flow Cytometry",
      description:
        "Laser‑based detection and sorting of cells, built with our in‑house soft‑litho capabilities.",
      icon: "cyto",
    },
  ];

  /* 2. Parallax scroll effect ──────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollPos = window.scrollY;
      const containerTop =
        container.getBoundingClientRect().top + window.scrollY;
      const offset = scrollPos - containerTop;

      if (
        offset > -window.innerHeight &&
        offset < container.offsetHeight + window.innerHeight
      ) {
        const elements = container.querySelectorAll(".parallax-element");
        elements.forEach((el: any, i) => {
          const speed = i % 2 === 0 ? 0.05 : -0.03;
          el.style.transform = `translateY(${offset * speed}px)`;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* 3. Utility render helpers ──────────────────────────── */
  const renderCapability = (cap: CapabilityItem, idx: number) => (
    <motion.div
      key={cap.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="capability-card group"
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="bg-ubc-blue/40 border border-ubc-slate/30 p-8 h-full transform group-hover:scale-[0.98] transition-transform">
          <div className="capability-icon mb-6">
            {getCapabilityIcon(cap.icon)}
          </div>
          <h3 className="text-xl font-bold mb-3 text-ubc-mint">
            {cap.title}
          </h3>
          <p className="text-ubc-mint/80">{cap.description}</p>
        </div>

        {/* decorative traces */}
        <div className="absolute top-0 right-0 w-12 h-12">
          <div className="absolute top-0 right-0 w-full h-0.5 bg-ubc-slate/30" />
          <div className="absolute top-0 right-0 h-full w-0.5 bg-ubc-slate/30" />
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-8">
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ubc-slate/30" />
          <div className="absolute bottom-0 left-0 h-full w-0.5 bg-ubc-slate/30" />
        </div>
      </div>
    </motion.div>
  );

  const getCapabilityIcon = (iconType: string) => {
    switch (iconType) {
      /* … keep your existing SVG / JSX icon definitions … */
      case "circuit":
        return (
          <div className="relative w-12 h-12">
            <div className="absolute inset-0 border-2 border-ubc-mint/60 rounded-full" />
            <div className="absolute inset-[4px] border border-ubc-slate/60 rounded-full" />
            <div className="absolute top-1/2 left-0 w-3 h-[1px] bg-ubc-mint" />
            <div className="absolute top-1/2 right-0 w-3 h-[1px] bg-ubc-mint" />
            <div className="absolute top-[10px] right-[10px] w-1 h-1 bg-ubc-slate rounded-full" />
            <div className="absolute bottom-[10px] left-[10px] w-1 h-1 bg-ubc-slate rounded-full" />
          </div>
        );
      case "cyto":
        return <img src="/images/cyto.svg" alt="" className="w-12 h-12" />;
      /* … other cases unchanged … */
      default:
        return <div className="w-12 h-12 bg-ubc-slate/20 rounded-full" />;
    }
  };

  /* 4. Render ───────────────────────────────────────────── */
  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="relative overflow-hidden bg-ubc-blue/80 pt-20 pb-4"
    >
      {/* ── Parallax background ──────────────────────────── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-element absolute -left-32 -top-32 w-96 h-96 rounded-full bg-ubc-slate/5 blur-3xl" />
        <div className="parallax-element absolute -right-48 top-1/2 w-96 h-96 rounded-full bg-ubc-mint/5 blur-3xl" />
        <div className="parallax-element absolute left-1/4 -bottom-48 w-96 h-96 rounded-full bg-ubc-slate/5 blur-3xl" />
        {/* extra circuit lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute left-10 top-20 w-20 h-20 border border-ubc-mint/30 rounded-full" />
          <div className="absolute right-20 bottom-40 w-32 h-32 border border-ubc-slate/30 rotate-45" />
          <div className="absolute left-1/3 top-1/3 w-16 h-16 border-2 border-ubc-mint/20" />
          <div className="absolute right-1/4 top-1/4 w-24 h-1 bg-ubc-slate/30" />
          <div className="absolute left-2/3 bottom-1/3 w-1 h-24 bg-ubc-mint/30" />
        </div>
      </div>

      {/* ── Foreground content ───────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
        {/* Heading */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative inline-block">
            <h2 className="mb-2 text-4xl font-bold text-ubc-mint md:text-6xl">
              Our Projects
            </h2>
            <div className="absolute -left-4 -right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-ubc-slate to-transparent" />
          </div>
          <p className="mt-6 max-w-2xl text-center text-xl text-ubc-mint/80">
            What we are building now and what we plan to build in the future.
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="current"
          className="w-full"
          onValueChange={setActiveTab}
        >
          {/* list wrapper */}
          <div className="mb-12 flex justify-center px-4">
            <TabsList
              className="
                inline-flex items-stretch flex-wrap gap-2      /* stretch children */
                rounded-md bg-ubc-blue/30 border border-ubc-slate/20
                px-1                                           /* horiz‑padding only */
              "
            >
              {/* Current */}
              <TabsTrigger
                value="current"
                className={`
                  flex items-center justify-center h-full text-center /* centre */
                  whitespace-nowrap
                  px-3  py-2  text-sm
                  sm:px-5 sm:py-2.5 sm:text-base
                  md:px-8 md:py-3   md:text-lg
                  leading-tight
                  transition-all duration-300
                  ${
                    activeTab === "current"
                      ? "text-ubc-blue bg-ubc-mint rounded-sm"
                      : "text-ubc-mint/70 hover:text-ubc-mint"
                  }
                `}
              >
                Current&nbsp;Projects
              </TabsTrigger>

              {/* Future */}
              <TabsTrigger
                value="future"
                className={`
                  flex items-center justify-center h-full text-center
                  whitespace-nowrap
                  px-3  py-2  text-sm
                  sm:px-5 sm:py-2.5 sm:text-base
                  md:px-8 md:py-3   md:text-lg
                  leading-tight
                  transition-all duration-300
                  ${
                    activeTab === "future"
                      ? "text-ubc-blue bg-ubc-mint rounded-sm"
                      : "text-ubc-mint/70 hover:text-ubc-mint"
                  }
                `}
              >
                Future&nbsp;Projects
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Panels */}
          <TabsContent value="current">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {currentCapabilities.map(renderCapability)}
            </div>
          </TabsContent>

          <TabsContent value="future">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {futureCapabilities.map(renderCapability)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
