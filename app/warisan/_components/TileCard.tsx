"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Arrow } from "./Arrow";

/**
 * A tile from the three-way router.
 *
 * The still is what you see at rest; hovering fades a muted clip in over it and
 * plays it, and leaving fades it back out and rewinds. That hover-to-play is a
 * detail the earlier pass missed — it had only the arrow and a slight zoom.
 *
 * PLACEHOLDER LIMITATION: all three tiles currently share one clip, because one
 * clip is all we have. Each tile wants its own — noted in
 * public/placeholder/README.md.
 */

export function TileCard({
  title,
  subtitle,
  href,
  image,
  video,
}: {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  video?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const enter = () => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPlaying(true);
    // play() rejects if the browser blocks it; nothing to do but stay on the still.
    void v.play().catch(() => setPlaying(false));
  };

  const leave = () => {
    const v = ref.current;
    setPlaying(false);
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <a
      href={href}
      className="group relative block aspect-[3/4] overflow-hidden"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={leave}
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width: 640px) 100vw, 400px"
        className="object-cover"
        style={{ transition: "transform 0.7s var(--ease)" }}
      />

      {video && (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            opacity: playing ? 1 : 0,
            transition: "opacity 0.5s var(--ease)",
          }}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden
        >
          <source src={video} type="video/mp4" />
        </video>
      )}

      <span className="plate absolute inset-x-6 bottom-7 block px-4 py-4 text-center group-hover:pb-7">
        <span className="display-wide block text-[15px] sm:text-[17px]">{title}</span>
        <span
          className="mt-1.5 block text-[13px] italic leading-snug"
          style={{ color: "var(--ink-muted)" }}
        >
          {subtitle}
        </span>
        <span className="plate-arrow mt-2 flex justify-center overflow-hidden">
          <Arrow />
        </span>
      </span>
    </a>
  );
}
