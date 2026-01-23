import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Code2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Code2 className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">DevPortfolio</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Exhibiendo soluciones de alta calidad para desafíos del mundo real.
              Enfocado en crear experiencias web excepcionales y código limpio.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Navegación</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="https://devchallenges.io/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  DevChallenges <ExternalLink className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Proyectos Populares</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/code-sharing" className="text-muted-foreground hover:text-primary transition-colors">
                  Code Sharing App
                </Link>
              </li>
              <li>
                <Link href="/music-player" className="text-muted-foreground hover:text-primary transition-colors">
                  Music Player
                </Link>
              </li>
              <li>
                <Link href="/unsplash-collection" className="text-muted-foreground hover:text-primary transition-colors">
                  Unsplash Collection
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Suscríbete para recibir actualizaciones sobre nuevos proyectos.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-grow">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full pl-9 pr-3 py-2 bg-background border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <Button size="sm">Unirse</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DevPortfolio. Creado con ❤️ por VJ.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
