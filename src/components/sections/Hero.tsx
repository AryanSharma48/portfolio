"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-accent)", color: "transparent"}}>
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

      {/* Profile Image Element */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.5, duration: 1.5, type: "spring" }}
        className="absolute top-[15%] right-[5%] w-[35vh] h-[45vh] lg:w-[40vh] lg:h-[50vh] border-[1px] border-accent/20 hidden md:block overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 pointer-events-auto z-10"
        data-cursor-hover
      >
        <Image 
          src="/profile.jpg" 
          alt="Aryan Sharma" 
          fill 
          className="object-cover scale-105 hover:scale-100 transition-transform duration-700"
          priority
        />
      </motion.div>
    </section>
  );
}
