import type { Metadata } from "next";
import { Fraunces, Cabin } from "next/font/google";
import { getSample } from "@/lib/samples";
import "./theme.css";

/*
 * Typefaces are chosen as open substitutes for the reference's commercial pair:
 *
 *   ITC Cheltenham  → Fraunces   (old-style warmth, sturdy serifs, real character;
 *                                 also satisfies the brief's ask for a "confident,
 *                                 slightly characterful serif")
 *   Gill Sans Nova  → Cabin      (humanist sans drawn in the Johnston/Gill line)
 *
 * Loaded here, never in the root layout — see docs/03-konvensi.md.
 */

// Weight is left off deliberately: that loads Fraunces as a variable font, which
// is the only way `axes` is allowed. opsz lets the display sizes pick up the
// optical grade the reference's serif has at large sizes.
const display = Fraunces({
  variable: "--font-warisan-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const body = Cabin({
  variable: "--font-warisan-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sample = getSample("warisan");

export const metadata: Metadata = {
  title: `${sample.name} — The Beef Noodle Shop`,
  description: sample.thesis,
};

export default function WarisanLayout({ children }: LayoutProps<"/warisan">) {
  return (
    <div className={`theme-warisan ${display.variable} ${body.variable}`}>{children}</div>
  );
}
