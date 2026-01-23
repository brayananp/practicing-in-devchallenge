"use client";
import ProjectCard from "@/components/ui/project-card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

interface Project {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  github_url: string;
  preview_url: string;
  difficulty: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  const getData = async () => {
    try {
      const res = await fetch("./data.json");
      const data = await res.json();
      setProjects(data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-muted/30">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Mis Proyectos de{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                devchallenges.io
              </span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed px-4">
              Explora mi colección de soluciones a los desafíos de desarrollo web.
              Desde interfaces responsivas hasta aplicaciones interactivas, cada proyecto
              representa un paso más en mi camino como desarrollador.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="#proyectos">
                  Ver Proyectos <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="https://devchallenges.io/" target="_blank">
                  <Globe className="h-4 w-4" /> devchallenges.io
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/50 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Projects Grid */}
      <section id="proyectos" className="py-20 container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Proyectos Recientes</h2>
            <p className="text-muted-foreground">
              Una lista detallada de los desafíos completados.
            </p>
          </div>
          <div className="text-sm font-medium bg-muted px-4 py-2 rounded-full">
            {projects.length} Proyectos Totales
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image_url}
              title={project.name}
              github_url={project.github_url}
              slug={project.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
