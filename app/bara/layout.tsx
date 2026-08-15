import type { Metadata } from "next";
import { getSample } from "@/lib/samples";
import "./theme.css";

const sample = getSample("bara");

export const metadata: Metadata = {
  title: `${sample.name} — The Beef Noodle Shop`,
  description: sample.thesis,
};

export default function BaraLayout({ children }: LayoutProps<"/bara">) {
  return <div className="theme-bara">{children}</div>;
}
