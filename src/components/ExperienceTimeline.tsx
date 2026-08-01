
"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Code, Cpu, Database, Sparkles, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: 'Cosmmotech SAS',
    role: 'Desarrollador Fullstack',
    period: 'agosto de 2024 - octubre de 2024',
    location: 'Montería, Colombia',
    summary: 'Apoyo al lanzamiento del proyecto "Revista Margen".',
    tasks: [
      'Diseño responsivo para mobile y desktop',
      'Opciones para comentar y compartir en redes sociales',
      'Reducción del tiempo de carga de la página en un 30%',
      'Corrección de errores y mejoras en la usabilidad de la página',
    ],
    skills: ['Laravel', 'Vue', 'PostgreSQL', 'CSS', 'HTML', 'JavaScript'],
  },
  {
    company: 'DyD Soluciones',
    role: 'Desarrollador Fullstack',
    period: 'diciembre de 2021 - diciembre de 2023',
    location: 'Montería, Colombia',
    summary: 'Desarrollo de funcionalidades y soporte al software administrativo y contable Finante.',
    tasks: [
      'Mejoras en el módulo de terceros',
      'Creación de nuevos informes y correcciones en informes existentes',
      'Validaciones más estrictas en cargue de resoluciones de facturación de la DIAN',
      'Diagnóstico y corrección de errores asociados al uso de sintaxis y librerías deprecadas',
      'Diagnóstico de errores asociados a falta de control de concurrencia en la base de datos',
      'Mejoras en el módulo de nómina',
      'Reducción en el número de tickets (70%) abiertos por usuarios debidos a errores en la aplicación',
      'Desarrollo de cargue masivo vía Excel para el módulo de nómina',
    ],
    skills: ['Laravel', 'JavaScript', 'PostgreSQL', 'Bootstrap', 'HTML', 'CSS'],
  },
];

const skillCategories = [
  {
    name: 'Lenguajes y Frameworks',
    icon: <Code className="w-5 h-5" />,
    items: ['Laravel', 'Vue', 'Spring', 'Angular', 'Next', 'Django', '.Net', 'Nestjs', 'React', 'Node.js'],
  },
  {
    name: 'Bases de Datos',
    icon: <Database className="w-5 h-5" />,
    items: ['MySQL', 'SQL Server', 'MongoDB', 'PostgreSQL'],
  },
  {
    name: 'Infraestructura y Herramientas',
    icon: <Cpu className="w-5 h-5" />,
    items: ['Docker', 'Kubernetes', 'Cursor', 'Claude', 'Gemini', 'ChatGPT'],
  },
];

export function ExperienceTimeline() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h3 className="text-2xl font-headline font-bold flex items-center gap-2 mb-6">
          <Briefcase className="w-6 h-6 text-accent" />
          Trayectoria Profesional
        </h3>
        <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-primary/40 before:via-primary/20 before:to-transparent">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pl-10 relative group">
              <div className="absolute left-[0.18rem] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-sm group-hover:scale-125 transition-transform" />
              <Card className="border border-primary/5 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6 space-y-5">
                  <div className="flex flex-col gap-3">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full border border-primary/5">
                        <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full border border-primary/5">
                        <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">{exp.summary}</p>

                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/70">
                      Tareas realizadas
                    </p>
                    <ul className="space-y-2">
                      {exp.tasks.map((task) => (
                        <li
                          key={task}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed rounded-lg bg-secondary/30 px-3 py-2 border border-primary/5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.skills.map((s) => (
                      <Badge
                        key={s}
                        variant="outline"
                        className="text-[10px] font-bold uppercase tracking-wider border-primary/20 bg-white/50"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-headline font-bold flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
          Arsenal Técnico
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {skillCategories.map((cat, idx) => (
            <Card key={idx} className="border-none shadow-sm bg-white/60 backdrop-blur-sm group hover:bg-white/80 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-lg">{cat.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <Badge
                      key={item}
                      className="px-4 py-1.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all cursor-default border-none shadow-sm"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
