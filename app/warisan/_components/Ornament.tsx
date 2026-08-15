/**
 * The row of small diamonds the reference sets under its wordmark and between
 * sections. Cheap to draw, and it does a lot of the "considered in every detail"
 * work the brief asks for.
 */
export function Ornament({ count = 9, className = "" }: { count?: number; className?: string }) {
  return (
    <span className={`flex items-center justify-center gap-[5px] ${className}`} aria-hidden>
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="block h-[3px] w-[3px] rotate-45"
          style={{ background: "currentColor", opacity: 0.55 }}
        />
      ))}
    </span>
  );
}
