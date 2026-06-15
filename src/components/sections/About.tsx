"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"]
  });

  const words = portfolioData.about.bio.split(" ");

  // Flatten all chars with their global index for per-letter range calculation
  const totalChars = words.reduce((sum, w) => sum + w.length, 0);
  let charIndex = 0;

  return (
    <section 
      ref={containerRef}
      className="min-h-[40vh] md:min-h-screen w-full flex flex-col justify-center px-4 md:px-12 lg:px-24 py-12 md:py-24"
      id="about"
    >
      <div className="max-w-[90vw] lg:max-w-[70vw]">
        <h2 className="font-sans text-xs uppercase tracking-widest text-accent mb-8 md:mb-12">
          (01) The Ethos
        </h2>
        <p className="font-display text-2xl md:text-4xl lg:text-5xl leading-[1.1] flex flex-wrap gap-x-2 md:gap-x-3 lg:gap-x-4">
          {words.map((word, wi) => {
            const letters = word.split("").map((char, li) => {
              const idx = charIndex++;
              const start = idx / totalChars;
              const end = (idx + 1) / totalChars;
              return (
                <Letter key={li} char={char} progress={scrollYProgress} range={[start, end]} />
              );
            });
            return (
              <span key={wi} className="relative inline-block mt-2">
                {letters}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}

const Letter = ({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.08, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
};
