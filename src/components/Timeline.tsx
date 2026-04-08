import type { CVEntry } from "@/data/cv";

export function Timeline({
  title,
  entries,
}: {
  title: string;
  entries: CVEntry[];
}) {
  return (
    <section className="mb-12">
      <h2
        className="text-xl font-semibold mb-6"
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </h2>
      <div className="space-y-0">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="relative pl-8 pb-8 last:pb-0 border-l-2"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2"
              style={{
                borderColor: "var(--color-accent)",
                backgroundColor: "var(--background)",
              }}
            />
            <div
              className="text-sm font-medium mb-1"
              style={{ color: "var(--color-accent)" }}
            >
              {entry.period}
            </div>
            <div className="font-medium" style={{ color: "var(--foreground)" }}>
              {entry.title}
            </div>
            <div className="text-sm" style={{ color: "var(--muted)" }}>
              {entry.institution}
              {entry.detail && ` — ${entry.detail}`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
