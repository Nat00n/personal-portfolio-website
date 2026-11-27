import CustomLink from "@/components/CustomLink";
import ProjectCard from "@/components/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "@/lib/projects";

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

      <div className="md:px-12">
        <Carousel opts={{ align: "start" }} className="w-full">
          <CarouselContent>
            {projects.map((p) => (
              <CarouselItem
                key={p.base}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={p} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-4 flex justify-center gap-5 md:mt-0 md:contents">
            <CarouselPrevious className="static bg-muted hover:bg-primary-foreground translate-y-0 md:absolute" />
            <CarouselNext className="static bg-muted hover:bg-primary-foreground translate-y-0 md:absolute" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}