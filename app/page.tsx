import { getProjects } from "@/lib/projects";
import ProjectCarousel from "@/components/ProjectCarousel";
import Image from 'next/image'
import SectionCard from "@/components/SectionCard"
import ProjectLinkButton from "@/components/ProjectLinkButton"
import CustomLink from "@/components/CustomLink";

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
            <p>I spend my free time developing systems for games and software projects, these can be viewed below or at these links :</p>
            
            <div className="flex justify-center gap-4">
              <CustomLink href="/projects">
                Project Gallery
              </CustomLink>
              <ProjectLinkButton label={"Itch.io"} url={"https://nat00n.itch.io/"} />
              <ProjectLinkButton label={"GitHub"} url={"https://github.com/Nat00n"} />
              <ProjectLinkButton label={"LinkedIn"} url={"https://uk.linkedin.com/in/nathan-doug"} />
            </div>

            <p>I&apos;m looking to expand my experience and take on junior job roles.</p>
            <p>Currently I am open to work, remote or anywhere in the Aberdeenshire area.</p>
            <p>You can contact me at : <CustomLink href="mailto:Nathan.Douglas04@Outlook.com">Nathan.Douglas04@Outlook.com</CustomLink></p>
          </SectionCard>

          <SectionCard
            title="Skills & Experience"
          >
            <p>Areas and languages that I have experience in :</p>
            <ul className="mx-auto w-fit list-disc pl-5 text-left">
              <li><b>Languages</b>: GDScript, GLSL, Python, C++, TypeScript, JavaScript, HTML, CSS, SQL</li>
              <li><b>Game development</b>: Godot engine, solo and team projects, shaders (GLSL)</li>
              <li><b>Web</b>: Next.js, React, HTML, CSS, Tailwind</li>
              <li><b>Assets</b>: Blender, BlockBench, Aseprite</li>
              <li><b>Practices</b>: OOP, composition, UI/UX design, agile, git</li>
            </ul>

            <p>Events and projects that I have experience from :</p>
            <ul className="mx-auto w-fit list-disc pl-5 text-left">
              <li><b>Dissertation</b>: Game-Based Learning For Algorithms: A Browser-Based Educational Tool 
                (<CustomLink href="/projects/tasktrain">
                Task Train
                </CustomLink>)
              </li>
              <li><b>Personal Projects</b>: Marching cubes mesh generation algorithm</li>
              <li><b>Game Jams</b>: Brackeys Game Jam 2026.2, Do You WANNA Jam?! 2026, Club Club Jam Jam 2026,<br></br>
                  Gwueble Jam 2026, UoA 2026 Game Jam, UoA 2025 Game Jam, UoA 2024 Game Jam</li>
              <li><b>Hackathons</b>: UoA Texas Hold Em Hackathon 2025</li>
            </ul>
          </SectionCard>

          <SectionCard
            title="Education"
            mediaSide={"right"}
            media={<Image
              src="/images/UOA-logo-png-cropped.png"
              alt="University of Aberdeen logo"
              width={300}
              height={200}
              className="rounded-lg"
              />}
          >
            <p><b>2:1 BSc Hons Computing Science - June 2026</b></p>
            <br></br>
            <p>I graduated from <b>Aberdeen University</b> after 4 years of study.</p>
            <p>During this time I explored:</p>
            <ul className="mx-auto w-fit list-disc pl-5 text-left">
              <li>Software Development and Engineering</li>
              <li>Data Analysis and Engineering</li>
              <li>Security</li>
              <li>Robotics</li>
              <li>Machine Learning</li>
              <li>and many more</li>
            </ul>
          </SectionCard>
        </div>

      </div>


      <h1 className="text-center text-[24px] text-secondary-foreground pb-0"><b>Projects</b></h1>
      <ProjectCarousel title="Games" href="/projects?type=games" projects={games} />
      <ProjectCarousel title="Software" href="/projects?type=software" projects={software} />
      <ProjectCarousel title="Assets" href="/projects?type=assets" projects={assets} />
    </div>
  );
}