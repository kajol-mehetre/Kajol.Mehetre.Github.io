import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const [location] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
      setSelectedCategory(category);
    }
  }, [location]);

  const categories = ["All", "Virtual Reality", "Machine Learning", "Software Testing"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4" data-testid="text-projects-heading">
            My Projects
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my technical work and innovative solutions
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="font-rajdhani font-semibold uppercase"
              data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
