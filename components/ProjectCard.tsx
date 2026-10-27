import type { Project } from "@/data/projects";
import CustomLink from "./CustomLink";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <CustomLink
      href={`/projects/${project.base}`}
      className="block rounded-xl border p-4 transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{project.summary}</p>
    </CustomLink>
  );
}