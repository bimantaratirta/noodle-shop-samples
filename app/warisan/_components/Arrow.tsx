/**
 * The long-tailed ornamental arrow the reference uses on "explore" links and
 * inside tile labels on hover. Drawn rather than imported: a bar-and-tail head
 * with a long thin shaft, which is what gives it the engraved, letterpress feel.
 */
export function Arrow({ className = "", width = 62 }: { className?: string; width?: number }) {
  return (
    <svg
      className={className}
      width={width}
      height="10"
      viewBox="0 0 62 10"
      fill="none"
      aria-hidden
    >
      {/* shaft */}
      <path d="M0 5h58" stroke="currentColor" strokeWidth="1" />
      {/* head */}
      <path d="M53 1l7 4-7 4" stroke="currentColor" strokeWidth="1" fill="none" />
      {/* the small tail bar that makes it read as a printer's mark */}
      <path d="M0 2v6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
