import type { Metadata } from "next";
import { Instrument_Serif, Newsreader } from "next/font/google";
import { getSample } from "@/lib/samples";
import "./theme.css";

/*
 * Deliberately NOT the reference's pair.
 *
 * It runs Playfair Display + Inter — between them the two most-used faces on the
 * web. Playfair is the default answer to "elegant serif" and Inter is the most
 * anonymous UI sans there is. Matching them exactly is what made the first pass
 * read as templated: correct, and completely voiceless.
 *
 *   Instrument Serif — the display face. High contrast, tight, an italic with
 *   real swagger. Reads editorial rather than "wedding invitation".
 *
 *   Newsreader — everything else, including the letterspaced caps labels. A warm
 *   old-style with quirks in the g and the a, drawn for reading on screen.
 *
 * Both are serifs, which is the point: no neutral sans anywhere means no part of
 * the page can fall back to looking like an admin panel. The brief asks for
 * "warm and classy, never sterile" and warns off "a generic sans that could
 * belong to any cafe".
 */

const display = Instrument_Serif({
  variable: "--font-kaldu-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Newsreader({
  variable: "--font-kaldu-body",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const sample = getSample("kaldu");

export const metadata: Metadata = {
  title: `${sample.name} — The Beef Noodle Shop`,
  description: sample.thesis,
};

export default function KalduLayout({ children }: LayoutProps<"/kaldu">) {
  return (
    <div className={`theme-kaldu ${display.variable} ${body.variable}`}>{children}</div>
  );
}
