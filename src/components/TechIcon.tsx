
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Layers, 
  Terminal, 
  Coffee, 
  Framer,
  Layout,
  Zap,
  Box,
  Cloud,
  Atom
} from 'lucide-react';

const techMap: Record<string, { icon: React.ReactNode; color: string }> = {
  'Laravel': { icon: <Terminal className="w-4 h-4" />, color: 'bg-red-500' },
  'Vue': { icon: <Layout className="w-4 h-4" />, color: 'bg-green-500' },
  'Spring': { icon: <Coffee className="w-4 h-4" />, color: 'bg-green-600' },
  'Angular': { icon: <Globe className="w-4 h-4" />, color: 'bg-red-600' },
  'Next': { icon: <Layers className="w-4 h-4" />, color: 'bg-black' },
  'React': { icon: <Atom className="w-4 h-4" />, color: 'bg-blue-400' },
  'Django': { icon: <Code2 className="w-4 h-4" />, color: 'bg-green-800' },
  '.Net': { icon: <Cpu className="w-4 h-4" />, color: 'bg-purple-600' },
  'Nestjs': { icon: <Zap className="w-4 h-4" />, color: 'bg-red-500' },
  'PostgreSQL': { icon: <Database className="w-4 h-4" />, color: 'bg-blue-600' },
  'MySQL': { icon: <Database className="w-4 h-4" />, color: 'bg-blue-500' },
  'SQL Server': { icon: <Database className="w-4 h-4" />, color: 'bg-red-700' },
  'MongoDB': { icon: <Database className="w-4 h-4" />, color: 'bg-green-700' },
  'Docker': { icon: <Box className="w-4 h-4" />, color: 'bg-blue-600' },
  'Kubernetes': { icon: <Cloud className="w-4 h-4" />, color: 'bg-blue-700' },
  'Cursor': { icon: <Framer className="w-4 h-4" />, color: 'bg-blue-400' },
  'Claude': { icon: <Cpu className="w-4 h-4" />, color: 'bg-orange-400' },
  'Gemini': { icon: <Zap className="w-4 h-4" />, color: 'bg-blue-500' },
  'ChatGPT': { icon: <Globe className="w-4 h-4" />, color: 'bg-emerald-500' },
  'Tailwind': { icon: <Layout className="w-4 h-4" />, color: 'bg-cyan-500' },
  'Blazor': { icon: <Globe className="w-4 h-4" />, color: 'bg-purple-600' },
  'Azure': { icon: <Cloud className="w-4 h-4" />, color: 'bg-blue-500' },
};

export function TechIcon({ tech, showLabel = true }: { tech: string; showLabel?: boolean }) {
  const data = techMap[tech] || { icon: <Code2 className="w-4 h-4" />, color: 'bg-slate-500' };
  
  return (
    <Badge variant="secondary" className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary border-none hover:bg-secondary/80 transition-colors">
      <span className={data.color + " p-0.5 rounded text-white"}>
        {data.icon}
      </span>
      {showLabel && <span className="font-medium text-xs uppercase tracking-wider">{tech}</span>}
    </Badge>
  );
}
