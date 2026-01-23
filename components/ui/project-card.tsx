import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
  readonly title: string;
  readonly image: string;
  readonly github_url: string;
  readonly slug: string;
  readonly difficulty?: string;
};

export default function ProjectCard({
  image,
  title,
  github_url,
  slug,
  difficulty,
}: Props) {
  const getDifficultyVariant = (diff?: string) => {
    switch (diff?.toLowerCase()) {
      case "junior":
        return "success";
      case "intermediate":
        return "warning";
      case "advanced":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <Card className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-muted bg-card">
      <Link href={slug} className="block overflow-hidden aspect-video relative">
        <Image
          src={image}
          alt={title}
          width={600}
          height={337}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
           <span className="text-white text-sm font-semibold flex items-center gap-2">
             Explorar Desafío <ExternalLink className="h-3 w-3" />
           </span>
        </div>
        {difficulty && (
          <div className="absolute top-3 right-3">
            <Badge variant={getDifficultyVariant(difficulty)} className="capitalize backdrop-blur-md shadow-sm">
              {difficulty}
            </Badge>
          </div>
        )}
      </Link>
      <CardHeader className="p-5 flex-grow">
        <CardTitle className="text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="p-5 pt-0 flex justify-between gap-3">
        <Button asChild variant="outline" size="sm" className="flex-1 h-9 gap-2 rounded-lg">
          <a href={github_url} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </Button>
        <Button asChild size="sm" className="flex-1 gap-2">
          <Link href={slug}>
            <ExternalLink className="h-4 w-4" />
            <span>Preview</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
