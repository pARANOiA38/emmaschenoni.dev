import { copy, type Locale } from "@/data/translations";
import { SectionIntro } from "./section-intro";

export function Education({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section id="education" className="section education">
      <SectionIntro label={t.education.label} title={t.education.title} />
      <div className="education-card">
        <p>Universidad Católica de Santiago del Estero</p>
        <h3>{t.education.degree}</h3>
        <span>{t.education.status}</span>
      </div>
    </section>
  );
}
