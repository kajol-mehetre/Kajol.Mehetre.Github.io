import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { SiMedium } from "react-icons/si";
import projectsData from "@/data/projects.json";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const project = projectsData.find((p) => p.id === params?.id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-orbitron text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects">
            <a>
              <Button variant="default" data-testid="button-back-to-projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/projects">
          <a>
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </a>
        </Link>

        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 font-rajdhani" data-testid="badge-category">
            {project.category}
          </Badge>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4" data-testid="text-project-title">
            {project.title}
          </h1>
          <p className="text-muted-foreground text-lg" data-testid="text-project-description">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <h2 className="font-orbitron text-2xl font-bold mb-4">Project Demo</h2>
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={`${project.title} demo video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="video-demo"
              />
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="font-orbitron text-2xl font-bold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="default" className="font-rajdhani" data-testid={`badge-tech-${tech.toLowerCase()}`}>
                  {tech}
                </Badge>
              ))}
            </div>

            <h2 className="font-orbitron text-2xl font-bold mb-4">Links</h2>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
                data-testid="button-github-link"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                asChild
                data-testid="button-medium-link"
              >
                <a href={project.mediumUrl} target="_blank" rel="noopener noreferrer">
                  <SiMedium className="mr-2 h-5 w-5" />
                  Read on Medium
                </a>
              </Button>
            </div>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="font-orbitron text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.description} This project demonstrates advanced capabilities in {project.category.toLowerCase()}, 
            utilizing cutting-edge technologies including {project.techStack.slice(0, 2).join(" and ")}. 
            The implementation showcases best practices in software development, including comprehensive testing, 
            documentation, and scalable architecture design.
          </p>
        </Card>
      </div>
    </div>
  );
}
