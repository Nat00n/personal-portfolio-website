"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Crumb = { label: string; href: string };

// Turns a URL segment into display text
function labelFor(segment: string): string {
  const project = projects.find((p) => p.base === segment);
  if (project) return project.title;

  const text = decodeURIComponent(segment).replace(/-/g, " ");
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const segments = pathname.split("/").filter(Boolean);

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    ...segments.map((segment, i) => ({
      label: labelFor(segment),
      href: "/" + segments.slice(0, i + 1).join("/"),
    })),
  ];

  // More than Home + previous + current means some pages go in the ellipsis
  const collapse = crumbs.length > 3;
  const hidden = collapse ? crumbs.slice(1, -2) : [];
  const visible = collapse ? [crumbs[0], ...crumbs.slice(-2)] : crumbs;

  return (
    <Breadcrumb className={isHome ? "invisible" : undefined}>
      <BreadcrumbList>
        {visible.map((crumb, i) => {
          const isLast = i === visible.length - 1;

          return (
            <Fragment key={crumb.href}>
              {i > 0 && <BreadcrumbSeparator />}

              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link href={crumb.href}>{crumb.label}</Link>} />
                )}
              </BreadcrumbItem>

              {i === 0 && collapse && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button size="icon-sm" variant="ghost">
                            <BreadcrumbEllipsis />
                            <span className="sr-only">Show hidden pages</span>
                          </Button>
                        }
                      />
                      <DropdownMenuContent align="start">
                        <DropdownMenuGroup>
                          {hidden.map((h) => (
                            <DropdownMenuItem
                              key={h.href}
                              render={<Link href={h.href}>{h.label}</Link>}
                            />
                          ))}
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </BreadcrumbItem>
                </>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}