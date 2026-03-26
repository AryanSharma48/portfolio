"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="py-24 px-4 md:px-12 lg:px-24 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter">
          EXPERIENCE <span className="text-accent">/</span>
        </h2>
      </motion.div>

      <div className="space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-8 md:p-12 rounded-2xl border border-accent/15 bg-[#1a1a1a] hover:bg-[#1e1e1e] hover:border-accent/40 transition-all duration-500 overflow-hidden"
          >
            {/* Left Column: Role & Company */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-colors group-hover:text-white">
                  {exp.role}
                </h3>
                <p className="text-xl text-white/80 font-medium group-hover:text-accent/90 transition-colors">
                  {exp.company}
                </p>
              </div>
              
              <div className="mt-8 md:mt-12 space-y-1">
                <p className="text-sm uppercase tracking-widest text-white/40">
                  {exp.location}
                </p>
                <p className="text-sm uppercase tracking-widest text-white/40">
                  {exp.period}
                </p>
              </div>
            </div>

            {/* Right Column: Description Bullets */}
            <div className="relative">
              <ul className="space-y-6">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-4 group/item">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 opacity-40 group-hover/item:opacity-100 transition-opacity" />
                    <p className="text-white/50 group-hover/item:text-white/80 transition-colors leading-relaxed md:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-accent/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
