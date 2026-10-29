import CustomLink from "@/components/CustomLink";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Navbar() {
  return (
    <nav className="border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <CustomLink href="/" className="internal-link">
          Nathan Douglas
        </CustomLink>

        <Breadcrumbs />

        <CustomLink href="\nathan-douglas-cv.pdf" newTab className="external-link">
          View My CV
        </CustomLink>
      </div>
    </nav>
  );
}