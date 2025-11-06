import { Card } from "@/components/ui/card";

interface PersonalityTraitProps {
  name: string;
  level: number;
  description: string;
}

export function PersonalityTrait({ name, level, description }: PersonalityTraitProps) {
  return (
    <Card className="p-6 hover-elevate">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-orbitron text-lg font-semibold" data-testid={`text-trait-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {name}
        </h3>
        <span className="font-rajdhani text-2xl font-bold text-primary" data-testid={`text-level-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {level}
        </span>
      </div>

      <div className="mb-3">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
            style={{ width: `${level}%` }}
            data-testid={`bar-level-${name.toLowerCase().replace(/\s+/g, '-')}`}
          />
        </div>
      </div>

      <p className="text-sm text-muted-foreground" data-testid={`text-description-${name.toLowerCase().replace(/\s+/g, '-')}`}>
        {description}
      </p>
    </Card>
  );
}
