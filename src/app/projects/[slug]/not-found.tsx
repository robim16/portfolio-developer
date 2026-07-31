import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DynamicBackground } from '@/components/DynamicBackground';
import { Navbar } from '@/components/Navbar';

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-mesh selection:bg-primary/30">
      <DynamicBackground />
      <Navbar />
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
          <h1 className="text-5xl font-headline font-black">Proyecto no encontrado</h1>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            El proyecto que buscas no existe o fue movido.
          </p>
          <Button size="lg" className="font-bold rounded-xl" asChild>
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" /> Volver a proyectos
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
