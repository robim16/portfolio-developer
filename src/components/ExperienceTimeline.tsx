
"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Code, Cpu, Database, Sparkles } from 'lucide-react';

const experiences = [
  {
    company: 'Cosmmotech SAS',
    role: 'Desarrollador Fullstack',
    period: 'agosto de 2024 - octubre de 2024',
    location: 'Montería, Colombia',
    description: 'Apoyo al lanzamiento del proyecto "Revista Margen".' +
     'Tareas realizadas: - Diseño responsivo para mobile y desktop - Opciones para comentar y compartir en redes sociales. Reducción del tiempo de carga de la página en un 30%.' +
     'Corrección de errores y mejoras en la usabilidad de la página.',
    skills: ['Laravel', 'Vue', 'PostgreSQL', 'CSS', 'HTML', 'JavaScript']
  },
  {
    company: 'DyD Soluciones',
    role: 'Desarrollador Fullstack',
    period: 'diciembre de 2021 - diciembre de 2023',
    location: 'Montería, Colombia',
    description: 'Desarrollo de funcionalidades y soporte al software administrativo y contable Finante.' +
    'Tareas realizadas: - Mejoras en el módulo de terceros.' +
    ' - Creación de nuevos informes y correcciones en informes existentes.' +
    ' - Validaciones más estrictas en cargue de resolucioes de facturación de la DIAN.' +
    ' - Diágnostico y corrección de errores asociados al uso de sintaxis y librerías deprecadas.' +
    ' - Diágnostico de errores asociados a falta de control de concurrencia en la base de datos.' +
    ' - Mejoras en el módulo de nómina.' +
    ' - Reducción en el número de tickets(70%) abiertos por usuarios debidos a errores en la aplicación.' +
    ' - Desarrollo de cargue masivo vía excel para el módulo de nómina.',
    skills: ['Laravel', 'JavaScript', 'PostgreSQL', 'Bootstrap', 'HTML', 'CSS']
  }
];

const skillCategories = [
  { 
    name: 'Lenguajes y Frameworks', 
    icon: <Code className="w-5 h-5" />, 
    items: ['Laravel', 'Vue', 'Spring', 'Angular', 'Next', 'Django', '.Net', 'Nestjs', 'React', 'Node.js'] 
  },
  { 
    name: 'Bases de Datos', 
    icon: <Database className="w-5 h-5" />, 
    items: ['MySQL', 'SQL Server', 'MongoDB', 'PostgreSQL'] 
  },
  { 
    name: 'Infraestructura y Herramientas', 
    icon: <Cpu className="w-5 h-5" />, 
    items: ['Docker', 'Kubernetes', 'Cursor', 'Claude', 'Gemini', 'ChatGPT'] 
  }
];

export function ExperienceTimeline() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <h3 className="text-2xl font-headline font-bold flex items-center gap-2 mb-6">
          <Briefcase className="w-6 h-6 text-accent" />
          Trayectoria Profesional
        </h3>
        <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/30">
          {experiences.map((exp, idx) => (
            <div key={idx} className="pl-10 relative group">
              <div className="absolute left-[0.18rem] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
              <Card className="border-none shadow-sm hover:shadow-md transition-all bg-white/60 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{exp.role}</h4>
                      <p className="text-accent font-semibold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.period}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(s => <Badge key={s} variant="outline" className="text-[10px] font-bold uppercase tracking-wider border-primary/20">{s}</Badge>)}
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
                  {cat.items.map(item => (
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
