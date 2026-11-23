import { getProjects } from "@/lib/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import Image from 'next/image'
import SectionCard from "@/components/SectionCard"
import ProjectLinkButton from "@/components/ProjectLinkButton"

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
      <div className="flex-col justify-items-center text-center">
        <h1 className="text-[24px] text-secondary-foreground"><b>Portfolio</b></h1>
        <p className="mt-4 text-muted">My experience through education, personal projects and events</p>
        <br></br>

        {/* ---------- About Me Section ---------- */}
        <div className="space-y-6">
          <SectionCard
            title="About Me"
            media={<Image
              src="/images/profile.webp"
              alt="Photo of Nathan"
              width={200}
              height={100}
              className="rounded-lg"
              />}
          >
            <p>I am a junior <b>Game</b> and <b>Software Developer</b>.</p>
            <p>Im looking to expand my experience and take on junior job roles.</p>
            <p>I spend my free time developing systems for games and software projects, these can be viewed on this page below or at these links :</p>
            
            <div className="flex justify-center gap-4">
              <ProjectLinkButton label={"Itch.io"} url={"https://nat00n.itch.io/"} />
              <ProjectLinkButton label={"GitHub"} url={"https://github.com/Nat00n"} />
            </div>

          </SectionCard>

          <SectionCard
            title="Skills & Experience"
            mediaSide="right"
            media={<Image 
              src="/images/skills.webp"
              alt="Skills Photo?"
              width={200}
              height={100}
              className="rounded-lg"
              />}
          >
            <p>Your skills text here.</p>
          </SectionCard>

          <SectionCard
            title="Education"
            media={<Image
              src="/images/UOA-logo-png-cropped.png"
              alt="University of Aberdeen logo"
              width={200}
              height={100}
              className="rounded-lg"
              />}
          >
            <p>I graduated from <b>Aberdeen University</b> with a <b>2:1</b> degree in Computing Science in June 2026.</p>
            <p>During my studies I explored Software Engineering, Data Analysis and Engineering, Security, Robotics and Machine Learning, among others.</p>
          </SectionCard>
        </div>

      </div>


      <h1 className="text-center text-[24px] text-secondary-foreground"><b>Projects</b></h1>
      <ProjectCarousel title="Games" href="/projects?type=games" projects={games} />
      <ProjectCarousel title="Software" href="/projects?type=software" projects={software} />
      <ProjectCarousel title="Assets" href="/projects?type=assets" projects={assets} />
    </div>
  );
}