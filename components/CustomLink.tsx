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
  className,
}: CustomLinkProps) {
  const isInternalRoute = href.startsWith("/") && !/\.[a-z0-9]+$/i.test(href);

  const target = newTab ? "_blank" : undefined;
  const rel = newTab ? "noopener noreferrer" : undefined;
  const classes = className ?? (isInternalRoute ? "link-internal" : "link-external");

  if (isInternalRoute) {
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target={target} rel={rel} className={classes}>
      {children}
    </a>
  );
}