import type { Metadata } from "next";
import { getSample } from "@/lib/samples";
import "./theme.css";

/*
 * Each sample owns its own layout. This is where its typefaces get loaded
 * (via next/font) once they are chosen — never in the root layout, or all
 * three directions end up sharing type and the comparison collapses.
 */

const sample = getSample("kaldu");

export const metadata: Metadata = {
  title: `${sample.name} — The Beef Noodle Shop`,
  description: sample.thesis,
};

export default function KalduLayout({ children }: LayoutProps<"/kaldu">) {
  return <div className="theme-kaldu">{children}</div>;
}
