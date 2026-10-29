import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects, type ProjectType } from "@/data/projects";

const categories: { id: string; title: string; type: ProjectType }[] = [
  { id: "games", title: "Games", type: "Game" },
  { id: "software", title: "Software", type: "Software" },
];

export default function ProjectGallery() {
  const sorted = [...projects].sort((a, b) => b.date.localeCompare(a.date));
  const sections = categories
    .map((c) => ({ ...c, items: sorted.filter((p) => p.type === c.type) }))
    .filter((s) => s.items.length > 0);

  if (sections.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="heading-1 mb-8 text-center">The Project Gallery</h1>

      <Tabs defaultValue={sections[0].id}>
        <TabsList className="mx-auto mb-8 w-full max-w-md">
          {sections.map((s) => (
            <TabsTrigger key={s.id} value={s.id} className="flex-1">
              {s.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {sections.map((s) => (
          <TabsContent key={s.id} value={s.id}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.items.map((p) => (
                <ProjectCard key={p.base} project={p} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}