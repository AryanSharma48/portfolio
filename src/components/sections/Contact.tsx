"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24 py-16 md:py-32 border-t border-accent/10 overflow-hidden" id="contact">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-7xl mx-auto z-10">
        
        <div className="mb-16 md:mb-0">
          <h2 className="font-sans text-xs uppercase tracking-widest text-accent mb-8 md:mb-12">
            (03) The Index
          </h2>
          <div className="flex flex-col gap-2 relative z-20">
            {portfolioData.skills.map((skill, i) => (
              <motion.span 
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="font-display text-2xl md:text-3xl lg:text-4xl uppercase text-white/30 hover:text-white transition-colors cursor-default"
                data-cursor-hover
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end relative z-20">
          <motion.a 
            href={`mailto:${portfolioData.about.email}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[12vw] md:text-[8vw] uppercase leading-[0.85] hover:text-accent transition-colors mb-12 text-left md:text-right mix-blend-difference"
            data-cursor-hover
          >
            LET&apos;S
            <br />
            TALK.
          </motion.a>
          
          <div className="flex flex-wrap gap-6 md:gap-8">
            {portfolioData.about.socials.map((s, i) => (
              <motion.a 
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="font-sans text-xs uppercase tracking-widest text-white/60 hover:text-accent transition-colors"
                data-cursor-hover
              >
                {s.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Massive subtle background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display font-bold opacity-[0.03] pointer-events-none whitespace-nowrap">
        END.
      </div>
    </section>
  );
}
