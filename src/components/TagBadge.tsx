export function TagBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-xs font-medium px-2.5 py-1 rounded-full"
      style={{
        backgroundColor: "var(--card-bg)",
        color: "var(--muted)",
        border: "1px solid var(--border)",
      }}
    >
      {label}
    </span>
  );
}
