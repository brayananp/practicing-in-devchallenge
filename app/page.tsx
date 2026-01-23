"use client";
import ProjectCard from "@/components/ui/project-card";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Layout, Code, Server, Cpu, Palette, Zap } from "lucide-react";

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
      <section className="relative py-24 lg:py-32 overflow-hidden bg-grid-pattern">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="h-3 w-3" /> Portfolio de Desafíos
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-balance leading-[1.1]">
              Construyendo el Futuro de la{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Web Moderna
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
              Una vitrina curada de soluciones frontend avanzadas, componentes interactivos
              y aplicaciones completas construidas bajo los más altos estándares.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg" className="h-14 px-8 text-base gap-2 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                <Link href="#proyectos">
                  Explorar Proyectos <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base gap-2 rounded-full hover:bg-muted/50 transition-all">
                <Link href="https://devchallenges.io/" target="_blank">
                  <Globe className="h-5 w-5" /> devchallenges.io
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-muted/30 border-y">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Layout, label: "Frontend" },
              { icon: Code, label: "TypeScript" },
              { icon: Palette, label: "Tailwind CSS" },
              { icon: Server, label: "Backend" },
              { icon: Cpu, label: "API Design" },
              { icon: Zap, label: "Performance" },
            ].map((skill, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                <div className="p-4 rounded-2xl bg-background border shadow-sm group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                  <skill.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
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
              difficulty={project.difficulty}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
