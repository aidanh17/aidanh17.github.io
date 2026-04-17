import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { TagBadge } from "@/components/TagBadge";

export function generateStaticParams() {
  const params: { slug: string; direction: string }[] = [];
  for (const project of projects) {
    for (const dir of project.directions) {
      params.push({ slug: project.slug, direction: dir.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; direction: string }>;
}) {
  const { slug, direction } = await params;
  const project = projects.find((p) => p.slug === slug);
  const dir = project?.directions.find((d) => d.slug === direction);
  if (!dir) return {};
  return {
    title: `${dir.title} — Aidan Herderschee`,
  };
}

export default async function DirectionPage({
  params,
}: {
  params: Promise<{ slug: string; direction: string }>;
}) {
  const { slug, direction } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const dir = project.directions.find((d) => d.slug === direction);
  if (!dir) notFound();

  const relatedPubs = publications.filter(
    (p) => p.arxivId && dir.papers.includes(p.arxivId)
  );

  return (
    <article className="mx-auto max-w-[720px] px-6 py-16">
      <Link
        href={`/research/${project.slug}`}
        className="inline-flex items-center gap-1 text-sm mb-8 no-underline"
        style={{ color: "var(--muted)" }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        {project.title}
      </Link>

      <h1
        className="text-3xl md:text-4xl font-bold mb-10"
        style={{ color: "var(--foreground)" }}
      >
        {dir.title}
      </h1>

      <div className="space-y-6 mb-14">
        {dir.fullDescription.map((paragraph, i) => (
          <p
            key={i}
            className="leading-relaxed"
            style={{ color: "var(--foreground)" }}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {relatedPubs.length > 0 && (
        <section className="mb-14">
          <h2
            className="text-xl font-semibold mb-5"
            style={{ color: "var(--foreground)" }}
          >
            Related Publications
          </h2>
          <ul className="space-y-4">
            {relatedPubs.map((pub) => (
              <li key={pub.arxivId}>
                <a
                  href={`https://arxiv.org/abs/${pub.arxivId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:underline font-medium"
                >
                  {pub.title}
                </a>
                <div
                  className="text-sm mt-0.5"
                  style={{ color: "var(--muted)" }}
                >
                  {pub.authors.map((a) => a.split(",")[0]).join(", ")}
                  {pub.journal && ` · ${pub.journal}`}
                  {` · arXiv:${pub.arxivId}`}
                </div>
                {pub.popSci && pub.popSci.length > 0 && (
                  <div
                    className="text-sm mt-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {pub.popSci.map((article, i) => (
                      <span key={i}>
                        {i > 0 && " · "}
                        <span>Featured in </span>
                        <a
                          href={article.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-underline hover:underline"
                        >
                          {article.outlet}: &ldquo;{article.title}&rdquo;
                        </a>
                      </span>
                    ))}
                  </div>
                )}
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
