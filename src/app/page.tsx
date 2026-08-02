
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Cpu, ExternalLink, Github, Layers, Zap, Linkedin, Twitter } from 'lucide-react';
import { DynamicBackground } from '@/components/DynamicBackground';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { AIProjectAssistant } from '@/components/AIProjectAssistant';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { ContactSection } from '@/components/ContactSection';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-mesh selection:bg-primary/30">
      <DynamicBackground />
      <Navbar />
      
      {/* Sección Hero */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-primary font-bold text-sm tracking-wide uppercase">
              <Zap className="w-4 h-4 fill-primary" /> Disponible para nuevos proyectos
            </div>
            
            <h1 className="text-5xl md:text-8xl font-headline font-black tracking-tight leading-[1.1] max-w-4xl">
              Elevando Ideas a través de la <span className="text-accent underline decoration-primary decoration-8 underline-offset-4">Artesanía Digital</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Hola, soy <span className="font-bold text-foreground">Carlos Arteaga Jimenez</span>. Arquitecto de aplicaciones fullstack de alto rendimiento con stacks tecnológicos modernos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg font-bold px-8 h-14 rounded-xl shadow-xl hover:shadow-primary/20 transition-all">
                Contrátame <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary/20 bg-background/50 hover:bg-secondary text-lg font-bold px-8 h-14 rounded-xl transition-all" asChild>
                <a href="#projects">Explorar Proyectos</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Proyectos */}
      <section id="projects" className="py-24 px-4 bg-secondary/20 border-y border-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm">
                <Layers className="w-4 h-4" /> Portafolio
              </div>
              <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tight">
                Proyectos Destacados
              </h2>
            </div>
            <Button variant="link" className="text-primary font-bold text-lg group p-0" asChild>
              <a href="https://github.com/robim16" target="_blank" rel="noopener noreferrer">
                Ver todos en GitHub <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>
          
          <ProjectShowcase />
          
          <div className="mt-24 max-w-3xl mx-auto">
            <AIProjectAssistant />
          </div>
        </div>
      </section>

      {/* Experiencia y Habilidades */}
      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4 mb-16">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
              <Code className="w-4 h-4" /> Experiencia
            </div>
            <h2 className="text-4xl md:text-5xl font-headline font-black tracking-tight">
              Habilidades y Trayectoria
            </h2>
          </div>
          
          <ExperienceTimeline />
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contact" className="py-24 px-4 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <ContactSection />
        </div>
      </section>

      {/* Pie de Página */}
      <footer className="py-12 px-4 border-t border-primary/10">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-headline font-black tracking-tighter text-primary">
              DevSphere <span className="text-accent">por Carlos</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Carlos Arteaga Jimenez. Creado con Pasión.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/robim16" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/carteagajimenez/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
