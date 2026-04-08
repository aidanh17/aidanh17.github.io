export function Footer() {
  return (
    <footer
      className="border-t py-8 mt-20"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mx-auto max-w-[960px] px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm" style={{ color: "var(--muted)" }}>
        <span>&copy; {new Date().getFullYear()} Aidan Herderschee</span>
        <span>Last updated April 2026</span>
      </div>
    </footer>
  );
}
