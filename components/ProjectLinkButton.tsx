import type { ReactNode } from "react";
import { LuExternalLink } from "react-icons/lu";
import { SiGithub, SiItchdotio, SiYoutube } from "react-icons/si";
import CustomLink from "@/components/CustomLink";

const iconClass = "size-5";

// sites here
const icons: Record<string, ReactNode> = {
  "github.com": <SiGithub aria-hidden className={iconClass} />,
  "itch.io": <SiItchdotio aria-hidden className={iconClass} />,
  "youtube.com": <SiYoutube aria-hidden className={iconClass} />,
  "youtu.be": <SiYoutube aria-hidden className={iconClass} />,
};

function iconFor(url: string): ReactNode {
  const host = new URL(url).hostname.replace(/^www\./, "");
  const match = Object.keys(icons).find((d) => host === d || host.endsWith(`.${d}`));
  return match ? icons[match] : <LuExternalLink aria-hidden className={iconClass} />;
}

export default function ProjectLinkButton({ label, url }: { label: string; url: string }) {
  return (
    <CustomLink href={url} newTab className="link-external inline-flex items-center gap-1 no-underline!">
      {iconFor(url)}
      <span className="underline underline-offset-4">{label}</span>
    </CustomLink>
  );
}