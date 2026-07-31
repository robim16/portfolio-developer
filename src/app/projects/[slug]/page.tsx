import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DynamicBackground } from '@/components/DynamicBackground';
import { Navbar } from '@/components/Navbar';
import { ProjectDetail } from '@/components/ProjectDetail';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Proyecto no encontrado' };
  }

  return {
    title: `${project.title} | DevSphere by Carlos`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-mesh selection:bg-primary/30">
      <DynamicBackground />
      <Navbar />
      <main className="pt-20">
        <ProjectDetail project={project} />
      </main>
    </div>
  );
}
