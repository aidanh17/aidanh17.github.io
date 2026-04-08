import Link from "next/link";
import type { Project } from "@/data/projects";
import { publications } from "@/data/publications";
import { TagBadge } from "./TagBadge";

export function ProjectDetail({ project }: { project: Project }) {
  const relatedPubs = publications.filter(
    (p) => p.arxivId && project.keyPapers.includes(p.arxivId)
  );

  return (
    <article className="mx-auto max-w-[720px] px-6 py-16">
      <Link
        href="/research"
        className="inline-flex items-center gap-1 text-sm mb-8 no-underline"
        style={{ color: "var(--muted)" }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back to Research
      </Link>

      <h1
        className="text-3xl md:text-4xl font-bold mb-6"
        style={{ color: "var(--foreground)" }}
      >
        {project.title}
      </h1>

      <p
        className="text-lg mb-12 leading-relaxed"
        style={{ color: "var(--muted)" }}
        dangerouslySetInnerHTML={{
          __html: project.overview.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
          ),
        }}
      />

      <h2
        className="text-xl font-semibold mb-6"
        style={{ color: "var(--foreground)" }}
      >
        Research Directions
      </h2>
      <div className="space-y-6 mb-14">
        {project.directions.map((dir, i) => (
          <Link
            key={i}
            href={`/research/${project.slug}/${dir.slug}`}
            className="block p-5 rounded-lg no-underline transition-colors"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
            }}
          >
            <h3
              className="font-semibold mb-2"
              style={{ color: "var(--foreground)" }}
            >
              {dir.title}
              <span className="ml-2 text-sm" style={{ color: "var(--muted)" }}>
                &rarr;
              </span>
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              {dir.description}
            </p>
          </Link>
        ))}
      </div>

      {relatedPubs.length > 0 && (
        <section className="mb-14">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--foreground)" }}
          >
            Key Publications
          </h2>
          <ul className="space-y-3">
            {relatedPubs.map((pub) => (
              <li key={pub.arxivId} className="text-sm leading-relaxed">
                <a
                  href={`https://arxiv.org/abs/${pub.arxivId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline"
                >
                  {pub.title}
                </a>
                <span className="ml-2" style={{ color: "var(--muted)" }}>
                  ({pub.authors.map((a) => a.split(",")[0]).join(", ")},{" "}
                  {pub.year})
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
    </article>
  );
}
