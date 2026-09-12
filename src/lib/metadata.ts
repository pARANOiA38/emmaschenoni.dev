import type { Metadata } from "next";
import type { Locale } from "@/data/translations";

export function pageMetadata(locale: Locale): Metadata {
  const isEnglish = locale === "en";
  const description = isEnglish
    ? "Software Engineer focused on backend development, API design and microservices."
    : "Software Engineer enfocado en desarrollo backend, diseño de APIs y microservicios.";
  const path = isEnglish ? "/en" : "/";
  return {
    title: "Emmanuel Schenoni — Software Engineer",
    description,
    alternates: { canonical: path, languages: { es: "/", en: "/en" } },
    openGraph: { type: "website", locale: isEnglish ? "en_US" : "es_AR", url: path, title: "Emmanuel Schenoni — Software Engineer", description, siteName: "Emmanuel Schenoni" },
    twitter: { card: "summary", title: "Emmanuel Schenoni — Software Engineer", description },
  };
}
