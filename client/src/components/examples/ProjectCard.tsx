import { ProjectCard } from '../ProjectCard'

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProjectCard
        id="example-project"
        title="VR Training Simulator"
        description="Immersive training platform for enterprise onboarding using Oculus Quest 2"
        techStack={["Unity", "C#", "Oculus SDK", "WebXR"]}
        thumbnail="vr-1"
        featured={true}
      />
    </div>
  )
}
