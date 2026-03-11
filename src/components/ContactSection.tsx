"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Send, Twitter } from 'lucide-react';

export function ContactSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-headline font-bold leading-tight">
            ¿Listo para construir algo <span className="text-accent">extraordinario?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
            Estoy disponible para proyectos freelance y oportunidades a tiempo completo. Hablemos de tu visión.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4 group">
            <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Envíame un correo a</p>
              <a href="mailto:carlos.aj@devsphere.com" className="text-lg font-bold hover:text-accent transition-colors">carlos.aj@devsphere.com</a>
            </div>
          </div>
          
          <div className="flex gap-4">
            {[
              { icon: <Github />, label: 'Github', href: '#' },
              { icon: <Linkedin />, label: 'LinkedIn', href: '#' },
              { icon: <Twitter />, label: 'Twitter', href: '#' }
            ].map((social, idx) => (
              <Button key={idx} variant="outline" size="icon" className="w-12 h-12 rounded-full border-primary/20 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all" asChild>
                <a href={social.href} aria-label={social.label}>{social.icon}</a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <Card className="border-none shadow-2xl bg-white/90 backdrop-blur-xl p-2">
        <div className="bg-primary h-1 rounded-t-lg" />
        <CardContent className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Nombre</label>
              <Input placeholder="Juan Pérez" className="bg-background/50 focus:ring-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold ml-1">Correo Electrónico</label>
              <Input placeholder="juan@ejemplo.com" className="bg-background/50 focus:ring-primary" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">Asunto</label>
            <Input placeholder="Consulta de Proyecto" className="bg-background/50 focus:ring-primary" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold ml-1">Mensaje</label>
            <Textarea placeholder="Cuéntame más sobre tu proyecto..." className="min-h-[150px] bg-background/50 focus:ring-primary" />
          </div>
          <Button className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-bold text-lg shadow-lg hover:shadow-accent/20 transition-all">
            <Send className="mr-2 h-5 w-5" /> Enviar Mensaje
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
