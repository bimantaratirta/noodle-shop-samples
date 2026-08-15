import type { Metadata } from "next";
import { getSample } from "@/lib/samples";
import "./theme.css";

const sample = getSample("terang");

export const metadata: Metadata = {
  title: `${sample.name} — The Beef Noodle Shop`,
  description: sample.thesis,
};

export default function TerangLayout({ children }: LayoutProps<"/terang">) {
  return <div className="theme-terang">{children}</div>;
}
