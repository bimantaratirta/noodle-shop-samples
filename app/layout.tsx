import type { Metadata } from "next";
import "./globals.css";

/*
 * Root layout — intentionally opinion-free.
 *
 * No fonts, no colours, no ground. Every sample loads its own typefaces in its
 * own layout so the three can disagree completely. Anything added here is
 * inherited by all three and quietly contaminates the comparison.
 */

export const metadata: Metadata = {
  title: "The Beef Noodle Shop — design directions",
  description:
    "Design directions for The Beef Noodle Shop, Paradigm Mall PJ. Internal working document.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
