import { ArrowDownRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { copy, type Locale } from "@/data/translations";

export function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1 id="hero-title">Emmanuel<br />Schenoni<span>.</span></h1>
        <p className="hero-title">{t.hero.title}</p>
        <p className="hero-lead">{t.hero.lead}</p>
        <p className="hero-detail">{t.hero.detail}</p>
        <div className="hero-links">
          <a href={profile.social.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn <ArrowUpRight size={15} /></a>
          <a href={profile.social.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub <ArrowUpRight size={15} /></a>
          <a className="cv-link" href={profile.cv[locale]} download><ArrowDownRight size={17} />{t.hero.cv}</a>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true"><span>01</span><i /></div>
    </section>
  );
}
