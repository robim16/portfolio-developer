"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: isHome ? '#hero' : '/#hero' },
    { name: 'Proyectos', href: isHome ? '#projects' : '/#projects' },
    { name: 'Habilidades', href: isHome ? '#about' : '/#about' },
    { name: 'Contacto', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
      scrolled ? "py-3 bg-white/70 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-xl text-primary-foreground shadow-lg shadow-primary/20">
            D
          </div>
          <span className="text-xl font-headline font-black tracking-tighter">
            DevSphere <span className="text-accent">Carlos</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold hover:text-accent transition-colors tracking-wide uppercase"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-accent hover:bg-accent/90 text-white font-bold rounded-full px-6 shadow-lg shadow-accent/20 transition-all">
            Contrátame
          </Button>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-primary/10 shadow-2xl animate-in slide-in-from-top-4 p-8 flex flex-col items-center gap-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-bold hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold rounded-xl h-12">
            Contrátame
          </Button>
        </div>
      )}
    </nav>
  );
}