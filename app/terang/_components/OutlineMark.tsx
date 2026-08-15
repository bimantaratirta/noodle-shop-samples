/**
 * Giant stroke-only text over a photo container — "the single most
 * worth-stealing idea" from the reference (docs/02-arah-desain.md): it
 * solves the bilingual mandate and the no-logo-yet problem in one device.
 * Kept near-verbatim; content is prop-driven so this carries no data
 * dependency of its own. Hidden from screen readers — it's a graphic
 * treatment of text that appears properly, once, elsewhere on the page.
 */
export function OutlineMark({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <p
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 flex select-none items-center justify-center whitespace-nowrap text-center font-black uppercase leading-none tracking-tight ${className}`}
      style={{
        color: "transparent",
        WebkitTextStroke: "0.08rem var(--ground)",
        fontFamily: "var(--font-display)",
      }}
    >
      {text}
    </p>
  );
}
