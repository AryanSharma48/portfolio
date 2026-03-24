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

  return (
    <section 
      ref={containerRef}
      className="min-h-screen w-full flex flex-col justify-center px-4 md:px-12 lg:px-24 py-24 border-t border-accent/10"
      id="about"
    >
      <div className="max-w-[90vw] lg:max-w-[70vw]">
        <h2 className="font-sans text-xs uppercase tracking-widest text-accent mb-8 md:mb-12">
          (01) The Ethos
        </h2>
        <p className="font-display text-3xl md:text-5xl lg:text-7xl leading-[1.1] flex flex-wrap gap-x-2 md:gap-x-4 lg:gap-x-5">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
          })}
        </p>
      </div>
    </section>
  );
}

const Word = ({ word, progress, range }: { word: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span style={{ opacity }} className="relative inline-block mt-2">
      {word}
    </motion.span>
  );
};
