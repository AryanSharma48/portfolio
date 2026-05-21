"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

function RoleDescription({ 
  description, 
  rIndex, 
  isExpanded, 
  onToggle 
}: { 
  description: string[], 
  rIndex: number,
  isExpanded: boolean,
  onToggle: () => void
}) {
  return (
    <div className="flex flex-col">
      <ul className="space-y-4">
        {/* First item - Always visible */}
        {description.length > 0 && (
          <li className="flex gap-4 group/item">
            <span className={`mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity ${rIndex === 0 ? 'bg-accent opacity-60 group-hover/item:opacity-100' : 'bg-white/30 opacity-40 group-hover/item:opacity-70'}`} />
            <p className="text-white/50 group-hover/item:text-white/80 transition-colors leading-relaxed md:text-lg">
              {description[0]}
            </p>
          </li>
        )}

        {/* Desktop remaining items - Always visible on md+, hidden on mobile */}
        {description.slice(1).map((item, i) => (
          <li key={`desktop-${i}`} className="hidden md:flex gap-4 group/item">
            <span className={`mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity ${rIndex === 0 ? 'bg-accent opacity-60 group-hover/item:opacity-100' : 'bg-white/30 opacity-40 group-hover/item:opacity-70'}`} />
            <p className="text-white/50 group-hover/item:text-white/80 transition-colors leading-relaxed md:text-lg">
              {item}
            </p>
          </li>
        ))}
      </ul>
      
      {/* Mobile remaining items - Animated accordion, hidden on md+ */}
      {description.length > 1 && (
        <div className="md:hidden">
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.ul 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4 overflow-hidden mt-4"
              >
                {description.slice(1).map((item, i) => (
                  <li key={`mobile-${i}`} className="flex gap-4 group/item">
                    <span className={`mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-opacity ${rIndex === 0 ? 'bg-accent opacity-60 group-hover/item:opacity-100' : 'bg-white/30 opacity-40 group-hover/item:opacity-70'}`} />
                    <p className="text-white/50 group-hover/item:text-white/80 transition-colors leading-relaxed md:text-lg">
                      {item}
                    </p>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <button 
            onClick={onToggle}
            className="self-start text-accent/80 hover:text-accent transition-colors text-xs font-semibold tracking-wider uppercase mt-5 flex items-center gap-2 py-1"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
            <svg 
              width="10" height="10" viewBox="0 0 12 12" fill="none" 
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            >
              <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  const [expandedRoleId, setExpandedRoleId] = useState<string | null>(null);

  return (
    <section className="py-12 md:py-32 px-4 md:px-12 lg:px-24 w-full">
      <div className="mb-16">
        <motion.h2 
          initial="hidden"
          whileInView="visible"
          className="font-display text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter flex flex-wrap"
        >
          {"EXPERIENCE".split("").map((char, i) => (
            <span key={i} className="overflow-hidden inline-block">
              <motion.span
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: 0 }
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.02
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            </span>
          ))}
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-accent animate-pulse ml-4"
          >
            /
          </motion.span>
        </motion.h2>
      </div>

      <div className="space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="group relative p-6 md:p-12 rounded-2xl border border-accent/15 bg-[#1a1a1a] hover:bg-[#1e1e1e] hover:border-accent/40 transition-all duration-500 overflow-hidden"
          >
            {/* Company Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 md:mb-10">
              <h3 className="text-2xl md:text-3xl font-bold transition-colors group-hover:text-white">
                {exp.company}
              </h3>
              <p className="text-sm uppercase tracking-widest text-white/40 mt-2 md:mt-0">
                {exp.location}
              </p>
            </div>

            {/* Roles Timeline */}
            <div className="relative">
              {exp.roles.map((role: { role: string; period: string; description: string[] }, rIndex: number) => (
                <div key={rIndex} className="relative">
                  {/* Promotion Arrow between roles */}
                  {rIndex > 0 && (
                    <div className="flex items-center gap-3 my-6 md:my-8">
                      <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                      <span className="text-accent text-xs uppercase tracking-widest flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1L6 11M6 1L2 5M6 1L10 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Promoted
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-l from-accent/30 to-transparent" />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 md:gap-8">
                    {/* Role Info */}
                    <div>
                      <p className={`text-lg md:text-xl font-semibold mb-1 ${rIndex === 0 ? 'text-accent/90' : 'text-white/60'}`}>
                        {role.role}
                      </p>
                      <p className="text-sm uppercase tracking-widest text-white/40">
                        {role.period}
                      </p>
                    </div>

                    {/* Description Bullets */}
                    <RoleDescription 
                      description={role.description} 
                      rIndex={rIndex} 
                      isExpanded={expandedRoleId === `${index}-${rIndex}`}
                      onToggle={() => {
                        const id = `${index}-${rIndex}`;
                        setExpandedRoleId(expandedRoleId === id ? null : id);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -inset-px bg-gradient-to-br from-accent/3 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
