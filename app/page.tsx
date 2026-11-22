import { getProjects } from "@/lib/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import Image from 'next/image'

export default function HomePage() {
  const projects = getProjects();
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => b.date.localeCompare(a.date));

  const games = featured.filter((p) => p.type === "Game");
  const software = featured.filter((p) => p.type === "Software");
  const assets = featured.filter((p) => p.type === "Asset");

  return (
    <div className="container mx-auto space-y-12 px-4 py-8">
      <div className="flex-col justify-items-center">
        <h1><b>Projects Portfolio</b></h1>
        <br></br>
        <p className="mt-4 text-muted">Portfolio WIP</p>
        <br></br>
        <div className="justify-items-center rounded drop-shadow bg-foreground p-4">
          <h1><b>Education</b></h1>
          <br></br>
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
            <div>
              <Image
                src="/images/university-of-aberdeen-logo.webp" // Path relative to the public folder
                alt="Aberdeen University Logo"
                width={200}
                height={100}
                className="shrink-0"
              />
            </div>
            <div className="hidden w-px self-stretch bg-gray-100 md:block" />
            <div className="flex-1 text-center">
              <p>I graduated from <b>Aberdeen University</b> with a <b>2:1</b> degree for Computing Science in June 2026.</p>
              <p>During my time studying I explored Software Engineering, Data Analysis and Engineering, Security, Robotics as well as Machine Learning, among some others.</p>
            </div>
          </div>
        </div>
      </div>

      <ProjectCarousel title="Games" href="/projects?type=games" projects={games} />
      <ProjectCarousel title="Software" href="/projects?type=software" projects={software} />
      <ProjectCarousel title="Assets" href="/projects?type=assets" projects={assets} />
    </div>
  );
}