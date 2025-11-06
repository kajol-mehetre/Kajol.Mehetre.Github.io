import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  featured?: boolean;
}

export function ProjectCard({
  id,
  title,
  description,
  techStack,
  featured,
}: ProjectCardProps) {
  return (
    <Link href={`/project/${id}`}>
      <a data-testid={`card-project-${id}`}>
        <Card className="group relative overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full">
          {featured && (
            <div className="absolute top-4 right-4 z-10">
              <Badge variant="default" className="font-rajdhani font-semibold" data-testid={`badge-featured-${id}`}>
                Featured
              </Badge>
            </div>
          )}

          <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-orbitron font-bold text-primary/20">
                {title.charAt(0)}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
            </div>
          </div>

          <div className="p-6">
            <h3 className="font-orbitron text-xl font-bold mb-2 line-clamp-1" data-testid={`text-project-title-${id}`}>
              {title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2" data-testid={`text-project-description-${id}`}>
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary" className="font-rajdhani text-xs" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                  {tech}
                </Badge>
              ))}
              {techStack.length > 3 && (
                <Badge variant="secondary" className="font-rajdhani text-xs">
                  +{techStack.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}
