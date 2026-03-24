"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import Image from "next/image";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-16 md:py-32 px-4 md:px-12 lg:px-24 border-t border-accent/10"
      id="projects"
    >
      <h2 className="font-sans text-xs uppercase tracking-widest text-accent mb-12 md:mb-24">
        (02) Selected Works
      </h2>
      <div className="flex flex-col gap-16 md:gap-32 lg:gap-48">
        {portfolioData.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

type ProjectType = { id: string; title: string; tagline: string; description: string; tech: string[]; link: string; github: string; image: string; };

const ProjectCard = ({ project, index }: { project: ProjectType, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yPos = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={cardRef}
      className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}
    >
      <motion.div 
        className="w-full md:w-3/5 group relative overflow-hidden bg-white/5 border border-white/10"
        data-cursor-hover
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div style={{ y: yPos }} className="w-full h-[50vh] md:h-[70vh] relative scale-[1.3]">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out md:group-hover:scale-105 filter md:grayscale group-hover:grayscale-0"
          />
        </motion.div>
        
        {/* Overlay Block for Brutalist feel */}
        <div className="absolute inset-0 bg-transparent md:bg-black/40 md:group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </motion.div>

      <motion.div 
        className="w-full md:w-2/5 flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <span className="font-sans text-accent text-sm mb-4">{project.id}</span>
        <h3 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight mb-2">
          {project.title}
        </h3>
        <span className="font-sans text-white/50 text-sm tracking-widest uppercase mb-8">
          {project.tagline}
        </span>
        <p className="font-sans text-white/80 leading-relaxed mb-8 max-w-md">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-12">
          {project.tech.map((t: string) => (
            <span key={t} className="px-3 py-1 border border-white/20 text-xs uppercase tracking-wider text-white/60">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a href={project.link} target="_blank" rel="noreferrer" className="group flex items-center gap-2 font-display uppercase tracking-widest text-sm hover:text-accent transition-colors" data-cursor-hover>
            View Live
            <span className="w-8 h-[1px] bg-white group-hover:bg-accent group-hover:w-16 transition-all duration-300" />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="font-sans text-xs text-white/40 hover:text-white uppercase tracking-widest transition-colors" data-cursor-hover>
            Github
          </a>
        </div>
      </motion.div>
    </div>
  );
};
