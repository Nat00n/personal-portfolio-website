import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard"

export default function HomePage() {

  const featured = projects.filter((p) => p.featured);
  
  return (
    <div>
      <div>
        <h1>Nathan Douglas</h1>

        <br></br>

        <p>Portfolio WIP</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.base} project={p} />
        ))}
      </div>
    </div>
  );
}
