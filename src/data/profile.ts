export const profile = {
  name: "Emmanuel Schenoni",
  role: "Software Engineer · Backend",
  location: "",
  email: "YOUR_EMAIL@example.com", // Replace before publishing.
  social: {
    linkedin: "https://www.linkedin.com/in/emmaschenoni",
    github: "https://github.com/pARANOiA38",
  },
  cv: {
    es: "/cv/emmanuel-schenoni-cv-es.pdf",
    en: "/cv/emmanuel-schenoni-cv-en.pdf",
  },
} as const;

export const experience = [
  { company: "Mercado Libre", roles: { es: "Software Engineer", en: "Software Engineer" }, period: "2025 — Present", featured: true },
  { company: "Mercado Libre", roles: { es: "Software Developer", en: "Software Developer" }, period: "2023 — 2025", featured: true },
  { company: "BZA Group", roles: { es: "Full-stack Developer", en: "Full-stack Developer" }, period: "2022 — 2023", featured: false },
  { company: "CORMORAN S.A.", roles: { es: "IT Specialist", en: "IT Specialist" }, period: "2020 — 2022", featured: false },
  { company: "PCServiceRafaela", roles: { es: "IT Technician", en: "IT Technician" }, period: "2018 — 2022", featured: false },
  { company: "D.S.I Computación", roles: { es: "IT Technician", en: "IT Technician" }, period: "2017 — 2017", featured: false },
] as const;

export const skills = [
  { key: "backend", items: ["Go", "Java", "REST APIs", "Microservices"] },
  { key: "engineering", items: ["API Design", "Distributed Systems", "Scalability", "Performance", "Testing", "Observability", "OpenTelemetry", "API Security"] },
  { key: "tools", items: ["Git", "Docker", "AI-assisted Software Development", "Claude Code"] },
] as const;
