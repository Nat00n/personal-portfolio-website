import { Suspense } from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CustomLink from '@/components/CustomLink';

export function generateStaticParams() {
  return projects.map((p) => ({ base: p.base }));
}

async function ProjectContent({
  params,
}: {
  params: Promise<{ base: string }>;
}) {
  const { base } = await params;
  const project = projects.find((p) => p.base === base);
  if (!project) notFound();

  return (
    <article>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-2">{project.description}</p>
      <ul className="mt-4 flex gap-3">
        {project.links.map((l) => (
          <li key={l.url}>
            <CustomLink href={l.url} newTab className="external-link">{l.label}</CustomLink>
          </li>
        ))}
      </ul>
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