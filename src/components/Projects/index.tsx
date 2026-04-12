import { useState, useEffect } from 'react';
import Card from '@/components/Card';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/projects')
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error("Erro ao carregar projetos:", err));
  }, []);

  return (
    <section id="projects" className="container mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Meus Projetos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => {
          const ptContent = project.translations.find(t => t.language === 'pt');

          if (!ptContent) return null;

          return (
            <Card key={project.id} project={project} />
          );
        })}
      </div>
    </section>
  );
}