import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { getSample } from "@/lib/samples";
import "./theme.css";

/*
 * One family, two weight ranges — "sama dengan display, beda weight" per
 * docs/02-arah-desain.md. Bound to the CSS variable names theme.css already
 * declares fallbacks for, so theme.css itself never needs to change.
 */
const archivoDisplay = Archivo({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-terang-display",
});

const archivoBody = Archivo({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-terang-body",
});

const sample = getSample("terang");

export const metadata: Metadata = {
  title: `${sample.name} — The Beef Noodle Shop`,
  description: sample.thesis,
};

export default function TerangLayout({ children }: LayoutProps<"/terang">) {
  return (
    <div className={`theme-terang ${archivoDisplay.variable} ${archivoBody.variable}`}>
      {children}
    </div>
  );
}
