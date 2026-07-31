"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { TechIcon } from './TechIcon';
import { projects } from '@/lib/projects';

export function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Card key={project.slug} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-md">
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
            <Button variant="link" className="p-0 h-auto text-accent hover:text-accent/80 font-semibold flex items-center gap-1" asChild>
              <Link href={`/projects/${project.slug}`}>
                Ver Detalles <ArrowUpRight className="w-4 h-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
