import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { experience, profile, skills } from "@/data/profile";
import { copy, type Locale } from "@/data/translations";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const SectionIntro = ({ label, title }: { label: string; title: string }) => <div className="section-intro"><p className="eyebrow">{label}</p><h2>{title}</h2></div>;

export function PortfolioPage({ locale }: { locale: Locale }) {
  const t = copy[locale]; const cv = profile.cv[locale]; const home = locale === "en" ? "/en" : "/";
  const skillNames = { backend: t.skills.backend, engineering: t.skills.engineering, tools: t.skills.tools };
  const emailReady = !profile.email.includes("YOUR_EMAIL");
  return <html lang={locale}><body><main>
    <header className="site-header"><a href={home} className="brand" aria-label="Emmanuel Schenoni home">ES<span>.</span></a><nav className="desktop-nav" aria-label="Main navigation">{t.nav.map(([label, target]) => <a href={`#${target}`} key={target}>{label}</a>)}</nav><div className="header-actions"><div className="language" aria-label="Language"><a href={locale === "en" ? "/" : undefined} className={locale === "es" ? "active" : ""} aria-current={locale === "es" ? "page" : undefined}>ES</a><span>/</span><a href={locale === "es" ? "/en" : undefined} className={locale === "en" ? "active" : ""} aria-current={locale === "en" ? "page" : undefined}>EN</a></div><ThemeToggle labels={t.theme} /><MobileNav links={t.nav} /></div></header>

    <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow">{t.hero.eyebrow}</p><h1 id="hero-title">Emmanuel<br />Schenoni<span>.</span></h1><p className="hero-title">{t.hero.title}</p><p className="hero-lead">{t.hero.lead}</p><p className="hero-detail">{t.hero.detail}</p><div className="hero-links"><a href={profile.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn <ArrowUpRight size={15} /></a><a href={profile.social.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub <ArrowUpRight size={15} /></a><a className="cv-link" href={cv} download><ArrowDownRight size={17} />{t.hero.cv}</a></div></div><div className="hero-index" aria-hidden="true"><span>01</span><i /></div></section>

    <section id="about" className="section split"><SectionIntro label={t.about.label} title={t.about.title} /><p className="large-copy">{t.about.body}</p></section>
    <section id="experience" className="section"><SectionIntro label={t.experience.label} title={t.experience.title} /><div className="experience-list">{experience.map((job, index) => <article className={`job ${job.featured ? "featured" : ""}`} key={`${job.company}-${job.period}`}><span className="job-number">0{index + 1}</span><div><h3>{job.company}</h3><p>{job.roles[locale]}</p>{job.company === "Mercado Libre" && index === 0 && <p className="job-description">{t.experience.mercado}</p>}</div><time>{job.period === "2025 — Present" ? `2025 — ${t.experience.current}` : job.period}</time></article>)}</div></section>
    <section id="impact" className="section impact"><SectionIntro label={t.impact.label} title={t.impact.title} /><div className="metrics">{t.impact.metrics.map(([metric, label]) => <div className="metric" key={label}><strong>{metric}</strong><span>{label}</span></div>)}</div><p className="section-note">{t.impact.note}</p></section>
    <section id="skills" className="section"><SectionIntro label={t.skills.label} title={t.skills.title} /><div className="skills-grid">{skills.map(group => <article className="skill-group" key={group.key}><h3>{skillNames[group.key]}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>
    <section className="section ai-section"><div><p className="eyebrow">{t.ai.label}</p><h2>{t.ai.title}</h2></div><p className="large-copy">{t.ai.body}</p></section>
    <section id="education" className="section education"><SectionIntro label={t.education.label} title={t.education.title} /><div className="education-card"><p>Universidad Católica de Santiago del Estero</p><h3>{t.education.degree}</h3><span>{t.education.status}</span></div></section>
    <section id="contact" className="contact"><p className="eyebrow">{t.contact.label}</p><h2>{t.contact.title}</h2><p>{t.contact.body}</p><div className="contact-links"><a href={profile.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href={profile.social.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>{emailReady ? <a href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a> : <span><Mail size={18} /> {t.contact.email}</span>}</div></section>
    <footer><span>© Emmanuel Schenoni</span><span>{t.footer}</span></footer>
  </main></body></html>;
}
