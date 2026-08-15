/**
 * Decorative diamond/dot mark, lifted from the reference's recurring
 * dot-grid motif. Pure graphic accent — no content dependency, so it carries
 * whatever tone the caller sets via `var(--token)`, never a hardcoded hex.
 */
export function DiamondGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid w-16 grid-cols-4 gap-1 ${className}`}
      style={{ color: "var(--ink)" }}
      aria-hidden="true"
    >
      <span className="aspect-square rotate-45 bg-current" />
      <span className="aspect-square rotate-45 bg-current" />
      <span className="aspect-square rotate-45 bg-current" />
      <span className="aspect-square rotate-45 bg-current" />
      <span className="col-start-2 aspect-square rotate-45 bg-current" />
      <span className="aspect-square rotate-45 bg-current" />
      <span className="aspect-square rotate-45 bg-current" />
    </div>
  );
}
