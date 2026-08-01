import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Github,
  Layers,
  Box,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { TechIcon } from '@/components/TechIcon';
import type { Project } from '@/lib/projects';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero image */}
      <div className="relative h-[30vh] md:h-[40vh] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          className="object-cover"
          data-ai-hint={project.hint}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-background" />
      </div>

      {/* Header — solid background for readability */}
      <div className="bg-background border-b border-primary/10">
        <div className="container mx-auto max-w-6xl px-4 py-10 md:py-14 space-y-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a proyectos
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="space-y-4 flex-1">
              <h1 className="text-4xl md:text-5xl font-headline font-black tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {project.techs.map((tech) => (
                  <TechIcon key={tech} tech={tech} />
                ))}
              </div>
            </div>

            {project.repo && project.repo !== '#' && (
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/20 font-bold rounded-xl h-12 shrink-0"
                asChild
              >
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" /> Ver Código
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl px-4 py-16 space-y-20">
        {/* Overview */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm">
            <Cpu className="w-4 h-4" /> Resumen
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground max-w-4xl">
            {project.overview}
          </p>
        </section>

        <Separator className="bg-primary/10" />

        {/* Stack */}
        <section>
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-8">
            <Layers className="w-4 h-4" /> Stack Tecnológico
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.stack.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl bg-white/80 backdrop-blur-md p-6 shadow-lg border border-primary/5"
              >
                <h3 className="font-headline font-bold text-sm uppercase tracking-wider text-accent mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section>
          <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-8">
            <Box className="w-4 h-4" /> Arquitectura
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur-md p-8 md:p-10 shadow-lg border border-primary/5 space-y-8">
            <div>
              <Badge
                variant="secondary"
                className="mb-4 text-xs uppercase tracking-widest font-bold px-3 py-1"
              >
                {project.architecture.pattern}
              </Badge>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {project.architecture.description}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.architecture.components.map((comp) => (
                <div
                  key={comp.name}
                  className="rounded-xl bg-secondary/50 p-5 border border-primary/5"
                >
                  <h4 className="font-headline font-bold mb-1">{comp.name}</h4>
                  <p className="text-sm text-muted-foreground">{comp.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-sm mb-8">
            <CheckCircle2 className="w-4 h-4" /> Funcionalidades
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl bg-white/80 backdrop-blur-md p-5 shadow-md border border-primary/5"
              >
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
