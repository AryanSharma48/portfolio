"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Card lifting transition starts immediately
  const cardY = useTransform(scrollYProgress, [0, 0.12], ["100vh", "0vh"]);
  const cardBorderRadius = useTransform(scrollYProgress, [0, 0.12], ["0rem", "3rem"]);

  // Hero fade starts slightly after card starts lifting
  const heroOpacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0.05, 0.15], [1, 0.95]); // Subtle "squinting" effect

  return (
    <SmoothScroll>
      <main ref={containerRef} className="relative w-full selection:bg-accent selection:text-black">
        <CustomCursor />
        <ScrollProgress />
        
        {/* Pinned Hero Section */}
        <section className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="h-full w-full"
          >
            <Hero />
          </motion.div>
        </section>

        {/* Lifted Content Card */}
        <motion.div
          style={{ 
            y: cardY,
            borderTopLeftRadius: cardBorderRadius,
            borderTopRightRadius: cardBorderRadius,
          }}
          className="relative z-20 bg-[#1a1a1a] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/5"
        >
          <Experience />
          <About />
          <Projects />
          <Contact />
        </motion.div>
      </main>
    </SmoothScroll>
  );
}
