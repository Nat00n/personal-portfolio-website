import type { ReactNode } from "react";

type Props = {
  title: string;
  media?: ReactNode;
  children: ReactNode;
  mediaSide?: "left" | "right";
};

export default function SectionCard({
  title,
  media,
  children,
  mediaSide = "left",
}: Props) {
  return (
    <section className="w-full rounded bg-foreground p-6 drop-shadow">
      <h2 className="mb-6 text-center text-[20px] font-bold text-primary-foreground">
        {title}
      </h2>

      <div
        className={`flex flex-col items-center gap-6 md:gap-8 ${
          mediaSide === "right" ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {media && (
          <>
            <div className="shrink-0">{media}</div>
            <div className="h-px w-full bg-gray-100 md:h-auto md:w-px md:self-stretch" />
          </>
        )}
        <div className="flex-1 space-y-3 text-center">{children}</div>
      </div>
    </section>
  );
}