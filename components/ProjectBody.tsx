import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CustomLink from "@/components/CustomLink";

export default function ProjectBody({
  base,
  folder,
  body,
}: {
  base: string;
  folder: string;
  body: string;
}) {
  const resolve = (src: string) =>
    /^(https?:)?\/\//.test(src) || src.startsWith("/")
      ? src
      : `/projects/${folder}/${base}/${src}`;

  return (
    <div className="prose max-w-none project-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => {
            if (!href) return <>{children}</>;
            return (
              <span className="not-prose">
                <CustomLink href={href} newTab={/^https?:/.test(href)}>
                  {children}
                </CustomLink>
              </span>
            );
          },
          img: ({ src, alt }) => {
            if (typeof src !== "string") return null;
            const url = resolve(src);

            if (/\.(mp4|webm)$/i.test(url)) {
              return <video src={url} controls muted playsInline className="rounded-lg" />;
            }
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={url} alt={alt ?? ""} loading="lazy" className="rounded-lg" />;
          },
        }}
      >
        {body}
      </ReactMarkdown>
    </div>
  );
}