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
              <FlipText key={skill} delay={i * 0.1}>
                {skill}
              </FlipText>
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
          
          <div className="flex flex-col items-start md:items-end gap-1 md:gap-2">
            {portfolioData.about.socials.map((s, i) => (
              <FlipLink key={s.label} href={s.url} delay={i * 0.1}>
                {s.label}
              </FlipLink>
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

const FlipLink = ({ children, href, delay }: { children: string; href: string; delay: number }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative block overflow-hidden whitespace-nowrap font-display text-[8vw] sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-white/50 hover:text-accent transition-colors"
      data-cursor-hover
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{ transitionDelay: `${i * 25}ms`, lineHeight: 1 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      <div className="absolute top-0 left-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 25}ms`, lineHeight: 1 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

const FlipText = ({ children, delay }: { children: string; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative block overflow-hidden whitespace-nowrap font-display text-2xl md:text-3xl lg:text-4xl uppercase text-white/30 hover:text-white transition-colors cursor-default p-[1px]"
      data-cursor-hover
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{ transitionDelay: `${i * 25}ms`, lineHeight: 1 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      <div className="absolute top-0 left-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 25}ms`, lineHeight: 1 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
