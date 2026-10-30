import { projects } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";

export default function HomePage() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => b.date.localeCompare(a.date)); // newest first

  const games = featured.filter((p) => p.type === "Game");
  const software = featured.filter((p) => p.type === "Software");
  const assets = featured.filter((p) => p.type === "Asset");

  return (
    <div className="container mx-auto space-y-12 px-4 py-8">
      <div>
        <h1 className="heading-display">Nathan Douglas</h1>
        <br></br>
        <p className="mt-4 text-muted">Portfolio WIP</p>
      </div>

      <ProjectCarousel title="Games" href="/projects#games" projects={games} />
      <ProjectCarousel title="Software" href="/projects#software" projects={software} />
      <ProjectCarousel title="Assets" href="/projects#assets" projects={assets} />
    </div>
  );
}