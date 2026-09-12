export type Locale = "es" | "en";

export const copy = {
  es: {
    nav: [["Sobre mí", "about"], ["Experiencia", "experience"], ["Impacto", "impact"], ["Skills", "skills"], ["Educación", "education"], ["Contacto", "contact"]],
    hero: { eyebrow: "Software Engineer · Backend", title: "Construyo servicios sólidos para sistemas que importan.", lead: "Software Engineer enfocado en desarrollo backend, diseño de APIs y microservicios.", detail: "Actualmente trabajo en Mercado Libre, dentro del dominio de Créditos, desarrollando soluciones de gestión de deuda, acuerdos de pago e integraciones entre servicios y equipos.", cv: "Descargar CV" },
    about: { label: "Perfil", title: "Ingeniería backend con una mirada práctica.", body: "Diseño y desarrollo servicios que priorizan claridad, confiabilidad y evolución. Mi trabajo abarca APIs, microservicios y sistemas distribuidos, con foco en escalabilidad, observabilidad, calidad técnica y colaboración entre equipos." },
    experience: { label: "Trayectoria", title: "Experiencia profesional", current: "Actualidad", mercado: "En Mercado Libre contribuyo al desarrollo backend en Créditos: APIs y microservicios para gestión de deuda, acuerdos de pago e integraciones. El trabajo contempla diseño técnico, seguridad de APIs, observabilidad, rendimiento, despliegues productivos, análisis de incidentes y postmortems, sin exponer información confidencial." },
    impact: { label: "Impacto", title: "Algunos resultados seleccionados.", note: "Indicadores seleccionados de experiencia profesional; no representan necesariamente el alcance de toda mi trayectoria.", metrics: [["+1M", "acuerdos de pago"], ["100%", "puntaje de seguridad de APIs"], ["~1.5 h", "recuperación ante incidentes"], ["Multi-país", "iniciativas de Créditos"]] },
    skills: { label: "Stack", title: "Tecnología y práctica", backend: "Backend", engineering: "Ingeniería", tools: "Herramientas y prácticas" },
    ai: { label: "Flujo de trabajo", title: "Desarrollo asistido por IA, aplicado con criterio.", body: "Integro IA en análisis, especificaciones técnicas, implementación, pruebas, revisión de código y toma de decisiones. Claude Code es una herramienta central de este flujo para mejorar productividad, velocidad de entrega, documentación y calidad de código." },
    education: { label: "Educación", title: "Formación", degree: "Ingeniería Informática", status: "Cursado completo · Tesis pendiente" },
    contact: { label: "Contacto", title: "Hablemos.", body: "Para conversar sobre ingeniería, colaboración o una oportunidad profesional.", email: "Email pendiente de configurar" },
    footer: "Hecho con Next.js", theme: { light: "Usar tema claro", dark: "Usar tema oscuro" }
  },
  en: {
    nav: [["About", "about"], ["Experience", "experience"], ["Impact", "impact"], ["Skills", "skills"], ["Education", "education"], ["Contact", "contact"]],
    hero: { eyebrow: "Software Engineer · Backend", title: "Building dependable services for systems that matter.", lead: "Software Engineer focused on backend development, API design and microservices.", detail: "I currently work at Mercado Libre in the Credits domain, building solutions for debt management, payment agreements and integrations across services and teams.", cv: "Download Resume" },
    about: { label: "Profile", title: "Backend engineering with a practical perspective.", body: "I design and build services that prioritize clarity, reliability and long-term evolution. My work spans APIs, microservices and distributed systems, with a focus on scalability, observability, technical quality and cross-team collaboration." },
    experience: { label: "Career", title: "Professional experience", current: "Present", mercado: "At Mercado Libre, I contribute to backend development in Credits: APIs and microservices for debt management, payment agreements and integrations. The work includes technical design, API security, observability, performance, production deployments, incident analysis and postmortems—without disclosing confidential information." },
    impact: { label: "Impact", title: "A selection of outcomes.", note: "Selected indicators from professional experience; they do not necessarily represent the scope of my full career.", metrics: [["+1M", "payment agreements"], ["100%", "API security score"], ["~1.5h", "incident recovery"], ["Multi-country", "Credits initiatives"]] },
    skills: { label: "Stack", title: "Technology and practice", backend: "Backend", engineering: "Engineering", tools: "Tools & practices" },
    ai: { label: "Workflow", title: "AI-assisted development, used with intent.", body: "I integrate AI into analysis, technical specifications, implementation, testing, code review and technical decision-making. Claude Code is a central tool in this workflow to improve productivity, delivery speed, documentation and code quality." },
    education: { label: "Education", title: "Education", degree: "Computer Engineering", status: "Coursework completed · Thesis pending" },
    contact: { label: "Contact", title: "Let's build something.", body: "For engineering conversations, collaboration or a professional opportunity.", email: "Email to be configured" },
    footer: "Built with Next.js", theme: { light: "Use light theme", dark: "Use dark theme" }
  }
} as const;
