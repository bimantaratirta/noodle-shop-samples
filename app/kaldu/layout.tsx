import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { getSample } from "@/lib/samples";
import "./theme.css";

/*
 * The reference pairs Playfair Display with Inter, and both are free on Google
 * Fonts — so unlike the Warisan direction, which needed open substitutes for two
 * commercial faces, this one can match exactly.
 *
 * Inter is loaded from weight 400 up: the reference uses 300 at sizes down to
 * 9px, which is most of why its small type is hard to read.
 */

const display = Playfair_Display({
  variable: "--font-kaldu-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Inter({
  variable: "--font-kaldu-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
