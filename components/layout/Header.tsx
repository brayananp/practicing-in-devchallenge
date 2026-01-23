"use client";

import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              DevChallenges
            </span>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="https://github.com/vj-vj"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://devchallenges.io/"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Globe className="h-5 w-5" />
              <span className="sr-only">DevChallenges</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
