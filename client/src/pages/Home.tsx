import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import projectsData from "@/data/projects.json";
import vrIcon from "@assets/generated_images/VR_category_icon_49a111b2.png";
import mlIcon from "@assets/generated_images/Machine_Learning_icon_c2ccfe9a.png";
import testIcon from "@assets/generated_images/Software_Testing_icon_acfb18a8.png";

export default function Home() {
  const categories = [
    {
      title: "Virtual Reality",
      category: "Virtual Reality",
      icon: vrIcon,
      projectCount: projectsData.filter((p) => p.category === "Virtual Reality").length,
    },
    {
      title: "Machine Learning",
      category: "Machine Learning",
      icon: mlIcon,
      projectCount: projectsData.filter((p) => p.category === "Machine Learning").length,
    },
    {
      title: "Software Testing",
      category: "Software Testing",
      icon: testIcon,
      projectCount: projectsData.filter((p) => p.category === "Software Testing").length,
    },
  ];

  return (
    <div>
      <HeroSection />
      
      <section className="py-20 px-6" id="categories">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4" data-testid="text-categories-heading">
              Project Categories
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my work across different technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.category} {...category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
