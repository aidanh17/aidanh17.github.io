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
            {/* Google Scholar – graduation cap */}
            <IconLink href={profile.links.scholar} label="Google Scholar">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.749-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
              </svg>
            </IconLink>

            {/* arXiv – chi (χ) */}
            <IconLink href={profile.links.arxiv} label="arXiv">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="7" y1="3" x2="17" y2="21" />
                <line x1="17" y1="3" x2="7" y2="21" />
              </svg>
            </IconLink>

            {/* ORCID – official logo */}
            <IconLink href={profile.links.orcid} label="ORCID">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378a.815.815 0 1 1 0 1.63.815.815 0 0 1 0-1.63zM6.6 7.25h1.538v9.5H6.6v-9.5zm3.846 0h4.154c3.346 0 5 2.154 5 4.75s-1.654 4.75-5 4.75H10.446v-9.5zm1.538 1.385v6.73h2.616c2.508 0 3.462-1.577 3.462-3.365s-.954-3.365-3.462-3.365H11.984z" />
              </svg>
            </IconLink>

            {/* INSPIRE – stylized i */}
            <IconLink href={profile.links.inspire} label="INSPIRE-HEP">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="2" />
                <rect x="10" y="9" width="4" height="12" rx="1" />
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
