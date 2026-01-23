"use client";

import Link from "next/link";
import { Github, Globe, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-primary text-primary-foreground p-1.5 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <Code2 className="h-6 w-6" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="#proyectos" className="text-sm font-medium hover:text-primary transition-colors">
              Proyectos
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 border-r pr-2 mr-2">
            <Link
              href="https://github.com/vj-vj"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://devchallenges.io/"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Globe className="h-5 w-5" />
                <span className="sr-only">DevChallenges</span>
              </Button>
            </Link>
          </div>
          <Button size="sm" className="hidden sm:flex">
            Contáctame
          </Button>
        </div>
      </div>
    </header>
  );
}
