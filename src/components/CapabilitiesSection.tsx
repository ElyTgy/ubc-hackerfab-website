import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  TabsContent,
  TabsList,
  TabsTrigger,
  Tabs,
} from "@/components/ui/tabs";

interface CapabilityItem {
  title: string;
  description: string;
  icon: string;
}

const CapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("current");
  const containerRef = useRef<HTMLDivElement>(null);

  /* ───────────────────────────────────────────
     1.  Capabilities data
  ─────────────────────────────────────────── */
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
        "Building on top of the TI DLP projector module to achieve ~10 micron feature sizes.",
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
      title: "Soft Litho Microfluidics",
      description:
        "Making chips that can precisely control the flow of fluids in sub‑20 µm channel widths.",
      icon: "integration",
    },
    {
      title: "Flow cytometry",
      description:
        "Using a laser to detect and sort cells based on size and fluorescence, enabled by our in‑house soft‑litho capabilities.",
      icon: "cyto",
    },
  ];

  /* ───────────────────────────────────────────
     2.  Parallax on scroll
  ─────────────────────────────────────────── */
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      const offset = window.scrollY - (el.getBoundingClientRect().top + window.scrollY);
      if (offset > -window.innerHeight && offset < el.offsetHeight + window.innerHeight) {
        el.querySelectorAll(".parallax-element").forEach((p: any, i) => {
          const speed = i % 2 === 0 ? 0.05 : -0.03;
          p.style.transform = `translateY(${offset * speed}px)`;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ───────────────────────────────────────────
     3.  Render helpers
  ─────────────────────────────────────────── */
  const renderCapability = (c: CapabilityItem, i: number) => (
    <motion.div
      key={c.title}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className="capability-card group"
    >
      <div className="relative overflow-hidden rounded-lg">
        <div className="bg-ubc-blue/40 border border-ubc-slate/30 p-8 h-full transform group-hover:scale-[0.98] transition-transform">
          <div className="capability-icon mb-6">{getCapabilityIcon(c.icon)}</div>
          <h3 className="mb-3 text-xl font-bold text-ubc-mint">{c.title}</h3>
          <p className="text-ubc-mint/80">{c.description}</p>
        </div>

        {/* Decorative traces */}
        <div className="absolute top-0 right-0 h-12 w-12">
          <div className="absolute top-0 right-0 h-full w-0.5 bg-ubc-slate/30" />
          <div className="absolute top-0 right-0 h-0.5 w-full bg-ubc-slate/30" />
        </div>
        <div className="absolute bottom-0 left-0 h-8 w-8">
          <div className="absolute bottom-0 left-0 h-full w-0.5 bg-ubc-slate/30" />
          <div className="absolute bottom-0 left-0 h-0.5 w-full bg-ubc-slate/30" />
        </div>
      </div>
    </motion.div>
  );

  const getCapabilityIcon = (t: string) => {
    if (t === "circuit")
      return (
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-2 border-ubc-mint/60" />
          <div className="absolute inset-[4px] rounded-full border border-ubc-slate/60" />
          <div className="absolute top-1/2 left-0 h-[1px] w-3 bg-ubc-mint" />
          <div className="absolute top-1/2 right-0 h-[1px] w-3 bg-ubc-mint" />
          <div className="absolute right-[10px] top-[10px] h-1 w-1 rounded-full bg-ubc-slate" />
          <div className="absolute bottom-[10px] left-[10px] h-1 w-1 rounded-full bg-ubc-slate" />
        </div>
      );
    if (t === "cyto") return <img src="/images/cyto.svg" alt="" className="h-12 w-12" />;
    if (t === "assembly")
      return (
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-md border border-ubc-mint/60" />
          <div className="absolute right-1/4 top-1/4 h-6 w-6 border border-ubc-slate/60" />
          <div className="absolute bottom-1/4 left-1/4 h-4 w-4 bg-ubc-mint/20" />
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ubc-mint" />
        </div>
      );
    if (t === "equipment")
      return (
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-ubc-slate/40 h-4 w-4" />
          </div>
          {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos) => (
            <div
              key={pos}
              className={`absolute ${pos} h-4 w-4 border-ubc-mint/60 ${
                pos.includes("top") ? "border-t-2" : "border-b-2"
              } ${pos.includes("left") ? "border-l-2" : "border-r-2"}`}
            />
          ))}
        </div>
      );
    if (t === "integration")
      return (
        <div className="relative h-12 w-12">
          <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1">
            <div className="border border-ubc-mint/60" />
            <div className="border border-ubc-slate/60" />
            <div className="border border-ubc-slate/60" />
            <div className="border border-ubc-mint/60" />
          </div>
        </div>
      );
    return <div className="h-12 w-12 rounded-full bg-ubc-slate/20" />;
  };

  /* ───────────────────────────────────────────
     4. Render
  ─────────────────────────────────────────── */
  return (
    <section
      ref={containerRef}
      id="capabilities"
      className="relative overflow-hidden bg-ubc-blue/80 pt-20 pb-4"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="parallax-element absolute -left-32 -top-32 h-96 w-96 rounded-full bg-ubc-slate/5 blur-3xl" />
        <div className="parallax-element absolute -right-48 top-1/2 h-96 w-96 rounded-full bg-ubc-mint/5 blur-3xl" />
        <div className="parallax-element absolute left-1/4 -bottom-48 h-96 w-96 rounded-full bg-ubc-slate/5 blur-3xl" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col items-center">
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
        <Tabs defaultValue="current" onValueChange={setActiveTab}>
          {/* Wrapper keeps padding; list now full‑width on xs */}
          <div className="mb-12 flex justify-center px-4">
            <TabsList className="w-full sm:w-auto inline-flex flex-wrap justify-center gap-2 rounded-md border border-ubc-slate/20 bg-ubc-blue/30 p-1">
              {["current", "future"].map((val) => (
                <TabsTrigger
                  key={val}
                  value={val}
                  className={`
                    flex-1 sm:flex-none whitespace-nowrap
                    px-4 py-2 text-base                   /* <640 px */
                    sm:px-5 sm:py-2.5 sm:text-lg          /* ≥640 px */
                    md:px-8 md:py-3 md:text-xl            /* ≥768 px */
                    transition-all duration-300
                    ${
                      activeTab === val
                        ? "rounded-sm bg-ubc-mint text-ubc-blue"
                        : "text-ubc-mint/70 hover:text-ubc-mint"
                    }
                  `}
                >
                  {val === "current" ? "Current Projects" : "Future Projects"}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

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
