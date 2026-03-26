"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, Plus } from "lucide-react";

export default function ScrollingMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Top line: Left to Right
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 450]);
  // Middle line: Right to Left (Faster)
  const x2 = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  // Bottom line: Left to Right (Fastest)
  const x3 = useTransform(scrollYProgress, [0, 1], [-1500, -100]);

  const items1 = ["Full Stack Developer", "Web Developer", "Creative Engineer"];
  const items2 = ["UI/UX Designer", "DevOps Engineer", "Mobile Developer"];
  const items3 = ["Cloud Architect", "System Engineer", "Software Developer", "Frontend Expert", "Backend Architect", "Cybersecurity", "AI Engineer"];

  // Helper to render repeated items
  const MarqueeRow = ({ items, x, Icon, opacity = "10", baseTranslate = "0%" }: any) => (
    <motion.div style={{ x }} className={`flex whitespace-nowrap gap-12 items-center ${baseTranslate}`}>
      {[...Array(60)].map((_, i) => (
        <div key={i} className="flex items-center gap-12">
          <span className={`text-6xl md:text-8xl lg:text-9xl font-display font-bold transition-all duration-300 tracking-tighter text-white/${opacity}`}>
            {items[i % items.length]}
          </span>
          <Icon className="w-12 h-12 md:w-20 md:h-20 text-accent" style={{ opacity: parseInt(opacity)/100 + 0.1 }} />
        </div>
      ))}
    </motion.div>
  );

  return (
    <section 
      ref={containerRef} 
      className="py-32 overflow-hidden bg-[#202020] select-none"
    >
      <div className="flex flex-col gap-8 md:gap-14">
        <MarqueeRow items={items1} x={x1} Icon={ArrowRight} opacity="10" baseTranslate="translate-x-[-20%]" />
        <MarqueeRow items={items2} x={x2} Icon={Star} opacity="30" baseTranslate="translate-x-[-40%]" />
        <MarqueeRow items={items3} x={x3} Icon={Plus} opacity="80" baseTranslate="translate-x-[-60%]" />
      </div>
    </section>
  );
}
