"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Braces, Workflow } from "lucide-react";

export default function ScrollingMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Top line: Left to Right
  const x1 = useTransform(scrollYProgress, [0, 1], [-500, 50]);
  // Middle line: Right to Left (Faster)
  const x2 = useTransform(scrollYProgress, [0, 1], [-700, 0]);
  // Bottom line: Left to Right (Fastest)
  const x3 = useTransform(scrollYProgress, [0, 1], [-1000, 100]);

  const items1 = ["Full Stack Developer", "Full Stack Developer", "Full Stack Developer","Full Stack Developer","Full Stack Developer","Full Stack Developer",];
  const items2 = ["Backend Architect", "Backend Architect", "Backend Architect"];
  const items3 = ["DevOps Engineer", "DevOps Engineer", "DevOps Engineer"];

  // Helper to render repeated items
  const MarqueeRow = ({ items, x, Icon, textColor, baseTranslate = "0%" }: any) => (
    <motion.div style={{ x }} className={`flex whitespace-nowrap gap-6 md:gap-12 items-center ${baseTranslate}`}>
      {[...Array(60)].map((_, i) => (
        <div key={i} className="flex items-center gap-6 md:gap-12">
          <span className={`text-3xl md:text-5xl lg:text-8xl font-display font-bold transition-all duration-300 tracking-tighter ${textColor}`}>
            {items[i % items.length]}
          </span>
          <Icon className="w-8 h-8 md:w-12 md:h-12 text-accent opacity-50" />
        </div>
      ))}
    </motion.div>
  );

  return (
    <section 
      ref={containerRef} 
      className="py-20 md:py-32 overflow-hidden bg-[#202020] select-none"
    >
      <div className="flex flex-col gap-4 md:gap-14">
        <MarqueeRow items={items1} x={x1} Icon={Code2} textColor="text-neutral-500" baseTranslate="translate-x-[-20%]" />
        <MarqueeRow items={items2} x={x2} Icon={Braces} textColor="text-neutral-300" baseTranslate="translate-x-[-40%]" />
        <MarqueeRow items={items3} x={x3} Icon={Workflow} textColor="text-white" baseTranslate="translate-x-[-60%]" />
      </div>
    </section>
  );
}
