import Image from "next/image";
import type { Project } from "@/lib/projects";
import CustomLink from "./CustomLink";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <CustomLink
      href={`/projects/${project.base}`}
      className="group relative block h-32 overflow-hidden rounded-xl border md:h-48"
    >
      {project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-muted" />
      )}
      <div className="absolute inset-0 bg-black/60 transition-colors duration-300 group-hover:bg-black/30" />
      <div className="relative flex h-full flex-col justify-end p-4 text-white">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-white/80">{project.summary}</p>
      </div>
    </CustomLink>
  );
}