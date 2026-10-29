import CustomLink from "@/components/CustomLink";
import ProjectCard from "@/components/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "@/data/projects";

type Props = {
  title: string;
  href: string;
  projects: Project[];
};

export default function ProjectCarousel({ title, href, projects }: Props) {
  if (projects.length === 0) return null;

  return (
    <section className="space-y-4">
      <div className="flex items-baseline gap-4">
        <h2 className="heading-2">{title}</h2>
        <CustomLink href={href} className="link-internal text-small">
          View more
        </CustomLink>
      </div>

      <div className="sm:px-12">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem
                key={p.base}
                className="basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={p} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}