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

type Props = {
  readonly title: string;
  readonly image: string;
  readonly github_url: string;
  readonly slug: string;
};

export default function ProjectCard({
  image,
  title,
  github_url,
  slug,
}: Props) {
  return (
    <Card className="overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-lg border-muted">
      <Link href={slug} className="block overflow-hidden h-48 relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          unoptimized // Set to true if images come from external domains not configured in next.config.mjs
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-medium">
             Ver Proyecto
           </span>
        </div>
      </Link>
      <CardHeader className="p-4 flex-grow">
        <CardTitle className="text-xl line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardFooter className="p-4 pt-0 flex justify-between gap-2">
        <Button asChild variant="outline" size="sm" className="flex-1 gap-2">
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
