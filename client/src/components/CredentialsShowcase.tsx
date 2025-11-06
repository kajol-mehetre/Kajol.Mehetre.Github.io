import { ExternalLink, Award, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import certificatesData from "@/data/certificates.json";
import achievementsData from "@/data/achievements.json";

interface CredentialItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  year?: string;
  linkLabel?: string;
  linkUrl?: string;
}

function CredentialCard({ item, type }: { item: CredentialItem; type: "certificate" | "achievement" }) {
  return (
    <Card 
      className="h-full hover-elevate border-primary/20" 
      data-testid={`card-${type}-${item.id}`}
    >
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <CardTitle className="font-orbitron text-lg mb-1 flex items-start gap-2">
              {type === "certificate" ? (
                <GraduationCap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              ) : (
                <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              )}
              <span data-testid={`text-${type}-title-${item.id}`}>{item.title}</span>
            </CardTitle>
            <CardDescription className="font-rajdhani text-sm" data-testid={`text-${type}-org-${item.id}`}>
              {item.organization}
              {item.year && ` • ${item.year}`}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4" data-testid={`text-${type}-desc-${item.id}`}>
          {item.description}
        </p>
        {item.linkUrl && item.linkLabel && (
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="font-rajdhani"
            data-testid={`button-${type}-link-${item.id}`}
          >
            <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
              {item.linkLabel}
              <ExternalLink className="w-3 h-3 ml-2" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export function CredentialsShowcase() {
  return (
    <section className="py-20 px-6 border-t border-primary/10" id="credentials" data-testid="section-credentials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent" data-testid="text-credentials-heading">
            Credentials & Honors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and notable achievements in VR, AI, and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Certifications & Courses */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3" data-testid="text-certificates-heading">
                <GraduationCap className="w-7 h-7 text-primary" />
                Certifications & Courses
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>
            <div className="space-y-4">
              {certificatesData.map((cert) => (
                <CredentialCard key={cert.id} item={cert} type="certificate" />
              ))}
            </div>
          </div>

          {/* Right: Achievements & Awards */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="font-orbitron text-2xl md:text-3xl font-bold mb-2 flex items-center gap-3" data-testid="text-achievements-heading">
                <Award className="w-7 h-7 text-primary" />
                Achievements & Awards
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>
            <div className="space-y-4">
              {achievementsData.map((achievement) => (
                <CredentialCard key={achievement.id} item={achievement} type="achievement" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
