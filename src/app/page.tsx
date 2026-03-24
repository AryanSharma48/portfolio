import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative w-full bg-background selection:bg-accent selection:text-black">
      <CustomCursor />
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
