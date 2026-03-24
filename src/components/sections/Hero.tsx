"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col justify-center pl-4 md:pl-12 lg:pl-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        <h1 className="font-display text-[15vw] leading-[0.85] tracking-tighter uppercase font-bold mix-blend-difference z-20">
          ARYAN
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "1px #fafafa", color: "transparent" }}>
            SHARMA
          </span>
        </h1>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-12 right-12 md:right-24 flex items-end gap-4 z-10"
      >
        <div className="w-[1px] h-24 bg-accent origin-bottom opacity-50" />
        <p className="font-sans text-xs md:text-sm uppercase tracking-widest max-w-[200px]">
          Creative Developer building high-performance systems.
        </p>
      </motion.div>

      {/* Abstract geometry element to break the silence */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
        className="absolute top-[15%] right-[5%] w-[40vh] h-[40vh] border-[1px] border-accent/20 pointer-events-none hidden md:block"
      />
    </section>
  );
}
