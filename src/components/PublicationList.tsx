"use client";

import { useState, useMemo } from "react";
import { publications, type Publication } from "@/data/publications";
import { SearchFilter } from "./SearchFilter";

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <span>
      {authors.map((author, i) => {
        const isMe = author.includes("Herderschee");
        return (
          <span key={i}>
            {isMe ? <strong>{author}</strong> : author}
            {i < authors.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </span>
  );
}

function PubEntry({ pub }: { pub: Publication }) {
  const link = pub.arxivId
    ? `https://arxiv.org/abs/${pub.arxivId}`
    : pub.doi
      ? `https://doi.org/${pub.doi}`
      : undefined;

  return (
    <li className="pb-5">
      <div className="text-sm mb-0.5" style={{ color: "var(--muted)" }}>
        <AuthorList authors={pub.authors} />
      </div>
      <div className="font-medium">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline"
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </div>
      {(pub.journal || pub.arxivId) && (
        <div className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
          {pub.journal && <span>{pub.journal}</span>}
          {pub.journal && pub.arxivId && <span> &middot; </span>}
          {pub.arxivId && <span>arXiv:{pub.arxivId}</span>}
        </div>
      )}
    </li>
  );
}

export function PublicationList() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return publications;
    const q = query.toLowerCase();
    return publications.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.authors.some((a) => a.toLowerCase().includes(q)) ||
        p.journal?.toLowerCase().includes(q) ||
        p.arxivId?.includes(q)
    );
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<number, Publication[]>();
    for (const pub of filtered) {
      const arr = map.get(pub.year) || [];
      arr.push(pub);
      map.set(pub.year, arr);
    }
    return Array.from(map.entries()).sort(([a], [b]) => b - a);
  }, [filtered]);

  return (
    <div>
      <SearchFilter
        value={query}
        onChange={setQuery}
        placeholder="Filter by title, author, journal, or arXiv ID..."
      />
      {grouped.length === 0 && (
        <p style={{ color: "var(--muted)" }}>No publications found.</p>
      )}
      {grouped.map(([year, pubs]) => (
        <section key={year} className="mb-10">
          <h2
            className="text-lg font-semibold mb-4 pb-2 border-b"
            style={{
              color: "var(--foreground)",
              borderColor: "var(--border)",
            }}
          >
            {year}
          </h2>
          <ul className="list-none p-0">
            {pubs.map((pub, i) => (
              <PubEntry key={i} pub={pub} />
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
