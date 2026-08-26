"use client";

import Link from "next/link";
import { Github, Globe, Code2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
              DevPortfolio
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#proyectos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Proyectos
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Link
              href="https://github.com/vj-vj"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://devchallenges.io/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Globe className="h-4 w-4" />
                <span className="sr-only">DevChallenges</span>
              </Button>
            </Link>
          </div>

          <div className="h-4 w-[1px] bg-border" />

          <Button asChild size="sm" className="rounded-full px-4 text-xs font-semibold gap-1">
            <a
              href="https://brayan-nunez.pages.dev/es/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contáctame
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
