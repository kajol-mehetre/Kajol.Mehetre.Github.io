import { Github, Linkedin, Mail } from "lucide-react";
import { SiMedium } from "react-icons/si";
import { Button } from "@/components/ui/button";
import profileData from "@/data/profile.json";
import profileImage from "@assets/generated_images/Professional_developer_headshot_585f4a1b.png";
import heroBackground from "@assets/generated_images/VR_tech_hero_background_87e77c43.png";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px),
                           repeating-linear-gradient(90deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)`
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/50">
              <img
                src={profileImage}
                alt={profileData.name}
                className="w-full h-full object-cover"
                data-testid="img-profile"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 text-white" data-testid="text-name">
              {profileData.name}
            </h1>
            <p className="font-rajdhani text-2xl md:text-3xl text-primary mb-6 uppercase tracking-wide" data-testid="text-title">
              {profileData.title}
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl" data-testid="text-about">
              {profileData.about}
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                variant="outline"
                size="default"
                className="bg-background/20 backdrop-blur-sm border-primary/50 text-white hover:bg-primary/20"
                asChild
                data-testid="button-github"
              >
                <a href={profileData.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="default"
                className="bg-background/20 backdrop-blur-sm border-primary/50 text-white hover:bg-primary/20"
                asChild
                data-testid="button-linkedin"
              >
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="default"
                className="bg-background/20 backdrop-blur-sm border-primary/50 text-white hover:bg-primary/20"
                asChild
                data-testid="button-medium"
              >
                <a href={profileData.medium} target="_blank" rel="noopener noreferrer">
                  <SiMedium className="mr-2 h-5 w-5" />
                  Medium
                </a>
              </Button>
              <Button
                variant="outline"
                size="default"
                className="bg-background/20 backdrop-blur-sm border-primary/50 text-white hover:bg-primary/20"
                asChild
                data-testid="button-email"
              >
                <a href={`mailto:${profileData.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
