import { copy, type Locale } from "@/data/translations";
import { SectionIntro } from "./section-intro";

export function About({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section id="about" className="section split">
      <SectionIntro label={t.about.label} title={t.about.title} />
      <p className="large-copy">{t.about.body}</p>
    </section>
  );
}
