
"use client";

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { TechIcon } from './TechIcon';
const projects = [
  {
    title: 'TechNova E-commerce',
    description: 'Plataforma de comercio electrónico de alto rendimiento desarrollada con NestJS y NextJS, optimizada con asistencia de IA mediante Cursor para una experiencia de usuario fluida.',
    techs: ['Nestjs', 'Next', 'Cursor'],
    image: '/projects/project-technova.png',
    hint: 'ecommerce shop',
    link: '#',
    repo: '#'
  },
  {
    title: 'Ticker Manager',
    description: 'Sistema integral de gestión de tickets con manejo de roles y autenticación robusta. Arquitectura desacoplada con backend en NestJS y frontend en Angular.',
    techs: ['Nestjs', 'Angular', 'PostgreSQL'],
    image: '/projects/project-ticker.png',
    hint: 'dashboard software',
    link: '#',
    repo: '#'
  },
  {
    title: 'Spring Cloud Microservices',
    description: 'Arquitectura de microservicios escalable utilizando Spring Boot, Docker, Kubernetes y monitoreo avanzado con Grafana para alta disponibilidad.',
    techs: ['Spring', 'Docker', 'Kubernetes'],
    image: '/projects/project-spring-cloud.png',
    hint: 'cloud server',
    link: '#',
    repo: '#'
  },
  {
    title: 'Airbnb Clone (Fullstack)',
    description: 'Clon completo de Airbnb con funcionalidades de reserva, gestión de propiedades y mapas interactivos, utilizando arquitecturas modernas para escalabilidad.',
    techs: ['Next', 'Nestjs', 'MongoDB'],
    image: '/projects/project-airbnb.png',
    hint: 'real estate app',
    link: '#',
    repo: '#'
  },
  {
    title: 'Crediya Microservices',
    description: 'Ecosistema de microservicios para la gestión de solicitudes financieras y autenticación de usuarios, implementado con estándares bancarios de seguridad.',
    techs: ['Spring', 'MySQL', 'Docker'],
    image: '/projects/project-crediya.png',
    hint: 'financial app',
    link: '#',
    repo: '#'
  },
  {
    title: 'Laravel Inertia SSR',
    description: 'Aplicación web moderna utilizando Laravel con Inertia.js para Renderizado en el Lado del Servidor (SSR), combinando potencia backend y agilidad frontend.',
    techs: ['Laravel', 'Vue', 'MySQL'],
    image: '/projects/project-laravel-ssr.png',
    hint: 'web development',
    link: '#',
    repo: '#'
  },
  {
    title: 'Patient Management System',
    description: 'Sistema de gestión de pacientes desarrollado con Spring Boot, enfocado en la eficiencia operativa y seguridad de datos médicos.',
    techs: ['Spring', 'SQL Server', 'Docker'],
    image: '/projects/project-patient.png',
    hint: 'medical system',
    link: '#',
    repo: '#'
  },
  {
    title: 'Social Book Django',
    description: 'Red social completa desarrollada con Django, incluyendo flujos de amistad, publicaciones en tiempo real y perfiles personalizables.',
    techs: ['Django', 'PostgreSQL', 'Tailwind'],
    image: '/projects/project-django.png',
    hint: 'social network',
    link: '#',
    repo: '#'
  }
];

export function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <Card key={idx} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-md">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              data-ai-hint={project.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="flex gap-2">
                <Button variant="secondary" size="sm" asChild>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <Github className="w-4 h-4" /> Código
                  </a>
                </Button>
                <Button variant="default" size="sm" className="bg-primary text-primary-foreground" asChild>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-headline font-bold mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techs.map(tech => (
                <TechIcon key={tech} tech={tech} showLabel={false} />
              ))}
            </div>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0 border-t border-transparent group-hover:border-primary/10 transition-colors">
             <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80 font-semibold flex items-center gap-1">
                Ver Detalles <ArrowUpRight className="w-4 h-4" />
             </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
