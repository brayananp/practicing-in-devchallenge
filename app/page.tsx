"use client";

import ProjectCard from "@/components/ui/project-card";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Layout,
  Code,
  Server,
  Cpu,
  Palette,
  Zap,
  Search,
  X,
  Sparkles,
  FolderSearch,
} from "lucide-react";

interface Project {
  id: string | number;
  name: string;
  slug: string;
  image_url: string;
  github_url: string;
  difficulty?: string;
}

const CATEGORIES = [
  { label: "Todos", value: "all" },
  { label: "Junior", value: "junior" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch("./data.json");
      const data = await res.json();
      setProjects(data.projects || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());

      const normalizedDifficulty = (project.difficulty || "").toLowerCase();
      const matchesCategory =
        selectedCategory === "all" ||
        normalizedDifficulty === selectedCategory ||
        (selectedCategory === "intermediate" && normalizedDifficulty === "intermedie");

      return matchesSearch && matchesCategory;
    });
  }, [projects, searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-grid-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2 shadow-sm">
              <Zap className="h-3.5 w-3.5 fill-primary/20" /> Portfolio de Desafíos
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-balance leading-[1.1]">
              Construyendo el Futuro de la{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Web Moderna
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Una vitrina curada de soluciones frontend avanzadas, componentes interactivos
              y aplicaciones completas construidas bajo los más altos estándares.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="h-12 sm:h-14 px-8 text-base gap-2 rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                <Link href="#proyectos">
                  Explorar Proyectos <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 sm:h-14 px-8 text-base gap-2 rounded-full hover:bg-muted/50 transition-all duration-300"
              >
                <Link href="https://devchallenges.io/" target="_blank">
                  <Globe className="h-5 w-5" /> devchallenges.io
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[10%] w-[45%] h-[45%] bg-primary/10 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-14 bg-muted/30 border-y">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {[
              { icon: Layout, label: "Frontend" },
              { icon: Code, label: "TypeScript" },
              { icon: Palette, label: "Tailwind CSS" },
              { icon: Server, label: "Backend" },
              { icon: Cpu, label: "API Design" },
              { icon: Zap, label: "Performance" },
            ].map((skill, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 group cursor-default p-3 rounded-xl hover:bg-background/50 transition-all duration-300"
              >
                <div className="p-3.5 rounded-2xl bg-background border shadow-sm group-hover:border-primary/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300">
                  <skill.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                  {skill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="proyectos" className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col space-y-8 mb-12">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <Sparkles className="h-4 w-4" /> Catálogo Interactivo
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Proyectos Realizados
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                Filtra y explora los desafíos interactivos construidos con tecnologías modernas.
              </p>
            </div>
            <div className="text-xs sm:text-sm font-medium bg-muted/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
              Mostrando <span className="font-bold text-foreground">{filteredProjects.length}</span> de {projects.length} proyectos
            </div>
          </div>

          {/* Dynamic Search & Category Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por nombre de proyecto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-background border border-input rounded-xl text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200 shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat.value}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat.value)}
                  className="rounded-full text-xs capitalize transition-all duration-200 px-4"
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid / States */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-80 rounded-2xl bg-muted/40 animate-pulse border border-border/40"
              />
            ))}
          </div>
        ) : filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
        ) : (
          <div className="text-center py-20 px-4 rounded-3xl bg-muted/20 border border-dashed border-border/80 flex flex-col items-center justify-center space-y-4">
            <div className="p-4 rounded-full bg-muted text-muted-foreground">
              <FolderSearch className="h-10 w-10" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold">No se encontraron proyectos</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                No hay resultados que coincidan con &quot;{searchQuery}&quot; en la categoría seleccionada.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="rounded-full text-xs mt-2"
            >
              Restablecer Filtros
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
