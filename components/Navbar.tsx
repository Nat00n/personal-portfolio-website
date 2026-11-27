import CustomLink from "@/components/CustomLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getProjects } from "@/lib/projects";

export default function Navbar() {
  const titles = Object.fromEntries(getProjects().map((p) => [p.base, p.title]));
  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <CustomLink href="/" className="internal-link">
          Nathan Douglas
        </CustomLink>

        <Breadcrumbs titles={titles} />

        <CustomLink href="\nathan-douglas-cv.pdf" newTab className="text-primary! hover:text-secondary-foreground! link-external">
          View My CV
        </CustomLink>
      </div>
    </nav> 
  );
}