import type { Metadata } from "next";
import { PublicationList } from "@/components/PublicationList";

export const metadata: Metadata = {
  title: "Publications — Aidan Herderschee",
};

export default function PublicationsPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16">
      <h1
        className="text-3xl font-bold mb-2"
        style={{ color: "var(--foreground)" }}
      >
        Publications
      </h1>
      <p className="mb-8 text-sm" style={{ color: "var(--muted)" }}>
        Full list of papers. See also my{" "}
        <a
          href="https://inspirehep.net/authors/1869780"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSPIRE-HEP
        </a>{" "}
        profile.
      </p>
      <PublicationList />
    </div>
  );
}
