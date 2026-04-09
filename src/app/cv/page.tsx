import type { Metadata } from "next";
import { positions, education, awards } from "@/data/cv";
import { Timeline } from "@/components/Timeline";

export const metadata: Metadata = {
  title: "CV — Aidan Herderschee",
};

export default function CVPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      <h1
        className="text-3xl font-bold mb-10"
        style={{ color: "var(--foreground)" }}
      >
        Curriculum Vitae
      </h1>

      <Timeline title="Positions" entries={positions} />
      <Timeline title="Education" entries={education} />

      <section className="mb-12">
        <h2
          className="text-xl font-semibold mb-4 pb-2 border-b"
          style={{ color: "var(--foreground)", borderColor: "var(--border)" }}
        >
          Fellowships &amp; Awards
        </h2>
        <ul className="space-y-2">
          {awards.map((a, i) => (
            <li key={i} className="flex gap-3 text-sm">
              <span
                className="shrink-0 w-20 text-right"
                style={{ color: "var(--muted)" }}
              >
                {a.year}
              </span>
              <span style={{ color: "var(--foreground)" }}>{a.title}</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12">
        <a
          href="/cv.pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium no-underline transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-accent)", color: "white" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </a>
        <p
          className="mt-3 text-sm"
          style={{ color: "var(--foreground)", opacity: 0.5 }}
        >
          Last updated April 2026
        </p>
      </div>
    </div>
  );
}
