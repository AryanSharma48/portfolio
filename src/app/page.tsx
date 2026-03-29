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
import ScrollingMarquee from "@/components/ui/ScrollingMarquee";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Use scrollY for more absolute control
  const { scrollY } = useScroll();

  // Card lifting transition: starts at 200px offset and catches up quickly
  const cardY = useTransform(scrollY, [0, 100], [10, 0]);

  // Hero fade and scale start immediately
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.95]);

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
            borderTopLeftRadius: "3rem",
            borderTopRightRadius: "3rem",
          }}
          className="relative z-20 bg-[#202020] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] border-t border-white/5"
        >
          <Experience />
          <ScrollingMarquee />
          <About />
          <Projects />
          <Contact />
        </motion.div>
      </main>
    </SmoothScroll>
  );
}
