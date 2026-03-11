"use client";

import React, { useEffect, useState } from 'react';

export function DynamicBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-30">
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-primary rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-accent rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
            <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z"
          fill="url(#grad1)"
          className="animate-float"
        />
      </svg>
      
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 left-1/3 w-12 h-12 border-2 border-primary/20 rotate-45 animate-float" />
      <div className="absolute top-2/3 right-1/4 w-20 h-20 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-primary/20 rotate-12 animate-float" style={{ animationDelay: '1s' }} />
    </div>
  );
}