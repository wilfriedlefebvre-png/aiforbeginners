import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI for Beginners & Seniors",
  description: "Learn AI in simple, everyday language. Help for complete beginners and seniors to understand and use AI tools safely and confidently.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

