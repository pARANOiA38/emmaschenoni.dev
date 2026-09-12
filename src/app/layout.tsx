import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmaschenoni.dev"),
  title: "Emmanuel Schenoni — Software Engineer",
  description: "Software Engineer enfocado en desarrollo backend, diseño de APIs y microservicios.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
