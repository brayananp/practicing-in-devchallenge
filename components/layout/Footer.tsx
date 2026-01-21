import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl">DevChallenges Projects</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Una colección de desafíos de desarrollo web de devchallenges.io,
              construidos para mejorar habilidades en frontend, backend y diseño.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline text-muted-foreground hover:text-foreground">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="https://devchallenges.io/" target="_blank" className="hover:underline text-muted-foreground hover:text-foreground">
                  DevChallenges.io
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <Link href="https://github.com/vj-vj" target="_blank" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DevChallenges Portfolio. Creado con ❤️ por VJ.</p>
        </div>
      </div>
    </footer>
  );
}
