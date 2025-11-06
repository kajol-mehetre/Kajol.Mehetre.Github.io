import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface CategoryCardProps {
  title: string;
  icon: string;
  projectCount: number;
  category: string;
}

export function CategoryCard({ title, icon, projectCount, category }: CategoryCardProps) {
  return (
    <Link href={`/projects?category=${encodeURIComponent(category)}`}>
      <a data-testid={`card-category-${category.toLowerCase().replace(/\s+/g, '-')}`}>
        <Card className="group relative overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="relative p-8 flex flex-col items-center text-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl group-hover:blur-2xl transition-all" />
              <img
                src={icon}
                alt={title}
                className="relative w-24 h-24 object-contain"
                data-testid={`img-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
              />
            </div>

            <div>
              <h3 className="font-orbitron text-2xl font-bold mb-2" data-testid={`text-category-title-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {title}
              </h3>
              <Badge variant="secondary" className="font-rajdhani" data-testid={`badge-project-count-${category.toLowerCase().replace(/\s+/g, '-')}`}>
                {projectCount} {projectCount === 1 ? "Project" : "Projects"}
              </Badge>
            </div>

            <div className="flex items-center gap-2 text-primary font-rajdhani font-semibold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Card>
      </a>
    </Link>
  );
}
