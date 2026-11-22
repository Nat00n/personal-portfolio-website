import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const root = path.join(process.cwd(), "public/projects");

const typeFolders = { games: "Game", software: "Software", assets: "Asset" } as const;
export type ProjectType = (typeof typeFolders)[keyof typeof typeFolders];

const frontmatter = z.object({
    title: z.string(),
    summary: z.string(),
    date: z
    .union([z.string(), z.date()])
    .transform((d) => (d instanceof Date ? d.toISOString().slice(0, 10) : d)),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().nullish(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
});

export type Project = z.infer<typeof frontmatter> & {
    base: string;
    type: ProjectType;
    folder: string;
    body: string;
};

export function getProjects(): Project[] {
  const projects: Project[] = [];

  for (const [folder, type] of Object.entries(typeFolders)) {
    const dir = path.join(root, folder);
    if (!fs.existsSync(dir)) continue;

    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, e.name, "index.md");
      if (!e.isDirectory() || !fs.existsSync(file)) continue;

      const { data, content } = matter(fs.readFileSync(file, "utf8"));
      const fm = frontmatter.parse(data);

      let thumbnail: string | null = null;

      if (fm.thumbnail) {
        if (!fs.existsSync(path.join(dir, e.name, fm.thumbnail))) {
          throw new Error(`Missing thumbnail "${fm.thumbnail}" in ${folder}/${e.name}`);
        }
        thumbnail = `/projects/${folder}/${e.name}/${fm.thumbnail}`;
      }

      projects.push({
        ...fm,
        base: e.name,
        type,
        folder,
        thumbnail,
        body: content,
      });
    }
  }

  return projects.sort((a, b) => b.date.localeCompare(a.date));
}

export function getProject(base: string) {
  return getProjects().find((p) => p.base === base);
}