import Link from "next/link";
import type { ReactNode } from "react";

type CustomLinkProps = {
  href: string;
  children: ReactNode;
  newTab?: boolean;
  className?: string;
};

export default function CustomLink({
  href,
  children,
  newTab = false,
  className = "",
}: CustomLinkProps) {
  // Internal page route: starts with "/" and isn't a file like /cv.pdf
  const isInternalRoute = href.startsWith("/") && !/\.[a-z0-9]+$/i.test(href);

  const target = newTab ? "_blank" : undefined;
  const rel = newTab ? "noopener noreferrer" : undefined;

  if (isInternalRoute) {
    return (
      <Link href={href} target={target} rel={rel} className={className}>
        {children}
      </Link>
    );
  }

  // External sites, files in /public, mailto:, tel:
  return (
    <a href={href} target={target} rel={rel} className={className}>
      {children}
    </a>
  );
}