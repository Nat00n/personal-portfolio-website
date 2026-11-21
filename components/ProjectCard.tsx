import type { Project } from "@/data/projects";
import CustomLink from "./CustomLink";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <CustomLink
      href={`/projects/${project.base}`}
      className="block rounded-xl border h-32 md:h-48 p-4 transition bg-foreground hover:bg-muted dark:hover:bg-muted"
    >
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">{project.summary}</p>
    </CustomLink>
  );
}