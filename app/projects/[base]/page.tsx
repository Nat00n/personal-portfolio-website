import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";
import ProjectLinkButton from "@/components/ProjectLinkButton";
import ProjectBody from "@/components/ProjectBody";

export function generateStaticParams() {
  return getProjects().map((p) => ({ base: p.base }));
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ base: string }>;
}) {
  const { base } = await params;
  const project = getProject(base);
  if (!project) notFound();

  return (
    <article className="space-y-8 p-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-2">{project.summary}</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-3">
          {project.links.map((l) => (
            <li key={l.url}>
              <ProjectLinkButton label={l.label} url={l.url} />
            </li>
          ))}
        </ul>
      </header>

      <div className="mx-auto max-w-3xl text-center">
        <ProjectBody base={project.base} folder={project.folder} body={project.body} />
      </div>
    </article>
  );
}

export default function ProjectPage({
  params,
}: {
  params: Promise<{ base: string }>;
}) {
  return (
    <Suspense fallback={<p>Loading…</p>}>
      <ProjectContent params={params} />
    </Suspense>
  );
}