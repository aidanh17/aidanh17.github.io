import Image from "next/image";
import { profile } from "@/data/profile";

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-lg transition-colors hover:opacity-70"
      style={{ color: "var(--muted)" }}
      aria-label={label}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
        {/* Headshot */}
        <Image
          src="/headshot.jpg"
          alt="Aidan Herderschee"
          width={208}
          height={208}
          className="shrink-0 w-52 h-52 rounded-2xl object-cover"
          priority
        />

        {/* Info */}
        <div className="flex-1">
          <h1
            className="text-3xl md:text-4xl font-bold mb-1"
            style={{ color: "var(--foreground)" }}
          >
            {profile.name}
          </h1>
          <p className="text-lg mb-1" style={{ color: "var(--color-accent)" }}>
            {profile.title}
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
            {profile.affiliation}
          </p>

          <p className="leading-relaxed mb-8" style={{ color: "var(--foreground)" }}>
            {profile.bio}
          </p>

          {/* Icon links */}
          <div className="flex items-center gap-1 -ml-2">
            {/* Google Scholar */}
            <IconLink href={profile.links.scholar} label="Google Scholar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10z" />
                <path d="M12 11.5V0L24 10h-7.5" />
                <path d="M0 10L12 0v3L2.5 10z" />
              </svg>
            </IconLink>

            {/* arXiv */}
            <IconLink href={profile.links.arxiv} label="arXiv">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M8 7h8M8 11h8M8 15h4" />
              </svg>
            </IconLink>

            {/* ORCID */}
            <IconLink href={profile.links.orcid} label="ORCID">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378a.815.815 0 1 1 0 1.63.815.815 0 0 1 0-1.63zM6.6 7.25h1.538v9.5H6.6v-9.5zm3.846 0h4.154c3.346 0 5 2.154 5 4.75s-1.654 4.75-5 4.75H10.446v-9.5zm1.538 1.385v6.73h2.616c2.508 0 3.462-1.577 3.462-3.365s-.954-3.365-3.462-3.365H11.984z" />
              </svg>
            </IconLink>

            {/* INSPIRE */}
            <IconLink href={profile.links.inspire} label="INSPIRE-HEP">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v12M8 8l4 4 4-4" />
              </svg>
            </IconLink>

            {/* Email */}
            <IconLink href={`mailto:${profile.links.email}`} label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
            </IconLink>
          </div>
        </div>
      </div>
    </div>
  );
}
