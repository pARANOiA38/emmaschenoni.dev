import { experience } from "@/data/profile";
import { copy, type Locale } from "@/data/translations";
import { SectionIntro } from "./section-intro";

export function Experience({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <section id="experience" className="section">
      <SectionIntro label={t.experience.label} title={t.experience.title} />
      <p className="career-intro">{t.experience.intro}</p>
      <div className="experience-list">
        {experience.map((job, index) => (
          <article className={`job ${job.featured ? "featured" : ""}`} key={`${job.company}-${job.period}`}>
            <span className="job-number">0{index + 1}</span>
            <div>
              <h3>{job.company}</h3>
              <p>{job.roles[locale]}</p>
              <p className="job-description">{t.experience.items[job.id]}</p>
            </div>
            <time>{job.period === "2025 — Present" ? `2025 — ${t.experience.current}` : job.period}</time>
          </article>
        ))}
      </div>
    </section>
  );
}
