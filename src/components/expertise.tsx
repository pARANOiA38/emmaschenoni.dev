import { Sparkles } from "lucide-react";
import { skills } from "@/data/profile";
import { copy, type Locale } from "@/data/translations";
import { SectionIntro } from "./section-intro";

export function Expertise({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const skillNames = { backend: t.skills.backend, engineering: t.skills.engineering, tools: t.skills.tools };

  return (
    <section id="expertise" className="section">
      <SectionIntro label={t.skills.label} title={t.skills.title} />
      <div className="skills-grid">
        {skills.map(group => <article className="skill-group" key={group.key}><h3>{skillNames[group.key]}</h3><ul>{group.items.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}
      </div>
      <aside className="ai-support"><Sparkles size={17} aria-hidden="true" /><div><h3>{t.skills.aiTitle}</h3><p>{t.skills.aiBody}</p></div></aside>
    </section>
  );
}
