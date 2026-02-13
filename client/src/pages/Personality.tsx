/* import { PersonalityTrait } from "@/components/PersonalityTrait";
import personalityData from "@/data/personality.json";

export default function Personality() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4" data-testid="text-personality-heading">
            Personality Assessment
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional strengths and working style visualized as skill attributes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalityData.traits.map((trait) => (
            <PersonalityTrait key={trait.name} {...trait} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
            <p className="font-rajdhani text-lg text-muted-foreground mb-2">Overall Rating</p>
            <p className="font-orbitron text-6xl font-bold text-primary" data-testid="text-overall-rating">
              {Math.round(personalityData.traits.reduce((sum, t) => sum + t.level, 0) / personalityData.traits.length)}
            </p>
            <p className="font-rajdhani text-sm text-muted-foreground mt-2 uppercase tracking-wide">
              Composite Score
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
*/